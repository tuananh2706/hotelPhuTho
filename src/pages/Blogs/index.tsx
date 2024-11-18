import classNames from 'classnames/bind';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
<<<<<<< HEAD
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
=======
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d

import TitleMain from '~/components/TitleMain';
import styles from './Blogs.module.scss';
import icon from '~/assets/icons';
<<<<<<< HEAD
// import image from '~/assets/images';
import PostItem from '~/components/PostItem';
import {
    useFetchBlogsPaginatedQuery,
    useFetchRecentBlogsQuery
} from '~/apis/Blogs.api';
import { Blog } from '~/utils/types';
import Button from '~/components/Button';
=======
import image from '~/assets/images';
import PostItem from '~/components/PostItem';
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d

const classBind = classNames.bind(styles);

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

function Blogs() {
<<<<<<< HEAD
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [tag, setTag] = useState<string | undefined>();
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const toggleFilter = () => {
        setIsFilterOpen((prev) => !prev);
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        const updateLimit = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setLimit(6);
            } else if (width <= 992) {
                setLimit(9);
            } else {
                setLimit(12);
            }
        };

        updateLimit();
        window.addEventListener('resize', updateLimit);

        return () => window.removeEventListener('resize', updateLimit);
    }, []);

    const { data: Blog } = useFetchBlogsPaginatedQuery({
        page,
        limit,
        tag
    });

    const { data: recentBlogsData } = useFetchRecentBlogsQuery(5);

    if (!Blog) {
        return <div>No data available</div>;
    }

    const totalPages = Math.ceil(Blog.total / limit);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };
