import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <NavLink to="/home">Home</NavLink> |{" "}
        <NavLink to="/about">About</NavLink> |{" "}
        <NavLink to="/services">Services</NavLink> |{" "}
        <NavLink to="/products">Products</NavLink> |{" "}
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <hr />

      {/* Programmatic navigation */}
      <button onClick={() => navigate(-1)}>⬅ Back</button>
      <button onClick={() => navigate(1)}>➡ Forward</button>
    </div>
  );
}

export default Navbar;
