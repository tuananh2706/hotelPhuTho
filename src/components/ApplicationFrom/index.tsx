import styles from './Application.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const classBind = classNames.bind(styles);

function Application() {
    return (
        <form className={classBind('job-form')}>
            <h2 className={classBind('job-form__heading')}>Ứng tuyển Online</h2>

            <div className={classBind('job-form__row')}>
                <div className={classBind('form__group')}>
                    <label>
                        <p className={classBind('form__label')}>Họ tên</p>
                        <input
                            type='text'
                            className={classBind('form__input')}
                            placeholder='Nguyễn Văn A'
                        />
                    </label>
                </div>

                <div className={classBind('form__group')}>
                    <p className={classBind('form__label')}>Giới tính</p>
                    <div className={classBind('form__group--radius')}>
                        <label className={classBind('form__group--check')}>
                            <input
                                type='radio'
                                name='gender'
                                id='male'
                                className={classBind('form__input--radius')}
                            />
                            <p className={classBind('form__label')}>Nam</p>
                        </label>

                        <label className={classBind('form__group--check')}>
                            <input
                                type='radio'
                                name='gender'
                                id='female'
                                className={classBind('form__input--radius')}
                            />
                            <p className={classBind('form__label')}>Nữ</p>
                        </label>
                    </div>
                </div>
            </div>

            <div className={classBind('job-form__row')}>
                <div className={classBind('form__group')}>
                    <label>
                        <p className={classBind('form__label')}>Năm sinh</p>
                        <input
                            type='text'
                            className={classBind('form__input')}
                            placeholder='12-12-2000'
                        />
                    </label>
                </div>

                <div className={classBind('form__group')}>
                    <label>
                        <p className={classBind('form__label')}>Nơi sinh</p>
                        <input
                            type='text'
                            className={classBind('form__input')}
                            placeholder='Phường 6, Quận Tân Bình, TP HCM'
                        />
                    </label>
                </div>
            </div>

            <div className={classBind('job-form__row')}>
                <div className={classBind('form__group')}>
                    <label>
                        <p className={classBind('form__label')}>
                            Nơi ở hiện tại
                        </p>
                        <input
                            type='text'
                            className={classBind('form__input')}
                            placeholder='123 Âu Cơ, Phường 9, Tân Bình, TP HCM'
                        />
                    </label>
                </div>

                <div className={classBind('form__group')}>
                    <label>
                        <p className={classBind('form__label')}>Điện thoại</p>
                        <input
                            type='text'
                            className={classBind('form__input')}
                            placeholder='0123456789'
                        />
                    </label>
                </div>
            </div>

            <div className={classBind('job-form__row')}>
                <div className={classBind('form__group')}>
                    <label>
                        <p className={classBind('form__label')}>Email</p>
                        <input
                            type='text'
                            className={classBind('form__input')}
                            placeholder='Nguyenvana@gmail.com'
                        />
                    </label>
                </div>

                <div className={classBind('form__group')}>
                    <label>
                        <p className={classBind('form__label')}>
                            Facebook cá nhân{' '}
                        </p>
                        <input
                            type='text'
                            className={classBind('form__input')}
                            placeholder='facebook.com.vn'
                        />
                    </label>
                </div>
            </div>

            <div className={classBind('job-form__row')}>
                <div className={classBind('form__group')}>
                    <label>
                        <p className={classBind('form__label')}>Trình độ</p>
                        <input
                            type='text'
                            className={classBind('form__input')}
                            placeholder='Đại học'
                        />
                    </label>
                </div>

                <div className={classBind('form__group')}>
                    <label>
                        <p className={classBind('form__label')}>Đính kèm CV</p>
                        <input
                            type='text'
                            className={classBind('form__input')}
                            placeholder='Không có tập tin nào được chọn'
                        />
                    </label>
                </div>
            </div>

            <div className={classBind('job-form__row')}>
                <div className={classBind('form__group')}>
                    <p className={classBind('form__label')}>
                        Bạn có sẵn sàng đi công tác dài ngày
                    </p>
                    <div className={classBind('form__group--radius')}>
                        <label className={classBind('form__group--check')}>
                            <input
                                type='radio'
                                name='collaborate'
                                id='yes'
                                className={classBind('form__input--radius')}
                            />
                            <p className={classBind('form__label')}>Có</p>
                        </label>

                        <label className={classBind('form__group--check')}>
                            <input
                                type='radio'
                                name='collaborate'
                                id='some-time'
                                className={classBind('form__input--radius')}
                            />
                            <p className={classBind('form__label')}>
                                Tuỳ thời điểm
                            </p>
                        </label>

                        <label className={classBind('form__group--check')}>
                            <input
                                type='radio'
                                name='collaborate'
                                id='no'
                                className={classBind('form__input--radius')}
                            />
                            <p className={classBind('form__label')}>Không</p>
                        </label>
                    </div>
                </div>

                <div className={classBind('form__group')}>
                    <p className={classBind('form__label')}>
                        Bạn có sẵn sàng làm thêm giờ
                    </p>
                    <div className={classBind('form__group--radius')}>
                        <label className={classBind('form__group--check')}>
                            <input
                                type='radio'
                                name='overtime'
                                id='yes'
                                className={classBind('form__input--radius')}
                            />
                            <p className={classBind('form__label')}>Có</p>
                        </label>

                        <label className={classBind('form__group--check')}>
                            <input
                                type='radio'
                                name='overtime'
                                id='some-time'
                                className={classBind('form__input--radius')}
                            />
                            <p className={classBind('form__label')}>
                                Tuỳ thời điểm
                            </p>
                        </label>

                        <label className={classBind('form__group--check')}>
                            <input
                                type='radio'
                                name='overtime'
                                id='no'
                                className={classBind('form__input--radius')}
                            />
                            <p className={classBind('form__label')}>Không</p>
                        </label>
                    </div>
                </div>
            </div>

            <div className={classBind('job-form__row')}>
                <label>
                    <p className={classBind('form__label')}>
                        Những nơi đã từng làm việc trước đây (ghi rõ vị trí)
                    </p>
                    <textarea
                        name=''
                        id=''
                        className={classBind('form__textarea')}
                        placeholder='Những nơi đã từng làm việc trước đây'
                    ></textarea>
                </label>
            </div>

            <div className={classBind('job-form__row')}>
                <label>
                    <p className={classBind('form__label')}>
                        Kinh nghiệm bản thân
                    </p>
                    <textarea
                        name=''
                        id=''
                        className={classBind('form__textarea')}
                        placeholder='Kinh nghiệm bản thân'
                    ></textarea>
                </label>
            </div>

            <Button className={classBind('form__btn')} text='Gửi ngay'></Button>
        </form>
    );
}

export default Application;
