import { useDispatch, useSelector } from "react-redux";
import {
  selectItems,
  deleteItem,
  deleteAllItems,
} from "../reducers/cartSlicer";
const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const handleDelete = (itemId) => {
    dispatch(deleteItem(itemId));
  };
  const handleDeleteAll = () => {
    dispatch(deleteAllItems());
  };
  const calculateTotalPrice = () => {
    const totalPrice = items.reduce((total, item) => {
      console.log(item.price);

      if (!isNaN(item.price)) {
        return total + item.price;
      } else if (typeof item.price === "string") {
        const price = parseFloat(item.price.replace(",", ""));
        console.log(item.price);
        return total + price;
      } else {
        console.log(total);
        return total;
      }
    }, 0);
    return totalPrice.toFixed(2);
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
              <div className="button-container">
                <p>
                  {" "}
                  {item.price} {item.currency}
                </p>
                <div className="quantity">
                  <button>+</button>
                  <p>
                    <span>0</span>
                  </p>
                  <button>-</button>
                </div>
                <button onClick={() => handleDelete(item.id)}>delete</button>
              </div>
            </div>
          ))}
        <button onClick={handleDeleteAll}>Delete All</button>
        <div className="cart-stats">
          <h3>Total Price : {calculateTotalPrice()} PLN</h3>
          <button> Buy</button>
          <button> Cancel</button>
          {/*Obecnie oba te przyciski nic nie robią.
           Przyszłościowo można im podpiąć odpowiednie funkcjonalności */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
