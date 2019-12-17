import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar primary fixed-top">
      <h3>Todo List</h3>
      <div className="nav-links">
        <a href="/" className="nav-link">
          Todos
        </a>
        <a href="/about.html" className="nav-link">
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
