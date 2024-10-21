import styles from './Blogs.module.scss';
import classNames from 'classnames/bind';

const classBind = classNames.bind(styles);

function Blogs() {
    return <div className={classBind('blog')}>Bài viết</div>;
}

export default Blogs;
