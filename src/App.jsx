import { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [
      'Apprendre React',
      'Écrire des tests',
      'Construire un projet avec React'
    ];
  });
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Ajouter une tâche"
          className="todo-input"
        />
        <button type="submit" className="add-btn">Ajouter</button>
      </form>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
