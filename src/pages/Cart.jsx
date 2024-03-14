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
    dispatch(deleteAllItems);
  };
  return (
    <div className="cart-container">
      <div className="container">
        {items &&
          items.map((item) => (
            <div className="single-book" key={item.id}>
              <div className="image-container-book">
                <img src={item.image} />
              </div>
              <div className="content-container">
                <h1>{item.title}</h1>
                {item.authors && <p> ~{item.authors.join(", ")}</p>}
              </div>
              <div className="button-container">
                <button onClick={() => handleDelete(item.id)}>delete</button>
              </div>
            </div>
          ))}

        <button onClick={handleDeleteAll}>Delete All</button>
      </div>
    </div>
  );
};

export default Cart;
