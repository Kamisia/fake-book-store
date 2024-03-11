import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <h1>FakeBookStore</h1>
      <div className="menu-content">
        <div className="nav-container">
          <Navbar />
        </div>
        <div className="quick-search">
          <input></input>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
