import { useContext, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectItems,
  addItem,
  updateItemQuantity,
  deleteItem,
  deleteAllItems,
} from "./reducers/cartSlicer";
const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  const handleAddItem = (newItem) => {
    dispatch(addItem(newItem));
  };

  const handleUpdateItemQuantity = (id, quantity) => {
    dispatch(updateItemQuantity({ id, quantity }));
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  const handleDeleteAllItems = () => {
    dispatch(deleteAllItems());
  };
  return (
    <AppContext.Provider
      value={{
        items,
        handleAddItem,
        handleUpdateItemQuantity,
        handleDeleteItem,
        handleDeleteAllItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
