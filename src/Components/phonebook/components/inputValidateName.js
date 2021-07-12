import React, { useState } from "react";
import PropTypes from "prop-types";

const InputValidateName = ({
  name,
  onHandleChangeInputs,
  onCheckUniqNameInput,
}) => {
  const [isTrue, setIsTrue] = useState(true);

  let validateInputName = (event) => {
    let { value, pattern } = event.target;
    if (value.length === 0) {
      setIsTrue(true);
    } else {
      setIsTrue(Boolean(value.match(pattern)));
    }

    onHandleChangeInputs(event);
  };

  return (
    <aside>
      <label htmlFor="" className="labelInputFormContact">
        <span className="titleInputContact">name:</span>
        <input
          type="text"
          name="name"
          value={name}
          onInput={validateInputName}
          className={
            !isTrue
              ? "inputForm inputFormBad"
              : onCheckUniqNameInput()
              ? "inputForm inputFormNotUniq"
              : "inputForm"
          }
          placeholder="please enter the name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    </aside>
  );
};

InputValidateName.propTypes = {
  name: PropTypes.string.isRequired,
  onHandleChangeInputs: PropTypes.func.isRequired,
  onCheckUniqNameInput: PropTypes.func.isRequired,
};

export default InputValidateName;
