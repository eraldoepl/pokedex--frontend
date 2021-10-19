import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";
import DropdownListForm from "./DropdownListForm";

import styles from "./Form.module.css";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  renderButton(label) {
    return (
      <div className={styles["custom__div-btn"]}>
        <button
          disabled={this.validate()}
          className={`${styles.btn} ${styles["btn-primary"]} ${styles["custom__btn-save"]} }`}
        >
          {label}
        </button>
      </div>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        label={label}
        name={name}
        onChange={this.handleChange}
        value={data[name]}
        error={errors[name]}
        type={type}
      />
    );
  }

  renderDropdownList(name, label, options) {
    const { data, errors } = this.state;
    return (
      <DropdownListForm
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
