import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import icon from '~/assets/icons';
import { useState } from 'react';

const classBind = classNames.bind(styles);

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className={classBind('header')}>
            <nav className={classBind('topbar')}>
                <Link to='/' className={classBind('topbar__link--logo')}>
                    <img
                        className={classBind(
                            'topbar__logo',
                            'd-none',
                            'd-lg-block'
                        )}
                        src={icon.logo}
                        alt='Phu Tho Hotel'
                    />
                </Link>

                <ul
                    className={classBind('topbar__list', {
                        'd-lg-none': !isMenuOpen
                    })}
                >
                    <button
                        className={classBind(
                            'close-btn',
                            'd-none',
                            'd-lg-block'
                        )}
                        onClick={toggleMenu}
                    >
                        <img
                            src={icon.xmark}
                            alt='x-mark'
                            className={classBind('close-btn__icon')}
                        />
                    </button>

                    <li onClick={toggleMenu}>
                        <NavLink
                            className={({ isActive }) =>
                                classBind('topbar__link', {
                                    'topbar__link--active': isActive
                                })
                            }
                            to='/'
                        >
                            TRANG CHỦ
                        </NavLink>
                    </li>
                    <li onClick={toggleMenu}>
                        <NavLink
                            className={({ isActive }) =>
                                classBind('topbar__link', {
                                    'topbar__link--active': isActive
                                })
                            }
                            to='/blogs'
                        >
                            BÀI VIẾT
                        </NavLink>
                    </li>
                    <li className={classBind('d-lg-none')}>
                        <Link
                            to='/'
                            className={classBind(
                                'topbar__link--logo',
                                'd-lg-none'
                            )}
                        >
                            <img
                                className={classBind('topbar__logo')}
                                src={icon.logo}
                                alt='Phu Tho Hotel'
                            />
                        </Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <NavLink
                            className={({ isActive }) =>
                                classBind('topbar__link', {
                                    'topbar__link--active': isActive
                                })
                            }
                            to='/documents'
                        >
                            TÀI LIỆU
                        </NavLink>
                    </li>
                    <li onClick={toggleMenu}>
                        <NavLink
                            className={({ isActive }) =>
                                classBind('topbar__link', {
                                    'topbar__link--active': isActive
                                })
                            }
                            to='/jobs'
                        >
                            TUYỂN DỤNG
                        </NavLink>
                    </li>
                </ul>

                <button
                    className={classBind(
                        'topbar__more',
                        'd-none',
                        'd-lg-block'
                    )}
                    onClick={toggleMenu}
                >
                    <img
                        src={icon.menu}
                        alt='more'
                        className={classBind('topbar__more-icon')}
                    />
                </button>
            </nav>
        </header>
    );
}

export default Header;
