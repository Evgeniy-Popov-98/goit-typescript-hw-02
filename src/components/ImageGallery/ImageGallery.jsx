import ImageCard from "../ImageCard/ImageCard";
import clsx from "clsx";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ cardImages, openModal }) => {
  return (
    <ul className={clsx(style.galleryList)}>
      {Array.isArray(cardImages) &&
        cardImages.map((item) => {
          return (
            <ImageCard key={item.id} dataImages={item} openModal={openModal} />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
