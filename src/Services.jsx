import React from "react";
import web from "../src/laptop.jpg";
import app from "../src/app.jpg";
import android from "../src/android.jpg";
import digital from "../src/digital-marketing.webp";
import marketing from "../src/marketing.webp";
import software from "../src/Software.webp";


const Services = () => {
    return (
      <>  
      <div className="my-5">
      <h1 className="text-center"> Our Services </h1>
      <hr/>
     <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <img src={web} class="card-img-top" alt="..."/>

            <div class="card-body">
            <h4 className="text-center font-weight-bold">Web Development</h4>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-primary btn-outline-dark">View</button>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={app} class="card-img-top" alt="..."/>

            <div class="card-body">
            <h4 className="text-center font-weight-bold"> App Development </h4>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary btn-outline-dark">View</button>
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={android} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h4 className="text-center font-weight-bold"> Android Development </h4>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary btn-outline-dark">View</button>
                  
                </div>
               
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src={digital} class="card-img-top" alt="..."/>

            <div class="card-body">
            <h4 className="text-center font-weight-bold"> Digital Marketing </h4>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary btn-outline-dark">View</button>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={marketing} class="card-img-top" alt="..."/>

            <div class="card-body">
            <h4 className="text-center font-weight-bold"> Online Marketing </h4>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary btn-outline-dark">View</button>
                  
                </div>
                </div>
                
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src={software} class="card-img-top" alt="..."/>

            <div class="card-body">
            <h4 className="text-center font-weight-bold"> Software Development </h4>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-primary btn-outline-dark">View</button>
                  </div>
                
              </div>
            </div>
          </div>
        </div>

        
        
        
      </div>
    </div>
  </div>
  </div>
      </>
    );
};

export default Services;