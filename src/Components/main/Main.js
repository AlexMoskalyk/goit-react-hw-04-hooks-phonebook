import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "../contactList/ContactList";
import Filter from "../filter/Filter";
import styles from "./Main.module.css";
import Form from "../form/Form";
import { load, save } from "../../services/localStorage";

const initialState = {
  contacts: [
    { id: "id-1", contactName: "Rosie Simpson", contactNumber: "459-12-56" },
    { id: "id-2", contactName: "Hermione Kline", contactNumber: "443-89-12" },
    { id: "id-3", contactName: "Eden Clements", contactNumber: "645-17-79" },
    { id: "id-4", contactName: "Annie Copeland", contactNumber: "227-91-26" },
  ],

  filter: "",
};

const Main = () => {
  const [main, setMain] = useState(initialState);

  useEffect(() => {
    const newContact = load("contacts");
    if (newContact) {
      setMain((prev) => ({ ...prev, contacts: newContact }));
    }
  }, []);

  useEffect(() => {
    save("contacts", main.contacts);
  }, [main.contacts]);

  // componentDidMount() {
  //   const newContact = load("contacts");
  //   if (newContact) {
  //     this.setState({ contacts: newContact });
  //   }
  // }

  // componentDidUpdate() {
  //   const { contacts } = this.state;

  //   save("contacts", contacts);
  // }

  const addContact = (newContact) => {
    setMain((prevState) => ({
      ...prevState,
      contacts: [
        ...prevState.contacts,
        {
          id: uuidv4(),
          ...newContact,
        },
      ],
    }));
  };

  const isThereContact = (contactName) =>
    console.log(
      main.contacts.some((contact) => contact.contactName === contactName)
    );

  const setFilterInState = (e) => {
    const { value } = e.target;
    setMain((prev) => ({ ...prev, filter: value }));
  };

  const filtredContacts = () =>
    main.contacts.filter((contact) =>
      contact.contactName.toLowerCase().includes(main.filter.toLowerCase())
    );
  const deleteContact = (e) => {
    const id = e.target.id;
    setMain((prevState) => ({
      ...prevState,
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.addContacts}>
          <h2>Add contact</h2>
          <Form addContact={addContact} isThereContact={isThereContact} />
        </div>
        <h2 className={styles.title}>Find contact</h2>

        <Filter setFilterInState={setFilterInState} filter={main.filter} />
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
