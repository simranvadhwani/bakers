import React from 'react'

const Services = () => {
  return (
   <>
    <div className="container-xxl py-6">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="text-primary text-uppercase mb-2">// Our Services</p>
                    <h1 className="display-6 mb-4">What Do We Offer For You?</h1>
                    <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <div className="row gy-5 gx-4">
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-bread-slice text-white"></i>
                                </div>
                                <h5 className="mb-0">Quality Products</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-birthday-cake text-white"></i>
                                </div>
                                <h5 className="mb-0">Custom Products</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-cart-plus text-white"></i>
                                </div>
                                <h5 className="mb-0">Online Order</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                            <div className="d-flex align-items-center mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-truck text-white"></i>
                                </div>
                                <h5 className="mb-0">Home Delivery</h5>
                            </div>
                            <span>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row img-twice position-relative h-100">
                        <div className="col-6">
                            <img className="img-fluid rounded" src="img/service-1.jpg" alt=""/>
                        </div>
                        <div className="col-6 align-self-end">
                            <img className="img-fluid rounded" src="img/service-2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Services