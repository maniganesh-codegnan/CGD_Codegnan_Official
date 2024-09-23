import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. What is the eligibility criteria for the machine learning course of Codegnan?",
    p: `
        <p>There are no such criteria for enrolling in codegnan’s machine learning course. Anyone with school-level graduation and upwards is eligible for these courses. However, for a course like machine learning, knowing the basics of coding and programming languages like Python can certainly help you grasp the concepts better.</p>
    `
  },
  {
    head: "2. What are the fees of the machine learning course offered by codegnan?",
    p: `
        <p>The fee for codegnan’s machine learning course is ₹10,000 for both online and offline modes. However, with an additional discount, you can get it for as low as ₹8,000 as well.</p>
    `
  },
  {
    head: "3. What certification will I receive upon completion of the course?",
    p: `
        <p>Upon completing the course, you will get an authorized certificate from codegnan. This certification is acknowledged in tech companies across the globe, especially by the ones that are in association with codegnan.</p>
    `
  },
  {
    head: "4. What is the duration of this machine learning course in Vijayawada?",
    p: `
          <p>The duration of the machine learning course in Vijayawada by codegnan is 30 days or 1 month. Hence, whether you are a fresh graduate who wants to maximize your final semester or someone who wants to transition into tech jobs, this brief course can help you achieve that. </p>
    `
  },
  {
    head: "5. Are there any prerequisites of this Machine Learning course in Vijayawada?",
    p: `
        <p>No, there are no such prerequisites for this Machine Learning course in Vijayawada by codegnan. The minimum educational qualification for enrolling in this course is school graduation with any stream.  But there are some sections that require haveing a basic idea of Python, but again, it is not a must.</p>
    `
  },
  {
    head: "6. Is this course suitable for a person from a non-technical background?",
    p: `
        <p>Here are some job opportunities you can bag after completing this course, even if you are from a non-technical background- data analyst, machine learning engineer, NLP engineer, data engineer, web developer with ML integration, reinforcement learning developer, data scientist, recommendation system developer, and AI consultant.</p>
    `
  },
  {
    head: "7. What are the job opportunities after this machine learning course from codegnan?",
    p: `
        <p>After completing Codegnan’s machine learning course in Hyderabad, one can build a career in AI, ML, data science or similar fields. AI/ML engineer, ML architect, NLP engineer, ML data scientist and AI/ML developer are some of the most notable professions our students have been hired in. </p>
    `
  },
  {
    head: "8. Is Python necessary for machine learning?",
    p: `
        <p>You don’t have to be proficient in Python to enroll in this machine learning course. But knowing the basics of it is enough for you to start. </p>
    `
  },
  {
    head: "9. Can I learn machine learning in 6 months?",
    p: `
        <p>Yes, you can learn machine learning in 6 months or less. codegnan’s machine learning course is only 1 month long, including the time of working on the projects.</p>
    `
  },  
  {
    head: "10. Does codegnan offer online and classroom training for machine learning courses in Vijayawada? ",
    p: `
        <p>Yes, codegnan offers both online and classroom training for their machine learning course in Vijayawada. So whether you are a local resident, you have the option of choosing between the two </p>
    `
  }
  
];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <h1><center>Machine Learning Course in Vijayawada FAQs </center></h1><br /><br /><br />
      {/* <h1>FAQs</h1> */}
      <FAQ data={data} />
    </div>
  );
};

export default App;
