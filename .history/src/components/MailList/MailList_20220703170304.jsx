import React from 'react';
import './MailList.css'

const MailList = () => {
    return (
        <div className="mail">
            <div className="mailContainer">
                <div>
                    <h1 className="mailTitle">Save time, Save money!</h1>
                </div>
                <span className='mailDesc'>
                    Sign we'll send the best deal to you
                </span>
                <div>
                    <input type="email" placeholder='Your Mail' />
                <button>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default MailList;