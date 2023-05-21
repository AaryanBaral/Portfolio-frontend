import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo"></div>
        <div className="routes">
            <div className="route"><Link to="/">Home</Link> </div>
            <div className="route"><Link to="/about">About</Link> </div>
            <div className="route"><Link to="/education">Education</Link> </div>
            <div className="route"><Link to="/skills">Skills</Link> </div>
            <div className="route"><Link to="/contact">Contact</Link> </div>
        </div>
    </div>
  )
}
