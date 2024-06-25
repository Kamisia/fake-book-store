import React from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import { CiSearch } from "react-icons/ci";

const SearchInput = ({ queryValue, setQueryValue, handleSearch }) => {
  return (
    <form className="search" onSubmit={handleSearch}>
      <Input
        type="text"
        value={queryValue}
        onChange={(event) => setQueryValue(event.target.value)}
        placeholder="Enter title..."
      />
      <Button className="search-button" type="submit" disabled={!queryValue}>
        <Icon IconComponent={CiSearch} />
      </Button>
    </form>
  );
};

export default SearchInput;
