import React, { Fragment, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Alert from "./components/Alert";
import TodoState from "./context/todo/TodoState";
import TodoSummary from "./components/TodoSummary";

function App() {
  return (
    <TodoState>
      <Fragment>
        <Navbar />
        <main className="main-content">
          <Alert />
          <AddTodo />
          <TodoSummary />
          <Todos />
        </main>
      </Fragment>
    </TodoState>
  );
}

export default App;
