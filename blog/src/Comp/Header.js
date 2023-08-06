import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home';
function Header() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
  <div className="container">
    <a className="navbar-brand" href="#">
        <img src={require('../img/logo.png')}/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">general</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">health</a>
        </li>
        
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
    
    
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      </form>
    </div>
  </div>
</nav>
<Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default Header