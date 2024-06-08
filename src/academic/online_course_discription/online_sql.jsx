import React from "react";
import OnlineCourse from "./online_template";
import { Link } from "react-router-dom";


const headContext = {
    title: "MySQL",
    p: "MySQL is one of the popular open-source relational database management systems which is highly demanded in the industry in the present years. This course will give you a comprehensive introduction to MySQL, working with databases, and hands-on training with real-time use cases.\n" +
        "<ul>" +
        [
            "78 lessons",
            "7 tests",
            "0 trial sessions",
            "Price : 499+GST",
            "24/7 online accessibility"
        ].map((item, index) => (
            "<li style='margin-left: 50px;'>" + "<span style='color:#EE4a62;'>&#x2713;&nbsp;</span>" + item + "</li>"
        )).join('') +
        "</ul>",
    start_course: "https://academy.codegnan.com/learn/SQL",
    free_trial: "https://academy.codegnan.com/learn/SQL",
    image: "/academic_online_syllabus/mysql1.webp"
}

const main_content = {
    p: (
        <>
            <h2>What this MySQL course is about</h2>
            <p>
                MySQL is an in-demand expertise in the market that is expected to remain steady for a long time now. Top companies globally are using MySQL in their business including Dropbox, Airbnb, Udemy, GitHub, Slack, and many more. MySQL is one of the popular open source SQL databases available today that can be a perfect starting point for learners willing to know the working of web applications with databases.
                <br /><br />This MySQL course is designed specifically for beginners and professionals with knowledge in atleast one programming language can understand it better. It starts with introducing students with databases, types of DBMS, how MySQL is different from other database management systems, and working with databases. Learners will know about SQL sublanguages, MySQL operators and string operations, and creating and working on tables.
            </p>
            <h2>What you'll learn</h2>
            <ul>
                <li>Understanding of databases and types of DBMS</li>
                <li>Clear knowledge of SQL Sublanguages (creating tables, knowledge of DML, DCL, and DQL)</li>
                <li>The basic idea of MySQL operators, string functions and DDL</li>
                <li>Working with MySQL Workbench</li>
            </ul>
            <h2>What’s covered in this online Python Web Framework - Flask course</h2>
            <ol>
                <li>Introduction to Database, 7 Lessons, 1 Quiz</li>
                <li>Working with Databases, 7 Lessons, 1 Quiz</li>
                <li>SQL Sublanguages, 8 Lessons, 2 Quizzes</li>
                <li>MySQL Operators, 9 Lessons, 2 Quizzes</li>
                <li>DDL: Alter and Rename, 6 Lessons, 1 Quiz</li>
                <li>String Functions, 4 Lessons, 0 Quizzes</li>
                <li>Understanding and Working on Constraints, 10 Lessons, 0 Quizzes</li>
                <li>Refining Selections and Working with MySQL Workbench, 7 Lessons, 0 Quizzes</li>
                <li>Working with Aggregate functions and SQL FILES, 10 Lessons, 0 Quizzes</li>
                <li>Getting into Data types, 3 Lessons, 0 Quizzes</li>
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
        head: "What are the prerequisites of a MySQL course?",
        p: "There are no mandatory prerequisites for a MySQL course other than having basic computer skills and an understanding of databases. Plus, having basic knowledge of any programming language can be beneficial for the course."
    },
    {
        head: "How long does it take to complete this MySQL course?",
        p: "It takes less than a month to complete this MySQL course. This is a self-paced course and if you devote 30 mins to an hour every day, you can complete the course in 10-12 days, but some modules can be time-consuming. There is no fixed period to finish the course, so you can gain knowledge according to your ability."
    },
    {
        head: "Will I get a Certificate after completing this online MySQL course?",
        p: "Yes, you will get a digital certificate after completing this online MySQL course that is shareable on any social media platform and professional network.        "
    },
    {
        head: "Who is this MySQL course for?",
        p: "This MySQL course is for anyone who wants to start their career as a data analyst, web developer or database administrator. Beginners, intermediates, and IT professionals can enroll in this course.        "
    },
    {
        head: "Are there any coding tests and quizzes to test my knowledge after completing this MySQL course?  ",
        p: " Yes, there are 9 tests throughout the course where you can test your knowledge and understand what you have gained from the course. As this is a self-paced course, there are no face-to-face exams, but you can finish these tests to move forward with the next modules."
    },
    {
        head: "Will this MySQL course learnings help me in getting a job or internship?",
        p: <>
        Yes, these MySQL course learnings will help you get fresher jobs or internships, but the program doesn’t promise any placement assistance. However, you can try their 100-day <Link to="" className="Linkcolor">Job Accelerator Program</Link> , which assures you of 100%  job placement immediately after course completion.
        </>
    }

];






export default function Online_sql() {
    return (
        <OnlineCourse head={headContext} main={main_content} mentor={mentorsData} dropdown={data2} />
    );
}
