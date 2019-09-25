import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("This is my initalizer");

    const movies = [
      {
        id: 0,
        poster_src:
          "https://image.tmdb.org/t/p/w1280/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        title: "Avengers: Infinity War",
        overview: "Bla bla bla bla"
      },
      {
        id: 1,
        poster_src:
          "https://image.tmdb.org/t/p/w1280/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
        title: "Avengers",
        overview: "bla bla bla bla"
      }
    ];

    var movieRows = [];
    movies.forEach(movie => {
      console.log(movie.title);
      const movieRow = (
        <table key={movie.id}>
          <tr>
            <td>
              <img alt="poster" width="150" src={movie.poster_src} />
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
