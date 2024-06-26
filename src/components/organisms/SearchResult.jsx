import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSearchResults } from "../../reducers/cartSlicer";
import { useGlobalContext } from "../../Context";
import BookDetail from "../molecules/BookDetail";
import Modal from "../organisms/Modal";

const SearchResult = ({ searched, setSearched, queryValue }) => {
  const { fetchBooks } = useGlobalContext();
  const searchResults = useSelector(selectSearchResults);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    if (searched) {
      fetchBooks(queryValue);
    }
  }, [searched, queryValue, fetchBooks]);

  return (
    <div className="result-container">
      {searchResults &&
        searchResults.map((book) => (
          <BookDetail
            book={book}
            key={book.id}
            setSelectedBook={setSelectedBook}
          />
        ))}
      {selectedBook && <Modal book={selectedBook} />}
    </div>
  );
};

export default SearchResult;
