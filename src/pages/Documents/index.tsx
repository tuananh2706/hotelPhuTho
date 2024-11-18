import classNames from 'classnames/bind';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

// import image from '~/assets/images';
import styles from './Documents.module.scss';
import TitleMain from '~/components/TitleMain';
import icon from '~/assets/icons';

import DocumentItem from '~/components/DocumentItem';
import DocumentGallery from '~/components/DocumentGallery';

const classBind = classNames.bind(styles);

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

function Documents() {
    const documents = [
        {
            id: 1,
            name: 'Khám phá Hội An - Việt Nam',
            createDate: '03/03/12 22:43'
        },
        {
            id: 2,
            name: 'Hải Phòng yêu cầu người dân không ra khỏi nhà sau 22h',
            createDate: '03/03/12 22:43'
        },
        {
            id: 3,
            name: 'Chuẩn bị gì sau khi tiêm vaccin Covid -19?',
            createDate: '03/03/12 22:43'
        },
        { id: 4, name: 'SNOW CHANNEL 1', createDate: '03/03/12 22:43' },
        {
            id: 5,
            name: 'Chuẩn bị gì sau khi tiêm vaccin Covid -19?',
            createDate: '03/03/12 22:43'
        },
        {
            id: 6,
            name: 'Hải Phòng yêu cầu người dân không ra khỏi nhà sau 22h',
            createDate: '03/03/12 22:43'
        },
        {
            id: 7,
            name: 'Chuẩn bị gì sau khi tiêm vaccin Covid -19?',
            createDate: '03/03/12 22:43'
        },
        {
            id: 8,
            name: 'Du lịch ở Tp.HCM đang như thế nào? 101',
            createDate: '03/03/12 22:43'
        },
        { id: 9, name: 'SNOW CHANNEL 1', createDate: '03/03/12 22:43' },
        {
            id: 10,
            name: 'Hải Phòng yêu cầu người dân không ra khỏi nhà sau 22h',
            createDate: '03/03/12 22:43'
        }
    ];

    return (
        <div className={classBind('documents')}>
            <div className={classBind('documents__intro')}>
                <TitleMain text='TÀI LIỆU' />
                <DocumentGallery documenttext='Báo cáo tài chính năm 2022-2023' />
            </div>

            <div className={classBind('container')}>
                <section className={classBind('documents__main')}>
                    <div className={classBind('documents__top')}>
                        <div className={classBind('documents-act')}>
                            <p
                                className={classBind(
                                    'documents-act__name',
                                    'd-md-none'
                                )}
                            >
                                Ngày tạo
                            </p>
                            <div
                                className={classBind(
                                    'documents-datepicker',
                                    'd-md-none'
                                )}
                            >
                                <Space direction='vertical'>
                                    <DatePicker
                                        className={classBind(
                                            'documents-datepicker__select'
                                        )}
                                        onChange={onChange}
                                    />
                                </Space>
                                <img
                                    src={icon.arrow_right}
                                    alt=''
                                    className={classBind(
                                        'documents-datepicker--to'
                                    )}
                                />
                                <Space direction='vertical'>
                                    <DatePicker
                                        className={classBind(
                                            'documents-datepicker__select'
                                        )}
                                        onChange={onChange}
                                    />
                                </Space>
                            </div>
                        </div>

                        <div className={classBind('documents-act')}>
                            <p
                                className={classBind(
                                    'documents-act__name',
                                    'd-md-none'
                                )}
                            >
                                Từ khoá
                            </p>
                            <div className={classBind('documents-search')}>
                                <img
                                    src={icon.search}
                                    alt=''
                                    className={classBind(
                                        'documents-search__icon'
                                    )}
                                />

                                <input
                                    type='text'
                                    className={classBind(
                                        'documents-search__input'
                                    )}
                                    placeholder='Tìm kiếm'
                                />

                                <img
                                    src={icon.time}
                                    alt=''
                                    className={classBind(
                                        'documents-search__time'
                                    )}
                                />
                            </div>
                        </div>

                        <div
                            className={classBind(
                                'documents-filter',
                                'd-none',
                                'd-md-flex'
                            )}
                        >
                            <img
                                src={icon.filter}
                                alt=''
                                className={classBind('documents-filter__icon')}
                            />
                        </div>
                    </div>

                    <ul className={classBind('documents__list')}>
                        {/* header */}
                        <li
                            className={classBind(
                                'documents-item',
                                'documents-item--header',
                                'd-lg-none'
                            )}
                        >
                            <div className={classBind('row')}>
                                <div className={classBind('col-1 d-lg-none')}>
                                    <span
                                        className={classBind(
                                            'documents-item__header',
                                            'documents-item__stt'
                                        )}
                                    >
                                        STT
                                    </span>
                                </div>

                                <div className={classBind('col-6')}>
                                    <span
                                        className={classBind(
                                            'documents-item__header',
                                            'documents-item__name'
                                        )}
                                    >
                                        Tên tài liệu
                                    </span>
                                </div>

                                <div className={classBind('col-3')}>
                                    <span
                                        className={classBind(
                                            'documents-item__header',
                                            'documents-item__name'
                                        )}
                                    >
                                        Ngày tạo
                                    </span>
                                </div>

                                <div className={classBind('col-2')}>
                                    <span
                                        className={classBind(
                                            'documents-item__header',
                                            'documents-item__name'
                                        )}
                                    >
                                        Tải tài liệu
                                    </span>
                                </div>
                            </div>
                        </li>

                        {/* data */}

                        {documents.map((document) => (
                            <li
                                key={document.id}
                                className={classBind('documents-item')}
                            >
                                <div
                                    className={classBind('row gy-lg-1 gy-md-0')}
                                >
                                    <div
                                        className={classBind('col-1 d-lg-none')}
                                    >
                                        <span
                                            className={classBind(
                                                'documents-item__stt'
                                            )}
                                        >
                                            {document.id}
                                        </span>
                                    </div>

                                    <div
                                        className={classBind('col-6 col-lg-12')}
                                    >
                                        <span
                                            className={classBind(
                                                'documents-item__name'
                                            )}
                                        >
                                            {document.name}
                                        </span>
                                    </div>

                                    <div
                                        className={classBind('col-3 col-lg-9')}
                                    >
                                        <span
                                            className={classBind(
                                                'documents-item__create'
                                            )}
                                        >
                                            {document.createDate}
                                        </span>
                                    </div>

                                    <div
                                        className={classBind('col-2 col-lg-3')}
                                    >
                                        <button
                                            className={classBind(
                                                'documents-item__act'
                                            )}
                                        >
                                            <img
                                                src={icon.download}
                                                alt=''
                                                className={classBind(
                                                    'documents-item__act-logo'
                                                )}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className={classBind('documents__list')}>
                        {documents.map((document) => (
                            <DocumentItem
                                key={document.id}
                                document={document}
                            />
                        ))}
                    </ul>

                    <div className={classBind('documents__bottom')}>
                        <div
                            className={classBind(
                                'documents__page-show',
                                'd-lg-none'
                            )}
                        >
                            Hiển thị{' '}
                            <input
                                type='text'
                                value='10'
                                className={classBind(
                                    'documents__page-show--input'
                                )}
                            />{' '}
                            câu trả lời trong mỗi trang
                        </div>

                        <div className={classBind('paginate')}>
                            <button
                                className={classBind(
                                    'paginate__btn',
                                    'paginate__btn--disable'
                                )}
                            >
                                <img src={icon.paginate_prev_disable} alt='' />
                            </button>

                            <button
                                className={classBind(
                                    'paginate__page',
                                    'paginate__page--active'
                                )}
                            >
                                1
                            </button>

                            <button className={classBind('paginate__page')}>
                                2
                            </button>

                            <button className={classBind('paginate__page')}>
                                3
                            </button>

                            <button className={classBind('paginate__page')}>
                                ...
                            </button>

                            <button className={classBind('paginate__page')}>
                                10
                            </button>

                            <button className={classBind('paginate__btn')}>
                                <img src={icon.paginate_next} alt='' />
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Documents;
