import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function App() {
  const fetchBooks = async () => {
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
    );

    return response.data;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching data...</div>;
  }

  return (
    <div>
      <h1>Fake Book Store</h1>
      {data.items.map((book) => (
        <div key={book.id}>
          <h2>{book.volumeInfo.title}</h2>
          <p>{book.volumeInfo.authors.join(", ")}</p>
          {book.volumeInfo.imageLinks &&
            book.volumeInfo.imageLinks.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="Book Thumbnail"
              />
            )}
        </div>
      ))}
    </div>
  );
}

export default App;
