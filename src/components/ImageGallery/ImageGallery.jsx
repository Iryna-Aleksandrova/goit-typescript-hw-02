import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ arr, openModal }) => {
  return (
    <ul className={s.gallery}>
      {arr.map((item) => (
        <li className={s.item} key={item.id}>
          <ImageCard openModal={openModal} item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
