import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. Why is Java important to learn?",
    p: `
        <p>Java is an easy-to-understand object-oriented programming language that is highly in demand globally, with multiple job opportunities and high salary ranges. With Java knowledge, you can choose different careers in web development, mobile app development, system engineering, database administration, and so on. </p>
    `
  },
  {
    head: "2. What are the eligibility criteria to enrol in this course?",
    p: `
        <p>You can enrol for the Java development course at Codegnan’s <b>Java course training in Vijayawada</b> if you are a college student or fresh graduate, IT professional, beginner with a knack for Java development, or anyone interested in automation.</p>
    `
  },
  {
    head: "3. What is the Java course fee offered by codegnan?",
    p: `
        <p>Codegnan’s Java course will cost you ₹10,000, but you can avail of the limited-time offer where the course is provided at ₹7,999. </p>

    `
  },
  {
    head: "4. What certification will I receive upon completion of the course?",
    p: `
        <p>On successfully completing the Java course, you will receive an industry-specific certificate from Codegnan that proves your abilities and helps you find better employment opportunities. Plus, Codegnan offers you a chance to win Hackerrank badges.</p>
    `
  },
  {
    head: "5. Will codegnan help in securing jobs and internships in Java?",
    p: `
        <p>Codegnan will prepare you for top-paying jobs and internships so that you can crack them on the first attempt. But, the course doesn’t offer job placement and internship opportunities.</p>
    `
  },
  {
    head: "6. Does learning Java increase salary?",
    p: `
      <p>Yes, Java can help you bag some of the top-paying jobs in Vijayawada, and its demand will keep rising in future. Plus, the course can be an add-on skill to your portfolio.</p>
    `
  },
  {
    head: "7. Is it difficult to learn Java?",
    p: `
        <p>No, Java is an easy-to-learn language, and even if you are a beginner in this domain, Codegnan’s expert faculty can help you learn the fundamentals.</p>
    `
  },
  {
    head: "8. What is the course duration of this Java training in  Vijayawada ?",
    p: `
        <p>The Java training course in Vijayawada is for one month, where you can learn in-depth knowledge of Java development.</p>
    `
  },
  {
    head: "9. Does codegnan offer online and offline Java classes in  Vijayawada ?",
    p: `
          <p>Yes, Codegnan offers both online and offline Java classes in Vijayawada. Students in and around the city can visit the Vijayawada branch for offline classes, while others can select one-on-one online classes. </p>
    `
  }

];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <h1><center>Java Course Certification in Vijayawada FAQs </center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
