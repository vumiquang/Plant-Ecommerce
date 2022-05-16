import React, { useState } from 'react';

import './input.scss';
const Input = ({ type, ...props }) => {
    const [showPass, setShowPass] = useState(false);

    return (
        <div className="input-wrap">
            <input
                type={`${showPass ? 'text' : type}`}
                {...props}
                className="input-text"
            />
            {type === 'password' && (
                <i
                    className={`bx bxs-low-vision pass-eye ${
                        showPass ? 'active' : ''
                    }`}
                    onClick={() => {
                        setShowPass(!showPass);
                    }}
                ></i>
            )}
        </div>
    );
};

export default Input;
