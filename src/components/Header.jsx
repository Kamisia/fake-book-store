import Navbar from "./Navbar";
import imgUrl from "/src/images/logo.png";
//import QuickSearch from "./QuickSearch";

const Header = () => {
  return (
    <div className="header">
      <h1>FakeBookStore</h1>
      <div className="logo">
        <img src={imgUrl} />
      </div>
      <div className="nav-container">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
