import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

export default class movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (id) => {
    const movies = this.state.movies.filter((m) => m._id !== id);
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There is no movie in database</p>;
    return (
      <>
        <p>Showing {count} movies in the database</p>
        <div className="table-responsive">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{this.renderList()}</tbody>
          </table>
        </div>
      </>
    );
  }

  renderList() {
    return this.state.movies.map((movie) => (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <button
            onClick={() => this.handleDelete(movie._id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  }
}
