import React, { useEffect } from 'react';
import './login-wrap.scss';
import { Link } from 'react-router-dom';
import imageFB from '../../assets/images/icon/fb-color.png';
import imageGG from '../../assets/images/icon/gg-color.png';
import imageTT from '../../assets/images/icon/twitter-color.png';

import { register } from '../../firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const LoginWrap = ({ title, children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    useEffect(() => {
        if (user.isLogin) navigate('/');
    }, [user]);

    return (
        <div className="login-wrap">
            <div>
                <h3 className="login-wrap__title">{title}</h3>
                <div className="login-wrap__child">
                    {children}
                    <div className="login-wrap__social">
                        <p>Kết nối với mạng xã hội</p>
                        <div>
                            <span>
                                <img src={imageFB} alt="" />
                            </span>
                            <span
                                onClick={() => {
                                    register(dispatch, navigate);
                                }}
                            >
                                <img src={imageGG} alt="" />
                            </span>
                            <span to="">
                                <img src={imageTT} alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginWrap;
