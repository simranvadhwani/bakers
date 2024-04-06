import React, { useEffect } from "react";
import about1 from "../../img/about-1.jpg";
import about2 from "../../img/about-2.jpg";
import bgImage from "../../img/carousel-1.jpg";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, reset } from "../../Actions";

const Cart = () => {
  const { number, price } = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  const location = useLocation();
  const { productAddtoCart } = location.state;

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);
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
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <div className="d-flex align-items-center">
                          <img
                            src={about1}
                            className="img-fluid rounded-3"
                            style={{ width: "120px" }}
                            alt="Book"
                          />
                          <div className="flex-column ms-4">
                            <p className="mb-2">{productAddtoCart.name}</p>
                            <p className="mb-0">
                              {productAddtoCart.discription}
                            </p>
                          </div>
                        </div>
                      </th>
                      <td className="align-middle">
                        <div className="d-flex flex-row">
                          <button
                            className="btn btn-link px-2"
                            onClick={() =>
                              dispatch(decNumber(productAddtoCart.price))
                            }
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
                            onClick={() =>
                              dispatch(incNumber(productAddtoCart.price))
                            }
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td className="align-middle">
                        <p className="mb-0" style={{ fontWeight: "500" }}>
                          {/* {`₹${productAddtoCart.price}`} */}
                          {`₹${price}`}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* <div
              className="card shadow-2-strong mb-5 mb-lg-0"
              style={{ borderRadius: "16px" }}
            >
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
                    <form>
                      <div className="d-flex flex-row pb-3">
                        <div className="d-flex align-items-center pe-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radioNoLabel"
                            id="radioNoLabel1v"
                            value=""
                            aria-label="..."
                            checked
                          />
                        </div>
                        <div className="rounded border w-100 p-3">
                          <p className="d-flex align-items-center mb-0">
                            <i className="fab fa-cc-mastercard fa-2x text-dark pe-2"></i>
                            Credit Card
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row pb-3">
                        <div className="d-flex align-items-center pe-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radioNoLabel"
                            id="radioNoLabel2v"
                            value=""
                            aria-label="..."
                          />
                        </div>
                        <div className="rounded border w-100 p-3">
                          <p className="d-flex align-items-center mb-0">
                            <i className="fab fa-cc-visa fa-2x fa-lg text-dark pe-2"></i>
                            Debit Card
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="d-flex align-items-center pe-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radioNoLabel"
                            id="radioNoLabel3v"
                            value=""
                            aria-label="..."
                          />
                        </div>
                        <div className="rounded border w-100 p-3">
                          <p className="d-flex align-items-center mb-0">
                            <i className="fab fa-cc-paypal fa-2x fa-lg text-dark pe-2"></i>
                            PayPal
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-6">
                    <div className="row">
                      <div className="col-12 col-xl-6">
                        <div className="form-outline mb-4 mb-xl-5">
                          <input
                            type="text"
                            id="typeName"
                            class="form-control form-control-lg"
                            siez="17"
                            placeholder="John Smith"
                          />
                          <label className="form-label" for="typeName">
                            Name on card
                          </label>
                        </div>

                        <div className="form-outline mb-4 mb-xl-5">
                          <input
                            type="text"
                            id="typeExp"
                            className="form-control form-control-lg"
                            placeholder="MM/YY"
                            size="7"
                            id1="exp"
                            minlength="7"
                            maxlength="7"
                          />
                          <label className="form-label" for="typeExp">
                            Expiration
                          </label>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6">
                        <div className="form-outline mb-4 mb-xl-5">
                          <input
                            type="text"
                            id="typeText"
                            className="form-control form-control-lg"
                            siez="17"
                            placeholder="1111 2222 3333 4444"
                            minlength="19"
                            maxlength="19"
                          />
                          <label className="form-label" for="typeText">
                            Card Number
                          </label>
                        </div>

                        <div className="form-outline mb-4 mb-xl-5">
                          <input
                            type="password"
                            id="typeText"
                            className="form-control form-control-lg"
                            placeholder="&#9679;&#9679;&#9679;"
                            size="1"
                            minlength="3"
                            maxlength="3"
                          />
                          <label className="form-label" for="typeText">
                            Cvv
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div
                      className="d-flex justify-content-between"
                      style={{ fontWeight: "500" }}
                    >
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2">$23.49</p>
                    </div>

                    <div
                      className="d-flex justify-content-between"
                      style={{ fontWeight: "500" }}
                    >
                      <p className="mb-0">Shipping</p>
                      <p className="mb-0">$2.99</p>
                    </div>

                    <hr className="my-4" />

                    <div
                      className="d-flex justify-content-between mb-4"
                      style={{ fontWeight: "500" }}
                    >
                      <p className="mb-2">Total (tax included)</p>
                      <p className="mb-2">$26.48</p>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary btn-block btn-lg"
                    >
                      <div className="d-flex justify-content-between">
                        <span>Checkout</span>
                        <span>$26.48</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
