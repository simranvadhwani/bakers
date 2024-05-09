import React, { useEffect, useState } from "react";
import "./Shipping.css";
import { useForm } from "react-hook-form";
import api from "../../Services/ApiConfigurationService";
const Shipping = () => {
  const [error, setError] = useState();
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();
  const onSubmit = async () => {};
  useEffect(() => {
    api
      .get(`Cart/getCartData`)
      .then((response) => {
        console.log(response, "sh");
        setCartData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

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

  return (
    <>
      <div className="rowsh m-5 container">
        <div className="col-75sh">
          <div className="containersh">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="rowsh">
                <div className="col-50sh">
                  <h3>Billing Address</h3>
                  <label htmlFor="fname">
                    <i className="fa fa-user" /> Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    {...register("username", { required: true })}
                  />

                  <label htmlFor="email">
                    <i className="fa fa-envelope" /> Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                  />
                  <label htmlFor="adr">
                    <i className="fa fa-address-card-o" /> Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                  />
                  <label htmlFor="city">
                    <i className="fa fa-institution" /> City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                  />
                  <div className="rowsh">
                    <div className="col-50sh">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                      />
                    </div>
                    <div className="col-50sh">
                      <label htmlFor="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder={10001}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-50sh">
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa" style={{ color: "navy" }} />
                    <i className="fas fa-cc-amex" style={{ color: "blue" }} />
                    <i
                      className="fas fa-cc-mastercard"
                      style={{ color: "red" }}
                    />
                    <i
                      className="fa fa-cc-discover"
                      style={{ color: "orange" }}
                    />
                  </div>
                  <label htmlFor="cname">Name on Card</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John More Doe"
                  />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  />
                  <div className="rowsh">
                    <div className="col-50sh">
                      <label htmlFor="expyear">Exp Year</label>
                      <input
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder={2018}
                      />
                    </div>
                    <div className="col-50sh">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder={352}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input
                  type="checkbox"
                  defaultChecked="checked"
                  name="sameadr"
                />{" "}
                Shipping address same as billing
              </label>
              <input
                type="submit"
                defaultValue="Continue to checkout"
                className="btnsh"
              />
            </form>
          </div>
        </div>
        <div className="col-25sh">
          <div className="container">
            <h4>Cart</h4>
            <hr />
            {cartData.map((item, index) => (
              <p>
                <a href="#">{item.name}</a>{" "}
                <span className="pricesh">{`₹${item.price}`}</span>
              </p>
            ))}
            <hr />
            <p>
              Total{" "}
              <span className="pricesh" style={{ color: "black" }}>
                <b>$30</b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
