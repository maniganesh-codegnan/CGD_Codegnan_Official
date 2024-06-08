import React from "react";
import OnlineCourse from "./online_template";
import { Link } from "react-router-dom";


const headContext = {
    title: "NodeJS",
    p: "Whether you are starting out new or already have some experience, this NodeJS course is designed to fit your needs. Learners will get a comprehensive knowledge of building backend technology using Nodejs and Expressjs from this course, helping them to develop solutions that meet industry standards.\n" +
        "<ul>" +
        [
            "41 lessons",
            "3 tests",
            "0 trial sessions",
            "Pricfe: 399+GST",
            "24/7 online accessibility"
        ].map((item, index) => (
            "<li style='margin-left: 50px;'>" + "<span style='color:#EE4a62;'>&#x2713;&nbsp;</span>" + item + "</li>"
        )).join('') +
        "</ul>",
    start_course: "https://academy.codegnan.com/learn/Nodejs",
    free_trial: "https://academy.codegnan.com/learn/Nodejs",
    image: "/academic_online_syllabus/Node-js1.webp"
}

const main_content = {
    p: (
        <>
            <h2>What this NodeJS is about</h2>
            <p>
                According to the 2023 Developer Survey by Stack Overflow, it was found that professional developers prefer <Link to="https://survey.stackoverflow.co/2023/#technology" className="Linkcolor">node.js</Link>  as one of the best web frameworks followed by React, jQuery and Express. If you are willing to develop and deploy dynamic wave applications, learning NodeJS and Express can be helpful.
                <br /><br />This course helps learners to understand how to use Node and Express in building dynamic web applications. It starts with describing what is a web server, HTTP protocol, URL, and the difference between static and dynamic websites.
                <br /><br />The course then covers asynchronous programming concepts, including call stacks and promises, Async await, try-catch, API, JSON, and Fetch. Learners will also know how to install Git bash and understand creation & navigation in Terminal Usage.
                <br /><br />Finally, it proceeds with the concepts of NodeJS, how to install them and run a NodeJS file, and the concept of Express.
            </p>
            <h2>What you'll learn</h2>
            <ul>
                <li>Creating server-side applications using NodeJS Javascript runtime</li>
                <li>Knowledge of third-party frameworks and packages, such as Express with Node.js</li>
                <li>Using NPM for managing Node.js packages within Node.js application</li>
                <li>Knowledge of asynchronous programming, including Call Stack, JavaScript Promises, API, JSON, Async await, and more</li>
                <li>Understanding of Terminal Usage, including installation of Git bash</li>
            </ul>

            <h2>What’s covered in this online NodeJS course</h2>
            <ol>
                <li>Introduction, 6 Lessons, 1 Quiz</li>
                <li>Asynchronous Programming, 11 Lessons, 1 Quiz</li>
                <li>Terminal Usage, 3 Lessons, 1 Quiz</li>
                <li>NodeJS and NPM, 10 Lessons, 0 Quizzes</li>
                <li>Express, 8 Lessons, 0 Quizzes</li>
            </ol>

        </>
    )
}

const mentorsData = {
    color_title: "About the",
    title: "  Trainer ",
    mentors: [
        {
            name: "Bhagath Sainath",
            description: "Bhagath Sainath is one of the youngest talents at Codegnan with a background of BTech in Electrical, Electronics and Communications Engineering. He has already bagged multiple licenses and certifications including Git from APSSDC, Microsoft (MTA) Certification for HTML5, CSS and JavaScript, and more. His constant effort in growing with the current industry trend makes him a great mentor for today’s NodeJS learners. He works as a lead consultant in Datamatics with his expertise in React.js, Nodejs, Express.js, MongoDB, and MySQL.",
            image: "",
            mentorlinkedinid: "https://www.linkedin.com/in/bhagathprathipati/"
        }
    ]
}


const data2 = [
    {
        head: "What are the prerequisites of a NodeJS Programming Course?",
        p: <>
        The prerequisites of a NodeJS programming course includes basic understanding of JavaScript (including variables, functions, data structure, loops, and conditional statements) and knowledge of HTML and CSS. If you aren’t aware of  <Link to="https://academy.codegnan.com/learn/JavaScript" className="Linkcolor">JavaScript</Link> , you can enrol for Codegnan’s JavaScript self-paced course.
        </>
    },
    {
        head: "How long does it take to complete this NodeJS course?",
        p: "It takes 10-15 days to complete this NodeJs course. As this NodeJS course is a self-paced training program, you can complete it as per your learning and understanding ability. If you invest atleast 1 hour everyday from learning the concept and then implement that knowledge into real projects, you can complete the course in 10 days."
    },
    {
        head: "Will I get a Certificate after completing this online NodeJS course?",
        p: "Yes, you will get a digital certificate after completing this online NodeJS course. However, this is a digital certificate that you can share on social media or within your professional network to build your  portfolio."
    },
    {
        head: "Who is this NodeJS course for?",
        p: "This NodeJS course is for anyone who has knowledge in JavaScript and wants to build dynamic websites. Even if you are a beginner or an experienced website developer, this NodeJS course is suitable for all."
    },
    {
        head: "Are there any coding tests and quizzes to test my knowledge after completing this Nodejs?",
        p: "Yes, there are 3 coding tests available throughout the program to test your knowledge. But, this is a self guided program so there is no exam at the end of the training but you need to clear quizzes at every step to proceed with the next module. When you finish all the modules, complete all the tests, and do the projects, you will receive a digital course completion certificate."
    },
    {
        head: "Will this NodeJS learnings help me in getting a job or internship?",
        p: <>Yes, these NodeJS learnings will help you get a job or internship, but the program doesn’t promise job assistance. You can join their <Link to="" className="Linkcolor">Job Accelerator Program </Link> for 100 days to land a high-paying job immediately after course completion.</>
    }
];






export default function Online_node() {
    return (
        <OnlineCourse head={headContext} main={main_content} mentor={mentorsData} dropdown={data2} />
    );
}
