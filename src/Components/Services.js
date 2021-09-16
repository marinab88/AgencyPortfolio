import React from "react";

import shoppingCart from "./img/icons/shopping-cart-96.png";
import laptop from "./img/icons/laptop.png";
import lock from "./img/icons/lock.png";

const Services = ({servs}) => {
  return (
    <div className="py-5">
      <h1 className="text-uppercase text-center fw-bold">Services</h1>
      <p className="fst-italic text-center mt-3">Lorem ipsum dolor sit amet consectetur.</p>

      <div className="d-flex flex-row justify-content-around text-center mt-5 mx-5">
        { servs.map((serv, index) => (
          <div className="mx-5" key={index}>
            <img src={index === 0 ? shoppingCart 
                    : index === 1 ? laptop : lock} alt="..." 
                  style={{height: '8rem'}} />
            <h3>{serv.title}</h3>
            <p>{serv.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;