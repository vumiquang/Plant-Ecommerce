import React, { useEffect } from 'react';
import './style.scss';
import notifySlice from '../../../store/Notification/notifySlice';

const Notify = ({ note, dispatch }) => {
    useEffect(() => {
        handleCloseNotification();
    }, []);

    const handleCloseNotification = () => {
        setTimeout(() => {
            removeNotify();
        }, 3000);
    };

    const removeNotify = () => {
        dispatch(notifySlice.actions.removeNotify(note.id));
    };
    return (
        <div className={`notification-item ${note.type}`}>
            <i className="bx bx-check icon icon-success"></i>
            <i className="bx bx-bell icon icon-warn "></i>
            <p className="content">{note.content}</p>
            <i className="bx bx-x exit" onClick={removeNotify}></i>
        </div>
    );
};

export default Notify;
