import React, { useEffect, useState } from 'react'
import Footer from '../Component/Footer'
import Header from '../Component/Header';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile() {
    const redirect = useNavigate();

    const [data, setData] = useState({});

    useEffect(() => {
        if (localStorage.getItem('uid')) {
            fetch();
        }
        else {
            redirect('/');
        }
    });
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('uid')}`);
        console.log(res.data);
        setData(res.data)
    }

    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);  // get single obj
        console.log(res.data);
        setFormvalue(res.data)
    }
    
    const [formvalue, setFormvalue] = useState({
        name: "",
        email: "",
        mobile: "",
        img: ""
    })


    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {

        var result = true;
        if (formvalue.name == "") {
            toast.error('Name Field is required !');
            result = false;
            return false;
        }
        if (formvalue.email == "") {
            toast.error('email Field is required !');
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


    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/user/${formvalue.id}`, formvalue);
            setFormvalue({ ...formvalue, name: "", email: "",mobile: "", img: "" });
            toast.success('Update Success');
            document.getElementById('myModal').style.display="none";
            return false;
        }
    }




    return (
        <>
            <Header/>
            <div>
                {/* Open Hours Start */}
                <div className="container-fluid py-5">
                    <div className="container py-5">
                        <div className="row mb-5">
                            <div className="col-lg-4" style={{ minHeight: "200px" }}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute w-100 h-100" src={data.img} style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-8 pt-5 pb-lg-5">
                                <div className="hours-text bg-light p-4 p-lg-5 my-lg-5">

                                    <h1 className="mb-4">{data.name}</h1>
                                    <p>{data.email}</p>
                                    <p>{data.mobile}</p>
                                    <a href="javascript:void(0)" onClick={() => editdata(data.id)} data-toggle="modal" data-target="#myModal" className="btn btn-primary mt-2" >Edit Frofile</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Open Hours End */}
            </div>

            <div className="modal" id="myModal">
                <div className="modal-dialog" id="dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Profile</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">

                            <form id="contactForm" method='post' onSubmit={submitHandel}>
                                <div className="form-row">
                                    <div className="col-sm-12 control-group">
                                        <input type="text" value={formvalue.name} onChange={changeHandel} className="form-control border-0 p-4" name="name" id="name" placeholder="Your Name" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="col-sm-12 control-group">
                                        <input type="email" value={formvalue.email} onChange={changeHandel} className="form-control border-0 p-4" name="email" id="email" placeholder="Your Email" />
                                        <p className="help-block text-danger" />
                                    </div>

                                    <div className="col-sm-12 control-group">
                                        <input type="number" value={formvalue.mobile} onChange={changeHandel} className="form-control border-0 p-4" name="mobile" id="mobile" placeholder="Your Mobile" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="col-sm-12 control-group">
                                        <input type="url" value={formvalue.img} onChange={changeHandel} className="form-control border-0 p-4" name="img" id="img" placeholder="Your Image" />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>

                                <div>
                                    <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Save</button>

                                </div>
                            </form>
                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile
