import React, { useRef } from "react";
import "../css/Home.scss"; // Import your CSS file
import { Carousel } from "react-bootstrap"; //Import Carousel
import slide1 from "../Assest/slide1.png"; //Import Carousel_Slide1
import slide2 from "../Assest/slide2.png"; //Import Carousel_Slide2
import slide3 from "../Assest/slide3.png"; //Import Carousel_Slide3
import slide4 from "../Assest/slide4.png"; //Import Carousel_Slide4
import Courses from "./Courses"; //Import Courses Page
import About from "./About"; // Import About Page
import Popular_Courses from "./Popular_Courses"; //Import  Popular_Courses Page
import Instructor from "./Instructor"; //Import  Instructor Page
import ContactUs from "./ContactUs"; //Import  ContactUS Page

const Home = () => {
  return (
    <div className="container-fluid">
      <Carousel interval={2000}>
        {/* Set the interval to 5000 milliseconds (5 seconds) */}
        <Carousel.Item>
          {/* Add Carousel image1*/}
          <img className="d-block w-100 img-fluid" src={slide1} alt="slide1" />
        </Carousel.Item>
        <Carousel.Item>
          {/* Add Carousel image2*/}
          <img className="d-block w-100 img-fluid" src={slide2} alt="slide2" />
        </Carousel.Item>
        <Carousel.Item>
          {/* Add Carousel image3*/}
          <img className="d-block w-100 img-fluid" src={slide3} alt="slide3" />
        </Carousel.Item>
        <Carousel.Item>
          {/* Add Carousel image4*/}
          <img className="d-block w-100 img-fluid" src={slide4} alt="slide4" />
        </Carousel.Item>
      </Carousel>

      <Courses />
      <About />
      <Popular_Courses />
      <Instructor />
      <ContactUs />
    </div>
  );
};

export default Home;
