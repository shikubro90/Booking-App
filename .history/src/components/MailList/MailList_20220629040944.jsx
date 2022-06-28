import React from 'react';
import './MailList.css'

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">Save time, Save money!</h1>
            <span className='mailDesc'>Sign we'll send the best deal to you</span>
            <div className="mailContainer">
                <input type="email" placeholder='YOUR MAIL' />
                <button></button>
            </div>
        </div>
    );
};

export default MailList;