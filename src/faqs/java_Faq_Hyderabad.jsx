import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. Why is Java important to learn?",
    p: `
          <p>Java is one of the programming languages that is open source and lets you write software on one platform and run it virtually on any other. Making it very independent and portable. Making it one of the most popular and in-demand programming languages to learn.  </p>
    `
  },
  {
    head: "2. What are the eligibility criteria to enrol in this course?",
    p: `
        <p>To be enrolled for the training, you have to have a minimum 60% grade in your B.Tech/B.sc/MCA/BCA, 60% or above in Intermediate and 60% or above in the 10th class.</p>
    `
  },
  {
    head: "3. What is the Java course fee offered by codegnan?",
    p: `
        <p>The Java course fee offered by codegnan is only ₹10,000. But with offer, you can get for even cheaper at just ₹7,999. </p>

    `
  },
  {
    head: "4. What certification will I receive upon completion of the course?",
    p: `
        <p>Upon successful completion of the course, you will get an authorized certification from codegnan. Besides that we give our students our Coding platform and Hackerrank platform to participate in different challenges and collect badges. </p>
    `
  },
  {
    head: "5. Will codegnan help in securing jobs and internships in Java?",
    p: `
        <p>codegnan does not have a job placement assurance policy with this trainning. However, you can register for our dedicated job assistance program for securing jobs. </p>
    `
  },
  {
    head: "6. Does learning Java increase salary?",
    p: `
      <p>Yes, research shows that whether you are switching from a non-IT trade or trying to upskill in your developer career, having experience in Java can increase your salary. The average salary of an entry level Java developer is around ₹30,000 to ₹50,000 per month.  </p>
    `
  },
  {
    head: "7. Is it difficult to learn Java?",
    p: `
        <p>No, Java is not difficult to learn. Infact Java is famous for its simplicity and readability, amking it an ideal language for beginners. It has syntax that reads like English, so if you can read read and write in English, learning Java won’t be difficult for you.</p>
    `
  },
  {
    head: "8. What is the course duration of this Java training in Hyderabad?",
    p: `
        <p>The course duration of this Java training in Hyderabad is one month (30 days). </p>
    `
  },
  {
    head: "9. Does codegnan offer online and offline Java classes in Hyderabad?",
    p: `
          <p>Yes, for Hyderabad you get the option of choosing between both online and offline modes of training.</p>
    `
  }

];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <h1><center>Java Course Certification in Hyderabad FAQs </center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
