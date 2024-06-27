import {
  selectItems,
  selectSearchResults,
  selectItemCount,
} from "../../reducers/cartSlicer";

describe("Cart Selectors", () => {
  it("selectItems should return items from the cart", () => {
    const state = {
      cart: {
        items: [{ id: 1, name: "Item 1", quantity: 2 }],
      },
    };
    expect(selectItems(state)).toEqual([
      { id: 1, name: "Item 1", quantity: 2 },
    ]);
  });

  it("selectSearchResults should return searchResults from the cart", () => {
    const state = {
      cart: {
        searchResults: [{ id: 1, name: "Search Result" }],
      },
    };
    expect(selectSearchResults(state)).toEqual([
      { id: 1, name: "Search Result" },
    ]);
  });

  it("selectItemCount should return total quantity of items in the cart", () => {
    const state = {
      cart: {
        items: [{ id: 1, name: "Item 1", quantity: 2 }],
      },
    };
    expect(selectItemCount(state)).toEqual(2);
  });
});
