import React from 'react';
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="featuredImage" />
                
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h1>123 Properties</h1>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80" alt="" className="featuredImage" />
                
                <div className="featuredTitles">
                    <h1>Dubai</h1>
                    <h1>123 Properties</h1>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://www.hotelier.de/500/bilder/lexikon/758383/hyperion-berlin-licht.jpg" alt="" className="featuredImage" />
                
                <div className="featuredTitles">
                    <h1>America</h1>
                    <h1>123 Properties</h1>
                </div>
            </div>
           
        </div>
    );
};

export default Featured;