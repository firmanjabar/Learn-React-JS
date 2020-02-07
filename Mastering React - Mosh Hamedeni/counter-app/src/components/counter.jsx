import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imgUrl: "https://picsum.photos/200",
    tags: ["nodeJs", "react", "vue", "mongoDb"]
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
          <span style={{ fontSize: 13 }} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button className="btn btn-dark btn-sm m-1">Increase +</button>
        </div>
        <ul className="list-group">
          {this.state.tags.map((tag, index) => (
            <li className="list-group-item" key={index}>
              {index + 1}. {tag}
            </li>
          ))}
        </ul>
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
