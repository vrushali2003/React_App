import React from "react"; //Import React
import frame from "../Assest/frame.png"; //Import  frame image
import "../css/About.scss"; //Import About.scss
import { Link } from "react-router-dom"; //Import Link
import book from "../Assest/book.png"; //Import book image

function About() {
  return (
    <div className="container mt-5 mb-5 dv-about-us">
      <div className="title">
            <div>
              <img src={book} alt="book" className="book" />
            </div>
            <div>
              <h5>MORE ABOUT US</h5>
            </div>
          </div>
      <div className="row">

         {/* Hide on medium and large screens */}
         <h3 className="h3  d-md-none d-lg-none">
              Empowering Minds,Enriching Futures: Discover the Story Behind Our
              Educational Journey!
            </h3>
        {/* First Column */}  
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
          <div className="w-100">
            <img src={frame} alt="React Logo" className="img-fluid" />
          </div>
        </div>
        {/* Second Column */}
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 ">
          <div>
             {/* Hide on medium and large screens */}
             <h2 className="h2 d-none d-sm-block">
              Empowering Minds,Enriching Futures: Discover the Story Behind Our
              Educational Journey!
            </h2>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              explicabo necessitatibus nihil, iusto quo?Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Corrupti explicabo
              necessitatibus nihil, iusto quo?Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Corrupti explicabo necessitatibus
              nihil, iusto quo?Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Corrupti explicabo necessitatibus nihil, iusto
              quo?
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
              explicabo necessitatibus nihil, iusto quo?Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Corrupti explicabo
              necessitatibus nihil, iusto quo?
            </p>


            <div className="btn-style">
              <Link to="/path-to-your-page">
                {/* Learn More Button */}
                <button type="button" className="btn ">
                  LEARN MORE
                </button>
              </Link>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
