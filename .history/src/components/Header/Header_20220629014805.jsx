import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import './Header.css';

const Header = () => {

    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate : new Date(),
            endDate : new Date(),
            key : "selection"
        }
    ])

    const [openOptions, setOpenOptions] = useState(false)
    const [option, setOption] = useState([
        {
            adult : 1,
            children : 0,
            room : 1
        }
    ])

    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flight</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxi</span>
                    </div>
                </div>
                {/* End headerListing */}

                <h1 className="headerTitle">
                    A life time of discount it's genius.
                </h1>
                <div className="headerDescription">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas iusto quidem dolorem veniam architecto sint. Dignissimos doloribus incidunt voluptatum suscipit ipsa! Quia, eius sint? Tempora ad dignissimos sed officiis assumenda.
                </div>
                <button className='headerButton'>Sign In / Register</button>

                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder='Where you are going?' className='headerSearchInput' />
                    </div>
                    {/* headerSearchItem */}

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "dd/mm/yyyy")} to ${format(date[0].endDate, "dd/mm/yyyy")}`}</span>
                        {
                            openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date'
                            />
                        }
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span className='headerSearchText'>{`${option[0].}`}</span>
                    </div>
                    {/* headerSearchItem */}

                    {/* headerSearchItem */}

                    <div className="headerSearchItem">
                        <button className="headerButton">Search</button>
                    </div>
                    {/* headerSearchItem */}
                </div>
                {/* HeaderSearch */}

            </div>
            {/* End headerContainer */}
        </div>
        // End header
    );
};

export default Header;