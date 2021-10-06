import React from "react";
import PropTypes from "prop-types";
import styles from "./ContacatList.module.css";

const ContactList = ({ filtredContacts, deleteContact }) => {
  return (
    <ul className={styles.ul}>
      {filtredContacts().map((item) => (
        <li className={styles.li} key={item.id}>
          <span>{item.contactName}</span>
          <span>{item.contactNumber}</span>
          <button type="button" id={item.id} onClick={deleteContact}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filtredContacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ContactList;
