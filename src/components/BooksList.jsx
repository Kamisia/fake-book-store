import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import BookDetail from "./BookDetail";
import { useState } from "react";
const BooksList = () => {
  const [query, setQuery] = useState("flower");
  {
    /*Funkcja do pobierania danych z serwera. Na przyszłość można przemyśleć jak sprawnić wyszukiwanie,
by pokazywało bardziej precyzyjne wyniki 

const all = "";
const intitle = "intitle";
const inauthor = "inauthor";
const inpublisher = "inpublisher";

url =`https://www.googleapis.com/books/v1/volumes?q=${query}+${option}&orderBy=relevance&maxResults=20` 
 W przyszłości można zrobić wyszukiwanie po tytule, autorze czy wydawcy, 
 wystarczy dodac selektora do komponentu search który będzie ustawiał
 wartość option w adresie url i przekazywał go do funkcji fetchData
Obecnie wyszukiwanie jest ustawione na wyszukiwanie po tytułach
*/
  }
  const fetchBooks = async (query) => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}+intitle&orderBy=relevance&maxResults=20`
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
