import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import image from '~/assets/images';
import Button from '~/components/Button';
import PostItem from '~/components/PostItem';
import Banner from '~/components/Banner';
<<<<<<< HEAD
import { useFetchRecentBlogsQuery } from '~/apis/Blogs.api';
=======
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d

const classBind = classNames.bind(styles);

function Home() {
<<<<<<< HEAD
    const { data: recentBlogsData } = useFetchRecentBlogsQuery(3);
=======
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
    return (
        <div className={classBind('home')}>
            {/* intro */}
            <section className={classBind('home-intro')}>
                {/* info */}
                <div className={classBind('home-intro__info')}>
                    <h2 className={classBind('home-intro__label')}>
                        CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ
                    </h2>
                    <h1 className={classBind('home-intro__heading')}>
                        PHUTHOTOURIST
                    </h1>
                    <p className={classBind('home-intro__founding-date')}>
                        Ngày thành lập 01/01/2019
                    </p>
                </div>

                {/* banner */}
                <Banner />
            </section>

            <div className={classBind('container')}>
                {/* home-content */}
                <div className={classBind('home-content')}>
                    <article className={classBind('home-about')}>
                        <div className={classBind('row gx-6 gx-md-2')}>
                            <div className={classBind('col-7 col-xxl-12')}>
                                <div className={classBind('home-about__info')}>
                                    <p
                                        className={classBind(
                                            'home-about__label'
                                        )}
                                    >
                                        VỀ CHÚNG TÔI
                                    </p>
                                    <h2
                                        className={classBind(
                                            'home-about__heading'
                                        )}
                                    >
                                        Chúng tôi cung cấp dịch vụ du lịch đáp
                                        ứng mọi nhu cầu của bạn!
                                    </h2>
                                    <div
                                        className={classBind(
                                            'home-about__separate'
                                        )}
                                    ></div>
                                    <p
                                        className={classBind(
                                            'home-about__desc'
                                        )}
                                    >
                                        Công ty Cổ phần Dịch vụ Du lịch Phú Thọ
                                        (Phuthotourist), là một đơn vị thành
                                        viên của Saigontourist. Phuthotourist
                                        được biết đến với các sản phẩm du lịch
                                        nổi tiếng tại TP.HCM (Quận 11) như:
                                        <ul
                                            className={classBind(
                                                'home-about__list'
                                            )}
                                        >
                                            <li
                                                className={classBind(
                                                    'home-about__item'
                                                )}
                                            >
                                                Công viên Văn hóa Đầm Sen
                                            </li>
                                            <li
                                                className={classBind(
                                                    'home-about__item'
                                                )}
                                            >
                                                Khu du lịch sinh thái Vàm Sát
                                            </li>
                                            <li
                                                className={classBind(
                                                    'home-about__item'
                                                )}
                                            >
                                                Khách sạn Ngọc Lan
                                            </li>
                                            <li
                                                className={classBind(
                                                    'home-about__item'
                                                )}
                                            >
                                                Khách sạn Phú Thọ
                                            </li>
                                            <li
                                                className={classBind(
                                                    'home-about__item'
                                                )}
                                            >
                                                Trung tâm chăm sóc sức khỏe &
                                                giải trí Đầm Sen (Damsen Plaza)
                                            </li>
                                            <li
                                                className={classBind(
                                                    'home-about__item'
                                                )}
                                            >
                                                Nhà hàng Thủy Tạ Đầm Sen
                                            </li>
                                            <li
                                                className={classBind(
                                                    'home-about__item'
                                                )}
                                            >
                                                Cà phê Vườn Đá
                                            </li>
                                            <li
                                                className={classBind(
                                                    'home-about__item'
                                                )}
                                            >
                                                Trung tâm Dịch vụ Du lịch Đầm
                                                Sen (Damsen Travel)
                                            </li>
                                            <li
                                                className={classBind(
                                                    'home-about__item'
                                                )}
                                            >
                                                Liên kết với Công viên nước Đầm
                                                Sen (Đầm Sen Water Park).
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className={classBind('col-5 col-xxl-12')}>
                                <div className={classBind('home-about__media')}>
                                    <div
                                        className={classBind(
                                            'home-about__media-top'
                                        )}
                                    >
                                        <img
                                            className={classBind(
                                                'home-about__media-img-top'
                                            )}
                                            src={image.blog_img_2}
                                            alt='about-media'
                                        />
                                    </div>

                                    <div
                                        className={classBind(
                                            'home-about__media-bottom'
                                        )}
                                    >
                                        <img
                                            className={classBind(
                                                'home-about__media-img-bottom'
                                            )}
                                            src={image.blog_img_1}
                                            alt='about-media'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button
                            className={classBind('home-about__btn')}
                            to='#'
                            text='Xem chi tiết'
                            maxWidth='153px'
                        />
                    </article>
                    {/* home-post */}
                    <section className={classBind('home-post')}>
                        <div className={classBind('home-post__info')}>
                            <p className={classBind('home-post__label')}>
                                CHIA SẺ THÔNG TIN
                            </p>
                            <h2 className={classBind('home-post__heading')}>
                                Bài viết mới
                            </h2>
                            <div
                                className={classBind('home-post__separate')}
                            ></div>
                            <p className={classBind('home-post__desc')}>
                                Hãy cùng chúng tôi chia sẻ những bài viết mới
                                với các thông tin về những sản phẩm du lịch
                            </p>
                        </div>
                        <div className={classBind('home-post__list')}>
                            <div
                                className={classBind(
                                    'row row-cols-3 row-cols-xl-1 gx-2 gy-xl-3 gy-md-2'
                                )}
                            >
<<<<<<< HEAD
                                {recentBlogsData?.map((blog) => {
                                    return (
                                        <div
                                            key={blog.id}
                                            className={classBind('col')}
                                        >
                                            <PostItem
                                                id={blog.id}
                                                host={blog.author}
                                                title={blog.title}
                                                desc='Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các nhà thầu tham gia chào hàng cạnh tranh Gói thầu: Cung cấp, lắp đặt 02 màn...'
                                                tags={blog.tags}
                                                view='10N'
                                                postDate={blog.postedDate}
                                                image={blog.image}
                                            />
                                        </div>
                                    );
                                })}
=======
                                <div className={classBind('col')}>
                                    <PostItem
                                        host='Admin'
                                        title='Thông báo kết quả lựa chọn nhà thầu 2
                                        màn hình Led P4 Outdoor Fullcolor'
                                        desc='Công ty Cổ phần Dịch vụ Du lịch Phú Thọ
                                        thông báo đến các nhà thầu'
                                        tags={[
                                            { name: 'Sự kiện' },
                                            { name: 'Thông báo' },
                                            { name: 'Tin tức' }
                                        ]}
                                        view='10N'
                                        postDate='20/02/2022'
                                        image={image.post_img_1}
                                        descClassName={classBind(
                                            'custom-desc-home-post'
                                        )}
                                        titleClassName={classBind(
                                            'custom-title-home-post'
                                        )}
                                    />
                                </div>
                                <div className={classBind('col')}>
                                    <PostItem
                                        host='Admin'
                                        title='Thông báo kết quả lựa chọn nhà cung
                                        cấp nước đá chế tác Băng Đăng'
                                        desc='Công ty Cổ phần Dịch vụ Du lịch Phú Thọ
                                        thông báo đến các đơn vị
                                        tham gia chào giá cạnh tranh Hạng mục
                                        Cung cấp nước đá để chế tạo...'
                                        tags={[
                                            { name: 'Sự kiện' },
                                            { name: 'Thông báo' },
                                            { name: 'Tin tức' }
                                        ]}
                                        view='10N'
                                        postDate='20/02/2022'
                                        image={image.post_img_2}
                                        descClassName={classBind(
                                            'custom-desc-home-post'
                                        )}
                                        titleClassName={classBind(
                                            'custom-title-home-post'
                                        )}
                                    />
                                </div>
                                <div className={classBind('col')}>
                                    <PostItem
                                        host='Admin'
                                        title='Thông báo mời chào hàng cạnh tranh 2
                                        màn hình Led P4 Outdoor Fullcolor'
                                        desc='CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ
                                        thông báo mời chào hàng cạnh tranh lựa chọn đơn vị
                                        Cung cấp, lắp đặt 02 màn hình Led P4'
                                        tags={[
                                            { name: 'Sự kiện' },
                                            { name: 'Thông báo' },
                                            { name: 'Tin tức' }
                                        ]}
                                        view='10N'
                                        postDate='20/02/2022'
                                        image={image.post_img_1}
                                        descClassName={classBind(
                                            'custom-desc-home-post'
                                        )}
                                        titleClassName={classBind(
                                            'custom-title-home-post'
                                        )}
                                    />
                                </div>
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                            </div>
                        </div>
                        <Button
                            className={classBind('home-post__btn')}
                            text='Xem thêm bài viết'
                            to='#'
                            maxWidth='202px'
                        />
                    </section>
                    {/* home-service */}
                    <section className={classBind('home-service')}>
                        <div className={classBind('home-service__info')}>
                            <p className={classBind('home-service__label')}>
                                LĨNH VỰC HOẠT ĐỘNG
                            </p>
                            <h2 className={classBind('home-service__heading')}>
                                Các dịch vụ trọng tâm
                            </h2>
                            <div
                                className={classBind('home-service__separate')}
                            ></div>
                            <p className={classBind('home-service__desc')}>
                                3 dịch vụ trọng tâm của Phuthotourist là vui
                                chơi giải trí, nhà hàng – khách sạn, và dịch vụ
                                lữ hành
                            </p>
                        </div>
                        <div className={classBind('home-service__list')}>
                            <div
                                className={classBind(
                                    'row row-cols-3 row-cols-xl-1 gx-2 gy-xl-3 gy-md-2'
                                )}
                            >
                                <div className={classBind('col')}>
                                    <PostItem
<<<<<<< HEAD
                                        id='1'
=======
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                        title='Vui chơi giải trí'
                                        desc='Với 2 khu giải trí nổi tiếng TP.HCM là Công viên
                                        văn hóa Đầm Sen,và khu du
                                        lịch sinh thái Vàm Sát (H.Cần Giờ)...'
                                        image={image.service_img_1}
                                        descClassName={classBind(
                                            'custom-desc-home-service'
                                        )}
                                        titleClassName={classBind(
                                            'custom-title-home-service'
                                        )}
                                    />
                                </div>
                                <div className={classBind('col')}>
                                    <PostItem
<<<<<<< HEAD
                                        id='1'
=======
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                        title='Nhà hàng – Khách sạn'
                                        desc='Với hệ thống khách sạn Phú Thọ và Ngọc Lan đạt
                                        chuẩn 3 sao,
                                        chuyên tiếp đón các đoàn thể thao....'
                                        image={image.service_img_2}
                                        descClassName={classBind(
                                            'custom-desc-home-service'
                                        )}
                                        titleClassName={classBind(
                                            'custom-title-home-service'
                                        )}
                                    />
                                </div>
                                <div className={classBind('col')}>
                                    <PostItem
<<<<<<< HEAD
                                        id='1'
=======
>>>>>>> 39f681c2c356cb7a5ad58bcb85d0473f2228819d
                                        title='Dịch vụ Lữ hành'
                                        desc='Tổ chức các tour trong và ngoài nước với Trung tâm
                                        Dịch vụ du lịch Đầm Sen.
                                        Ngoài ra Trung tâm còn thế mạnh là tổ chức...'
                                        image={image.service_img_3}
                                        descClassName={classBind(
                                            'custom-desc-home-service'
                                        )}
                                        titleClassName={classBind(
                                            'custom-title-home-service'
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Home;
