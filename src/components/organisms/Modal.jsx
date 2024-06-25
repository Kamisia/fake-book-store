import React from "react";
import { useGlobalContext } from "../../Context";
import { IoMdClose } from "react-icons/io";
import Button from "../atoms/Button";
import Image from "../atoms/Image";

const Modal = () => {
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
          <div className="description-content">
            <h1>{title}</h1>
            <p className="author">~{authors}</p>
            <div>
              <p>{description}</p>
            </div>
            <div className="price">
              <p>
                {amount} {currencyCode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
