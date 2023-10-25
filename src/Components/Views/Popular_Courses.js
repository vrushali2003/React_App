import React from 'react';
import pop from '../Assest/sql-course1.png';
import pop2 from '../Assest/ui-uxcourse3.png';
import pop3 from '../Assest/webdev-course3.png';
import book from '../Assest/book.png';
import '../css/PopularCourses.scss'; // Import the custom CSS
import Carousel from 'better-react-carousel';

const Popular_Courses = () => {
  return (
    <div className='container-fluid mt-5 mb-5 p-5 popular-main-course' >
      <div className='book-img-'>
        <img className='img' src={book} height={'20px'} width={'20px'} alt="Book" />Popular Courses
        </div>
      
      <h1 className="popular-courses-h1">OUR POPULAR ONLINE COURSES</h1>
      <Carousel cols={4} rows={1} gap={40} loop>
        <Carousel.Item className='main'>
          <div className='ABC'>
            <div className='card p-2'>
              <img className='card-img-top-20' src={pop} alt="Card 1" />
              <div className='card-body'>
                <h5 className='card-title'>Learn Figma - UI/UX Design <br></br>
                                          Essential Tranings<br></br></h5>
                <p className='card-text'>
                  <div className='row-Courses'>
                    <div>
                    Lesson 9
                    </div>
                    <div>
                    2 week
                    </div>
                    <div>
                    All Levels
                    </div>
                    </div><div className='line-courses d-none d-sm-block'>----------------------------------------</div><div className='d-md-none d-lg-none'>--------------------------</div>
                </p>
                <div className='row-Courses2'><div>By Dataventics</div><div className='fees'>Rs.399/-</div></div>
               </div>
            </div>
          </div>
        </Carousel.Item>
        
        <Carousel.Item className='main'>
          <div className='ABC'>
            <div className='card p-2'>
              <img className='card-img-top-20' src={pop2} alt="Card 1" />
              <div className='card-body'>
                <h5 className='card-title'>Learn Figma - UI/UX Design <br></br>
                                          Essential Tranings<br></br></h5>
                <p className='card-text'>
                  <div className='row-Courses'>
                    <div>
                    Lesson 9
                    </div>
                    <div>
                    2 week
                    </div>
                    <div>
                    All Levels
                    </div>
                    </div><div className='line-courses d-none d-sm-block'>----------------------------------------</div><div className='d-md-none d-lg-none'>--------------------------</div>
                </p>
                <div className='row-Courses2'><div>By Dataventics</div><div className='fees'>Rs.399/-</div></div>
               </div>
            </div>
          </div>
        </Carousel.Item><Carousel.Item className='main'>
          <div className='ABC'>
            <div className='card p-2'>
              <img className='card-img-top-20' src={pop3} alt="Card 1" />
              <div className='card-body'>
                <h5 className='card-title'>Learn Figma - UI/UX Design <br></br>
                                          Essential Tranings<br></br></h5>
                <p className='card-text'>
                  <div className='row-Courses'>
                    <div>
                    Lesson 9
                    </div>
                    <div>
                    2 week
                    </div>
                    <div>
                    All Levels
                    </div>
                    </div><div className='line-courses d-none d-sm-block'>----------------------------------------</div><div className='d-md-none d-lg-none'>--------------------------</div>
                </p>
                <div className='row-Courses2'><div>By Dataventics</div><div className='fees'>Rs.399/-</div></div>
               </div>
            </div>
          </div>
        </Carousel.Item><Carousel.Item className='main'>
          <div className='ABC'>
            <div className='card p-2'>
              <img className='card-img-top-20' src={pop} alt="Card 1" />
              <div className='card-body'>
                <h5 className='card-title'>Learn Figma - UI/UX Design <br></br>
                                          Essential Tranings<br></br></h5>
                <p className='card-text'>
                  <div className='row-Courses'>
                    <div>
                    Lesson 9
                    </div>
                    <div>
                    2 week
                    </div>
                    <div>
                    All Levels
                    </div>
                    </div><div className='line-courses d-none d-sm-block'>----------------------------------------</div><div className='d-md-none d-lg-none'>--------------------------</div>
                </p>
                <div className='row-Courses2'><div>By Dataventics</div><div className='fees'>Rs.399/-</div></div>
               </div>
            </div>
          </div>
        </Carousel.Item><Carousel.Item className='main'>
          <div className='ABC'>
            <div className='card p-2'>
              <img className='card-img-top-20' src={pop2} alt="Card 1" />
              <div className='card-body'>
                <h5 className='card-title'>Learn Figma - UI/UX Design <br></br>
                                          Essential Tranings<br></br></h5>
                <p className='card-text'>
                  <div className='row-Courses'>
                    <div>
                    Lesson 9
                    </div>
                    <div>
                    2 week
                    </div>
                    <div>
                    All Levels
                    </div>
                    </div><div className='line-courses d-none d-sm-block'>----------------------------------------</div><div className='d-md-none d-lg-none'>--------------------------</div>
                </p>
                <div className='row-Courses2'><div>By Dataventics</div><div className='fees'>Rs.399/-</div></div>
               </div>
            </div>
          </div>
        </Carousel.Item><Carousel.Item className='main'>
          <div className='ABC'>
            <div className='card p-2'>
              <img className='card-img-top-20' src={pop3} alt="Card 1" />
              <div className='card-body'>
                <h5 className='card-title'>Learn Figma - UI/UX Design <br></br>
                                          Essential Tranings<br></br></h5>
                <p className='card-text'>
                  <div className='row-Courses'>
                    <div>
                    Lesson 9
                    </div>
                    <div>
                    2 week
                    </div>
                    <div>
                    All Levels
                    </div>
                    </div><div className='line-courses d-none d-sm-block'>----------------------------------------</div><div className='d-md-none d-lg-none'>--------------------------</div>
                </p>
                <div className='row-Courses2'><div>By Dataventics</div><div className='fees'>Rs.399/-</div></div>
               </div>
            </div>
          </div>
        </Carousel.Item><Carousel.Item className='main'>
          <div className='ABC'>
            <div className='card p-2'>
              <img className='card-img-top-20' src={pop} alt="Card 1" />
              <div className='card-body'>
                <h5 className='card-title'>Learn Figma - UI/UX Design <br></br>
                                          Essential Tranings<br></br></h5>
                <p className='card-text'>
                  <div className='row-Courses'>
                    <div>
                    Lesson 9
                    </div>
                    <div>
                    2 week
                    </div>
                    <div>
                    All Levels
                    </div>
                    </div><div className='line-courses d-none d-sm-block'>----------------------------------------</div><div className='d-md-none d-lg-none'>--------------------------</div>
                </p>
                <div className='row-Courses2'><div>By Dataventics</div><div className='fees'>Rs.399/-</div></div>
               </div>
            </div>
          </div>
        </Carousel.Item><Carousel.Item className='main'>
          <div className='ABC'>
            <div className='card p-2'>
              <img className='card-img-top-20' src={pop2} alt="Card 1" />
              <div className='card-body'>
                <h5 className='card-title'>Learn Figma - UI/UX Design <br></br>
                                          Essential Tranings<br></br></h5>
                <p className='card-text'>
                  <div className='row-Courses'>
                    <div>
                    Lesson 9
                    </div>
                    <div>
                    2 week
                    </div>
                    <div>
                    All Levels
                    </div>
                    </div><div className='line-courses d-none d-sm-block'>----------------------------------------</div><div className='d-md-none d-lg-none'>--------------------------</div>
                </p>
                <div className='row-Courses2'><div>By Dataventics</div><div className='fees'>Rs.399/-</div></div>
               </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Popular_Courses;
