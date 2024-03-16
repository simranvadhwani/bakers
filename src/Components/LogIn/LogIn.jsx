import React from "react";

const LogIn = () => {
  return (
    <>
      <div className="main">
        <div className="container-xxl py-6">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "500px" }}
            >
              <h3 className="text-primary text-uppercase mb-2">LogIn</h3>
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
