import { React, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [token, setToken] = useState(localStorage.getItem("token"));
  // let isToken = !!token;
  // console.log(isToken);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <Link to="/home" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="text-primary m-0">Baker</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto p-4 p-lg-0">
            {/* {isToken ? (
              <> */}
            <Link to="/home" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/aboutus" className="nav-item nav-link">
              About
            </Link>
            <Link to="/services" className="nav-item nav-link">
              Services
            </Link>
            <Link to="/products" className="nav-item nav-link">
              Products
            </Link>

            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <Link to="/ourteam" className="dropdown-item">
                  Our Team
                </Link>
              </div>
            </div>
            <Link to="/contactus" className="nav-item nav-link">
              Contact
            </Link>
            <Link to="/logout" className="nav-item nav-link">
              Logout
            </Link>
            {/* </> */}
            {/* ) : ( */}
            {/* <Link to="/login" className="nav-item nav-link">
              LogIn
            </Link> */}
            {/* )} */}
          </div>
          <div className=" d-none d-lg-flex">
            <div className="flex-shrink-0 btn-lg-square border border-light rounded-circle">
              <i className="fa fa-phone text-primary"></i>
            </div>
            <div className="ps-3">
              <small className="text-primary mb-0">Call Us</small>
              <p className="text-light fs-5 mb-0">+012 345 6789</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
