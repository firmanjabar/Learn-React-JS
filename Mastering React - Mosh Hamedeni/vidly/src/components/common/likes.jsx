import React, { Component } from "react";

export default class Likes extends Component {
  render() {
    const classes = "fa fa-heart";
    return (
      <div>
        <i
          className={this.props.like === true ? classes : `${classes}-o`}
          onClick={this.props.onClick}
          style={{ cursor: "pointer" }}
          aria-hidden="true"
        ></i>
      </div>
    );
  }
}
