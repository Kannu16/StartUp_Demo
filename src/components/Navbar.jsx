import React from "react";

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark fixed-top" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            KANNU
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active ms-4" aria-current="page" href="/" style={{color:"#FBEBD9"}}>
                Home
              </a>
              <a className="nav-link ms-4" href="/" style={{color:"#FBEBD9"}}>
                About
              </a>
              <a className="nav-link ms-4" href="#" style={{color:"#FBEBD9"}}>
                Find FreeLancer
              </a>
              <a className="nav-link ms-4" href="/" style={{color:"#FBEBD9"}}>
                Why to choose Us?
              </a>
              <button type="button" className="btn btn-light ms-5" style={{backgroundColor:"#FBEBD9"}}>Login</button>
              <button type="button" className="btn btn-outline-light ms-3">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
