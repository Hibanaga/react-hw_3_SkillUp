import React, { useState, useEffect } from "react";
import InputValidateName from "./components/inputValidateName";
import InputValidateTelNumber from "./components/inputValidateTelNumber";
import { v4 as uuidv4 } from "uuid";

const ContactForm = ({ onHandleSubmitContact, contacts }) => {
  const [nameContact, setNameContact] = useState("");
  const [numberContact, setNumberContact] = useState("");

  useEffect(() => {
    let local = localStorage.getItem("itemsLocal");

    if (local) {
      let { nameContact, numberContact } = JSON.parse(local);
      setNameContact(nameContact);
      setNumberContact(numberContact);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "itemsLocal",
      JSON.stringify({ nameContact, numberContact })
    );
  }, [nameContact, numberContact]);

  const handleChangeInputs = (event) => {
    let { name, value } = event.target;

    if (name === "name") {
      setNameContact(value);
    }
    if (name === "number") {
      setNumberContact(value);
    }
  };

  const handleSubmitNewContact = (event) => {
    event.preventDefault();

    if (!isUniqInputName()) {
      onHandleSubmitContact({
        id: uuidv4(),
        name: nameContact,
        number: numberContact,
      });
      setNameContact("");
      setNumberContact("");
    }
  };

  const isUniqInputName = () => {
    return contacts.some(({ name }) => name === nameContact);
  };

  return (
    <aside>
      <h2 className="subtitleFormAddContact">Form for adding contacts</h2>

      <div className="colorValidateInfo">
        <h3 className="subtitleColorsScheme">Color scheme of :focus inputs</h3>

        <div className="itemValidateColor">
          <div className="colorWrapper colorGood"></div>
          <span className="descriptionColorInfo"> - all good</span>
        </div>

        <div className="itemValidateColor">
          <div className="colorWrapper colorMedium"></div>
          <span className="descriptionColorInfo"> - is not uniq name</span>
        </div>

        <div className="itemValidateColor">
          <div className="colorWrapper colorBad"></div>
          <span className="descriptionColorInfo"> - bad input data</span>
        </div>
      </div>

      <form action="" onSubmit={handleSubmitNewContact}>
        <InputValidateName
          name={nameContact}
          onHandleChangeInputs={handleChangeInputs}
          onCheckUniqNameInput={isUniqInputName}
        />

        <InputValidateTelNumber
          number={numberContact}
          onHandleChangeInputs={handleChangeInputs}
        />

        <button type="submit" className="js-btn-addContact">
          add to contacts
        </button>
      </form>
    </aside>
  );
};

export default ContactForm;
