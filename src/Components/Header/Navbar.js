import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="d-flex flex-row justify-content-between bg-dark p-3 fixed-top">
        <h3 className="fst-italic text-warning ps-5 ms-5">Start Bootstrap</h3>
        <nav>
          <ul className="d-flex list-unstyled text-uppercase pe-5 me-5">
            <li className="nav-item">
              <a href="#services" className="text-white nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link text-white">Portfolio</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link text-white">About</a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link  text-white">Team</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link text-white">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );

}

export default Navbar;