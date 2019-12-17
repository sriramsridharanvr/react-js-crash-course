import React, { useState, useContext } from "react";
import TodoContext from "../context/todo/todoContext";

const AddTodo = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const todoContext = useContext(TodoContext);

  const onFormSubmit = e => {
    e.preventDefault();
    todoContext.addTodo(todoTitle);
  };

  return (
    <div className="add-todo-block">
      <form id="todoForm" onSubmit={onFormSubmit}>
        <input
          type="text"
          name="todo"
          id="todo"
          value={todoTitle}
          onChange={e => setTodoTitle(e.target.value)}
          placeholder="Add Todo..."
          className="form-input"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
