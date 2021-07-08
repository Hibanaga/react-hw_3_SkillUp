import React from "react";

const ContactCard = ({ id, name, number, ondeleteContactHandler }) => {
  let deleteSelectItemHandler = () => {
    ondeleteContactHandler(id);
  };

  return (
    <div className="contactCard">
      <h2 className="titleNameCard">{name}</h2>
      <span className="numberContactText">{number}</span>

      <button
        className="js-btn-deleteContact"
        onClick={deleteSelectItemHandler}
      >
        &#x2715;
      </button>
    </div>
  );
};

export default ContactCard;
