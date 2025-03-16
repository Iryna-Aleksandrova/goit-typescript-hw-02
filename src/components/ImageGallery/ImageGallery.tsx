import React from "react";
import { Image } from "../../App.types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

type ImageGalleryProps = {
  arr: Image[];
  openModal: (newItem: Image) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ arr, openModal }) => {
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
