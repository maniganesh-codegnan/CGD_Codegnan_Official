import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "1. What is the course duration of this full stack Java training in Vijayawada?",
    p: `
          <p>Overall, Java full-stack training requires 100 Days of your total hard work. Apart from that, you should work on building your portfolio with the skills that you gain in the classes. Showcasing a portfolio is really helpful in landing your dream job.</p>
    `
  },
  {
    head: "2. Is Java full stack a good career in 2023?",
    p: `
        <p>Java full-stack developers are high in demand, be it in any sector. This means it opens up thousands of jobs in the market. It is extensively utilized across various industries, such as healthcare, retail, and financial services. Furthermore, Java is being used in the development of more recent technologies, such as the Internet of Things and artificial intelligence. Thus, there will probably be a continued need for Java developers in the future.</p>
    `
  },
  {
    head: "3. What are the prerequisites of Java training in Vijayawada Online or offline?",
    p: `
        <p>To learn Java, you really don’t need any prerequisites, that is, no programming language knowledge is required to learn Java Programming. For better understanding, you can opt for C++ programming as a foundational language.</p>

    `
  },
  {
    head: "4. What are the full stack Java training fees offered by codegnan?",
    p: `
        <p>At codegnan, the Java full stack course fee in Vijayawada is ₹50,000. However, we offer a discounted price to some selected students or college graduates. Please contact our team to see whether you’re eligible for this course fee discount.</p>
    `
  },
  {
    head: "5. What certification will I receive upon completion of the course?",
    p: `
        <p>Once you complete your Java training with Codegnan, you get training enrollment certification by Codegnan which is recognized by MNCs worldwide.</p>
    `
  },
  {
    head: "6. What are the job opportunities after this full stack java training from codegnan? ",
    p: `
        <p>Learning the fundamentals of Java is like opening a door to countless opportunities. Following are the job opportunities that are waiting for you:</p>
        <ul>
            <li> Java Developer </li>
            <li> Software Developer</li>
            <li> Software Architect</li>
            <li> Java full-stack developer</li>
            <li> Java back-end developer</li>
            <li> Java integration developer</li>
            <li> J2EE architect </li>
        </ul>
    `
  },
  {
    head: "7. Can I get a job with Java certification?",
    p: `
      <p>After successful Java training from codegnan. Students can crack HackerRank skills, problem solving and earn gold badges.</p>

      <p> And gain the stuff of OCJP also. Once Student put these certifications in Resume they will have lot of weightage and easily secured IT sector job. Most of the companies would conduct a technical written test before the interview. It will be very easy to pass the written exam for the certified people.</p>
    `
  },
  {
    head: "8. Does learning Java increase my salary? ",
    p: `
        <p>Gaining a strong foundation in the principles of Java programming, such as object-oriented ideas, data structures, and algorithms, will help you advance your knowledge. Employers will value you more and pay you more if you have a deeper understanding of Java.</p>
    `
  },
  {
    head: "9. Can I learn Java full stack in 3 months? ",
    p: `
        <p>Truly, Java demands time. There is so much to learn in Java. If you are considering 3 months to get yourself job-ready with Java full-stack training then you need to give 100% of your bandwidth to Java.</p>
    `
  },
  {
    head: "10. Does codegnan offer online and offline full-stack Java training classes in Vijayawada?",
    p: `
          <p>Codegnan understands the value proposition of time. Thus, we provide both online and offline full-stack Java training.</p>
    `
  },  
  {
    head: "11. What if I miss a class?",
    p: `
          <p>Though you are recommended not to miss any of your Java course class, if in case you miss any class, then we will provide you with recorded sessions that you can access anytime.</p>
    `
  },
  {
    head: "12. What is meant by 24*7 lifetime support? ",
    p: `
          <p>You will get 24*7 support and lifetime access to the LMS, where course material like presentations, installation guides & class recordings are available. Email support will always be there to clear your doubts.</p>
    `
  },
  {
    head: "13. What will you learn at the end of Java training in Vijayawada?",
    p: `
          <p>After the successful completion of your Java Certification Course, you will be able to choose high-level OOPS languages or advancement in technologies like Machine Learning, Automated Testing, Salesforce, etc. further or choose to make your career in Java. You can be a programmer in a real manner and a quick job is what you need the most.</p>
    `
  },
  {
    head: "14. Can I avail of any discounts on the Java Course in vijayawada? ",
    p: `
          <p>We’ll be providing an approx. 10% discount on the courses. You can check discounts and other offers from our student counselors. Kindly request for the call back by filling our contact us form or simply drop us an email. We’ll get back to you within 24 hours of the span.</p>
    `
  },
  {
    head: "15. What if I have queries after the course?",
    p: `
          <p>We will assist you in case of any queries, even after the completion of your Java online training. You are always welcome to reach through our customer care number or email us your query. We would love to assist you.</p>
    `
  }

];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <h1><center>Full Stack Java Training in Vijayawada FAQs</center></h1><br /><br /><br />
      <FAQ data={data} />
    </div>
  );
};

export default App;
