import './Hotel.css'
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';

const Hotels = () => {
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <h1 className="hotelTitle">
                        Grand Hotel
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Hotels;