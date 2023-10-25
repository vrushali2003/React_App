import React from 'react'
import "../css/whatwedo.scss";
import book from "../Assest/book.png";
import cardimg1 from "../Assest/cardimg1.png";
import cardimg2 from "../Assest/cardimg2.png";
import cardimg3 from "../Assest/cardimg3.png";
const WhatWeDo = () => {
  return (
    <div className="container mt-5 mb-5 dv-what-we-do ">
      
             <div className="title">
         <div>
           <img src={book} alt="book" className="book" />
        </div>
        <div>
          <h5>WHAT WE DO</h5>
         </div>
      </div>

       <div className="heading  mb-3 ">
         <h3>Online Education Tailored for You</h3>
       </div>
      <div className="row">

        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <div className="card">

<div className="card-img-circle">

              <img className="w-50" src={cardimg1} alt="circle" />
            </div>
             <h4 className="h4">Learn From Anywhere</h4>
            <p className="paragraph">
               Competently unleash competitive initiatives for
               alternative interfaces.Enthusiastically supply resource
               eveling platforms
            </p>

          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        <div className="card">
        <div className="card-img-circle">
              <img className="w-50" src={cardimg2} alt="circle" />
            </div>

            <h4 className="h4">Expert Instructor</h4>
            <p className="paragraph">
            Competently unleash competitive initiatives for
               alternative interfaces.Enthusiastically supply resource
               eveling platforms
            </p>
</div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        <div className="card">
        <div className="card-img-circle">
              <img className="w-50" src={cardimg3} alt="circle" />
            </div>

            <h4 className="h4">24/7 Live Support</h4>
            <p className="paragraph">
              Competently unleash competitive initiatives for
               alternative interfaces.Enthusiastically supply resource
               eveling platforms
            </p>
</div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
