import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { GiKnifeFork } from 'react-icons/gi'


export default function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg">
    <div className='container'>
  <div className="container d-flex">
    
    <Link to='/' className='nav-link'><div className="navbar-brand"><GiKnifeFork /> recipe-app.com </div></Link>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <div className='justify-content-between'>
      <ul className="navbar-nav ">
        <li className="nav-item ">
          <Link to='' className="nav-link" aria-current="page"> Home</Link>
        </li>
        <li className="nav-item">
          <Link to='soup' className="nav-link">Soups</Link>
        </li>
        <li className="nav-item">
          <Link to='healthy-family-recipes' className="nav-link">Healthy</Link>
        </li>
        <li className="nav-item">
          <Link to='low-carb-slow-cooker' className="nav-link">Slow</Link>
        </li>
      </ul>
    </div>
  </div></div>
</nav>
  )
}
