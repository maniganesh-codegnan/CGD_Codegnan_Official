import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. How can I become a data scientist in Hyderabad?",
    p: `
        <p> You can become a data scientist in Hyderabad by enrolling in a good data science training that offers a comprehensive knowledge of data science and machine learning tools and technologies. Codegnan offers distinguished data science training with a job acceleration program to bring you closer to your goals.</p>
    `
  },
  {
    head: "2. How long is the data scientist training in Hyderabad?",
    p: `
        <p>Codegnan’s data science training has a duration of 6 months, with classes held from every Monday to Saturday. In this period, you will learn the intricacies of data science from the basics to advanced levels.</p>
    `
  },
  {
    head: "3. Is data science a good career in 2023? ",
    p: `
        <p>Data science is not only a good career but one of the most highly paid professions in 2023. There is a high demand for data science positions in all types of companies from MNCs to startups, making it a popular career choice amongst youngsters. </p>
    `
  },
  {
    head: "4. What is the eligibility criteria for the data science training in Hyderabad? ",
    p: `
        <p>There is no eligibility criteria for Codegnan’s data science training in Hyderabad. However, when starting the classes, don’t forget to bring your enthusiasm for learning.</p>
    `
  },
  {
    head: "5. What are the fees of the data science training offered by Codegnan?",
    p: `
        <p>The intensive 6 months data science training of Codegnan is offered at only ₹ 75,000. However, if you get onboarded soon, you may get a 20% discount and receive the course for ₹ 60,000 only.</p>
    `
  },
  {
    head: "6. What certification will I receive upon completion of the course?",
    p: `
        <p>Upon completing the course, you will receive Codegnan’s industry standardized data science certification. Along with that, you will also receive guaranteed placement assistance. </p>
    `
  },
  {
    head: "7. What are the prerequisites of this Data Science training in Hyderabad?s",
    p: `
        <p>There are no prerequisites of this data science course. Candidates from all academic and professional backgrounds are welcome.</p>
    `
  },
  {
    head: " 8. Is coding necessary for this data science training in Hyderabad?",
    p: `
        <p>No, you don’t have to know how to code for this data science training. The curriculum is designed to suit the needs of programming newbies as well.</p>
    `
  },
  {
    head: "9. What are the job opportunities after this data science training from Codegnan?",
    p: `
        <p>After this data science training, you find a myriad of jobs in the data science, analytics, ML and related fields. Some of the most popular jobs you can do are data scientists, data analysts, data engineers, big data engineers, data architects and data managers.</p>
    `
  },  
  {
    head: "10. Does codegnan offer online and offline classes for data science training in Hyderabad?",
    p: `
        <p>Yes, Codegnan offers both online and offline training for data science in Hyderabad at ₹ 75,000 each. Students can enroll in any mode that is suitable for their unique demands.</p>
    `
  }


];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <h1><center>Data Science Training in Hyderabad FAQs </center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
