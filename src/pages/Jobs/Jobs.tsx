import styles from './Jobs.module.scss';
import classNames from 'classnames/bind';

const classBind = classNames.bind(styles);

function Jobs() {
    return <div className={classBind('job')}>Tuyển dụng</div>;
}

export default Jobs;
