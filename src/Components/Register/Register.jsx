import React, { useState } from "react";
import backgroundImage from "../../img/about-1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../Services/ApiConfigurationService";

const Register = () => {
  const navigate = useNavigate(); // Get the history object from React Router
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  const [isRegistered, setIsRegistered] = useState(false);
  const [registerError, setRegisterError] = useState(null);
  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await api.post("Account/register", data);
      setIsRegistered(true);
      // Redirect to login page after successful registration
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status === 500) {
        setRegisterError(
          "User creation failed! Please check user details and try again."
        );
      } else {
        setRegisterError(
          "An unexpected error occurred. Please try again later."
        );
      }
    } finally {
      // Reset loading state
      setIsRegistered(false);
    }
  };
  return (
    <>
      <div
        className="submain"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "500px" }}
            >
              <h3
                className="text-sentencecase mb-2"
                style={{ color: "#faeded" }}
              >
                Registration
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
                          autoComplete="off"
                          {...register("username", {
                            required: true,
                          })}
                        />
                        <label htmlFor="username">UserName</label>
                        {errors.username && (
                          <p className="text-danger">User Name is Required</p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                          })}
                        />
                        <label htmlFor="email">Email</label>
                        {errors.email && (
                          <p className="text-danger">Invalid email address</p>
                        )}
                      </div>
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
                        Sign Up
                      </button>
                      <Link
                        to="/login"
                        className="nav-item nav-link active mt-3 font-weight-bold"
                        style={{ color: "#faeded" }}
                      >
                        Already Have An Account? Sign In
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
        {isSubmitted && !isRegistered && !registerError && (
          <div className="alert alert-success">User created successfully!</div>
        )}
        {registerError && (
          <div className="alert alert-danger">{registerError}</div>
        )}
      </div>
    </>
  );
};

export default Register;
