import React, { useState } from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'
import axios, { Axios } from 'axios'
import { toast } from 'react-toastify'

function Signup() {
    const [formvalue,setFormvalue]=useState({
        name:"",
        email:"",
        password:"",
        mobile:"",
        img:""
    })

    const changeHandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),status: "Unblock",[e.target.name]:e.target.value});
        console.log(formvalue);
    }
    function validation() {

        var result = true;
        if (formvalue.name == "") {
            toast.error('Name Field is required !');
            result = false;
            return false;
        }
        if (formvalue.password == "") {
            toast.error('password Field is required !');
            result = false;
            return false;
        }
        if (formvalue.mobile == "") {
            toast.error('mobile Field is required !');
            result = false;
            return false;
        }
        if (formvalue.img == "") {
            toast.error('Image Field is required !');
            result = false;
            return false;
        }
        return result;
    }


    const submitHandel=async(e)=>{
       e.preventDefault();
       if(validation()){
        const res= await axios.post(`http://localhost:3000/user`,formvalue);
       setFormvalue({...formvalue,name:"",email:"",password:"",mobile:"",img:""});
       toast.success('signup Sucess');
       return false; 
       }
       

    }
    
    
  return (
    <>
    <Header/>
    < div className="container-fluid py-5" >
                <div className="container py-5">
                    <div className="row">
                        
                        <div className="col-lg-6 offset-md-3 pt-5 pb-lg-5">
                            <div className="contact-form bg-light p-4 p-lg-5 my-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Signup</h6>
                                <h1 className="mb-4">Signup Here</h1>
                                <div id="success" />
                                <form id="contactForm" method='post'  onSubmit={submitHandel}>
                                    <div className="form-row">
                                        <div className="col-sm-12 control-group">
                                            <input type="text" value={formvalue.name} onChange={changeHandel} className="form-control border-0 p-4" name="name" id="name" placeholder="Your Name"  />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="email" value={formvalue.email} onChange={changeHandel} className="form-control border-0 p-4" name="email" id="email" placeholder="Your Email"  />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="text" value={formvalue.password}  onChange={changeHandel} className="form-control border-0 p-4" name="password" id="password" placeholder="Your Password"  />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="number" value={formvalue.mobile} onChange={changeHandel} className="form-control border-0 p-4" name="mobile" id="mobile" placeholder="Your Mobile"  />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="url" value={formvalue.img} onChange={changeHandel} className="form-control border-0 p-4" name="img" id="img" placeholder="Your Image" />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Submit</button>
                                        <Link to='/login' className='float-right'>If you already registered then Login Here</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer/>
    </>
  )
}

export default Signup