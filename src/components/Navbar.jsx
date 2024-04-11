import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItemCount } from "../reducers/cartSlicer";
const Navbar = () => {
  const itemCount = useSelector(selectItemCount);
  return (
    <nav className="nav-content">
      <div className="nav-links">
        <NavLink to={`${import.meta.env.BASE_URL}/`} className="nav-link">
          Home
        </NavLink>

        <NavLink to={`${import.meta.env.BASE_URL}/search`} className="nav-link">
          Search
        </NavLink>
        <NavLink to={`${import.meta.env.BASE_URL}/cart`} className="nav-link">
          Cart {itemCount > 0 && <span>{itemCount}</span>}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
