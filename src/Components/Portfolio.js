import React from "react";

import threads from "../img/portfolio/1.jpg";
import explore from "../img/portfolio/2.jpg";
import finish from "../img/portfolio/3.jpg";
import lines from "../img/portfolio/4.jpg";
import southwest from "../img/portfolio/5.jpg";
import window from "../img/portfolio/6.jpg";

const Portfolio = ({portf}) => {
  return (
    <div className="bg-light py-5">
      <h1 className="text-uppercase text-center mt-5 fw-bold">Portfolio</h1>
      <p className="fst-italic text-center mt-3 text-muted">Lorem ipsum dolor sit amet consectetur.</p>

      <div className="d-flex flex-wrap justify-content-evenly mx-5">
        {portf.map((portfolio, index) =>(
          <div className="d-flex flex-row">
            <div className="col text-center card mb-4 border-0" 
                 style={{width: '22rem', height: '22rem'}} key={index}>

              <img src={index === 0 ? threads : 
                        index === 1 ? explore : 
                        index === 2 ? finish : 
                        index === 3 ? lines : 
                        index === 4 ? southwest : window} alt="..." />
                        
              <h3 className="mt-2">{portfolio.h}</h3>
              <p className="fst-italic text-muted">
                {portfolio.p}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>       
  );
}

export default Portfolio;