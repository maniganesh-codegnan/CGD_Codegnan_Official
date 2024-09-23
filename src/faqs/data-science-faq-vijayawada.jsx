import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. How long is the data scientist training in Vijayawada?",
    p: `
        <p>The data science training in Vijayawda is 6 months long. Where the class durations are of 2 hours from Monday to Saturday.</p>
    `
  },
  {
    head: "2.Is data science a good career in 2023?",
    p: `
        <p> Yes, data science is a great career in 2023. Demand for data scientists and machine learning professionals has been growing rapidly in recent years and is expected to continue. </p>

        <p> According to India Today, there will be around 11 million job opportunities in the field of data science solely in India by the year 2026.</p>
    `
  },
  {
    head: "3. Will I receive a certificate upon completing the course? ",
    p: `
        <p> Any students after thier 12th boards are eligible for the data science training in Vijayawda.</p>
    `
  },
  {
    head: "4. What are the fees of the data science training offered by codegnan?",
    p: `
        <p>The fees of the data science training offered by codegnan is ₹75,000 for both online and offline classes. However you can avail a 25% discount at get the training at only ₹60,000. </p>
    `
  },
  {
    head: "5. What certification will I receive upon completion of the course?",
    p: `
        <p>Upon completion of the course you will receive an authorized certification from codegnan. </p>
    `
  },
  {
    head: "6. What are the prerequisites of this Data Science training in Vijayawada?",
    p: `
        <p>There are no as such prerequisites of this data science training in Vijayawada. Anyone who has passed their 12th boards is eligible to enrol for the course. </p>
    `
  },
  {
    head: "7. Is coding necessary for this data science training in Vijayawada?",
    p: `
        <p>No, knowledge of coding is not necessary for this data science training in Vijayawada. However, knowing the basics of Python language will definitely be an plus for you.</p>
    `
  },
  {
    head: " 8. What are the job opportunities after this data science training from codegnan?",
    p: `
        <p>The job opportunities after this data science training from codegnan are countless. You can land jobs in high paying roles like data scientist, data analyst, Al/ ML engineer, enterprise data architect, data engineer and so on. </p>
    `
  },
  {
    head: "9. Does codegnan offer online and offline classes for data science training in Vijayawada?",
    p: `
        <p>Yes, codeganan’s data science training in Vijayawda is conducted both in online and offline modes.</p>
    `
  }

];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <h1><center>Data Science Training in Vijayawada FAQs </center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
