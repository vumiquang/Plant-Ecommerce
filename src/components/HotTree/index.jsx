import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination'; // Pagination module
import './hot-tree.scss';
import Rate from '../Rate';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { formatMoney } from '../../util/formatMoney';

const HotTree = () => {
    const products = useSelector((state) => state.products.products);
    const [trees, setTrees] = useState([]);
    useEffect(() => {
        const copyProducts = [...products];
        copyProducts.sort((a, b) => {
            return Number(a.star) - Number(b.star);
        });
        setTrees(copyProducts.slice(0, 8));
    }, [products]);

    return (
        <div className="hot-tree">
            <div className="container">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Autoplay]}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    centeredSlides={true}
                    navigation
                    autoplay={{ autoplay: true, delay: 3000 }}
                    scrollbar={{ draggable: true }}
                    loop={true}
                >
                    {trees.map((tree, id) => {
                        return (
                            <SwiperSlide key={id}>
                                <Link
                                    className="hot-tree__wrap"
                                    to={`/product/${tree.id}`}
                                >
                                    <img
                                        src={tree.img1}
                                        alt=""
                                        className="hot-tree__img"
                                    />
                                    <Rate rating={tree.star} size={14}></Rate>
                                    <h4 className="hot-tree__name">
                                        {tree.name}
                                    </h4>
                                    <div>
                                        <span className="hot-tree__price">
                                            {tree.sale === '0'
                                                ? ''
                                                : formatMoney(tree.price)}
                                        </span>
                                        <span className="hot-tree__sale">
                                            {tree.sale === '0'
                                                ? formatMoney(tree.price)
                                                : formatMoney(tree.sale)}
                                        </span>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default HotTree;
