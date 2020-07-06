import React, { Component } from "react";
import InputTextField from "./fields/InputTextField";
import DropDownField from "./fields/DropDownField";
import FieldLabel from "./fields/FieldLabel";

const flexiConfig = {
  items: [
    {
      name: "person_name",
      label: "Person's Name",
      type: "TextField",
    },

    {
      name: "states",
      label: "Person's state",
      type: "DropDown",
      values: ["Maharashtra", "Kerala", "Tamil Nadu"],
    },
  ],
};

class Flexi extends Component {
  state = { fields: flexiConfig };
  render() {
    const { fields } = this.state;
    return (
      <div>
        <form className="ui form">
          {fields.items.map((form) => {
            if (form.type === "TextField") {
              return (
                <InputTextField
                  name={form.name}
                  onHandleChange={this.onHandleChange}
                />
              );
            }
            if (form.type === "DropDown") {
              return (
                <DropDownField
                  namvale={form.name}
                  val={form.values}
                  onHandleChange={this.onHandleChange}
                />
              );
            }
          })}
        </form>
      </div>
    );
  }
}

export default Flexi;
