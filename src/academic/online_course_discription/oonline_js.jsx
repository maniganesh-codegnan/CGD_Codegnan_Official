import React from "react";
import OnlineCourse from "./online_template";
import { Link } from "react-router-dom";


const headContext = {
    title: "JavaScript",
    p: "JavaScript is a popular programming language that web developers mostly prefer to use. This course gives you a comprehensive knowledge of JavaScript and hands-on training in building websites and applications.\n" +
        "<ul>" +
        [
            "142 lessons",
            "28 tests",
            "3 trial sessions",
            "Price : 499+GST",
            "24/7 online accessibility"
        ].map((item, index) => (
            "<li style='margin-left: 50px;'>" + "<span style='color:#EE4a62;'>&#x2713;&nbsp;</span>" + item + "</li>"
        )).join('') +
        "</ul>",
    start_course: "https://academy.codegnan.com/learn/JavaScript",
    free_trial: "https://academy.codegnan.com/learn/home/JavaScript/section/175693/lesson/959971?",
    image: "/academic_online_syllabus/React.js11.webp"
}

const main_content = {
    p: (
        <>
            <h2>What this JavaScript course is about</h2>
            <p>
            Learning JavaScript can open doors to various tech careers, and web development comes to the top. This is somewhere a beginner-friendly language and can be a great starting point for anyone willing to start their career in coding. For career changers, acquiring JavaScript skills can help you get better opportunities. This JavaScript course is designed for beginners as well as professionals and includes interesting projects at the end of the program. 
<br/><br/>You will learn the basics of JavaScript, including its variables, data types, conditional statements, loops, functions, and how to write JavaScript programs. At the advanced level, learners will know inheritance, class & objects, and server operations of JavaScript. Additionally, you will learn about HTML elements, DOM, ES6 concepts, and more. 
<br/><br/>There are multiple tests and quizzes throughout the program that give you an opportunity to check your knowledge base. Finally at the end of the course you can work on two real-time projects under the mentorship of Codegnan professionals. Additionally, this course will give learners an opportunity to crack Microsoft Technology Associate Certification in JavaScript programming.
            </p>
            <h2>What you'll learn</h2>
            <ul>
            <li>Basic understanding of JavaScript, how to set the environment and create your first program</li>
        <li>Knowledge of JavaScript variables, keywords, data types, and objects</li>
        <li>Use of operators, control statements, and loops in JavaScript</li>
        <li>Work on exception-handling techniques in JavaScript</li>
        <li>Knowledge of multiple JavaScript functions, math functions, string functions</li>
        <li>Understanding of HTML elements</li>
        <li>Idea of ES6 Concepts (module, import & export, map & set, spread operator)</li>
        <li>Hands-on training on multiple projects</li>
            </ul>
            <h2>What's covered in this online JS course</h2>
            <ol>
            <li>Course Introduction, 2 Lessons, 1 Quiz</li>
        <li>Introduction to JavaScript, 2 Lessons, 0 Quizzes</li>
        <li>Variables, 1 Lesson, 1 Quiz</li>
        <li>Keywords, 1 Lesson, 1 Quiz</li>
        <li>Things to Know, 10 Lessons, 1 Quiz</li>
        <li>Scripts, 3 Lessons, 1 Quiz</li>
        <li>Data types, 8 Lessons, 1 Quiz</li>
        <li>Object, 6 Lessons, 1 Quiz</li>
        <li>Operators in JavaScript, 9 Lessons, 1 Quiz</li>
        <li>Control Statements, 4 Lessons, 1 Quiz</li>
        <li>Looping Statements, 3 Lessons, 1 Quiz</li>
        <li>Exception Handling, 1 Lesson, 1 Quiz</li>
        <li>Browser Object Model (BOM), 3 Lessons, 1 Quiz</li>
        <li>Functions, 4 Lessons, 1 Quiz</li>
        <li>Arrays, 6 Lessons, 1 Quiz</li>
        <li>Math Functions, 1 Lesson, 1 Quiz</li>
        <li>String Functions, 3 Lessons, 1 Quiz</li>
        <li>Understanding Date, 3 Lessons, 1 Quiz</li>
        <li>Understanding DOM, 3 Lessons, 1 Quiz</li>
        <li>Understanding HTML Elements, 4 Lessons, 1 Quiz</li>
        <li>Understanding HTML Events, 6 Lessons, 1 Quiz</li>
        <li>Understanding Regular Expressions, 7 Lessons, 1 Quiz</li>
        <li>for of, for in & for each loops in JavaScript, 1 Lesson, 1 Quiz</li>
        <li>ES6 Concepts, 10 Lessons, 1 Quiz</li>
        <li>Understanding this keyword, 1 Lesson, 1 Quiz</li>
        <li>Class & Object in JavaScript, 1 Lesson, 1 Quiz</li>
        <li>Inheritance in JavaScript, 1 Lesson, 1 Quiz</li>
        <li>Server Operations, 4 Lessons, 1 Quiz</li>
        <li>Create a Random Password using JavaScript, 2 Lessons, 0 Quizzes</li>
        <li>Project on creating a Character counter, 0 Lessons, 0 Quizzes</li>
        <li>Project on Building Weather Analysis, 4 Lessons, 1 Quiz</li>
            </ol>
        </>
    )
}

