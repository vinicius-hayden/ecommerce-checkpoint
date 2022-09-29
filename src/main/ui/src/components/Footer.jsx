import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-4 mb-1 py-1">
      <div className="footer">
        <ul className="nav justify-content-center border-bottom pb-1 mb-3">
          <Link to="/products" className="nav-link px-3">
            <p className="nav-item" style={{ fontSize:"20px", color: "black" }}>Products</p>
          </Link>

          <Link to="/categories" className="nav-link px-3">
            <p className="nav-item" style={{ fontSize:"20px", color: "black" }}>Categories</p>
          </Link>

          <Link to="/about" className="nav-link px-3">
            <p className="nav-item" style={{ fontSize:"20px", color: "black" }}>About us</p>
          </Link>
        </ul>
        <p className="text-center" style={{ fontSize:"20px", color: "black" }}>memecommerce © Copyright 2022 </p>
      </div>
    </footer>
  );
}
