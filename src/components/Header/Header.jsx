import React, { useEffect, useState } from "react";
import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import Menu from "../Menu/Menu";

function Header({ menuItems, menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  const handelMenu = () => {
    console.log(menuOpen);
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`header ${scrolled ? "header-fixed" : ""}`}>
        <div className="header__conteiner conteiner">
          <Link to={"/"}>
            <div className="logo">
              {/* <p className="logo__text">b.blog</p> */}
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
      <Menu
        menuItems={menuItems}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </div>
  );
}

export default Header;
