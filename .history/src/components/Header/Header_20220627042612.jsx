import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';

const Header = () => {

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
                </div>
            </div>
            {/* End  */}

    );
};

export default Header;