import React, { useEffect, useState } from "react";
import about1 from "../../img/about-1.jpg";
import about2 from "../../img/about-2.jpg";
import bgImage from "../../img/carousel-1.jpg";
import { Link } from "react-router-dom";
import api from "../../Services/ApiConfigurationService";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const token = localStorage.getItem("token");
  const [error, setError] = useState();
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const IncreaseQuantity = (index) => {
    const updatedCartData = [...cartData]; // Create a copy of the cart data array
    const item = updatedCartData[index]; // Get the item at the specified index
    item.quantity++; // Increment the quantity
    item.totalPrice = item.quantity * item.price; // Recalculate the total price
    // Optionally, you can update the state if needed
    setCartData(updatedCartData); // Update the state with the modified cart data
  };
  const DecreaseQuantity = (index) => {
    const updatedCartData = [...cartData]; // Create a copy of the cart data array
    const item = updatedCartData[index]; // Get the item at the specified index
    if (item.quantity > 1) {
      item.quantity--; // Decrement the quantity
      item.totalPrice = item.quantity * item.price; // Recalculate the total price
      // Optionally, you can update the state if needed
      setCartData(updatedCartData); // Update the state with the modified cart data
    }
  };
  useEffect(() => {
    if (token) {
      allProducts();
    }
  }, [token]);
  useEffect(() => {
    // Calculate total price when cartData changes
    const calculateTotalPrice = () => {
      const totalPrice = cartData.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
      setTotalPrice(totalPrice);
    };

    calculateTotalPrice();
  }, [cartData]);

  const allProducts = () => {
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
  };

  const removeProduct = async (productId) => {
    try {
      console.log(`Attempting to delete product with ID: ${productId}`);
      const response = await api.delete(`Product/deleteProducts/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);

      if (response.status === 204) {
        // Remove item from local storage cartItems
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const updatedCartItems = cartItems.filter(
          (item) => item.productId !== productId
        );
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

        // Optionally update cart length in local storage or application state
        localStorage.setItem("cartLength", updatedCartItems.length);

        // Refresh products list or perform any other necessary updates
        allProducts();
      }
    } catch (error) {
      console.error("There was a problem with the API call:", error);
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
                        <th scope="col">Remove</th>
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
                                onClick={() => DecreaseQuantity(index)}
                              >
                                <i className="fas fa-minus"></i>
                              </button>

                              <input
                                value={item.quantity}
                                type="text"
                                className="form-control form-control-sm"
                                style={{ width: "50px" }}
                              />
                              <button className="btn btn-link px-2">
                                <i
                                  className="fas fa-plus"
                                  onClick={() => IncreaseQuantity(index)}
                                ></i>
                              </button>
                            </div>
                          </td>
                          <td className="align-middle">
                            <p className="mb-0" style={{ fontWeight: "500" }}>
                              {`₹${item.price}`}
                            </p>
                          </td>
                          <td className="align-middle">
                            <div className="d-flex flex-row">
                              <button
                                className="btn btn-link px-2"
                                onClick={() => removeProduct(item.productId)}
                              >
                                <i
                                  className="fa fa-trash"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
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
                        <p className="mb-2">{`₹${totalPrice}`}</p>
                      </div>

                      <Link
                        type="button"
                        to="/shipping"
                        className="btn btn-primary btn-block btn-lg"
                      >
                        <div className="d-flex justify-content-between">
                          <span>Checkout </span>
                          <span> {`₹${totalPrice}`}</span>
                        </div>
                      </Link>
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
