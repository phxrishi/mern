import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink 
        to="/home" 
        className={({ isActive }) => isActive ? "active-link" : ""}
      >
        Home
      </NavLink>

      <NavLink 
        to="/about" 
        className={({ isActive }) => isActive ? "active-link" : ""}
      >
        About
      </NavLink>

      <NavLink 
        to="/services" 
        className={({ isActive }) => isActive ? "active-link" : ""}
      >
        Services
      </NavLink>

      <NavLink 
        to="/portfolio" 
        className={({ isActive }) => isActive ? "active-link" : ""}
      >
        Portfolio
      </NavLink>

      <NavLink 
        to="/contact" 
        className={({ isActive }) => isActive ? "active-link" : ""}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
