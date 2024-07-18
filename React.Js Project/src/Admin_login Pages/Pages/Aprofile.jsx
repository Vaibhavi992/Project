import React, { useEffect, useState } from 'react'
import AFooter from '../Component/AFooter'
import AHeader from '../Component/AHeader'
import axios from 'axios';


function Aprofile() {
    useEffect(() => {
        fetch();
    }, []);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/admin/${localStorage.getItem('aid')}`);
        console.log(res.data);
        setFormvalue(res.data)
    }
    const [formvalue, setFormvalue] = useState({
        name: "",
        email: "",
        password: ""
    })
    const changeHandel = () => {

    }
    return (
        <div>
            <AHeader title="Edit profile" />
            < div className="container-fluid" >
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="bg-light  p-lg-5 ">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2"><td>Admin Profile</td></h6>
                                <h1 className="mb-4">Edit Profile</h1>
                                <div id="success" />
                                <form method="post" name="sentMessage" >
                                    <div className="form-row">
                                        <div className="col-sm-12 control-group">
                                            <input type="text" className="form-control border-0 p-4" value={formvalue.name} onChange={changeHandel} name="name" placeholder="Admin Name" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="email" className="form-control border-0 p-4" value={formvalue.email} onChange={changeHandel} name="email" placeholder="Blog Email" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-12 control-group">
                                            <input type="text" className="form-control border-0 p-4" value={formvalue.password} onChange={changeHandel} name="password" placeholder="Blog Password" />
                                            <p className="help-block text-danger" />
                                        </div>

                                    </div>


                                    <div>
                                        <button className="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">Save</button>
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

export default Aprofile
