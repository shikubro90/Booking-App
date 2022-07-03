import React from 'react';
import './Home.css'
import Featured from '../../components/Featured/Featured';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import PropertyList from '../../components/PropertyList/PropertyList';
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties';
import MailList from '../../components/MailList/MailList';
import Footer from '../../components/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Brows by property type</h1>
                <PropertyList/>
                <h1 className="homeTitle">Brows by property type</h1>
                <FeaturedProperties/>
            </div>
                <MailList/>
                <Footer/>
        </div>
    );
};

export default Home;    