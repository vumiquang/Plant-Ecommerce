import React from 'react';
import './footer.scss';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="logo-footer">
                    <img src={logo} alt="" />
                    <p>không gian xanh, cuộc sống xanh</p>
                </div>
                <nav>
                    <ul className="row wrap">
                        <li className="col-3 col-md-6 col-sm-12">
                            <ul className="menu-footer">
                                <li>Thông tin liên hệ</li>
                                <li>
                                    <i className="bx bx-current-location"></i>
                                    175 Tây Sơn, Đống Đa, Hà Nội
                                </li>
                                <li>
                                    <i className="bx bxs-phone"></i>0397425411
                                </li>
                                <li>
                                    <i className="bx bxs-envelope"></i>
                                    vuminhquang.dsn@gmail.com
                                </li>
                            </ul>
                        </li>
                        <li className="col-3 col-md-6 col-sm-12">
                            <ul className="menu-footer">
                                <li>Thời gian mở của</li>
                                <li>Thứ 2 - thứ 6: 8AM - 10PM</li>
                                <li>Thứ 7: 9AM - 8PM</li>
                                <li>Nghỉ Chủ Nhật và các ngày Lễ Tết</li>
                            </ul>
                        </li>
                        <li className="col-3 col-md-6 col-sm-12">
                            <ul className="menu-footer">
                                <li>Chính sách mua hàng</li>
                                <li>
                                    <Link to="/">
                                        Chính sách bảo hành và đổi trả
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">Chính sách hội viên</Link>
                                </li>
                                <li>
                                    <Link to="/">Chính sách giao hàng</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="col-3 col-md-6 col-sm-12">
                            <ul className="menu-footer">
                                <li>Chính sách mua hàng</li>
                                <li>
                                    <Link to="/">Liên hệ và góp ý </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Hướng dẫn mua hàng online
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">Câu hổi thường gặp </Link>
                                </li>
                                <li>
                                    <Link to="/">Chính sách bảo mật</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="social">
                    <Link to="/">
                        <i className="bx bxl-facebook-square"></i>
                    </Link>
                    <Link to="/">
                        <i className="bx bxl-instagram"></i>
                    </Link>
                    <Link to="/">
                        <i className="bx bxl-pinterest"></i>
                    </Link>
                </div>
            </div>
            <p>Copyright 2022 Designed by Yuuji</p>
        </footer>
    );
};

export default Footer;
