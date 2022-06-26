import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navContainer">
                <span className="logo">
                    Hotel Logo
                </span>
                {/* End Logo */}

                <div className="navItems">
                    <button>Regi</button>
                </div>
            </div>
            {/* End navContainer */}
        </div>
        // End Navbar
    );
};

export default Navbar;