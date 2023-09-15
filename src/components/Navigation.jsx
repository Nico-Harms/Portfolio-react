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
      
      <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
        <label className="hamburger-label" htmlFor="menuToggle">
          <input className="dropdown-input" type="checkbox" id="menuToggle" checked={isMenuOpen} onChange={toggleMenu} />
          <svg className="hamburger-svg" viewBox="0 0 32 32">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li className="nav-item">
              <NavLink to="/" end className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link">Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
}
