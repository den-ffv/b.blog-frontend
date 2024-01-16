import React from "react";
import "./Header.scss";
import { NavLink, Link } from "react-router-dom";

function Header({ menuItems, menuOpen, setMenuOpen }) {
  const handelMenu =() => {
    console.log(menuOpen)
    setMenuOpen(!menuOpen)
  }
  return (
    <header className="header">
      <div className="header__conteiner conteiner">
        <Link to={"/"}>
          <div className="logo">
            <p className="logo__text">b.blog</p>
          </div>
        </Link>
        <ul className="header__ul">
          {menuItems.map((item) => (
            <li key={item.id} className="header__list">
              <NavLink to={item.href}>{item.value}</NavLink>
            </li>
          ))}
          <li>
            <NavLink to={"/auth/login"} className="header__button">
              Sign in
            </NavLink>
          </li>
            <button onClick={handelMenu} className="menu__button">
              <span></span>
              <span></span>
              <span></span>
            </button>
        </ul>
      </div>
    </header>
  );
}

export default Header;
