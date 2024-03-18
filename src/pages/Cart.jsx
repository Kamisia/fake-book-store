import { useDispatch, useSelector } from "react-redux";
import {
  selectItems,
  deleteItem,
  deleteAllItems,
} from "../reducers/cartSlicer";
import { CiTrash } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

import { FaMinus } from "react-icons/fa6";

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
              <div className="button-container cart">
                <p className="price">
                  {" "}
                  {item.price} {item.currency}
                </p>
                <div className="button-cart">
                  <div className="quantity">
                    <button>
                      <FaPlus />
                    </button>
                    <p className="number">1</p>
                    <button>
                      <FaMinus />
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
          {/*Obecnie oba te przyciski nic nie robią.
           Przyszłościowo można im podpiąć odpowiednie funkcjonalności */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
