import React from "react";

const inputValidateTelNumber = ({ number, onHandleChangeInputs }) => {
  return (
    <aside>
      <label htmlFor="" className="labelInputFormContact">
        <span className="titleInputContact">number:</span>
        <input
          type="tel"
          name="number"
          value={number}
          onInput={onHandleChangeInputs}
          className={
            number.length > 12 ? "inputForm inputFormBad" : "inputForm"
          }
          placeholder="please enter the nubmer..."
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
      </label>
    </aside>
  );
};

export default inputValidateTelNumber;
