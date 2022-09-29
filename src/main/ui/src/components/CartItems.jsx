import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Swal from "sweetalert2/dist/sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'

export default function CartItems() {

  const productsInCart = JSON.parse(localStorage.getItem("cart"));

  if (productsInCart === 'null') {
    localStorage.setItem('cart', []);
  }

  var totalPrice = 0

  function calculatePrice() {
    productsInCart.map((product) => {
      totalPrice = totalPrice + product.price;
    })
    return totalPrice;
  }

  function removeItemFromCart({ product }) {
    let cartString = localStorage.getItem("cart");

    if (cartString) {
      let cart = JSON.parse(cartString);
      let newCart = [];

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id != product.id) {
          newCart.push(cart[i]);
        }
      }
      localStorage.setItem("cart", JSON.stringify(newCart));
      Swal.fire({
        icon: 'success',
        title: 'All done!',
        text: 'Item removed from the cart!'
      }).then(function () {
        location.reload();
      })
    }
  }

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Text>
            Total Price: <strong>R$ {calculatePrice()}</strong>
          </Navbar.Text>
          <Button variant="outline-success">Checkout</Button>
        </Container>
      </Navbar>

      <Stack gap={3}>
        {productsInCart.map((product, index) => (
          <Card style={{ width: '15rem' }} key={index} id={index}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Row className='justify-content-center'>
                <Button variant="outline-danger" size="sm" onClick={() => {
                  removeItemFromCart({ product })

                  Element.prototype.remove = function () {
                    this.parentElement.removeChild(this);
                  }
                  NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
                    for (var i = this.length - 1; i >= 0; i--) {
                      if (this[i] && this[i].parentElement) {
                        this[i].parentElement.removeChild(this[i]);
                      }
                    }
                  }
                  document.getElementById(`${index}`).remove();
                  calculatePrice();
                }}>Remove from cart
                </Button>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Stack>
    </>
  )
}
