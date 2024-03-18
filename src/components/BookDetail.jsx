import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { BsCartCheck } from "react-icons/bs";

import { selectItems, addItem } from "../reducers/cartSlicer";
import { useState } from "react";
const BookDetail = ({ book }) => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const [isAdded, setIsAdded] = useState();

  const handleAddItem = () => {
    const newItem = {
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      image: book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : "src/assets/Book.png",
      price: book.saleInfo.listPrice.amount,
      currency: book.saleInfo.listPrice.currencyCode,
      quantity: 1,
    };
    dispatch(addItem(newItem));
    setIsAdded(true);
  };

  if (book.saleInfo.saleability === "FOR_SALE") {
    return (
      <div className="single-book" key={book.id}>
        <div className="image-container-book">
          {book.volumeInfo.imageLinks &&
            book.volumeInfo.imageLinks.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="Book Thumbnail"
              />
            )}
          {/*{<img src="src/assets/Book.png" alt="Book Thumbnail" />}*/}
        </div>
        <div className="content-container">
          <h2>{book.volumeInfo.title}</h2>

          {book.volumeInfo.authors && (
            <p> ~{book.volumeInfo.authors.join(", ")}</p>
          )}
          {book.volumeInfo.publisher && (
            <p> Publisher: {book.volumeInfo.publisher}</p>
          )}
          {book.volumeInfo.publishedDate && (
            <p> Date of publication: {book.volumeInfo.publishedDate}</p>
          )}

          {book.volumeInfo.description && (
            <p> Description: {book.volumeInfo.description}</p>
          )}
        </div>
        <div className="button-container">
          <p>
            {book.saleInfo.listPrice.amount}{" "}
            {book.saleInfo.listPrice.currencyCode}
          </p>

          {isAdded ? (
            <>
              <button disabled className="clicked">
                <BsCartCheck />
              </button>
            </>
          ) : (
            <button className="none-clicked" onClick={handleAddItem}>
              <MdOutlineAddShoppingCart />
            </button>
          )}
        </div>
      </div>
    );
  }
};

export default BookDetail;
