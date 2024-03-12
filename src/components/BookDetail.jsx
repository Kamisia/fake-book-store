import { MdOutlineAddShoppingCart } from "react-icons/md";

const BookDetail = ({ book }) => {
  return (
    <div className="single-book" key={book.id}>
      <div className="image-container">
        {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt="Book Thumbnail"
          />
        )}
      </div>
      <div className="content-container">
        <h2>{book.volumeInfo.title}</h2>

        {book.volumeInfo.authors && <p>{book.volumeInfo.authors.join(", ")}</p>}

        <p>{book.volumeInfo.description}</p>
        <p>{book.volumeInfo.publisher}</p>
        <p>{book.volumeInfo.publishedDate}</p>
      </div>
      <div className="button-container">
        <button>
          <MdOutlineAddShoppingCart />
        </button>
        {/*Jeśli jest już produkt dodany do koszyka możliwosc jego usunięcia i zwiekszania/zmniejszania ilości bez wchodzenia do koszyka */}
      </div>
    </div>
  );
};

export default BookDetail;
