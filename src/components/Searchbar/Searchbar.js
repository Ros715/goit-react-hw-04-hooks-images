import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Searchbar.css";

function Searchbar({ onSubmit }) {
  const [name, setName] = useState("");

  const onSubmit1 = (e) => {
    e.preventDefault();
    //console.log(this.state.name);
    onSubmit(name);
  };

  return (
    <header className="Searchbar" onSubmit={onSubmit1}>
      <form className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          onChange={(e) => {
            //console.log("name", e.currentTarget.value);
            setName(e.currentTarget.value);
          }}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
