import { NavLink } from "react-router-dom";


export default function Navigation() {
  return (
    <nav>
      <img className="logo" src="./src/assets/logo.png" alt="" />    
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>

    </nav>
  )
}