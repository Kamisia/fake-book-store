import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { CiTrash } from "react-icons/ci";
import { FaPlus, FaMinus } from "react-icons/fa6";
import defaultBookImageUrl from "/src/images/Book.png";
import {
  selectItems,
  addItem,
  updateItemQuantity,
  deleteItem,
} from "../reducers/cartSlicer";
import { useState, useEffect } from "react";
const BookDetail = ({ book }) => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    const foundItem = items.find((item) => item.id === book.id);
    if (foundItem) {
      setIsAdded(true);
      setQuantity(foundItem.quantity);
    } else {
      setIsAdded(false);
      setQuantity(0);
    }
  }, [items, book]);
  const handleAddItem = () => {
    const newItem = {
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      image: book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : defaultBookImageUrl,
      price: book.saleInfo.listPrice.amount,
      currency: book.saleInfo.listPrice.currencyCode,
      quantity: 1,
    };
    dispatch(addItem(newItem));
    setIsAdded(true);
    setQuantity(1);
  };
  const handleIncreaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(updateItemQuantity({ id: book.id, quantity: newQuantity }));
  };

  const handleDecreaseQuantity = () => {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    if (newQuantity === 0) {
      dispatch(deleteItem(book.id));
      setIsAdded(false);
    } else {
      dispatch(updateItemQuantity({ id: book.id, quantity: newQuantity }));
    }
  };

  const handleDelete = () => {
    dispatch(deleteItem(book.id));
    setIsAdded(false);
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
            <div className="button-cart">
              <div className="quantity">
                <button onClick={handleDecreaseQuantity}>
                  <FaMinus />
                </button>
                <p className="number">{quantity}</p>
                <button id="plus" onClick={handleIncreaseQuantity}>
                  <FaPlus />
                </button>
                <button className="trash" onClick={handleDelete}>
                  <CiTrash />
                </button>
              </div>
            </div>
          ) : (
            <div className="button-cart">
              <button className="none-clicked" onClick={handleAddItem}>
                <MdOutlineAddShoppingCart />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default BookDetail;
