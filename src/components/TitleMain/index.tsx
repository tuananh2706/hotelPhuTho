import styles from './TitleMain.module.scss';
import classNames from 'classnames/bind';

const classBind = classNames.bind(styles);

interface TitleMainProps {
    text: string;
}

function TitleMain({ text }: TitleMainProps) {
    return (
        <h1 className={classBind('title-main')}>
            <span className={classBind('title-main__custom')}>{text}</span>
        </h1>
    );
}

export default TitleMain;
