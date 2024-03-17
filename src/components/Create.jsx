import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Create = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const Navigate = useNavigate();
    const header = { "Access-Control-Allow-Origin": "*" };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(
            'https://65a77c6094c2c5762da6c544.mockapi.io/curd-oprarion', {
            name: name,
            email: email,
            header,

        }).then(() => {
            Navigate("/Read");

        });
    }

    return (
        <div className='p-5'>
            <div className='d-flex justify-content-between m-2'>
                <h1>CURD opration</h1>
                <Link to="/Read">
                    <button className='btn btn-primary'>Show Data</button>
                </Link>
            </div>
            <form>
                <div className="form-group">
                    <label for="formGroupExampleInput"> Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder=" Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Email</label>
                    <input type="email" className="form-control" id="formGroupExampleInput2" placeholder=" Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button className='btn btn-primary m-2' type='submut' onClick={handleSubmit}>submut</button>
            </form>
        </div>
    )
}

export default Create
