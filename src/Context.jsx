import { createContext, useContext, useState } from "react";
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
  //***MODAL***//

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    authors: "",
    description: "",
    title: "",
    amount: "",
    currencyCode: "",
    imageLinks: "",
  });
  const openModal = (
    authors,
    description,
    title,
    amount,
    currencyCode,
    imageLinks
  ) => {
    setModalContent({
      title: title,
      description: description,
      authors: authors,
      amount: amount,
      currencyCode: currencyCode,
      imageLinks: imageLinks,
    });
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
    setModalContent({
      authors: "",
      description: "",
      title: "",
      amount: "",
      currencyCode: "",
      imageLinks: "",
    });
    console.log(modalContent);
  };
  return (
    <AppContext.Provider
      value={{
        items,
        handleAddItem,
        handleUpdateItemQuantity,
        handleDeleteItem,
        handleDeleteAllItems,
        openModal,
        closeModal,
        modalContent,
        isOpenModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
