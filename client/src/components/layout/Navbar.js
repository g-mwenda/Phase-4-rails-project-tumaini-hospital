import React, { useContext } from 'react'
import {Link}  from "react-router-dom"
import { AuthContext } from '../../context/AuthContext'
import './Navbar.css';

function Navbar() {
  const {current_user, logout} = useContext(AuthContext)
  // console.log("User from Navbar", current_user)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary shadow mb-0" id="navigation" style={{ marginBottom: '0' }}>
        <div className="container">
          <Link to="/" className="navbar-brand" id="logo">
            <img style={{ height: '90px' }} src="/logo.png" className="" alt="..." />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav" id="navlist">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  🏠 Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active">
                  📙 About us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link active">
                  📞 Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/book" className="nav-link active">
                  Book an appointment
                </Link>
              </li>
              {current_user && current_user?
              <>
             <li className="nav-item">
                <Link to="account/dashboard" className="nav-link active">
                  Dashboard
                </Link>
              </li>
              </>:<></>
          } 
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
