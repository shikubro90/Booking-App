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
                <img src="https://content.r9cdn.net/rimg/himg/28/54/f0/ice-134036-68659024_3XL-700233.jpg?crop=true&width=500&height=350" alt="" className="featuredImage" />
                
                <div className="featuredTitles">
                    <h1>Dubai</h1>
                    <h1>123 Properties</h1>
                </div>
            </div>

            <div className="featuredItem">
                <img src="https://content.r9cdn.net/rimg/himg/28/54/f0/ice-134036-68659024_3XL-700233.jpg?crop=true&width=500&height=350" alt="" className="featuredImage" />
                
                <div className="featuredTitles">
                    <h1>America</h1>
                    <h1>123 Properties</h1>
                </div>
            </div>
           
        </div>
    );
};

export default Featured;