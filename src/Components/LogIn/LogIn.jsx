import React, { useState } from "react";
import backgroundImage from "../../img/about-1.jpg";
import { Link} from "react-router-dom";
import {useForm} from "react-hook-form";
const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();
  const [isLogin, setIsLogin] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    setIsLogin(true);
  };
 
  return (
    <>
      <div
        className="submain"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container-xxl py-6">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "500px" }}
            >
              <h3 className="text-uppercase mb-2" style={{ color: "#faeded" }}>
                Log In to your Account
              </h3>
            </div>
            <div className="row g-0 justify-content-center">
              <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row g-3">
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          placeholder="User Name"
                          {...register("username",{required:true})}
                        />
                        <label>UserName</label>
                      </div>
                      {errors.username && (
                          <p className="text-danger">User Name is Required</p>
                        )}
                    </div>

                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          {...register("password", {
                            required: true,
                            minLength: 6,
                          })}
                        />
                        <label htmlFor="password">Password</label>
                        {errors.password && (
                          <p className="text-danger">
                            Password is required and must be at least 6
                            characters long
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button
                        className="btn btn-primary rounded-pill py-3 px-5"
                        type="submit"
                      >
                        LogIn
                      </button>
                      <Link
                        to="/register"
                        className="nav-item nav-link active mt-3"
                        style={{ color: "#faeded" }}
                      >
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
      {/* Alert for successful registration */}
      <div className="col-md-4 offset-md-4 mt-3">
        {isLogin && isSubmitted && (
          <div className="alert alert-success">LogIn successful!</div>
        )}
      </div>
    </>
  );
};

export default LogIn;
