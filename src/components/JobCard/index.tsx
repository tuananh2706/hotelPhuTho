import classNames from 'classnames/bind';
import styles from './JobCard.module.scss';
import icon from '~/assets/icons';
import Button from '../Button';

const cx = classNames.bind(styles);

interface JobCardProps {
    id: string;
    mini?: boolean;
    active?: boolean;
    name: string;
    position: string;
    address: string;
    jobDescription: string[];
    image: string;
    postedDate: string;
}

function JobCard({
    id,
    mini = false,
    active = false,
    name,
    position,
    address,
    jobDescription,
    postedDate,
    image
}: JobCardProps) {
    const jobDescriptionString = jobDescription.join(' ');
    return (
        <article className={cx('job-card', { 'job-card--mini': mini })}>
            <div className={cx('job-card__top')}>
                <img src={image} alt='' className={cx('job-card__logo')} />

                <div className={cx('job-card__header')}>
                    <h2 className={cx('job-card__title')}>{name}</h2>
                    <p className={cx('job-card__label')}>{position}</p>
                </div>
            </div>

            <div className={cx('job-card__info')}>
                <div>
                    <div className={cx('job-card__data')}>
                        <img
                            src={icon.location_grey}
                            alt=''
                            className={cx('job-card__data-icon')}
                        />
                        <p className={cx('job-card__data-label')}>{address}</p>
                    </div>
                    <div className={cx('job-card__data')}>
                        <img
                            src={icon.clock_grey}
                            alt=''
                            className={cx('job-card__data-icon')}
                        />
                        <p className={cx('job-card__data-label')}>
                            {postedDate}
                        </p>
                    </div>
                </div>

                <div
                    className={cx('job-card__active', {
                        'job-card__active--true': active
                    })}
                >
                    Đang tuyển
                </div>
            </div>

            <div className={cx('job-card__desc')}>
                <p className={cx('job-card__desc-title')}>Mô tả công việc:</p>
                <p className={cx('job-card__desc-info')}>
                    {jobDescriptionString}
                </p>
            </div>

            <Button
                to={`/job-details?id=${id}`}
                className={cx('job-card__btn')}
                text='Xem chi tiết'
            />
        </article>
    );
}

export default JobCard;
