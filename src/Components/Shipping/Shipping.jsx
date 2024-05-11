import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Shipping.css";
import { useForm } from "react-hook-form";
import api from "../../Services/ApiConfigurationService";
import useRazorpay from "react-razorpay";
const Shipping = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [Razorpay] = useRazorpay();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();
  const onSubmit = (loginData) => {
    try {
      // Set loading state
      //setIsLogin(true);
      const response = api.post("Customer/addCustomerData", loginData);
      //const token = response.data.token;
      // Store the token in local storage
      // localStorage.setItem("token", token);
      // setLoggedIn(true);
      // setLoginError("Login Successful!");
      // navigate("/home");
      handlePayment();
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setIsLogin(false);
        setLoginError("Invalid customer data.");
      } else {
        setLoginError("An error occurred while processing the request.");
      }
    } finally {
      // Reset loading state
      setIsLogin(false);
    }
  };
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
      console.log(cartData, "cart");
      const totalPrice = cartData.reduce(
        (total, item) => total + item.price,
        0
      );
      setTotalPrice(totalPrice);
    };

    calculateTotalPrice();
  }, [cartData]);
  const initiatePayment = async () => {
    try {
      // Your API call to initiate payment and get orderId
      const response = await api.post(`/Payment/order`, { amount: totalPrice });
      setOrderId(response.data);
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };
  const handlePayment = async () => {
    await initiatePayment();
    try {
      const options = {
        key: "rzp_test_4KHnRiUgIeNaKb", // Enter your Razorpay key
        amount: totalPrice * 100, // Amount is in paise
        currency: "INR",
        name: "Protocolix",
        description: "Test Payment",
        order_id: orderId,
        handler: function (response) {
          console.log(response);
          // Handle success
          alert("Payment successful");
          //Insert into order table
          navigate("/payment");
        },
        prefill: {
          name: "Simran V",
          email: "vadhwanisimran@gmail.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const razorpay = new Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error handling payment:", error);
    }
  };
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
                    {...register("Name", { required: true })}
                  />

                  <label htmlFor="email">
                    <i className="fa fa-envelope" /> Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="Email"
                    placeholder="john@example.com"
                    {...register("Email", { required: true })}
                  />
                  <label htmlFor="MobileNo">
                    <i className="fa fa-phone" /> Mobile No
                  </label>
                  <input
                    type="text"
                    id="MobileNo"
                    name="MobileNo"
                    placeholder="5257892578"
                    {...register("MobileNo", { required: true })}
                  />
                  <label htmlFor="adr">
                    <i className="fa fa-address-card-o" /> Address
                  </label>
                  <input
                    type="text"
                    id="adr"
                    name="Address"
                    placeholder="542 W. 15th Street"
                    {...register("Address", { required: true })}
                  />
                  <label htmlFor="city">
                    <i className="fa fa-institution" /> City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="City"
                    placeholder="New York"
                    {...register("City", { required: true })}
                  />
                  <div className="rowsh">
                    <div className="col-50sh">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="State"
                        placeholder="NY"
                        {...register("State", { required: true })}
                      />
                    </div>
                    <div className="col-50sh">
                      <label htmlFor="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="Zip"
                        placeholder={10001}
                        {...register("Zip", { required: true })}
                      />
                    </div>
                  </div>
                </div>
              </div>
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
                <b>{`₹${totalPrice}`}</b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
