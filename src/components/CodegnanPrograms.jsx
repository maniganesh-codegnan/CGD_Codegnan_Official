// import React from "react";
import "./CodegnanPrograms.css";
import whyImage from "../photos/all_Programs/why.png";
import studyStudent from "../photos/all_Programs/studyStudent.png";

function CodegnanPrograms({enrollCourse}) {
  return (
    <div className="container-fluid  enroll-container">    
      <div className="row m-5 justify-content-left ">
        <div className="col-md-6">
        <div className="programs-certification">
        <img src={whyImage} alt=""  className="whyCertificate"/> 
          <h1 className="font-weight-bold">Why</h1>
          <h3>enroll in Codegnans <br /> Certification programs</h3>
        </div>  
        <br /><br /><br /><br />
        <div className="enroll-course-text mt-4" style={{ textAlign:'left' ,margin:'2rem'}}>{enrollCourse}</div>      
        </div>
        <div className="col-md-6">
        <img src={studyStudent} alt="" className="studentImg" />
        </div>
      </div>
    </div>
  );
}

export default CodegnanPrograms;
