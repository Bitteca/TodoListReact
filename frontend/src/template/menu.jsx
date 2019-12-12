import React from "react";
import { NavLink } from "react-router-dom";

export default props => (
  <nav className="navbar navbar-expand-sm navbar-dark  bg-dark">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="/todos">
          <i className="fa fa-calendar-check-o"></i> TodoApp
        </a>
      </div>
      <div id="navbarNavDropdown" className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/todos">
              Tarefas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/sobre">
              Sobre
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
