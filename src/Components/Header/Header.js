import React from "react";

import headerbg from "./header-bg.jpg";
import Navbar from "./Navbar";



const Header = () => {
  return (
    <div> 
      <Navbar />
      <div className="d-flex">
        <img src={headerbg} alt="background" className="position-relative" style={{width: '100%', height: '40rem'}} href="#home" />

        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
          <h2 className="text-capitalize fst-italic display-6 fw-bold">Welcom to our studio!</h2>
          <h1 className="text-uppercase fw-bold display-4">It's nice to meet you</h1>
          <button type="button" className="btn btn-warning btn-lg text-uppercase mt-5 p-3 text-white fw-bold">Tell me more</button>
        </div>
      </div>
    </div>
  );
}

export default Header;