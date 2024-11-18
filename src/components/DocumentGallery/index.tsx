import styles from './DocumentGallery.module.scss';
import classNames from 'classnames/bind';
import image from '~/assets/images';

const cx = classNames.bind(styles);

interface DocumentGalleryProps {
    documenttext: string;
}

function DocumentGallery({ documenttext }: DocumentGalleryProps) {
    return (
        <div className={cx('documents__show')}>
            <div className={cx('row row-cols-4 row-cols-lg-3 gx-2  gy-2')}>
                <div className={cx('col')}>
                    <div className={cx('documents__img-wrap')}>
                        <img
                            src={image.document_img_1}
                            alt=''
                            className={cx('documents__img')}
                        />
                        <img
                            src={image.document_img_9}
                            alt=''
                            className={cx('documents__img-doc')}
                        />
                        <p className={cx('documents__text')}>{documenttext}</p>
                    </div>
                </div>
                <div className={cx('col')}>
                    <div className={cx('documents__img-wrap')}>
                        <img
                            src={image.document_img_2}
                            alt=''
                            className={cx('documents__img')}
                        />
                        <img
                            src={image.document_img_9}
                            alt=''
                            className={cx('documents__img-doc')}
                        />
                        <p className={cx('documents__text')}>{documenttext}</p>
                    </div>
                </div>
                <div className={cx('col')}>
                    <div className={cx('documents__img-wrap')}>
                        <img
                            src={image.document_img_3}
                            alt=''
                            className={cx('documents__img')}
                        />
                        <img
                            src={image.document_img_9}
                            alt=''
                            className={cx('documents__img-doc')}
                        />
                        <p className={cx('documents__text')}>{documenttext}</p>
                    </div>
                </div>
                <div className={cx('col')}>
                    <div className={cx('documents__img-wrap')}>
                        <img
                            src={image.document_img_4}
                            alt=''
                            className={cx('documents__img')}
                        />
                        <img
                            src={image.document_img_9}
                            alt=''
                            className={cx('documents__img-doc')}
                        />
                        <p className={cx('documents__text')}>{documenttext}</p>
                    </div>
                </div>
                <div className={cx('col')}>
                    <div className={cx('documents__img-wrap')}>
                        <img
                            src={image.document_img_5}
                            alt=''
                            className={cx('documents__img')}
                        />
                        <img
                            src={image.document_img_9}
                            alt=''
                            className={cx('documents__img-doc')}
                        />
                        <p className={cx('documents__text')}>{documenttext}</p>
                    </div>
                </div>
                <div className={cx('col')}>
                    <div className={cx('documents__img-wrap')}>
                        <img
                            src={image.document_img_6}
                            alt=''
                            className={cx('documents__img')}
                        />
                        <img
                            src={image.document_img_9}
                            alt=''
                            className={cx('documents__img-doc')}
                        />
                        <p className={cx('documents__text')}>{documenttext}</p>
                    </div>
                </div>
                <div className={cx('col d-lg-none')}>
                    <div className={cx('documents__img-wrap')}>
                        <img
                            src={image.document_img_7}
                            alt=''
                            className={cx('documents__img')}
                        />
                        <img
                            src={image.document_img_9}
                            alt=''
                            className={cx('documents__img-doc')}
                        />
                        <p className={cx('documents__text')}>{documenttext}</p>
                    </div>
                </div>
                <div className={cx('col d-lg-none')}>
                    <div className={cx('documents__img-wrap')}>
                        <img
                            src={image.document_img_8}
                            alt=''
                            className={cx('documents__img')}
                        />
                        <img
                            src={image.document_img_9}
                            alt=''
                            className={cx('documents__img-doc')}
                        />
                        <p className={cx('documents__text')}>{documenttext}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DocumentGallery;
