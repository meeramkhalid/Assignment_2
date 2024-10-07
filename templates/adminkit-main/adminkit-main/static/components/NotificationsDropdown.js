// NotificationsDropdown.js
import React from 'react';
import NotificationItem from './NotificationItem';

const NotificationsDropdown = () => {
  const notifications = [
    {
      icon: 'alert-circle',
      iconClass: 'text-danger',
      title: 'Update completed',
      message: 'Restart server 12 to complete the update.',
      time: '30m ago'
    },
    {
      icon: 'bell',
      iconClass: 'text-warning',
      title: 'Lorem ipsum',
      message: 'Aliquam ex eros, imperdiet vulputate hendrerit et.',
      time: '2h ago'
    },
    {
      icon: 'home',
      iconClass: 'text-primary',
      title: 'Login from 192.186.1.8',
      message: '',
      time: '5h ago'
    }
  ];

  return (
    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
      <div className="dropdown-menu-header">4 New Notifications</div>
      <div className="list-group">
        {notifications.map((notification, index) => (
          <NotificationItem
            key={index}
            icon={notification.icon}
            iconClass={notification.iconClass}
            title={notification.title}
            message={notification.message}
            time={notification.time}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationsDropdown;
