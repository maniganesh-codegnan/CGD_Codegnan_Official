import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. Why is Python important to learn?",
    p: `
         <p>Python is an easy-to-code language that can allow you to go beyond website development, unlike HTML, CSS and JavaScript. Its demand is constantly rising globally due to its advantages in the IT sector, and it is likely to rank among the highest-paying jobs with less experience requirements.</p>
    `
  },
  {
    head: "2.What are the eligibility criteria to enroll in this course?",
    p: `
          <p>At Codegnan, you can enroll for a Python course if you are a college student or fresh graduate, a coding beginner, an IT professional, or someone interested in automation.</p>
    `
  },
  {
    head: "3.What is the Python course fee offered by Codegnan?",
    p: `
        <p>Codegnan charges ₹10,000 for the Python course, where industry experts and professional Python developers train students thoroughly and provide them with hands-on knowledge with three live projects. You can also avail the course at a discounted price of ₹8,000.</p>
    `
  },
  {
    head: "4.What certification will I receive upon completion of the course?",
    p: `
        <p>After completing the course, you will receive an industry-recognised certificate from Codegnan and an opportunity to win HackerRank certification.</p>
    `
  },
  {
    head: "5. Will Codegnan help in securing jobs and internships in Python?",
    p: `
        <p>Codegnan Python training institute in Hyderabad will make you job-ready with quality education and hands-on learning of live projects that will help you land jobs and internships in Python smoothly.</p>
    `
  },
  {
    head: "6. Does learning python increase salary?",
    p: `
        <p>Yes, Python can be a great add-on to your CV and help you get high-paying jobs with less experience, as the demand for Python learners is rapidly growing throughout the country.</p>
    `
  },
  {
    head: "7. Can I learn Python in 4 weeks?",
    p: `
        <p>Yes, you can learn the basics of Python within 4 weeks. At Codegnan, you can also gain hands-on experience with three live projects, which will help you land a high-paying job.</p>
    `
  },
  {
    head: "8. Is it difficult to learn Python?",
    p: `
      <p>No, Python is an easy-to-understand language that uses English syntax that you can read, understand, and implement easily. It is a beginner-friendly coding language, so even a new coder can learn Python and start their programming journey.</p>
  `
  },
  {
    head: "9. What is the course duration of this Python training classes in Hyderabad ?",
    p: `
        <p>The Python course duration is 1 month, where you can learn from industry experts and experience working on 3 live projects that make you job-ready and are a great addition to your resume.</p>
    `
  },  
  {
    head: "10. Does Codegnan offer online and offline python classes in Hyderabad ?",
    p: `
          <p>Yes, Codegnan offers both classroom training (offline classes) and online classes in Hyderabad that include interactive sessions, real-time doubt clearance, and hands-on learning. You can apply for either of these options; however, students away from Hyderabad can choose one-on-one online classes.</p>
    `
  }
  
];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <h1><center>Python certification course in Hyderabad FAQs </center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
