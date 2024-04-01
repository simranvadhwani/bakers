import React from "react";
import about1 from "../../img/about-1.jpg";
import about2 from "../../img/about-2.jpg";
import bgImage from "../../img/carousel-1.jpg";
import { Link } from "react-router-dom";

const Cart = () => {
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
            Shopping cart summary
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <Link className="text-white" to="/home">
                  Home
                </Link>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Cart
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section class="h-100 h-custom">
        <div class="container h-100 py-5">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col" class="h5">
                        Shopping Bag
                      </th>
                      <th scope="col">Format</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="container-xxl py-6">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="row img-twice position-relative h-100">
                <div className="col-6">
                  <img
                    className="img-fluid rounded"
                    src={about1}
                    alt={about1}
                  />
                </div>
                <div className="col-6 align-self-end">
                  <img
                    className="img-fluid rounded"
                    src={about2}
                    alt={about2}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <p className="text-primary text-uppercase mb-2">
                  // Product Details
                </p>
                <h1 className="display-6 mb-4">name</h1>
                <p>discription</p>
                <div className="row g-2 mb-4">
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>
                    hii
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Custom
                    Products
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Online
                    Order
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Home
                    Delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Cart;
