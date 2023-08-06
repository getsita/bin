import React from 'react'

function Menu() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-light navbar-dark py-0">
  <div className="container">
    <a className="navbar-brand bg-dark text-light px-5" href="#"> <i className="bi bi-list" /> category</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Sale</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Newest</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Brands</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"> <i className="bi bi-bookmark" /> Store blog</a>
        </li>
        <li className="nav-item rightborder">
          <a className="nav-link" href="#"> <i className="bi bi-fire" /> Active promo-actions</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Menu