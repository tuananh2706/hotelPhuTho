import classNames from 'classnames/bind';
import styles from './JobCard.module.scss';
import icon from '~/assets/icons';
import Button from '../Button';

const cx = classNames.bind(styles);

interface JobCardProps {
    mini?: boolean;
    active?: boolean;
    jobtext: string;
    configurationworktext: string;
}

function JobCard({
    mini = false,
    active = false,
    jobtext,
    configurationworktext
}: JobCardProps) {
    return (
        <article className={cx('job-card', { 'job-card': mini })}>
            <div className={cx('job-card__top')}>
                <img
                    src={icon.damsen_logo}
                    alt=''
                    className={cx('job-card__logo')}
                />

                <div className={cx('job-card__header')}>
                    <h2 className={cx('job-card__title', jobtext)}>
                        {jobtext}
                    </h2>
                    <p className={cx('job-card__label', configurationworktext)}>
                        Nhân viên chính thức
                    </p>
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
                        <p className={cx('job-card__data-label')}>
                            CVVH Đầm Sen
                        </p>
                    </div>
                    <div className={cx('job-card__data')}>
                        <img
                            src={icon.clock_grey}
                            alt=''
                            className={cx('job-card__data-icon')}
                        />
                        <p className={cx('job-card__data-label')}>
                            2 tuần trước
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
                    Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh
                    doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du
                    lich, QT kinh doanh, Marketing. Am hiểu tâm lý ...
                </p>
            </div>

            <Button
                className={cx('job-card__btn')}
                text='Xem chi tiết'
            ></Button>
        </article>
    );
}

export default JobCard;
