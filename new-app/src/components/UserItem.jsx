import React from 'react';

const UserItem = ({ user, onClick, isSelected }) => {
  return (
    <li onClick={() => onClick(user)} className={isSelected ? 'selected' : ''}>
      {user.name}
    </li>
  );
};

export default UserItem;