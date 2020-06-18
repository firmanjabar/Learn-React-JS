import React, { Component } from "react";
import Counter from "./counter";

export default class counters extends Component {
  render() {
    const {
      counters,
      onDecrease,
      onDelete,
      onIncrement,
      onReset,
      onResetOne,
    } = this.props;

    return (
      <>
        <button onClick={onReset} className="m-2 btn btn-primary btn-sm">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            onIncrement={onIncrement}
            onDecrease={onDecrease}
            onReset={onResetOne}
            onDelete={onDelete}
            key={counter.id}
            counter={counter}
          />
        ))}
      </>
    );
  }
}
