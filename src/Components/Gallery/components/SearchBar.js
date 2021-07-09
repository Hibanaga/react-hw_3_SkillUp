import React, { useState } from "react";

export default function SearchBar({ onSubmitQuery }) {
  let [query, setQuery] = useState("");

  const handleSubmitQuery = (event) => {
    event.preventDefault();
    onSubmitQuery(query);
  };

  const handleChangeInputSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <label>
      <form className="SearchForm" onSubmit={handleSubmitQuery}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          value={query}
          onChange={handleChangeInputSearch}
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </label>
  );
}
