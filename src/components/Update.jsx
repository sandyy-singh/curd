import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Update = () => {
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const Navigate = useNavigate();
    const handleUpDate = (e) => {
        e.preventDefault();
        axios.put(`https://65a77c6094c2c5762da6c544.mockapi.io/curd-oprarion/${id}`,
            {
                name: name,
                email: email,
            }
        ).then(()=>{
            Navigate("/Read")
        })
    }

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"))
    }, [])
    return (
        <div>
            <h1>Update</h1>
            <form>
                <div className="form-group">
                    <label for="formGroupExampleInput"> Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder=" Enter Name" value={name} onChange={(e) => setName(e.target.value)}  />
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Email</label>
                    <input type="email" className="form-control" id="formGroupExampleInput2" placeholder=" Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <button className='btn btn-primary m-2'  onClick={handleUpDate} >update</button>
                <Link to="/Read">
                <button className='btn btn-secondary m-2'  >Back</button>
                </Link>
            </form>
        </div>
    )
}

export default Update
