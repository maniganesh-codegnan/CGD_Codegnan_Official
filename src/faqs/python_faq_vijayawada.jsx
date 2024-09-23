import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. Why is Python important to learn?",
    p: `
         <p>Python has been used in many different domains, such as scientific computing, web development, data science, machine learning, artificial intelligence, and etc. Its influence has been particularly noticeable lately in the disciplines of ML and AI, making it a highly sought-after ability.</p>
    `
  },
  {
    head: "2.What are the eligibility criteria to enroll in this course?",
    p: `
          <p>Particularly, there are no prerequisites to enroll in this course. You can have no or basic understanding of programming.</p>
    `
  },
  {
    head: "3.What is the Python course fee offered by Codegnan?",
    p: `
        <p>The course fee of Python training course in Vijayawada is ₹10,000 that includes job placement assistance with our JAP program. Codegnan also offers online Python program  with lifetime access to course materials.</p>
    `
  },
  {
    head: "4.What certification will I receive upon completion of the course?",
    p: `
        <p>Once you complete your Python training with Codegnan, you get training enrollment certification by Codegnan. Also, you become eligible to enroll for Hackerrank on Python.</p>
    `
  },
  {
    head: "5. Will Codegnan help in securing jobs and internships in Python?",
    p: `
        <p>Yes. Codegnan has a job assurance program that helps you accelerate your career in software. Our 2700+ students are placed in top MNCs till date with the highest salary package of 18.2 LPA and an average salary package of 3-5 LPA.</p>
    `
  },
  {
    head: "6. Does learning python increase salary?",
    p: `
        <p>Just learning Python cannot help in increasing your salary but it can help you choose an appropriate path towards your career growth. Once you become a Python professional, you can choose from various career paths like Data Scientist, Data Analyst, Gaming, Web Developer, Machine Learning Engineer, Software Engineer, etc.</p>
    `
  },
  {
    head: "7. Can I learn Python in 4 weeks?",
    p: `
        <p>A period of 4 weeks is sufficient to learn the concepts of Python programming because it is easily understood as the code is written in merely plain English.</p>
    `
  },
  {
    head: "8. Is it difficult to learn Python?",
    p: `
      <p>Python is widely considered a simple programming language because of its syntax and the pre-existing libraries. Also, Python is a beginner-friendly language to jump in.</p>
  `
  },
  {
    head: "9. What is the course duration of this Python training classes in Vijayawada ?",
    p: `
        <p>Overall, you will be getting 1 month of instructor-led training at Codegnan.</p>

        <p> From installation to development to projects, you will be taken care of from core to advanced. During the overall 1 month of the training program, we will make you familiar with core concepts of Python so that your foundation to Python is strong and you are job-ready.</p>
    `
  },  
  {
    head: "10. Does Codegnan offer online and offline python classes in Vijayawada ?",
    p: `
          <p>Codegnan provides both online and offline Python classes. You will experience live instructor-led training from industry experts for both modes of training.</p>
    `
  }
  
];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <h1><center>Python certification course in Vijayawada FAQs </center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
