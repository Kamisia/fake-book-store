import ButtonsComponent from "./ButtonsComponent";
import { useGlobalContext } from "../Context";

const BookDetail = ({ book }) => {
  const { openModal } = useGlobalContext();
  if (book.saleInfo.saleability === "FOR_SALE") {
    return (
      <div className="single-book" key={book.id}>
        <div
          className="image-container-book"
          onClick={() =>
            openModal(
              book.volumeInfo.authors.join(", "),
              book.volumeInfo.description,
              book.volumeInfo.title,
              book.saleInfo.listPrice.amount,
              book.saleInfo.listPrice.currencyCode,
              book.volumeInfo.imageLinks.thumbnail
            )
          }
        >
          {book.volumeInfo.imageLinks &&
            book.volumeInfo.imageLinks.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="Book Thumbnail"
              />
            )}
        </div>
        <div className="content-container">
          <div className="info">
            <h2>{book.volumeInfo.title}</h2>

            {book.volumeInfo.authors && (
              <p className="author"> ~{book.volumeInfo.authors.join(", ")}</p>
            )}

            <span
              onClick={() =>
                openModal(
                  book.volumeInfo.authors.join(", "),
                  book.volumeInfo.description,
                  book.volumeInfo.title,
                  book.saleInfo.listPrice.amount,
                  book.saleInfo.listPrice.currencyCode,
                  book.volumeInfo.imageLinks.thumbnail
                )
              }
            >
              Read more
            </span>
          </div>

          <div className="price">
            <p>
              {book.saleInfo.listPrice.amount}{" "}
              {book.saleInfo.listPrice.currencyCode}
            </p>
          </div>
        </div>
        <ButtonsComponent book={book} />
      </div>
    );
  }
};

export default BookDetail;
