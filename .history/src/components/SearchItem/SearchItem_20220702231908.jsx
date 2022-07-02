import './SearchItem.css'

const SearchItem = () => {
    return (
        <div className='searchItem'>
            <img src="" alt="" className='searchItemImage' />
            {/* searchItemImg */}
            <div className="siItemDesc">
                <h1 className='siTitle'>Tower Street Apartment </h1>
                <span className="siDistance">500m from center</span>
                <span className="siTextOp">500m from center</span>
            </div>
            {/* SearchItem Description */}
            <div className="siDetails">

            </div>
        </div>
    );
};

export default SearchItem;