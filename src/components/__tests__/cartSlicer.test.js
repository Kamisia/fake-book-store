import {
  setItems,
  addItem,
  deleteItem,
  deleteAllItems,
  updateItemQuantity,
  addSearchResults,
} from "../../reducers/cartSlicer";

describe("Cart Actions", () => {
  it("should create an action to set items", () => {
    const items = [{ id: 1, name: "Item 1", quantity: 2 }];
    const expectedAction = {
      type: "cart/setItems",
      payload: items,
    };
    expect(setItems(items)).toEqual(expectedAction);
  });

  it("should create an action to add an item", () => {
    const newItem = { id: 2, name: "New Item", quantity: 1 };
    const expectedAction = {
      type: "cart/addItem",
      payload: newItem,
    };
    expect(addItem(newItem)).toEqual(expectedAction);
  });

  it("should create an action to delete an item", () => {
    const itemId = 2;
    const expectedAction = {
      type: "cart/deleteItem",
      payload: itemId,
    };
    expect(deleteItem(itemId)).toEqual(expectedAction);
  });

  it("should create an action to delete all items", () => {
    const expectedAction = {
      type: "cart/deleteAllItems",
    };
    expect(deleteAllItems()).toEqual(expectedAction);
  });

  it("should create an action to update item quantity", () => {
    const payload = { id: 1, quantity: 5 };
    const expectedAction = {
      type: "cart/updateItemQuantity",
      payload,
    };
    expect(updateItemQuantity(payload)).toEqual(expectedAction);
  });

  it("should create an action to add search results", () => {
    const searchResults = [{ id: 1, name: "Search Result" }];
    const expectedAction = {
      type: "cart/addSearchResults",
      payload: searchResults,
    };
    expect(addSearchResults(searchResults)).toEqual(expectedAction);
  });
});
