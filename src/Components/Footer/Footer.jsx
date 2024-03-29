import React from "react";
import product1 from "../../img/product-1.jpg";
import product2 from "../../img/product-2.jpg";
import product3 from "../../img/product-3.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  const products = [product1, product2, product3];
  return (
    <>
      <div
        className="container-fluid bg-dark text-light footer my-6 mb-0 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Office Address</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>123 Street, New
                York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-1"
                  href=""
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-1"
                  href=""
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-1"
                  href=""
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-0"
                  href=""
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <Link className="btn btn-link" to="/aboutus">
                About Us
              </Link>
              <Link className="btn btn-link" to="/contactus">
                Contact Us
              </Link>
              <Link className="btn btn-link" to="/services">
                Our Services
              </Link>
              <Link className="btn btn-link" to="/products">
                Products
              </Link>
              <Link className="btn btn-link" to="/ourteam">
                Our Team
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Photo Gallery</h4>
              <div className="row g-2">
                {products.map((p, index) => (
                  <div className="col-4" key={index}>
                    <img
                      className="img-fluid bg-light rounded p-1"
                      src={p}
                      alt={`product-${index}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
