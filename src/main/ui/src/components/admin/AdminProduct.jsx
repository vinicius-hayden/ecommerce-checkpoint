import { useState } from "react"
import { Accordion, Form, Button } from "react-bootstrap"
import axios from 'axios'
import Swal from "sweetalert2/dist/sweetalert2";
import '../../pages/Login.scss'

export default function AdminProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [categories, setCategory] = useState('');
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [imageError, setImagError] = useState('');
  const [priceError, setPriceError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const url = 'http://localhost:9000/products';
  const [id, setId] = useState('');
  const [idError, setIdError] = useState("");

  const handleNumberChange = (e) => {
    setIdError('');
    setId(e.target.value);
  }

  const handleTitleChange = (e) => {
    setTitleError('');
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescriptionError('');
    setDescription(e.target.value);
  }

  const handleImageChange = (e) => {
    setImagError('');
    setImage(e.target.value);
  }

  const handlePriceChange = (e) => {
    setPriceError('');
    setPrice(e.target.value);
  }

  const handleCategoryChange = (e) => {
    setCategoryError('');
    setCategory(e.target.value);
  }

  function isTitleValid(title) {
    if (title.length > 0 && title.length < 25) {
      return true;
    } else {
      return false;
    }
  }

  function isDescriptionValid(description) {
    if (description.length > 0 && description.length < 50) {
      return true;
    } else {
      return false;
    }
  }

  function isImageValid(image) {
    return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(image);
  }

  function isPriceValid(price) {
    return /\d+/.test(price);
  }

  function isCategoryValid(categories) {
    return /\d+/.test(categories);
  }

  function isIdValid(id) {
    return /\d+/.test(id);
   }

  const handleCreateFormSubmit = (e) => {
    e.preventDefault();

    if (!isTitleValid(title)) {
      setTitleError("Invalid Title, must have at least 1 and less than 25 characters");
    }

    if (!isDescriptionValid(description)) {
      setDescriptionError("Invalid Description, must have at least 1 and less than 50 characters");
    }

    if (!isImageValid(image)) {
      setImagError("Invalid Link, please type a valid URL");
    }

    if (!isPriceValid(price)) {
      setPriceError("Invalid Price, must cost at least 0");
    }

    if (!isCategoryValid(categories)) {
      setCategoryError("Invalid Category, please try again");
    }

    if (isTitleValid(title) && isDescriptionValid(description) && isImageValid(image) && isPriceValid(price) && isCategoryValid(categories)) {
      Swal.fire({
        icon: 'success',
        title: 'Product successfully created!!',
        text: `Try seeing it on product list`
      }).then(() => {
        axios.post(url, {
          title: `${title}`,
          description: `${description}`,
          image: `${image}`,
          price: `${price}`,
          categories: [
            {
              id: `${categories}`
            }
          ],
        }).then(() => {
          console.log('Success')
        }).catch(() => {
          console.log('Error')
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
        title: 'Product successfully deleted!!',
        text: `Try seeing it on Product list`
      }).then(() => {
        axios.delete(`${url}/${id}`, {
          id: `${id}`,
        }).then(() => {
          console.log('Success')
        }).catch(() => {
          console.log('Error')
        })
      })
    }
  }

  if (localStorage.getItem('allowed') != 'yes') {
    window.location = "/login"
  }
  
  return (
    <>
      <h1>Admin Product</h1>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Create a Product</Accordion.Header>
          <Accordion.Body>
            <Form onSubmit={handleCreateFormSubmit}>
              <Form.Group controlId="formBasicusername">
                <Form.Label><strong>Title</strong></Form.Label>
                <Form.Control type="text" placeholder="Enter a title for the product" onChange={handleTitleChange} value={title} />
              </Form.Group>
              {titleError && <div className="error-msg">{titleError}</div>}
              <Form.Group controlId="formBasicusername">
                <Form.Label><strong>Description</strong></Form.Label>
                <Form.Control type="text" placeholder="Enter a description for the product" onChange={handleDescriptionChange} value={description} />
              </Form.Group>
              {descriptionError&&<div className="error-msg">{descriptionError}</div>}
              <Form.Group controlId="formBasicusername">
                <Form.Label><strong>Image</strong></Form.Label>
                <Form.Control type="username" placeholder="Enter a image link for the product" onChange={handleImageChange} value={image} />
              </Form.Group>
              {imageError&&<div className="error-msg">{imageError}</div>}
              <Form.Group controlId="formBasicusername">
                <Form.Label><strong>Price</strong></Form.Label>
                <Form.Control type="number" min="0" placeholder="Enter a price for the product" onChange={handlePriceChange} value={price} />
              </Form.Group>
              {priceError&&<div className="error-msg">{priceError}</div>}
              <Form.Group controlId="formBasicusername">
                <Form.Label><strong>Category</strong></Form.Label>
                <Form.Control type="number" min="1" placeholder="Enter the category for the product" onChange={handleCategoryChange} value={categories} />
              </Form.Group>
              {categoryError&&<div className="error-msg">{categoryError}</div>}
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
                <Form.Label><strong>Delete a Product</strong></Form.Label>
                <Form.Control type="number" min="1" placeholder="Select a Product ID that you wish to delete" onChange={handleNumberChange}  value={id} />
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