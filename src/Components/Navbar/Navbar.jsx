import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg color py-4 fw-bolder fs-5 ">
        <div className="container">
          <Link className="navbar-brand  text-white" to="/home">START FRAMEWORK</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 ">

              <li className="nav-item px-2">
                <NavLink className="nav-link text-white" to="/about">About</NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link text-white" to="/portofolio">Portofolio</NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
              </li>

            </ul>
            
          </div>
        </div>
      </nav>


    </>
  )
}
