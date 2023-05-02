import React from "react";
import './searchbar.css'
const Searchbar = ({ textChanged }) => {
  return (
    <input
      type="search"
      className="br2 pa2"
      onChange={textChanged}
      placeholder="Input text here"
    />
  );
};

export default Searchbar;
