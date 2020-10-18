// https://scrimba.com/g/greacthooks

import React from "react";
import randomcolor from "randomcolor";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      color: "#FFA500"
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
        color: randomcolor()
      };
    });
  }

  componentDidUpdate() {
    const newColor = randomcolor();
    console.log(newColor);
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>{this.state.count}</h1>
        <button onClick={this.increment}>Increment!</button>
      </div>
    );
  }
}

export default App;
