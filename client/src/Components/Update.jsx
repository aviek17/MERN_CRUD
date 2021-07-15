import React, { useState } from 'react'
import "../App.css"
import { NavLink, useParams , useHistory } from "react-router-dom"
import Axios from "axios"


const Update = () => {
    // console.log(props);
    
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState(0)

    const {id ,fname} = useParams();
    const history = useHistory();
    // console.log(history);

    const UpdateList = () => {
        
        Axios.put("http://localhost:4000/update", {
            sid : id,
            semail: email,
            saddress: address,
            sphone: phone

        })
        alert("User updated successfully")
        history.push("/readall")
    }
    return (
        <div className="App">
            <div className="design">
                <h2>Update Details</h2>
                <label>Name</label>
                <input type="text" value={fname} readOnly={true}/>
                <label>Email</label>
                <input type="text" placeholder="New email" onChange={(event) => { setEmail(event.target.value) }} />
                <label>Address</label>
                <input type="text" placeholder="New address" onChange={(event) => { setAddress(event.target.value) }} />
                <label>Phone</label>
                <input type="number" placeholder="New phone No" onChange={(event) => { setPhone(event.target.value) }} />
                <button onClick={UpdateList}>Update List</button>

                <button><NavLink className="nav-link" to="/readall">Show List</NavLink></button>
            </div>
        </div>
    )
}

export default Update
