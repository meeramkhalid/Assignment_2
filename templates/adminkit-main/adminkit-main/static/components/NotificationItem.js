// NotificationItem.js
import React from 'react';

const NotificationItem = ({ icon, iconClass, title, message, time }) => {
  return (
    <a href="#" className="list-group-item">
      <div className="row g-0 align-items-center">
        <div className="col-2">
          <i className={iconClass} data-feather={icon}></i>
        </div>
        <div className="col-10">
          <div className="text-dark">{title}</div>
          <div className="text-muted small mt-1">{message}</div>
          <div className="text-muted small mt-1">{time}</div>
        </div>
      </div>
    </a>
  );
};

export default NotificationItem;
