import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increament = () => this.setState({ count: this.state.count + 1 });
  decreament = () => this.setState({ count: this.state.count - 1 });
  reset = () => this.setState({ count: 0 });

  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <h2>{this.state.count}</h2>
        <div className="buttons">
          <button className="btn" onClick={this.increament}>
            +
          </button>
          <button className="btn" onClick={this.decreament}>
            -
          </button>
          <button className="btn" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
