import {Link, NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
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

                    <li className="nav-item" >
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#team">The Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#footerr">Contact Us</a>
                    </li>
                    
                </ul>
                <Link href="#" className="btn btn-brand">Report an incident</Link>
            </div>
        </div>
    </nav>
  )
}
