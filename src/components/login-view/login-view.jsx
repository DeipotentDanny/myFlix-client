import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUsernameError] = useState({});
  const [passwordError, setPasswordError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let setisValid = formValidation();
    if (setisValid) {
      axios.post('https://myflixdd.herokuapp.com/login', {
        username: username,
        password: password
      })
        .then(response => {
          const data = response.data;
          props.onLoggedIn(data);
        })
        .catch(e => {
          console.log('no such user')
        });
    };
  }

  const formValidation = () => {
    let usernameError = {};
    let passwordError = {};
    let isValid = true;

    if (username.trim().length < 4) {
      usernameError.usernameShort = "Username incorrect. Use at least 4 characters.";
      isValid = false;
    }
    if (password.trim().length < 5) {
      passwordError.passwordMissing = "Password incorrect. Use at least 5 characters.";
      isValid = false;
    }
    setUsernameError(usernameError);
    setPasswordError(passwordError);
    return isValid;
  };

  return (
    <Row className="d-flex mx-auto mt-5 justify-content-center">
      <Col xs={12} md={8} lg={6} className="d-flex mx-auto">
        <h2 className="text-center mt-5 text-light">Please Login</h2>
        <Row>

          <Form>

            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
              {Object.keys(usernameError).map((key) => {
                return (
                  <div key={key}>
                    {usernameError[key]}
                  </div>
                );
              })}
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
              {Object.keys(passwordError).map((key) => {
                return (
                  <div key={key}>
                    {passwordError[key]}
                  </div>
                );
              })}
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>Sign In</Button>

            <Link to={`/register`}>
              <Button variant="link">Register</Button>
            </Link>

          </Form>

        </Row>
      </Col>
    </Row>
  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  }),
};
