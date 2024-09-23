import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. Is React JS Developer a good career option?",
    p: `
        <p> React JS is the most loved JavaScript library used by developers worldwide. With React JS, you can create cross-platform applications that are consistent in behavior, easy to test, and deploy. This means React JS opens up thousands of jobs in the market. </p>
    `
  },
  {
    head: "2. Why is React JS important to learn?",
    p: `
        <p>Apart from the libraries of React JS, it is worth investing your time because you will ultimately be getting a 6-figure salary as a web developer.</p>
    `
  },
  {
    head: "3. What is the eligibility and prerequisites to enroll in this course?",
    p: `
         <p>In order to enroll for React JS training, you should know the fundamentals of web programming including HTML, CSS, and JavaScript. You do not need to be an expert in implementing these concepts but familiarity will help.</p>
    `
  },
  {
    head: "4. What is the React JS course fee offered by codegnan?",
    p: `
       <p>The Reach JS course fee at codegnan starts from ₹10,000 whether you choose online or offline training classes(currently the course is priced at only ₹7,999) for a limited time. Contact our experts or fill in the above form to get discount as a student.</p>
    `
  },
  {
    head: "5. What certification will I receive upon completion of the course?",
    p: `
       <p>Once you complete your React JS training with Codegnan, you get training enrollment certification by Codegnan which is recognized by MNCs worldwide.</p>
    `
  },
  {
    head: "6. Will codegnan help in securing jobs and internships in React JS?",
    p: `
       <p>In short, yes! Codegnan has a job assurance program that helps you accelerate your career in software. Our 3000+ students are placed in top MNCs till date with the highest salary package of 18.2 LPA and an average salary package of 3-5 LPA.</p>
    `
  },
  {
    head: "7. Does learning React JS increase salary?",
    p: `
       <p>With the prerequisites clear and an understanding of the core concepts of React JS will help you with one of the following career paths:</p><br>
       <ul>
            <li>JavaScript Developer </li>
            <li>UI/UX Developer</li>
            <li>Web Developer</li>
            <li>Software Developer</li>
            <li>Developers upgrading from Angular, Vue, and other similar UI JavaScript Frameworks</li>
       </ul>
    `
  },
  {
    head: "8. Is it difficult to learn React JS?",
    p: `
       <p>React JS is a collection and usage of JavaScript libraries. Also, React JS is a beginner-friendly language to jump in.</p>
    `
  },
  {
    head: "9. What is the course duration of the React JS training classes in Vijayawada?",
    p: `
       <p>The course duration for our React JS course training program is 1 month. Also, you can choose your preferred timing to attend the live classes or visit our classroom facility in Vijayawada.</p>
    `
  },  
  {
    head: "10. Does codegnan offer online and offline React JS courses in Vijayawada?",
    p: `
       <p>Yes, codegnan provides online and offline React JS training in Vijayawada. Contact our experts to book your timing.</p>
    `
  },
  {
    head: "11. Can I avail of any discounts on the React JS training course in vijayawada?",
    p: `
       <p>We’ll be providing an approx. 10% discount on the courses. You can check discounts and other offers from our student counselors. Kindly request for the call back by filling our contact us form or simply drop us an email. We’ll get back to you within 24 hours of the span.</p>
    `
  },
  {
    head: "12. What if I have queries after the course?",
    p: `
       <p> We will assist you in case of any queries, even after the completion of your Java online training. You are always welcome to reach through our customer care number or email us your query. We would love to assist you.</p>
    `
  },
  {
    head: "13. What is meant by 24*7 lifetime support?",
    p: `
       <p>You will get 24*7 support and lifetime access to the LMS, where course material like presentations, installation guides & class recordings are available. Email support will always be there to clear your doubts.</p>
    `
  }

];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <h1><center>React JS certification course in Vijayawad</center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
