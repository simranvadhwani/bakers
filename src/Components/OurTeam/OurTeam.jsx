import React from 'react';
import team1 from '../../img/team-1.jpg';
import team2 from '../../img/team-2.jpg';
import team3 from '../../img/team-3.jpg';
import team4 from '../../img/team-4.jpg';

const OurTeam = () => {
  return (
   <>
      <div className="container-xxl py-6">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"500px"}}>
                <p className="text-primary text-uppercase mb-2">// Our Team</p>
                <h1 className="display-6 mb-4">We're Super Professional At Our Skills</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item text-center rounded overflow-hidden">
                        <img className="img-fluid" src={team1} alt={team1}/>
                        <div className="team-text">
                            <div className="team-title">
                                <h5>Full Name</h5>
                                <span>Designation</span>
                            </div>
                            <div className="team-social">
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item text-center rounded overflow-hidden">
                        <img className="img-fluid" src={team2} alt={team2}/>
                        <div className="team-text">
                            <div className="team-title">
                                <h5>Full Name</h5>
                                <span>Designation</span>
                            </div>
                            <div className="team-social">
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item text-center rounded overflow-hidden">
                        <img className="img-fluid" src={team3} alt={team3}/>
                        <div className="team-text">
                            <div className="team-title">
                                <h5>Full Name</h5>
                                <span>Designation</span>
                            </div>
                            <div className="team-social">
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item text-center rounded overflow-hidden">
                        <img className="img-fluid" src={team4} alt={team4}/>
                        <div className="team-text">
                            <div className="team-title">
                                <h5>Full Name</h5>
                                <span>Designation</span>
                            </div>
                            <div className="team-social">
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-light rounded-circle" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
   
   </>
  )
}

export default OurTeam