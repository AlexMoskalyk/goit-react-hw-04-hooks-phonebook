import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "../contactList/ContactList";
import Filter from "../filter/Filter";
import styles from "./Main.module.css";
import Form from "../form/Form";
import { load, save } from "../../services/localStorage";

const initialContacts = [
  { id: "id-1", contactName: "Rosie Simpson", contactNumber: "459-12-56" },
  { id: "id-2", contactName: "Hermione Kline", contactNumber: "443-89-12" },
  { id: "id-3", contactName: "Eden Clements", contactNumber: "645-17-79" },
  { id: "id-4", contactName: "Annie Copeland", contactNumber: "227-91-26" },
];

const Main = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const newContacts = load("contacts");
    if (newContacts) {
      setContacts(newContacts);
    }
  }, []);

  useEffect(() => {
    save("contacts", contacts);
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: uuidv4(), ...newContact },
    ]);
  };

  const isThereContact = (contactName) =>
    contacts.some(
      (contact) =>
        contact.contactName.toLowerCase() === contactName.toLowerCase()
    );

  const setFilterInState = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  const filtredContacts = () =>
    contacts.filter((contact) =>
      contact.contactName.toLowerCase().includes(filter.toLowerCase())
    );

  const deleteContact = (e) => {
    const id = e.target.id;
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.addContacts}>
          <h2>Add contact</h2>
          <Form addContact={addContact} isThereContact={isThereContact} />
        </div>
        <h2 className={styles.title}>Find contact</h2>

        <Filter setFilterInState={setFilterInState} filter={filter} />
        <h2>Contact list</h2>
        <ContactList
          filtredContacts={filtredContacts}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
};

export default Main;
