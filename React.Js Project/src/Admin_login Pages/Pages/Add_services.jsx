import React, { useState } from 'react'
import AHeader from '../Component/AHeader'
import AFooter from '../Component/AFooter'
import axios from 'axios'
import { toast } from 'react-toastify'



function Add_services() {
    const [formvalue, setFormvalue] = useState({
        ser_img: "",
        ser_name: "",
        main_price: "",
        discount_price: "",
        desc: "",
    })

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {

        var result = true;
        if (formvalue.ser_img == "") {
            toast.error('Image Field is required !');
            result = false;
            return false;
        }
        if (formvalue.ser_name == "") {
            toast.error('Name Field is required !');
            result = false;
            return false;
        }
        if (formvalue.main_price == "") {
            toast.error('Price Field is required !');
            result = false;
            return false;
        }
        if (formvalue.discount_price == "") {
            toast.error('Price Field is required !');
            result = false;
            return false;
        }
        if (formvalue.desc == "") {
            toast.error('Description Field is required !');
            result = false;
            return false;
        }
        return result;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/services`, formvalue);
            setFormvalue({ ...formvalue, pro_id: "", ser_img: "", ser_name: "", main_price: "", discount_price: "", desc: "" });
            toast.success('Service Added Success');
            return false;
        }
    }
    return (
        <div>
            <AHeader title="Add Services" />
            < div className="container-fluid" >
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="bg-light  p-lg-5 ">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Services</h6>
                                <h1 className="mb-4">Add Services</h1>
                                <div id="success" />
                                <form name="sentMessage" method='post' onSubmit={submitHandel}>
                                    <div className="form-row">
                                        {/* <div className="col-sm-12 control-group">
                                            <select className="form-control border-0" name="cate_id" placeholder="Services Name" data-validation-required-message="Please enter Service name">
                                                <option value="" selected>-------- Select Categories ---------</option>
                                            </select>
                                            <p className="help-block text-danger" />
                                        </div> */}
                                        <div className="col-sm-12 control-group">
                                            <input type="text" className="form-control border-0 p-4" value={formvalue.ser_name} onChange={changeHandel} name="ser_name" placeholder="Services Name" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="url" className="form-control border-0 p-4" value={formvalue.ser_img} onChange={changeHandel} name="ser_img" placeholder="Service Image" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="number" className="form-control border-0 p-4" value={formvalue.main_price} onChange={changeHandel} name="main_price" placeholder="Main Price" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="number" className="form-control border-0 p-4" value={formvalue.discount_price} onChange={changeHandel} name="discount_price" placeholder="Discounted Price" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>

                                    <div className="control-group">
                                        <textarea className="form-control border-0 py-3 px-4" value={formvalue.desc} onChange={changeHandel} name="desc" rows={3} id="message" placeholder="Service Description" required="required" data-validation-required-message="Please enter Service Description" defaultValue={""} />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <AFooter />
        </div>
    )
}

export default Add_services
