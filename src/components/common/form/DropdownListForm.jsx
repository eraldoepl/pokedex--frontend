import React from "react";
import styles from "./Form.module.css";

const DropdownListForm = ({ options, name, label, error, ...rest }) => {
  return (
    <div>
      <label htmlFor={name} className={`${styles["form-label"]}`}>
        {label}
      </label>
      <select
        name={name}
        id={name}
        {...rest}
        className={`${styles["form-select"]}`}
      >
        <option defaultValue>Select Genre</option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && (
        <div className={`${styles.alert} ${styles["alert-danger"]}`}>
          {error}
        </div>
      )}
    </div>
  );
};

export default DropdownListForm;
