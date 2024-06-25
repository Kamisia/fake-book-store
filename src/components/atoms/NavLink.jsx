import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = ({ to, children }) => {
  return (
    <RouterNavLink to={to} className="nav-link">
      {children}
    </RouterNavLink>
  );
};

export default NavLink;
