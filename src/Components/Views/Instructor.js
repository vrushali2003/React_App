import React from "react";
import important from "../Assest/important.png";
import "../css/Instructor.scss";
import book from "../Assest/book.png";

const Instructor = () => {
  const navigateToTeach = () => {
    // Navigate to the "Teach" page using JavaScript without changing the URL
    // Here, you can also include any additional logic you need for navigation
    // For example, you might want to scroll to the top of the page on navigation
    // Without scrolling navigate
    window.location.href = "/Teach";
  };

  return (
    <div className="container mt-5 mb-5 dv-instructor text-center">
      <div className="row">
        <div className=" col-12 col-sm-12 col-md-7 col-lg-7">
          <div className="title">
            <div>
              <img src={book} alt="book" className="book" />
            </div>
            <div>
              <h5>INSTRUCTOR</h5>
            </div>
          </div>
          <div>
            <h2 className="pb-3">BECOME AN INSTRUCTOR</h2>
          </div>

          <div className="ML d-md-none d-lg-none">
            <img src={important} className="w-100" alt="important" />
          </div>

          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
              <div className="card">
                <h5 className="h5">Teach Your Topic</h5>
              </div>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
              <div className="card">
                <h5 className="h5">Plan Your Syllabus</h5>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
              <div className="card">
                <h5 className="h5">Record Your Video</h5>
              </div>
            </div>

            <div className="col-6 col-sm-6 col-md-6 col-lg-6">
              <div className="card">
                <h5 className="h5">Launch Your Courses</h5>
              </div>
            </div>
          </div>

          <div className="btn-style">
            {/* Button Join Now with custom click event */}
            <button className="btn" onClick={navigateToTeach}>
              Join Now
            </button>
          </div>
        </div>

        <div className=" col-12 col-sm-12 col-md-5 col-lg-5 d-none d-sm-block">
          <img src={important} className="w-100" alt="important" />
        </div>
      </div>
    </div>
  );
};

export default Instructor;
