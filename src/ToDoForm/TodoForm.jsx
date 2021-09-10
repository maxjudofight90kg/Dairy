import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };
  

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSubmit(e);
    }
  };

  return (
    <form className='form-horizontal' onSubmit={handleSubmit}>
      <input
        value={userInput}
        type='text'
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder='Type name here...'
      />
      <button>Add new</button>
    </form>
  );
};

export default ToDoForm;