import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">L</div>
        <div className="nav-middle">
            <li className="middle-links">
                <Link to="/">Home</Link>
                <Link to="/aboutUs">About Us</Link>
                <Link to="/allGlasses">All Glasses</Link>
                <Link to="/designGlasses">Design Glasses</Link>
                <Link to="/sale">Sale</Link>
                <Link to="/contactUs">Contact Us</Link>
            </li>
        </div>
        <div className="nav-right">

        </div>
    </nav>
  )
}

export default Navbar