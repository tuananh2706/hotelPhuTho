import styles from './Banner.module.scss';
import image from '~/assets/images';
import classNames from 'classnames/bind';

const classBind = classNames.bind(styles);
const Banner = () => {
    return (
        <div className={classBind('home-banner')}>
            <div className={classBind('home-banner__img-wrap--1', 'd-md-none')}>
                <img
                    src={image.banner_img_1}
                    alt=''
                    className={classBind('home-banner__img--1', 'd-md-none')}
                />
                <div className={classBind('caption', 'caption-right')}>
                    Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022
                </div>
            </div>
            <div className={classBind('home-banner__img-wrap--2')}>
                <img
                    src={image.banner_img_2}
                    alt=''
                    className={classBind('home-banner__img--2')}
                />
                <div className={classBind('caption', 'caption-right')}>
                    Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022
                </div>
            </div>
            <div className={classBind('home-banner__img-wrap--3')}>
                <img
                    src={image.banner_img_3}
                    alt=''
                    className={classBind('home-banner__img--3')}
                />
                <div className={classBind('caption', 'caption-main')}>
                    Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022
                </div>
            </div>
            <div className={classBind('home-banner__img-wrap--4')}>
                <img
                    src={image.banner_img_4}
                    alt=''
                    className={classBind('home-banner__img--4')}
                />
                <div className={classBind('caption', 'caption-left')}>
                    Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022
                </div>
            </div>
            <div className={classBind('home-banner__img-wrap--5', 'd-md-none')}>
                <img
                    src={image.banner_img_5}
                    alt=''
                    className={classBind('home-banner__img--5', 'd-md-none')}
                />
                <div className={classBind('caption', 'caption-left')}>
                    Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022
                </div>
            </div>{' '}
        </div>
    );
};

export default Banner;
