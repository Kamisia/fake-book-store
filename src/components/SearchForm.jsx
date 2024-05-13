import { useState } from "react";
import SearchResult from "./SearchResult";
import { CiSearch } from "react-icons/ci";

const SearchForm = () => {
  const [searched, setSearched] = useState(false);
  const [queryValue, setQueryValue] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (queryValue.trim() !== "") {
      setSearched(true);
    }
  };

  return (
    <>
      <div className="search-form">
        <form className="search" onSubmit={handleSearch}>
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
          >
            <CiSearch />
          </button>
        </form>
      </div>
      <SearchResult
        searched={searched}
        queryValue={queryValue}
        setSearched={setSearched}
      />
    </>
  );
};

export default SearchForm;
