import React from 'react';
import { Todo } from './Todo';

export function TodoList({ todos, onRemove }) {
  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onRemove={onRemove} />
      ))}
    </>
  );
}
