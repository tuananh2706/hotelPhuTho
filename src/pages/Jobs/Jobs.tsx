import TitleMain from '~/components/TitleMain';
import styles from './Jobs.module.scss';
import classNames from 'classnames/bind';
import icon from '~/assets/icons';
import JobCard from '~/components/JobCard';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Jobs() {
    const jobs = [
        {
            id: 1,
            jobtext: 'Nhân viên thiết kế đồ họa',
            configurationworktext: 'Nhân viên chính thức',
            active: true
        },
        {
            id: 2,
            jobtext: 'Nhân viên thiết kế đồ họa',
            configurationworktext: 'Nhân viên chính thức'
        },
        {
            id: 3,
            jobtext: 'Nhân viên thiết kế đồ họa',
            configurationworktext: 'Nhân viên chính thức',
            active: true
        },
        {
            id: 4,
            jobtext: 'Nhân viên thiết kế đồ họa',
            configurationworktext: 'Nhân viên chính thức',
            active: true
        },
        {
            id: 5,
            jobtext: 'Nhân viên thiết kế đồ họa',
            configurationworktext: 'Nhân viên chính thức',
            active: true
        },
        {
            id: 6,
            jobtext: 'Nhân viên thiết kế đồ họa',
            configurationworktext: 'Nhân viên chính thức'
        },
        {
            id: 7,
            jobtext: 'Nhân viên thiết kế đồ họa',
            configurationworktext: 'Nhân viên chính thức'
        },
        {
            id: 8,
            jobtext: 'Nhân viên thiết kế đồ họa',
            configurationworktext: 'Nhân viên chính thức',
            active: true
        },
        {
            id: 9,
            jobtext: 'Nhân viên thiết kế đồ họa',
            configurationworktext: 'Nhân viên chính thức'
        },
        {
            id: 10,
            jobtext: 'Nhân viên thiết kế đồ họa',
            configurationworktext: 'Nhân viên chính thức'
        },
        {
            id: 11,
            jobtext: 'Nhân viên thiết kế đồ họa',
            configurationworktext: 'Nhân viên chính thức',
            active: true
        },
        {
            id: 12,
            jobtext: 'Nhân viên thiết kế đồ họa',
            configurationworktext: 'Nhân viên chính thức'
        },
        {
            id: 13,
            jobtext: 'Nhân viên thiết kế đồ họa',
            configurationworktext: 'Nhân viên chính thức',
            active: true
        },
        {
            id: 14,
            jobtext: 'Nhân viên thiết kế đồ họa',
            configurationworktext: 'Nhân viên chính thức',
            active: true
        },
        {
            id: 15,
            jobtext: 'Nhân viên thiết kế đồ họa',
            configurationworktext: 'Nhân viên chính thức',
            active: true
        },
        {
            id: 16,
            jobtext: 'Nhân viên thiết kế đồ họa',
            configurationworktext: 'Nhân viên chính thức'
        },
        {
            id: 17,
            jobtext: 'Nhân viên thiết kế đồ họa',
            configurationworktext: 'Nhân viên chính thức'
        },
        {
            id: 18,
            jobtext: 'Nhân viên thiết kế đồ họa',
            configurationworktext: 'Nhân viên chính thức',
            active: true
        },
        {
            id: 19,
            jobtext: 'Nhân viên thiết kế đồ họa',
            configurationworktext: 'Nhân viên chính thức'
        }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = jobs.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(jobs.length / itemsPerPage);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const canGoBack = currentPage > 1;
    const canGoForward = currentPage < totalPages;

    return (
        <div className={cx('job')}>
            <div className={cx('container')}>
                <div className={cx('job__heading')}>
                    <TitleMain text='TUYỂN DỤNG' />
                </div>

                <div className={cx('job__main')}>
                    <div className={cx('row gy-lg-2')}>
                        <div className={cx('col-3 col-lg-12')}>
                            <div className={cx('job-filter')}>
                                <div className={cx('job-search')}>
                                    <img
                                        src={icon.search}
                                        alt=''
                                        className={cx('job-search__icon')}
                                    />

                                    <input
                                        type='text'
                                        className={cx('job-search__input')}
                                        placeholder='Tìm kiếm'
                                    />

                                    <img
                                        src={icon.time}
                                        alt=''
                                        className={cx(
                                            'job-search__time',
                                            'd-none'
                                        )}
                                    />
                                </div>

                                <div
                                    className={cx(
                                        'job-filter__separate',
                                        'd-lg-none'
                                    )}
                                ></div>

                                <div
                                    className={cx(
                                        'job-filter__info',
                                        'd-lg-none'
                                    )}
                                >
                                    <div className={cx('job-category')}>
                                        <div
                                            className={cx(
                                                'job-category__heading'
                                            )}
                                        >
                                            <img
                                                src={icon.bag}
                                                alt=''
                                                className={cx(
                                                    'job-category__icon'
                                                )}
                                            />
                                            <h2
                                                className={cx(
                                                    'job-category__title'
                                                )}
                                            >
                                                Lĩnh vực
                                            </h2>
                                        </div>

                                        <ul
                                            className={cx('job-category__list')}
                                        >
                                            <li
                                                className={cx(
                                                    'job-category__item',
                                                    'job-category__item--active'
                                                )}
                                            >
                                                Hướng dẫn viên
                                            </li>
                                            <li
                                                className={cx(
                                                    'job-category__item'
                                                )}
                                            >
                                                Kinh doanh
                                            </li>
                                            <li
                                                className={cx(
                                                    'job-category__item'
                                                )}
                                            >
                                                Kỹ sư xây dựng
                                            </li>
                                            <li
                                                className={cx(
                                                    'job-category__item'
                                                )}
                                            >
                                                Nhân viên kế toán
                                            </li>
                                            <li
                                                className={cx(
                                                    'job-category__item'
                                                )}
                                            >
                                                Nhân viên kỹ thuật
                                            </li>
                                            <li
                                                className={cx(
                                                    'job-category__item'
                                                )}
                                            >
                                                Nhân viên phục vụ
                                            </li>
                                        </ul>
                                    </div>

                                    <div className={cx('job-category')}>
                                        <div
                                            className={cx(
                                                'job-category__heading'
                                            )}
                                        >
                                            <img
                                                src={icon.card}
                                                alt=''
                                                className={cx(
                                                    'job-category__icon'
                                                )}
                                            />
                                            <h2
                                                className={cx(
                                                    'job-category__title'
                                                )}
                                            >
                                                Hình thức làm việc
                                            </h2>
                                        </div>

                                        <ul
                                            className={cx('job-category__list')}
                                        >
                                            <li
                                                className={cx(
                                                    'job-category__item',
                                                    'job-category__item--active'
                                                )}
                                            >
                                                Bán thời gian
                                            </li>
                                            <li
                                                className={cx(
                                                    'job-category__item'
                                                )}
                                            >
                                                Nhân viên chính thức
                                            </li>
                                            <li
                                                className={cx(
                                                    'job-category__item'
                                                )}
                                            >
                                                Theo ca
                                            </li>
                                            <li
                                                className={cx(
                                                    'job-category__item'
                                                )}
                                            >
                                                Thực tập
                                            </li>
                                        </ul>
                                    </div>

                                    <div className={cx('job-category')}>
                                        <div
                                            className={cx(
                                                'job-category__heading'
                                            )}
                                        >
                                            <img
                                                src={icon.location}
                                                alt=''
                                                className={cx(
                                                    'job-category__icon'
                                                )}
                                            />
                                            <h2
                                                className={cx(
                                                    'job-category__title'
                                                )}
                                            >
                                                Nơi làm việc
                                            </h2>
                                        </div>

                                        <ul
                                            className={cx('job-category__list')}
                                        >
                                            <li
                                                className={cx(
                                                    'job-category__item',
                                                    'job-category__item--active'
                                                )}
                                            >
                                                Cà Phê Vườn Đá
                                            </li>
                                            <li
                                                className={cx(
                                                    'job-category__item'
                                                )}
                                            >
                                                NH Thủy Tạ Đầm Sen
                                            </li>
                                            <li
                                                className={cx(
                                                    'job-category__item'
                                                )}
                                            >
                                                CVVH Đầm Sen
                                            </li>
                                            <li
                                                className={cx(
                                                    'job-category__item'
                                                )}
                                            >
                                                Khách sạn Ngọc Lan
                                            </li>
                                            <li
                                                className={cx(
                                                    'job-category__item'
                                                )}
                                            >
                                                Khách sạn Phú Thọ
                                            </li>
                                            <li
                                                className={cx(
                                                    'job-category__item'
                                                )}
                                            >
                                                K Sinh Thái Vàm Sát
                                            </li>
                                            <li
                                                className={cx(
                                                    'job-category__item'
                                                )}
                                            >
                                                Trung tâm DVDL Đầm Sen
                                            </li>
                                            <li
                                                className={cx(
                                                    'job-category__item'
                                                )}
                                            >
                                                Phuthotourist
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div
                                    className={cx(
                                        'job-fil',
                                        'd-none',
                                        'd-lg-flex'
                                    )}
                                >
                                    <img
                                        src={icon.filter}
                                        alt=''
                                        className={cx('job-fil__icon')}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={cx('col-9 col-lg-12')}>
                            <div
                                className={cx(
                                    'row row-cols-3 row-cols-xl-2 row-cols-md-1 gy-2 gx-2'
                                )}
                            >
                                {currentItems.map((job) => (
                                    <div key={job.id} className={cx('col')}>
                                        <JobCard
                                            jobtext={job.jobtext}
                                            configurationworktext={
                                                job.configurationworktext
                                            }
                                            active={job.active}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className={cx('job-paginate')}>
                                <div className={cx('paginate')}>
                                    <button
                                        className={cx(
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

                                    {[...Array(totalPages)].map((_, index) => (
                                        <button
                                            key={index + 1}
                                            className={cx(
                                                'paginate__page',
                                                currentPage === index + 1 &&
                                                    'paginate__page--active'
                                            )}
                                            onClick={() => paginate(index + 1)}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}

                                    <button
                                        className={cx(
                                            'paginate__btn',
                                            !canGoForward &&
                                                'paginate__btn--disable'
                                        )}
                                        onClick={() =>
                                            paginate(currentPage + 1)
                                        }
                                        disabled={!canGoForward}
                                    >
                                        <img src={icon.paginate_next} alt='' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Jobs;
