import React from "react";

import twitter from "./img/icons/twitter.svg";
import facebook from "./img/icons/facebook.svg";
import linkedin from "./img/icons/linkedin.svg";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-around m-4">
          <div className="col-4">
            <a>Copyright &copy; Your Website 2021</a>
          </div>
          <div className="col-4">
            <img src={twitter} href="#!" alt="..." style={{height: '3rem'}}/>
            <img src={facebook} href="#!" alt="..." className="mx-4" style={{height: '3rem'}}/>
            <img src={linkedin} href="#!" alt="..." style={{height: '3rem'}}/>
          </div>
          <div className="col-4">
            <a className="text-dark text-decoration-none me-3" href="#!"> Privacy Policy</a>
            <a className="text-dark text-decoration-none" href="#!"> Term of Use</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;