=======
    const posts = [
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_3
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_1
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_2
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_4
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_5
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_6
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_7
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_8
        },
        {
            title: 'Liên hoan Ẩm thực Đất Phương Nam 2019 có gì mới?',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_9
        },
        {
            title: 'Liên hoan Ẩm thực Đất Phương Nam 2019 có gì mới?',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_10
        },
        {
            title: 'Liên hoan Ẩm thực Đất Phương Nam 2019 có gì mới?',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_11
        },
        {
            title: 'Màn hình nước Singapore sẽ có tại Đầm Sen vào 27/4/2019',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_12
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_3
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_1
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_2
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_4
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_5
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_6
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_7
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_8
        },
        {
            title: 'Liên hoan Ẩm thực Đất Phương Nam 2019 có gì mới?',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_9
        },
        {
            title: 'Liên hoan Ẩm thực Đất Phương Nam 2019 có gì mới?',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_10
        },
        {
            title: 'Liên hoan Ẩm thực Đất Phương Nam 2019 có gì mới?',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_11
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_1
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_2
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_4
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_5
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_6
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_7
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_8
        },
        {
            title: 'Liên hoan Ẩm thực Đất Phương Nam 2019 có gì mới?',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_9
        },
        {
            title: 'Liên hoan Ẩm thực Đất Phương Nam 2019 có gì mới?',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_10
        },
        {
            title: 'Liên hoan Ẩm thực Đất Phương Nam 2019 có gì mới?',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_11
        },
        {
            title: 'Màn hình nước Singapore sẽ có tại Đầm Sen vào 27/4/2019',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_12
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_3
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_1
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_2
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_4
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_5
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_6
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_7
        },
        {
            title: 'Thông báo: đấu giá giữ xe tại CVHH Đầm Sen',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_8
        },
        {
            title: 'Liên hoan Ẩm thực Đất Phương Nam 2019 có gì mới?',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_9
        },
        {
            title: 'Liên hoan Ẩm thực Đất Phương Nam 2019 có gì mới?',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_10
        },
        {
            title: 'Liên hoan Ẩm thực Đất Phương Nam 2019 có gì mới?',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_11
        },
        {
            title: 'Màn hình nước Singapore sẽ có tại Đầm Sen vào 27/4/2019',
            tags: [
                { name: 'Sự kiện' },
                { name: 'Thông báo' },
                { name: 'Tin tức' }
            ],
            view: '10N',
            postDate: '20/02/2022',
            image: image.blog_img_12
        }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(posts.length / itemsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const canGoBack = currentPage > 1;
    const canGoForward = currentPage < totalPages;
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
    return (
        <div className={classBind('blog')}>
            <div className={classBind('container')}>
                <div className={classBind('blog-intro')}>
                    <div className={classBind('blog-intro__heading')}>
                        <TitleMain text='BÀI VIẾT' />
                    </div>

                    <div className={classBind('blog-intro__inner')}>
                        <div className={classBind('row gy-lg-3')}>
                            <div
                                className={classBind(
                                    'col-9 col-xxl-8 col-lg-12'
                                )}
                            >
<<<<<<< HEAD
                                <section>
                                    <Carousel
                                        arrows
                                        autoplay
                                        autoplaySpeed={2000}
                                        className='blog-slider'
                                    >
                                        {recentBlogsData?.map((blog) => {
                                            return (
                                                <div key={blog.id}>
                                                    <div
                                                        className={classBind(
                                                            'blog-slider__img-wrap'
                                                        )}
                                                    >
                                                        <Link
                                                            to={`/blog-details?id=${blog.id}`}
                                                        >
                                                            <img
                                                                src={blog.image}
                                                                alt=''
                                                                className={classBind(
                                                                    'blog-slider__img'
                                                                )}
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div
                                                        className={classBind(
                                                            'blog-slider__content'
                                                        )}
                                                    >
                                                        <div
                                                            className={classBind(
                                                                'blog-slider__info'
                                                            )}
                                                        >
                                                            <Link
                                                                to={`/blog-details?id=${blog.id}`}
                                                            >
                                                                <h2
                                                                    className={classBind(
                                                                        'blog-slider__heading'
                                                                    )}
                                                                >
                                                                    {blog.title}
                                                                </h2>
                                                            </Link>
                                                            <p
                                                                className={classBind(
                                                                    'blog-slider__desc',
                                                                    'd-md-none'
                                                                )}
                                                            >
                                                                Thông báo đấu
                                                                giá giữ xe tại
                                                                CVHH Đầm
                                                                SenThông báo đấu
                                                                giá giữ xe tại
                                                                CVHH Đầm
                                                                SenThông báo đấu
                                                                giá giữ xe tại
                                                                CVHH Đầm
                                                                SenThông báo đấu
                                                                giá giữ xe tại
                                                                CVHH Đầm
                                                                SenThông báo đấu
                                                                giá giữ xe tại
                                                                CVHH Đầm
                                                                SenThông báo đấu
                                                                giá giữ xe tại
                                                                CVHH Đầm Sen
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </Carousel>
=======
                                <section className={classBind('blog-slider')}>
                                    <div
                                        className={classBind(
                                            'blog-slider__img-wrap'
                                        )}
                                    >
                                        <img
                                            src={image.post_img_1}
                                            alt=''
                                            className={classBind(
                                                'blog-slider__img'
                                            )}
                                        />
                                    </div>
                                    <div
                                        className={classBind(
                                            'blog-slider__content'
                                        )}
                                    >
                                        <div
                                            className={classBind(
                                                'blog-slider__info'
                                            )}
                                        >
                                            <h2
                                                className={classBind(
                                                    'blog-slider__heading'
                                                )}
                                            >
                                                Thông báo mời chào giá cạnh
                                                tranh cung cấp nước đá chế tác
                                                Băng Đăng
                                            </h2>
                                            <p
                                                className={classBind(
                                                    'blog-slider__desc',
                                                    'd-md-none'
                                                )}
                                            >
                                                THÔNG BÁO MỜI CHÀO GIÁ CẠNH
                                                TRANH CÔNG TY CỔ PHẦN DỊCH VỤ DU
                                                LỊCH PHÚ THỌ tổ chức chào giá
                                                cạnh tranh lựa chọn đơn vị Cung
                                                cấp nước đá để chế tác Băng Đăng
                                                tại Công viên Văn hóa Đầm Sen.
                                            </p>
                                        </div>

                                        <div
                                            className={classBind(
                                                'blog-slider__act'
                                            )}
                                        >
                                            <div
                                                className={classBind(
                                                    'blog-slider__move'
                                                )}
                                            >
                                                <button
                                                    className={classBind(
                                                        'blog-slider__btn'
                                                    )}
                                                >
                                                    <img
                                                        src={icon.prev_prev}
                                                        alt=''
                                                        className={classBind(
                                                            'blog-slider__btn-prev'
                                                        )}
                                                    />
                                                </button>
                                                <button
                                                    className={classBind(
                                                        'blog-slider__btn'
                                                    )}
                                                >
                                                    <img
                                                        src={icon.prev_next}
                                                        alt=''
                                                        className={classBind(
                                                            'blog-slider__btn-next'
                                                        )}
                                                    />
                                                </button>
                                            </div>

                                            <div
                                                className={classBind(
                                                    'blog-slider__paginate'
                                                )}
                                            >
                                                <div
                                                    className={classBind(
                                                        // 'blog-slider__page',
                                                        'blog-slider__page--active'
                                                    )}
                                                ></div>
                                                <div
                                                    className={classBind(
                                                        'blog-slider__page'
                                                    )}
                                                ></div>
                                                <div
                                                    className={classBind(
                                                        'blog-slider__page'
                                                    )}
                                                ></div>
                                                <div
                                                    className={classBind(
                                                        'blog-slider__page'
                                                    )}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                </section>
                            </div>

                            <div
                                className={classBind(
                                    'col-3 col-xxl-4 col-lg-12'
                                )}
                            >
                                <section className={classBind('new-blog')}>
                                    <h2
                                        className={classBind(
                                            'new-blog__heading'
                                        )}
                                    >
                                        Bài mới nhất
                                    </h2>
                                    <ul className={classBind('new-blog__list')}>
<<<<<<< HEAD
                                        {recentBlogsData?.map((Blog) => {
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
                                                                    src={
                                                                        Blog.image
                                                                    }
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
                                                                    {
                                                                        Blog.postedDate
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </li>
                                            );
                                        })}
=======
                                        <li>
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
                                                    <img
                                                        src={image.post_img_1}
                                                        alt=''
                                                        className={classBind(
                                                            'new-blog__img'
                                                        )}
                                                    />
                                                </div>

                                                <div
                                                    className={classBind(
                                                        'new-blog__info'
                                                    )}
                                                >
                                                    <h3
                                                        className={classBind(
                                                            'new-blog__title'
                                                        )}
                                                    >
                                                        Thông báo đấu giá giữ xe
                                                        tại CVHH Đầm Sen
                                                    </h3>
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
                                                            20/02/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </li>

                                        <li>
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
                                                    <img
                                                        src={image.post_img_2}
                                                        alt=''
                                                        className={classBind(
                                                            'new-blog__img'
                                                        )}
                                                    />
                                                </div>

                                                <div
                                                    className={classBind(
                                                        'new-blog__info'
                                                    )}
                                                >
                                                    <h3
                                                        className={classBind(
                                                            'new-blog__title'
                                                        )}
                                                    >
                                                        Thông báo đấu giá giữ xe
                                                        tại CVHH Đầm Sen
                                                    </h3>
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
                                                            20/02/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </li>

                                        <li>
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
                                                    <img
                                                        src={image.post_img_1}
                                                        alt=''
                                                        className={classBind(
                                                            'new-blog__img'
                                                        )}
                                                    />
                                                </div>

                                                <div
                                                    className={classBind(
                                                        'new-blog__info'
                                                    )}
                                                >
                                                    <h3
                                                        className={classBind(
                                                            'new-blog__title'
                                                        )}
                                                    >
                                                        Thông báo đấu giá giữ xe
                                                        tại CVHH Đầm Sen
                                                    </h3>
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
                                                            20/02/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </li>

                                        <li>
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
                                                    <img
                                                        src={image.post_img_2}
                                                        alt=''
                                                        className={classBind(
                                                            'new-blog__img'
                                                        )}
                                                    />
                                                </div>

                                                <div
                                                    className={classBind(
                                                        'new-blog__info'
                                                    )}
                                                >
                                                    <h3
                                                        className={classBind(
                                                            'new-blog__title'
                                                        )}
                                                    >
                                                        Thông báo đấu giá giữ xe
                                                        tại CVHH Đầm Sen
                                                    </h3>
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
                                                            20/02/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </li>

                                        <li>
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
                                                    <img
                                                        src={image.blog_img_3}
                                                        alt=''
                                                        className={classBind(
                                                            'new-blog__img'
                                                        )}
                                                    />
                                                </div>

                                                <div
                                                    className={classBind(
                                                        'new-blog__info'
                                                    )}
                                                >
                                                    <h3
                                                        className={classBind(
                                                            'new-blog__title'
                                                        )}
                                                    >
                                                        Thông báo đấu giá giữ xe
                                                        tại CVHH Đầm Sen
                                                    </h3>
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
                                                            20/02/2022
                                                        </p>
                                                    </div>
                                                </div>
                                            </article>
                                        </li>
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classBind('blog-main')}>
                    <div className={classBind('row')}>
                        <div className={classBind('col-3 d-xl-none')}>
<<<<<<< HEAD
                            <div
                                className={classBind({
                                    'd-xl-none': !isFilterOpen
                                })}
                            >
=======
                            <div className={classBind('blog-topic')}>
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                <h2
                                    className={classBind('blog-topic__heading')}
                                >
                                    CHỦ ĐỀ BÀI VIẾT
                                </h2>
                                <ul className={classBind('blog-topic__list')}>
<<<<<<< HEAD
                                    <Link
                                        to='#'
                                        onClick={() => {
                                            console.log(tag);
                                            if (tag === 'Giới thiệu') {
                                                setTag(undefined);
                                            } else {
                                                setTag('Giới thiệu');
                                            }
                                        }}
                                    >
                                        <li
                                            className={classBind(
                                                'blog-topic__item',
                                                {
                                                    'blog-topic__item--active':
                                                        tag === 'Giới thiệu'
                                                }
                                            )}
                                            onClick={toggleFilter}
=======
                                    <Link to='#'>
                                        <li
                                            className={classBind(
                                                'blog-topic__item',
                                                'blog-topic__item--active'
                                            )}
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                        >
                                            <img
                                                src={icon.light}
                                                alt=''
                                                className={classBind(
                                                    'blog-topic__icon',
<<<<<<< HEAD
                                                    {
                                                        'blog-topic__icon--active':
                                                            tag === 'Giới thiệu'
                                                    }
=======
                                                    'blog-topic__icon--active'
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                                )}
                                            />
                                            <p
                                                className={classBind(
                                                    'blog-topic__name'
                                                )}
                                            >
                                                Giới Thiệu
                                            </p>
                                        </li>
                                    </Link>

<<<<<<< HEAD
                                    <Link
                                        to='#'
                                        onClick={() => {
                                            if (tag === 'Tin tức') {
                                                setTag(undefined);
                                            } else {
                                                setTag('Tin tức');
                                            }
                                        }}
                                    >
                                        <li
                                            className={classBind(
                                                'blog-topic__item',
                                                {
                                                    'blog-topic__item--active':
                                                        tag === 'Tin tức'
                                                }
                                            )}
                                            onClick={toggleFilter}
=======
                                    <Link to='#'>
                                        <li
                                            className={classBind(
                                                'blog-topic__item'
                                            )}
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                        >
                                            <img
                                                src={icon.news}
                                                alt=''
                                                className={classBind(
<<<<<<< HEAD
                                                    'blog-topic__icon',
                                                    {
                                                        'blog-topic__icon--active':
                                                            tag === 'Tin tức'
                                                    }
=======
                                                    'blog-topic__icon'
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                                )}
                                            />
                                            <p
                                                className={classBind(
                                                    'blog-topic__name'
                                                )}
                                            >
                                                Tin tức
                                            </p>
                                        </li>
                                    </Link>

<<<<<<< HEAD
                                    <Link
                                        to='#'
                                        onClick={() => {
                                            if (tag === 'Sự kiện') {
                                                setTag(undefined);
                                            } else {
                                                setTag('Sự kiện');
                                            }
                                        }}
                                    >
                                        <li
                                            className={classBind(
                                                'blog-topic__item',
                                                {
                                                    'blog-topic__item--active':
                                                        tag === 'Sự kiện'
                                                }
                                            )}
                                            onClick={toggleFilter}
=======
                                    <Link to='#'>
                                        <li
                                            className={classBind(
                                                'blog-topic__item'
                                            )}
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                        >
                                            <img
                                                src={icon.event}
                                                alt=''
                                                className={classBind(
<<<<<<< HEAD
                                                    'blog-topic__icon',
                                                    {
                                                        'blog-topic__icon--active':
                                                            tag === 'Sự kiện'
                                                    }
=======
                                                    'blog-topic__icon'
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                                )}
                                            />
                                            <p
                                                className={classBind(
                                                    'blog-topic__name'
                                                )}
                                            >
                                                Sự kiện
                                            </p>
                                        </li>
                                    </Link>

<<<<<<< HEAD
                                    <Link
                                        to='#'
                                        onClick={() => {
                                            if (tag === 'Thông báo') {
                                                setTag(undefined);
                                            } else {
                                                setTag('Thông báo');
                                            }
                                        }}
                                    >
                                        <li
                                            className={classBind(
                                                'blog-topic__item',
                                                {
                                                    'blog-topic__item--active':
                                                        tag === 'Thông báo'
                                                }
                                            )}
                                            onClick={toggleFilter}
=======
                                    <Link to='#'>
                                        <li
                                            className={classBind(
                                                'blog-topic__item'
                                            )}
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                        >
                                            <img
                                                src={icon.notification}
                                                alt=''
                                                className={classBind(
<<<<<<< HEAD
                                                    'blog-topic__icon',
                                                    {
                                                        'blog-topic__icon--active':
                                                            tag === 'Thông báo'
                                                    }
=======
                                                    'blog-topic__icon'
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                                )}
                                            />
                                            <p
                                                className={classBind(
                                                    'blog-topic__name'
                                                )}
                                            >
                                                Thông báo
                                            </p>
                                        </li>
                                    </Link>

<<<<<<< HEAD
                                    <Link
                                        to='#'
                                        onClick={() => {
                                            if (tag === 'Tin cổ đông') {
                                                setTag(undefined);
                                            } else {
                                                setTag('Tin cổ đông');
                                            }
                                        }}
                                    >
                                        <li
                                            className={classBind(
                                                'blog-topic__item',
                                                {
                                                    'blog-topic__item--active':
                                                        tag === 'Tin cổ đông'
                                                }
                                            )}
                                            onClick={toggleFilter}
=======
                                    <Link to='#'>
                                        <li
                                            className={classBind(
                                                'blog-topic__item'
                                            )}
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                        >
                                            <img
                                                src={icon.file}
                                                alt=''
                                                className={classBind(
<<<<<<< HEAD
                                                    'blog-topic__icon',
                                                    {
                                                        'blog-topic__icon--active':
                                                            tag ===
                                                            'Tin cổ đông'
                                                    }
=======
                                                    'blog-topic__icon'
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                                )}
                                            />
                                            <p
                                                className={classBind(
                                                    'blog-topic__name'
                                                )}
                                            >
                                                Tin cổ đông
                                            </p>
                                        </li>
                                    </Link>

<<<<<<< HEAD
                                    <Link
                                        to='#'
                                        onClick={() => {
                                            if (tag === 'Hoạt động đoàn thể') {
                                                setTag(undefined);
                                            } else {
                                                setTag('Hoạt động đoàn thể');
                                            }
                                        }}
                                    >
                                        <li
                                            className={classBind(
                                                'blog-topic__item',
                                                {
                                                    'blog-topic__item--active':
                                                        tag ===
                                                        'Hoạt động đoàn thể'
                                                }
                                            )}
                                            onClick={toggleFilter}
=======
                                    <Link to='#'>
                                        <li
                                            className={classBind(
                                                'blog-topic__item'
                                            )}
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                        >
                                            <img
                                                src={icon.group}
                                                alt=''
                                                className={classBind(
<<<<<<< HEAD
                                                    'blog-topic__icon',
                                                    {
                                                        'blog-topic__icon--active':
                                                            tag ===
                                                            'Hoạt động đoàn thể'
                                                    }
=======
                                                    'blog-topic__icon'
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                                )}
                                            />
                                            <p
                                                className={classBind(
                                                    'blog-topic__name'
                                                )}
                                            >
                                                Hoạt động đoàn thể
                                            </p>
                                        </li>
                                    </Link>
                                </ul>
<<<<<<< HEAD
                                <div
                                    className={classBind(
                                        'blog-topic__act',
                                        'd-none',
                                        'd-xl-block'
                                    )}
                                >
                                    <Button
                                        className={classBind('blog-topic__btn')}
                                        text='Huỷ'
                                        onClick={toggleFilter}
                                    ></Button>
                                </div>
=======
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                            </div>
                        </div>

                        <div className={classBind('col-9 col-xl-12')}>
                            <div className={classBind('blog-filter')}>
                                <div className={classBind('blog-search')}>
                                    <img
                                        src={icon.search}
                                        alt=''
                                        className={classBind(
                                            'blog-search__icon'
                                        )}
                                    />

                                    <input
                                        type='text'
                                        className={classBind(
                                            'blog-search__input'
                                        )}
                                        placeholder='Tìm kiếm'
                                    />

                                    <img
                                        src={icon.time}
                                        alt=''
                                        className={classBind(
                                            'blog-search__time',
                                            'd-none'
                                        )}
                                    />
                                </div>

                                <div
                                    className={classBind(
                                        'blog-datepicker',
                                        'd-lg-none'
                                    )}
                                >
                                    <Space direction='vertical'>
                                        <DatePicker
                                            className={classBind(
                                                'blog-datepicker__select'
                                            )}
                                            onChange={onChange}
                                        />
                                    </Space>
                                    {/* thêm icon lịch */}
                                    <img
                                        src={icon.arrow_right}
                                        alt=''
                                        className={classBind(
                                            'blog-datepicker--to'
                                        )}
                                    />
                                    <Space direction='vertical'>
                                        <DatePicker
                                            className={classBind(
                                                'blog-datepicker__select'
                                            )}
                                            onChange={onChange}
                                        />
                                    </Space>
                                    {/* thêm icon lịch */}
                                </div>

                                <div className={classBind('blog-sort')}>
                                    <img
                                        src={icon.sort}
                                        alt=''
                                        className={classBind('blog-sort__icon')}
                                    />
                                    <span
                                        className={classBind(
                                            'blog-sort__title d-md-none'
                                        )}
                                    >
                                        A đến Z
                                    </span>
                                </div>

                                <div
                                    className={classBind(
                                        'blog-fil',
                                        'd-none',
                                        'd-xl-flex'
                                    )}
                                >
                                    <img
                                        src={icon.filter}
                                        alt=''
                                        className={classBind('blog-fil__icon')}
                                    />
                                </div>
                            </div>

                            <div className={classBind('blog-list')}>
                                <div
                                    className={classBind(
                                        'row row-cols-4 row-cols-xxl-3 row-cols-lg-2 row-cols-sm-1 gy-2 gx-2'
                                    )}
                                >
<<<<<<< HEAD
                                    {Blog.blogs.map((blog: Blog) => {
                                        return (
                                            <div
                                                key={blog.id}
                                                className={classBind('col')}
                                            >
                                                <PostItem
                                                    id={blog.id}
                                                    mini={true}
                                                    host={blog.author}
                                                    title={blog.title}
                                                    tags={blog.tags}
                                                    view='10N'
                                                    postDate={blog.postedDate}
                                                    image={blog.image}
                                                />
                                            </div>
                                        );
                                    })}
=======
                                    {currentItems.map((post, index) => (
                                        <div
                                            key={index}
                                            className={classBind('col')}
                                        >
                                            <PostItem
                                                infoClassName={classBind(
                                                    'custom-info-blog-list'
                                                )}
                                                mini={true}
                                                host='Admin'
                                                title={post.title}
                                                tags={[
                                                    {
                                                        name: 'Sự kiện',
                                                        tagClassName: classBind(
                                                            'custom-tag-blog-list'
                                                        )
                                                    },
                                                    {
                                                        name: 'Thông báo',
                                                        tagClassName: classBind(
                                                            'custom-tag-blog-list'
                                                        )
                                                    },
                                                    {
                                                        name: 'Tin tức',
                                                        tagClassName: classBind(
                                                            'custom-tag-blog-list'
                                                        )
                                                    }
                                                ]}
                                                view={post.view}
                                                postDate={post.postDate}
                                                image={post.image}
                                                hostClassName={classBind(
                                                    'custom-host-blog-list'
                                                )}
                                                titleClassName={classBind(
                                                    'custom-title-blog-list'
                                                )}
                                                viewClassName={classBind(
                                                    'custom-view-blog-list'
                                                )}
                                                tagContainerClassName={classBind(
                                                    'custom-tagcontainer-blog-list'
                                                )}
                                                dateClassName={classBind(
                                                    'custom-date-blog-list'
                                                )}
                                            />
                                        </div>
                                    ))}
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                </div>

                                <div className={classBind('blog-paginate')}>
                                    <div className={classBind('paginate')}>
                                        <button
                                            className={classBind(
                                                'paginate__btn',
<<<<<<< HEAD
                                                {
                                                    'paginate__btn--disable':
                                                        page === 1
                                                }
                                            )}
                                            onClick={() =>
                                                handlePageChange(page - 1)
                                            }
                                            disabled={page === 1}
                                        >
                                            <img
                                                src={icon.paginate_next}
                                                alt=''
                                                style={{ rotate: '180deg' }}
=======
                                                !canGoBack &&
                                                    'paginate__btn--disable'
                                            )}
                                            onClick={() =>
                                                paginate(currentPage - 1)
                                            }
                                            disabled={!canGoBack}
                                        >
                                            <img
                                                src={icon.paginate_prev_disable}
                                                alt=''
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                            />
                                        </button>

                                        {[...Array(totalPages)].map(
<<<<<<< HEAD
                                            (_, index) => {
                                                const pageNum = index + 1;

                                                if (totalPages > 3) {
                                                    if (
                                                        pageNum === 1 ||
                                                        pageNum ===
                                                            totalPages ||
                                                        (pageNum >= page - 1 &&
                                                            pageNum <= page + 1)
                                                    ) {
                                                        return (
                                                            <button
                                                                key={pageNum}
                                                                className={classBind(
                                                                    'paginate__page',
                                                                    {
                                                                        'paginate__page--active':
                                                                            pageNum ===
                                                                            page
                                                                    }
                                                                )}
                                                                onClick={() =>
                                                                    handlePageChange(
                                                                        pageNum
                                                                    )
                                                                }
                                                            >
                                                                {pageNum}
                                                            </button>
                                                        );
                                                    }
                                                    if (
                                                        pageNum === page - 2 ||
                                                        pageNum === page + 2
                                                    ) {
                                                        return (
                                                            <span
                                                                key={pageNum}
                                                                className='paginate__ellipsis'
                                                            >
                                                                ...
                                                            </span>
                                                        );
                                                    }
                                                    return null;
                                                }

                                                return (
                                                    <button
                                                        key={pageNum}
                                                        className={classBind(
                                                            'paginate__page',
                                                            {
                                                                'paginate__page--active':
                                                                    pageNum ===
                                                                    page
                                                            }
                                                        )}
                                                        onClick={() =>
                                                            handlePageChange(
                                                                pageNum
                                                            )
                                                        }
                                                    >
                                                        {pageNum}
                                                    </button>
                                                );
                                            }
=======
                                            (_, index) => (
                                                <button
                                                    key={index + 1}
                                                    className={classBind(
                                                        'paginate__page',
                                                        currentPage ===
                                                            index + 1 &&
                                                            'paginate__page--active'
                                                    )}
                                                    onClick={() =>
                                                        paginate(index + 1)
                                                    }
                                                >
                                                    {index + 1}
                                                </button>
                                            )
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                        )}

                                        <button
                                            className={classBind(
                                                'paginate__btn',
<<<<<<< HEAD
                                                {
                                                    'paginate__btn--disable':
                                                        page === totalPages
                                                }
                                            )}
                                            onClick={() =>
                                                handlePageChange(page + 1)
                                            }
                                            disabled={page === totalPages}
=======
                                                !canGoForward &&
                                                    'paginate__btn--disable'
                                            )}
                                            onClick={() =>
                                                paginate(currentPage + 1)
                                            }
                                            disabled={!canGoForward}
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                        >
                                            <img
                                                src={icon.paginate_next}
                                                alt=''
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
