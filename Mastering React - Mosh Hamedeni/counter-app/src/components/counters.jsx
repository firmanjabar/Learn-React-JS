import React, { Component } from "react";
import Counter from "./counter";

export default class counters extends Component {
  render() {
    return (
      <>
        <button
          onClick={this.props.onReset}
          className="m-2 btn btn-primary btn-sm"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            onIncrement={this.props.onIncrement}
            onDecrease={this.props.onDecrease}
            onReset={this.props.onResetOne}
            onDelete={this.props.onDelete}
            key={counter.id}
            counter={counter}
          />
        ))}
      </>
    );
  }
}
