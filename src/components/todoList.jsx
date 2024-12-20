import React from 'react';
import './todolist.css';

function TodoList({ todos }) {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <input type="checkbox" className="todo-checkbox" /> 
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
