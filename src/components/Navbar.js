import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar primary fixed-top">
      <h3>Todo List</h3>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Todos
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
