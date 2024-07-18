import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


function AHeader({title}) {
    const redirect=useNavigate();
    
    useEffect(()=>{
        if(!(localStorage.getItem('aid')))
        {
            redirect('/adminlogin');
        }
    })


    const adminlogout=()=>{
        localStorage.removeItem('aid');
        localStorage.removeItem('aname');
        toast.success('Logout Success');
        redirect('/adminlogin');
    }
    return (
        <>
            <div>
                {/* Topbar Start */}
                <div className="container-fluid bg-primary py-3 d-none d-md-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                                <div className="d-inline-flex align-items-center">
                                    <a className="text-white pr-3" href>FAQs</a>
                                    <span className="text-white">|</span>
                                    <a className="text-white px-3" href>Help</a>
                                    <span className="text-white">|</span>
                                    <a className="text-white pl-3" href>Support</a>
                                </div>
                            </div>
                            <div className="col-md-6 text-center text-lg-right">
                                <div className="d-inline-flex align-items-center">
                                    <a className="text-white px-3" href>
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a className="text-white px-3" href>
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a className="text-white px-3" href>
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                    <a className="text-white px-3" href>
                                        <i className="fab fa-instagram" />
                                    </a>
                                    <a className="text-white pl-3" href>
                                        <i className="fab fa-youtube" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Topbar End */}
                {/* Navbar Start */}
                <div className="container-fluid position-relative nav-bar p-0">
                    <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
                        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
                            <a href="index.html" className="navbar-brand d-block d-lg-none">
                                <h1 className="m-0 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                            </a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav ml-auto py-0">
                                    <NavLink to="/" className="nav-item nav-link ">Dashboard</NavLink>
                                </div>
                                <div className="dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                        Product
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><NavLink to="/add_product" className="dropdown-item" href="#">Add Product</NavLink></li>
                                        <li><NavLink to="/manage_product" className="dropdown-item" href="#">Manage Product</NavLink></li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                        Services
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><NavLink to="/add_services" className="dropdown-item" href="#">Add Services</NavLink></li>
                                        <li><NavLink to="/manage_services" className="dropdown-item" href="#">Manage Services</NavLink></li>
                                    </ul>
                                </div>
                                <NavLink to="/manage_contact" className="nav-item nav-link">Contact</NavLink>
                                <NavLink to="/manage_customer" className="nav-item nav-link">Customer</NavLink>
                                {(
                                () => {
                                    if (localStorage.getItem('aid')) {
                                        return (
                                            <NavLink to="/aprofile" className="nav-item nav-link">Hi .. {localStorage.getItem('aname')}</NavLink>
                                        )
                                    }
                                }

                            )()}
                                <a to="javascript:void(0)" onClick={adminlogout} className="btn btn-primary d-none d-lg-block">Logout</a>
                                <NavLink to="/" className="navbar-brand mx-5 d-none d-lg-block">
                                    <h1 className="m-0 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                                </NavLink>

                            </div>
                        </nav>
                    </div>
                </div>
                {/* Navbar End */}
                {/* Header Start */}
                <div className="jumbotron jumbotron-fluid page-header" style={{ marginBottom: 90 }}>
                    <div className="container text-center py-5">
                        <h1 className="text-white display-3 mt-lg-5">{title}</h1>
                        <div className="d-inline-flex align-items-center text-white">
                            <p className="m-0"><a className="text-white" href>Home</a></p>
                            <i className="fa fa-circle px-3" />
                            <p className="m-0">{title}</p>
                        </div>
                    </div>
                </div>
                {/* Header End */}
            </div>
        </>
    )
}

export default AHeader
