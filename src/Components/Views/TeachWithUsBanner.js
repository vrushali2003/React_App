import React from "react";
import teachwithusbanner from "../Assest/teachwithusbanner.png"; // Import your background image
const TeachWithUsBanner = () => {
  //Adding Inline CSS
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
          <img src={teachwithusbanner} className="w-100" alt="teachwithus" />
          <div>
            <h2 style={headingStyle}>TEACH WITH US </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachWithUsBanner;
