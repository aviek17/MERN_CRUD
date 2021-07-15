import React, { useEffect, useState } from 'react'
import "../App.css"
import ReadAll from "../Components/ReadAll"
import Axios from "axios";
import { useParams, useHistory, NavLink } from "react-router-dom"

const Delete = () => {
    const { id } = useParams();
    const history = useHistory();
    const [list, setList] = useState([])
    useEffect(() => {
        Axios.get("http://localhost:4000/read").then((response) => {
            setList(response.data)
        })
    }, [])
    console.log(id);
    const deleteUser = () => {
        Axios.delete(`http://localhost:4000/delete`, {
            data:
            {
                sid: id
            }
        })
        history.push("/")
    }


    if (id===':id') {
        return (
            <>
                <ReadAll />
            </>
        )
    } else {
        return (
            <div className="design">
                <h2 className="display-flex justify-content-center"> Delete User</h2>
                <div className="container-fluid mt-5">
                    <div className="row text-center">
                        {
                            list.map((curr, index) => {
                                if (curr._id === id) {
                                    return (
                                        <>
                                            <div className="col-10 col-md-4 mt-5" >
                                                <div className="card p-2">
                                                    <div className="d-flex align-items-center" >
                                                        <h4 className="mb-0 mt-0 textLeft" key={index}>
                                                            Name : {curr.name}
                                                        </h4>
                                                        <div className="p-2 mt-2  d-flex justify-content-between rounded text-black stats" >
                                                            <div className="d-flex flex-column">Email : {curr.email}</div>
                                                            <div className="d-flex flex-column">Address : {curr.address}</div>
                                                            <div className="d-flex flex-column">Phone : {curr.phone}</div>
                                                        </div>

                                                    </div>
                                                </div>

                                                <button className="btn btn-danger" onClick={deleteUser} > <NavLink className="nav-link btn-danger btn-delete" to={`/delete/${curr._id}`}>Delete</NavLink></button>
                                            </div>

                                        </>
                                    )
                                }

                            })
                        }
                    </div>

                </div>
            </div>
        )
    }
}

export default Delete
