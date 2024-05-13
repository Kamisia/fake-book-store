import { CiTrash } from "react-icons/ci";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useGlobalContext } from "../Context";

const CartComponent = () => {
  const {
    items,
    handleUpdateItemQuantity,
    handleDeleteItem,
    handleDeleteAllItems,
  } = useGlobalContext();

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
                  <img
                    className="image-cart"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="content-container">
                  <h1>{item.title}</h1>
                  {item.authors && <p> ~{item.authors.join(", ")}</p>}
                </div>
              </div>

              <div className="button-container">
                <div className="quantity">
                  <button
                    onClick={() => {
                      const newQuantity = item.quantity - 1;
                      if (newQuantity <= 0) {
                        handleDeleteItem(item.id);
                      } else {
                        handleUpdateItemQuantity(item.id, newQuantity);
                      }
                    }}
                  >
                    <FaMinus />
                  </button>
                  <p className="number">{item.quantity}</p>
                  <button
                    onClick={() =>
                      handleUpdateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    <FaPlus />
                  </button>
                  <button
                    className="trash"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <CiTrash />
                  </button>
                </div>
              </div>
              <div className="price">
                <p>
                  {item.price} {item.currency}
                </p>
              </div>
            </div>
          ))}
          <button className="delete-all" onClick={handleDeleteAllItems}>
            Clear Cart
          </button>
          <div className="cart-stats">
            <h3>Total Price: {calculateTotalPrice()} PLN</h3>
            <div className="button-stats">
              <button className="buy-btn">Buy</button>
              <button>Cancel</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartComponent;
