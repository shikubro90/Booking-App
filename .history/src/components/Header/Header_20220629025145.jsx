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
    const [option, setOption] = useState(
        {
            adult : 1,
            children : 0,
            room : 1
        }
    )

    const handleOption =(name, operation)=>{
        setOption((prev)=>{
            return{
                ...prev,
                [name] : operation === "i" ? option[name] +1 : option[name] -1 
            }
        })
    }

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

                

            </div>
            {/* End headerContainer */}
        </div>
        // End header
    );
};

export default Header;