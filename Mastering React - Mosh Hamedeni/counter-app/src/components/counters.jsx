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

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    counters[index] = {...counter};
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({
      counters,
    });
  };

  render() {
    return (
      <>
        {this.state.counters.map((counter) => (
          <Counter
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            key={counter.id}
            counter={counter}
          />
        ))}
      </>
    );
  }
}
