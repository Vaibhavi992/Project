import React, { useState } from 'react'
import AHeader from '../Component/AHeader'
import AFooter from '../Component/AFooter'
import axios from 'axios'
import { toast } from 'react-toastify'



function Add_product() {
  const [formvalue, setFormvalue] = useState({
    pro_title: "",
    pro_img: "",
    pro_desc:"",
  })

  const changeHandel = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  function validation() {

    var result = true;
    if (formvalue.pro_title == "") {
        toast.error('Title Field is required !');
        result = false;
        return false;
    }
    if (formvalue.pro_img == "") {
        toast.error('Image Field is required !');
        result = false;
        return false;
    }
    if (formvalue.pro_desc == "") {
        toast.error('Description Field is required !');
        result = false;
        return false;
    }
    return result;
}

  const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
    const res = await axios.post(`http://localhost:3000/product`, formvalue);
    setFormvalue({ ...formvalue, pro_title: "", pro_img: "",pro_desc:"" });
    toast.success('Product Added Success');
    return false;
    }
  }
  return (
    <div>
      <AHeader title="Add product" />
      < div className="container-fluid" >
        <div className="container">
          <div className="row">

            <div className="col-lg-12">
              <div className="bg-light  p-lg-5 ">
                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2"><td>Product</td></h6>
                <h1 className="mb-4">Add Product</h1>
                <div id="success" />
                <form method='post' name="sentMessage" id="contactForm" onSubmit={submitHandel}>
                  <div className="form-row">
                    <div className="col-sm-12 control-group">
                      <input type="text" value={formvalue.pro_title} onChange={changeHandel} className="form-control border-0 p-4" name="pro_title" placeholder="Product Title" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="col-sm-12 control-group">
                      <input type="url" value={formvalue.pro_img} onChange={changeHandel} className="form-control border-0 p-4" name="pro_img" placeholder="Product Image" />
                      <p className="help-block text-danger" />
                    </div>
                  </div>

                  <div className="control-group">
                    <textarea value={formvalue.pro_desc} onChange={changeHandel} className="form-control border-0 py-3 px-4" rows={3} name="pro_desc" placeholder="Product Description"   defaultValue={""} />
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

export default Add_product
