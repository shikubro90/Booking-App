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
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde cumque voluptatibus eius ab, odit velit. Dolorum debitis iure sequi, voluptatum tenetur, ea quas nisi ducimus aliquid est architecto excepturi rem.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus nostrum facilis dicta similique magnam expedita quis sit optio, est eaque enim aliquid qui a, repellat incidunt iusto et ullam laborum.
                            </div>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect fo 9</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;