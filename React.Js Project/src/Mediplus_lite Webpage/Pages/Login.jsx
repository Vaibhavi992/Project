import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'


function Login() {

    const redirect = useNavigate();

    useEffect(()=>{
        if((localStorage.getItem('uid')))
        {
            redirect('/');
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
        if (formvalue.email === "") {
            toast.error('email Field is required !');
            result = false;
            return false;
        }
        if (formvalue.password === "") {
            toast.error('password Field is required !');
            result = false;
            return false;
        }

        return result;
    }


    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
            if (res.data.length > 0) {
                if (res.data[0].password === formvalue.password) {
                    if (res.data[0].status === "Unblock") {

                        localStorage.setItem('uid',res.data[0].id);
                        localStorage.setItem('uname',res.data[0].name);    
                        toast.success("Login Suucees!");
                        redirect('/');
                    }
                    else {
                        toast.error("Account Blocked!");
                    }
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
            <Header></Header>

            <form id="contactForm" className='col-md-6 offset-md-3 p-5 bg-light mt-5' method='post' onSubmit={submitHandel} >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' value={formvalue.email} onChange={changeHandel} placeHolder="Enter email" />
                    <small id="email" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={formvalue.password} onChange={changeHandel} placeHolder="Password" />
                </div>

                <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Submit</button>
                <Link to='/signup' className='float-right'>If you not  registered then Signup Here</Link>
            </form>

            <Footer></Footer>
        </>
    )
}

export default Login
