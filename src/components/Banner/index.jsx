import React from 'react';
import './banner.scss';
const Banner = ({ title }) => {
    return (
        <div className="banner">
            <div>
                <h2>{title}</h2>
                <div className="banner__path">
                    <p>Trang chủ</p>
                    <div className="arrow-right"></div>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
