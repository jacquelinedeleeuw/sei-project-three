import React from 'react'
import { Link } from 'react-router-dom'
import jetflixLogo from '../assets/jetflixlogo.png'

const Navbar = () => {
  return (
    <nav className="ui grid fixed menu" style={{ width: '100vw' }}>
      <div className="nav-container">
        <div className="jetflix-nav-logo">
          <Link to="/" className="logo-to-home">
            <img src={jetflixLogo}></img>
          </Link>
        </div>
        <div className="my-list">
          <Link to="/" className="my-list-link">
            <a className="nav-links">My List</a>
          </Link>
        </div>
        <div className="explore">
          <Link to="/profiles" className="explore-link">
            <a className="nav-links">Explore</a>
          </Link>
        </div>
        <div className="profiles" textAlign='right'>
          <Link to="/profiles" className="profiles-link">
            <a className="nav-links">Search</a>
          </Link>
        </div>
        <div className="profiles">
          <Link to="/profiles" className="profiles-link">
            <a className="nav-links">Profiles</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

// home
// my list
// explore - link to explore page into div

// div
// search
// profile - image 

export default Navbar