const mentorsData={
    color_title:"About the",
    title:"  Trainer ",
    mentors:[
      {
        name:"Saketh Kallepu",
        description:" Saketh Kallepu is a Data science professional in the IT field with a background in Computational Intelligence. Having 7+ years of experience in this field, he is an outstanding Data Science Mentor and trainer.\nSaketh Kallepu believes, <strong>“Don’t work hard, just work with heart.”</strong> With this belief, he joined as Co-Founder, mentor, and trainer at Codegnan to change the education platform and build a new technical arena for passionate learners. ",
        image:"/members/trainer-2.pngw3_.webp",
        mentorlinkedinid:"https://www.linkedin.com/in/saketh-codegnan/"
      }
    ]
  }
  

  const data2 = [
    {
        head: "What are the prerequisites of a JavaScript Programming Course?",
        p: "There are no mandatory prerequisites for a Javascript programming language; having basic computer knowledge will do.  This course is specifically designed for all levels of learners. Therefore, even if you don’t have basic knowledge of JavaScript or any programming language, you can join the course. "
    },
    {
        head: "How long does it take to complete this JavaScript course?",
        p: "It takes 30+ days to complete this JavaScript course. However, it is a self-paced course so if you  can discipline yourself with daily learning and practice, you can finish up early. By devoting 1 hour every day into different modules of the program, you will be able to finish the course in perfect 30 days."
    },
    {
        head: "Will I get a Certificate after completing this online JavaScript course?",
        p: "Yes, you will get a digital certificate after completing this online Javascript course. These certificates are shareable on social media platforms and professional networks that prove your abilities and knowledge of JavaScript."
    },
    {
        head: "Who is this JavaScript course for?",
        p: "This JavaScript course is designed for all learners at different skill levels. If you are a beginner or someone who wants to change career, you can enrol for the course and learn a basic introduction to core JavaScript that will help you land a job or take up an advanced JavaScript program."
    },
    {
        head: "Are there any coding tests and quizzes to test my knowledge after completing this JavaScript?",
        p: "Yes, there are 28 tests and quizzes throughout the program to test your knowledge improvement with JavaScript training. This is a self-guided course, so you won’t take any exams but finish the course, complete all quizzes, and work on the projects to win certificates."
    },
    {
        head: "Will this JavaScript learnings help me in getting a job or internship?",
        p: <>Yes, this JavaScript learning will help you land a job for fresher roles, but the program doesn’t promise you 100% job placement. However, you can join the 100-days <Link className="Linkcolor" to="#">Job Accelerator Program </Link> of Codegnan that guarantees you job placements immediately after completing the course.</>
    }
];






export default function Online_js() {
    return (
        <OnlineCourse head={headContext} main={main_content} mentor={mentorsData}  dropdown={data2}/>
    );
}
