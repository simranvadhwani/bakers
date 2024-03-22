import React, { useState, useEffect } from "react";
import product1 from "../../img/product-1.jpg";
import product2 from "../../img/product-2.jpg";
import product3 from "../../img/product-3.jpg";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // Check if token exists in local storage
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    } else {
      navigate("/");
    }
  });
  return (
    <>
      <div
        className="container-fluid page-header py-6 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center pt-5 pb-3">
          <h1 className="display-4 text-white animated slideInDown mb-3">
            Products
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Products
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl bg-light my-6 py-6 pt-0">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p className="text-primary text-uppercase mb-2">
              // Bakery Products
            </p>
            <h1 className="display-6 mb-4">
              Explore The Categories Of Our Bakery Products
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                <div className="text-center p-4">
                  <div className="d-inline-block border border-primary rounded-pill px-3 mb-3">
                    $11 - $99
                  </div>
                  <h3 className="mb-3">Cake</h3>
                  <span>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </span>
                </div>
                <div className="position-relative mt-auto">
                  <img className="img-fluid" src={product1} alt={product1} />
                  <div className="product-overlay">
                    <a
                      className="btn btn-lg-square btn-outline-light rounded-circle"
                      href=""
                    >
                      <i className="fa fa-eye text-primary"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                <div className="text-center p-4">
                  <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">
                    $11 - $99
                  </div>
                  <h3 className="mb-3">Bread</h3>
                  <span>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </span>
                </div>
                <div className="position-relative mt-auto">
                  <img className="img-fluid" src={product2} alt={product2} />
                  <div className="product-overlay">
                    <a
                      className="btn btn-lg-square btn-outline-light rounded-circle"
                      href=""
                    >
                      <i className="fa fa-eye text-primary"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                <div className="text-center p-4">
                  <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">
                    $11 - $99
                  </div>
                  <h4 className="mb-3">Cookies</h4>
                  <span>
                    Tempor erat elitr rebum at clita dolor diam ipsum sit diam
                    amet diam et eos
                  </span>
                </div>
                <div className="position-relative mt-auto">
                  <img className="img-fluid" src={product3} alt={product3} />
                  <div className="product-overlay">
                    <a
                      className="btn btn-lg-square btn-outline-light rounded-circle"
                      href=""
                    >
                      <i className="fa fa-eye text-primary"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
