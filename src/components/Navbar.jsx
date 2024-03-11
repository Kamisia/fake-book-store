import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-content">
      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/search" className="nav-link">
          Search
        </NavLink>
        <NavLink to="/cart" className="nav-link">
          Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
