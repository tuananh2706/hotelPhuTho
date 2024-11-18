import classNames from 'classnames/bind';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import TitleMain from '~/components/TitleMain';
import styles from './Blogs.module.scss';
import icon from '~/assets/icons';
// import image from '~/assets/images';
import PostItem from '~/components/PostItem';
import {
    useFetchBlogsPaginatedQuery,
    useFetchRecentBlogsQuery
} from '~/apis/Blogs.api';
import { Blog } from '~/utils/types';
import Button from '~/components/Button';

const classBind = classNames.bind(styles);

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

function Blogs() {
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
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classBind('blog-main')}>
                    <div className={classBind('row')}>
                        <div className={classBind('col-3 d-xl-none')}>
                            <div
                                className={classBind({
                                    'd-xl-none': !isFilterOpen
                                })}
                            >
                                <h2
                                    className={classBind('blog-topic__heading')}
                                >
                                    CHỦ ĐỀ BÀI VIẾT
                                </h2>
                                <ul className={classBind('blog-topic__list')}>
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
                                        >
                                            <img
                                                src={icon.light}
                                                alt=''
                                                className={classBind(
                                                    'blog-topic__icon',
                                                    {
                                                        'blog-topic__icon--active':
                                                            tag === 'Giới thiệu'
                                                    }
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
                                        >
                                            <img
                                                src={icon.news}
                                                alt=''
                                                className={classBind(
                                                    'blog-topic__icon',
                                                    {
                                                        'blog-topic__icon--active':
                                                            tag === 'Tin tức'
                                                    }
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
                                        >
                                            <img
                                                src={icon.event}
                                                alt=''
                                                className={classBind(
                                                    'blog-topic__icon',
                                                    {
                                                        'blog-topic__icon--active':
                                                            tag === 'Sự kiện'
                                                    }
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
                                        >
                                            <img
                                                src={icon.notification}
                                                alt=''
                                                className={classBind(
                                                    'blog-topic__icon',
                                                    {
                                                        'blog-topic__icon--active':
                                                            tag === 'Thông báo'
                                                    }
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
                                        >
                                            <img
                                                src={icon.file}
                                                alt=''
                                                className={classBind(
                                                    'blog-topic__icon',
                                                    {
                                                        'blog-topic__icon--active':
                                                            tag ===
                                                            'Tin cổ đông'
                                                    }
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
                                        >
                                            <img
                                                src={icon.group}
                                                alt=''
                                                className={classBind(
                                                    'blog-topic__icon',
                                                    {
                                                        'blog-topic__icon--active':
                                                            tag ===
                                                            'Hoạt động đoàn thể'
                                                    }
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
                                </div>

                                <div className={classBind('blog-paginate')}>
                                    <div className={classBind('paginate')}>
                                        <button
                                            className={classBind(
                                                'paginate__btn',
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
                                            />
                                        </button>

                                        {[...Array(totalPages)].map(
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
                                        )}

                                        <button
                                            className={classBind(
                                                'paginate__btn',
                                                {
                                                    'paginate__btn--disable':
                                                        page === totalPages
                                                }
                                            )}
                                            onClick={() =>
                                                handlePageChange(page + 1)
                                            }
                                            disabled={page === totalPages}
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
