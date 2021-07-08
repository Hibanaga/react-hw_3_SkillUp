import React, { useState } from "react";
import ContactForm from "./contactForm";
import ContactList from "./ContactList";

import "./phonebook.scss";

const PhoneBook = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const handleSubmitContact = (newContact) => {
    setContacts((contacts) => [...contacts, newContact]);
    // localStorage.setItem("listContacts", contacts);
  };

  const deleteContactHandler = (itemID) => {
    setContacts(contacts.filter((item) => item.id !== itemID));
  };

  return (
    <div className="phonebookContainer">
      <ContactForm onHandleSubmitContact={handleSubmitContact} />

      <div className="wrapperContactsList">
        <h2 className="titleContactList">Contact list</h2>
        {contacts.length > 0 ? (
          <ContactList
            contacts={contacts}
            ondeleteContactHandler={deleteContactHandler}
          />
        ) : (
          <h2 className="titleNoContacts">
            Sorry but you doesn't have any contacts
          </h2>
        )}
      </div>
    </div>
  );
};

export default PhoneBook;
