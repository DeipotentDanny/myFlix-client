import React from 'react';
import PropTypes from 'prop-types';
import './director-view.scss';
import Button from 'react-bootstrap/Button';

export class DirectorView extends React.Component {

  render() {
    const { movie, onBackClick } = this.props;

    return (
      <div className="director-view">
        <div className="director-name">
          <span className="label">Name: </span>
          <span className="value">{movie.director.name}</span>
        </div>
        <div className="director-bio">
          <span className="label">Bio: </span>
          <span className="value">{movie.director.bio}</span>
        </div>
        <div className="director-birth">
          <span className="label">Birth: </span>
          <span className="value">{movie.director.birth}</span>
        </div>
        <Button onClick={() => { onBackClick(null); }}>Back</Button>
      </div>
    );
  }
}

DirectorView.propTypes = {
  director: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    birth: PropTypes.string.isRequired
  }),
  onBackClick: PropTypes.func.isRequired
};
