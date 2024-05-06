import { FC } from "react";
import Modal from "react-modal";
Modal.setAppElement(document.getElementById("root"));

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface ImageProps {
  cardImages: {
    src: string;
    alt: string;
  };
  closeModal: () => void;
  modalIsOpen: boolean;
}

const ImageModal: FC<ImageProps> = ({
  modalIsOpen,
  closeModal,
  cardImages,
}) => {
  return (
    <div id="modalWindow">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={cardImages.src} alt={cardImages.alt} />
      </Modal>
    </div>
  );
};

export default ImageModal;
