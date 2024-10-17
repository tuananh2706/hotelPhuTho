import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import icon from '~/assets/icon';

const classBind = classNames.bind(styles);

function Footer() {
    const affiliateCompanies = [
        { id: 1, name: 'Công viên Văn hóa Đầm Sen' },
        { id: 2, name: 'Khu du lịch sinh thái Vàm Sát' },
        { id: 3, name: 'Khách sạn Ngọc Lan (Quận 1)' },
        { id: 4, name: 'Khách sạn Phú Thọ (Quận 11)' },
        { id: 5, name: 'Trung tâm Du lịch Đầm Sen' }
    ];

    const companyInfo = {
        address: '15 Đường số 2, Cư xá Lữ Gia, Phường 15, Quận 11, TP. HCM',
        phone: '02838650921',
        email: 'vanphong@damsenpark.vn',
        facebook: 'Phuthotourist'
    };

    return (
        <footer className={classBind('footer')}>
            <div className={classBind('container')}>
                <div className={classBind('footer__inner')}>
                    <div className={classBind('row gx-5 gy-xxl-4 gy-lg-4 gy-md-3')}>
                        <div className={classBind('col-4 col-xxl-6 col-lg-12')}>
                            <div className={classBind('footer__company')}>
                                <div className={classBind('footer__top')}>
                                    <Link to='/'>
                                        <img
                                            className={classBind('footer__top--logo')}
                                            src={icon.logo}
                                            alt='Logo Phu Tho Hotel'
                                        />
                                    </Link>
                                    <div className={classBind('footer__top--group')}>
                                        <h3 className={classBind('footer__top--label')}>
                                            CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ
                                        </h3>
                                        <h2 className={classBind('footer__top--name')}>
                                            PHUTHOTOURIST
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classBind('col-3 col-xxl-6 col-lg-12')}>
                            <div className={classBind('footer__contact')}>
                                <h3 className={classBind('footer__heading')}>LIÊN HỆ</h3>
                                <ul className={classBind('footer__contact--list')}>
                                    <li className={classBind('footer__contact--item')}>
                                        <img src={icon.point} alt='Địa chỉ' />
                                        <p className={classBind('footer__contact--name')}>
                                            {companyInfo.address}
                                        </p>
                                    </li>

                                    <li className={classBind('footer__contact--item')}>
                                        <img src={icon.phone} alt='Số điện thoại' />
                                        <p className={classBind('footer__contact--name')}>
                                            {companyInfo.phone}
                                        </p>
                                    </li>

                                    <li className={classBind('footer__contact--item')}>
                                        <img src={icon.mail} alt='Email' />
                                        <p className={classBind('footer__contact--name')}>
                                            {companyInfo.email}
                                        </p>
                                    </li>

                                    <li className={classBind('footer__contact--item')}>
                                        <img src={icon.facebook} alt='Facebook' />
                                        <p className={classBind('footer__contact--name')}>
                                            {companyInfo.facebook}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={classBind('col-5 col-xxl-12 col-lg-12')}>
                            <div className={classBind('footer__affiliate')}>
                                <h3 className={classBind('footer__heading')}>
                                    CÁC ĐƠN VỊ CÙNG HỆ THỐNG PHUTHOTOURIST
                                </h3>
                                <ul className={classBind('footer__affiliate--list')}>
                                    {affiliateCompanies.map((company) => (
                                        <li
                                            key={company.id}
                                            className={classBind('footer__affiliate--item')}
                                        >
                                            <p className={classBind('footer__affiliate--name')}>
                                                {company.name}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={classBind('footer__copyright')}>
                        Copyright ⓒ Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
