import React from "react";

import map from  "./img/world-map.jpg";

const Contact = () => {
  return (
    <div>
      <div className="d-flex">
        <img src={map} 
             alt=".." 
             className="position-relative" 
             style={{width: '100%', height: '38rem'}} />
        <div className="position-absolute col-12 text-center">
          <h1 className="text-uppercase mt-5 fw-bold text-white">Contact us</h1>
          <p className="fst-italic mt-3 text-muted">Lorem ipsum dolor sit amet consectetur.</p>
      
          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div className="d-flex row mt-5 mx-5">
              <div className="col">
                <input type="text" 
                       id="name" 
                       className="form-control py-3 mb-2 fw-bold" 
                       placeholder="Your Name *" 
                       aria-label="Your name" 
                       data-sb-validations="required"/>
                  <div className="invalid-feedback text-danger"   data-sb-feedback="name:required">A name is required.
                  </div>
                <input type="text" 
                       id="email" 
                       className="form-control py-3 my-4 fw-bold" 
                       placeholder="Your Email *" 
                       aria-label="Your email" 
                       data-sb-validations="required,email" />
                  <div className="invalid-feedback text-danger" data-sb-feedback="email:required">An email is required.
                  </div>
                  <div className="invalid-feedback text-danger" data-sb-feedback="email:email">Email is not valid.
                  </div>
                <input type="tel" 
                       id="phone" 
                       className="form-control py-3 my-4 fw-bold" 
                       placeholder="Your Phone *" 
                       aria-label="Your phone" 
                       data-sb-validations="required" />
                  <div className="invalid-feedback text-danger" data-sb-feedback="phone:required">A phone is required.
                  </div>
              </div>
              <div className="col">
                <textarea id="message" 
                          className="form-control float-md-end py-5 fw-bold" 
                          placeholder="Your Message *" 
                          data-sb-validations="required"> 
                </textarea> 
                <div className="invalid-feedback"  
                     data-sb-feedback="message:required">  A message is required. 
                </div>
              </div>
              <div>
                <button className="disable text-uppercase btn btn-lg btn-warning text-white fw-bold" id="submitButton" type="submit">Send message </button>
              </div>
            </div>  
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;