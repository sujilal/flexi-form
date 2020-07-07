import React, { Component } from "react";
import Flexi from "./Flexi";

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

export class App extends Component {
  // state = { flexiConfig: flexiConfig };
  render() {
    return (
      <div className="ui two column centered grid">
        <div className="column">
          <h2>Flexi Form</h2>
          <div className="ui segment ">
            <Flexi config={flexiConfig} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
