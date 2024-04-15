import { useState } from "react";
import SearchResult from "./SearchResult";
const SearchForm = () => {
  const [searched, setSearched] = useState(false);
  const [queryValue, setQueryValue] = useState("");

  const handleSearch = () => {
    if (queryValue.trim() !== "") {
      setSearched(true);
    }
  };

  return (
    <>
      <div className="search-form">
        <form
          className="search"
          onSubmit={(event) => {
            event.preventDefault();
            handleSearch();
          }}
        >
          <input
            type="text"
            value={queryValue}
            onChange={(event) => setQueryValue(event.target.value)}
            placeholder="Enter title..."
          ></input>
          <button
            className="search-button"
            type="submit"
            disabled={!queryValue}
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
      </div>
      <SearchResult searched={searched} queryValue={queryValue} />
    </>
  );
};

export default SearchForm;
