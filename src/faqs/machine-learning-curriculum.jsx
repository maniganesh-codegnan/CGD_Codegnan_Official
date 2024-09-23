import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. What is the eligibility criteria for the machine learning course of Codegnan?",
    p: `
        <p>There are no criteria for enrolling in the course. You can be a school or college student, a fresher or a professional, this one size fits all type of certification program is suited for all.</p>
    `
  },
  {
    head: "2. What are the fees of the machine learning course offered by codegnan?",
    p: `
        <p>Codegnan offers 60 hours of learning which includes placement assistance with more than 50 hours of instructor-led training at only ₹ 10,000. Currently, get our machine learning training program only for ₹7,999.</p>
    `
  },
  {
    head: "3. What certification will I receive upon completion of the course?",
    p: `
        <p>You will receive an industry recognized machine learning course completion certificate by Codegnan.</p>
    `
  },
  {
    head: "4. What is the duration of this machine learning course in Hyderabad?",
    p: `
          <p>This machine learning course in Hyderabad has a duration of 1 month, with the timeline being the same for both online and offline modes. </p>
    `
  },
  {
    head: "5. Are there any prerequisites of this Machine Learning course in Hyderabad?",
    p: `
        <p>There are only two prerequisites for the course – a knack for AI, and a desire to transform your career. Apart from that, nothing is required from a candidate’s end.</p>
    `
  },
  {
    head: "6. Is this course suitable for a person from a non-technical background?",
    p: `
        <p> Yes, even people from non-technical backgrounds including management, arts, or any other non-computer related field can enroll in the course. The curriculum is designed to be easily understood by candidates of any academic and professional expertise.</p>
    `
  },
  {
    head: "7. What are the job opportunities after this machine learning course from Codegnan?",
    p: `
        <p>After completing Codegnan’s machine learning course in Hyderabad, one can build a career in AI, ML, data science or similar fields. AI/ML engineer, ML architect, NLP engineer, ML data scientist and AI/ML developer are some of the most notable professions our students have been hired in. </p>
    `
  },
  {
    head: "8. Is Python necessary for machine learning?",
    p: `
        <p> Python is not necessarily needed for machine learning. However, it is hands down the most popular programming language as far as machine learning is concerned. Python is consistent and simple, that’s why most of the companies use it. </p>
    `
  },
  {
    head: "9. Can I learn machine learning in 6 months?",
    p: `
        <p>Yes, you can learn machine learning in 6 months. In this duration, you will easily grasp basic and intermediate level ML tools and techniques which you can later apply to your own projects.</p>
    `
  },  
  {
    head: "10. Does codegnan offer online and classroom training for machine learning courses in Hyderabad?",
    p: `
        <p>Codegnan offers its machine learning course both online and offline. Enrolled students have an opportunity to engage in live classes from top industry professionals, and complete their projects in a real classroom.</p>
    `
  },
  {
    head: "11. What if I have queries after the course?",
    p: `
        <p>We will assist you in case of any queries, even after the completion of your Java online training. You are always welcome to reach through our customer care number or email us your query. We would love to assist you.</p>
    `
  },
  {
    head: "12. What is meant by 24*7 lifetime support?",
    p: `
        <p>You will get 24*7 support and lifetime access to the LMS, where course material like presentations, installation guides & class recordings are available. Email support will always be there to clear your doubts.</p>
    `
  }

];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <h1><center>Machine Learning Course in Hyderabad FAQs </center></h1><br /><br /><br />
      {/* <h1>FAQs</h1> */}
      <FAQ data={data} />
    </div>
  );
};

export default App;
