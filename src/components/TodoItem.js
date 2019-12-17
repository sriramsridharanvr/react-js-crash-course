import React from "react";

const TodoItem = ({ todo, onRemove, onCompletionChange }) => {
  const completedClass = todo.completed ? "completed" : "";

  return (
    <div className={"todo-item " + completedClass}>
      <input
        type="checkbox"
        onChange={onCompletionChange}
        checked={todo.completed}
      />
      <span>{todo.title}</span>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default TodoItem;
