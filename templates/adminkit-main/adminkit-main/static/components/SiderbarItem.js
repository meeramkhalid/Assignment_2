import React from "react";
import { Feather } from "react-feather";

const SidebarItem = ({ href, icon, label, active }) => {
  return (
    <li className={`sidebar-item ${active ? "active" : ""}`}>
      <a className="sidebar-link" href={href}>
        <Feather name={icon} className="align-middle" /> <span className="align-middle">{label}</span>
      </a>
    </li>
  );
};

export default SidebarItem;
