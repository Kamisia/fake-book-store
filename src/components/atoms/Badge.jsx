import React from "react";

const Badge = ({ count }) => {
  return count > 0 ? <span className="badge">{count}</span> : null;
};

export default Badge;
