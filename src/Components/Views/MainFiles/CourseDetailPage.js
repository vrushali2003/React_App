import React from 'react'


import CoursesDetailsBanner from '../CoursesDetailsBanner';
import CoursesDetails from '../CoursesDetails';
import Subscribe from '../Subscribe';
import Accordion1 from '../Accordion1';
import RelatedCourse from '../RelatedCourse';
const CourseDetailPage = () => {
  return (
    <div>
      <CoursesDetailsBanner/>     
       <CoursesDetails/>
      <Accordion1/>
      <RelatedCourse/>
      <Subscribe/>
    </div>
  )
}

export default CourseDetailPage
