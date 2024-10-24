import classNames from 'classnames/bind';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import TitleMain from '~/components/TitleMain';
import styles from './Blogs.module.scss';
import icon from '~/assets/icons';
import image from '~/assets/images';
import PostItem from '~/components/PostItem';

const classBind = classNames.bind(styles);

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

function Blogs() {
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
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classBind('blog-main')}>
                    <div className={classBind('row')}>
                        <div className={classBind('col-3 d-xl-none')}>
                            <div className={classBind('blog-topic')}>
                                <h2
                                    className={classBind('blog-topic__heading')}
                                >
                                    CHỦ ĐỀ BÀI VIẾT
                                </h2>
                                <ul className={classBind('blog-topic__list')}>
                                    <Link to='#'>
                                        <li
                                            className={classBind(
                                                'blog-topic__item',
                                                'blog-topic__item--active'
                                            )}
                                        >
                                            <img
                                                src={icon.light}
                                                alt=''
                                                className={classBind(
                                                    'blog-topic__icon',
                                                    'blog-topic__icon--active'
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

                                    <Link to='#'>
                                        <li
                                            className={classBind(
                                                'blog-topic__item'
                                            )}
                                        >
                                            <img
                                                src={icon.news}
                                                alt=''
                                                className={classBind(
                                                    'blog-topic__icon'
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

                                    <Link to='#'>
                                        <li
                                            className={classBind(
                                                'blog-topic__item'
                                            )}
                                        >
                                            <img
                                                src={icon.event}
                                                alt=''
                                                className={classBind(
                                                    'blog-topic__icon'
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

                                    <Link to='#'>
                                        <li
                                            className={classBind(
                                                'blog-topic__item'
                                            )}
                                        >
                                            <img
                                                src={icon.notification}
                                                alt=''
                                                className={classBind(
                                                    'blog-topic__icon'
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

                                    <Link to='#'>
                                        <li
                                            className={classBind(
                                                'blog-topic__item'
                                            )}
                                        >
                                            <img
                                                src={icon.file}
                                                alt=''
                                                className={classBind(
                                                    'blog-topic__icon'
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

                                    <Link to='#'>
                                        <li
                                            className={classBind(
                                                'blog-topic__item'
                                            )}
                                        >
                                            <img
                                                src={icon.group}
                                                alt=''
                                                className={classBind(
                                                    'blog-topic__icon'
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
                                </div>

                                <div className={classBind('blog-paginate')}>
                                    <div className={classBind('paginate')}>
                                        <button
                                            className={classBind(
                                                'paginate__btn',
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
                                            />
                                        </button>

                                        {[...Array(totalPages)].map(
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
                                        )}

                                        <button
                                            className={classBind(
                                                'paginate__btn',
                                                !canGoForward &&
                                                    'paginate__btn--disable'
                                            )}
                                            onClick={() =>
                                                paginate(currentPage + 1)
                                            }
                                            disabled={!canGoForward}
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
