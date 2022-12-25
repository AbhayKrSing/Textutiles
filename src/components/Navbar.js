import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-${props.mode} `}>
      <div className="container-fluid">
        <Link className={`navbar-brand text-${props.mode==='light'? 'dark':'light'}`} to="#">{props.titles}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active text-${props.mode==='light'? 'dark':'light'}`} aria-current="page" to="home">Home</Link>
            </li>


            <li className="nav-item">
              <Link className={`nav-link text-${props.mode==='light'? 'dark':'light'}`} to="/">{props.About}</Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className={`form-check-label text-${props.mode==='light'? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault" >Enable Dark mode</label>
          </div>
        {/* <button className={`btn btn-${props.mode==='dark'?'light':'dark'}`} style={{width:'2%',height:'5vh'}} onClick={props.toggleMode}></button> */}
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  titles: PropTypes.string.isRequired,            //propTypes set data types of passed props
  About: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  titles: 'Set Titles',
  About: 'Set [About]'
};            //defualt props are passed if nothing is passed in props

