// Notification.js
import React from 'react';

const NotificationItem = ({ icon, title, message, time }) => {
  return (
    <a href="#" className="list-group-item">
      <div className="row g-0 align-items-center">
        <div className="col-2">
          <i className={`text-success`} data-feather={icon}></i>
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

const NotificationDropdown = () => {
  return (
    <li className="nav-item dropdown">
      <a className="nav-icon dropdown-toggle" href="#" id="notificationsDropdown" data-bs-toggle="dropdown">
        <div className="position-relative">
          <i className="align-middle" data-feather="bell"></i>
        </div>
      </a>
      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="notificationsDropdown">
        <div className="dropdown-menu-header">
          <div className="position-relative">
            3 New Notifications
          </div>
        </div>
        <div className="list-group">
          <NotificationItem
            icon="user-plus"
            title="New connection"
            message="Christina accepted your request."
            time="14h ago"
          />
          <div className="dropdown-menu-footer">
            <a href="#" className="text-muted">Show all notifications</a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default NotificationDropdown;
