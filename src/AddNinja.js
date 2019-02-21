import React, { Component } from "react";

export default class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    sex: null,
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.adder(this.state);
  };

  render() {
    return (
      <div className="addNinja">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} required />
          <label htmlFor="name">Age:</label>
          <input type="text" id="age" onChange={this.handleChange} required />
          <label htmlFor="name">Sex:</label>
          <input type="text" id="sex" onChange={this.handleChange} required />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
