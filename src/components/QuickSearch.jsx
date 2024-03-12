import { NavLink } from "react-router-dom";

const QuickSearch = ({ handleInputChange, query }) => {
  return (
    <div className="quick-search">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for books..."
      ></input>
      <NavLink to="/search" className="nav-link">
        <button>Search</button>
      </NavLink>
    </div>
  );
};

export default QuickSearch;
