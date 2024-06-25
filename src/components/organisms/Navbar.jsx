import React from "react";
import { useSelector } from "react-redux";
import { selectItemCount } from "../../reducers/cartSlicer";
import NavbarLink from "../molecules/NavbarLink";
const Navbar = () => {
  const itemCount = useSelector(selectItemCount);
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <nav className="nav-content">
      <div className="nav-links">
        <NavbarLink to={baseUrl} label="Home" />
        <NavbarLink to={`${baseUrl}search`} label="Search" />
        <NavbarLink to={`${baseUrl}cart`} label="Cart" count={itemCount} />
      </div>
    </nav>
  );
};

export default Navbar;
