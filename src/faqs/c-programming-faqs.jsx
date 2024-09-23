import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. Which C programming language course is best in Vijayawada?",
    p: `
        <p>While the internet is filled with free resources for you to start learning, the best C language course is the one that has everything in an organised manner. Like codegnan’s C programming course is extremely beginner-friendly, where you only enrol and leave the planning and rest to the experts. Learn through live one-on-one expert sessions that ensure the best learning experience.</p>
    `
  },
  {
    head: "2. What is the duration of this C programming course?",
    p: `
        <p>The course duration of codegnan’s C language programming course is 30 days.</p>
    `
  },
  {
    head: "3. Where can I learn C programming? What is the eligibility criteria for the C Language training?",
    p: `
        <p>You can start learning C programming at codegnan with almost no prerequisites. If you are a school graduate, you are eligible to enrol for this course.</p>
    `
  },
  {
    head: "4. Can I learn C programming in 3 months?",
    p: `
        <p>Yes, you can learn C programming even in less time than that. codegnan’s C programming curriculum is designed in a way that can help any beginner learn C programming in 30 days.</p>
    `
  },
  {
    head: "5. What is the fee to learn C language in Vijayawada?",
    p: `
        <p>The fee to learn C language in Viajawada at codegnan is only ₹5000 for both online and offline classes. But with a discount, you can get for even cheaper at ₹3500.</b></p>
    `
  },
  {
    head: "6. Is C language programming good for freshers?",
    p: `
        <p>Yes C language programming is good for freshers due to its easy nature. This is why even if you don’t have any prior coding experience learning C programming language will not be very difficult.</b></p>
    `
  },
  {
    head: "7. What certification will I receive upon completion of the course?",
    p: `
        <p>Upon completion of the course, you will get an authorized certification from codegnan.</p>
    `
  },
  {
    head: "8.What are the job opportunities after this C language training from codegnan?",
    p: `
      <p>After a C language training from codegnan you expect to land a job in roles like software developer, web developer, database administrator, network administrator, system administrator and so on.</p>
    `
  },
  {
    head: "9. Does codegnan offer online and offline classes for C Language training in Vijayawada?",
    p: `

        <p> Yes, codegnan does offer both online and offline classes for C language training in Vijayawada. Apart from Vijayawada, their offline classes are also available in Banglore and Hyderabad, but their online classes are available globally.</p>
        <p> So whether you are from those regions or someplace else, you can access this course</p>
    `
  },
  {
    head: "10. What if I have queries after the course?",
    p: `
        <p>We will assist you in case of any queries, even after the completion of your Java online training. You are always welcome to reach through our customer care number or email us your query. We would love to assist you.</p>
    `
  },  
  {
    head: "11. What is meant by 24*7 lifetime support?",
    p: `
        <p>You will get 24*7 support and lifetime access to the LMS, where course material like presentations, installation guides & class recordings are available. Email support will always be there to clear your doubts. </p>
    `
  }

  
];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <h1><center>C Language Training in Vijayawada FAQs </center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
