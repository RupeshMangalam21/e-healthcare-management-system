import React, { useContext } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import logo from '../../assets/logo-img/logo_avah.png';
import '../../style/Headerfooter.css';
import { auth } from '../../lib/init-firebase';
import { AuthContext } from '../auth/AuthProvider';
import { signOut } from 'firebase/auth';
function Header() {
  const { CurrentUser} = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth).then(()=>{
        console.log("sign out ")

     }).catch(error=>console.log(error))
  };

  return (
    <div className="header">
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="AVA-H Logo" style={{ width: '67px', height: '67px', placeItems: 'center' }} />
          <div className="nav-title">AVA-H</div>
        </div>
        {CurrentUser && (
          <div className="nav-sign-out" onClick={handleSignOut}>
            <FaSignOutAlt />
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;