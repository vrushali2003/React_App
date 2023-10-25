import React from "react";
import "../css/Progress.scss"; // Import CSS

const courses = [
  {
    id: 1,
    title: "Learn SQL - SQL Essential Training",
    description:
      "Through our initiatives, we aim to bridge educational gaps. We are committed to making a positive impact on education globally improve learning outcomes.",
    progress: "2 of 20 Videos Completed",
    image: require("../Assest/SqlCourse.png"), // Use require to import the image
  },
  {
    id: 2,
    title: "Learn SQL - SQL Essential Training",
    description: "Through our initiatives, we aim to bridge educational gaps. We are committed to making a positive impact on education globally improve learning outcomes.",
    progress: "3 of 15 Videos Completed",
    image: require("../Assest/SqlCourse.png"),
  },
  {
    id: 3,
    title: "Learn SQL - SQL Essential Training",
    description: "Through our initiatives, we aim to bridge educational gaps. We are committed to making a positive impact on education globally improve learning outcomes.",
    progress: "5 of 10 Videos Completed",
    image: require("../Assest/SqlCourse.png"),
  },
  // Add more courses here as needed
];

const Progress = () => {
  return (
    <div className="container dv-progress-page ">
      <div>
        <h1 className="heading">Progress</h1>
      </div>
      <div className="card ">
      {courses.map((course) => (
        
        <div key={course.id} className="row">
          <div className="col-4 col-sm-4 col-md-4 col-lg-4">
            <div>
              <img className="w-100" src={course.image} alt={course.title} />
            </div>
          </div>

          <div className="col-8 col-sm-8 col-md-8 col-lg-8">
            <div className="course-title">
              <h5>{course.title}</h5>
            </div>
            <div className="d-none d-md-block d-lg-block col-md col-lg">
  <div className="course-description">{course.description}</div>
</div>
            

            <div className="progress">
              <div className="progress-bar"></div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p>Overall Progress</p>
              </div>
              <div>
                <p>{course.progress}</p>
              </div>
            </div>
          </div>

          
        </div>
       
      ))}
       </div>
    </div>
  );
};

export default Progress;