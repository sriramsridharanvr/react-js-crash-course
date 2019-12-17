import React, { Fragment, useContext } from "react";
import TodoContext from "../context/todo/todoContext";

const Alert = () => {
  const todoContext = useContext(TodoContext);
  const alert = todoContext.alert;
  return alert ? (
    <div className="alert-block" id="alerts">
      {alert}
    </div>
  ) : (
    <Fragment />
  );
};

export default Alert;
