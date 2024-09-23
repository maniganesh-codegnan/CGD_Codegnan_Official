import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. Why is Python important to learn?",
    p: `
         <P>The usability of Python has been increased in various domains, such as scientific computing, analytics, robotics, web development, data science, machine learning, artificial intelligence, and so on. The impact of Python has been particularly scrutinized in modern disciplines in the world of AI which makes it a must-know skill in today’s world.</p>
    `
  },
  {
    head: "2. What is the eligibility criteria to enroll in this course?",
    p: `
          <P>You can enroll in Python training without having any basic understanding of programming or OOPs. In another sense, you particularly need no fundamentals to get started with Python programming.</p>
    `
  },
  {
    head: "3. What is the Python course fee offered by Codegnan?",
    p: `
          <P>Our Full stack python development training course will cost you ₹50,000 for students. However, we are currently running a special offer for students with a course fee of only ₹50,000.</p>
    `
  },
  {
    head: "4. What certification will I receive upon completion of the course?",
    p: `
          <P>After the completion of the Python training program, you will be awarded a training enrollment certification which is considered by organizations worldwide. Also, students/learners will be able to crack Hackerrank Certification in Python</p>
    `
  },
  {
    head: "5. Will codegnan help in securing jobs and internships in Python?",
    p: `
          <P>Our students at Codegnan have secured their jobs in multi-national companies with the highest salary package of 18.2 LPA and an average salary package of 3-5 LPA. Almost, 2700+ until now are placed after completing their training in various domains. Additionally, Codegnan has a job assurance program that helps you accelerate your career in software. </p>
    `
  },
  {
    head: "6. Does learning python increase salary?",
    p: `
        <P>In order to become a professional in any domain practice and portfolio are the secrets. Enrolling yourself in Python training alone cannot help in increasing your salary but it can help you choose an appropriate path towards your career growth. With practice, you become open to choose among various career paths like Data Scientist, Data Analyst, Gaming, Web Developer, Machine Learning Engineer, Software Engineer, etc.</p>
    `
  },
  {
    head: "7. Can I learn Python in 4 weeks?",
    p: `
        <P>A period of one month or 4 weeks is sufficient to learn the concepts of Python programming from fundamentals to advanced it is written in merely plain English.</p>
    `
  },
  {
    head: "8. Is it difficult to learn Python?",
    p: `
        <P>Python has now become a prerequisite in the curriculum of sixth-grade students which makes clear that it is a go-to and beginner-friendly language to jump in. In contrast, Python is considered as a simple programming language because of its syntax and the pre-existing libraries. Therefore, if you are planning to learn Python as your first or second programming language, you should learn it carefree. </p>
    `
  },
  {
    head: "9. What is course duration of this Python training classes in Hyderabad?",
    p: `
          <P>The course duration for our python full stack developer classroom training is 100 days with flexible timing options for students.</p>
    `
  },  
  {
    head: "10. Does codegnan offer online and offline python classes in Hyderabad?",
    p: `
          <P>The training at Codegnan includes both online and offline classes. In addition to the modes of training, the classes are not recorded, rather, you are taught in person by various industry experts which clears your doubts right there in the classroom environment.</p>
    `
  }
  
];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <h1><center>Python Full Stack Development Certification in Hyderabad FAQs</center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
