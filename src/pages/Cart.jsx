import { useSelector } from "react-redux";
import { selectItems } from "../reducers/cartReducer";
const Cart = () => {
  const items = useSelector(selectItems);

  return (
    <div>
      Cart
      <ul>
        {data.map((item) => (
          <li key={items.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
