import React, { useState } from "react";
import InputValidateName from "./components/inputValidateName";
import InputValidateTelNumber from "./components/inputValidateTelNumber";
import { v4 as uuidv4 } from "uuid";

const ContactForm = ({ onHandleSubmitContact }) => {
  const [nameContact, setNameContact] = useState("");
  const [numberContact, setNumberContact] = useState("");

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
    onHandleSubmitContact({
      id: uuidv4(),
      name: nameContact,
      contact: numberContact,
    });
    setNameContact("");
    setNumberContact("");
  };

  return (
    <aside>
      <h2 className="subtitleFormAddContact">Form for adding contacts</h2>

      <form action="" onSubmit={handleSubmitNewContact}>
        <InputValidateName
          name={nameContact}
          onHandleChangeInputs={handleChangeInputs}
        />

        <InputValidateTelNumber
          number={numberContact}
          onHandleChangeInputs={handleChangeInputs}
        />

        <button type="submit">add to contacts</button>
      </form>
    </aside>
  );
};

export default ContactForm;
