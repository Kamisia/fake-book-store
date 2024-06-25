import React from "react";
import Navbar from "../organisms/Navbar";
import Image from "../atoms/Image";
import imgUrl from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <h1>FakeBookStore</h1>
      <div
        className="logo"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="nav-container">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
