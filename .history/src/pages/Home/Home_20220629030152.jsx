import React from 'react';
import Featured from '../../components/Featured/Featured';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured
            </div>
        </div>
    );
};

export default Home;    