import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectSearchResults } from "../reducers/cartSlicer";
import { useGlobalContext } from "../Context";
import BookDetail from "./BookDetail";
import Modal from "./Modal";

const SearchResult = ({ searched, setSearched, queryValue }) => {
  const { fetchBooks } = useGlobalContext();
  const searchResults = useSelector(selectSearchResults);

  useEffect(() => {
    if (searched) {
      fetchBooks(queryValue);
    }
  }, [searched, queryValue, fetchBooks]);

  return (
    <div className="result-container">
      {searchResults &&
        searchResults.map((book) => <BookDetail book={book} key={book.id} />)}
      <Modal />
    </div>
  );
};

export default SearchResult;
