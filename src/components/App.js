import React, { Component } from "react";
import Flexi from "./Flexi";
export class App extends Component {
  render() {
    return (
      <div className="ui two column centered grid">
        <div className="column">
          <h2>Flexi Form</h2>

          <div className="ui segment ">
            <Flexi />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
