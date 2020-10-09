import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h3 className="navbar-main">
        <Link to="/">Главная</Link>
      </h3>
      <div className="navbar-form">
        <h4>
          <Link to="/auth">Войти</Link>
        </h4>
        <h4>
          <Link to="/register">Регистрация</Link>
        </h4>
      </div>
    </div>
  );
};
export default Navbar;
