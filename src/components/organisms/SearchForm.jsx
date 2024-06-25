import React, { useState } from "react";
import SearchInput from "../molecules/SearchInput";
import SearchResult from "./SearchResult";

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
        <SearchInput
          queryValue={queryValue}
          setQueryValue={setQueryValue}
          handleSearch={handleSearch}
        />
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
