import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imgUrl: "https://picsum.photos/200"
  };

  styles = {
    backgroundColor: "pink",
    marginTop: 10
  };

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imgUrl} alt={this.state.imgUrl} />
        <div style={this.styles}>
          <span style={{ fontSize: 13 }} className="badge badge-dark m-4">
            {this.formatCount()}
          </span>
          <button className="btn btn-outline-dark btn-sm">Increase +</button>
        </div>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
