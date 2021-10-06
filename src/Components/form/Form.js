import React, { useState } from "react";
import styles from "./Form.module.css";

const initialState = {
  contactName: "",
  contactNumber: "",
};

const Form = ({ isThereContact, addContact }) => {
  const [form, setForm] = useState(initialState);
  // const [contactName, setContactName] = useState('');
  // const [contactNumber, setContactNumber] = useState('');

  const onHandleChange = (e) => {
    const { value, name } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setForm(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.contactName);

    if (isThereContact(form.contactName)) {
      return alert(`${form.contactName} has been already in contact list`);
    }
    addContact(form);
    reset();
  };

  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            value={form.contactName}
            onChange={onHandleChange}
            type="text"
            name="contactName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Telefon
          <input
            value={form.contactNumber}
            onChange={onHandleChange}
            type="tel"
            name="contactNumber"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button className={styles.formBtn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default Form;

//
