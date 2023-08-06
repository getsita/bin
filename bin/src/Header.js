import React from 'react'

function Header() {
  return (
    <>
  <header className="py-3 sticky-top">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-3">
        <img src="https://istore.com.np/images/logos/3/1n_e1de-v3.jpg" alt="Logo" />
      </div>
      <div className="col-lg-3">
        <a href="tel:014784697" title><span className="text-muted"> +977 </span> 014784697</a>
        <a href="tel:9851061460" title><span className="text-muted"> +977 </span> 9851061460</a>
        <p><a href="#" className="call text-center"> Request call </a><a href="#" className="call text-center"> Contact us </a></p>
      </div>
      <div className="col-lg-4">
        <form className="d-flex" role="search">
          <input className="form-control me-2 rounded-pill" type="search" placeholder="SEARCH PRODUCTS" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit"><i className="bi bi-search" /></button>
        </form></div>
      <div className="col-lg-2">
        <button type="button" className="btn position-relative">
          <i className="bi bi-cart4" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            0+
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
        <i className="bi bi-suit-heart" />
        <i className="bi bi-person-circle" />
      </div>
    </div>
  </div>
</header>

    </>
  )
}

export default Header