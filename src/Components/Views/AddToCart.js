// import React from "react";
// import "../css/Progress.scss"; // Import CSS

// const courses = [
//   {
//     id: 1,
//     title: "Learn SQL - SQL Essential Training",
//     description:
//       "Through our initiatives, we aim to bridge educational gaps. We are committed to making a positive impact on education globally improve learning outcomes.",
//     progress: "2 of 20 Videos Completed",
//     image: require("../Assest/SqlCourse.png"), // Use require to import the image
//   },
//   {
//     id: 2,
//     title: "Learn SQL - SQL Essential Training",
//     description: "Through our initiatives, we aim to bridge educational gaps. We are committed to making a positive impact on education globally improve learning outcomes.",
//     progress: "3 of 15 Videos Completed",
//     image: require("../Assest/SqlCourse.png"),
//   },
//   {
//     id: 3,
//     title: "Learn SQL - SQL Essential Training",
//     description: "Through our initiatives, we aim to bridge educational gaps. We are committed to making a positive impact on education globally improve learning outcomes.",
//     progress: "5 of 10 Videos Completed",
//     image: require("../Assest/SqlCourse.png"),
//   },
//   // Add more courses here as needed
// ];

// const AddToCart = () => {
//   return (
//     <div className="container dv-progress-page ">
//       <div>
//         <h1 className="heading">ADDED TO CART</h1>
//       </div>
//       <div className="card ">
//       {courses.map((course) => (
        
//         <div key={course.id} className="row">
//           <div className="col-sm-4">
//             <div>
//               <img className="w-100" src={course.image} alt={course.title} />
//             </div>
//           </div>

//           <div className="col-sm-8 ">
//             <div className="course-title">
//               <h3>{course.title}</h3>
//             </div>
//             <div className="course-description">{course.description}</div>

//             <div className="progress">
//               <div className="progress-bar"></div>
//             </div>
//             <div className="d-flex justify-content-between align-items-center">
//               <div>
//                 <p>Overall Progress</p>
//               </div>
//               <div>
//                 <p>{course.progress}</p>
//               </div>
//             </div>
//           </div>

          
//         </div>
       
//       ))}
//        </div>
//     </div>
//   );
// };

// export default AddToCart;



import React from 'react'
import "../css/AddToCart.scss"; // Import CSS
const AddToCart = () => {
  return (
    <div className='container dv-AddToCart mt-5 mb-5'>
      

      <div className='row'>
        <div className='col-sm-4'>

          
        </div>
        <div className='col-sm-8'></div>
      </div>
    </div>
  )
}

export default AddToCart
