import { useEffect, useState } from "react";
import "./App.css";

import { getImages } from "./services/API";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import MoreLoader from "./components/MoreLoader/MoreLoader";

function App() {
  const [cardArr, setCardArr] = useState([]);
  const [loader, setLoader] = useState(false);
  const [moreLoader, setMoreLoader] = useState(false);
  const [error, setError] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [showLoreMore, setShowLoreMore] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalValueImg, setModalValueImg] = useState(null);

  useEffect(() => {
    if (!valueInput) return;

    async function dataImages() {
      setError(false);
      try {
        const data = await getImages(valueInput, pageNumber);
        setCardArr((prevState) => [...prevState, ...data]);
        setShowLoreMore(true);
      } catch (error) {
        setShowLoreMore(false);
        setError(true);
      } finally {
        setLoader(false);
        setMoreLoader(false);
      }
    }
    dataImages();
  }, [valueInput, pageNumber]);

  const onSubmit = (event) => {
    setLoader(true);
    setCardArr([]);
    setPageNumber(1);
    setValueInput(event);
  };

  const onClick = () => {
    setMoreLoader(true);
    setPageNumber(pageNumber + 1);
  };

  const openModal = (event) => {
    setModalIsOpen(event.bool);
    setModalValueImg(event);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {loader && <Loader />}
      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery cardImages={cardArr} openModal={openModal} />
      )}
      {moreLoader && <MoreLoader />}
      {showLoreMore && (
        <LoadMoreBtn onClick={onClick} pageNumber={pageNumber} />
      )}
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          openModal={openModal}
          cardImages={modalValueImg}
        />
      )}
    </>
  );
}

export default App;
