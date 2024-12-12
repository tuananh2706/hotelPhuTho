import React from 'react';
import classNames from 'classnames/bind';
import icon from '../../assets/icons';
import styles from './DocumentItem.module.scss';

const cx = classNames.bind(styles);

interface Document {
    id: number;
    name: string;
    createDate: string;
}

interface DocumentItemProps {
    document: Document;
}

const DocumentItem: React.FC<DocumentItemProps> = ({ document }) => {
    return (
        <li className={cx('documents-item')}>
            <div className={cx('row gy-lg-1 gy-md-0')}>
                <div className={cx('col-1 d-lg-none')}>
                    <span className={cx('documents-item__stt')}>
                        {document.id}
                    </span>
                </div>
                <div className={cx('col-6 col-lg-12')}>
                    <span className={cx('documents-item__name')}>
                        {document.name}
                    </span>
                </div>
                <div className={cx('col-3 col-lg-9')}>
                    <span className={cx('documents-item__create')}>
                        {document.createDate}
                    </span>
                </div>
                <div className={cx('col-2 col-lg-3')}>
                    <button className={cx('documents-item__act')}>
                        <img
                            src={icon.download}
                            alt=''
                            className={cx('documents-item__act-logo')}
                        />
                    </button>
                </div>
            </div>
        </li>
    );
};

export default DocumentItem;
