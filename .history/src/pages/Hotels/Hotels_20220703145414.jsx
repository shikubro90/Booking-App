import './Hotel.css'
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'

const Hotels = () => {

    const photos = [
        {
            src : "https://media.istockphoto.com/photos/interior-of-a-modern-luxury-hotel-double-bed-bedroom-picture-id1163498940?k=20&m=1163498940&s=612x612&w=0&h=tUPidNW2ny095sCR97dur7cbrCnYpcjHbevUTJyB8Jc="
        },
        {
            src : "https://media.istockphoto.com/photos/interior-of-a-modern-luxury-hotel-double-bed-bedroom-picture-id1163498940?k=20&m=1163498940&s=612x612&w=0&h=tUPidNW2ny095sCR97dur7cbrCnYpcjHbevUTJyB8Jc="
        },
        {
            src : "https://media.istockphoto.com/photos/interior-of-a-modern-luxury-hotel-double-bed-bedroom-picture-id1163498940?k=20&m=1163498940&s=612x612&w=0&h=tUPidNW2ny095sCR97dur7cbrCnYpcjHbevUTJyB8Jc="
        },
        {
            src : "https://media.istockphoto.com/photos/interior-of-a-modern-luxury-hotel-double-bed-bedroom-picture-id1163498940?k=20&m=1163498940&s=612x612&w=0&h=tUPidNW2ny095sCR97dur7cbrCnYpcjHbevUTJyB8Jc="
        },
        {
            src : "https://media.istockphoto.com/photos/interior-of-a-modern-luxury-hotel-double-bed-bedroom-picture-id1163498940?k=20&m=1163498940&s=612x612&w=0&h=tUPidNW2ny095sCR97dur7cbrCnYpcjHbevUTJyB8Jc="
        },
        {
            src : "https://media.istockphoto.com/photos/interior-of-a-modern-luxury-hotel-double-bed-bedroom-picture-id1163498940?k=20&m=1163498940&s=612x612&w=0&h=tUPidNW2ny095sCR97dur7cbrCnYpcjHbevUTJyB8Jc="
        }
    ]

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                <div className="hotelWrapper">
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span className='hotelDistance'> 
                            Elton st 125 New York
                        </span>
                    </div>
                    <span className="hotelDistance">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cum.
                    </span>
                    <span className='hotelPriceHighLight'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, voluptates.
                    </span>
                    <div className="hotelImage">
                        {
                            photos.map((photo)=>{
                                return(
                                    <div className="hotelImgWrapper">
                                        <img src={photo.src} alt=""  className='hotelImg'/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailText">
                            <h1 className='hotelTitle'>Stay in the hear of Karwon</h1>
                            <div className="hotelDescription">

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;