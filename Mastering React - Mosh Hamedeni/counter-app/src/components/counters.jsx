import React, { Component } from "react";
import Counter from "./counter";

export default class counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 5 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value} />
        ))}
      </>
    );
  }
}
