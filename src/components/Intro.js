import React from "react";
// import 
import Navbar from "../components/Navbar"
import Header from "../components/Header"

const Intro=()=>{
    return (
        <section>
            <Navbar/>
  <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{"background": "8rem 60rem radial-gradient(50% 50% at 50% 50%, #DAAC79 0%, rgba(218, 172, 120, 0) 100%)"}}>
    <div className="container">
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="my-5 display-3 fw-bold ls-tight">
            Elder-Link <br />
            <span className="change-span" style={{"color":"#DAAC78"}}>for your well-being</span>
          </h1>
          <p style={{"color": "black"}}>
            
            Destination to Companionship, Better Health Support and Longevity
          </p>
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0">
          {/* <div className="card"> */}
            {/* <div className="card-body py-5 px-md-5"> */}
              {/* <form>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1" className="form-control" />
                      <label className="form-label" for="form3Example1">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example2" className="form-control" />
                      <label className="form-label" for="form3Example2">Last name</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control" />
                  <label className="form-label" for="form3Example3">Email address</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" />
                  <label className="form-label" for="form3Example4">Password</label>
                </div>

    <div className="form-check d-flex justify-content-center mb-4">*/}
                  {/* <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked /> */}
                  {/* <label className="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label> */}
                {/* </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Sign up
                </button>

                <div className="text-center"> */}
                  {/* <p>or sign up with:</p> */}
                  {/* <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-google"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </form>  */}
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  </div>

</section>
    );
}

export default Intro