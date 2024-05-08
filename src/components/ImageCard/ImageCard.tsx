import { FC } from "react";
import { ImageType, CardImageType } from "../types";

import clsx from "clsx";
import style from "./ImageCard.module.css";

interface ImageProps {
  dataImages: ImageType;
  openModal: (object: CardImageType) => void;
}

const ImageCard: FC<ImageProps> = ({ dataImages, openModal }) => {
  const handleClick = () => {
    const object = {
      bool: true,
      src: dataImages.urls.regular,
      alt: dataImages.alt_description,
    };
    openModal(object);
  };
  return (
    <li className={clsx(style.galleryItem)}>
      <div>
        <img
          className={clsx(style.galleryImage)}
          src={dataImages.urls.small}
          alt={dataImages.alt_description}
          onClick={handleClick}
        />
        <ul className={clsx(style.galleryList)}>
          <li className={clsx(style.listItem)}>
            Location: {dataImages.user.location}
          </li>
          <li className={clsx(style.listItem)}>Likes: {dataImages.likes}</li>
        </ul>
      </div>
    </li>
  );
};

export default ImageCard;
