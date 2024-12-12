import TitleMain from '~/components/TitleMain';
import styles from './Jobs.module.scss';
import classNames from 'classnames/bind';
import icon from '~/assets/icons';
import JobCard from '~/components/JobCard';
import { useEffect, useState } from 'react';

import { useFetchJobsPaginatedQuery } from '~/apis/Jobs.api';
import { Link } from 'react-router-dom';
import { Job } from '~/utils/types';

const classBind = classNames.bind(styles);

function Jobs() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(9);
    const [name, setName] = useState<string | undefined>();
    const [position, setPosition] = useState<string | undefined>();
    const [address, setAddress] = useState<string | undefined>();

    useEffect(() => {
        window.scrollTo(0, 0);

        const updateLimit = () => {
            const width = window.innerWidth;
            if (width <= 1200) {
                setLimit(6);
            } else {
                setLimit(9);
            }
        };

        updateLimit();
        window.addEventListener('resize', updateLimit);

        return () => window.removeEventListener('resize', updateLimit);
    }, [page]);

    const { data: Job } = useFetchJobsPaginatedQuery({
        page,
        limit,
        name,
        position,
        address
    });

    console.log(Job);
    if (!Job) {
        return <div>No data available</div>;
    }

    const totalPages = Math.ceil(Job.total / limit);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
        }
    };
    return (
        <div className={classBind('job')}>
            <div className={classBind('container')}>
                <div className={classBind('job__heading')}>
                    <TitleMain text='TUYỂN DỤNG' />
                </div>

                <div className={classBind('job__main')}>
                    <div className={classBind('row gy-lg-2')}>
                        <div className={classBind('col-3 col-lg-12')}>
                            <div className={classBind('job-filter')}>
                                <div className={classBind('job-search')}>
                                    <img
                                        src={icon.search}
                                        alt=''
                                        className={classBind(
                                            'job-search__icon'
                                        )}
                                    />

                                    <input
                                        type='text'
                                        className={classBind(
                                            'job-search__input'
                                        )}
                                        placeholder='Tìm kiếm'
                                    />

                                    <img
                                        src={icon.time}
                                        alt=''
                                        className={classBind(
                                            'job-search__time',
                                            'd-none'
                                        )}
                                    />
                                </div>

                                <div
                                    className={classBind(
                                        'job-filter__separate',
                                        'd-lg-none'
                                    )}
                                ></div>

                                <div
                                    className={classBind(
                                        'job-filter__info',
                                        'd-lg-none'
                                    )}
                                >
                                    <div className={classBind('job-category')}>
                                        <div
                                            className={classBind(
                                                'job-category__heading'
                                            )}
                                        >
                                            <img
                                                src={icon.bag}
                                                alt=''
                                                className={classBind(
                                                    'job-category__icon'
                                                )}
                                            />
                                            <h2
                                                className={classBind(
                                                    'job-category__title'
                                                )}
                                            >
                                                Lĩnh vực
                                            </h2>
                                        </div>

                                        <ul
                                            className={classBind(
                                                'job-category__list'
                                            )}
                                        >
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (name === 'bán hàng') {
                                                        setName(undefined);
                                                    } else {
                                                        setName('bán hàng');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={classBind(
                                                        'job-category__item',
                                                        {
                                                            'job-category__item--active':
                                                                name ===
                                                                'bán hàng'
                                                        }
                                                    )}
                                                >
                                                    Bán hàng
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (name === 'kinh doanh') {
                                                        setName(undefined);
                                                    } else {
                                                        setName('kinh doanh');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={classBind(
                                                        'job-category__item',
                                                        {
                                                            'job-category__item--active':
                                                                name ===
                                                                'kinh doanh'
                                                        }
                                                    )}
                                                >
                                                    Kinh doanh
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (
                                                        name ===
                                                        'kỹ sư xây dựng'
                                                    ) {
                                                        setName(undefined);
                                                    } else {
                                                        setName(
                                                            'kỹ sư xây dựng'
                                                        );
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={classBind(
                                                        'job-category__item',
                                                        {
                                                            'job-category__item--active':
                                                                name ===
                                                                'kỹ sư xây dựng'
                                                        }
                                                    )}
                                                >
                                                    Kỹ sư xây dựng
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (name === 'kế toán') {
                                                        setName(undefined);
                                                    } else {
                                                        setName('kế toán');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={classBind(
                                                        'job-category__item',
                                                        {
                                                            'job-category__item--active':
                                                                name ===
                                                                'kế toán'
                                                        }
                                                    )}
                                                >
                                                    Nhân viên kế toán
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (name === 'kỹ thuật') {
                                                        setName(undefined);
                                                    } else {
                                                        setName('kỹ thuật');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={classBind(
                                                        'job-category__item',
                                                        {
                                                            'job-category__item--active':
                                                                name ===
                                                                'kỹ thuật'
                                                        }
                                                    )}
                                                >
                                                    Nhân viên kỹ thuật
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (name === 'phục vụ') {
                                                        setName(undefined);
                                                    } else {
                                                        setName('phục vụ');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={classBind(
                                                        'job-category__item',
                                                        {
                                                            'job-category__item--active':
                                                                name ===
                                                                'phục vụ'
                                                        }
                                                    )}
                                                >
                                                    Nhân viên phục vụ
                                                </li>
                                            </Link>
                                        </ul>
                                    </div>

                                    {/* filter  */}
                                    <div className={classBind('job-category')}>
                                        <div
                                            className={classBind(
                                                'job-category__heading'
                                            )}
                                        >
                                            <img
                                                src={icon.card}
                                                alt=''
                                                className={classBind(
                                                    'job-category__icon'
                                                )}
                                            />
                                            <h2
                                                className={classBind(
                                                    'job-category__title'
                                                )}
                                            >
                                                Hình thức làm việc
                                            </h2>
                                        </div>

                                        <ul
                                            className={classBind(
                                                'job-category__list'
                                            )}
                                        >
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (
                                                        position ===
                                                        'bán thời gian'
                                                    ) {
                                                        setPosition(undefined);
                                                    } else {
                                                        setPosition(
                                                            'bán thời gian'
                                                        );
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={classBind(
                                                        'job-category__item',
                                                        {
                                                            'job-category__item--active':
                                                                position ===
                                                                'bán thời gian'
                                                        }
                                                    )}
                                                >
                                                    Bán thời gian
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (
                                                        position ===
                                                        'chính thức'
                                                    ) {
                                                        setPosition(undefined);
                                                    } else {
                                                        setPosition(
                                                            'chính thức'
                                                        );
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={classBind(
                                                        'job-category__item',
                                                        {
                                                            'job-category__item--active':
                                                                position ===
                                                                'chính thức'
                                                        }
                                                    )}
                                                >
                                                    Nhân viên chính thức
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (
                                                        position === 'theo ca'
                                                    ) {
                                                        setPosition(undefined);
                                                    } else {
                                                        setPosition('theo ca');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={classBind(
                                                        'job-category__item',
                                                        {
                                                            'job-category__item--active':
                                                                position ===
                                                                'theo ca'
                                                        }
                                                    )}
                                                >
                                                    Theo ca
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (
                                                        position === 'thời vụ'
                                                    ) {
                                                        setPosition(undefined);
                                                    } else {
                                                        setPosition('thời vụ');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={classBind(
                                                        'job-category__item',
                                                        {
                                                            'job-category__item--active':
                                                                position ===
                                                                'thời vụ'
                                                        }
                                                    )}
                                                >
                                                    Thời vụ
                                                </li>
                                            </Link>
                                        </ul>
                                    </div>

                                    {/* filter  */}
                                    <div className={classBind('job-category')}>
                                        <div
                                            className={classBind(
                                                'job-category__heading'
                                            )}
                                        >
                                            <img
                                                src={icon.location}
                                                alt=''
                                                className={classBind(
                                                    'job-category__icon'
                                                )}
                                            />
                                            <h2
                                                className={classBind(
                                                    'job-category__title'
                                                )}
                                            >
                                                Nơi làm việc
                                            </h2>
                                        </div>

                                        <ul
                                            className={classBind(
                                                'job-category__list'
                                            )}
                                        >
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (address === 'cà phê') {
                                                        setAddress(undefined);
                                                    } else {
                                                        setAddress('cà phê');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={classBind(
                                                        'job-category__item',
                                                        {
                                                            'job-category__item--active':
                                                                address ===
                                                                'cà phê'
                                                        }
                                                    )}
                                                >
                                                    Cà Phê Vườn Đá
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (
                                                        address === 'nhà hàng'
                                                    ) {
                                                        setAddress(undefined);
                                                    } else {
                                                        setAddress('nhà hàng');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={classBind(
                                                        'job-category__item',
                                                        {
                                                            'job-category__item--active':
                                                                address ===
                                                                'nhà hàng'
                                                        }
                                                    )}
                                                >
                                                    NH Thủy Tạ Đầm Sen
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (
                                                        address === 'công viên'
                                                    ) {
                                                        setAddress(undefined);
                                                    } else {
                                                        setAddress('công viên');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={classBind(
                                                        'job-category__item',
                                                        {
                                                            'job-category__item--active':
                                                                address ===
                                                                'công viên'
                                                        }
                                                    )}
                                                >
                                                    CVVH Đầm Sen
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (
                                                        address === 'ngọc lan'
                                                    ) {
                                                        setAddress(undefined);
                                                    } else {
                                                        setAddress('ngọc lan');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={classBind(
                                                        'job-category__item',
                                                        {
                                                            'job-category__item--active':
                                                                address ===
                                                                'ngọc lan'
                                                        }
                                                    )}
                                                >
                                                    Khách sạn Ngọc Lan
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (address === 'phú thọ') {
                                                        setAddress(undefined);
                                                    } else {
                                                        setAddress('phú thọ');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={classBind(
                                                        'job-category__item',
                                                        {
                                                            'job-category__item--active':
                                                                address ===
                                                                'phú thọ'
                                                        }
                                                    )}
                                                >
                                                    Khách sạn Phú Thọ
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (address === 'vàm sát') {
                                                        setAddress(undefined);
                                                    } else {
                                                        setAddress('vàm sát');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={classBind(
                                                        'job-category__item',
                                                        {
                                                            'job-category__item--active':
                                                                address ===
                                                                'vàm sát'
                                                        }
                                                    )}
                                                >
                                                    K Sinh Thái Vàm Sát
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (
                                                        address === 'trung tâm'
                                                    ) {
                                                        setAddress(undefined);
                                                    } else {
                                                        setAddress('trung tâm');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={classBind(
                                                        'job-category__item',
                                                        {
                                                            'job-category__item--active':
                                                                address ===
                                                                'trung tâm'
                                                        }
                                                    )}
                                                >
                                                    Trung tâm DVDL Đầm Sen
                                                </li>
                                            </Link>
                                            <Link
                                                to='#'
                                                onClick={() => {
                                                    if (address === 'tourist') {
                                                        setAddress(undefined);
                                                    } else {
                                                        setAddress('tourist');
                                                    }
                                                }}
                                            >
                                                <li
                                                    className={classBind(
                                                        'job-category__item',
                                                        {
                                                            'job-category__item--active':
                                                                address ===
                                                                'tourist'
                                                        }
                                                    )}
                                                >
                                                    Phuthotourist
                                                </li>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className={classBind(
                                        'job-fil',
                                        'd-none',
                                        'd-lg-flex'
                                    )}
                                >
                                    <img
                                        src={icon.filter}
                                        alt=''
                                        className={classBind('job-fil__icon')}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={classBind('col-9 col-lg-12')}>
                            <div
                                className={classBind(
                                    'row row-cols-3 row-cols-xl-2 row-cols-md-1 gy-2 gx-2'
                                )}
                            >
                                {Job.jobs.map((job: Job) => {
                                    return (
                                        <div
                                            key={job.id}
                                            className={classBind('col')}
                                        >
                                            <JobCard
                                                id={job.id}
                                                active={true}
                                                image={job.image}
                                                name={job.name}
                                                position={job.position}
                                                address={job.address}
                                                postedDate={job.postedDate}
                                                jobDescription={
                                                    job.jobDescription
                                                }
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className={classBind('blog-paginate')}>
                            <div className={classBind('paginate')}>
                                <button
                                    className={classBind('paginate__btn', {
                                        'paginate__btn--disable': page === 1
                                    })}
                                    onClick={() => handlePageChange(page - 1)}
                                    disabled={page === 1}
                                >
                                    <img
                                        src={icon.paginate_next}
                                        alt=''
                                        style={{ rotate: '180deg' }}
                                    />
                                </button>

                                {[...Array(totalPages)].map((_, index) => {
                                    const pageNum = index + 1;

                                    if (totalPages > 3) {
                                        if (
                                            pageNum === 1 ||
                                            pageNum === totalPages ||
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
                                                                pageNum === page
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
                                                        pageNum === page
                                                }
                                            )}
                                            onClick={() =>
                                                handlePageChange(pageNum)
                                            }
                                        >
                                            {pageNum}
                                        </button>
                                    );
                                })}

                                <button
                                    className={classBind('paginate__btn', {
                                        'paginate__btn--disable':
                                            page === totalPages
                                    })}
                                    onClick={() => handlePageChange(page + 1)}
                                    disabled={page === totalPages}
                                >
                                    <img
                                        src={icon.paginate_next}
                                        alt='iconpaginate'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Jobs;
