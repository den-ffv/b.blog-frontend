import React from "react";
import { NavLink } from "react-router-dom";

import "./Menu.scss";

import closeIcon from "/icon/close.svg"

function Menu({ menuItems, menuOpen, setMenuOpen }) {
    const handleMenu = () => {
        setMenuOpen(false)
    }
  return (
    <div className={!menuOpen ? "menu" : "menu menu-open"}>
      <div className="conteiner">
        <button className="menu__close" onClick={handleMenu}><p>close</p>  <img src={closeIcon} alt="" /></button>
        <ul className="menu__ul">
          {menuItems.map((item) => (
            <li key={item.id} className="menu__list">
              <NavLink onClick={handleMenu} to={item.href}>{item.value}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
