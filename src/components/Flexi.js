import React, { Component } from "react";
import InputTextField from "./fields/InputTextField";
import DropDownField from "./fields/DropDownField";

class Flexi extends Component {
  state = { config: this.props.config };

  formSubmit = (e) => {
    const { config, ...inputFields } = this.state;
    console.log(inputFields);
    e.preventDefault();
  };

  onHandleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  render() {
    const { config } = this.props;
    return (
      <div>
        <form onSubmit={this.formSubmit} className="ui form">
          {config.items.map((form) => {
            if (form.type === "TextField") {
              return (
                <div>
                  <InputTextField
                    name={form.name}
                    onHandleChange={this.onHandleChange}
                    label={form.label}
                  />
                </div>
              );
            }
            if (form.type === "DropDown") {
              return (
                <DropDownField
                  name={form.name}
                  val={form.values}
                  onHandleChange={this.onHandleChange}
                  label={form.label}
                />
              );
            }
          })}
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Flexi;
