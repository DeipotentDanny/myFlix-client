import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './registration-view.scss';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birth_date, setBirthDate] = useState('');

  const [nameError, setNameError] = useState({});
  const [usernameError, setUsernameError] = useState({});
  const [passwordError, setPasswordError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [birth_dateError, setBirth_dateError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let setisValid = formValidation();
    if (setisValid) {
      axios.post('https://myflixdd.herokuapp.com/users', {
        username: username,
        password: password,
        email: email,
        birth_date: birth_date
      })
        .then(response => {
          const data = response.data;
          console.log(data);
          window.open('/', '_self');
        })
        .catch(e => {
          console.log('error registering the user')
        });
    };
  }

  const formValidation = () => {
    let usernameError = {};
    let passwordError = {};
    let emailError = {};
    let birth_dateError = {};
    let isValid = true;

    if (username.trim().length < 4) {
      usernameError.usernameShort = "Username incorrect. Use at least 4 characters.";
      isValid = false;
    }
    if (password.trim().length < 5) {
      passwordError.passwordMissing = "Password incorrect. Use at least 5 characters.";
      isValid = false;
    }
    if (!(email && email.includes(".") && email.includes("@"))) {
      emailError.emailNotEmail = "Email address incorrect.";
      isValid = false;
    }
    if (birth_date === '') {
      birth_dateError.birth_dateEmpty = "Please enter your birthdate.";
      isValid = false;
    }
    setNameError(nameError);
    setUsernameError(usernameError);
    setPasswordError(passwordError);
    setEmailError(emailError);
    setBirth_dateError(birth_dateError);
    return isValid;
  };


  return (
    <Row className="d-flex mx-auto mt-5 justify-content-center">

      <Col xs={12} md={8} lg={6} className="d-flex mx-auto">
        <h2 className="text-center mt-5 text-light">Sign Up!</h2>
        <h3 className="text-center text-light">Please Fill In All Fields:</h3>

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

            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
              {Object.keys(emailError).map((key) => {
                return (
                  <div key={key}>
                    {emailError[key]}
                  </div>
                );
              })}
            </Form.Group>

            <Form.Group controlId="formBirthdate">
              <Form.Label>Birthdate:</Form.Label>
              <Form.Control type="date" value={birth_date} onChange={e => setBirthDate(e.target.value)} />
              {Object.keys(birth_dateError).map((key) => {
                return (
                  <div key={key}>
                    {birth_dateError[key]}
                  </div>
                );
              })}
            </Form.Group>

            <Button type="submit" onClick={handleSubmit}>Register</Button>

          </Form>

        </Row>

      </Col>

    </Row>
  );
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birth_date: PropTypes.date
  }),
};

/* Registration Structure
  username: "ExampleUsername123"
  password: "PassEXpassword1!"
  email: "example.email@email.com"
  birth_date: "1997/02/31" (ex. date in ISO)
*/
