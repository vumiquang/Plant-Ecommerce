import React from 'react';
import { useSelector } from 'react-redux';
import Notify from './Notify';
import './style.scss';
const NotifyWrap = (props) => {
    const listNotify = useSelector((state) => state.notify);
    return (
        <div className="notify-wrap">
            {listNotify.map((note) => {
                return <Notify note={note} {...props} key={note.id} />;
            })}
        </div>
    );
};

export default NotifyWrap;
