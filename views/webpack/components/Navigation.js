import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = () =>{

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Link className="nav-link" to="/dashboard">Home</Link> | <Link className="nav-link" to="/profile">Profile</Link> | <Link className="nav-link" to="/my-account">My Account</Link>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navigation