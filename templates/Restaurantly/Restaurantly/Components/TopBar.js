import React from "react";

function TopBar() {
  return (
    <div className="topbar d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center">
            <a href="mailto:contact@example.com">contact@example.com</a>
          </i>
          <i className="bi bi-phone d-flex align-items-center ms-4">
            <span>+1 5589 55488 55</span>
          </i>
        </div>
        <div className="languages d-none d-md-flex align-items-center">
          <ul>
            <li>En</li>
            <li><a href="#">De</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
