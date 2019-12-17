import React, { useReducer } from "react";

import TodoContext from "./todoContext";
import TodoReducer from "./todoReducer";
import uuid from "uuid";

import axios from "axios";

import {
  LOAD_TODOS,
  REMOVE_TODO,
  ADD_TODO,
  CHANGE_TODO_STATUS,
  SET_ALERT,
  CLEAR_ALERT,
  SET_LOADING
} from "../types";

const TodoState = props => {
  const initialState = {
    todos: [],
    alert: null,
    loading: false
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // Get All Todos
  // const getAllTodos = () => {
  //   axios
  //     .get("/todos")
  //     .then(function(response) {
  //       dispatch({
  //         type: LOAD_TODOS,
  //         payload: response.data
  //       });
  //     })
  //     .catch(function(error) {
  //       setAlert("Could not fetch ToDos from server");
  //       console.error(error);
  //     });
  // };

  const getAllTodos = async () => {
    setLoading();
    try {
      const response = await axios.get("/todos");
      dispatch({
        type: LOAD_TODOS,
        payload: response.data
      });
    } catch (error) {
      console.error(error);
      setAlert("Could not fetch ToDos from server");
    }
  };

  //   Add Todo
  const addTodo = async todoTitle => {
    setLoading();
    if (todoTitle !== "") {
      const newTodo = {
        title: todoTitle,
        completed: false
      };

      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };

      const response = await axios.post("/todos", newTodo, config);

      dispatch({
        type: ADD_TODO,
        payload: response.data
      });
    } else {
      setAlert("Please enter a valid ToDo!");
    }
  };

  //   Remove Todo
  const removeTodo = async todoId => {
    setLoading();
    try {
      await axios.delete("/todos/" + todoId);

      dispatch({
        type: REMOVE_TODO,
        payload: todoId
      });
    } catch (error) {
      console.error(error);
      setAlert("Could not delete ToDo");
    }
  };

  //   Change Todo Status
  const changeTodoStatus = todo => {
    dispatch({
      type: CHANGE_TODO_STATUS,
      payload: todo.id
    });
  };

  //   Set Alert
  const setAlert = alertMessage => {
    dispatch({
      type: SET_ALERT,
      payload: alertMessage
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT
      });
    }, 5000);
  };

  // Set Loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        alert: state.alert,
        loading: state.loading,
        addTodo,
        removeTodo,
        changeTodoStatus,
        setAlert,
        getAllTodos
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
