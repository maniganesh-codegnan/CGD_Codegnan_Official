import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. Why is software testing important to learn?",
    p: `
        <p>Software testing is important to learn for tech professionals especially to those working in the software development sector. This knowledge helps them create and deploy a defect-free product into the market.</p>
    `
  },
  {
    head: "2. What is the eligibility criteria to enroll in software testing training in Hyderabad?",
    p: `
        <p>There are certain eligibility criteria for college pass-outs to enrol in software testing training in Hyderabad. This includes </p>
        <ul>
            <li>Having at least 60% marks in graduation, 60% marks in intermediate, and 60% marks in 10th standard for BTech (CSE, IT, ECE, EEE) and MCA students</li>
            <li>Having at least 60% marks in graduation, 60% marks in intermediate, and 60% marks in 10th standard for B.SC and BCA students </li>
        </ul>
        <p>Otherwise, all other professionals regardless of which sector they are working can enrol for the course.</p>
    `
  },
  {
    head: "3. What certification will I receive upon completion of the software testing course?",
    p: `
        <p>You will receive an industry-accredited certificate from Codegnan upon completion of the software testing course. Additionally, you will get an opportunity to win multiple badges by solving challenges available on our Coding platform and HackerRank Platform.</p>
    `
  },
  {
    head: "4. Will codegnan help in securing jobs and internships in Software testing?",
    p: `
        <p> Yes, Codegnan will help in securing jobs and internships in software testing upon successful completion of the course. They assure 100% placement assistance with a minimum of 150 drives in a year.</p>
    `
  },
  {
    head: "5. Does learning software testing increase my salary?",
    p: `
          <p>Yes, learning software testing increases your salary especially if you are a software developer. This is an add-on skill for IT professionals working in the software development process. Having knowledge in software testing helps experts to create and launch defect-free products in the market and gain reputation.</p>
    `
  },
  {
    head: "6. Is it difficult to learn Software testing?",
    p: `
          <p>No, it isn’t difficult to learn software testing if you have a passion for it. At Codegnan, we not only provide theoretical knowledge but also consider a practical training approach. This helps learners get hands-on training on live projects that clears their understanding of each step of software testing.</p>
    `
  },
  {
    head: "7. What is the course duration of software testing training in Hyderabad?",
    p: `
          <p>The course duration of software testing training in Hyderabad is 100 days. This training period may vary depending on the curriculum, number of projects and assignments, class durations, etc.</p>
    `
  }
 

];

const App = () => {
  return (
    <div>
      <h1><center>Software testing course certification in Hyderabad FAQs </center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
