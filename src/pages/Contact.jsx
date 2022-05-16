import { map } from '@firebase/util';
import React, { useEffect, useRef, useState } from 'react';
import Banner from '../components/Banner';
const Contact = () => {
    const mapRef = useRef(null);
    const mapWrapRef = useRef(null);
    const [mapSize, setMapSize] = useState({ width: 600, height: 450 });

    useEffect(() => {
        setSizeMap();
        function setSizeMap(e) {
            const rectMap = mapWrapRef.current.getBoundingClientRect();
            const width = Math.round(rectMap.width);
            const h = (width * 3) / 4;

            const height = Math.round(h < 500 ? 500 : h);
            setMapSize({ width, height });
        }
        window.addEventListener('resize', setSizeMap);

        return () => {
            window.removeEventListener('resize', setSizeMap);
        };
    }, []);

    return (
        <div className="contact">
            <Banner title="Liên hệ"></Banner>
            <div className="container contact-info">
                <div className="map" ref={mapWrapRef}>
                    <iframe
                        ref={mapRef}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14899.15133935653!2d105.8179321801636!3d21.00114018992851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac8109765ba5%3A0xd84740ece05680ee!2sIrrigation%20University!5e0!3m2!1sen!2s!4v1652628304265!5m2!1sen!2s"
                        width={mapSize.width}
                        height={mapSize.height}
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="info">
                    <form action="">
                        <div className="input-wrap">
                            <label htmlFor="">Name</label>
                            <input type="text" />
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="">Email</label>
                            <input type="email" />
                        </div>
                        <div className="input-wrap message">
                            <label htmlFor="">Message</label>
                            <textarea cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <button className="btn btn-small">SEND</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
