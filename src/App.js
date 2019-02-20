import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Ninjas from "./Ninjas";

class App extends Component {
  state = {
    ninjaList: [
      {
        name: "Rishav",
        age: Math.floor(Math.random() * 100),
        sex: "Male",
        id: 1
      },
      {
        name: "Sanam",
        age: Math.floor(Math.random() * 100),
        sex: "Male",
        id: 2
      },
      {
        name: "Rambo",
        age: Math.floor(Math.random() * 100),
        sex: "Male",
        id: 3
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <h1>This is my first React App</h1>
        <Ninjas ninjaListPass={this.state.ninjaList} />
      </div>
    );
  }
}

export default App;
