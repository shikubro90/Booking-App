import React from 'react';
import './Home.css'
import Featured from '../../components/Featured/Featured';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Brows </h1>
            </div>
        </div>
    );
};

export default Home;    