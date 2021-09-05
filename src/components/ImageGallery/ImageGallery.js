import React from "react";
import PropTypes from "prop-types";
import "./ImageGallery.css";

function ImageGallery({ children }) {
  return <ul className="ImageGallery">{children}</ul>;
}

ImageGallery.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ImageGallery;
