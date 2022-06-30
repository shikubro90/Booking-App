import React from 'react';
import './List.css'

import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';


const List = () => {
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 se>List Search</h1>
                    </div>
                    <div className="listResult">
                        <h1>List Result</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;