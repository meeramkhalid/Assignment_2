// MessagesDropdown.js
import React from 'react';
import MessageItem from './MessageItem';

const MessagesDropdown = () => {
  const messages = [
    {
      avatar: 'img/avatars/avatar-5.jpg',
      name: 'Vanessa Tucker',
      message: 'Nam pretium turpis et arcu. Duis arcu tortor.',
      time: '15m ago'
    },
    {
      avatar: 'img/avatars/avatar-2.jpg',
      name: 'William Harris',
      message: 'Curabitur ligula sapien euismod vitae.',
      time: '2h ago'
    },
    {
      avatar: 'img/avatars/avatar-4.jpg',
      name: 'Christina Mason',
      message: 'Pellentesque auctor neque nec urna.',
      time: '4h ago'
    }
  ];

  return (
    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
      <div className="dropdown-menu-header">
        <div className="position-relative">4 New Messages</div>
      </div>
      <div className="list-group">
        {messages.map((message, index) => (
          <MessageItem
            key={index}
            avatar={message.avatar}
            name={message.name}
            message={message.message}
            time={message.time}
          />
        ))}
      </div>
    </div>
  );
};

export default MessagesDropdown;
