import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination'; // Pagination module
import './slider.scss';

import anh1 from '../../assets/images/cay-luoi-ho.png';
import anh2 from '../../assets/images/lan-dot-quy.png';
import anh3 from '../../assets/images/dua-long-chua.png';

const SliderHome = () => {
    return (
        <div className="slider-top">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                // navigation
                // autoplay={{ autoplay: true, delay: 1000 }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
            >
                <SwiperSlide>
                    <div className="slide-wrap banner-1">
                        <div className="left slide-img">
                        </div>
                        <div className="right slide-text">
                            <div>
                                <p className="slide-text-big">
                                    Create Happiness
                                </p>
                                <p className="slide-text-normal">
                                    with green plant
                                </p>
                                <button className="btn btn-small slide-text-btn">
                                    ORDER NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-wrap banner-2">
                        <div className="left slide-text">
                            <div>
                                <p className="slide-text-big">
                                    Create Happiness
                                </p>
                                <p className="slide-text-normal">
                                    with green plant
                                </p>
                                <button className="btn btn-small slide-text-btn">
                                    ORDER NOW
                                </button>
                            </div>
                        </div>
                        <div className="right slide-img">
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SliderHome;
