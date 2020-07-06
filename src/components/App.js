import React, { Component } from "react";

import InputTextField from "./fields/InputTextField";
import DropDownField from "./fields/DropDownField";

export class App extends Component {
  render() {
    return (
      <div className="ui two column centered grid">
        <div className="column">
          <h2>Flexi Form</h2>

          <div className="ui segment ">
            <form className="ui form">
              <div className="field">
                <label>First Name</label>
                <input type="text" name="first-name" placeholder="First Name" />
              </div>
              <div className="field">
                <label>Last Name</label>
                <input type="text" name="last-name" placeholder="Last Name" />
              </div>

              <button className="ui button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
