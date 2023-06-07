// import React from "react";
// import {Button, Alert, Row, Col} from 'react-bootstrap';
// import LeftSide from "../components/Leftside";
// import Menu from "../components/Menu";
// import RightSide from "../components/Rightside";
// import Navbar from "../components/Navbar"

// const Intro=()=>{
//     return (
//         <div className="header-wraper">
//             <Navbar/>
//             <div className="main-info">
//                 {/* <a href="#" className="btn-main-offer" style={{"text-decoration":"none"}}>Contact</a> */}
//                 <Menu />
//                 <Row className="landing">
//                 <Col ><LeftSide /></Col>
                
//                 <Col ><RightSide /></Col>
//                 </Row>
//             </div>
//         </div>
//     );
// }

// export default Intro



import React, { Component } from "react";
export default class Signup extends Component {
    render() {
        return (
            <section>
  <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{"background-color": "#fff"}}>
    <div className="container" style={{"padding-top": "5rem"}}>
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="my-5 display-3 fw-bold ls-tight">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>
          <p style={{"color": "black"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card">
            <div className="card-body py-5 px-md-5">
              <form>
                {/* <div className="row">
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
                </div> */}

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control" />
                  <label className="form-label" for="form3Example3">Username</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" />
                  <label className="form-label" for="form3Example4">Password</label>
                </div>

                {/* <div className="form-check d-flex justify-content-center mb-4">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                  <label className="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div> */}

                <button type="submit" className="btn btn-primary btn-block mb-4" style={{"padding-left":"4rem;"}}>
                  Sign up
                </button>

                <div className="text-center">
                  {/* <p>or sign up with:</p> */}
                  <button type="button" className="btn btn-link btn-floating mx-1">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>
        );
    }
}