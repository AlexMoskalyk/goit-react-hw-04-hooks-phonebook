import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ setFilterInState, filter }) => {
  return (
    <label className={styles.label}>
      Search
      <input
        onChange={setFilterInState}
        value={filter}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  );
};

Filter.propTypes = {
  setFilterInState: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
export default Filter;
