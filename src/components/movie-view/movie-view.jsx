import React from 'react';
import './movie-view.scss'

import { Link } from "react-router-dom";

export class MovieView extends React.Component {

  render() {
    const { movie } = this.props;

    return (
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.imagepath} alt={movie.title} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.description}</span>
        </div>
        <Link to={`/directors/${movie.director.Name}`}>
          <Button variant="link">Director</Button>
        </Link>
        <Link to={`/genres/${movie.genre.Name}`}>
          <Button variant="link">Genre</Button>
        </Link>
        <button onClick={() => { onBackClick(null); }}>Back</button>
      </div>
    );
  }
}
