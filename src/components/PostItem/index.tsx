import { Link } from 'react-router-dom';
import styles from './PostItem.module.scss';
import classNames from 'classnames/bind';

const classBind = classNames.bind(styles);

interface PostItemProps {
<<<<<<< HEAD
    id: string;
=======
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
    infoClassName?: string;
    host?: string;
    title: string;
    desc?: string;
<<<<<<< HEAD
    tags?: string[];
=======
    tags?: { name: string; tagClassName?: string }[];
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
    view?: string;
    postDate?: string;
    image?: string;
    hostClassName?: string;
    titleClassName?: string;
    descClassName?: string;
    viewClassName?: string;
    dateClassName?: string;
    tagContainerClassName?: string;
    mini?: boolean;
}

function PostItem({
<<<<<<< HEAD
    id,
=======
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
    host,
    title,
    desc,
    tags,
    view,
    postDate,
    image,
    infoClassName,
    hostClassName,
    titleClassName,
    descClassName,
    viewClassName,
    dateClassName,
    tagContainerClassName,
    mini = false
}: PostItemProps) {
    return (
<<<<<<< HEAD
        <article className={classBind('postitem', { 'postitem--mini': mini })}>
            <Link to={`/blog-details?id=${id}`}>
=======
        <article className={classBind('postitem', { 'postcard--mini': mini })}>
            <Link to='#'>
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                <div className={classBind('postitem__img-wrap')}>
                    {image && (
                        <img
                            src={image}
<<<<<<< HEAD
                            alt='Post image'
=======
                            alt=''
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                            className={classBind('postitem__img')}
                        />
                    )}
                </div>
            </Link>
            <div className={classBind('postitem__info', infoClassName)}>
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
                    <div
                        className={classBind(
                            'postitem__tags',
                            tagContainerClassName
                        )}
                    >
                        {tags.map((tag, index) => (
                            <div
                                key={index}
<<<<<<< HEAD
                                className={classBind('postitem__tag', tags)}
                            >
                                {tag}
=======
                                className={`${classBind('postitem__tag')},
                                    ${tag.tagClassName}`}
                            >
                                {tag.name}
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
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
                        <p
                            className={classBind(
                                'postitem__date',
                                dateClassName
                            )}
                        >
                            {postDate}
                        </p>
                    )}
                </div>
            </div>
        </article>
    );
}

export default PostItem;
