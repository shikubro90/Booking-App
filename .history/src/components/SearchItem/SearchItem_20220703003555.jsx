import './SearchItem.css'

const SearchItem = () => {
    return (
        <div className='searchItems'>
            <img src="https://thumbs.dreamstime.com/b/beautiful-hotel-room-25954964.jpg" alt="" className='siItemImage' />
            {/* searchItemImg */}
            <div className="siItemDesc">
                <h1 className='siTitle'>Tower Street Apartment </h1>
                <span className="siDistance">500m from center</span>
                <span className="siTextOption">Free airport taxi</span>
                <span className="siSubtitle">Studio Apartment With Air Condition</span>
                <span className="siFeature">Entire Studio 1 bathroom 21m 1 Full bed</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelationSubtitle">You cancel , so lock in this great price today!</span>
            </div>
            {/* SearchItem Description */}
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button className=''>8.9</button>
                </div>
                <div className="siDetailsTexts">
                    <span className='siItemPrice'>$123</span>
                    <span className='siTaxOp'>Includes taxes and fees</span>
                    <button className='siCheckButton'>Check Availablity</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;