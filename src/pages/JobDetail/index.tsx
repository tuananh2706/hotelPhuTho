import classNames from 'classnames/bind';
import styles from './JobDetail.module.scss';
import icon from '~/assets/icons';
import { useFetchJobByIdQuery } from '~/apis/Jobs.api';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Application from '~/components/ApplicationFrom';

const classBind = classNames.bind(styles);

function JobDetail() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data: job } = useFetchJobByIdQuery(id!);

    if (!job) return <div>No job found.</div>;

    console.log(job);

    return (
        <div className={classBind('container')}>
            <div className={classBind('job')}>
                <div className={classBind('job__top')}>
                    <img
                        src={job.image}
                        alt=''
                        className={classBind('job__logo')}
                    />

                    <div className={classBind('job__title')}>
                        <h1 className={classBind('job__heading')}>
                            {job.name}
                        </h1>

                        <p className={classBind('job__label')}>
                            {job.position}
                        </p>

                        <div className={classBind('job__info')}>
                            <div className={classBind('job__info--row')}>
                                <div className={classBind('job__data')}>
                                    <img
                                        src={icon.location_grey}
                                        alt=''
                                        className={classBind('job__data-icon')}
                                    />
                                    <p className={classBind('job__data-label')}>
                                        {job.address}
                                    </p>
                                </div>
                                <div className={classBind('job__data')}>
                                    <img
                                        src={icon.clock_grey}
                                        alt=''
                                        className={classBind('job__data-icon')}
                                    />
                                    <p className={classBind('job__data-label')}>
                                        {job.postedDate}
                                    </p>
                                </div>
                            </div>
                            <div
                                className={classBind('job__active', {
                                    'job__active--true': true
                                })}
                            >
                                Đang tuyển
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classBind('job__img-wrap')}>
                    <img
                        src={job.image}
                        alt=''
                        className={classBind('job__img')}
                    />
                </div>

                <div className={classBind('recruitment')}>
                    <h2 className={classBind('recruitment__heading')}>
                        Chi tiết tin tuyển dụng
                    </h2>
                    <div className={classBind('recruitment__info')}>
                        <div className={classBind('recruitment__row')}>
                            <h3 className={classBind('recruitment__header')}>
                                Vị trí
                            </h3>
                            <p className={classBind('recruitment__desc')}>
                                {job.name}
                            </p>
                        </div>

                        <div className={classBind('recruitment__row')}>
                            <h3 className={classBind('recruitment__header')}>
                                Số lượng
                            </h3>
                            <p className={classBind('recruitment__desc')}>
                                {job.number}
                            </p>
                        </div>

                        <div className={classBind('recruitment__row')}>
                            <h3 className={classBind('recruitment__header')}>
                                Nơi làm việc
                            </h3>
                            <p className={classBind('recruitment__desc')}>
                                {job.address}
                            </p>
                        </div>

                        <div className={classBind('recruitment__row')}>
                            <h3 className={classBind('recruitment__header')}>
                                Địa chỉ làm việc
                            </h3>
                            <p className={classBind('recruitment__desc')}>
                                {job.location}
                            </p>
                        </div>

                        <div className={classBind('recruitment__row')}>
                            <h3 className={classBind('recruitment__header')}>
                                Mô tả công việc
                            </h3>
                            <p className={classBind('recruitment__desc')}>
                                <ul>
                                    {job.jobDescription.map((item, index) => {
                                        return <li key={index}>{item}</li>;
                                    })}
                                </ul>
                            </p>
                        </div>

                        <div className={classBind('recruitment__row')}>
                            <h3 className={classBind('recruitment__header')}>
                                Ngày làm việc
                            </h3>
                            <p className={classBind('recruitment__desc')}>
                                ...
                            </p>
                        </div>
                        <div className={classBind('recruitment__row')}>
                            <h3 className={classBind('recruitment__header')}>
                                Giờ làm việc
                            </h3>
                            <p className={classBind('recruitment__desc')}>
                                Giờ hành chính
                            </p>
                        </div>

                        <div className={classBind('recruitment__row')}>
                            <h3 className={classBind('recruitment__header')}>
                                Quyền lợi
                            </h3>
                            <p className={classBind('recruitment__desc')}>
                                <ul>
                                    {job.interest.map((item, index) => {
                                        return <li key={index}>{item}</li>;
                                    })}
                                </ul>
                            </p>
                        </div>

                        <div className={classBind('recruitment__row')}>
                            <h3 className={classBind('recruitment__header')}>
                                Yêu cầu
                            </h3>
                            <p className={classBind('recruitment__desc')}>
                                <ul>
                                    {job.nedds.map((item, index) => {
                                        return <li key={index}>{item}</li>;
                                    })}
                                </ul>
                            </p>
                        </div>

                        <div className={classBind('recruitment__row')}>
                            <h3 className={classBind('recruitment__header')}>
                                Độ tuổi
                            </h3>
                            <p className={classBind('recruitment__desc')}>
                                ...
                            </p>
                        </div>
                        <div className={classBind('recruitment__row')}>
                            <h3 className={classBind('recruitment__header')}>
                                Trình độ
                            </h3>
                            <p className={classBind('recruitment__desc')}>
                                {job.level}
                            </p>
                        </div>
                        <div className={classBind('recruitment__row')}>
                            <h3 className={classBind('recruitment__header')}>
                                Hồ sơ gồm
                            </h3>
                            <p className={classBind('recruitment__desc')}>
                                Thông tin ứng tuyển:
                                <ul>
                                    <li>
                                        Ứng viên vui lòng gửi CV đến email:
                                        tuyendung@damsenpark.vn.
                                    </li>
                                    <li>
                                        Hoặc nộp hồ sơ trực tiếp tại Trụ sở Văn
                                        phòng Công ty: 3 Hòa Bình, Phường 3,
                                        Quận 11, TP.HCM.
                                    </li>
                                </ul>
                                (ĐT: 028 38 650 921 - Phòng Nhân sự).
                            </p>
                        </div>
                    </div>
                </div>
                <Application />
            </div>
        </div>
    );
}

export default JobDetail;
