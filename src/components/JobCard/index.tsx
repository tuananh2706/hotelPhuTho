import classNames from 'classnames/bind';
import styles from './JobCard.module.scss';
import icon from '~/assets/icons';
import Button from '../Button';

const cx = classNames.bind(styles);

<<<<<<< HEAD
interface jobCardProps {
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
}: jobCardProps) {
    return (
        <article className={cx('job-card', { 'job-card': mini })}>
            <div className={cx('job-card__top')}>
                <img src={image} alt='' className={cx('job-card__logo')} />

                <div className={cx('job-card__header')}>
                    <h2 className={cx('job-card__title')}>{name}</h2>
                    <p className={cx('job-card__label')}>{position}</p>
=======
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
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
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
<<<<<<< HEAD
                        <p className={cx('job-card__data-label')}>{address}</p>
=======
                        <p className={cx('job-card__data-label')}>
                            CVVH Đầm Sen
                        </p>
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                    </div>
                    <div className={cx('job-card__data')}>
                        <img
                            src={icon.clock_grey}
                            alt=''
                            className={cx('job-card__data-icon')}
                        />
                        <p className={cx('job-card__data-label')}>
<<<<<<< HEAD
                            {postedDate}
=======
                            2 tuần trước
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
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
<<<<<<< HEAD
                <p className={cx('job-card__desc-info')}>{jobDescription}</p>
            </div>

            <Button
                to={`/job-details?id=${id}`}
=======
                <p className={cx('job-card__desc-info')}>
                    Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh
                    doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du
                    lich, QT kinh doanh, Marketing. Am hiểu tâm lý ...
                </p>
            </div>

            <Button
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                className={cx('job-card__btn')}
                text='Xem chi tiết'
            ></Button>
        </article>
    );
}

export default JobCard;
