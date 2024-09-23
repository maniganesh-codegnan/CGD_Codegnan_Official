import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. Why is Python important to learn?",
    p: `
         <P>Python is amongst the most popular programming languages due to being one of the easiest. This is why it is considered a general-purpose language, meaning it can be used for developing applications to perform cross-functional actions alongside other programming languages. So, learning Python can help you develop almost any type of application.</p>
    `
  },
  {
    head: "2. What is the eligibility criteria to enroll in this course?",
    p: `
          <P>You can enroll in Python training without having any basic understanding of programming or OOPs. In another sense, you particularly need no fundamentals to get started with Python programming.</p>
    `
  },
  {
    head: "3. What is the Python course fee offered by Codegnan?",
    p: `
          <P>The Python course fee offered by codegnan is ₹49,999. But if you avail of the <b>discount, you can get at ₹34,999.</b> </p>
    `
  },
  {
    head: "4. What certification will I receive upon completion of the course?",
    p: `
          <P>Upon completing the course, you will receive a Hackerrank Certification.</p>
    `
  },
  {
    head: "5. Will codegnan help in securing jobs and internships in Python?",
    p: `
          <P>No, unfortunately, this Python course by codegnan does not come with any job placement assistance program. But you can check out codegnan’s dedicated job assistance program for internships and full-time job opportunities. </p>
    `
  },
  {
    head: "6. Does learning python increase salary?",
    p: `
        <P>Yes, learning Python programming language can help you negotiate for better salaries. It is versatile and has a high demand in the market, which makes it easier for Python developers to make great money.</p>
    `
  },
  {
    head: "7. Can I learn Python in 4 weeks?",
    p: `
        <P>If your focus is on learning the fundamentals of Python, you can cover it within 4 weeks. In fact, with codegnan’s Python full-stack course, you can learn not only the fundamentals of Python but also full-stack development in under 100 days.</p>
    `
  },
  {
    head: "8. Is it difficult to learn Python?",
    p: `
        <P>No, Python is considered among some of the easiest programming languages to learn as it has a relatively simple syntax. Hence, it is ideal for beginners who are planning to enter the world of programming. </p>
    `
  },
  {
    head: "9. What is course duration of this Python training classes in Vijayawada?",
    p: `
          <P>The duration of this Python training course in Bangalore is 100 days. In this short span, you learn through hands-on training and get to work on not only one but three live projects that will be a great addition for beginners.</p>
    `
  },  
  {
    head: "10. Does codegnan offer online and offline python classes in Vijayawada?",
    p: `
          <P>Yes, codegnan does offer online and offline Python classes in Bangalore. If you live near #40-5-19/6, Prasad Naidu Complex, P. B. Siddhartha Bustop, Moghalrajpuram Vijayawada- 520010., you can choose between online or offline mode. </p>
    `
  }
  
];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <h1><center>Python Full Stack Development Certification in Vijayawada FAQs</center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
