import './Hotel.css'
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot,faCircleArrowRight,faCircleArrowLeft, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/MailList/MailList'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react';

const Hotels = () => {

    const [slideNumber, setSlideNumbre] = useState(0)
    const [open, setOpen] = useState(false)
    
    


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


    const handleOpen=(i)=>{
        setSlideNumbre(i)
        setOpen(true)
    }   

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} />
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                    <img src={photos[]} alt="" />
                    <FontAwesomeIcon icon={faCircleArrowLeft} />
                </div>}
                <div className="hotelWrapper">
                    <div className="titleWithButt">
                        <h1 className="hotelTitle">Grand Hotel</h1>
                        <div>
                        <button className='reserveButton'>Reserve or Book Now !</button>
                        </div>
                    </div>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span className='hotelDistance'> 
                            Elton st 125 New York
                        </span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location 500m from center
                    </span>
                    <span className='hotelPriceHighLight'>
                        Book a stay over $144 at this property and get a free airport   taxi.
                    </span>
                    <div className="hotelImage">
                        {
                            photos.map((photo,i)=>{
                                return(
                                    <div key={i} className="hotelImgWrapper">
                                        <img onClick={()=>handleOpen(i)} src={photo.src} alt=""  className='hotelImg'/>
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
                            <h1>Perfect fo 9-night stay !</h1>
                            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, esse.</span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now! </button>
                        </div>
                    </div>
                </div>
            <MailList/>
            <Footer/>
            </div>
        </div>
    );
};

export default Hotels;