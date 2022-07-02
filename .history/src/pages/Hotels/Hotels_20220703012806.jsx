import './Hotel.css'
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;