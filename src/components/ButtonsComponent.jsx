import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CiTrash } from "react-icons/ci";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useGlobalContext } from "../Context";

const ButtonsComponent = ({ book }) => {
  const { items, handleAddItem, handleUpdateItemQuantity, handleDeleteItem } =
    useGlobalContext();
  if (!Array.isArray(items)) {
    return null;
  }
  const foundItem = items.find((item) => item.id === book.id);
  const isAdded = !!foundItem;
  const quantity = foundItem ? foundItem.quantity : 0;

  const handleAddItemToCart = () => {
    const newItem = {
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      image: book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : "defaultBookImageUrl",
      price: book.saleInfo.listPrice?.amount || 0,
      currency: book.saleInfo.listPrice?.currencyCode || "USD",
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
        <button className="none-clicked" onClick={handleAddItemToCart}>
          <MdOutlineAddShoppingCart />
        </button>
      )}
    </div>
  );
};

export default ButtonsComponent;
