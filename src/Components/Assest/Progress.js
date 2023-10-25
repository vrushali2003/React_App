import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Progress.scss';
import Line from './Line.png'
import courseImage1 from './sql-course1.png';
import courseImage2 from './uiuxcourse3.png';
import courseImage3 from './webdev-course3.png';

const itemsPerPage =3;
const totalPages = 5;

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Progress = () => {
  const [currentPage] = useState(1);
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const data = Array.from({ length: totalPages * itemsPerPage }, (_, index) => {
        let course = {};

      switch (index % 3) {
        case 0:
          course = {
            image: courseImage1,
            title: 'Learn SQL - SQL Essential Training',
            Details:'Through our initiatives, we aim to bridge educational gaps. We are committed to making a positive impact on education globally improve learning outcomes',
            notifier: 'Overall Progress',
            progress: 80,
          };
          break;
        case 1:
          course = {
            image: courseImage2,
            title: 'Learn Figma – UI/UX Design Essential Training',
            Details:'Through our initiatives, we aim to bridge educational gaps. We are committed to making a positive impact on education globally improve learning outcomes',
            notifier: 'Overall Progress',
            progress: 30,
          };
          break;
        case 2:
          course = {
            image: courseImage3,
            title: 'Learn Web Development-Full Stack Essential Training',
            Details:'Through our initiatives, we aim to bridge educational gaps. We are committed to making a positive impact on education globally improve learning outcomes',
            notifier: 'Overall Progress',
            progress: 20,
          };
          break;
        default:
          break;
      }

      return course;
    });

    shuffleArray(data);
    setCourseData(data);
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const coursesOnPage = courseData.slice(startIndex, endIndex);

  return (
    <div className="container dv-list-courses">
    <div className="Heading">
      <div className="font-bold display-4">Progress</div>
      <img className="line" src={Line} alt="Line" />
    </div>
    <br></br>
    <div className="Atharva">
      <ul className="list-group">
        {coursesOnPage.map((course, index) => (
          <li className="list-group-item justify-content-between align-items-start" key={index}>
              <div className='d-flex'>
              <div className=" col-12 col-sm-12 ">             
               <div className='row'>
                <div className='col-sm-3'>
                <div>
                  <img className="list-img" src={course.image} alt="Course Image" />
                </div>
                  </div>
                  <div className='col-sm-9'>
                  <div className="sum">
                  <h5 className="course-title text-start">{course.title}</h5>
                  <div>{course.Details}</div><br></br>
                  <ProgressBar now={course.progress} label={`${course.progress}%`} /><br></br>
                  <div className='d-flex'>
                  <div>{course.notifier}</div>
                  <div>
                    2 of 20 Videos Completed
                  </div>
                </div></div>
                  </div>
                  </div> 
                </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
</div>
  )};
export default Progress;




                