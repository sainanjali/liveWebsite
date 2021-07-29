import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/img3.jpg";


const About = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className='row'>
            <div className="col-10 mx-auto">
            <div className="row">

            
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  Welcome to About 
                  <br/> 
                  <strong className="brand-name"> Anjali Technical</strong>
                </h1>
                <h2 className="my-3">
                  We are the team of talented developer making websites
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laborum at suscipit aliquid voluptatum sunt veritatis aliquam non deleniti exercitationem.
                </h2>
                <div className="mt-3">
                  <NavLink to="/Contact" className="btn-get-started">

                    Contact Now
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={web} className="img-fluid animated" alt="home img" />
              </div>
              </div>
              <br/>
              <br/>
              <br/>
              <br/><br/>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default About;