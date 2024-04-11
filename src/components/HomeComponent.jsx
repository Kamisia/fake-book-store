import imgBG from "/src/images/hero.svg";
const HomeComponent = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>FakeBookStore</h1>
        <p>
          Welcome to Fake Book Store, where literature becomes your
          indispensable companion on the journey through the world of
          imagination. We offer a wide selection of books from various genres
          and for all ages, ensuring unforgettable reading experiences. Our
          platform enables easy searching for favorite titles and quick, secure
          online purchases. Thanks to collaboration with renowned publishers, we
          guarantee the highest quality of offered publications. Join our
          community of readers and discover new literary worlds waiting to be
          explored!
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
