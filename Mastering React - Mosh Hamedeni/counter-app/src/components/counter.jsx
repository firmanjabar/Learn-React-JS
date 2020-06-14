import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imgUrl: "https://picsum.photos/200",
    tags: ["web", "android", "ios"],
  };

  styles = {
    backgroundColor: "pink",
    marginTop: 10,
  };

  handleIncrement = (id) => {
    console.log(id);
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imgUrl} alt={this.state.imgUrl} />
        <div style={this.styles}>
          <span style={{ fontSize: 13 }} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => this.handleIncrement({ id: 4 })}
            className="btn btn-dark btn-sm m-1"
          >
            Increase +
          </button>
        </div>
        <ul className="list-group">
          {this.state.tags.length === 0 ? (
            <li className="list-group-item list-group-item-info">
              Please create a new Tag!
            </li>
          ) : (
            <li className="list-group-item list-group-item-info">Tag List:</li>
          )}
          {this.renderList()}
        </ul>
      </React.Fragment>
    );
  }

  renderList() {
    if (this.state.tags.length === 0) {
      return (
        <li className="list-group-item list-group-item-danger">
          There is no item tags
        </li>
      );
    }

    return this.state.tags.map((tag, index) => (
      <li className="list-group-item" key={index}>
        {index + 1}. {tag}
      </li>
    ));
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
