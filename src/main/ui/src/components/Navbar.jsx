import { BiSearchAlt2 } from "react-icons/bi"

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MemeCommerce</a>
          <div className="navbar-logo"></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Cart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Administration</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About Us</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-primary" type="submit"><BiSearchAlt2 size={25}></BiSearchAlt2></button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}