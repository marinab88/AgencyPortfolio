import React from "react";

import first from "../img/about/1.jpg";
import second from "../img/about/2.jpg";
import third from "../img/about/3.jpg";
import fourth from "../img/about/4.jpg";

const About = ({about}) => {
  return (
    <div className="py-4">
      <h1 className="text-uppercase text-center mt-5 fw-bold">About</h1>
      <p className="fst-italic text-center mt-3 text-muted">Lorem ipsum dolor sit amet consectetur.</p>

      <div className="d-flex flex-wrap">
        {about.map((about, index) => {
          if (index % 2 === 0) {
            return (
              <div className="d-flex flex-row ms-5 justify-content-start my-4" >
                <div className="col-4 ms-5 text-end">
                  <h3>{about.time}</h3>
                  <h3>{about.h}</h3>
                  <p className="text-muted">{about.p}</p>
                </div>
                <div className="ms-5 justify-content-center">
                  <img src={index === 0 ? first : third } 
                        className="rounded-circle img-fluid" alt="..." />
                </div>
              </div>
            );
          } else {
            return (
              <div className="d-flex flex-row me-5 justify-content-end my-4" >
                <div className="me-4 justify-content-center">
                  <img src={index === 1 ? second : fourth} 
                        className="rounded-circle img-fluid" alt="..." />
                </div>
                <div className="col-4 me-5 text-start">
                  <h3>{about.time}</h3>
                  <h3>{about.h}</h3>
                  <p className="text-muted">{about.p}</p>
                </div>
              </div> 
            );
          }
        })}
      </div>
      <div className="mt-4">
        <h4 className="text-center text-warning">Be Part<br />Of Our<br />Story!</h4>
      </div>
    </div>
  );
}

export default About;