import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

const Header = () => {
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
                        <FontAwesomeIcon icon={fa} />
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