import React, { useState } from "react";
import Searchbar from "./components/Searchbar/Searchbar.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.js";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem.js";
import Button from "./components/Button/Button.js";
import Modal from "./components/Modal/Modal.js";
import apiService from "./apiService.js";
import "./App.css";
//import { v4 as uuidv4 } from "uuid";
import Loader from "react-loader-spinner";

function App() {
  const [loadInProggress, setLoadInProggress] = useState(false);
  const [enableLoadMore, setEnableLoadMore] = useState(false);
  const [enableModal, setEnableModal] = useState(false);
  const [photosList, setPhotosList] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  //const [perPage, setPerPage] = useState(12);
  const perPage = 12; /*never changed, not element of state*/
  const [largeURL, setLargeURL] = useState("");

  const loadPhotos = (parQuery, parPage) => {
    setLoadInProggress(true);
    apiService(parQuery, parPage, perPage).then((apiOutput) => {
      setQuery(parQuery);
      setPage(parPage);
      setEnableLoadMore(apiOutput.hits.length === perPage);
      setLoadInProggress(false);
      if (parPage === 1) {
        setPhotosList(apiOutput.hits);
      } else {
        setPhotosList(photosList.concat(apiOutput.hits));
      }

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    });
  };

  const onNewRequest = (query) => {
    //setPhotosList([]);
    loadPhotos(query, 1);
  };

  const onLoadMore = () => {
    loadPhotos(query, page + 1);
  };

  const closeModal = () => {
    setEnableModal(false);
  };

  return (
    <div>
      <Searchbar onSubmit={onNewRequest} />
      <ImageGallery
        photosList={photosList}
        children={photosList.map((photo) => {
          return (
            <ImageGalleryItem
              photo={photo}
              key={photo.id}
              onClick={(url) => {
                setEnableModal(true);
                setLargeURL(url);
              }}
            />
          );
        })}
      />
      {loadInProggress && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      {enableLoadMore && <Button onClick={onLoadMore} />}
      {enableModal && <Modal url={largeURL} onClose={closeModal} />}
    </div>
  );
}

export default App;
