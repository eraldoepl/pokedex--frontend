import React from "react";
import styles from "./form/Form.module.css";

const SelectList = ({ options, onChange, value }) => {
  return (
    <div>
      <select
        name="filterType"
        className={`${styles["form-select"]} ${styles["custom__select"]}`}
        onChange={(e) => onChange(e.currentTarget.value)}
        value={value}
      >
        {!value && <option defaultValue>Filter by Type</option>}
        {options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectList;
