import React from 'react';
import LoginWrap from '../components/LoginWrap';
import Input from '../components/Input';
import { Link } from 'react-router-dom';

const Register = () => {
    
    return (
        <LoginWrap title="Tạo tài khoản mới">
            <form action="" className="form">
                <Input placeholder="Họ và tên" type="text" />
                <Input placeholder="Email" type="text" />
                <Input placeholder="Password" type="password" />
                <Input placeholder="Địa chỉ" type="text" />

                <button className="btn-form">Đăng ký</button>
            </form>
        </LoginWrap>
    );
};

export default Register;
