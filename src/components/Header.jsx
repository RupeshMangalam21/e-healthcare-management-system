import React from 'react';
import '/workspaces/emergency-healthcare-managment-system/src/style/Home.css';
function Header() {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-logo">
                    <img src= "../assets/logo_avah.png" alt="AVA-H Logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                    <div className="nav-title">AVA-H</div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
