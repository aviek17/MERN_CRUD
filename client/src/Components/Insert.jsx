import React, {useState} from 'react'
import "../App.css"
import Axios from "axios"
import { NavLink , useHistory } from "react-router-dom"

const Insert = () => {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [address , setAddress] = useState("")
    const [phone , setPhone] = useState(0)
    const history = useHistory()

    const addToList = () => {
           Axios.post("http://localhost:4000/insert",{
               sname : name,
               semail : email,
               saddress : address,
               sphone : phone
           })
           alert("User Registered");
           history.push("/");
           
    }
    return (
        <div className="design">
            <h2>Add Details</h2>
            <label>Name</label>
            <input type="text" placeholder="Name" onChange={(event)=>{setName(event.target.value)}}/>
            <label>Email</label>
            <input type="text" placeholder="Email" onChange={(event)=>{setEmail(event.target.value)}}/>
            <label>Address</label>
            <input type="text" placeholder="Address" onChange={(event)=>{setAddress(event.target.value)}}/>
            <label>Phone</label>
            <input type="number" placeholder="Phone No" onChange={(event)=>{setPhone(event.target.value)}}/>
            <button onClick={addToList}>Add to List</button>

            <button><NavLink className="nav-link" to="/readall">Show List</NavLink></button>
        </div>
    )
}

export default Insert
