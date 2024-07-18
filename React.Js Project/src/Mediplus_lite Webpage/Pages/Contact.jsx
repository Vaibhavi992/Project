import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import axios from 'axios'
import { toast } from 'react-toastify'

function Contact() {
    
    const [formvalue, setFormvalue] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    },[]);

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue,id: new Date().getTime().toString(),[e.target.name]: e.target.value });
        console.log(formvalue);
    }
    function validation() {

        var result = true;
        if (formvalue.name== "") {
            toast.error('NameField is required !');
            result = false;
            return false;
        }
        if (formvalue.email == "") {
            toast.error('email Field is required !');
            result = false;
            return false;
        }
        if (formvalue.subject == "") {
            toast.error('Subject Field is required !');
            result = false;
            return false;
        }
        if (formvalue.message == "") {
            toast.error('Message Field is required !');
            result = false;
            return false;
        }
        
        return result;
    }



    const submitHandel = async (e) => {
        e.preventDefault();
        
        if (validation()) {
            const res= await axios.post(`http://localhost:3000/contact`,formvalue);
            setFormvalue({ ...formvalue, name: "",email: "",subject: "",message: ""});
            toast.success('Data Add Success');
            return false;
        }
    }
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
                        <h1 className="text-white display-3 mt-lg-5">Contact</h1>
                        <div className="d-inline-flex align-items-center text-white">
                            <p className="m-0"><a className="text-white" href>Home</a></p>
                            <i className="fa fa-circle px-3" />
                            <p className="m-0">Contact</p>
                        </div>
                    </div>
                </div>
                {/* Header End */}
                {/* Contact Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h1 className="section-title position-relative text-center mb-5">Contact Us For Any Query</h1>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="contact-form bg-light rounded p-5">
                                    <div id="success" />
                                    <form name="sentMessage" id="contactForm" onSubmit={submitHandel} >
                                        <div className="form-row">
                                            <div className="col-sm-6 control-group">
                                                <input type="text" className="form-control p-4" value={formvalue.name} onChange={changeHandel} name='name' placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                                <p className="help-block text-danger" />
                                            </div>
                                            <div className="col-sm-6 control-group">
                                                <input type="email" className="form-control p-4" value={formvalue.email} onChange={changeHandel}  name='email' placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                                <p className="help-block text-danger" />
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <input type="text" className="form-control p-4" value={formvalue.subject} onChange={changeHandel}  name='subject' placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="control-group">
                                            <textarea className="form-control p-4" rows={6} value={formvalue.message} onChange={changeHandel}   name='message' placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div>
                                            <button className="btn btn-primary btn-block py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact End */}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Contact
