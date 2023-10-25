import React from "react";
import PrateekSir from "../Assest/PrateekSir.jpg";
import SmitaMam from "../Assest/SmitaMam.jpg";
import AvantiMam from "../Assest/AvantiMam.jpg";
import YogendraSir from "../Assest/YogendraSir.jpg";
import coursegirl from "../Assest/coursegirl.png";
import "../css/OurInstructor.scss";
import book from "../Assest/book.png";

const OurInstructor = () => {
  const navigateToCoursesPages = () => {
    // Navigate to the "Teach" page using JavaScript without changing the URL
    // Here, you can also include any additional logic you need for navigation
    // For example, you might want to scroll to the top of the page on navigation
    //Without scrolling navigate
    window.location.href = "/CoursesPages ";
  };

  return (
    <div className="container mt-5 mb-5 dv-our-instructor">
      <div className="title">
        <div>
          <img src={book} alt="book" className="book" />
        </div>
        <div>
          <h6>OUR INSTRUCTOR</h6>
        </div>
      </div>

      <div className="heading ">
        <h3>Meet Our Expert Instructor</h3>
      </div>

      <div className="row">
        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
          <img src={PrateekSir} alt="PrateekSir" className="w-100" />

          <div>
            <h6 className="h5">Prateek Ghumare</h6>
            <p className="para">Founder & CEO</p>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
          <img src={SmitaMam} alt="SmitaMam" className="w-100" />
          <div>
            <h6 className="h5">Smita Deshpande</h6>

            <p className="para">COO</p>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
          <img src={AvantiMam} alt="AvantiMam" className="w-100" />
          <div>
            <h6 className="h5">Avanti Jadhao</h6>

            <p className="para">BI Consultant</p>
          </div>
        </div>

        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
          <img src={YogendraSir} alt="YogendraSir" className="w-100" />
          <div>
            <h6 className="h5">Yogendra Waghale</h6>

            <p className="para">Project Manager</p>
          </div>
        </div>
      </div>

      
      <div className="course-girl ">
      <div className="card">
          
      <div className="row ">
        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
         
            <div>
              <h6 className="para">POPULAR COURSES</h6>
            </div>
            <div>
              <h1 className="h1">Get The Best Courses & <br/>Upgrade Your Skills</h1>
            </div>
            <div className="btn-style">
              <button className="btn">Join Now</button>
            </div>
          </div>
        
        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
          <div>
            <img src={coursegirl} alt="coursegirl" className="w-100" />
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default OurInstructor;
