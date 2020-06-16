import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <span style={{ fontSize: 13 }} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-dark btn-sm m-1"
          >
            Increase +
          </button>
          <button
            onClick={() => this.props.onDecrease(this.props.counter)}
            className="btn btn-dark btn-sm m-1"
          >
            Decrease -
          </button>
          <button
            onClick={() => this.props.onReset(this.props.counter)}
            className="btn btn-warning btn-sm m-1"
          >
            Reset
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
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
    classes += this.props.counter.value === 0 ? "dark" : "success";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
