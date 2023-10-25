import React from "react";
import "../css/Subscribe.scss";
import subscribe from "../Assest/subscribe.png";
import enteremail from "../Assest/enteremail.png";

const Subscribe = () => {
  return (
    <div className="container  mt-5 mb-5 dv-subscribe">
      <div className="heading">
        <h6 className="h6">MORE UPDATES</h6>
        <h1>Subscribe Newsletter</h1>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <div>
            <img src={subscribe} alt="SUBSCRIBE" className="w-100" />
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 mt-5">
          <div className="row">
            <div className=" col-sm-8 col-md-8 p-3">
              <div className="input-style">
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    className="input-type"
                  />
                  <img src={enteremail} alt="mail" className="email-icon" />
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-4 p-3">
              <div className="btn-style">
                <button className="btn">SUBSCRIBE NOW</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-5">
              <p className="content">
                Subscribe now to stay updated on our latest courses and
                expert-led online sessions. Don't miss out on valuable learning
                opportunities join us today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
