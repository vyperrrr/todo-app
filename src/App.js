import React, { useRef, useState } from 'react';

function TodoList({ todos, onRemove }) {
  return (
    <>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} onRemove={onRemove} />
      ))}
    </>
  );
}

function Todo({ todo, index, onRemove }) {
  const handleCheckboxChange = () => {
    onRemove(index);
  };

  return (
    <div>
      <input type="checkbox" onChange={handleCheckboxChange} />
      <label>{todo}</label>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  function handleClick() {
    if (inputRef.current.value !== "") {
      setTodos([...todos, inputRef.current.value]);
      inputRef.current.value = "";
    }
  };

  function handleRemove(index) {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

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
