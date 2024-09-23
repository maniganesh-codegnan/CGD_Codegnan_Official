import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. Is Java full stack a good career in 2023?",
    p: `
          <p>Java full stack is one of the most well paying professions in the year 2023. The field allows endless growth as Java skills are useful to every business that deals in the technology domain.</p>
    `
  },
  {
    head: "2. What is the eligibility criteria to enroll in this course?",
    p: `
        <p>For B.Tech (CSE, IT, ECE, EEE) and MCA:</p>
        <ul>
            <li> Minimum academic criteria: 60% in B.Tech, 60% in Intermediate, and 60% in 10th Class.</li>
            <li> We provide 100% Placement Assistance with up to 80 Placement Drives.</li>
        </ul>
        <p>For B.Sc & BCA:</p>
        <ul>
            <li>Minimum academic criteria: 60% in B.Tech, 60% in Intermediate, and 60% in 10th Class.</li>
            <li>We offer 100% Placement Assistance with up to 40 Placement Drives.</li>
            <li>For students who do not meet the above criteria:</li>
            <li>We provide skills training but do not offer 100% Placement Assistance.</li>
        </ul>
        <p>These are the main points so you can use accordingly not.</p>
    `
  },
  {
    head: "3. What are the full stack Java training fees offered by Codegnan?",
    p: `
        <p>The full stack Java training at Codenan is offered at a price of ₹ 50,000, whether you enroll in the offline or online mode. This package includes the core curriculum, assignments, study material and hands-on projects. </p>

    `
  },
  {
    head: "4. What certification will I receive upon completion of the course?",
    p: `
        <p>You will receive Codegnan’s industry acclaimed certification after completing the course. In addition, you will gain all the technical skills required to further apply and bag the Oracle Certified Java Programmer certification.</p>
    `
  },
  {
    head: "5. What are the job opportunities after this full stack java training from Codegnan? ",
    p: `
        <p>You can secure bankable job opportunities in the Java and full stack fields in several positions including full stack web developer, full stack java developer, front-end developer, web developer, back-end developer, web designer and full-stack developer.</p>
    `
  },
  {
    head: "6. Does learning Java increase my salary?",
    p: `
        <p>Learning Java can surely give you an edge over various other professions. On an average, a full stack Java developer in India earns an annual salary of ₹ 6.6 LPA, which lies in the range of ₹ 2.4 Lakhs to ₹ 14.0 Lakhs per annum.</p>
    `
  },
  {
    head: "7. Can I learn Java full stack in 3 months?",
    p: `
      <p>Yes, you can learn Java in three months. Codegnan’s well-structured full stack java training in Bangalore can help you learn about the latest Java tools and techniques, all from level zero to advanced.</p>
    `
  },
  {
    head: "8. What is the course duration of this full stack Java training in Bangalore?",
    p: `
        <p>The duration of Codegnan’s full stack Java training is 100 days. The course is designed to suit the needs of every type of candidate from beginner to experienced within the given time period.</p>
    `
  },
  {
    head: "9. Does codegnan offer online and offline full stack Java training classes in Bangalore?",
    p: `
        <p>Codegnan provides both online and offline training within a duration of 100 days each. So no matter if you live in Bangalore (or nearby areas) or anywhere remote you can get enrolled in the program. </p>
    `
  },
  {
    head: "10. What if I have queries after the course?",
    p: `
          <p> We will assist you in case of any queries, even after the completion of your Java online training. You are always welcome to reach through our customer care number or email us your query. We would love to assist you.</p>
    `
  },  
  {
    head: "11. What is meant by24*7 lifetime support?",
    p: `
          <p>You will get 24*7 support and lifetime access to the LMS, where course material like presentations, installation guides & class recordings are available. Email support will always be there to clear your doubts.</p>
    `
  }

];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <h1><center>Full Stack Java Training in Bangalore FAQs</center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
