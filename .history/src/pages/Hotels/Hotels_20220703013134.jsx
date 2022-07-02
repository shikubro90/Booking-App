import './Hotel.css'
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

const Hotels = () => {
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelLocation">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span className='hotelDistance'> 
                            Elton st 125 New York
                        </span>
                        <span c>

                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;