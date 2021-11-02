import axios from 'axios';
import React from 'react'
import { Row, Col, Button, Figure } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function FavoriteMovies({ favoriteMovieList }) {
  const removeFav = (id) => {
    let token = localStorage.getItem('token');
    let url = `https://myflixdd.herokuapp.com/users/${localStorage.getItem('user')}/movies/${id}`;
    axios.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  return (
    <>
      <Row>
        <Col xs={12}>
          <h4>Favorite Movies</h4>
        </Col>
      </Row>
      <Row>
        {favoriteMovieList.map(({ imagepath, title, _id }) => {
          return (
            <Col xs={12} md={6} lg={3} key={movies._id}>
              <Figure>
                <Link to={`/movies/${movies._id}`}>
                  <Figure.Image src={movies.imagepath} alt={movies.title} />
                  <Figure.Caption>
                    {title}
                  </Figure.Caption>
                </Link>
              </Figure>

              <Button variant="secondary" onClick={() => removeFav(movies._id)}>Remove From Favorites</Button>
            </Col>
          )
        })
        }
      </Row>
    </>
  )
}

export default FavoriteMovies
