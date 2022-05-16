import React from 'react';
import { Link } from 'react-router-dom';
import './home-news.scss';
import imageBackground from '../../../assets/images/bai-viet-noi-bat.png';
const HomeNews = ({ contentLeft }) => {
    const styleContent = contentLeft
        ? {
              marginLeft: 'auto',
          }
        : {
              margin: '0',
          };
    const styleBg = contentLeft
        ? {
              margin: '0',
          }
        : {
              marginLeft: 'auto',
          };
    return (
        <div className="home-news">
            <div className="home-news__bg" style={styleBg}>
                <img src={imageBackground} alt="" />
            </div>
            <div className="home-news__content">
                <div style={styleContent}>
                    <div>
                        <h3 className="home-news__title">
                            Sự Hòa Hợp Giữa Cây Cảnh Với Đời Sống Con Người
                        </h3>
                        <p className="home-news__des">
                            Ngày nay, khi cuộc sống dần phát triển hơn, nhu cầu
                            của con người ngày một cao thì đời sống tinh thần
                            đang bắt đầu được chú trọng ngày một nhiều. Chúng ta
                            hãy cùng tìm hiểu cây xanh có thể tạo ra sự an yên
                            trong tâm hồn của những con người hiện đại như thế
                            nào.
                        </p>
                    </div>
                    <Link to="">
                        <button className="btn btn-small">ĐỌC THÊM</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeNews;
