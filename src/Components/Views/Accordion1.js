import React from "react";
import "../css/Accordion1.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Accordion, Card } from "react-bootstrap";
import hallowstar from "../Assest/hallowstar.jpg";
import star from "../Assest/star.jpg";
import share from "../Assest/share.png";
import coursemodule from "../Assest/coursemodule.jpg";

const accordionData = [
  {
    header: "INTRODUCTION",
    body: [
      "What is Database",
      "Need of Database",
      "About Database Management System",
      "SQL Server Introduction and Installation",
      "Creating your own database in SQL Server",
      "About Relational Database Management System",
    ],
  },
  {
    header: "Database Normalisation",
    body: [
      "Database Anomalies",
      "Database Normalization",
      "Database Normalization forms",
      "1NF, 2NF, 3NF, BCNF, 4NF",
    ],
  },
  {
    header: "SQL Basics",
    body: [
      "What is SQL",
      "Need of SQL",
      "SQL Process",
      "SQL Rules",
      "SQL Commands - DDL, DML, DCL, TCL, DQL",
      "SQL Datatype",
    ],
  },

  {
    header: "Data Integrity and Constraints",
    body: [
      "Enforcing Data Integrity",
      "Understanding Integrity Constraints",
      "NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, INDEX",
      
    ],
  },

  {
    header: "DDL Commands",
    body: [
      "Creating and Altering table in SQL",
      "Data Definition Language Commands",
      "CREATE, DROP, ALTER, TRUNCATE",
      
    ],
  },
  {
    header: "DML Commands",
    body: [
      "Modifying SQL Data",
      "Data Query Language",
      "Data Manipulation language Commands",
      
    ],
  },
  {
    header: "SQL Operators",
    body: [
      "SQL Operators",
      "Querying SQL data using Clauses:",
      
      
    ],
  },
  {
    header: "SQL FUNCTIONS & PREDICATES",
    body: [
      "SQL Functions",
      "Aggregate Functions",
      "String Functions",
      "Date & Time Functions",
      "SQL Predicates",
      
    ],
  },
  {
    header: "SQL Join Types",
    body: [
      "Creating and Altering table in SQL",
      "Data Definition Language Commands",
      "CREATE, DROP, ALTER, TRUNCATE",
      
    ],
  },
  {
    header: "NULL VALUES & Set Operations",
    body: [
     "NULL Values",
    ],
    
  },
  {
    header: "SQL Indexes",
    body: [
       "SQL Indexes",
    "CREATE Indexes",
    "Type of Indexes",
   "DROP Indexes",

    ],
    
  },
  {
    header: "SQL Views",
   body: [
     "SQL Views",
      "CREATE View",
     "INSERT rows into View",
      "SELECT rows into view",
     "DROP View",
     "Wildcard Operators in SQL",

    ],
    
  },
  {
    header: "Subqueries in SQl",
    body: [
    "Subquery with SELECT",
    "Subquery with INSERT",
   "Subquery with WHERE",
     "Subquery with DELETE",
   "Subquery with UPDATE",

  ],
   
},
];

const Accordion1 = () => {
  return (
    <div className="container mt-5 mb-5 dv-accord ">
      <div className="card h-100">
        <h1 className="h1">COURSES MODULES</h1>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-7 col-lg-7">
            <div className="accordion" id="accordionExample">
              {accordionData.map((item, index) => (
                <div className="accordion-item mt-4 rounded-3" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button rounded-3 text-orange"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                    >
                      {item.header}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body  text-left">
                      {item.body.map((body, contentIndex) => (
                        <div key={contentIndex}>{body}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" col-12 col-sm-12 col-md-5 col-lg-5 mt-5">
          <div>
               <img src={coursemodule} className="w-100 " alt="coursemodule" />

               <div className="row">
                 <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                   <div className="division">
                     <h6 className="h6">Reviews :</h6>

                     <div className="flex">
                       <img src={ star} className="star" />
                       <img src={ star} className="star" />
                       <img src={ star} className="star" />
                       <img src={ star} className="star" />
                       <img src={hallowstar} className="star" />
                     </div>
                   </div>
                 </div>

                 <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                   <div className="division">
                     <h6 className="h6">Duration :</h6>
                     <h6 className="heading">40 hrs</h6>
                   </div>
                 </div>
                 <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                   <div className="division">
                     <h6 className="h6">Instructor :</h6>
                     <h6 className="heading">Vineet & Khijendra</h6>
                   </div>
                 </div>
               </div>

               <div className="para">
                 <p>
                 Discover the SQL Course that students absolutely adore! Join us
                 on a journey where learning SQL becomes an enjoyable and
                 rewarding experience, catering to your passion for data and
                 database management.
                 </p>
                
               </div>

               <div className="button-style">
                 <a href="#" className="btn btn-2">
                   <div className="button-content">
                     <img src={share} className="share" />
                     SHARE THIS COURSES
                   </div>
                 </a>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion1;
