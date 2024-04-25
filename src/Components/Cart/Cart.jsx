import React, { useEffect, useState } from "react";
import about1 from "../../img/about-1.jpg";
import about2 from "../../img/about-2.jpg";
import bgImage from "../../img/carousel-1.jpg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementItem, decrementItem } from "../../Actions";
import api from "../../Services/ApiConfigurationService";
const Cart = () => {
  const token = localStorage.getItem("token");
  const [error, setError] = useState();
  const { items, totalPrice } = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  const [cartData, setCartData] = useState([]);
  const handleDecrement = (item) => {
    dispatch(decrementItem(item.id));
  };

  const handleIncrement = (item) => {
    dispatch(incrementItem(item.id));
  };

  const calculateTotalPrice = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };
  useEffect(() => {
    if (token) {
      api
        .get(`Product/getCartProducts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setCartData(response.data);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [token]);

  console.log(cartData, "cartData");
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

      {cartData.length > 0 ? (
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
                      {cartData.map((item, index) => (
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
                                <p className="mb-2">{item.name}</p>
                                <p className="mb-0">{item.discription}</p>
                              </div>
                            </div>
                          </th>
                          <td className="align-middle">
                            <div className="d-flex flex-row">
                              <button
                                className="btn btn-link px-2"
                                onClick={() => handleDecrement(item)}
                              >
                                <i className="fas fa-minus"></i>
                              </button>

                              <input
                                value={item.quantity}
                                type="text"
                                className="form-control form-control-sm"
                                style={{ width: "50px" }}
                              />
                              <button
                                className="btn btn-link px-2"
                                onClick={() => handleIncrement(item)}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                          </td>
                          <td className="align-middle">
                            <p className="mb-0" style={{ fontWeight: "500" }}>
                              {`₹${item.price}`}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-5 mb-lg-0">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-12 col-xl-12">
                      <hr className="my-4" />

                      <div
                        className="d-flex justify-content-between mb-4"
                        style={{ fontWeight: "500" }}
                      >
                        <p className="mb-2">Total Amount</p>
                        <p className="mb-2">{`₹${calculateTotalPrice()}`}</p>
                      </div>

                      <button
                        type="button"
                        className="btn btn-primary btn-block btn-lg"
                      >
                        <div className="d-flex justify-content-between">
                          <span>Checkout </span>
                          <span> ₹26.48</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="col-lg-12">
          <div className="h-100">
            <h1
              className="display-6 mb-4"
              style={{
                textAlign: "center",
                color: "",
              }}
            >
              You don't have any products in cart.
              <span style={{ fontSize: "27px" }}>
                <Link to="/products"> Go for Shopping.</Link>
              </span>
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
