import about1 from "../../img/about-1.jpg";
import about2 from "../../img/about-2.jpg";
import bgImage from "../../img/carousel-1.jpg";
import { Link, useLocation } from "react-router-dom";
import api from "../../Services/ApiConfigurationService";
import React, { useState, useEffect } from "react";

const ViewProduct = () => {
  const token = localStorage.getItem("token");
  const [error, setError] = useState(null);
  const location = useLocation();
  const { state } = location;
  const [cartItemCount, setCartItemCount] = useState(0);

  // Try to get productDetails from state, fallback to localStorage
  const productDetails =
    state?.productDetails || JSON.parse(localStorage.getItem("productDetails"));

  const [Quantity, setQuantity] = useState(1);

  const IncreseQuantity = () => {
    setQuantity(Quantity + 1);
  };

  const DecreseQuantity = () => {
    if (Quantity > 1) {
      setQuantity(Quantity - 1);
    }
  };

  const AddToCart = () => {
    if (productDetails) {
      // Retrieve existing cart items from local storage, or initialize an empty array if none exist
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      // Check if the product already exists in the cart
      const existingItemIndex = cartItems.findIndex(
        (item) => item.productId === productDetails.productId
      );

      let newCartItem; // Define newCartItem outside the if-else block

      if (existingItemIndex !== -1) {
        // Update quantity if the product already exists
        cartItems[existingItemIndex].Quantity = Quantity;
      } else {
        // Create a new cart item object if it doesn't exist in the cart
        newCartItem = {
          productId: productDetails.productId,
          Name: productDetails.name,
          Description: productDetails.description,
          Quantity: Quantity,
          Price: productDetails.price,
        };

        // Add the new cart item to the cart items array
        cartItems.push(newCartItem);
      }

      // Store the updated cart items array back to local storage
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      // Update cart length in local storage
      const updatedCartLength = cartItems.length;
      localStorage.setItem("cartLength", updatedCartLength);

      // Update cartItemCount state in Navbar component
      setCartItemCount(updatedCartLength);

      // Make an API call to update the cart on the server
      if (newCartItem) {
        // Ensure newCartItem is defined before making the API call
        api
          .post(`Product/addProductToCart`, newCartItem, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            // Optionally, update cart length in local storage or application state
            localStorage.setItem("cartLength", response.data.cartLength);
          })
          .catch((error) => {
            setError(error.message);
          });
      }
    } else {
      console.error("productDetails is null");
    }
  };
  useEffect(() => {
    console.log("productDetails updated:", productDetails);
  }, [productDetails]);

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
              <li className="breadcrumb-item">
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

                <h1 className="display-6 mb-4">{productDetails?.name}</h1>
                <p>{productDetails?.discription}</p>
                <div className="row g-2 mb-4">
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>
                    {`₹ ${productDetails?.price}`}
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
                  <div className="table-responsive">
                    <table className="table">
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
                                onClick={DecreseQuantity}
                              >
                                <i className="fas fa-minus"></i>
                              </button>

                              <input
                                value={Quantity}
                                type="text"
                                className="form-control form-control-sm"
                                style={{ width: "50px" }}
                              />

                              <button
                                className="btn btn-link px-2"
                                onClick={IncreseQuantity}
                              >
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                          </td>
                          <td className="align-middle">
                            <Link
                              className="btn btn-primary rounded-pill py-3 px-5"
                              onClick={AddToCart}
                            >
                              Add To Cart{" "}
                              <i className="fas fa-shopping-cart"></i>
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
