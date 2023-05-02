import React, { useContext } from 'react';
import logo from '../../assets/logo-img/logo_avah.png';
import '../../style/Headerfooter.css';
import { AuthContext } from '../auth/AuthProvider';
import SideBar from '../SideBar';

function Header() {
  const { CurrentUser } = useContext(AuthContext);

  return (
    <div className="header">
      <nav className="navbar">
        {CurrentUser && (
          <div className="nav-sign-out">
            <SideBar />
          </div>
        )}
        <div className="nav-logo">
          <img src={logo} alt="AVA-H Logo" style={{ width: '67px', height: '67px', placeItems: 'center' }} />
          <div className="nav-title">AVA-H</div>
        </div>
      </nav>
    </div>
  );
}

export default Header;