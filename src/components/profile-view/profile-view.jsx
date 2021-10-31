import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Container, Card } from 'react-bootstrap';
import axios from 'axios';

import UserInfo from './user-info.jsx';
import FavoriteMovieList from './favorite-movies.jsx';
import UpdateUser from './update-user.jsx';

import { Link } from 'react-router-dom';

import './profile-view.scss';

export function ProfileView({ movies, onUpdatedUserInfo }) {
  const { user, setUser } = useState({})

  const favoriteMovieList = movies.filter((movies) => { });

  const getUser = () => { }

  const handleSubmit = (e) => { }

  const removeFav = (id) => { }

  const handleUpdate = (e) => { };

  useEffect(() => { }, [])


  return (
    <Container>
      <Row>
        <Col>
          <UserInfo name={user.username} email={user.email} />
        </Col>
        <Col>
          <FavoriteMovieList FavoriteMovies={FavoriteMovies} />
        </Col>
      </Row>
      <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
    </Container>
  );
}
