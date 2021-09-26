import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birth_date, setBirthDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birth_date);
    props.onRegister(username);
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
              <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBirthdate">
              <Form.Label>Birthdate:</Form.Label>
              <Form.Control type="date" onChange={e => setBirthDate(e.target.value)} />
            </Form.Group>
            <Button type="submit" onClick={handleSubmit}>Register</Button>
          </Form>
        </Row>
      </Col>
    </Row>
  );
}

/* Registration Structure
  username: "ExampleUsername123"
  password: "PassEXpassword1!"
  email: "example.email@email.com"
  birth_date: "1997/02/31" (ex. date in ISO)
*/
