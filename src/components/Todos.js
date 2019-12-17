import React, { useContext, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoContext from "../context/todo/todoContext";
import Spinner from "./Spinner";

const Todos = () => {
  const todoContext = useContext(TodoContext);

  useEffect(() => {
    todoContext.getAllTodos();
  }, []);

  return !todoContext.loading ? (
    <div className="todos-list">
      {todoContext.todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onRemove={() => todoContext.removeTodo(todo.id)}
          onCompletionChange={() => todoContext.changeTodoStatus(todo)}
        />
      ))}
    </div>
  ) : (
    <Spinner />
  );
};

export default Todos;
