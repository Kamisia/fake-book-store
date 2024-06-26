import React from "react";
import { useGlobalContext } from "../../Context";
import ButtonsComponent from "../molecules/ButtonsComponent";

const BookDetail = ({ book, setSelectedBook }) => {
  const { openModal } = useGlobalContext();

  const isForSale = book?.saleInfo?.saleability === "FOR_SALE";
  const listPrice = book?.saleInfo?.listPrice;
  const amount = listPrice?.amount || 0;
  const currencyCode = listPrice?.currencyCode || "USD";
  const authors = book?.volumeInfo?.authors?.join(", ") || "Unknown author";
  const title = book?.volumeInfo?.title || "Unknown title";
  const description =
    book?.volumeInfo?.description || "No description available";
  const imageLinks =
    book?.volumeInfo?.imageLinks?.thumbnail || "defaultBookImageUrl";

  if (!isForSale) {
    return null;
  }

  const handleOpenModal = () => {
    openModal(authors, description, title, amount, currencyCode, imageLinks);
    setSelectedBook(book);
  };

  return (
    <div className="single-book" key={book.id}>
      <div className="image-container-book" onClick={handleOpenModal}>
        <img src={imageLinks} alt="Book Thumbnail" />
      </div>
      <div className="content-container">
        <div className="info">
          <h2>{title}</h2>
          <p className="author">~{authors}</p>
          <span onClick={handleOpenModal}>Read more</span>
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
