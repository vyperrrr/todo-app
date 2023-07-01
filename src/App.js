import React, { useRef, useState, useEffect } from 'react';
import { TodoList } from './components/TodoList';

function App() {
  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  const [todos, setTodos] = useState(storedTodos || []);
  const [item_counter, setCounter] = useState(0);
  const inputRef = useRef(null);

  function handleClick() {
    if (inputRef.current.value.trim().length !== 0) {
      const newTodo = {
        id: item_counter,
        text: inputRef.current.value,
      };
      setTodos([...todos, newTodo]);
      inputRef.current.value = '';
      setCounter(prevCounter => prevCounter + 1)
    }
  }

  function handleRemove(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} onRemove={handleRemove} />
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Add Todo</button>
    </div>
  );
}

export default App;
