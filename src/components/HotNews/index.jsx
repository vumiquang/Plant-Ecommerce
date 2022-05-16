import React from 'react';
import './hot-news.scss';
import HomeNews from './HomeNews';

const HotNews = () => {
    return (
        <div className="container">
            <HomeNews contentLeft={false}></HomeNews>
            <HomeNews contentLeft={true}></HomeNews>
        </div>
    );
};

export default HotNews;
