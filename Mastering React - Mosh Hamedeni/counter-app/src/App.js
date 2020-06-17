import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 5 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    counters[index] = { ...counter };
    this.setState({ counters });
  };

  handleDecrease = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    counters[index] = { ...counter };
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({
      counters,
    });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleResetOne = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value = 0;
    counters[index] = { ...counter };
    this.setState({ counters });
  };

  render() {
    return (
      <>
        <Navbar
          totalCounter={this.state.counters.filter((c) => c.value !== 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrease={this.handleDecrease}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onResetOne={this.handleResetOne}
          />
        </main>
      </>
    );
  }
}

export default App;
