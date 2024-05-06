import { useEffect, useState } from "react";

export const useGalleryImage = () => {
  const [cardArr, setCardArr] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [valueInput, setValueOnpit] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [showLoreMore, setShowLoreMore] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalValueImg, setModalValueImg] = useState(null);

  useEffect(() => {
    async function dataImages() {
      try {
        setError(false);
        setLoader(true);
        const data = await getImages(valueInput, pageNumber);
        if (pageNumber > 1) {
          let newArrData = [...cardArr, ...data];
          setCardArr(newArrData);
        } else {
          setCardArr(data);
        }
      } catch (error) {
        setShowLoreMore(false);
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    dataImages();
  }, [valueInput, pageNumber]);

  const onSubmit = (event) => {
    setPageNumber(1);
    setCardArr([]);
    setValueOnpit(event);
    setShowLoreMore(true);
  };

  const onClick = (newpage) => {
    setPageNumber(newpage);
  };

  const openModal = (event) => {
    setModalIsOpen(event.bool);
    setModalValueImg(event);
  };

  return;
};
