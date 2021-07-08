import React from "react";
import ContactCard from "./components/ContactCard";

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

export default ContactList;
