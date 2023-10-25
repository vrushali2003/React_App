import React from "react";
import studentlogo from "../Assest/studentlogo.jpg";
import "../css/CoursesDetails.scss";
import sql from "../Assest/sql.jpg";
import lessons from "../Assest/lessons.jpg";
import playvedio from "../Assest/playvedio.jpg";
import bar from "../Assest/bar.jpg";
import language from "../Assest/language.jpg";
import level from "../Assest/level.jpg";
import star from "../Assest/star.jpg";
import hallowstar from "../Assest/hallowstar.jpg";
import playicon from "../Assest/playicon.png";
import share from "../Assest/share.png";

import backgroundcircle from "../Assest/backgroundcircle.png";
import duration from "../Assest/duration.jpg";

const CoursesDetails = () => {
  return (
    <div className="container mt-5 mb-5 dv-courses-details">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8">
          <div className="card d-flex h-100">
            <div class="image-container-main">
              <img src={sql} class="w-100" alt="sql image" />
              <button class="image-button">
                <img src={duration} class="clock" alt="watch" />6 WEEKS
              </button>
            </div>

            <div className="row">
              <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                <div className="d-flex">
                <img src={lessons} className="icon" />
                <p className="para">8 Lessons</p>
              </div>
              </div>
              <div className="col-4 col-sm-4 col-md-4 col-lg-4">
              <div className="d-flex">
                <img src={studentlogo} className="icon " />
                <p className="para">50k+ Students</p>
              </div>
              </div>
              <div className="col-4 col-sm-4 col-md-4 col-lg-4">
              <div className="d-flex">
                <img src={bar} className="icon " />
                <p className="para">Beginner</p>
              </div>
              </div>
            </div>

            <div className="ess-train ">
              <h3>
                <b>Learn SQL-SQL Essentail Tranning</b>{" "}
              </h3>
            </div>

            <div className="row">
              <div className="col-3 col-sm-3 col-md-3 col-lg-3 right-border">
                <div className="division">
                  <h6>Instructor :</h6>
                  <h6>
                    <b> Vineet & Khijendra</b>
                  </h6>
                </div>
              </div>

              <div className="col-3 col-sm-3 col-md-3 col-lg-3 right-border">
                <div className="division">
                  <h6>Category :</h6>
                  <h6>
                    {" "}
                    <b>UI/UX Designing</b>
                  </h6>
                </div>
              </div>

              <div className="col-3 col-sm-3 col-md-3 col-lg-3 right-border">
                <div className="division">
                  <h6>Duration :</h6>
                  <h6>
                    <b>40 hrs</b>
                  </h6>
                </div>
              </div>
              <div className=" col-3 col-sm-3 col-md-3 col-lg-3">
                <div className="division">
                  <h6>Reviews :</h6>
                  <div className="d-flex">
                    <div className="flex">
                      <img src={star} className="star" />
                      <img src={star} className="star" />
                      <img src={star} className="star" />
                      <img src={star} className="star" />
                      <img src={hallowstar} className="star" />
                    </div>
                    <div className="margin">
                      <h6>(0.4)</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="paragraph">
                After successfully completion of course, Quizes, Practical
                Performance you will <br></br>receive a Certificate of
                Completion. Which will be the proof of that you have<br></br>
                completed the courses successfully and you know the fundamentals
                of the courses.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <div className="card d-flex h-100">
            <div class="video-container">
              <img src={playvedio} class="w-100" alt="Video Thumbnail" />
              <img src={playicon} class="playicon" alt="Play Icon" />
            </div>

            <h4 className="h4">RS.399/- </h4>
            <div className="button-style">
              <a href="#" className="btn btn-1">
                ADD TO CART
              </a>
            </div>
            <div className="button-style">
              <a href="#" className="btn btn-2">
                BUY NOW
              </a>
            </div>
            <div>
              <h3 className="heading-h3">
                <b> Course Informatio</b>n
              </h3>
            </div>

            <div className="d-flex with-dashed-border">
              <div>
                <img src={studentlogo} className="vedio" />
              </div>
              <div>
                <p>
                  <b>Instructor :</b>
                </p>
              </div>
              <div>
                <h6 className="h6">Vineet & Khijendra</h6>
              </div>
            </div>

            <div className="d-flex with-dashed-border">
              <div>
                <img src={lessons} className="vedio" />
              </div>
              <div>
                <p>
                  {" "}
                  <b> Lessons :</b>
                </p>
              </div>
              <div>
                <h6 className="h6">10</h6>
              </div>
            </div>

            <div className="d-flex with-dashed-border">
              <div>
                <img src={duration} className="vedio" />
              </div>
              <div>
                <p>
                  {" "}
                  <b> Duration :</b>
                </p>
              </div>

              <div>
                <h6 className="h6">40 hrs</h6>
              </div>
            </div>

            <div className="d-flex with-dashed-border">
              <div>
                <img src={level} className="vedio" />
              </div>
              <div>
                <p>
                  {" "}
                  <b> Level :</b>
                </p>
              </div>
              <div>
                <h6 className="h6">Beginners</h6>
              </div>
            </div>

            <div className="d-flex">
              <div>
                <img src={language} className="vedio" />
              </div>
              <div>
                <p>
                  {" "}
                  <b> Language :</b>
                </p>
              </div>
              <div>
                <h6 className="h6">English</h6>
              </div>
            </div>
            <div className="button-style">
              <a href="#" className="btn btn-2">
                <div className="button-content">
                  <img src={share} className="share" />
                  SHARE THIS COURSES
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
