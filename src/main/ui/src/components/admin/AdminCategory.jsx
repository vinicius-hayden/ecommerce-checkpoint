import { Accordion, Form, Button } from "react-bootstrap"
import { useState } from "react";
import axios from 'axios'
import Swal from "sweetalert2/dist/sweetalert2";
import '../../pages/Login.scss'

export default function AdminCategory() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const url = 'http://localhost:9000/categories';
  const [id, setId] = useState("");
  const [idError, setIdError] = useState("");

  const handleNameChange = (e) => {
    setNameError('');
    setName(e.target.value);
  }

  const handleNumberChange = (e) => {
    setIdError('');
    setId(e.target.value);
  }

  function isNameValid(name) {
    if (name != '') {
      return true;
    } else {
      return false;
    }
  }

  function isIdValid(id) {
   return /\d+/.test(id);
  }

  const handleCreateFormSubmit = (e) => {
    e.preventDefault();

    if (!isNameValid(name)) {
      setNameError("Invalid Name, shouldn't be null.")
    }
    if (isNameValid(name)) {
      Swal.fire({
        icon: 'success',
        title: 'Category successfully created!!',
        text: `Try seeing it on Category list`
      }).then(() => {
        axios.post(url, {
          name: `${name}`,
        }).then(() => {
          console.log('GOOD')
        }).catch(() => {
          console.log('DEU RUIMM')
        })
      })
    }
  }

  const handleDeleteFormSubmit = (e) => {
    e.preventDefault();

    if (!isIdValid(id)) {
      setIdError("Invalid ID");
    }
    if (isIdValid(id)) {
      Swal.fire({
        icon: 'success',
        title: 'Category successfully deleted!!',
        text: `Try seeing it on Category list`
      }).then(() => {
        axios.delete(`${url}/${id}`, {
          id: `${id}`,
        }).then(() => {
          console.log('GOOD')
        }).catch(() => {
          console.log('DEU RUIMM')
        })
      })
    }
  }

  if (localStorage.getItem('allowed') != 'yes') {
    window.location = "/login"
  }
  
  return (
    <>
      <h1>CRUD Category</h1>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Create</Accordion.Header>
          <Accordion.Body>
            <Form onSubmit={handleCreateFormSubmit}>
              <Form.Group controlId="formBasicusername">
                <Form.Label><strong>Create a Category</strong></Form.Label>
                <Form.Control type="name" placeholder="Enter a name for a category" onChange={handleNameChange} value={name} />
              </Form.Group>
              {nameError&&<div className="error-msg">{nameError}</div>}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="outline-warning" type="submit" className="mt-2">
                  Create
                </Button>
              </div>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Delete</Accordion.Header>
          <Accordion.Body>
            <Form onSubmit={handleDeleteFormSubmit}>
              <Form.Group controlId="formBasicusername">
                <Form.Label><strong>Delete a Category</strong></Form.Label>
                <Form.Control type="number" min="1" placeholder="Select a Category ID that you wish to delete" onChange={handleNumberChange}  value={id} />
              </Form.Group>
              {idError&&<div className="error-msg">{idError}</div>}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="outline-danger" type="submit" className="mt-2">
                  Delete
                </Button>
              </div>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}