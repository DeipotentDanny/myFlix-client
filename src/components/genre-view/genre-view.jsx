import React from 'react';
import PropTypes from 'prop-types';
import './genre-view.scss'
import Button from 'react-bootstrap/Button';

export class GenreView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="genre-view">
        <div className="genre-name">
          <span className="value">{movie.genre.name}</span>
        </div>
        <div className="genre-description">
          <span className="label">Desc: </span>
          <span className="value">{movie.genre.description}</span>
        </div>
        <Button onClick={() => { onBackClick(null); }}>Back</Button>
      </div>
    );
  }
}

GenreView.PropTypes = {
  genre: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired
};
