import React from "react";
import { useGlobalContext } from "../../Context";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import ButtonsComponent from "../molecules/ButtonsComponent";

const CartComponent = () => {
  const { items, handleDeleteAllItems } = useGlobalContext();

  const handleBuy = () => {
    toast.success("You can't buy anything here. This is FakeBookStore", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleCancel = () => {
    toast.error("You have canceled your order", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const calculateTotalPrice = () => {
    return items
      .reduce((total, item) => {
        const price = parseFloat(item.price);
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="cart-container">
      {items.length === 0 ? (
        <div className="empty-cart-message">
          <h3>Your Cart is empty</h3>
        </div>
      ) : (
        <>
          {items.map((item) => (
            <div className="single-book" key={item.id}>
              <div className="description">
                <div className="image-container-book">
                  <Image
                    className="image-cart"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="content-container">
                  <h1>{item.title}</h1>
                  {item.authors && Array.isArray(item.authors) ? (
                    <p>~{item.authors.join(", ")}</p>
                  ) : (
                    <p>~Unknown author</p>
                  )}
                </div>
              </div>

              <div className="button-container">
                <ButtonsComponent book={item} />
              </div>
              <div className="price">
                <p>
                  {item.price} {item.currency}
                </p>
              </div>
            </div>
          ))}
          <Button className="delete-all" onClick={handleDeleteAllItems}>
            Clear Cart
          </Button>
          <div className="cart-stats">
            <h3>Total Price: {calculateTotalPrice()} PLN</h3>
            <div className="button-stats">
              <Button className="buy-btn" onClick={handleBuy}>
                Buy
              </Button>
              <NavLink to={`${import.meta.env.BASE_URL}`}>
                <Button onClick={handleCancel}>Cancel</Button>
              </NavLink>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartComponent;
