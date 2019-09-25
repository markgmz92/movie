import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("This is my initalizer");

    const movies = [
      { id: 0, title: "Avengers: Infinity War", overview: "Bla bla bla bla" },
      { id: 1, title: "Avengers", overview: "bla bla bla bla" }
    ];

    this.state = {
      rows: [
        <p key="1">This is my row 0</p>,
        <p key="2">This is my row 1</p>,
        <p key="3">This is my row 2</p>
      ]
    };

    var movieRows = [];
    movies.forEach(movie => {
      console.log(movie.title);
      const movieRow = (
        <table key={movie.id}>
          <tr>
            <td>
              <img alt="" src="" />
            </td>
            <td>{movie.title}</td>
          </tr>
        </table>
      );

      movieRows.push(movieRow);
    });

    this.state = { rows: movieRows };
  }
  render() {
    return (
      <div className="App">
        <table className="titleBar ">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="green_app_icon.svg" />
              </td>
              <td width="8" />
              <td>
                <h1>MovieDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input
          style={{
            fontsize: 24,
            display: "block",
            width: "99%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
          }}
          placeholder="Enter search term"
        />

        {this.state.rows}
      </div>
    );
  }
}

export default App;
