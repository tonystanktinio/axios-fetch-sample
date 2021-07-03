import React from "react";

export function Todos(props) {
  const { title, userId, id } = props;

  return (
    <div className='reminder-wrapper'>
      <div className='reminder-container'>
        <div className='reminder-id'>{id}</div>
        <div className='reminder'>{userId}</div>
        <div className='reminder-time'>{title}</div>
      </div>
    </div>
  );
}
