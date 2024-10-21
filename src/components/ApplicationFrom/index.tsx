import styles from './Application.module.scss';
import classNames from 'classnames/bind';

const classBind = classNames.bind(styles);

function Application() {
    return (
        <div className={classBind('application-form')}>
            <div className={classBind('application-form__title')}>
                Ứng tuyển Online
            </div>
            <div className={classBind('application-form__content')}>
                <div className={classBind('application-form__input-group')}>
                    <div
                        className={classBind('application-form__personal-info')}
                    >
                        <div className={classBind('application-form__field')}>
                            <label
                                className={classBind('application-form__label')}
                            >
                                Họ tên
                            </label>
                            <div
                                className={classBind(
                                    'application-form__input-wrapper'
                                )}
                            >
                                <div
                                    className={classBind(
                                        'application-form__input-text'
                                    )}
                                >
                                    Nguyễn Văn A
                                </div>
                            </div>
                        </div>

                        <div className={classBind('application-form__field')}>
                            <label
                                className={classBind('application-form__label')}
                            >
                                Năm sinh
                            </label>
                            <div
                                className={classBind(
                                    'application-form__input-wrapper'
                                )}
                            >
                                <div
                                    className={classBind(
                                        'application-form__input-text'
                                    )}
                                >
                                    12-12-2000
                                </div>
                            </div>
                        </div>

                        <div className={classBind('application-form__field')}>
                            <label
                                className={classBind('application-form__label')}
                            >
                                Nơi ở hiện nay
                            </label>
                            <div
                                className={classBind(
                                    'application-form__input-wrapper'
                                )}
                            >
                                <div
                                    className={classBind(
                                        'application-form__input-text'
                                    )}
                                >
                                    Hà Nội
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Application;
