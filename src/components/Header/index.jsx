import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './header.scss';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from '../../store/User/userSlice';
import { signout } from '../../firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const headRef = useRef(null);
    const [menuMobile, setMenuMobile] = useState(false);
    const [menuCollapse, setMenuCollapse] = useState(false);
    const user = useSelector((state) => state.user);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener('scroll', scroll);
        return () => {
            window.removeEventListener('scroll', scroll);
        };
    }, []);
    useEffect(() => {
        setMenuMobile(false);
    }, [location]);

    function scroll(e) {
        if (window.pageYOffset > 50) {
            headRef.current.classList.add('sticky-header');
        } else {
            headRef.current.classList.remove('sticky-header');
        }
    }

    return (
        <header className="header" ref={headRef}>
            <div className="container">
                <div className={`${menuMobile ? 'show' : ''} menu-mobile`}>
                    <div className="wrap-menu-mobile">
                        {user.isLogin && (
                            <div className="mobile-avatar">
                                <img src={user.avatar} alt="" />
                                <p>Xin chào: {user.name}</p>
                            </div>
                        )}
                        <div>
                            <form action="#">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="search"
                                    placeholder="Search..."
                                />
                            </form>
                        </div>
                        <ul className="row">
                            <li>
                                <Link to="/">
                                    <i className="bx bx-home-circle"></i>Trang
                                    chủ
                                </Link>
                            </li>
                            <li className="collapse-menu">
                                <span
                                    className={`${
                                        menuCollapse ? 'arrow-down' : 'arrow-up'
                                    }`}
                                    onClick={() => {
                                        setMenuCollapse(!menuCollapse);
                                    }}
                                ></span>
                                <Link to="/product">
                                    <i className="bx bx-leaf"></i>
                                    Sản phẩm
                                </Link>
                                <div
                                    className={`${
                                        menuCollapse ? 'show' : ''
                                    } collapse`}
                                >
                                    <ul className="mobile__sub__menu">
                                        <li>
                                            <Link to="/product?type=desk">
                                                Cây để bàn
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/product?type=aquatic">
                                                Cây thủy sinh
                                            </Link>
                                        </li>
                                        <li className="last-sub-menu">
                                            <Link to="/product?type=air">
                                                Cây lọc không khí
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to="/about">
                                    <i className="bx bx-info-circle"></i>Về
                                    chúng tôi
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    <i className="bx bx-mail-send"></i>Liên hệ
                                </Link>
                            </li>
                            <li>
                                {user.isLogin && (
                                    <a
                                        onClick={() => {
                                            setMenuMobile(false);
                                            signout(dispatch, navigate);
                                        }}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <i className="bx bx-log-out"></i> Đăng
                                        xuất
                                    </a>
                                )}
                                {user.isLogin || (
                                    <Link
                                        to="/login"
                                        onClick={() => {
                                            setMenuMobile(false);
                                        }}
                                    >
                                        <i className="bx bx-log-in"></i> Đăng
                                        nhập
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div
                        className={`${
                            menuMobile ? 'show' : ''
                        } backdrop-mobile`}
                        onClick={() => {
                            setMenuMobile(false);
                        }}
                    ></div>
                </div>
                <div className="row">
                    <Link to="/" className="header__logo">
                        <img src={logo} alt="Plant" />
                    </Link>
                    <div className="nav">
                        <i
                            className="bx bx-menu-alt-left toggle-menu"
                            onClick={() => {
                                setMenuMobile(true);
                            }}
                        ></i>
                        <ul className="header__menu row">
                            <li>
                                <Link to="/">Trang chủ</Link>
                            </li>
                            <li>
                                <Link to="/product">Sản phẩm</Link>
                                <ul className="header__sub__menu">
                                    <li>
                                        <Link to="/product?type=desk">
                                            Cây để bàn
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/product?type=aquatic">
                                            Cây thủy sinh
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/product?type=air">
                                            Cây lọc không khí
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/about">Về chúng tôi</Link>
                            </li>
                            <li>
                                <Link to="/contact">Liên hệ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header__tool row">
                        <div className="mobile-hidden">
                            <i className="bx bx-user icon-head"></i>
                            <ul className="header__sub__menu">
                                {user.isLogin && (
                                    <li className="user_avatar">
                                        <img src={user.avatar} alt="" />
                                        <span>{user.name}</span>
                                    </li>
                                )}
                                <li>
                                    {user.isLogin && (
                                        <a
                                            onClick={() => {
                                                setMenuMobile(false);
                                                signout(dispatch, navigate);
                                            }}
                                        >
                                            <i className="bx bx-log-out"></i>{' '}
                                            Đăng xuất
                                        </a>
                                    )}
                                    {user.isLogin || (
                                        <Link
                                            to="/login"
                                            onClick={() => {
                                                setMenuMobile(false);
                                            }}
                                        >
                                            <i className="bx bx-log-in"></i>{' '}
                                            Đăng nhập
                                        </Link>
                                    )}
                                </li>
                            </ul>
                        </div>
                        <div className="mobile-hidden">
                            <i className="bx bx-search-alt icon-head"></i>
                            <ul className="header__sub__menu">
                                <li>
                                    <form action="#">
                                        <input
                                            type="text"
                                            className="search"
                                            placeholder="Search..."
                                        />
                                    </form>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Link to="/cart">
                                <i className="bx bx-cart icon-head"></i>
                                <span className="cart-count">
                                    {cart.reduce((value, curr) => {
                                        return value + curr.count;
                                    }, 0)}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
