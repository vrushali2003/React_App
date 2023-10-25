import React from "react";
import "../css/Aboutorg.scss";
import book from "../Assest/book.png";
import ue from "../Assest/ue.png";
import pe from "../Assest/pe.png";
import tickmark from "../Assest/tickmark.png";
import AdobeStock_1 from "../Assest/AdobeStock_1.png";
import AdobeStock_3 from "../Assest/AdobeStock_3.png";
import AdobeStock2 from "../Assest/AdobeStock2.png";

const Aboutorg = () => {
  return (
    <div className="container dv-about-org mt-5 mb-5">
      <div className="heading-h6">
        <img src={book} alt="book" className="book " />
        <h6 className="h6">ABOUT OUR ORGANIZATION</h6>
      </div>

      <div className="row ">
        <div className="  col-12 col-sm-12 col-md-4 col-lg-4 p-3">
          <div className="row">
            <div className="col-7 col-sm-7 ">
              <div>
                <img src={AdobeStock2} alt="AdobeStock2" className="w-100" />
              </div>
            </div>

            <div className="col-5 col-sm-5">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">10k+</h5>

                  <p class="card-text">Students Active On Our Courses</p>
                </div>
              </div>

              <div>
                <img
                  src={AdobeStock_3}
                  alt="AdobeStock_3"
                  className="w-100  "
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" col-12 col-sm-12 col-md-8 col-lg-8  p-3 ">
          <div>
            <h3>
          
              <b>Welcome to LearnSpan</b>
            </h3>

            <p className="text-align">
              We're not a platform; we're your path to success. Our mission is
              to empower students worldwide, bridging the gap between knowledge
              and ambition. Join us to unlock your full potential.
            </p>
          </div>

          <div className="row">
            <div className="col-6 col-sm-6 col-md-6">
              <div className="image-align ">
                <div>
                  <img src={ue} alt="ue" className="logo" />
                </div>
                <div>
                  <h6 >Undergraduate Education</h6>
                  <p>With flexible courses</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-6 col-md-6">
              <div className="image-align">
                <div>
                  <img src={pe} alt="pe" className="logo" />
                </div>

                <div>
                  <h6 >Postgraduate Education</h6>
                  <p>Study flexibly online</p>
                </div>
              </div>
            </div>

          </div>



          <div className="row">
            <div className="col-5 col-sm-5 col-md-5">
              <div>
                <img src={AdobeStock_1} alt="AdobeStock" className="w-100" />
              </div>
            </div>

            <div className="col-7 col-sm-7 col-md-7">
              <div className="image-align">
                <div>
                  <img src={tickmark} alt="tickmark" className="bottom-img" />
                </div>
                <div>
                  <p>
                    Get access to 4,000+ of our top courses
                  </p>
                </div>
              </div>
              <div className="image-align">
                <div>
                  <img src={tickmark} alt="tickmark" className="bottom-img" />
                </div>
                <div>
                  <p >Popular topics to learn now</p>
                </div>
              </div>
              <div className="image-align">
                <div>
                  <img src={tickmark} alt="tickmark" className="bottom-img" />
                </div>
                <div>
                  <p >Find the right instructor for you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-4 col-sm-4 col-md-4 col-lg-4 column-style">
          <h3 className="h3"> 3.9k+ </h3>
          <p className="p">
            SUCCESSFULLY <span className="span">TRAINED</span>
          </p>
        </div>
        <div className="col-4 col-sm-4 col-md-4 col-lg-4 column-style ">
          <h3 className="h3"> 15k+</h3>
          <p className="p">
            CLASSES <span className="span">COMPLETED</span>
          </p>
        </div>
        <div className="col-4 col-sm-4 col-md-4 col-lg-4 column-style">
          <h3 className="h3"> 100.1k+</h3>
          <p className="p">
            STUDENTS <span className="span">COMUNITY</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutorg;
