import React, { Component } from "react";

// Form Component
import Flexi from "./Flexi";

//  Data
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
  state = { data: {} };
  onFlexiSubmit = (inputFields) => {
    this.setState({
      data: inputFields,
    });
  };

  render() {
    return (
      <div className="ui two column centered grid">
        <div className="column">
          <h1 className="ui header" style={{ marginTop: "20px" }}>
            Flexi Form
          </h1>
          <div className="ui segment ">
            {/* Form Component */}
            <Flexi onSubmit={this.onFlexiSubmit} config={flexiConfig} />
          </div>
          {/* Form Details */}
          {this.state.data.person_name ? (
            <div className="ui segment ">
              <h3 className="ui header">Form Details</h3>
              <p>
                Person Name : <b>{this.state.data.person_name}</b>{" "}
              </p>
              <p>
                State : <b>{this.state.data.states}</b>{" "}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default App;
