import React, { useEffect, useState } from "react";
import team1 from "../../img/team-1.jpg";
import team2 from "../../img/team-2.jpg";
import team3 from "../../img/team-3.jpg";
import team4 from "../../img/team-4.jpg";
import { useNavigate, Link } from "react-router-dom";
import bgImage from "../../img/carousel-1.jpg";

const OurTeam = () => {
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
            Our Team
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link className="text-white" to="/home">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Our Team
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-6">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p className="text-primary text-uppercase mb-2">// Our Team</p>
            <h1 className="display-6 mb-4">
              We're Super Professional At Our Skills
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <img className="img-fluid" src={team1} alt={team1} />
                <div className="team-text">
                  <div className="team-title">
                    <h5>Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social">
                    <a
                      className="btn btn-square btn-light rounded-circle"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-light rounded-circle"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-light rounded-circle"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <img className="img-fluid" src={team2} alt={team2} />
                <div className="team-text">
                  <div className="team-title">
                    <h5>Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social">
                    <a
                      className="btn btn-square btn-light rounded-circle"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-light rounded-circle"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-light rounded-circle"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <img className="img-fluid" src={team3} alt={team3} />
                <div className="team-text">
                  <div className="team-title">
                    <h5>Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social">
                    <a
                      className="btn btn-square btn-light rounded-circle"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-light rounded-circle"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-light rounded-circle"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <img className="img-fluid" src={team4} alt={team4} />
                <div className="team-text">
                  <div className="team-title">
                    <h5>Full Name</h5>
                    <span>Designation</span>
                  </div>
                  <div className="team-social">
                    <a
                      className="btn btn-square btn-light rounded-circle"
                      href=""
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-square btn-light rounded-circle"
                      href=""
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-square btn-light rounded-circle"
                      href=""
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
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

export default OurTeam;
