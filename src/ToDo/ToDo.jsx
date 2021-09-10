import React from 'react';

const ToDo = ({ todo, toggleActiveTask, removeTask, isActive }) => {

  return (
    <div key={todo.id} className='item-todo'>
      <div
        onClick={() => toggleActiveTask(todo.id)}
        className={isActive ? 'item-text strike' : 'item-text'}
      >
        {todo.task}
        <span>{todo.comments.length}</span>
      </div>
      <div>
       <button className='item-delete' onClick={() => removeTask(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ToDo;
