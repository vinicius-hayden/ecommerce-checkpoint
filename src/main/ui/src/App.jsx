import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Cart from "./pages/Cart";
import CategoriesDetails from "./pages/CategoriesDetails";
import Login from "./pages/Login";
import AdminPage from "./pages/admin/AdminPage";
import AdminCategory from "./components/admin/AdminCategory";
import AdminProduct from "./components/admin/AdminProduct";

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
            <Route path="/categories/:idCategory" element={<CategoriesDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/category" element={<AdminCategory />} />
            <Route path="/admin/product" element={<AdminProduct />} />
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
