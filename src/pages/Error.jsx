import React from 'react';
import { useNavigate } from 'react-router-dom';
const Error = () => {
    const navigate = useNavigate();
    return (
        <div className="not-found-page">
            <div>
                <p>404</p>
                <p>PAGE NOT FOUND</p>
                <p
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    Go home <i className="bx bx-right-arrow-alt"></i>
                </p>
            </div>
        </div>
    );
};

export default Error;
