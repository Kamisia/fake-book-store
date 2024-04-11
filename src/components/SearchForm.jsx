const SearchForm = ({ handleSearch, handleInputChange, queryValue }) => {
  return (
    <div className="search-form">
      <div className="search" onSubmit={handleSearch}>
        <input
          type="text"
          value={queryValue}
          onChange={handleInputChange}
          placeholder="Enter title..."
        ></input>
        {queryValue !== "" ? (
          <button type="submit" onClick={handleSearch}>
            Search
          </button>
        ) : (
          <button
            style={{ backgroundColor: "gray", cursor: "auto", opacity: "0.5" }}
            type="submit"
            disabled
            onClick={handleSearch}
          >
            Search
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
