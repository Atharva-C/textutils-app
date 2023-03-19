import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    // <nav className={`navbar bg-${props.mode} navbar navbar-expand-lg bg-body-tertiary data-bs-theme=${props.mode}`}> 

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      {/* back tics is included so that we can use template literals inside JSX.  */}
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">{props.About}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/textform">Textform</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light'? 'dark': 'light'}`}>  
          {/* comparison done using ternary operator */}
            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light'? 'dark': 'light'} Mode</label>
          </div>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  About: PropTypes.string
}

Navbar.defaultProps = {
  title: 'hello'
}
