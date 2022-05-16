import React, { useState } from 'react';
import './style.scss';

const Slide = ({ img1, img2, img3 }) => {
    const [imgShow, setImgShow] = useState(img1);
    return (
        <div className="product-detail__slide">
            <div>
                <div className="left">
                    <div>
                        <img
                            src={img1}
                            alt=""
                            onClick={() => {
                                setImgShow(img1);
                            }}
                        />
                    </div>
                    <div>
                        <img
                            src={img2}
                            alt=""
                            onClick={() => {
                                setImgShow(img2);
                            }}
                        />
                    </div>
                    <div>
                        <img
                            src={img3}
                            alt=""
                            onClick={() => {
                                setImgShow(img3);
                            }}
                        />
                    </div>
                </div>
                <div className="right">
                    <div>
                        <img src={imgShow} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;
