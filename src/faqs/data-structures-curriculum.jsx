import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. What is the course fee for the Data Structures and Algorithm course in Vijayawada?",
    p: `
         <p>The course fee for the Data Structures and Algorithms course in Vijayawada is ₹30,000 for both online and offline courses. But eligible candidates can avail up to 50% discount on that price.</p>
    `
  },
  {
    head: "2. What is the course duration for the Data Structures and Algorithm course? ",
    p: ` <p>The course duration for the Data Structures and Algorithm course is <b>3 months.</b></p>
    `
  },
  {
    head: "3. Will I receive a certificate upon completing the course?",
    p: `
        <p>Yes, you will receive an authorized certification upon completing the course. To get the certificate, you need to pass a test that we would arrange on our Coding and Hackerrank Platforms.</p>
    `
  },
  {
    head: "4. Are offline (in-person) and online classes available for this course in Vijayawada?",
    p: `
        <p>Yes, you will have the option of choosing between offline (in-person) and online classes for the Data Structures and Algorithms course in Vijayawada.</p>
    `
  },
  {
    head: "5. What are the eligibility requirements for this course?",
    p: `
        <p>There are no such eligibility criteria for pursuing the course. However, we recommend this to postgraduates or students who are in their final semesters.</p>
    `
  },
  {
    head: " 6. Is job assistance provided by codegnan upon completing the course?",
    p: `
        <p>Yes, job assistance will be provided by codegnan upon successfully completing the course. But you can also opt for their 100-Day Job Accelerator Program (JAP), which so far has helped over 20,000 students get placed around the world. </p>
    `
  }
  
];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <h1><center>Data Structures and Algorithm course in Vijayawada FAQs</center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
