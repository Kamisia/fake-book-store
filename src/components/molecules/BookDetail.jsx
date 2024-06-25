import ButtonsComponent from "../molecules/ButtonsComponent";
import { useGlobalContext } from "../../Context";

const BookDetail = ({ book }) => {
  const { openModal } = useGlobalContext();

  // Walidacja danych książki
  const isForSale = book?.saleInfo?.saleability === "FOR_SALE";
  const listPrice = book?.saleInfo?.listPrice;
  const amount = listPrice?.amount || 0; // Ustawienie domyślnej wartości
  const currencyCode = listPrice?.currencyCode || "USD"; // Ustawienie domyślnej wartości
  const authors = book?.volumeInfo?.authors?.join(", ") || "Unknown author";
  const title = book?.volumeInfo?.title || "Unknown title";
  const description =
    book?.volumeInfo?.description || "No description available";
  const imageLinks =
    book?.volumeInfo?.imageLinks?.thumbnail || "defaultBookImageUrl";

  if (!isForSale) {
    return null; // Jeśli książka nie jest na sprzedaż, nie renderujemy nic
  }

  return (
    <div className="single-book" key={book.id}>
      <div
        className="image-container-book"
        onClick={() =>
          openModal(
            authors,
            description,
            title,
            amount,
            currencyCode,
            imageLinks
          )
        }
      >
        <img src={imageLinks} alt="Book Thumbnail" />
      </div>
      <div className="content-container">
        <div className="info">
          <h2>{title}</h2>
          <p className="author">~{authors}</p>
          <span
            onClick={() =>
              openModal(
                authors,
                description,
                title,
                amount,
                currencyCode,
                imageLinks
              )
            }
          >
            Read more
          </span>
        </div>
        <div className="price">
          <p>
            {amount} {currencyCode}
          </p>
        </div>
      </div>
      <ButtonsComponent book={book} />
    </div>
  );
};

export default BookDetail;
