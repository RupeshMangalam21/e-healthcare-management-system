
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "../../style/Headerfooter.css";
import logo from "../../assets/logo-img/logo_avah.png";
import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import SideBar from '../SideBar';
import { Link } from "react-router-dom";
const Header = () => {
  const { CurrentUser } = useContext(AuthContext);
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <>
   
    {CurrentUser &&(
      <div className="header">
        <nav className="navbar">
          <div className="nav-sign-out">
            <SideBar />
          </div>
          <div className="nav-logo">
            <img src={logo} alt="AVA-H Logo" style={{ width: '67px', height: '67px', placeItems: 'center' }} />
            <div className="nav-title">AVA-H</div>
          </div>
        </nav>
      </div>
    ) }
      {!CurrentUser &&( <nav className="app__navbar">
          <div className="app__navbar-logo">
            <img src={logo} alt="app__logo" />
          </div>
          <ul className="app__navbar-links">
            <li className="p__opensans">
              <a href="#home">Home</a>
            </li>
            <li className="p__opensans">
              <a href="#about">About</a>
            </li>
            <li className="p__opensans">
              <a href="#awards">Features</a>
            </li>
            <li className="p__opensans">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="app__navbar-login">
            <Link to="/SigninSignupForm">Log In / Registration</Link>
            {/* <div /> */}
          </div>
          <div className="app__navbar-smallscreen">
            <GiHamburgerMenu
              color="#fff"
              fontSize={27}
              onClick={() => setToggleMenu(true)}
            />
            {toggleMenu && (
              <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                <MdOutlineRestaurantMenu
                  fontSize={27}
                  className="overlay__close"
                  onClick={() => setToggleMenu(false)}
                />
                <ul className="app__navbar-smallscreen_links">
                  <li>
                    <a href="#home" onClick={() => setToggleMenu(false)}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about" onClick={() => setToggleMenu(false)}>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#menu" onClick={() => setToggleMenu(false)}>
                      Menu
                    </a>
                  </li>
                  <li>
                    <a href="#awards" onClick={() => setToggleMenu(false)}>
                      Awards
                    </a>
                  </li>
                  <li>
                    <a href="#contact" onClick={() => setToggleMenu(false)}>
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#login" onClick={() => setToggleMenu(false)}>
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>)}
       
      
    
    
    </>
  
  );
};

export default Header;