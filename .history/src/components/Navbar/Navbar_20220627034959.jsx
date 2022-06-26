import  './N';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navContainer">
                <span className="logo">
                    Hotel Logo
                </span>
                {/* End Logo */}

                <div className="navItems">
                    <button className='navButton'>Register</button>
                    <button className='navButton'>Login</button>
                </div>
            </div>
            {/* End navContainer */}
        </div>
        // End Navbar
    );
};

export default Navbar;