import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Experience = () => {
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
      <div className="container-xxl py-6">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-certificate fa-4x text-primary mb-4"></i>
                <p className="mb-2">Years Experience</p>
                <h1 className="display-5 mb-0" data-toggle="counter-up">
                  50
                </h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.3s">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-users fa-4x text-primary mb-4"></i>
                <p className="mb-2">Skilled Professionals</p>
                <h1 className="display-5 mb-0" data-toggle="counter-up">
                  175
                </h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-bread-slice fa-4x text-primary mb-4"></i>
                <p className="mb-2">Total Products</p>
                <h1 className="display-5 mb-0" data-toggle="counter-up">
                  135
                </h1>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.7s">
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className="fa fa-cart-plus fa-4x text-primary mb-4"></i>
                <p className="mb-2">Order Everyday</p>
                <h1 className="display-5 mb-0" data-toggle="counter-up">
                  9357
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
