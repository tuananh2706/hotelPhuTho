import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    collection,
    getDocs,
    doc,
    getDoc,
    orderBy,
    limit,
    query,
    where
} from 'firebase/firestore';
import { db } from '~/firebaseConfig';
import { Blog, BlogResponse } from '~/utils/types';

function convertToValidDate(dateString: string): string {
    const parts = dateString.split('/');
    if (parts.length === 3) {
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return dateString;
}

const blogsApi = createApi({
    reducerPath: 'blogsApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        fetchBlogsPaginated: builder.query<
            BlogResponse,
            { page: number; limit: number; tag?: string }
        >({
            async queryFn({ page, limit, tag }) {
                try {
                    const blogsCollection = collection(db, 'Blog');
                    let blogsQuery = query(
                        blogsCollection,
                        orderBy('postedDate', 'desc')
                    );

                    if (tag) {
                        blogsQuery = query(
                            blogsQuery,
                            where('tags', 'array-contains', tag)
                        );
                    }

                    const blogsSnapshot = await getDocs(blogsQuery);

                    const allBlogs: Blog[] = blogsSnapshot.docs.map((doc) => {
                        const data = doc.data();
                        let postedDate: string;

                        if (data.postedDate) {
                            const validDateString = convertToValidDate(
                                data.postedDate
                            );
                            const date = new Date(validDateString);

                            if (!isNaN(date.getTime())) {
                                postedDate = date.toISOString().split('T')[0];
                            } else {
                                console.error(
                                    `Invalid postedDate value: ${data.postedDate}`
                                );
                                postedDate = 'Invalid date';
                            }
                        } else {
                            console.error('postedDate is missing or undefined');
                            postedDate = 'Invalid date';
                        }

                        return {
                            id: doc.id,
                            ...data,
                            postedDate
                        } as Blog;
                    });

                    const start = (page - 1) * limit;
                    const end = start + limit;
                    const paginatedBlogs = allBlogs.slice(start, end);

                    return {
                        data: {
                            blogs: paginatedBlogs,
                            total: allBlogs.length
                        } as BlogResponse
                    };
                } catch (error) {
                    return { error: { message: (error as Error).message } };
                }
            }
        }),

        fetchBlogById: builder.query<Blog, string>({
            queryFn: async (id) => {
                try {
                    const blogDoc = doc(db, 'Blog', id);
                    const blogSnapshot = await getDoc(blogDoc);

                    if (blogSnapshot.exists()) {
                        const data = blogSnapshot.data();
                        let postedDate: string;

                        if (data?.postedDate) {
                            const validDateString = convertToValidDate(
                                data.postedDate
                            );
                            const date = new Date(validDateString);

                            if (!isNaN(date.getTime())) {
                                postedDate = date.toISOString().split('T')[0];
                            } else {
                                postedDate = 'Invalid date';
                            }
                        } else {
                            postedDate = 'Invalid date';
                        }

                        const blogData = {
                            id: blogSnapshot.id,
                            ...data,
                            postedDate
                        } as Blog;

                        return { data: blogData };
                    } else {
                        return { error: { message: 'Blog not found' } };
                    }
                } catch (error) {
                    return { error: { message: (error as Error).message } };
                }
            }
        }),

        fetchRecentBlogs: builder.query<Blog[], number | undefined>({
            queryFn: async (num) => {
                try {
                    const blogsCollection = collection(db, 'Blog');
                    const recentBlogsQuery = query(
                        blogsCollection,
                        orderBy('postedDate', 'desc'),
                        limit(num ?? 3)
                    );

                    const blogsSnapshot = await getDocs(recentBlogsQuery);

                    const recentBlogs: Blog[] = blogsSnapshot.docs.map(
                        (doc) => {
                            const data = doc.data();
                            let postedDate: string;

                            if (data?.postedDate) {
                                const validDateString = convertToValidDate(
                                    data.postedDate
                                );
                                const date = new Date(validDateString);

                                if (!isNaN(date.getTime())) {
                                    postedDate = date
                                        .toISOString()
                                        .split('T')[0];
                                } else {
                                    postedDate = 'Invalid date';
                                }
                            } else {
                                postedDate = 'Invalid date';
                            }

                            return {
                                id: doc.id,
                                ...data,
                                postedDate
                            } as Blog;
                        }
                    );

                    return { data: recentBlogs };
                } catch (error) {
                    return { error: { message: (error as Error).message } };
                }
            }
        }),

        fetchBlogsByDate: builder.query<
            BlogResponse,
            { date: string; tag?: string }
        >({
            async queryFn({ date, tag }) {
                try {
                    const blogsCollection = collection(db, 'Blog');

                    // Kiểm tra xem ngày có hợp lệ không
                    const formattedDate = new Date(date);
                    if (isNaN(formattedDate.getTime())) {
                        return { error: { message: 'Ngày không hợp lệ' } };
                    }

                    const formattedDateString = formattedDate
                        .toISOString()
                        .split('T')[0]; // Lấy phần ngày (YYYY-MM-DD)

                    let blogsQuery = query(
                        blogsCollection,
                        where('postedDate', '==', formattedDateString)
                    );

                    if (tag) {
                        blogsQuery = query(
                            blogsQuery,
                            where('tags', 'array-contains', tag)
                        );
                    }

                    const blogsSnapshot = await getDocs(blogsQuery);

                    const blogs: Blog[] = blogsSnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    })) as Blog[];

                    return { data: { blogs, total: blogs.length } };
                } catch (error) {
                    return {
                        error: {
                            message:
                                (error as Error).message || 'Đã có lỗi xảy ra'
                        }
                    };
                }
            }
        }),

        fetchBlogsByTitle: builder.query<BlogResponse, { title: string }>({
            async queryFn({ title }) {
                try {
                    const blogsCollection = collection(db, 'Blog');

                    const titleLowerCase = title.toLowerCase();

                    const blogsQuery = query(
                        blogsCollection,
                        where('title_lowercase', '>=', titleLowerCase),
                        where(
                            'title_lowercase',
                            '<=',
                            titleLowerCase + '\uf8ff'
                        )
                    );

                    const blogsSnapshot = await getDocs(blogsQuery);

                    const blogs: Blog[] = blogsSnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    })) as Blog[];

                    return { data: { blogs, total: blogs.length } };
                } catch (error) {
                    return { error: { message: (error as Error).message } };
                }
            }
        })
    })
});

export const {
    useFetchBlogsPaginatedQuery,
    useFetchBlogByIdQuery,
    useFetchRecentBlogsQuery,
    useFetchBlogsByDateQuery,
    useFetchBlogsByTitleQuery
} = blogsApi;
export default blogsApi;
