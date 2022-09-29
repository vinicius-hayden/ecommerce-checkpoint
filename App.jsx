import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Nav />
        </div>
      </div>

      <div className="row my-3">
        <div className="col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:idProduct" element={<ProductsDetails />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>
    </div>
  );
}
