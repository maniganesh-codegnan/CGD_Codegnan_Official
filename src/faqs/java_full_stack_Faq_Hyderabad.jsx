import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. Is Java full stack a good career in 2023?",
    p: `
          <p>Yes, Java full stack is an excellent career choice in 2023. The demand for skilled Java full-stack developers is still high, as Javascript is still the most popular programming, scripting, and markup language.</p>
    `
  },
  {
    head: "2. What is the eligibility criteria to enroll in this course?",
    p: `
        <p>To be eligible for codegnan’s Java training, you have to be at least a school graduate (passed 12th boards). Other than that there are no such criteria. </p>
    `
  },
  {
    head: "3. What are the full stack Java training fees offered by Codegnan?",
    p: `
        <p>The regular price for both online and offline Java training by codegnan is ₹70,000. But with discounts and offers, you can get it at only ₹50,000. </p>

    `
  },
  {
    head: "4. What certification will I receive upon completion of the course?",
    p: `
        <p>Upon completion of the course, you will receive a codegnan-authorized certification with all your achievements.</p>
    `
  },
  {
    head: "5. What are the job opportunities after this full stack java training from Codegnan? ",
    p: `
        <p>After completing this full-stack Java training from codegnan some of the job opportunities that you can easily land would be web developer, full-stack developer, java developer, technical lead, UI/UX developer, and quality assurance engineer. </p>
    `
  },
  {
    head: "6. Does learning Java increase my salary? ",
    p: `
        <p>Yes, learning Java can increase your salary. Java is a popular programming language that is used in a wide variety of industries, so there is a high demand for Java developers. </p>
    `
  },
  {
    head: "7. Can I learn Java full stack in 3 months?",
    p: `
      <p>Yes, you can learn Java full-stack in 3 months. Infact codegnan’s Java training duration is 100 days, including live projects. So, if you have targeted to learn Java full stack in three months, this course will be the perfect pick for you.</p>
    `
  },
  {
    head: "8. What is the course duration of this full stack Java training in HYderabad?",
    p: `
        <p>The course duration of the full-stack Java training in Hyderabad is 100 days. </p>
    `
  },
  {
    head: "9. Does codegnan offer online and offline full-stack Java training classes in Hyderabad?",
    p: `
        <p>Yes, codegnan does offer both online and offline full-stack Java training classes in Hyderabad. The schedules are also flexible so you can easily pick a time even if you have a full-time job to manage alongside. </p>
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
      <h1><center>Full Stack Java Training in Hyderabad FAQs</center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
