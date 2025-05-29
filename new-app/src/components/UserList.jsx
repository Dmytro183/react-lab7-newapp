import React, { useState } from 'react';
import UserItem from './UserItem';

const UserList = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h2>Список користувачів:</h2>
      <ul>
        {users.map(user => (
          <UserItem
            key={user.id}
            user={user}
            onClick={handleUserClick}
            isSelected={selectedUser?.id === user.id}
          />
        ))}
      </ul>

      {selectedUser && (
        <div>
          <h3>Вибраний користувач:</h3>
          <p><strong>Імʼя:</strong> {selectedUser.name}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserList;