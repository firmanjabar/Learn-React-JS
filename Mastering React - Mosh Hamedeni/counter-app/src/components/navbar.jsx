import React, { Component } from "react";

export default class navbar extends Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-dark bg-dark">
          <span class="navbar-brand mb-0 h1">{this.props.totalCounter}</span>
        </nav>
      </>
    );
  }
}
