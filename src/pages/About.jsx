import React from 'react';
import imgSuMenh from '../assets/images/about-su-menh.png';
import imgTamNhin from '../assets/images/about-tam-nhin.png';
import imgPartner1 from '../assets/images/partner-1.png';
import imgPartner2 from '../assets/images/partner-2.png';
import imgPartner3 from '../assets/images/partner-3.png';
import imgPartner4 from '../assets/images/partner-4.png';
import imgPartner5 from '../assets/images/partner-5.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination'; // Pagination module

const About = () => {
   

    return (
        <div className="about">
            <div className="about-banner"></div>
            <div className="about-we about-section">
                <div className="container">
                    <div className="left">
                        <p>
                            Còn gì tuyệt vời hơn khi được sống hòa mình với
                            thiên nhiên
                        </p>
                    </div>
                    <div className="right about-section-wrap">
                        <div>
                            <h3>Chúng tôi là ai?</h3>
                            <p>
                                Plant được thành lập vào ngày 30/10/2019,bởi
                                những con người chung mục đích đem lại bầu không
                                khí tươi mát trong lành cho những văn phòng, căn
                                hộ tại thành phố hiện nay.
                            </p>
                            <p>
                                Với triết lý KHÔNG GIAN XANH, CUỘC SỐNG XANH
                                Plant hy vọng với những chậu cây nhỏ nhắn của
                                mình sẽ đem lại một không gian xanh đích thực,
                                từ đó đem lại cho quý khách hàng một trải nghiệm
                                cuộc sống xanh thu nhỏ giữa lòng thành phố trật
                                hẹp.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-vision about-section">
                <div className="container ">
                    <div className="left about-section-wrap">
                        <div>
                            <h3>Tầm nhìn</h3>
                            <p>
                                Biến cây xanh là một phần không thể thiếu trong
                                mỗi căn phòng chúng ta ở
                            </p>
                        </div>
                    </div>
                    <div className="right">
                        <img
                            src={imgTamNhin}
                            alt=""
                            className="about-section-img"
                        />
                    </div>
                </div>
            </div>
            <div className="about-mision about-section">
                <div className="container">
                    <div className="left ">
                        <img
                            src={imgSuMenh}
                            alt=""
                            className="about-section-img"
                        />
                    </div>
                    <div className="right about-section-wrap">
                        <div>
                            <h3>Xứ mệnh</h3>
                            <p>
                                Xây dựng một phong cách sống mới, xanh hơn ,sạch
                                hơn, khỏe hơn cho tất cả mọi người ở Việt Nam
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-testimonial">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    scrollbar={{ draggable: true }}
                    loop={true}
                >
                    <SwiperSlide>
                        <div className="testimonial-item">
                            <div className="content">
                                <div className="openQuotes">
                                    <span>"</span>
                                </div>
                                Tôi hiếm khi viết đánh giá cho các sản phẩm
                                nhưng với Plant, tôi không chỉ biết ơn.Plant đã
                                giúp nhân viên công ty tôi hoàn toàn thoải mái
                                làm việc cả ngày, giúp công ty tăng năng suất
                                làm việc lên rất nhiều
                                <div className="closeQuotes">
                                    <span>"</span>
                                </div>
                            </div>
                            <p className="author">Jona Than</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonial-item">
                            <div className="content">
                                <div className="openQuotes">
                                    <span>"</span>
                                </div>
                                Tôi hiếm khi viết đánh giá cho các sản phẩm
                                nhưng với Plant, tôi không chỉ biết ơn.Plant đã
                                giúp nhân viên công ty tôi hoàn toàn thoải mái
                                làm việc cả ngày, giúp công ty tăng năng suất
                                làm việc lên rất nhiều
                                <div className="closeQuotes">
                                    <span>"</span>
                                </div>
                            </div>
                            <p className="author">Jona Than</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="about-partner">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    breakpoints={{
                        200: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    centeredSlides={true}
                    autoplay={{ autoplay: true, delay: 3000 }}
                    scrollbar={{ draggable: true }}
                    loop={true}
                >
                    <SwiperSlide>
                        <div className="partner-item">
                            <img src={imgPartner1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner-item">
                            <img src={imgPartner2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner-item">
                            <img src={imgPartner3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner-item">
                            <img src={imgPartner4} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="partner-item">
                            <img src={imgPartner5} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default About;
