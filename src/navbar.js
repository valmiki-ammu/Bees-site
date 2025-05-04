import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const Navbar = () => {
  return (
    <div className="container-fluid py-3">
      <div className="d-flex justify-content-between align-items-center">
    
        <a className="navbar-brand" href="#">
          <img
          className="img-logo"
            src="./images/beessite.png"
            alt="Logo"
            height="50"
          />
        </a>

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom w-100 mx-3">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Home
                  </a>
                </li>
                {["Company", "Products", "Services", "Clients"].map(
                  (item, i) => (
                    <li className="nav-item dropdown" key={i}>
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        {item}
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            {item} Option 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            {item} Option 2
                          </a>
                        </li>
                      </ul>
                    </li>
                  )
                )}
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Get Started Button */}
        <button className="get-started-btn d-none d-lg-block">
          Get Started →
        </button>
      </div>
    </div>
  );
};

export default Navbar;
