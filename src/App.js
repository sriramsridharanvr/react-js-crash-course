import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Alert from "./components/Alert";
import TodoState from "./context/todo/TodoState";
import TodoSummary from "./components/TodoSummary";
import About from "./components/About";

function App() {
  return (
    <Router>
      <TodoState>
        <Fragment>
          <Navbar />
          <main className="main-content">
            <Switch>
              <Route exact path="/">
                <Alert />
                <AddTodo />
                <TodoSummary />
                <Todos />
              </Route>
              <Route path="/about" component={About} />
            </Switch>
          </main>
        </Fragment>
      </TodoState>
    </Router>
  );
}

export default App;
