import React from 'react';

export function Todo({ todo, onRemove }) {
  const handleCheckboxChange = () => {
    onRemove(todo.id);
  };

  return (
    <div>
      <input type="checkbox" onChange={handleCheckboxChange} />
      <label>{todo.text}</label>
    </div>
  );
}
