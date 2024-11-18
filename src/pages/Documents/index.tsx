import classNames from 'classnames/bind';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

<<<<<<< HEAD
// import image from '~/assets/images';
=======
import image from '~/assets/images';
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
import styles from './Documents.module.scss';
import TitleMain from '~/components/TitleMain';
import icon from '~/assets/icons';

<<<<<<< HEAD
import DocumentItem from '~/components/DocumentItem';
import DocumentGallery from '~/components/DocumentGallery';

const classBind = classNames.bind(styles);
=======
const cx = classNames.bind(styles);
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

function Documents() {
<<<<<<< HEAD
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
=======
    return (
        <div className={cx('documents')}>
            <div className={cx('documents__intro')}>
                <TitleMain text='TÀI LIỆU' />
                <div className={cx('documents__show')}>
                    <div
                        className={cx(
                            'row row-cols-4 row-cols-lg-3 gx-2  gy-2'
                        )}
                    >
                        <div className={cx('col')}>
                            <div className={cx('documents__img-wrap')}>
                                <img
                                    src={image.document_img_1}
                                    alt=''
                                    className={cx('documents__img')}
                                />
                            </div>
                        </div>
                        <div className={cx('col')}>
                            <div className={cx('documents__img-wrap')}>
                                <img
                                    src={image.document_img_2}
                                    alt=''
                                    className={cx('documents__img')}
                                />
                            </div>
                        </div>
                        <div className={cx('col')}>
                            <div className={cx('documents__img-wrap')}>
                                <img
                                    src={image.document_img_3}
                                    alt=''
                                    className={cx('documents__img')}
                                />
                            </div>
                        </div>
                        <div className={cx('col')}>
                            <div className={cx('documents__img-wrap')}>
                                <img
                                    src={image.document_img_4}
                                    alt=''
                                    className={cx('documents__img')}
                                />
                            </div>
                        </div>
                        <div className={cx('col')}>
                            <div className={cx('documents__img-wrap')}>
                                <img
                                    src={image.document_img_5}
                                    alt=''
                                    className={cx('documents__img')}
                                />
                            </div>
                        </div>
                        <div className={cx('col')}>
                            <div className={cx('documents__img-wrap')}>
                                <img
                                    src={image.document_img_6}
                                    alt=''
                                    className={cx('documents__img')}
                                />
                            </div>
                        </div>
                        <div className={cx('col d-lg-none')}>
                            <div className={cx('documents__img-wrap')}>
                                <img
                                    src={image.document_img_7}
                                    alt=''
                                    className={cx('documents__img')}
                                />
                            </div>
                        </div>
                        <div className={cx('col d-lg-none')}>
                            <div className={cx('documents__img-wrap')}>
                                <img
                                    src={image.document_img_8}
                                    alt=''
                                    className={cx('documents__img')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('container')}>
                <section className={cx('documents__main')}>
                    <div className={cx('documents__top')}>
                        <div className={cx('documents-act')}>
                            <p
                                className={cx(
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                    'documents-act__name',
                                    'd-md-none'
                                )}
                            >
                                Ngày tạo
                            </p>
                            <div
<<<<<<< HEAD
                                className={classBind(
=======
                                className={cx(
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                    'documents-datepicker',
                                    'd-md-none'
                                )}
                            >
                                <Space direction='vertical'>
                                    <DatePicker
<<<<<<< HEAD
                                        className={classBind(
=======
                                        className={cx(
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                            'documents-datepicker__select'
                                        )}
                                        onChange={onChange}
                                    />
                                </Space>
                                <img
                                    src={icon.arrow_right}
                                    alt=''
<<<<<<< HEAD
                                    className={classBind(
                                        'documents-datepicker--to'
                                    )}
                                />
                                <Space direction='vertical'>
                                    <DatePicker
                                        className={classBind(
=======
                                    className={cx('documents-datepicker--to')}
                                />
                                <Space direction='vertical'>
                                    <DatePicker
                                        className={cx(
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                            'documents-datepicker__select'
                                        )}
                                        onChange={onChange}
                                    />
                                </Space>
                            </div>
                        </div>

<<<<<<< HEAD
                        <div className={classBind('documents-act')}>
                            <p
                                className={classBind(
=======
                        <div className={cx('documents-act')}>
                            <p
                                className={cx(
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                    'documents-act__name',
                                    'd-md-none'
                                )}
                            >
                                Từ khoá
                            </p>
<<<<<<< HEAD
                            <div className={classBind('documents-search')}>
                                <img
                                    src={icon.search}
                                    alt=''
                                    className={classBind(
                                        'documents-search__icon'
                                    )}
=======
                            <div className={cx('documents-search')}>
                                <img
                                    src={icon.search}
                                    alt=''
                                    className={cx('documents-search__icon')}
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                />

                                <input
                                    type='text'
<<<<<<< HEAD
                                    className={classBind(
                                        'documents-search__input'
                                    )}
=======
                                    className={cx('documents-search__input')}
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                    placeholder='Tìm kiếm'
                                />

                                <img
                                    src={icon.time}
                                    alt=''
<<<<<<< HEAD
                                    className={classBind(
                                        'documents-search__time'
                                    )}
=======
                                    className={cx('documents-search__time')}
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                />
                            </div>
                        </div>

                        <div
<<<<<<< HEAD
                            className={classBind(
=======
                            className={cx(
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                'documents-filter',
                                'd-none',
                                'd-md-flex'
                            )}
                        >
                            <img
                                src={icon.filter}
                                alt=''
<<<<<<< HEAD
                                className={classBind('documents-filter__icon')}
=======
                                className={cx('documents-filter__icon')}
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                            />
                        </div>
                    </div>

<<<<<<< HEAD
                    <ul className={classBind('documents__list')}>
                        {/* header */}
                        <li
                            className={classBind(
=======
                    <ul className={cx('documents__list')}>
                        {/* header */}
                        <li
                            className={cx(
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                'documents-item',
                                'documents-item--header',
                                'd-lg-none'
                            )}
                        >
<<<<<<< HEAD
                            <div className={classBind('row')}>
                                <div className={classBind('col-1 d-lg-none')}>
                                    <span
                                        className={classBind(
=======
                            <div className={cx('row')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span
                                        className={cx(
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                            'documents-item__header',
                                            'documents-item__stt'
                                        )}
                                    >
                                        STT
                                    </span>
                                </div>

<<<<<<< HEAD
                                <div className={classBind('col-6')}>
                                    <span
                                        className={classBind(
=======
                                <div className={cx('col-6')}>
                                    <span
                                        className={cx(
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                            'documents-item__header',
                                            'documents-item__name'
                                        )}
                                    >
                                        Tên tài liệu
                                    </span>
                                </div>

<<<<<<< HEAD
                                <div className={classBind('col-3')}>
                                    <span
                                        className={classBind(
=======
                                <div className={cx('col-3')}>
                                    <span
                                        className={cx(
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                            'documents-item__header',
                                            'documents-item__name'
                                        )}
                                    >
                                        Ngày tạo
                                    </span>
                                </div>

<<<<<<< HEAD
                                <div className={classBind('col-2')}>
                                    <span
                                        className={classBind(
=======
                                <div className={cx('col-2')}>
                                    <span
                                        className={cx(
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
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

<<<<<<< HEAD
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
=======
                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        1
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        Khám phá Hội An - Việt Nam
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        2
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        Hải Phòng yêu cầu người dân không ra
                                        khỏi nhà sau 22h
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        3
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        Chuẩn bị gì sau khi tiêm vaccin Covid
                                        -19?
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        4
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        SNOW CHANNEL 1
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        5
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        Chuẩn bị gì sau khi tiêm vaccin Covid
                                        -19?
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        6
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        Hải Phòng yêu cầu người dân không ra
                                        khỏi nhà sau 22h
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        7
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        Chuẩn bị gì sau khi tiêm vaccin Covid
                                        -19?
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        8
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        Du lịch ở Tp.HCM đang như thế nào? 101
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        9
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        SNOW CHANNEL 1
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>

                        <li className={cx('documents-item')}>
                            <div className={cx('row gy-lg-1 gy-md-0')}>
                                <div className={cx('col-1 d-lg-none')}>
                                    <span className={cx('documents-item__stt')}>
                                        10
                                    </span>
                                </div>

                                <div className={cx('col-6 col-lg-12')}>
                                    <span
                                        className={cx('documents-item__name')}
                                    >
                                        Hải Phòng yêu cầu người dân không ra
                                        khỏi nhà sau 22h
                                    </span>
                                </div>

                                <div className={cx('col-3 col-lg-9')}>
                                    <span
                                        className={cx('documents-item__create')}
                                    >
                                        03/03/12 22:43
                                    </span>
                                </div>

                                <div className={cx('col-2 col-lg-3')}>
                                    <button
                                        className={cx('documents-item__act')}
                                    >
                                        <img
                                            src={icon.download}
                                            alt=''
                                            className={cx(
                                                'documents-item__act-logo'
                                            )}
                                        />
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className={cx('documents__bottom')}>
                        <div
                            className={cx('documents__page-show', 'd-lg-none')}
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                        >
                            Hiển thị{' '}
                            <input
                                type='text'
                                value='10'
<<<<<<< HEAD
                                className={classBind(
                                    'documents__page-show--input'
                                )}
=======
                                className={cx('documents__page-show--input')}
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                            />{' '}
                            câu trả lời trong mỗi trang
                        </div>

<<<<<<< HEAD
                        <div className={classBind('paginate')}>
                            <button
                                className={classBind(
=======
                        <div className={cx('paginate')}>
                            <button
                                className={cx(
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                    'paginate__btn',
                                    'paginate__btn--disable'
                                )}
                            >
                                <img src={icon.paginate_prev_disable} alt='' />
                            </button>

                            <button
<<<<<<< HEAD
                                className={classBind(
=======
                                className={cx(
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                    'paginate__page',
                                    'paginate__page--active'
                                )}
                            >
                                1
                            </button>

<<<<<<< HEAD
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
=======
                            <button className={cx('paginate__page')}>2</button>

                            <button className={cx('paginate__page')}>3</button>

                            <button className={cx('paginate__page')}>
                                ...
                            </button>

                            <button className={cx('paginate__page')}>10</button>

                            <button className={cx('paginate__btn')}>
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
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
