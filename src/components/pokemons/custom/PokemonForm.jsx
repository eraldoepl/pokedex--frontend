import React from "react";
import Form from "../../common/form/Form";
import Joi from "joi-browser";

class PokemonForm extends Form {
  state = {
    data: {
      name: "",
      weight: "",
      height: "",
      attacks: "",
      abilities: "",
      firstType: "",
      secondType: "",
    },
    errors: {},
  };

  schema = {
    // _id: Joi.string(),
    // genreId: Joi.string().required().label("Genre"),
    name: Joi.string().required().label("Name"),
    weight: Joi.number().min(0).max(100).required().label("Weight"),
    height: Joi.number().min(0).max(100).required().label("Height"),
    attacks: Joi.string().required().label("Attack"),
    abilities: Joi.string().required().label("Abilities"),
    firstType: Joi.string().required().label("Types"),
    secondType: Joi.string().label("Types"),
  };

  mappingDataToSend(data) {
    return {
      name: data.name,
      weight: data.weight,
      height: data.height,
      attacks: data.attacks,
      abilities: data.abilities,
      types: [
        { type: { type: data.firstType } },
        { type: { type: data.secondType } },
      ],
    };
  }

  doSubmit = async () => {
    console.log(this.mappingDataToSend(this.state.data));
  };

  render() {
    return (
      <div>
        <h2>Pokemon Form</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("weight", "Weight")}
          {this.renderInput("height", "Height")}
          {this.renderInput("attacks", "Attacks")}
          {this.renderInput("abilities", "Abilities")}
          {this.renderInput("firstType", "Type #1")}
          {this.renderInput("secondType", "Type #2")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default PokemonForm;
