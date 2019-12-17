import React, { useContext } from "react";
import TodoContext from "../context/todo/todoContext";

const TodoSummary = () => {
  const todoContext = useContext(TodoContext);

  const { todos } = todoContext;

  const pluralizedWord =
    todos.length == 0 || todos.length > 1 ? "ToDos" : "ToDo";
  return (
    <div className="todo-summary">
      Showing <span className="summary-value">{todos.length}</span>
      {pluralizedWord}
    </div>
  );
};

export default TodoSummary;
