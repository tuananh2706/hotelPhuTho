import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import styles from './BlogDetail.module.scss';
import { useFetchBlogByIdQuery } from '~/apis/Blogs.api';
// import { useFetchRecentBlogsQuery } from '~/apis/Blogs.api';
// import { Link } from 'react-router-dom';

const classBind = classNames.bind(styles);

function BlogDetails() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data, error } = useFetchBlogByIdQuery(id!);

    if (error) console.log(error);

    if (!data) return <div>No blog found.</div>;

    // const { data: recentBlogsData } = useFetchRecentBlogsQuery(4);

    return (
        <div className={classBind('container')}>
            <article className={classBind('post')}>
                <h1 className={classBind('post__heading')}>{data?.title}</h1>
                <p className={classBind('post__author')}>
                    by {data?.author} in on {data?.postedDate}
                </p>
                <div className={classBind('post__img-wrap')}>
                    <img
                        src={data?.image}
                        alt=''
                        className={classBind('post__img')}
                    />
                </div>

                <div className={classBind('post-content')}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data?.content || ''
                        }}
                    />
                </div>

                <section className={classBind('post-relate')}>
                    <h2 className={classBind('post-relate__heading')}>
                        Bài viết liên quan
                    </h2>
                    <div className={classBind('post-relate__list')}>
                        <div
                            className={classBind(
                                'row gx-2 gx-xl-1 gy-xl-2 gy-md-1'
                            )}
                        >
                            {/* thêm post */}
                            {/* {recentBlogsData?.map((Blog) => {
                                return (
                                    <li key={Blog.id}>
                                        <article
                                            className={classBind(
                                                'new-blog__item'
                                            )}
                                        >
                                            <div
                                                className={classBind(
                                                    'new-blog__img-wrap'
                                                )}
                                            >
                                                <Link
                                                    to={`/blog-details?id=${Blog.id}`}
                                                >
                                                    <img
                                                        src={Blog.image}
                                                        alt=''
                                                        className={classBind(
                                                            'new-blog__img'
                                                        )}
                                                    />
                                                </Link>
                                            </div>

                                            <div
                                                className={classBind(
                                                    'new-blog__info'
                                                )}
                                            >
                                                <Link
                                                    to={`/blog-details?id=${Blog.id}`}
                                                >
                                                    <h3
                                                        className={classBind(
                                                            'new-blog__title'
                                                        )}
                                                    >
                                                        {Blog.title}
                                                    </h3>
                                                </Link>
                                                <div
                                                    className={classBind(
                                                        'new-blog__data'
                                                    )}
                                                >
                                                    <p
                                                        className={classBind(
                                                            'new-blog__view'
                                                        )}
                                                    >
                                                        10N lượt xem
                                                    </p>
                                                    <div
                                                        className={classBind(
                                                            'new-blog__dot'
                                                        )}
                                                    ></div>
                                                    <p
                                                        className={classBind(
                                                            'new-blog__view'
                                                        )}
                                                    >
                                                        {Blog.postedDate}
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </li>
                                );
                            })} */}
                        </div>
                    </div>
                </section>
            </article>
        </div>
    );
}

export default BlogDetails;
