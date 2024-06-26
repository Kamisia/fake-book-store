import React from "react";
import { useGlobalContext } from "../../Context";
import { IoMdClose } from "react-icons/io";
import Button from "../atoms/Button";
import ButtonsComponent from "../molecules/ButtonsComponent";

const Modal = ({ book }) => {
  const { isOpenModal, closeModal, modalContent } = useGlobalContext();
  const { authors, description, title, amount, currencyCode, imageLinks } =
    modalContent;

  return isOpenModal ? (
    <div className="modal">
      <div className="modal-container">
        <div className="btn">
          <Button onClick={closeModal}>
            <IoMdClose />
          </Button>
        </div>
        <div className="modal-content">
          <div
            className="modal-img"
            style={{
              backgroundImage: `url(${imageLinks})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="dis">
            <div className="description-content">
              <h1>{title}</h1>
              <p className="author">~{authors}</p>
            </div>
            <div className="description">
              <p>{description}</p>
            </div>
            <div className="price">
              <p>
                {amount} {currencyCode}
              </p>
              <div className="button-container">
                {book && <ButtonsComponent book={book} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
