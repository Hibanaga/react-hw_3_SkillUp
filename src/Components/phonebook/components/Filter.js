import React from "react";
import PropTypes from "prop-types";

function Filter({ filter, onFilterContactsByNameHandler }) {
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

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterContactsByNameHandler: PropTypes.func.isRequired,
};

export default Filter;
