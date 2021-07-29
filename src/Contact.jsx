import React from "react";


const Contact = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="container Contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="mobile number" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">Submit form</button>



            </form>
          </div>
        </div>
      </div>


    </>
  );
};

export default Contact;