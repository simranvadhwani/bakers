import React, { useState, useEffect } from "react";
import service1 from "../../img/service-1.jpg";
import service2 from "../../img/service-2.jpg";
import { useNavigate } from "react-router-dom";
import bgImage from "../../img/carousel-1.jpg";

const Services = () => {
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
        className="container-fluid  py-6 wow fadeIn"
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
            Services
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
                Services
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-6">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="text-primary text-uppercase mb-2">
                // Our Services
              </p>
              <h1 className="display-6 mb-4">What Do We Offer For You?</h1>
              <p className="mb-5">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="row gy-5 gx-4">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                      <i className="fa fa-bread-slice text-white"></i>
                    </div>
                    <h5 className="mb-0">Quality Products</h5>
                  </div>
                  <span>
                    Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                  </span>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                      <i className="fa fa-birthday-cake text-white"></i>
                    </div>
                    <h5 className="mb-0">Custom Products</h5>
                  </div>
                  <span>
                    Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                  </span>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                      <i className="fa fa-cart-plus text-white"></i>
                    </div>
                    <h5 className="mb-0">Online Order</h5>
                  </div>
                  <span>
                    Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                  </span>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                      <i className="fa fa-truck text-white"></i>
                    </div>
                    <h5 className="mb-0">Home Delivery</h5>
                  </div>
                  <span>
                    Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="row img-twice position-relative h-100">
                <div className="col-6">
                  <img
                    className="img-fluid rounded"
                    src={service1}
                    alt={service1}
                  />
                </div>
                <div className="col-6 align-self-end">
                  <img
                    className="img-fluid rounded"
                    src={service2}
                    alt={service2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
