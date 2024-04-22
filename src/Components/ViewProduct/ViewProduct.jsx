import about1 from "../../img/about-1.jpg";
import about2 from "../../img/about-2.jpg";
import bgImage from "../../img/carousel-1.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, reset, updateCartLength } from "../../Actions";
import api from "../../Services/ApiConfigurationService";
import React, { useState, useEffect, createContext } from "react";

const ViewProduct = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { number, price } = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  const location = useLocation();
  const { state } = location;
  const productDetails = state ? state.productDetails : null;
  const [error, setError] = useState();

  const AddToCart = () => {
    if (productDetails !== null) {
      api
        .post(
          `Product/addProductToCart`,
          {
            productId: productDetails.productId,
            Name: productDetails.name,
            Quantity: number,
            Price: productDetails.price,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          debugger;
          dispatch(updateCartLength(response.data.cartLength));
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };
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
            Product Details
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li class="breadcrumb-item">
                <Link className="text-white" to="/products">
                  Products
                </Link>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Product Details
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-6">
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
                <h1 className="display-6 mb-4">{productDetails.name}</h1>
                <p>{productDetails.discription}</p>
                <div className="row g-2 mb-4">
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>
                    {`₹ ${productDetails.price}`}
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
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="align-middle">
                            <div className="d-flex flex-row">
                              <button
                                className="btn btn-link px-2"
                                onClick={() => dispatch(decNumber())}
                              >
                                <i className="fas fa-minus"></i>
                              </button>

                              <input
                                value={number}
                                type="text"
                                className="form-control form-control-sm"
                                style={{ width: "50px" }}
                              />

                              <button
                                className="btn btn-link px-2"
                                onClick={() => dispatch(incNumber())}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                          </td>
                          <td className="align-middle">
                            <Link
                              className="btn btn-primary rounded-pill py-3 px-5"
                              onClick={() => AddToCart()}
                            >
                              Add To Cart
                              <i class="fas fa-shopping-cart"></i>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default ViewProduct;
