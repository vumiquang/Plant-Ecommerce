import React from 'react';
import LoginWrap from '../components/LoginWrap';
import Input from '../components/Input';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <LoginWrap title="Đăng nhập">
            <form action="" className="form">
                <Input placeholder="Email" type="text" />
                <Input placeholder="Password" type="password" />
                <div className="login-page__remember-pass">
                    <div>
                        <input type="checkbox" name="" />
                        <p>Nhớ mặt khẩu</p>
                    </div>
                    <Link to="">
                        <p>Quên mật khẩu ?</p>
                    </Link>
                </div>
                <button className="btn-form">Đăng nhập</button>
                <Link to="/register">
                    <p>Tạo tài khoản mới</p>
                </Link>
            </form>
        </LoginWrap>
    );
};

export default Login;
