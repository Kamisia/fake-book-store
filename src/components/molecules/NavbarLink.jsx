import React from "react";
import NavLink from "../atoms/NavLink";
import Badge from "../atoms/Badge";

const NavbarLink = ({ to, label, count }) => {
  return (
    <div className="nav-link">
      <NavLink to={to}>
        {label} <Badge count={count} />
      </NavLink>
    </div>
  );
};

export default NavbarLink;
