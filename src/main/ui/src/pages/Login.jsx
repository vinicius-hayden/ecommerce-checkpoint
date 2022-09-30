import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2";
import './Login.scss'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleUsernameChange=(e)=> {
    setSuccessMsg('');
    setUsernameError('');
    setUsername(e.target.value);
  }

  const handlePasswordChange=(e)=> {
    setSuccessMsg('');
    setPasswordError('');
    setPassword(e.target.value);
  }

  function isUsernameValid(username) {
    if (username === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  function isPasswordValid(password) {
    if (password === 'admin123') { 
      return true;
    } else {
      return false;
    }
  }

  const handleFormSubmit=(e)=> {
    e.preventDefault();

    if (!isUsernameValid(username)) {
      setUsernameError("Wrong or Invalid Username")
    }

    if (!isPasswordValid(password)) {
      setPasswordError("Wrong or Invalid Password");
    } 

    if (isUsernameValid(username) && isPasswordValid(password)) {
      Swal.fire({
        icon: 'success',
        title: 'All done!',
        text: `We will let you in in a few seconds...`
      }).then(() => {
        localStorage.setItem('allowed', 'yes');
        setInterval(function () {window.location = "/admin"}, 1000);
      })
    }

    else { 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      })
    }
  }

  return (
    <>
      <Container>
        <h1 className="text-warning mt-5 p-3 text-center rounded">Admin Login</h1>
        <Row className="mt-5">
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="formBasicusername">
                <Form.Label><strong>Username</strong></Form.Label>
                <Form.Control type="username" placeholder="Enter username" onChange={handleUsernameChange} value={username} />
              </Form.Group>
              {usernameError&&<div className="error-msg">{usernameError}</div>}
              <Form.Group controlId="formBasicPassword">
                <Form.Label><strong>Password</strong></Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={password} />
              </Form.Group>
              {passwordError&&<div className="error-msg">{passwordError}</div>}
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Button variant="outline-success btn-block" type="submit" className="mt-5">
                Login
              </Button>
            </div>
            </Form>
          </Col>
        </Row>
        <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 memecommerce. All Rights Reserved.</h6>
      </Container>
    </>
  );
}