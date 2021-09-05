import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

function Button({ onClick }) {
  return (
    <div>
      <button type="button" className="Button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
