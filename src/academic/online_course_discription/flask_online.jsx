import React from "react";
import OnlineCourse from "./online_template";
import { Link } from "react-router-dom";


const headContext = {
    title: "Python Web Framework - Flask",
    p: "Whether you are a beginner or an experienced web developer, this program is specially designed to help you learn and master Flask and build your own  web applications. The course comprises basic knowledge about Flask including its setup and installation, and a popular template engine Jinja2.\n" +
        "<ul>" +
        [
            "49 lessons",
            "7 tests",
            "0 trial sessions",
            "Price : 499+GST",
            "24/7 online accessibility"
        ].map((item, index) => (
            "<li style='margin-left: 50px;'>" + "<span style='color:#EE4a62;'>&#x2713;&nbsp;</span>" + item + "</li>"
        )).join('') +
        "</ul>",
    start_course: "https://academy.codegnan.com/learn/Flask",
    free_trial: "https://academy.codegnan.com/learn/Flask",
    image: "/academic_online_syllabus/python-web-framework.webp"
}

const main_content = {
    p: (
        <>
            <h2>What this Python Web Framework - Flask course is about</h2>
            <p>
                Flask is a part of the Python module that allows web developers to build applications easily without worrying about low level details like thread management, protocol, etc. It has some cool features, for example, url routing, and template engine.
                <br /><br />This course covers the fundamentals of Flask that ensures you can implement the framework onto your next web development project. It also covers Jinja2 which is a popular template engine for Python. It combines a template with the specific data source to render a dynamic web page.
            </p>
            <h2>What you'll learn</h2>
            <ul>
                <li>Gain basic understanding of Flask web framework</li>
                <li>Know about virtual environment and create one</li>
                <li>Installing flask package and build Flask application</li>
                <li>Knowledge of building dynamic routes with Flask</li>
                <li>Get to know Request and Response in Flask</li>
                <li>Knowledge of Jinja2 and how to integrate CSS with Flask</li>
                <li>How to render HTML pages with render_template</li>
                <li>Building dynamic web pages with Flask – Jinja2</li>
                <li>How to build a login system with Flask, and Server side sessions</li>
                <li>Understanding of file handling with Flask</li>

            </ul>
            <h2>What’s covered in this online Python Web Framework - Flask course</h2>
            <ol>
                <li>Introduction to Flask and Installation, 5 Lessons, 1 Quiz</li>
                <li>Building routes with Flask, 7 Lessons, 1 Quiz</li>
                <li>Flask Request Handling, 5 Lessons, 1 Quiz</li>
                <li>Jinja2 Template Engine, 4 Lessons, 1 Quiz</li>
                <li>Dynamic Web Pages with Flask-Jinja2, 9 Lessons, 1 Quiz</li>
                <li>Login system with Flask, Server side sessions, 8 Lessons, 1 Quiz</li>
                <li>Files Handling with Flask, 4 Lessons, 1 Quiz</li>
            </ol>
        </>
    )
}

const mentorsData = {
    color_title: "About the",
    title: "  Trainer ",
    mentors: [
        {
            name: "Eswar Nandivada",
            description: "Being a young experienced Python developer at Codegnan, Eswar Nandivada has bagged numerous technical skills including Flask, JavaScript, AWS, MySQL, and knowledge of multiple other technologies. He holds a BS degree in Data Science and has years of experience in training students in the tech domain. He earned several certificates and licenses throughout his career and is focused at constant learning of latest technology trends in the market. ",
            image: "/academic_online_syllabus/Eswar1-min.webp",
            mentorlinkedinid: "https://www.linkedin.com/in/eswarnandivada/"
        }
    ]
}


const data2 = [
    {
        head: "What are the prerequisites of a Python Web Framework - Flask Course?",
        p: <>
        Basic understanding of Python programming and web development concepts are the prerequisites of a Python Web Framework – Flask course. If you aren’t aware of Python programming, you can enroll for their self-paced <Link to="https://academy.codegnan.com/learn/Python" className="Linkcolor"></Link> Python programming course or join Codegnan classroom training sessions for Python training in Bangalore, Hyderabad, and Vijayawada.
        </>
    },
    {
        head: "How long does it take to complete this Python Web Framework - Flask course?",
        p: "It takes almost a week to complete this Python Web Framework – Flask course if you are investing daily 20-30 mins into each module. However, there is no fixed timeframe for completing the syllabus as it is a self-paced course and you can complete them according to your abilities."
    },
    {
        head: "Will I get a Certificate after completing this online Python Web Framework - Flask course?",
        p: "Yes, you will get a digital certificate after completing this online Python Web Framework – Flask course. This certificate holds a global value and is shareable on social media platforms and professional networks."
    },
    {
        head: "Who is this Python Web Framework - Flask course for?",
        p: "This Python Web Framework – Flask course is for someone who wants to start their career in web development and have basic knowledge of Python."
    },
    {
        head: "Are there any coding tests and quizzes to test my knowledge after completing this Python Web Framework - Flask course?        ",
        p: "Yes, there are 7 tests throughout the course to test your knowledge but there isn’t any exam at the end of the course to understand how much you learnt. It is completely up to you how you will learn and implement your knowledge in building real world applications."
    },
    {
        head: "Will this Python Web Framework - Flask course learnings help me in getting a job or internship?",
        p: "Yes, this Python Web Framework – Flask course learnings will help you get a job or internship. It is an added skill for Python programmers and web developers, helping them land high-paid jobs. But the course doesn’t promise you job assistance, it will only prepare you so that you crack better opportunities."
    }

];






export default function Online_flask() {
    return (
        <OnlineCourse head={headContext} main={main_content} mentor={mentorsData} dropdown={data2} />
    );
}
