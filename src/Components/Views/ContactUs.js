import React from "react";
import locationpin from "../Assest/locationpin.png";
import telephone from "../Assest/telephone.png";
import gmail from "../Assest/gmail.png";
import fb from "../Assest/fb.png";
import ins from "../Assest/ins.png";
import linktd from "../Assest/linktd.png";
import profile from "../Assest/profile.jpg";
import mail1 from "../Assest/mail1.jpg";
import phoneno from "../Assest/phoneno.jpg";
import pen from "../Assest/pen.jpg";
import "../css/ContactUs.scss";

function ContactUs() {
  return (
    <div className="container mt-5 mb-5 dv-contact-us">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3 ">
          <div className="heading">
            <h2>Have Any Questions?</h2>
            <p>
              Have an inquiry or some feedback for us? Fill out the form below
              to contact our team.
            </p>
          </div>

          <div className="card">
            <div className="content">
              <img
                src={locationpin}
                alt="locationpin"
                width={60}
                height={60}
                className="icon"
              />
              <div>
                <h6 className="h6">Our Address</h6>
                <p className="para">
                  288, Canal Road, Nandanvan, Nagpur, Maharashtra, India
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="content">
              <img
                src={telephone}
                alt="telephone"
                width={60}
                height={60}
                className="icon"
              />
              <div>
                <h6 className="h6">Phone Number</h6>
                <p className="para">+91-9325545329</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="content">
              <img
                src={gmail}
                alt="gmail"
                width={60}
                height={60}
                className="icon"
              />
              <div>
                <h6 className="h6">Email</h6>
                <p className="para">info@dataventics.com</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="follow-us">Follow Us On:</h4>
            <a href="https://www.facebook.com/your-facebook-profile">
              <img
                src={fb}
                alt="fb"
                width={40}
                height={40}
                className="social-link"
              />
            </a>
            <a href="https://www.instagram.com/dataventics_software_solutions/">
              <img
                src={ins}
                alt="ins"
                width={40}
                height={40}
                className="social-link"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100091950758921">
              <img
                src={linktd}
                alt="linktd"
                width={40}
                height={40}
                className="social-link"
              />
            </a>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-6 col-lg-6 contact-us ">
          <div className="form-content">
            <p className="p">CONTACT WITH US!</p>

            <h2> Get in Touch</h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmode tempor
              eiusmode tempor incididunt ut labore er dolore magna aligua.
            </p>

            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-5">
                <div className="input-style">
                  <img src={profile} alt="profile" className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input"
                    placeholder="Your name"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-5">
                <div className="input-style">
                  <img src={mail1} alt="mail" className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input"
                    placeholder="Email Address"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-5 ">
                <div className="input-contactus">
                  <div className="input-style">
                    <select name="subject" id="subject">
                      <option value="">Select Subject</option>
                      <option value="subject1">Subject 1</option>
                      <option value="subject2">Subject 2</option>
                      <option value="subject3">Subject 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-5">
                <div className="input-style">
                  <img
                    src={phoneno}
                    alt="phoneno"
                    width={20}
                    height={20}
                    className="input-icon"
                  />
                  <input
                    type="number"
                    name="number"
                    id="number"
                    placeholder="Your number"
                    className="input"
                  />
                </div>
              </div>
            </div>
            

            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12">
               
              <div class="form-group">
    <label for="exampleFormControlTextarea1">
   
    </label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"  placeholder="Write Your Message"></textarea>
  
  </div>



              </div>
            </div>

            <div>
              <button className="btn">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;


<img src={pen} alt="pen" className="input-icon-pen" />