import React from "react";
import OnlineCourse from "./online_template";
import { Link } from "react-router-dom";


const headContext = {
    title: "ReactJs",
    p: "This is a beginner friendly ReactJS course for learners who want to start a career in Mobile and web development. It comprises basic knowledge about ReactJS including its states, components, keys & maps, Virtual DOM, props, lists, forms, events and more that you need to know for mobile app development.\n" +
        "<ul>" +
        [
            "37 lessons",
            " 12 tests",
            "1 trial sessions",
            "Price :999+GST",
            "24/7 online accessibility"
        ].map((item, index) => (
            "<li style='margin-left: 50px;'>" + "<span style='color:#EE4a62;'>&#x2713;&nbsp;</span>" + item + "</li>"
        )).join('') +
        "</ul>",
    start_course: "https://academy.codegnan.com/learn/ReactJS",
    free_trial: "https://academy.codegnan.com/learn/home/ReactJS/section/311459/lesson/1900623?",
    image: "/academic_online_syllabus/React.js.webp"
}

const main_content = {
    p: (
        <>
            <h2>What this ReactJS course is about</h2>
            <p>
                ReactJS is the free and open-source frontend JavaScript library used to build dynamic user interfaces depending on React components. It ranks among the top few  <Link to="https://www.statista.com/statistics/1124699/worldwide-developer-survey-most-used-frameworks-web/" className="Linkcolor">most used web frameworks</Link>  among developers globally for developing both web and mobile applications. It doesn’t require much coding and offers more functionalities than many other web development frameworks.
                <br /><br />This course covers all the basic knowledge of ReactJS that you must know for web development. It includes setting up the environment for implementation of ReactJS, structure of ReactJS, use of virtual DOM, React state and components, how to send data from one component to another using React Props, and more.
                <br /><br />Most of the modules end in a quiz which allows you to test your knowledge and improve skills. Upon successful completion of the course you will be able to use reusable components to render views where data changes over time, and create more scalable and maintainable websites and applications. Additionally you can use props to pass data between components, forms to allow users interact with the web page, and build an application in React.
            </p>
            <h2>What you'll learn</h2>
            <ul>
                <li>How to install the environment for ReactJS</li>
                <li>Creating dynamic react applications using npx</li>
                <li>Get in-depth knowledge of ReactJS core components including its structure, components, state, list, fragment, map & keys, and events </li>
                <li>Use of React props to pass data between components</li>
                <li>Use forms to allow users to interact with the application</li>
                <li>Learn how JSX works</li>
            </ul>
            <h2>What's covered in this online ReactJS course</h2>
            <ol>
                <li>Installation - 1 Lesson, 0 Quizzes</li>
                <li>Creating React App - 1 Lesson, 1 Quiz</li>
                <li>Structure of ReactJS - 4 Lessons, 1 Quiz</li>
                <li>Types of Components in React - 4 Lessons, 1 Quiz</li>
                <li>What is State and its working - 4 Lessons, 1 Quiz</li>
                <li>Sending Data from One Component to Another using React Props - 2 Lessons, 1 Quiz</li>
                <li>React Fragment and its usage - 1 Lesson, 1 Quiz</li>
                <li>React List - 1 Lesson, 1 Quiz</li>
                <li>React map & keys. Why keys needed for looping action - 1 Lesson, 1 Quiz</li>
                <li>React Form - 1 Lesson, 1 Quiz</li>
                <li>React-router-DOM package in React - 1 Lesson, 1 Quiz</li>
                <li>React Events - 3 Lessons, 1 Quiz</li>
                <li>React JSX and its importance - 1 Lesson, 1 Quiz</li>
            </ol>
        </>
    )
}

const mentorsData = {
    color_title: "About the",
    title: "  Trainer ",
    mentors: [
        {
            name: "Ravi Siva Ram Teja Nagulavancha",
            description: "N Ravi Siva Ram Teja is a MERN Stack Developer and Mentor at Codegnan. He holds a BTech degree in computer science and worked for more than 4 years as a full-stack developer and mentor. His knowledge of HTML5, CSS3, Bootstrap, JavaScript, MySQL, and multiple other programming languages and frameworks makes him a great mentor for beginners and professional learners at Codegnan. ",
            image: "/training/shiva-ram-teja.webp",
            mentorlinkedinid:"https://www.linkedin.com/in/ravi-siva-ram-teja-nagulavancha-053199253/"
        }
    ]
}


const data2 = [
    {
        head: "What are the prerequisites of a ReactJS Programming Course?",
        p: "There are no mandatory prerequisites for this ReactJS programming course, having basic internet skills and eagerness to start with coding is sufficient. It is a beginner friendly course and so our experts have explained the entire ReactJS from scratch."
    },
    {
        head: "How long does it take to complete this ReactJS course?",
        p: "You can complete this ReactJS course within a week if you are investing at least 30-40 mins daily on it. However this is a self paced course so there is no mandatory timeframe for completing each module and you can learn them according to your learning and understanding abilities."
    },
    {
        head: "Will I get a Certificate after completing this online ReactJS course?",
        p: "Yes, you will get a digital certificate after completing this online ReactJS course which is shareable on social media and professional networks. However, if you are joining their offline training sessions you will receive paperback certificates. Both of these certificates hold a global value and can help you attract employers’ attention."
    },
    {
        head: "Who is this ReactJS course for?",
        p: "This ReactJS course is for all who wants to start their career in mobile and web development with ReactJS. This is a beginner friendly course so you don’t need to worry about being a professional in web development. You can learn everything slowly from our mentors and if you find this domain interesting you can proceed with advance courses."
    },
    {
        head: "Are there any coding tests and quizzes to test my knowledge after completing this ReactJS course?",
        p: "Yes, there are 12 coding tests and quizzes throughout the program but no exams at the end to test your knowledge as it is a self-guided course. But you need to complete each of the quizzes to proceed with the next modules."
    },
    {
        head: "Will this ReactJS course learnings help me in getting a job or internship?",
        p: "Yes, this ReactJS course learnings will help you get an entry level job or internship. But the program doesn’t promise any job assistance. You can either start with an internship after completing the course, or look out for advanced courses."
    }
    
];






export default function Online_react() {
    return (
        <OnlineCourse head={headContext} main={main_content} mentor={mentorsData} dropdown={data2} />
    );
}
