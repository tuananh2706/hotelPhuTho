import styles from './Jobs.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Jobs() {
    return <div className={cx('job')}>Tuyển dụng</div>;
}

export default Jobs;
