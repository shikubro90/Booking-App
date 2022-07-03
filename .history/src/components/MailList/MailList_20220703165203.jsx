import React from 'react';
import './MailList.css'

const MailList = () => {
    return (
        <div className="mail">
            <div className="mailContainer">
                <h1 className="mailTitle">Save time, Save money!</h1>
                <span className='mailDesc'>Sign we'll send the best deal to you</span>
                <input type="email" placeholder='Your Mail' />
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default MailList;