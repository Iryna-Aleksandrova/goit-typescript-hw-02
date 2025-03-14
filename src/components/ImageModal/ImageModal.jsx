import Modal from "react-modal";
Modal.setAppElement("#root");
import s from "./ImageModal.module.css";

const ImageModal = ({ image, closeModal, isOpen }) => {
  const {
    alt_description,
    likes,
    user: { name },
    urls: { regular },
  } = image;
  const handleClick = (e) => {
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
            src={regular}
            alt={alt_description}
            width="960"
            height="460"
          />
          <ul className={s.wrapper}>
            <li className={s.item}>
              {!alt_description ? (
                "Images"
              ) : (
                <p className={s.text}>{alt_description}</p>
              )}
            </li>
            <li className={s.item}>
              <p className={s.text}>author: {name}</p>
            </li>
            <li className={s.item}>
              <p className={s.text}>likes: {likes}</p>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
