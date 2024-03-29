import React, { useState, useEffect } from "react";
import product1 from "../../img/product-1.jpg";
import bgImage from "../../img/carousel-1.jpg";
import { useNavigate } from "react-router-dom";
import api from "../../Services/ApiConfigurationService";

const Products = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    // Check if token exists in local storage
    if (token) {
      setLoggedIn(true);
    } else {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      api
        .get("Product/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [loggedIn]);

  console.log(products);
  return (
    <>
      <div
        className="container-fluid py-6 wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          marginBottom: "6rem",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
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
            {products.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div
                  className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100"
                  key={index}
                >
                  <div className="text-center p-4">
                    <div className="d-inline-block border border-primary rounded-pill px-3 mb-3">
                      {`₹ ${item.price}`}
                      {/* Use curly braces to interpolate JavaScript expressions */}
                    </div>
                    <h3 className="mb-3">{item.name}</h3>
                    <span>{item.discription}</span>
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
