import React from "react"; //Import React
import "../css/Courses.scss"; //Import css
import webdev from "../Assest/webdev.png"; //import webdev image
import digitalmarketing from "../Assest/digitalmarketing.png"; //import digitalmarketing image
import uiux from "../Assest/uiux.png"; //import uiux image
import graphic from "../Assest/graphic.png"; //import graphic image
import physics from "../Assest/physics.png"; //import image physics image
import music from "../Assest/music.png"; // import image music image
import lifestyle from "../Assest/lifestyle.png"; // import image lifestyle
import businessgrowth from "../Assest/businessgrowth.png"; // import image businessgrowth
import book from "../Assest/book.png"; //Import book image

function Courses() {
  return (
    <div className="container mt-3 dv-course">
      <div className="title">
        <div>
          <img src={book} alt="book" className="book" />
        </div>
        <div>
          <h5>OUR COURSE CATEGORIES</h5>
        </div>
      </div>
      <div>
        <h1 className="heading-h1">Top Most Categories</h1>
      </div>

      <div className="row">
        {/* Column first  */}
        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
          <div className="card">
            <div className="card-body">
              <img src={webdev} className="card-img-top" alt="webdev" />
              <h4>
                <b>Web Development</b>
              </h4>
              <p className="card-text">
                We design and develop comprehensive curricular aligned with
                academic.
              </p>
              <a href="#" className="know-more-link Courses-links">
                Know More
              </a>
            </div>
          </div>
        </div>

        {/* Column Second  */}
        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
          <div className="card">
            <div className="card-body">
              <img
                src={digitalmarketing}
                className="card-img-top "
                alt="digitalmarketing"
              />
              <h4>
                <b>Digital Marketing</b>
              </h4>
              <p className="card-text">
                A digital market refers to an online platform where goods and
                services.
              </p>
              <a href="#" className="know-more-link Courses-links">
                Know More
              </a>
            </div>
          </div>
        </div>

        {/* Column Third  */}
        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
          <div className="card">
            <div className="card-body">
              <img src={uiux} className="card-img-top " alt="uiux" />
              <h4>
                <b>UI/UX Design</b>
              </h4>
              <p className="card-text">
                Magnetic maintain globally processed with model architectures
                data after.
              </p>
              <a href="#" className="know-more-link Courses-links">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Column Fourth  */}
        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
          <div className="card">
            <div className="card-body">
              <img src={graphic} className="card-img-top " alt="Graphic" />
              <h4>
                <b>Graphic Design</b>
              </h4>
              <p className="card-text">
                Graphic designing is an art and practice of visual
                communication, utilizing.
              </p>
              <a href="#" className="know-more-link Courses-links">
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        {/* Column Fifth */}
        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
          <div className="card">
            <div className="card-body">
              <img src={physics} className="card-img-top  " alt="Physics" />
              <h4>
                <b>Physics Pro Course</b>
              </h4>
              <p className="card-text">
                Physics courses generally cover a wide range of topics,
                including.
              </p>
              <a href="#" className="know-more-link Courses-links">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Column Sixth */}
        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
          <div className="card">
            <div className="card-body">
              <img src={music} className="card-img-top" alt="music" />
              <h4>
                <b>Music Production</b>
              </h4>
              <p className="card-text">
                Music production is responsible for guiding and overseeing the
                entire.
              </p>
              <a href="#" className="know-more-link Courses-links">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Column Sevnth */}
        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
          <div className="card">
            <div className="card-body">
              <img
                src={lifestyle}
                className="card-img-top image-Courses"
                alt="lifestyle"
              />
              <h4>
                <b>Lifestyle</b>
              </h4>
              <p className="card-text">
                These courses cover a wide range of topics related to personal
                development.
              </p>
              <a href="#" className="know-more-link Courses-links">
                Know More
              </a>
            </div>
          </div>
        </div>
        {/* Column Eight */}
        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
          <div className="card">
            <div className="card-body">
              <img
                src={businessgrowth}
                className="card-img-top "
                alt="businessgrowth"
              />
              <h4>
                <b>Business Growth</b>
              </h4>
              <p className="card-text">
                Business growth refers to the process of increasing a company's.
              </p>
              <a href="#" className="know-more-link Courses-links">
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-4 col-sm-4 col-md-4 col-lg-4 column-style">
          <h5 className="h5"> 1500+ </h5>
          <h6 className="h6">CAREER TRANSITIONS</h6>
        </div>
        <div className="col-4 col-sm-4 col-md-4 col-lg-4 column-style">
          <h5 className="h5"> 1500+ </h5>
          <h6 className="h6">CAREER TRANSITIONS</h6>
        </div>
        <div className="col-4 col-sm-4 col-md-4 col-lg-4 column-style">
          <h5 className="h5"> 1500+ </h5>
          <h6 className="h6">CAREER TRANSITIONS</h6>
        </div>
      </div>
    </div>
  );
}

export default Courses;
