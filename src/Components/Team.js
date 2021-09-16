import React from "react";

import name1 from "./img/team/1.jpg";
import name2 from "./img/team/2.jpg";
import name3 from "./img/team/3.jpg";
import twitter from "./img/icons/twitter.svg";
import facebook from "./img/icons/facebook.svg";
import linkedin from "./img/icons/linkedin.svg";

const Team = ({team}) => {
  return (
    <div className="bg-light py-4">
      <h1 className="text-uppercase text-center mt-5 fw-bold">Our amazing team</h1>
      <p className="fst-italic text-center mt-3 text-muted">Lorem ipsum dolor sit amet consectetur.</p>
      <div className="d-flex justify-content-around mx-5 mt-5">
        {team.map((team, index) => {
          return (
          <div className="text-center ">
            <img src={index === 0 ? name1 : index === 1 ? name2 : name3} className="rounded-circle" alt="..." style={{height: '14rem'}}/>
            <h3>{team.name}</h3>
            <p className="text-muted">{team.function}</p>

            <img src={twitter} href="#!" alt="..." style={{height: '3rem'}}/>
            <img src={facebook} href="#!" alt="..." className="mx-4" style={{height: '3rem'}}/>
            <img src={linkedin} href="#!" alt="..." style={{height: '3rem'}}/>

          </div>);
        })}
      </div>
      <div className="text-center text-muted m-5">
        <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos <br/> non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
      </div>
    </div>
  );
}

export default Team;