import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. Why is Python important to learn?",
    p: `
         <P>Python is primarily important to learn because of the high job scope of the language. Python is a widely used language for web, front-end, back-end and middleware development across most of the MNCs and startups including top companies like Netflix, Google, Spotify and Amazon.</p>
    `
  },
  {
    head: "2. What is the eligibility criteria to enroll in this course?",
    p: `
          <P>To be eligible for Codegnan’s python full stack development course, you need to be a pass out or a student of B.Tech (CSE, IT, ECE, EEE), MCA, B.Sc, BCA programs, having scored at least 60% grades in all your graduation, 10th and 12th grades. </p>
    `
  },
  {
    head: "3. What is the Python course fee offered by Codegnan?",
    p: `
          <P>The fee of the 100 days Python full stack course offered by Codegnan is ₹ 70,000. However, just for a limited time, the program is available at a discounted rate of ₹50,000.</p>
    `
  },
  {
    head: "4. What certification will I receive upon completion of the course?",
    p: `
          <P>Upon completion of the full stack Python development course, you will not only be receiving Codegnan’s complete industry accredited certification but also Hackerrank’s prestigious certification.</p>
    `
  },
  {
    head: "5. Will Codegnan help in securing jobs and internships in Python?",
    p: `
          <P>No, Codegnan will not directly be helping you secure jobs and internships in Python. But with the help of the skills that you will gain and the projects you’ll work on, you will be able to bag high paying positions in the tech sector. You can also check Codegnan’s job assistance program for internships and full-time job opportunities.</p>
    `
  },
  {
    head: "6. Does learning python increase salary?",
    p: `
        <P>Yes, learning Python can help you negotiate for better salaries as Python is in high demand across different industries. Becoming an expert in this language will undoubtedly open doors to new and lucrative job opportunities.</p>
    `
  },
  {
    head: "7. Can I learn Python in 4 weeks?",
    p: `
        <P>Yes, you can learn basic to intermediate levels of Python within a period of 4 weeks. With Codegnan’s Python full-stack training as your guide, you can learn not only the fundamentals of Python but also full-stack development in under 100 days.</p>
    `
  },
  {
    head: "8. Is it difficult to learn Python?",
    p: `
        <P>Python is one of the easiest languages to learn because of its simple English syntax. That’s why a lot of beginners choose this programming language to start their software or web development careers.</p>
    `
  },
  {
    head: "9. What is the course duration of this Python training classes in Bangalore?",
    p: `
          <P>Codegnan’s end-to-end Python full stack development classes in Bangalore have a duration of 100 days. In this duration, you will be getting hands-on training along with 4 real world projects, making it a great addition to your profile.</p>
    `
  },  
  {
    head: "10.Does Codegnan offer online and offline python classes in Bangalore?",
    p: `
          <P>Yes, Codegnan offers both online and offline Python classes in Bangalore. The Python training center is located at a prime location in Bangalore, i.e., 16th main at BTM 2nd stage.</p>
    `
  }
  
];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <h1><center>Python Full Stack Development Certification in Bangalore FAQs</center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
