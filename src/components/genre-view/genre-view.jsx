import React from 'react';
import PropTypes from 'prop-types';
import './genre-view.scss'
import Button from 'react-bootstrap/Button';

export class GenreView extends React.Component {

  render() {
    const { genre, onBackClick } = this.props;

    return (
      <div className="genre-view">
        <div className="genre-name">
          <span className="value">{genre.name}</span>
        </div>
        <div className="genre-description">
          <span className="label">Desc: </span>
          <span className="value">{genre.description}</span>
        </div>
        <Button onClick={() => { onBackClick(null); }}>Back</Button>
      </div>
    );
  }
}

GenreView.propTypes = {
  genre: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired
};
