import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Modal.css";

function Modal({ url, onClose }) {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      //console.log("code", e.code, "key", e.key, "keyCode", e.keyCode);
      if (e.key === "Escape") {
        onClose();
      }
    });
  }, [onClose]);

  return (
    <div className="Overlay" onClick={onClose}>
      <div className="Modal">
        <img src={url} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
