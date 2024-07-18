import React from 'react'
import Header from '../Component/Header'
import { Helmet } from 'react-helmet'
import Footer from '../Component/Footer'

function Product() {
    return (
        <div>
            <Helmet>
                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
                <script src="Assets_Website/lib/easing/easing.min.js"></script>
                <script src="Assets_Website/lib/waypoints/waypoints.min.js"></script>
                <script src="Assets_Website/lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="Assets_Website/lib/isotope/isotope.pkgd.min.js"></script>
                <script src="Assets_Website/lib/lightbox/js/lightbox.min.js"></script>

                <script src="Assets_Website/mail/jqBootstrapValidation.min.js"></script>
                <script src="Assets_Website/mail/contact.js"></script>

                <script src="Assets_Website/js/main.js"></script>
            </Helmet>
            <Header></Header>
            <div>
                {/* Header Start */}
                <div className="jumbotron jumbotron-fluid page-header" style={{ marginBottom: 90 }}>
                    <div className="container text-center py-5">
                        <h1 className="text-white display-3 mt-lg-5">Product</h1>
                        <div className="d-inline-flex align-items-center text-white">
                            <p className="m-0"><a className="text-white" href>Home</a></p>
                            <i className="fa fa-circle px-3" />
                            <p className="m-0">Product</p>
                        </div>
                    </div>
                </div>
                {/* Header End */}
                {/* Products Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h1 className="section-title position-relative text-center mb-5">Best Prices We Offer For Ice Cream Lovers</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 pb-2">
                                <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                    <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                        <h4 className="font-weight-bold text-white mb-0">$99</h4>
                                    </div>
                                    <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                        <img className="rounded-circle w-100 h-100" src="Assets_Website/img/product-1.jpg" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                                    <a href className="btn btn-sm btn-secondary">Order Now</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 pb-2">
                                <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                    <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                        <h4 className="font-weight-bold text-white mb-0">$99</h4>
                                    </div>
                                    <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                        <img className="rounded-circle w-100 h-100" src="Assets_Website/img/product-2.jpg" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                                    <a href className="btn btn-sm btn-secondary">Order Now</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 pb-2">
                                <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                    <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                        <h4 className="font-weight-bold text-white mb-0">$99</h4>
                                    </div>
                                    <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                        <img className="rounded-circle w-100 h-100" src="Assets_Website/img/product-3.jpg" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                                    <a href className="btn btn-sm btn-secondary">Order Now</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 pb-2">
                                <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                    <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                        <h4 className="font-weight-bold text-white mb-0">$99</h4>
                                    </div>
                                    <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                        <img className="rounded-circle w-100 h-100" src="Assets_Website/img/product-4.jpg" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                                    <a href className="btn btn-sm btn-secondary">Order Now</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 pb-2">
                                <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                    <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                        <h4 className="font-weight-bold text-white mb-0">$99</h4>
                                    </div>
                                    <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                        <img className="rounded-circle w-100 h-100" src="Assets_Website/img/product-5.jpg" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                                    <a href className="btn btn-sm btn-secondary">Order Now</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 pb-2">
                                <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                    <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                        <h4 className="font-weight-bold text-white mb-0">$99</h4>
                                    </div>
                                    <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                        <img className="rounded-circle w-100 h-100" src="Assets_Website/img/product-1.jpg" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                                    <a href className="btn btn-sm btn-secondary">Order Now</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 pb-2">
                                <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                    <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                        <h4 className="font-weight-bold text-white mb-0">$99</h4>
                                    </div>
                                    <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                        <img className="rounded-circle w-100 h-100" src="Assets_Website/img/product-2.jpg" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                                    <a href className="btn btn-sm btn-secondary">Order Now</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-4 pb-2">
                                <div className="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                                    <div className="bg-primary mt-n5 py-3" style={{ width: 80 }}>
                                        <h4 className="font-weight-bold text-white mb-0">$99</h4>
                                    </div>
                                    <div className="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3" style={{ width: 150, height: 150 }}>
                                        <img className="rounded-circle w-100 h-100" src="Assets_Website/img/product-3.jpg" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <h5 className="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                                    <a href className="btn btn-sm btn-secondary">Order Now</a>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <a href className="btn btn-primary py-3 px-5">Load More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Products End */}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Product
