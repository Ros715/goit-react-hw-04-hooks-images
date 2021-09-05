import React from "react";
import PropTypes from "prop-types";
import "./ImageGalleryItem.css";

function ImageGalleryItem({ photo, onClick }) {
  return (
    <li className="ImageGalleryItem">
      <img
        onClick={() => onClick(photo.largeImageURL)}
        src={photo.webformatURL}
        alt=""
        className="ImageGalleryItem-image"
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  photo: PropTypes.object.isRequired,
};

export default ImageGalleryItem;
