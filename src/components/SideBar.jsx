import React from 'react';
import { FaHome, FaHistory, FaCalendarAlt } from 'react-icons/fa';
import '../style/SideBar.css';
import { MdAccountCircle } from 'react-icons/md';
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-profile">
        <img src={MdAccountCircle} alt="Profile" className="sidebar-profile-photo" />
        <div className="sidebar-profile-name">John Doe</div>
      </div>
      <ul className="sidebar-links">
        <li className="sidebar-link">
          <FaHome className="sidebar-link-icon" />
          <span className="sidebar-link-text">Home</span>
        </li>
        <li className="sidebar-link">
          <FaHistory className="sidebar-link-icon" />
          <span className="sidebar-link-text">History</span>
        </li>
        <li className="sidebar-link">
          <FaCalendarAlt className="sidebar-link-icon" />
          <span className="sidebar-link-text">Appointments</span>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
