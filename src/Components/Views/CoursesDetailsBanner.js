import React from "react";
import coursesdetailbanner from "../Assest/coursesdetailbanner.png"; // Import your background image

function CoursesDetailsBanner() {
  const headingStyle = {
    position: "absolute",
    top: "50%", // You can adjust the positioning as needed
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white", // You can choose the text color
    zIndex: 2, // Make sure the heading is on top
  };
  return (
    <div className="container-fluid">
    <div className="row" style={{ position: "relative" }}>
      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
      <img src={coursesdetailbanner} className="w-100 " alt="image_courses" />
      <h1 style={headingStyle}>COURSES</h1>
    </div>
    </div>
    </div>
  );
}

export default CoursesDetailsBanner;
