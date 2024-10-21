import { Link } from 'react-router-dom';
import styles from './PostItem.module.scss';
import classNames from 'classnames/bind';

const classBind = classNames.bind(styles);

interface PostItemProps {
    host?: string;
    title: string;
    desc?: string;
    tags?: { name: string }[];
    view?: string;
    postDate?: string;
    image?: string;
    hostClassName?: string;
    titleClassName?: string;
    descClassName?: string;
    viewClassName?: string;
}

function PostItem({
    host,
    title,
    desc,
    tags,
    view,
    postDate,
    image,
    hostClassName,
    titleClassName,
    descClassName,
    viewClassName
}: PostItemProps) {
    return (
        <article className={classBind('postitem')}>
            <Link to='#'>
                <div className={classBind('postitem__img-wrap')}>
                    {image && (
                        <img
                            src={image}
                            alt=''
                            className={classBind('postitem__img')}
                        />
                    )}
                </div>
            </Link>
            <div className={classBind('postitem__info')}>
                {host && (
                    <div className={classBind('postitem__label')}>
                        <p
                            className={classBind(
                                'postitem__host',
                                hostClassName
                            )}
                        >
                            {host}
                        </p>
                        <div className={classBind('postitem__active')}></div>
                    </div>
                )}

                <Link to='#'>
                    <h3
                        className={classBind('postitem__title', titleClassName)}
                    >
                        {title}
                    </h3>
                </Link>

                {desc && (
                    <p className={classBind('postitem__desc', descClassName)}>
                        {desc}
                    </p>
                )}

                {tags && tags.length > 0 && (
                    <div className={classBind('postitem__tags')}>
                        {tags.map((tag, index) => (
                            <div
                                key={index}
                                className={classBind('postitem__tag')}
                            >
                                {tag.name}
                            </div>
                        ))}
                    </div>
                )}

                <div className={classBind('postitem__data')}>
                    {view && (
                        <p
                            className={classBind(
                                'postitem__view',
                                viewClassName
                            )}
                        >
                            {view} lượt xem
                        </p>
                    )}
                    {view && postDate && (
                        <div className={classBind('postitem__dot')}></div>
                    )}
                    {postDate && (
                        <p className={classBind('postitem__date')}>
                            {postDate}
                        </p>
                    )}
                </div>
            </div>
        </article>
    );
}

export default PostItem;
