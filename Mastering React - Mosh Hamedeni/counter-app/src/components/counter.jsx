import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps ", prevProps);
    // console.log("prevState ", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //make call to a server
      console.log(prevProps.counter.value);
    }
  }

  render() {
    console.log("Counter - Rendered");
    const { onDecrease, onDelete, onIncrement, onReset, counter } = this.props;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span style={{ fontSize: 13 }} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
          </div>
          <div className="col">
            <button
              onClick={() => onIncrement(counter)}
              className="btn btn-dark btn-sm"
            >
              +
            </button>
            <button
              onClick={() => onDecrease(counter)}
              className="btn btn-dark btn-sm m-1 px-3"
              disabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              -
            </button>
            <button
              onClick={() => onReset(counter)}
              className="btn btn-warning btn-sm"
            >
              Reset
            </button>
            <button
              onClick={() => onDelete(counter.id)}
              className="btn btn-danger btn-sm m-1"
            >
              Delete
            </button>
          </div>
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
