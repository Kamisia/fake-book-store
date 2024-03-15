const SearchForm = ({ handleSearch, handleInputChange, queryValue }) => {
  return (
    <div className="search-form">
      <div className="quick-search" onSubmit={handleSearch}>
        <input
          type="text"
          value={queryValue}
          onChange={handleInputChange}
          placeholder="Enter title..."
        ></input>

        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
