import React from "react";
import styles from "./form/Form.module.css";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      autoComplete="off"
      type="text"
      name="query"
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
      placeholder="Search Pokemon..."
      className={`${styles["form-control"]} ${styles["custom__seachBox"]}`}
    />
  );
};

export default SearchBox;
