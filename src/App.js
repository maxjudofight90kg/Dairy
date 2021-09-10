import React, { useState, useEffect } from 'react';
import ToDo from './ToDo/ToDo';
import ToDoForm from './ToDoForm/TodoForm';
import Dairy from './Dairy/Dairy';
import Comments from './Comments/Comments';

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  const [activeTaskId, setActiveTaskId] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        comments: []
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleChangeComment = (comment) => {
    const newTodos = [...todos.map(todo => todo.id === activeTaskId ? {...todo, comments: [...todo.comments , comment]} : {...todo})]
    setTodos(newTodos);
  }

  return (
    <div className='container'>
      <Dairy />
      <div className='App'>
        <div className='wrapper'>
          <header>
            <h1 className='item'>Items</h1>
          </header>
          <ToDoForm addTask={addTask} />
          {todos.map((todo) => {
            return (
              <ToDo
                todo={todo}
                key={todo.id}
                toggleActiveTask={setActiveTaskId}
                removeTask={removeTask}
                isActive={todo.id === activeTaskId}
              />
            );
          })}
          </div>
      </div>
      <Comments 
        currentTodo={activeTaskId && todos.find(todo => todo.id === activeTaskId)} 
        handleChangeComment={handleChangeComment}
      />
    </div>
  );
}

export default App;
