import React from 'react';
import './newsletter.scss';

const NewsLetter = () => {
    return (
        <div className="news-letter">
            <div className="container">
                <h2>ĐĂNG KÝ NHẬN TIN</h2>
                <form action="">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Nhập địa chỉ email của bạn"
                    />
                    <button type="submit"></button>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;
