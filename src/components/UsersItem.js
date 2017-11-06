import React from 'react';

const UsersItem = ({id, name}) => {
  return(
    <option value={id}>{name}</option>
  );
};

export default UsersItem;