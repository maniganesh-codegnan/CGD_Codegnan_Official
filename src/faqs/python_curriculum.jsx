import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. Why is Python important to learn?",
    p: `
         <p>One of the biggest reasons Python is so widely popular is its ease of learning. Moreover, as Python is an interpreted language, it is made to be easier than several other programming languages in the market including C, C++ and Java.</p>
    `
  },
  {
    head: "2.What are the eligibility criteria to enroll in this course?",
    p: `
          <p>The Python training in Bangalore by Codegnan is a postgraduate-level course. You can enroll in this program if you are a college graduate, IT professional, beginner programmer or interested in automation.</p>
    `
  },
  {
    head: "3.What is the Python course fee offered by Codegnan?",
    p: `
        <p>Codgnan’s Python course is priced at an amount of ₹ 10,000. The training includes one month of instructor-led learning, assignments and lab projects. However, <b> if you avail a discount, you can get the course for just ₹ 8,000.</b></p>
    `
  },
  {
    head: "4.What certification will I receive upon completion of the course?",
    p: `
          <p>After completing the Python course in Bangalore, you will receive Codegnan’s certification which has received industry recognition. Along with this, you will achieve a 5-star badge in HackerRank.</p>
    `
  },
  {
    head: "5. Will Codegnan help in securing jobs and internships in Python?",
    p: `
        <p>Though Codegnan’s Python training doesn’t offer placement assistance, you will learn all the technical skills that can help you crack even difficult job interviews. You can check our Job acceleration program designed for students to get placements.</p>
    `
  },
  {
    head: "6. Does learning python increase salary?",
    p: `
        <p>Yes, learning Python can add immense value to your profile and can help you bag well-paying jobs in the market. Python is in high demand in the present times, thus, learning it can help you make great money.

</p>
    `
  },
  {
    head: "7. Can I learn Python in 4 weeks?",
    p: `
        <p>Yes, you can learn the core of Python in 4 weeks. With Codegnan’s Python training program, you will not only learn the basics of the language but also Python-based web development, data analysis and many more just within 30 days.</p>
    `
  },
  {
    head: "8. Is it difficult to learn Python?",
    p: `
      <p>Python is often considered as one of the easiest programming languages for any beginner with no coding experience because of its syntax which is in simple English. So, if you’re planning to start your coding journey and become a developer, Python is the language to start with.</p>
  `
  },
  {
    head: "9. What is the course duration of this Python training classes in Bangalore?",
    p: `
            <p> The duration of Codegnan’s Python training classes is 1 month. In this short span, you will be testing your knowledge on 3 live projects, making the program a great addition to every Python enthusiast’s profile, be it a beginner or professional.</p>
    `
  },  
  {
    head: "10. Does Codegnan offer online and offline python classes in Bangalore?",
    p: `
          <p>Yes, Codegnan offers both online and offline Python classes in Bangalore. If you live in the city or a nearby area, you can choose between both modes of learning.</p>
    `
  }
  
];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <h1><center>Python certification course in Bangalore FAQs </center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
