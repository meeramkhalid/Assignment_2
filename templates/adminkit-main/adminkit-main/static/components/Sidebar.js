import React from "react";
import SidebarItem from "./SidebarItem";
import SidebarCTA from "./SidebarCTA";

const Sidebar = () => {
  return (
    <nav id="sidebar" className="sidebar js-sidebar">
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="index.html">
          <span className="align-middle">AdminKit</span>
        </a>

        <ul className="sidebar-nav">
          <li className="sidebar-header">Pages</li>
          <SidebarItem href="index.html" icon="sliders" label="Dashboard" active />
          <SidebarItem href="pages-profile.html" icon="user" label="Profile" />
          <SidebarItem href="pages-sign-in.html" icon="log-in" label="Sign In" />
          <SidebarItem href="pages-sign-up.html" icon="user-plus" label="Sign Up" />
          <SidebarItem href="pages-blank.html" icon="book" label="Blank" />

          <li className="sidebar-header">Tools & Components</li>
          <SidebarItem href="ui-buttons.html" icon="square" label="Buttons" />
          <SidebarItem href="ui-forms.html" icon="check-square" label="Forms" />
          <SidebarItem href="ui-cards.html" icon="grid" label="Cards" />
          <SidebarItem href="ui-typography.html" icon="align-left" label="Typography" />
          <SidebarItem href="icons-feather.html" icon="coffee" label="Icons" />

          <li className="sidebar-header">Plugins & Addons</li>
          <SidebarItem href="charts-chartjs.html" icon="bar-chart-2" label="Charts" />
          <SidebarItem href="maps-google.html" icon="map" label="Maps" />
        </ul>

        <SidebarCTA />
      </div>
    </nav>
  );
};

export default Sidebar;
