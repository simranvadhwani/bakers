import React from "react";
import backgroundImage from "../../img/about-1.jpg";
import { Link } from "react-router-dom";
const LogIn = () => {
  return (
    <>
      <div
        className="submain"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container-xxl py-4">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "500px" }}
            >
              <h3
                className="text-sentencecase mb-2"
                style={{ color: "#edb354" }}
              >
                LogIn to your account
              </h3>
            </div>
            <div className="row g-0 justify-content-center">
              <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                <form>
                  <div className="row g-3">
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label for="name">UserName</label>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label for="name">Password</label>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button
                        className="btn btn-primary rounded-pill py-3 px-5"
                        type="button"
                      >
                        LogIn
                      </button>
                      <Link to="/" className="nav-item nav-link active">
                      Create An Account?
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default LogIn;
