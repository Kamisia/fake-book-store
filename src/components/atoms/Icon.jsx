import React from "react";

const Icon = ({ IconComponent, className, onClick }) => {
  return <IconComponent className={className} onClick={onClick} />;
};

export default Icon;
