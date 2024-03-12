//import BooksList from "../components/BooksList";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import BookDetail from "../components/BookDetail";
import { useState } from "react";
const Search = () => {
  const [query, setQuery] = useState("flower");
  const [queryValue, setQueryValue] = useState("");
  const fetchBooks = async (query) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=relevance&maxResults=20`
    );

    return response.data;
  };
  const handleInputChange = (event) => {
    const inputQuery = event.target.value;
    setQueryValue(inputQuery);
  };
  const handleSearch = () => {
    setQuery(queryValue);
    refetch();
  };
  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ["books", query],
    queryFn: () => fetchBooks(query),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching data...</div>;
  }

  return (
    <div className="container">
      <div className="quick-search" onSubmit={handleSearch}>
        <input
          type="text"
          value={queryValue}
          onChange={handleInputChange}
          placeholder="Search for books..."
        ></input>

        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </div>

      {data.items.map((book) => (
        <BookDetail book={book} />
      ))}
    </div>
  );
};

export default Search;
