import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './profile-view.scss';

import { MovieCard } from '../movie-card/movie-card';

import { Container, Image, Button, Row, Col, Form } from 'react-bootstrap';

import { Link } from 'react-router-dom'

export class ProfileView extends React.Component {

  constructor() {
    super();

    this.state = {
      username: null,
      password: null,
      email: null,
      birth_date: null,
      FavoriteMovies: []
    };
  }

  componentDidMount() {
    const accessToken = localStorage.getItem('token');
    this.getUser(accessToken);
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
    window.open('/', '_self');
  }

  // Get The Current User

  getUser(token) {
    const username = localStorage.getItem('user');
    axios.get(`https://myflixdd.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        this.setState({
          username: response.data.username,
          password: response.data.password,
          email: response.data.email,
          birth_date: response.data.birth_date,
          FavoriteMovies: response.data.FavoriteMovies
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Update The Current User

  updateUser(e) {
    e.preventDefault();
    const username = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    axios.put(`https://myflixdd.herokuapp.com/users/${username}`,
      {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        birth_date: this.state.birth_date
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        this.setState({
          username: response.data.username,
          password: response.data.password,
          email: response.data.email,
          birth_date: response.data.birth_date
        });
        localStorage.setItem('user', this.state.username);
        const data = response.data;
        console.log(data);
        console.log(this.state.username);
        alert(username + " has been updated!");
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  // Delete A Favorite Movie From Users Favorite 

  removeFav(id) {
    const username = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    axios.delete(`https://myflixdd.herokuapp.com/users/${username}/Favorites/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        console.log(response);
        this.componentDidMount();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Delete A User

  onDeleteUser() {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('user');
    axios.delete(`https://myflixdd.herokuapp.com/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        console.log(response);
        alert(username + ' has been deleted.');
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.open('/', '_self');
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  setUsername(value) {
    this.state.username = value;
  }

  setPassword(value) {
    this.state.password = value;
  }

  setEmail(value) {
    this.state.email = value;
  }

  setBirthday(value) {
    this.state.birth_date = value;
  }


  render() {

    const { onBackClick, movies, user } = this.props;

    const FavoriteMovies = movies.filter(m => {
      return this.state.FavoriteMovies.includes(m._id)
    });

    return (
      <Container className="profileWrapper">
        <Container className="d-flex flex-row justify-content-end align-items-baseline">
          <Col>
            <Link to={`/`}>
              <Button variant="link">Home</Button>
            </Link>
          </Col>
        </Container>
        <div className="profileInformation">
          <div className="profileContent">
            <h3>My Profile</h3>
          </div>
          <div className="profileContent">
            <h4>Username:</h4>
            <div>
              <p>{this.state.username}</p>
            </div>
          </div>
          <div className="profileContent">
            <h4>Email:</h4>
            <div>
              <p>{this.state.email}</p>
            </div>
          </div>
          <div className="profileContent">
            <h4>Birthday:</h4>
            <div>
              <p>{this.state.birth_date}</p>
            </div>
          </div>
          <div>
            <h3>Update Profile</h3>
          </div>
          <Form className="formDisplay" onSubmit={(e) => this.updateUser(e)}>
            <Form.Group>
              Username:
              <Form.Control type='text' name="Username" placeholder="New Username" onChange={(e) => this.setUsername(e.target.value)} required />
            </Form.Group>
            <Form.Group>
              Password:
              <Form.Control type='password' name="Password" placeholder="New Password" onChange={(e) => this.setPassword(e.target.value)} required />

            </Form.Group>
            <Form.Group>
              Email Address:
              <Form.Control type='email' name="Email" placeholder="New Email" onChange={(e) => this.setEmail(e.target.value)} required />

            </Form.Group>
            <Form.Group>
              Birthday:
              <Form.Control type='date' name="Birthday" onChange={(e) => this.setBirthday(e.target.value)} />

            </Form.Group>
            <div className="marginSpacer">
              <Button variant="success" type="submit" >Update</Button>
            </div>
          </Form>
          <div className="marginSpacer">
            <Button variant="danger" onClick={() => this.onDeleteUser()} >Delete Profile</Button>
          </div>
          <div>
            <Button className="backProfileButton" variant="primary" onClick={() => { onBackClick() }}>Back</Button>
          </div>
        </div>
        <div className="favoriteMoviesView">
          <h2>Favorite Movies</h2>
          <div className="responsiveMovieWrapper">
            {
              FavoriteMovies.map((movie) => (
                <Row className="justify-content-center flex-wrap" key={movie._id}>
                  <Col className="m-2 d-flex flex-column">
                    <div className="d-flex flex-column align-items-center favoriteMovieList">
                      <MovieCard movie={movie} />
                      <Button className="unfavoriteMovieButton" variant="danger" onClick={() => { this.removeFav(movie._id) }} >Unfavorite</Button>
                    </div>
                  </Col>
                </Row>
              ))
            }
          </div>
        </div>
      </Container>
    );
  }
}

ProfileView.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birth_date: PropTypes.string.isRequired
  })
};
