import React from 'react'

const Products = () => {
  return (
    <>
     <div className="container-xxl bg-light my-6 py-6 pt-0">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "500px"}}>
                <p className="text-primary text-uppercase mb-2">// Bakery Products</p>
                <h1 className="display-6 mb-4">Explore The Categories Of Our Bakery Products</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                        <div className="text-center p-4">
                            <div className="d-inline-block border border-primary rounded-pill px-3 mb-3">$11 - $99</div>
                            <h3 className="mb-3">Cake</h3>
                            <span>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</span>
                        </div>
                        <div className="position-relative mt-auto">
                            <img className="img-fluid" src="img/product-1.jpg" alt=""/>
                            <div className="product-overlay">
                                <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-eye text-primary"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                        <div className="text-center p-4">
                            <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">$11 - $99</div>
                            <h3 className="mb-3">Bread</h3>
                            <span>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</span>
                        </div>
                        <div className="position-relative mt-auto">
                            <img className="img-fluid" src="img/product-2.jpg" alt=""/>
                            <div className="product-overlay">
                                <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-eye text-primary"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                        <div className="text-center p-4">
                            <div className="d-inline-block border border-primary rounded-pill pt-1 px-3 mb-3">$11 - $99</div>
                            <h4 className="mb-3">Cookies</h4>
                            <span>Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos</span>
                        </div>
                        <div className="position-relative mt-auto">
                            <img className="img-fluid" src="img/product-3.jpg" alt=""/>
                            <div className="product-overlay">
                                <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-eye text-primary"></i></a>
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

export default Products