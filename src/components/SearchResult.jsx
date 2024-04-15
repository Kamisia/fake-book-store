import BookDetail from "./BookDetail";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { addSearchResults, selectSearchResults } from "../reducers/cartSlicer";
const SearchResult = ({ searched, queryValue }) => {
  const dispatch = useDispatch();
  const searchResults = useSelector(selectSearchResults);

  const fetchBooks = async (query) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=relevance&maxResults=20`
    );
    return response.data.items;
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
    <div>
      {searchResults &&
        searchResults.map((book) => <BookDetail book={book} key={book.id} />)}
    </div>
  );
};

export default SearchResult;
