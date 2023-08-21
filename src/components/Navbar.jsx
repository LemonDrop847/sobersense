import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white shadow py-3 sticky-top">
        <div className="container">
            <Link className="navbar-brand" href="#">
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">

                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/#about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#team">The Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#footerr">Contact Us</Link>
                    </li>
                    
                </ul>
                <Link href="#" className="btn btn-brand">Report an incident</Link>
            </div>
        </div>
    </nav>
    </div>
  )
}
