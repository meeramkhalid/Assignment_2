// MessageItem.js
import React from 'react';

const MessageItem = ({ avatar, name, message, time }) => {
  return (
    <a href="#" className="list-group-item">
      <div className="row g-0 align-items-center">
        <div className="col-2">
          <img src={avatar} className="avatar img-fluid rounded-circle" alt={name} />
        </div>
        <div className="col-10 ps-2">
          <div className="text-dark">{name}</div>
          <div className="text-muted small mt-1">{message}</div>
          <div className="text-muted small mt-1">{time}</div>
        </div>
      </div>
    </a>
  );
};

export default MessageItem;
