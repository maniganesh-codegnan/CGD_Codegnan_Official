import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. Why is software testing important to learn?",
    p: `
        <p>Software testing is important to learn for tech professionals to identify defects and failures within a software before launching them into the market. It reduces the risk related to quality, security and performance of the product.</p>
    `
  },
  {
    head: "2. What is the eligibility criteria to enroll in software testing training in Bangalore?",
    p: `
        <p>There is no eligibility criteria to enroll in software testing training in Bangalore for professionals, but for college students, there are some, like</p>
        <ul>
          <li>If you are a BTech (CSE, IT, ECE, EEE) or an MCA student, you must acquire at least 60% in graduation, 60% in intermediate, and 60% in 10th class </li>
          <li>If you are from B.SC & BCA, you must have at least 60% in graduation, 60% in intermediate, and 60% in 10th class</li>
        </ul>
    `
  },
  {
    head: "3. What certification will I receive upon completion of the software testing course?",
    p: `
        <p>You will receive an industry-accredited certificate upon completion of the software testing course. Additionally, Codegnan offers a Coding Platform and HackerRank Platform to show your skills and bag multiple badges by solving challenges. This increases your opportunity to get placed in top companies in Bangalore.</p>
    `
  },
  {
    head: "4. Will codegnan help in securing jobs and internships in Software testing? ",
    p: `
        <p>Yes, Codegnan offers 100% assistance in securing jobs and internships in software testing immediately after completing the course. They promise a minimum of 150 drives in a year.</p>
    `
  },
  {
    head: "5. Does learning software testing increase my salary?",
    p: `
          <p>Yes, software testing can potentially increase your salary as it is an essential skill required during the software development lifecycle that ensures the product launched by the company is of high quality and free from defects.</p>
    `
  },
  {
    head: "6. Is it difficult to learn Software testing?",
    p: `
          <p>No, it isn’t difficult to learn software testing if you have enrolled for our course. We have designed the syllabus keeping in mind different requirements of beginners to professionals. You can learn software testing from scratch and have hands-on practice on live projects for different modules of the course. The more you practice your skills with real world projects the better you can become a software tester and land good jobs.</p>
    `
  },
  {
    head: "7. What is the course duration of software testing training in Bangalore?",
    p: `
        <p>The course duration of software testing training in Bangalore is 100 days.  However, this duration can vary according to the class duration and length of the syllabus. While some courses only introduce you to software testing, we offer a comprehensive course that prepares you for a job immediately after its completion.</p>
    `
  }


];

const App = () => {
  return (
    <div>
      <h1><center>Software testing course certification in Bangalore FAQs </center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
