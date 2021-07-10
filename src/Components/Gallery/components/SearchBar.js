import React, { useState } from "react";
import ImageSearchOutlinedIcon from "@material-ui/icons/ImageSearchOutlined";

export default function SearchBar({ onSubmitQuery }) {
  const [query, setQuery] = useState("");

  const handleSubmitQuery = (event) => {
    event.preventDefault();
    onSubmitQuery(query);
  };

  const handleChangeInputSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <label className="labelSearchBar">
      <h2 className="titleFormSearch">Please enter the question:</h2>

      <form className="SearchForm" onSubmit={handleSubmitQuery}>
        <input
          className="SearchBar-input"
          type="text"
          autoComplete="off"
          value={query}
          onChange={handleChangeInputSearch}
          autoFocus
          placeholder="Search images and photos"
        />

        <button type="submit" className="SearchForm-button">
          <ImageSearchOutlinedIcon className="imageIconSearch" />
        </button>
      </form>
    </label>
  );
}
