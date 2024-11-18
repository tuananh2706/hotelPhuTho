import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import React from 'react';

const cx = classNames.bind(styles);

interface ButtonProps {
    text: string;
    className?: string;
    to?: string;
    maxWidth?: string;
<<<<<<< HEAD
    onClick?: () => void;
}

function Button({ text, to, className, maxWidth, onClick }: ButtonProps) {
=======
}

function Button({ text, to, className, maxWidth }: ButtonProps) {
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
    const Comp: React.ElementType = to ? Link : 'button';

    return (
        <Comp
            className={cx('primary-btn', className)}
            {...(to && { to })}
            style={{ maxWidth }}
<<<<<<< HEAD
            onClick={onClick}
=======
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
        >
            {text}
        </Comp>
    );
}

export default Button;
