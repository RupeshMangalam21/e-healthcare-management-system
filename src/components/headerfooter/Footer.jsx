import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/Headerfooter.css';

function Footer() {
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <footer className='footer'>
          <ul className='footer-menu'>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
