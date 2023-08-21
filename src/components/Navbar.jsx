import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white shadow py-3 sticky-top">
        <div className="container">
            <a className="navbar-brand" href="#">
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">

                    <li className="nav-item">
                        <a className="nav-link" href="#heroSlider">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#team">The Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#footerr">Contact Us</a>
                    </li>
                    
                </ul>
                <a href="#" className="btn btn-brand">Report an incident</a>
            </div>
        </div>
    </nav>
    </div>
  )
}
