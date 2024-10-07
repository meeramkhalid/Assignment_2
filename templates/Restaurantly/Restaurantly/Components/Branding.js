import React from "react";
import Navigation from "./Navigation";

function Branding() {
  return (
    <div className="branding d-flex align-items-center">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1 className="sitename">Restaurantly</h1>
        </a>
        <Navigation />
        <a className="btn-book-a-table d-none d-xl-block" href="#book-a-table">
          Book a Table
        </a>
      </div>
    </div>
  );
}

export default Branding;
