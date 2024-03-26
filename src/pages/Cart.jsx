import { useDispatch, useSelector } from "react-redux";
import {
  selectItems,
  deleteItem,
  deleteAllItems,
  updateItemQuantity,
} from "../reducers/cartSlicer";
import { useQuery } from "@tanstack/react-query";
import { CiTrash } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

import { FaMinus } from "react-icons/fa6";

const Cart = () => {
  const { isLoading, isError } = useQuery({
    enabled: false,
  });
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const handleDelete = (itemId) => {
    dispatch(deleteItem(itemId));
  };
  const handleDeleteAll = () => {
    dispatch(deleteAllItems());
  };
  const handleIncreaseQuantity = (itemId) => {
    const itemToUpdate = items.find((item) => item.id === itemId);
    if (itemToUpdate) {
      const newQuantity = itemToUpdate.quantity + 1;
      dispatch(updateItemQuantity({ id: itemId, quantity: newQuantity }));
    }
  };

  const handleDecreaseQuantity = (itemId) => {
    const itemToUpdate = items.find((item) => item.id === itemId);
    if (itemToUpdate && itemToUpdate.quantity > 1) {
      const newQuantity = itemToUpdate.quantity - 1;
      dispatch(updateItemQuantity({ id: itemId, quantity: newQuantity }));
    }
  };
  const calculateTotalPrice = () => {
    return items
      .reduce((total, item) => {
        const price = parseFloat(item.price);
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  if (items.length == 0) {
    return (
      <div className="cart-container">
        <div className="container">
          <h3>Your Cart is empty </h3>
        </div>
      </div>
    );
  }
  return (
    <div className="cart-container">
      <div className="container">
        {items &&
          items.map((item) => (
            <div className="single-book" key={item.id}>
              <div className="image-container-book">
                <img className="image-cart" src={item.image} />
              </div>
              <div className="content-container">
                <h1>{item.title}</h1>
                {item.authors && <p> ~{item.authors.join(", ")}</p>}
              </div>
              <div className="button-container cart">
                <p className="price">
                  {" "}
                  {item.price} {item.currency}
                </p>
                <div className="button-cart">
                  <div className="quantity">
                    <button onClick={() => handleDecreaseQuantity(item.id)}>
                      <FaMinus />
                    </button>
                    <p className="number">{item.quantity}</p>

                    <button onClick={() => handleIncreaseQuantity(item.id)}>
                      <FaPlus />
                    </button>
                  </div>
                  <button onClick={() => handleDelete(item.id)}>
                    <CiTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        <button className="delete-all" onClick={handleDeleteAll}>
          Clear Cart
        </button>
        <div className="cart-stats">
          <h3>Total Price : {calculateTotalPrice()} PLN</h3>
          <button> Buy</button>
          <button> Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
