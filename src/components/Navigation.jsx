import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/nhlogo.webp';


export default function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="headerWrapper">
     <img className="logo" src={logo} alt="" />
    <nav className={`navlinks ${isMenuOpen ? "active" : ""}`}>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`menu__icon ${isMenuOpen ? "active" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {isMenuOpen && (
        <div className="menu-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      )}
    </nav>
    </header>
  );
}
