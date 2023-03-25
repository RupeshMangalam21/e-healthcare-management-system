import React from 'react';
import "../../style/Headerfooter.css"
import logo from "../../assets/logo_avah.png"
function Header() {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-logo">
                 <img src={logo} alt="AVA-H Logo" style={{width:"70px", height:"70px", verticalAlign:"center"}}/>
                <div className="nav-title">AVA-H</div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
