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
}

function Button({ text, to, className, maxWidth }: ButtonProps) {
    const Comp: React.ElementType = to ? Link : 'button';

    return (
        <Comp
            className={cx('primary-btn', className)}
            {...(to && { to })}
            style={{ maxWidth }}
        >
            {text}
        </Comp>
    );
}

export default Button;
