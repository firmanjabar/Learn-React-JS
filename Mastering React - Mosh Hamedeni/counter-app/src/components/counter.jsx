import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log("Counter - Rendered");
    const { onDecrease, onDelete, onIncrement, onReset, counter } = this.props;

    return (
      <React.Fragment>
        <div>
          <span style={{ fontSize: 13 }} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-dark btn-sm m-1"
          >
            Increase +
          </button>
          <button
            onClick={() => onDecrease(counter)}
            className="btn btn-dark btn-sm m-1"
          >
            Decrease -
          </button>
          <button
            onClick={() => onReset(counter)}
            className="btn btn-warning btn-sm m-1"
          >
            Reset
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm m1"
          >
            delete
          </button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value <= 0 ? "dark" : "success";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
