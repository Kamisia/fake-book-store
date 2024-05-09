import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CiTrash } from "react-icons/ci";
import { FaPlus, FaMinus } from "react-icons/fa6";
import {
  selectItems,
  addItem,
  updateItemQuantity,
  deleteItem,
} from "../reducers/cartSlicer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const ButtonsComponent = ({ book }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const [isAdded, setIsAdded] = useState(false);

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
  return (
    <div className="button-container">
      {isAdded ? (
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
      ) : (
        <button className="none-clicked" onClick={handleAddItem}>
          <MdOutlineAddShoppingCart />
        </button>
      )}
    </div>
  );
};

export default ButtonsComponent;
