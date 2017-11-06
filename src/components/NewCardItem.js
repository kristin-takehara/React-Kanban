import React from 'react';

const NewCardItem = ({title, created_by, assigned_to, status_id, priorities_id}) => {
  return(
    <ul className ="new-card">
      <div>Title: {title}</div>
      <div>Created By: {created_by}</div>
      <div>Assigned To: {assigned_to}</div>
      <div>Status: {status_id}</div>
      <div>Priority: {priorities_id}</div>
      <button>Status</button>
    </ul>
  );
};

export default NewCardItem;