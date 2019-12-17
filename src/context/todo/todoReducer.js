import {
  LOAD_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  CHANGE_TODO_STATUS,
  SET_ALERT,
  CLEAR_ALERT,
  SET_LOADING
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case LOAD_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        alert: null,
        loading: false
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
        loading: false
      };

    case CHANGE_TODO_STATUS:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      };

    case SET_ALERT:
      return {
        ...state,
        alert: action.payload
      };

    case CLEAR_ALERT:
      return {
        ...state,
        alert: null
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
