import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <span style={{ fontSize: 13 }} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => this.handleIncrement()}
            className="btn btn-dark btn-sm m-1"
          >
            Increase +
          </button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "dark" : "success";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
