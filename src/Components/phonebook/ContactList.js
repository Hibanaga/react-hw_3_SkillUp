import React from "react";
import ContactCard from "./components/ContactCard";
import PropTypes from "prop-types";

const ContactList = ({ contacts, ondeleteContactHandler }) => {
  return (
    <article>
      {contacts.map(({ id, name, number }) => (
        <ContactCard
          key={id}
          id={id}
          name={name}
          number={number}
          ondeleteContactHandler={ondeleteContactHandler}
        />
      ))}
    </article>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  ondeleteContactHandler: PropTypes.func.isRequired,
};

export default ContactList;
