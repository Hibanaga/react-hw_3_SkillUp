import React, { useState, useMemo, useEffect } from "react";
import Filter from "./components/Filter";
import ContactForm from "./contactForm";
import ContactList from "./ContactList";
import "./phonebook.scss";

const PhoneBook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const handleSubmitContact = (newContact) => {
    setContacts((contacts) => [...contacts, newContact]);
  };

  const deleteContactHandler = (itemID) => {
    setContacts(contacts.filter((item) => item.id !== itemID));
  };

  const filterContactsByNameHandler = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem("contactsList")) {
      setContacts(JSON.parse(localStorage.getItem("contactsList")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contactsList", JSON.stringify(contacts));
  }, [contacts]);

  let filtredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <div className="phonebookContainer">
      <ContactForm
        onHandleSubmitContact={handleSubmitContact}
        contacts={contacts}
      />

      <div className="wrapperContactsList">
        <h2 className="titleContactList">Contact list</h2>

        <Filter
          filter={filter}
          onFilterContactsByNameHandler={filterContactsByNameHandler}
        />

        {contacts.length > 0 ? (
          <>
            <ContactList
              contacts={filtredContacts}
              ondeleteContactHandler={deleteContactHandler}
            />
          </>
        ) : (
          <h2 className="titleNoContacts">
            Sorry but you doesn't have any contacts or you doesn't have contacts
            with this name
          </h2>
        )}
      </div>
    </div>
  );
};

export default PhoneBook;
