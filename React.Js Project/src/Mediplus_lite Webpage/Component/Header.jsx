import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Header() {

  const redirect = useNavigate();

  const userlogout = () => {
    localStorage.removeItem('uid');
    localStorage.removeItem('uname');
    toast.success('Logout Success');
    redirect('/');
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
                  <NavLink to="/" className="nav-item nav-link ">Home</NavLink>
                  <NavLink to="/About" className="nav-item nav-link">About</NavLink>
                  <NavLink to="/Product" className="nav-item nav-link">Product</NavLink>
                </div>
                <NavLink to="/" className="navbar-brand mx-5 d-none d-lg-block">
                  <h1 className="m-0 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                </NavLink>
                <div className="navbar-nav mr-auto py-0">
                  <NavLink to="/Service" className="nav-item nav-link">Service</NavLink>
                  <NavLink to="/Gallery" className="nav-item nav-link">Gallery</NavLink>
                  <NavLink to="/Contact" className="nav-item nav-link">Contact</NavLink>
                  {(
                    () => {
                      if (localStorage.getItem('uid')) {
                        return (
                          <NavLink to="/profile" className="nav-item nav-link">Hi .. {localStorage.getItem('uname')}</NavLink>
                        )
                      }
                    }

                  )()}

                </div>
                {(
                  () => {
                    if (localStorage.getItem('uid')) {
                      return (
                        <a to="javascript:void(0)" onClick={userlogout} className="btn btn-primary d-none d-lg-block" style={{marginRight:25}}>Logout</a>
                      )
                    }
                    else {
                      return (
                        <NavLink to="/login" className="btn btn-primary d-none d-lg-block" style={{marginRight:25}}>Login</NavLink>
                      )
                    }
                  }

                )()}


              </div>
            </nav>
          </div>
        </div>
        {/* Navbar End */}
      </div>
    </>
  )
}

export default Header
