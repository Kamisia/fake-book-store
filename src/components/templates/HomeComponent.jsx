import React from "react";
import Image from "../atoms/Image";
import imgBG from "../../images/hero.svg";

const HomeComponent = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>FakeBookStore</h1>
        <p>
          Welcome to Fake Book Store, where literature becomes
          your&nbsp;indispensable companion on&nbsp;the&nbsp;journey through
          the&nbsp;world of&nbsp;imagination. We offer a&nbsp;wide selection
          of&nbsp;books from various genres and&nbsp;for&nbsp;all ages, ensuring
          unforgettable reading experiences. Our&nbsp;platform enables easy
          searching for&nbsp;favorite titles and&nbsp;quick, secure online
          purchases. Thanks to&nbsp;collaboration with&nbsp;renowned publishers,
          we&nbsp;guarantee the&nbsp;highest quality of&nbsp;offered
          publications. Join our&nbsp;community of&nbsp;readers
          and&nbsp;discover new literary worlds waiting
          to&nbsp;be&nbsp;explored!
        </p>
      </div>
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${imgBG})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default HomeComponent;
