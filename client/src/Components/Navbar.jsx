import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">CRUD</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/insert">Insert</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/update/:id/:fname">Update</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/delete/:id">Delete</NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>




    )
}

export default Navbar
