import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
    const [data, setData] = useState();
    const getData = () => {
        axios
            .get("https://65a77c6094c2c5762da6c544.mockapi.io/curd-oprarion")
            .then((res) => {
                // console.log(res.data);
                setData(res.data);
            });
    };

    const deleteData = (id) => {
        axios
            .delete(`https://65a77c6094c2c5762da6c544.mockapi.io/curd-oprarion/${id}`)
            .then(() => {
                getData();
            });
    };

    const setLoclStorage = (id, name, email) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <div className='d-flex justify-content-between m-2'>
                <h1>Read opration</h1>
                <Link to="/">
                    <button className='btn btn-primary'>Create Data</button>
                </Link>

            </div>
            <table class="table ">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Opration</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((value) => (
                        <tr>
                            <th scope="row">{value.id}</th>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>
                                <Link to="/Update">
                                    <button className="btn btn-success" onClick={() => setLoclStorage(value.id, value.name, value.email)}>Edit</button>
                                </Link>

                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteData(value.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Read;
