import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. Why is Java important to learn?",
    p: `
          <p>Java is a popular programming language as it is easy to learn and works cross-platform. If someone plans to work on object-orineted projects, Java would be their prime choice. Plus, it has one of the largest communities to connect with, giving you the support to grow.  </p>
    `
  },
  {
    head: "2. What are the eligibility criteria to enrol in this course?",
    p: `
        <p>To enrol in our Java course in Bangalore, you need to have a minimum 60% grade in your B.Tech/B.sc/MCA/BCA, 60% or above in Intermediate and 60% or above in the 10th class. </p>
    `
  },
  {
    head: "3. What is the Java course fee offered by codegnan?",
    p: `
        <p>The Java training course in Bangalore fee offered by Codegnan is only ₹20,000. Apply now to get additional discounts on the course fee.</p>

    `
  },
  {
    head: "4. What certification will I receive upon completion of the course?",
    p: `
        <p>Upon completing the training, you will receive a codegnan-accredited certification to prove your credibility. Apart from that, we also let our students use our Coding and Hackerrank platform to participate in different challenges and collect badges. </p>
    `
  },
  {
    head: "5. Will codegnan help in securing jobs and internships in Java?",
    p: `
        <p>This one-month Java training does not come with a job placement or internship program. However, you can check out our job assistance program, which is solely designed to help candidates get high-paying jobs.</p>
    `
  },
  {
    head: "6. Does learning Java increase salary?",
    p: `
      <p>Yes, learning Java can increase your salary, especially if you are switching from a non-IT trade to this. </p>
    `
  },
  {
    head: "7. Is it difficult to learn Java?",
    p: `
        <p>No, Java is one of the easiest languages to learn due to its syntax. It is easy to read; in fact, if you can read English, you can easily read Java syntax. Therefore, it is comparatively easier than learning other programming languages.</p>
    `
  },
  {
    head: "8. What is the course duration of this Java training in Bangalore?",
    p: `
        <p>The duration of this Java course by codegnan is one month (30 days).</p>
    `
  },
  {
    head: "9. Does codegnan offer online and offline Java classes in Bangalore?",
    p: `
          <p>Yes, codegnan does have both online and offline Java classes in Bangalore. It is located at #951, 16th Main, BTM 2nd Stage, Bengaluru, Karnataka- 560076. For more details, you can call: 6364 668 548.</p>
    `
  }

];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <h1><center>Java Course Certification in Bangalore FAQs </center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
