import React, { useEffect, useState } from 'react'
import AHeader from '../Component/AHeader'
import AFooter from '../Component/AFooter'
import axios from 'axios';
import { toast } from 'react-toastify';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';



function Manage_product() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch();
    });
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/product`);
        console.log(res.data);
        setData(res.data)
    }

    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/product/${id}`);
        toast.success('Product Delete Success');
        return false;
    }

    const [form,setform] = useState({
        pro_title:"",
        pro_img:"",
        pro_desc:""
    })
        const EditHandel = async(id)=> {
          const res = await axios.get(`http://localhost:3000/product/${id}`)
          setform(res.data);
          const myModal = new window.bootstrap.Modal(document.getElementById('myModal'));
            myModal.show();
        

         
        }
        const changeHandel = (e) => {
            setform({...form, [e.target.name]:e.target.value});
          }

          const submitHandel = async (e) => {
            e.preventDefault();
            const res = await axios.patch(`http://localhost:3000/product/${form.id}`, form);
            setform({ ...form, pro_title: "", pro_img: "",pro_desc:"" });
            const myModal = new window.bootstrap.Modal(document.getElementById('myModal'));
            myModal.hide();
            fetch();
          }
    return (
        <div>
            <AHeader title="Manage Product" />
            < div className="container-fluid" >
                <div className="container">
                    <div className="row">

                        <div className=" col-lg-12 ">
                            <div className="bg-light  p-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Product</h6>
                                <h1 className="mb-4">Manage Product</h1>
                                <div id="success" />

                                <table className="table">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>ID</th>
                                            <th>Product Title</th>
                                            <th>Image</th>
                                            <th>Description</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data && data.map((value, index, arr) => {
                                                return (
                                                    <tr>
                                                        <td>{value.id}</td>
                                                        <td>{value.pro_title}</td>
                                                        <td><img src={value.pro_img} width="50px" /></td>
                                                        <td>{value.pro_desc}</td>
                                                        <td>
                                                            <button className='btn btn-info mr-2'onClick={() => EditHandel(value.id)} data-toggle="modal" data-target="#myModal">Edit</button>
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
                                                    <input type="text" onChange={changeHandel} value={form.pro_title} className="form-control border-1 p-4" name="pro_title" placeholder="Product Title" />
                                                    </div>
                                                    <div className='form-group'>
                                                    <input type="text" onChange={changeHandel} value={form.pro_img} className="form-control border-1 p-4" name="pro_img" placeholder="Product img" />
                                                    </div>
                                                    <div className='form-group'>
                                                    <input type="text" onChange={changeHandel} value={form.pro_desc} className="form-control border-1 p-4" name="pro_desc" placeholder="Product dec" />
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

export default Manage_product
