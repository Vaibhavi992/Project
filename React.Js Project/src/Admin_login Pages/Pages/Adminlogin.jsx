import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


function Adminlogin() {
  const redirect = useNavigate();

  useEffect(()=>{
    if((localStorage.getItem('aid')))
    {
        redirect('/dashboard');
    }
})


  const [formvalue, setFormvalue] = useState({
    email: "",
    password: ""
  })

  const changeHandel = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  function validation() {

    var result = true;
    if (formvalue.email == "") {
      toast.error('email Field is required !');
      result = false;
      return false;
    }
    if (formvalue.password == "") {
      toast.error('password Field is required !');
      result = false;
      return false;
    }

    return result;
  }


  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.get(`http://localhost:3000/admin?email=${formvalue.email}`);
      if (res.data.length > 0) {
        if (res.data[0].password == formvalue.password) {

          // session create
          localStorage.setItem('aid', res.data[0].id);
          localStorage.setItem('aname', res.data[0].name);
          toast.success("Login Suucees!");
          redirect('/dashboard');

        }
        else {
          toast.error("Password incorrect !");
        }
      }
      else {
        toast.error("Email does not exist !");
      }
    }
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
        <div>
          {/* Topbar End*/}
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
                    <a href="index.html" className="nav-item nav-link">Home</a>
                    <a href="about.html" className="nav-item nav-link">About</a>
                    <a href="product.html" className="nav-item nav-link">Product</a>
                  </div>
                  <a href="index.html" className="navbar-brand mx-5 d-none d-lg-block">
                    <h1 className="m-0 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                  </a>
                  <div className="navbar-nav mr-auto py-0">
                    <a href="service.html" className="nav-item nav-link">Service</a>
                    <a href="gallery.html" className="nav-item nav-link">Gallery</a>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          {/* Navbar End */}
        </div>

        {/* Header Start */}
        <div className="jumbotron jumbotron-fluid page-header" style={{ marginBottom: 90 }}>
          <div className="container text-center py-5">
            <h1 className="text-white display-3 mt-lg-5">Admin Login</h1>
            <div className="d-inline-flex align-items-center text-white">
              <p className="m-0"><a className="text-white" href>Home</a></p>
              <i className="fa fa-circle px-3" />
              <p className="m-0">Admin Login</p>
            </div>
          </div>
        </div>
        {/* Header End */}
        {/* Contact Start */}
        <form className='col-md-6 offset-md-3 p-5 bg-light mt-5' method='post' onSubmit={submitHandel} >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={formvalue.email} onChange={changeHandel} aria-describedby="emailHelp" placeHolder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={formvalue.password} onChange={changeHandel} placeHolder="Password" />
          </div>

          <button type="submit" className="btn btn-primary">Signup</button>
          <Link to='/signup' className='float-right'>If you not registered then Signup Here</Link>
        </form>
        {/* Contact End */}
        {/* Footer Start */}
        <div className="container-fluid footer bg-light py-5" style={{ marginTop: 90 }}>
          <div className="container text-center py-5">
            <div className="row">
              <div className="col-12 mb-4">
                <a href="index.html" className="navbar-brand m-0">
                  <h1 className="m-0 mt-n2 display-4 text-primary"><span className="text-secondary">i</span>CREAM</h1>
                </a>
              </div>
              <div className="col-12 mb-4">
                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-secondary btn-social mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                <a className="btn btn-outline-secondary btn-social" href="#"><i className="fab fa-instagram" /></a>
              </div>
              <div className="col-12 mt-2 mb-4">
                <div className="row">
                  <div className="col-sm-6 text-center text-sm-right border-right mb-3 mb-sm-0">
                    <h5 className="font-weight-bold mb-2">Get In Touch</h5>
                    <p className="mb-2">123 Street, New York, USA</p>
                    <p className="mb-0">+012 345 67890</p>
                  </div>
                  <div className="col-sm-6 text-center text-sm-left">
                    <h5 className="font-weight-bold mb-2">Opening Hours</h5>
                    <p className="mb-2">Mon – Sat, 8AM – 5PM</p>
                    <p className="mb-0">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <p className="m-0">© <a href="#">Domain</a>. All Rights Reserved. Designed by <a href="https://htmlcodex.com">HTML Codex</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}

        {/* Back to Top */}
        <a href="#" className="btn btn-secondary px-2 back-to-top"><i className="fa fa-angle-double-up" /></a>


      </div>

    </>

  )
}

export default Adminlogin
