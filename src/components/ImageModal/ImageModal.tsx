import Modal from "react-modal";
Modal.setAppElement("#root");
import { Image } from "../../App.types";
import React, { MouseEvent } from "react";
import s from "./ImageModal.module.css";

type ImageModalProps = {
  image: Image | null;
  closeModal: () => void;
  isOpen: boolean;
};

const ImageModal: React.FC<ImageModalProps> = ({
  image,
  closeModal,
  isOpen,
}) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <div className={s.overlay} onClick={handleClick}>
        <div className={s.modal}>
          <img
            className={s.img}
            src={image?.urls.regular}
            alt={image?.alt_description}
            width="960"
            height="460"
          />
          <ul className={s.wrapper}>
            <li className={s.item}>
              {!image?.alt_description ? (
                "Images"
              ) : (
                <p className={s.text}>{image?.alt_description}</p>
              )}
            </li>
            <li className={s.item}>
              <p className={s.text}>author: {image?.user.name}</p>
            </li>
            <li className={s.item}>
              <p className={s.text}>likes: {image?.likes}</p>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
