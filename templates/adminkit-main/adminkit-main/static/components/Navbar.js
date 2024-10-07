// Navbar.js
import React from 'react';
import NotificationsDropdown from './NotificationsDropdown';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
      <a className="sidebar-toggle js-sidebar-toggle">
        <i className="hamburger align-self-center"></i>
      </a>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav navbar-align">
          <li className="nav-item dropdown">
            <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
              <div className="position-relative">
                <i className="align-middle" data-feather="bell"></i>
                <span className="indicator">4</span>
              </div>
            </a>
            <NotificationsDropdown />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
