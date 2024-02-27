import React from 'react'

const AboutUs = () => {
  return (
    <>
     <div className="container-xxl py-6">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row img-twice position-relative h-100">
                        <div className="col-6">
                            <img className="img-fluid rounded" src="img/about-1.jpg" alt=""/>
                        </div>
                        <div className="col-6 align-self-end">
                            <img className="img-fluid rounded" src="img/about-2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                        <p className="text-primary text-uppercase mb-2">// About Us</p>
                        <h1 className="display-6 mb-4">We Bake Every Item From The Core Of Our Hearts</h1>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <div className="row g-2 mb-4">
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-2"></i>Quality Products
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-2"></i>Custom Products
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-2"></i>Online Order
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-check text-primary me-2"></i>Home Delivery
                            </div>
                        </div>
                        <a className="btn btn-primary rounded-pill py-3 px-5" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    
    
    
    </>
  )
}

export default AboutUs