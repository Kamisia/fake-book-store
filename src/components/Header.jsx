import Navbar from "./Navbar";
//import QuickSearch from "./QuickSearch";

const Header = () => {
  return (
    <div className="header">
      <h1>FakeBookStore</h1>
      <div className="logo">
        <img src="src/assets/logo.png" />
      </div>
      <div className="menu-content">
        <div className="nav-container">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
