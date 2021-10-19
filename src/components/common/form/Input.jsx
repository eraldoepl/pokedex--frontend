import React from "react";
import styles from "./Form.module.css";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className={`${styles["input-container"]}`}>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        className={`${styles["form-control"]}`}
        name={name}
        id={name}
        {...rest}
      />
      {error && (
        <div className={`${styles.alert} ${styles["alert-danger"]}`}>
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
