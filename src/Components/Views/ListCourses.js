import React, { useState, useEffect } from "react";
import { Card, Row, Col, Pagination } from "react-bootstrap";
import "../css/ListCourses.scss";
import courseImage1 from "../Assest/sql-course1.png";
import courseImage2 from "../Assest/ui-uxcourse3.png";
import courseImage3 from "../Assest/webdev-course3.png";
import search from "../Assest/search.png";
import pop1 from "../Assest/pop1.png";
import listicon from "../Assest/listicon.png";
import listiconblack from"../Assest/listiconblack.png";
import { Link } from "react-router-dom"; // Import the Link component

const itemsPerPage = 6;
const totalPages = 3;

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const CoursesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [courseData, setCourseData] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    const data = Array.from(
      { length: totalPages * itemsPerPage },
      (_, index) => ({
        image: courseImage3,
        title: "Learn Web Development-Full Stack Essential Training",
        lesson: "Lesson 1",
        duration: "4 weeks",
        level: "level",
        author: "By Dataventics",
        fee: "Rs.399/-",
      })
    );

    data.push({
      image: courseImage2,
      title: "Learn Figma – UI/UX Design Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By  Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage3,
      title: "Learn Web Development-Full Stack Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By  Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage1,
      title: "Learn SQL - SQL Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By  Dataventics",
      fee: "Rs.399-",
    });
    data.push({
      image: courseImage2,
      title: "Learn Figma – UI/UX Design Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By  Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage3,
      title: "Learn Web Development-Full Stack Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By  Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage1,
      title: "Learn SQL - SQL Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By  Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage2,
      title: "Learn Figma UI/UX Design Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By  Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage3,
      title: "Learn Web Development-Full Stack Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By  Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage1,
      title: "Learn SQL - SQL Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By  Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage2,
      title: "Learn Figma UI/UX Design Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By  Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage3,
      title: "Learn Web Development-Full Stack Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By  Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage2,
      title: "Learn Figma UI/UX Design Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By  Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage1,
      title: "Learn SQL - SQL Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By  Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage3,
      title: "Learn Web Development-Full Stack Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage1,
      title: "Learn SQL - SQL Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage2,
      title: "Learn Figma UI/UX Design Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage3,
      title: "Learn Web Development-Full Stack Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage1,
      title: "Learn SQL - SQL Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage2,
      title: "Learn Figma UI/UX Design Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage3,
      title: "Learn Web Development-Full Stack Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage2,
      title: "Learn Figma UI/UX Design Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage1,
      title: "Learn SQL - SQL Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage3,
      title: "Learn Web Development-Full Stack Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage1,
      title: "Learn SQL - SQL Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By Dataventics",
      fee: "Rs.399/-",
    });
    data.push({
      image: courseImage2,
      title: "Learn Figma UI/UX Design Essential Training",
      lesson: "Lesson 2",
      duration: "6 weeks",
      level: "level",
      author: "By  Dataventics",
      fee: "Rs.399/-",
    });

    shuffleArray(data);
    setCourseData(data);
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const coursesOnPage = courseData.slice(startIndex, endIndex);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedCourses([...selectedCourses, value]);
    } else {
      setSelectedCourses(selectedCourses.filter((course) => course !== value));
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };
  const navigateToCourseDetailPage = () => {
    // Navigate to the "Teach" page using JavaScript without changing the URL
    // Here, you can also include any additional logic you need for navigation
    // For example, you might want to scroll to the top of the page on navigation
    //Without scrolling navigate
    window.location.href = "/CourseDetailPage";
  };
  return (
    <div className="container mt-5 mb-3 dv-list-courses">

<div className="ML d-md-none d-lg-none">



<div className="col-12 col-sm-12 col-md-10 col-lg-10">
          <div className="row">
            <div className="col-md-12">


              <Card className="main">
                <Card.Body className="d-md-flex justify-content-between align-items-center">
                  <div className="top">
                    <p className="para">
                      Showing{" "}
                      <span className="text-primary">
                        {coursesOnPage.length} Courses
                      </span>{" "}
                      of {courseData.length} Result
                    </p>
                  </div>
                  <div className="btn">
                    <button
                      className="first"
                      onClick={() => toggleViewMode("grid")}
                    >
                      <img
                        className="grid-listimg"
                        src={pop1}
                        alt="Button Image"
                      />
                      Grid
                    </button>
                    <button
                      className="first black-list-button"
                      onClick={() => toggleViewMode("list")}
                    >
                      <img
                        className="grid-listimg2"
                        src={listiconblack}
                        alt=" listiconblack"
                      />
                      List
                    </button>
                  </div>
                </Card.Body>
              </Card>
              
            </div>
          </div>
          <div className="page">
            <Col md={12}>
              {viewMode === "grid" ? (
                <Row>
                  {coursesOnPage.map((course, index) => (
                    <Col sm={6} md={4} lg={4} key={index}>
                      <Link
                        to="/CourseDetailPage"
                        style={{ textDecoration: "none" }}
                        onClick={navigateToCourseDetailPage}
                      >
                        <Card className="mb-4">
                          <Card.Img
                            variant="top"
                            src={course.image}
                            alt={`Card ${index + 1}`}
                            className="img-fluid"
                          />
                          <Card.Body>
                            <Card.Title  className="course-title">{course.title}</Card.Title>
                            <Card.Text>
                              <div className="row">
                                <div className="col-4">{course.lesson}</div>
                                <div className="col-4">{course.duration}</div>
                                <div className="col-4">{course.level}</div>
                              </div>
                              <div className="line-courses">
                                ------------------------------------
                              </div>
                            </Card.Text>
                            <div className="row">
                              <div className="col">{course.author}</div>
                              <div className="col text-end fees">
                                {course.fee}
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Link>
                    </Col>
                  ))}
                </Row>
              ) : (
                <ul className="list-group">
                  {coursesOnPage.map((course, index) => (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center"
                      key={index}
                    >
                      <div className="row">
                        <div className="col-sm-12">
                          <Link
                            to="/CourseDetailPage"
                            style={{ textDecoration: "none" }}
                            onClick={navigateToCourseDetailPage}
                          >
                            <div className="d-flex">
                              <div className="d-none d-md-block">
                                <img
                                  className="list-img"
                                  src={course.image}
                                  alt={`Course Image`}
                                />
                              </div>
                              <div className="sum ml-3">
                                <div className="fees">{course.fee}</div>
                                <h5 className="course-title text-start">
                                  {course.title}
                                </h5>
                                <div className="sum-flex">
                                  <p>{course.lesson}</p>
                                  <p>{course.duration}</p>
                                  <p>{course.level}</p>
                                </div>
                                <hr className="line-courses" />
                                <div className="line mt-auto">
                                  <div>{course.author}</div>
                                  <button className="but2">
                                    <span className="text-primary">
                                      VIEW DETAILS{" "}
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <Pagination className="mt-4 justify-content-center">
                <Pagination.Prev
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {Array.from({ length: totalPages }, (_, i) => (
                  <Pagination.Item
                    key={i}
                    active={i + 1 === currentPage}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </Col>
          </div>
        </div>


</div>


      <div className="row">
        <div className="col-12 col-sm-12 col-md-2 col-lg-2">
          <div className="card card1">
            <div className="card-body">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search Product.."
                  name="search"
                  className="search"
                />
                <img className="search-icon" src={search} alt={search} />
              </div>
            </div>
          </div>

          <div className="card card2">
            <div className="card-body">
              <h3 className="h3">Categories</h3>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>

              <div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="check1"
                    name="option1"
                    value="something"
                  />
                  <label class="form-check-label" for="check1">
                    Design
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="check2"
                    name="option2"
                    value="something"
                  />
                  <label class="form-check-label" for="check2">
                    Development
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="check3"
                    name="option3"
                    value="something"
                  />
                  <label class="form-check-label" for="check3">
                    Finance
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="check4"
                    name="option4"
                    value="something"
                  />
                  <label class="form-check-label" for="check4">
                    Technology
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="check5"
                    name="option5"
                    value="something"
                  />
                  <label class="form-check-label" for="check5">
                    Health
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card card2">
            
              <div className="card-body">
                <h3 className="h3">Price Level</h3>

                <div class="progress">
                  <div className="progress-bar"></div>
                </div>

                <div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="check6"
                      name="option6"
                      value="something"
                    />
                    <label class="form-check-label" for="check6">
                      Free
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="check7"
                      name="option7"
                      value="something"
                    />
                    <label
                      class="form-check-label"
                      for="check7"
                      style={{ marginRight: "10px" }}
                    >
                      Paid
                    </label>
                  </div>
                </div>
              </div>
            
          </div>
        </div>



        <div className="col-12 col-sm-12 col-md-10 col-lg-10 d-none d-sm-block">
          <div className="row">
            <div className="col-md-12">


              <Card className="main">
                <Card.Body className="d-md-flex justify-content-between align-items-center">
                  <div className="top">
                    <p className="para">
                      Showing{" "}
                      <span className="text-primary">
                        {coursesOnPage.length} Courses
                      </span>{" "}
                      of {courseData.length} Result
                    </p>
                  </div>
                  <div className="btn">
                    <button
                      className="first"
                      onClick={() => toggleViewMode("grid")}
                    >
                      <img
                        className="grid-listimg"
                        src={pop1}
                        alt="Button Image"
                      />
                      Grid
                    </button>
                    <button
                      className="first black-list-button"
                      onClick={() => toggleViewMode("list")}
                    >
                      <img
                        className="grid-listimg2"
                        src={listiconblack}
                        alt=" listiconblack"
                      />
                      List
                    </button>
                  </div>
                </Card.Body>
              </Card>
              
            </div>
          </div>
          <div className="page">
            <Col md={12}>
              {viewMode === "grid" ? (
                <Row>
                  {coursesOnPage.map((course, index) => (
                    <Col sm={6} md={4} lg={4} key={index}>
                      <Link
                        to="/CourseDetailPage"
                        style={{ textDecoration: "none" }}
                        onClick={navigateToCourseDetailPage}
                      >
                        <Card className="mb-4">
                          <Card.Img
                            variant="top"
                            src={course.image}
                            alt={`Card ${index + 1}`}
                            className="img-fluid"
                          />
                          <Card.Body>
                            <Card.Title  className="course-title">{course.title}</Card.Title>
                            <Card.Text>
                              <div className="row">
                                <div className="col-4">{course.lesson}</div>
                                <div className="col-4">{course.duration}</div>
                                <div className="col-4">{course.level}</div>
                              </div>
                              <div className="line-courses">
                                ------------------------------------
                              </div>
                            </Card.Text>
                            <div className="row">
                              <div className="col">{course.author}</div>
                              <div className="col text-end fees">
                                {course.fee}
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Link>
                    </Col>
                  ))}
                </Row>
              ) : (
                <ul className="list-group">
                  {coursesOnPage.map((course, index) => (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center"
                      key={index}
                    >
                      <div className="row">
                        <div className="col-sm-12">
                          <Link
                            to="/CourseDetailPage"
                            style={{ textDecoration: "none" }}
                            onClick={navigateToCourseDetailPage}
                          >
                            <div className="d-flex">
                              <div className="d-none d-md-block">
                                <img
                                  className="list-img"
                                  src={course.image}
                                  alt={`Course Image`}
                                />
                              </div>
                              <div className="sum ml-3">
                                <div className="fees">{course.fee}</div>
                                <h5 className="course-title text-start">
                                  {course.title}
                                </h5>
                                <div className="sum-flex">
                                  <p>{course.lesson}</p>
                                  <p>{course.duration}</p>
                                  <p>{course.level}</p>
                                </div>
                                <hr className="line-courses" />
                                <div className="line mt-auto">
                                  <div>{course.author}</div>
                                  <button className="but2">
                                    <span className="text-primary">
                                      VIEW DETAILS{" "}
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <Pagination className="mt-4 justify-content-center">
                <Pagination.Prev
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {Array.from({ length: totalPages }, (_, i) => (
                  <Pagination.Item
                    key={i}
                    active={i + 1 === currentPage}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
