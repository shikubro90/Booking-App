import React, { useState } from 'react';
import './List.css'

import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';


const List = () => {

    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [option. setOption] = useState(location.state.option)


    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className='searchTitle'>Search</h1>

                        <div className="searchItem">
                            <label>Destination</label>
                            <input type="text" />
                        </div>
                        <div className="searchItem">
                            <label>Check-in Date</label>
                            <input type="text" />
                        </div>
                        <div className="searchItem">
                            <label>Destination</label>
                            <input type="text" />
                        </div>
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