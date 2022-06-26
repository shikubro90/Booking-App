import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="headerList">
                    <div className="headerListItem">
                    <FontAwesomeIcon icon={fabed} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;