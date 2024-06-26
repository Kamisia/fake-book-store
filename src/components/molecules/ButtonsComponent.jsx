import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CiTrash } from "react-icons/ci";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useGlobalContext } from "../../Context";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

const ButtonsComponent = ({ book }) => {
  const { items, handleAddItem, handleUpdateItemQuantity, handleDeleteItem } =
    useGlobalContext();

  const foundItem = items.find((item) => item.id === book.id);
  const isAdded = !!foundItem;
  const quantity = foundItem ? foundItem.quantity : 0;

  const handleAddItemToCart = () => {
    const newItem = {
      id: book.id,
      title: book.volumeInfo?.title || "Unknown title",
      authors: book.volumeInfo?.authors || ["Unknown author"],
      image: book.volumeInfo?.imageLinks?.thumbnail || "defaultBookImageUrl",
      price: book.saleInfo?.listPrice?.amount || 0,
      currency: book.saleInfo?.listPrice?.currencyCode || "USD",
      quantity: 1,
    };
    handleAddItem(newItem);
  };

  const handleIncreaseQuantity = () => {
    const newQuantity = quantity + 1;
    handleUpdateItemQuantity(book.id, newQuantity);
  };

  const handleDecreaseQuantity = () => {
    const newQuantity = quantity - 1;
    if (newQuantity === 0) {
      handleDeleteItem(book.id);
    } else {
      handleUpdateItemQuantity(book.id, newQuantity);
    }
  };

  const handleDelete = () => {
    handleDeleteItem(book.id);
  };

  return (
    <div className="button-container">
      {isAdded ? (
        <div className="quantity">
          <Button onClick={handleDecreaseQuantity} className="minus-button">
            <Icon IconComponent={FaMinus} />
          </Button>
          <p className="number">{quantity}</p>
          <Button onClick={handleIncreaseQuantity} className="plus-button">
            <Icon IconComponent={FaPlus} />
          </Button>
          <Button onClick={handleDelete} className="trash-button">
            <Icon IconComponent={CiTrash} />
          </Button>
        </div>
      ) : (
        <Button onClick={handleAddItemToCart} className="add-button">
          <Icon IconComponent={MdOutlineAddShoppingCart} />
        </Button>
      )}
    </div>
  );
};

export default ButtonsComponent;
