import React, { useEffect, useState } from 'react'
import AHeader from '../Component/AHeader'
import AFooter from '../Component/AFooter'
import axios from 'axios';
import { toast } from 'react-toastify';


function Manage_services() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch();
    });
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/services`);
        console.log(res.data);
        setData(res.data)
    }

    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/services/${id}`);
        toast.success('Service Delete Success');
        return false;
    }
    const [form, setform] = useState({
        ser_img: "",
        ser_name:"",
        main_price:"",
        discount_price:"",
        desc:"",
      })
      const EditHandel = async(id)=> {
        const res = await axios.get(`http://localhost:3000/services/${id}`)
        setform(res.data);
        const myModal = new window.bootstrap.Modal(document.getElementById('myModal'));
          myModal.show();
    }
    const changeHandel = (e) => {
        setform({...form, [e.target.name]:e.target.value});
      }

      const submitHandel = async (e) => {
        e.preventDefault();
        const res = await axios.patch(`http://localhost:3000/services/${form.id}`, form);
        setform({ ...form, ser_img: "", ser_name: "",main_price:"",discount_price:"",desc :""});
        const myModal = new window.bootstrap.Modal(document.getElementById('myModal'));
        myModal.hide();
        fetch();
      }

    return (
        <div>
            <AHeader title="Manage Services" />
            < div className="container-fluid" >
                <div className="container">
                    <div className="row">

                        <div className=" col-lg-12 ">
                            <div className="bg-light  p-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Services</h6>
                                <h1 className="mb-4">Manage Services</h1>
                                <div id="success" />

                                <table className="table">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>ID</th>
                                            <th>Service Image</th>
                                            <th>Service Name</th>
                                            <th>Main Price</th>
                                            <th>Discounted Price</th>
                                            <th>Discription</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data && data.map((value, index, arr) => {
                                                return (
                                                    <tr>
                                                        <td>{value.id}</td>
                                                        <td><img src={value.ser_img} alt="" width="50px" /></td>
                                                        <td>{value.ser_name}</td>
                                                        <td>{value.main_price}</td>
                                                        <td>{value.discount_price}</td>
                                                        <td>{value.desc}</td>
                                                        <td>
                                                            <button className='btn btn-info mr-2'onClick={()=>EditHandel(value.id)} data-toggle="modal" data-target="#myModal">Edit</button>
                                                            <button className='btn btn-danger' onClick={() => deleteHandel(value.id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                    <div class="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div className='form-group'>
                                                    <input type="text" onChange={changeHandel} value={form.ser_img} className="form-control border-1 p-4" name="pro_title" placeholder="Product Title" />
                                                    </div>
                                                    <div className='form-group'>
                                                    <input type="text" onChange={changeHandel} value={form.ser_name} className="form-control border-1 p-4" name="pro_img" placeholder="Product img" />
                                                    </div>
                                                    <div className='form-group'>
                                                    <input type="text" onChange={changeHandel} value={form.main_price} className="form-control border-1 p-4" name="pro_desc" placeholder="Product dec" />
                                                    </div>
                                                    <div className='form-group'>
                                                    <input type="text" onChange={changeHandel} value={form.discount_price} className="form-control border-1 p-4" name="pro_desc" placeholder="Product dec" />
                                                    </div>
                                                    <div className='form-group'>
                                                    <input type="text" onChange={changeHandel} value={form.desc} className="form-control border-1 p-4" name="pro_desc" placeholder="Product dec" />
                                                    </div>
                                                    
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="submit" onClick={submitHandel} class="btn btn-primary">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <AFooter />
        </div>
    )
}

export default Manage_services
