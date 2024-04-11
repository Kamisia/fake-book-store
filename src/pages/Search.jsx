import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearchResults, selectSearchResults } from "../reducers/cartSlicer";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import BookDetail from "../components/BookDetail";
import SearchForm from "../components/SearchForm";

const Search = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector(selectSearchResults);
  const [queryValue, setQueryValue] = useState("");
  const [searched, setSearched] = useState(false);

  const fetchBooks = async (query) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=relevance&maxResults=20`
    );
    return response.data.items;
  };

  const handleInputChange = (event) => {
    const inputQuery = event.target.value;
    setQueryValue(inputQuery);
    setSearched(false);
  };

  const handleSearch = () => {
    if (queryValue.trim() !== "") {
      setSearched(true);
    }
  };

  const { isLoading, isError, data } = useQuery({
    queryKey: ["books", queryValue],
    queryFn: () => fetchBooks(queryValue),
    enabled: searched,
  });

  useEffect(() => {
    if (data) {
      dispatch(addSearchResults(data));
    }
  }, [data, dispatch]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching data...</div>;
  }

  return (
    <div className="search-container">
      <div className="search-content">
        <SearchForm
          handleInputChange={handleInputChange}
          queryValue={queryValue}
          handleSearch={handleSearch}
        />
        {searchResults &&
          searchResults.map((book) => <BookDetail book={book} key={book.id} />)}
      </div>
    </div>
  );
};

export default Search;
