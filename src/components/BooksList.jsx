import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import BookDetail from "./BookDetail";
import { useState } from "react";
const BooksList = () => {
  const [query, setQuery] = useState("flower");

  const fetchBooks = async (query) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=relevance&maxResults=20`
    );

    return response.data;
  };

  const { data, isError, isLoading } = useQuery({
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
      {data.items.map((book) => (
        <BookDetail book={book} />
      ))}
    </div>
  );
};

export default BooksList;
