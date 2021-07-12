import React from "react";
import PropTypes from "prop-types";

const ContactCard = ({ id, name, number, ondeleteContactHandler }) => {
  let deleteSelectItemHandler = () => {
    ondeleteContactHandler(id);
  };

  return (
    <div className="contactCard">
      <h2 className="titleNameCard">{name}</h2>
      <span className="numberContactText">tel: {number}</span>

      <button
        className="js-btn-deleteContact"
        onClick={deleteSelectItemHandler}
      >
        &#x2715;
      </button>
    </div>
  );
};

ContactCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  ondeleteContactHandler: PropTypes.func.isRequired,
};

export default ContactCard;
