import configureStore from "redux-mock-store";
import { thunk as thunkMiddleware } from "redux-thunk";
import {
  addItem,
  deleteItem,
  deleteAllItems,
  updateItemQuantity,
} from "../../reducers/cartSlicer";

const middlewares = [thunkMiddleware];
const mockStore = configureStore(middlewares);

describe("Cart Thunks", () => {
  it("should add an item to the cart", () => {
    const store = mockStore({ cart: { items: [] } });
    const newItem = { id: 1, name: "New Item", quantity: 1 };

    store.dispatch(addItem(newItem));

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "cart/addItem",
      payload: newItem,
    });
  });

  it("should delete an item from the cart", () => {
    const store = mockStore({
      cart: {
        items: [{ id: 1, name: "Item 1", quantity: 1 }],
      },
    });
    const itemId = 1;

    store.dispatch(deleteItem(itemId));

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "cart/deleteItem",
      payload: itemId,
    });
  });

  it("should delete all items from the cart", () => {
    const store = mockStore({
      cart: {
        items: [{ id: 1, name: "Item 1", quantity: 1 }],
      },
    });

    store.dispatch(deleteAllItems());

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "cart/deleteAllItems",
    });
  });

  it("should update item quantity in the cart", () => {
    const store = mockStore({
      cart: {
        items: [{ id: 1, name: "Item 1", quantity: 1 }],
      },
    });
    const payload = { id: 1, quantity: 5 };

    store.dispatch(updateItemQuantity(payload));

    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "cart/updateItemQuantity",
      payload,
    });
  });
});
