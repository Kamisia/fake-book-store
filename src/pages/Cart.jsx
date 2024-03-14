import { useEffect, useState } from "react";
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
    console.log("klik");
  };
  const handleDeleteAll = () => {
    dispatch(deleteAllItems);
  };
  return (
    <div className="cart-container">
      <h1>Cart</h1>

      <div className="items-container">
        {items &&
          items.map((item) => (
            <div className="single-item" key={item.id}>
              <h1>{item.title}</h1>
              {item.authors && <p> ~{item.authors.join(", ")}</p>}

              <button onClick={() => handleDelete(item.id)}>delete</button>
            </div>
          ))}

        <button onClick={handleDeleteAll}>Delete All</button>
      </div>
    </div>
  );
};

export default Cart;
