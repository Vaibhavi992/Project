import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function Gallery() {
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
                        <h1 className="text-white display-3 mt-lg-5">Gallery</h1>
                        <div className="d-inline-flex align-items-center text-white">
                            <p className="m-0"><a className="text-white" href>Home</a></p>
                            <i className="fa fa-circle px-3" />
                            <p className="m-0">Gallery</p>
                        </div>
                    </div>
                </div>
                {/* Header End */}
                {/* Portfolio Start */}
                <div className="container-fluid py-5 px-0">
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <h1 className="section-title position-relative text-center mb-5">Delicious Ice Cream Made From Our Very Own Organic Milk</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <ul className="list-inline mb-4 pb-2" id="portfolio-flters">
                                    <li className="btn btn-sm btn-outline-primary m-1 active" data-filter="*">All</li>
                                    <li className="btn btn-sm btn-outline-primary m-1" data-filter=".first">Cone</li>
                                    <li className="btn btn-sm btn-outline-primary m-1" data-filter=".second">Vanilla</li>
                                    <li className="btn btn-sm btn-outline-primary m-1" data-filter=".third">Chocolate</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row m-0 portfolio-container">
                            <div className="col-lg-4 col-md-6 p-0 portfolio-item first">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="Assets_Website/img/portfolio-1.jpg" alt />
                                    <a className="portfolio-btn" href="Assets_Website/img/portfolio-1.jpg" data-lightbox="portfolio">
                                        <i className="fa fa-plus text-primary" style={{ fontSize: 60 }} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 p-0 portfolio-item second">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="Assets_Website/img/portfolio-2.jpg" alt />
                                    <a className="portfolio-btn" href="Assets_Website/img/portfolio-2.jpg" data-lightbox="portfolio">
                                        <i className="fa fa-plus text-primary" style={{ fontSize: 60 }} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 p-0 portfolio-item third">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="Assets_Website/img/portfolio-3.jpg" alt />
                                    <a className="portfolio-btn" href="Assets_Website/img/portfolio-3.jpg" data-lightbox="portfolio">
                                        <i className="fa fa-plus text-primary" style={{ fontSize: 60 }} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 p-0 portfolio-item first">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="Assets_Website/img/portfolio-4.jpg" alt />
                                    <a className="portfolio-btn" href="Assets_Website/img/portfolio-4.jpg" data-lightbox="portfolio">
                                        <i className="fa fa-plus text-primary" style={{ fontSize: 60 }} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 p-0 portfolio-item second">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="Assets_Website/img/portfolio-5.jpg" alt />
                                    <a className="portfolio-btn" href="Assets_Website/img/portfolio-5.jpg" data-lightbox="portfolio">
                                        <i className="fa fa-plus text-primary" style={{ fontSize: 60 }} />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 p-0 portfolio-item third">
                                <div className="position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="Assets_Website/img/portfolio-6.jpg" alt />
                                    <a className="portfolio-btn" href="Assets_Website/img/portfolio-6.jpg" data-lightbox="portfolio">
                                        <i className="fa fa-plus text-primary" style={{ fontSize: 60 }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Portfolio End */}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Gallery
