import styles from './Documents.module.scss';
import classNames from 'classnames/bind';

const classBind = classNames.bind(styles);

function Documents() {
    return <div className={classBind('documents')}>Tài liệu</div>;
}

export default Documents;
