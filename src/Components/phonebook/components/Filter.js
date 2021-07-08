import React from "react";

export default function Filter({ filter, onFilterContactsByNameHandler }) {
  return (
    <div className="wrapperInputFilter">
      <label htmlFor="" className="labelInputFormContact">
        <span className="titleInputContact">search name:</span>
        <input
          type="text"
          value={filter}
          onChange={onFilterContactsByNameHandler}
          className="js-inputFilter"
        />
      </label>
    </div>
  );
}
