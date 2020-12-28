import { React, useEffect } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  let navbarClasses =
    "navbar navbar-expand-md navbar-light bg-light sticky-top";

  useEffect(() => {
    let navbar = document.getElementById("navbar");
    if (navbar.offsetTop > window.pageYOffset) {
      navbar.classList.remove("sticky-top");
    }
  }, []);

  return (
    <div>
      <nav id="navbar" className={navbarClasses}>
        <div className="container-fluid">
          <a className="navbar-brand text-primary" href="#">
            WebSiteName
          </a>{" "}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="ml-auto navbar-nav ">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <p>
        {/* Keep to stay under the sticky-top*/}
        <br />
        <br />
      </p>
    </div>
  );
}

export default Header;
