import React from "react";
import search from "../../icon/search.svg"

import "./search.css";

const Search = () => {
  return (
    <div className="search-box">
      <a href="#" target="blank">
      <img src={search} alt="search"/>
      </a>
      <input placeholder="Search..."></input>
    </div>
  );
};

export default Search;
