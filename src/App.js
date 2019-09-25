import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <table className="titleBar ">
          <tbody>
            <tr>
              <td>
                <img width="50" src="green_app_icon.svg" />
              </td>
              <td width="8" />
              <td>
                <h1>MovieDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
