import React from 'react';
import UsersItem from '../../components/UsersItem';

const UsersList = ({users, onUserChange}) => {

  return(
    <div className="UsersList">
    <select onChange={onUserChange}>
    {
      users.map((props, idx) =>{
        // console.log('users props id',props.id);
        return (
          <UsersItem
            id={props.id}
            name={props.name}
            key={idx}/>
        );
      })
    }
   </select>
   </div>
  );
}

export default UsersList;