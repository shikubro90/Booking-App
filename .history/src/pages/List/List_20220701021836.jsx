import React from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

const List = () => {
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="listContainer">
                .list
            </div>
        </div>
    );
};

export default List;