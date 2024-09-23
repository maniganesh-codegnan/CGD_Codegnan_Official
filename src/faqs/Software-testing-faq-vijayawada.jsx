import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. Why is software testing important to learn?",
    p: `
        <p>Software testing is important to learn for tech professionals for identifying defects in a software at its initial phases. Software testing is an essential part of SDLC (Software Development Lifecycle) where testers ensure the product is ready to launch into the market. However, if they identify defects within the software, they need to immediately report to the development team.</p>
    `
  },
  {
    head: "2. What is the eligibility criteria to enroll in software testing training in Vijayawada?",
    p: `
        <p>There is no eligibility criteria for IT professionals to enrol in software testing training in Vijayawada. But, for tech college passouts, there are certain eligibility criteria for the course, like</p>
        <ul>
            <li>BTech (CSE, IT, ECE, EEE) and MCA students needs to acquire at least 60% in graduation, 60% in intermediate, and 60% in 10th class</li>
            <li>Similarly, for B.SC & BCA students, they must have at least 60% in graduation, 60% in intermediate, and 60% in 10th class</li>
        </ul>
    `
  },
  {
    head: "3. What certification will I receive upon completion of the software testing course?",
    p: `
        <p>Yes, Codegnan helps in securing jobs and internships in software testing after course completion. They are offering 10p% placement assistance with a promise of minimum 150 drives in a year.</p>
    `
  },
  {
    head: "4. Does learning software testing increase my salary?",
    p: `
        <p> Yes, learning software testing increases your salary especially if you are a software developer or working in the IT domain. Software testing is an essential skill that ensures a product is ready to launch and is free from defects.</p>
    `
  },
  {
    head: "5. Is it difficult to learn Software testing?",
    p: `
          <p>No, it isn’t difficult to learn software testing especially if you are enrolling for our software testing training course in Vijayawada. The course syllabus is designed for beginners to professionals helping learners know software testing from scratch. Also, we offer a practical learning approach which gives you a clear understanding of how software testing works in the real world.</p>
    `
  },
  {
    head: "6. What is the course duration of software testing training in Vijayawada?",
    p: `
          <p>The course duration of software testing training in Vijayawada is 100 days. However, this course duration isn’t fixed for every training institute. It depends on multiple factors like course syllabus, class durations, need for practical sessions, etc.</p>
    `
  }

];

const App = () => {
  return (
    <div>
      <h1><center>Software testing course certification in Vijayawada FAQs </center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
