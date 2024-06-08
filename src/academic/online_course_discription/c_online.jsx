import React from "react";
import OnlineCourse from "./online_template";
import { Link } from "react-router-dom";


const headContext = {
    title: "Free C Programming Course with Certification Online",
    p: "C is a popular programming language because it is fast, efficient, and portable. It is also a relatively easy language to learn, making it a good choice for beginners. If you are looking for a FREE course that covers all the important ins and outs of language C, then this course is for you.\n" +
        "<ul>" +
        [
            "94 lessons",
            " 17 tests",
            "3 trial sessions",
            "24/7 online accessibility"
        ].map((item, index) => (
            "<li style='margin-left: 50px;'>" + "<span style='color:#EE4a62;'>&#x2713;&nbsp;</span>" + item + "</li>"
        )).join('') +
        "</ul>",
    start_course: "https://academy.codegnan.com/learn/C-Programming",
    free_trial: "https://academy.codegnan.com/learn/home/C-Programming/section/175539/lesson/955038?",
    image: "/academic_online_syllabus/c-language.webp"
}

const main_content = {
    p: (
        <>
            <h2>What this C programming course is about</h2>
            <p>Whether you’re a complete novice or a programmer seeking to broaden your skillset, Codegnan Academy’s C Programming course is the ideal platform to launch your journey.
<br/><br/>This comprehensive course meticulously covers a wide range of C Programming concepts. You will be taught from the very scratch to advanced levels, so no worries if you have zero prior knowledge of this or any programming language. This course is great for absolute beginners and those who want to expand their knowledge in C. 
<br/><br/>By the end of this course, you will be able to build real-world projects to solidify your understanding of the acquired concepts. In almost every module you will be presented with a test or quiz to understand how much you have learned. 
<br/><br/>To top it off, if you want a more extensive classroom experience of this course with certification and other benefits, you can avail yourself of that, too. </p>
            <h2>What you'll learn</h2>
            <p>Here's a brief idea of the things you will be learning from this course. </p>
            <ul>
                <li>What are the variables and data types in C</li>
                <li>What are operators and expression</li>
                <li>What are control flow statements (if- else, switch), and when and how to use them in coding</li>
                <li>What are looping statements (for, while) and their implementation</li>
                <li>Functions</li>
                <li>Arrays</li>
                <li>Pointers</li>
                <li>Dynamic memory allocation</li>
                <li>Structures and unions</li>
                <li>File handling</li>
            </ul>
            <h2>What's covered in this online Python programming course</h2>
            <ol>
                <li>Introduction to C - 2 Lessons, 0 Quizzes</li>
                <li>Algorithm - 1 Lesson, 1 Quiz</li>
                <li>Flow chart - 1 Lesson, 1 Quiz</li>
                <li>Variables - 1 Lesson, 1 Quiz</li>
                <li>Keywords - 1 Lesson, 1 Quiz</li>
                <li>Operators in C - 8 Lessons, 1 Quiz</li>
                <li>Data types in C - 7 Lessons, 1 Quiz</li>
                <li>Control Statements - 5 Lessons, 1 Quiz</li>
                <li>Looping statements - 5 Lessons, 1 Quiz</li>
                <li>Functions in C - 3 Lessons, 1 Quiz</li>
                <li>Arrays - 4 Lessons, 1 Quiz</li>
                <li>Strings - 8 Lessons, 1 Quiz</li>
                <li>Maths functions - 1 Lesson, 1 Quiz</li>
                <li>Structures - 7 Lessons, 1 Quiz</li>
                <li>Union - 1 Lesson, 1 Quiz</li>
                <li>Pointers - 4 Lessons, 1 Quiz</li>
                <li>Dynamic Memory Allocation - 4 Lessons, 1 Quiz</li>
                <li>Storage Classes in C - 1 Lesson, 0 Quizzes</li>
                <li>Understanding Files - 5 Lessons, 1 Quiz</li>
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
    ],
 
}


const data2 = [
    {
        head: "What are the prerequisites of a C Programming Course?",
        p: <>
        Undergraduates with a minimum of 60% in their high secondary (10+2 in any stream) are eligible for this course. Other than that, there are no such prerequisites for this course. <br/><br/>
However, having a basic understanding of computer or programming languages can help you grasp the concept faster.
        </>
    },
    {
        head: "How long does it take to complete this C programming course?",
        p: "It is a 60+ hours value-packed course. Since it is self-paced, the amount of time required to finish it depends on how much time you can devote. We recommend giving it at least 10-12 hours a week so you can complete it within two to three months, including the assignments and tests."
    },
    {
        head: "Will I get a Certificate after completing this online C programming course?",
        p: "Yes, this free online course does come with a certification. To get that you need to successfully pass all the tests and quizzes in this course. Once you complete the last test of the last module, you will get a certificate of excellence from Codegenan that can be shared online."
    },
    {
        head: "Who is this C programming course for?",
        p: "This C programming course is great for beginners to intermediate-level individuals who want to learn the language C. While having prior knowledge will speed up the learning process, a complete beginner can also learn from this course. So, even if you are from a non-IT background, this course will be helpful for you. This C programming course is great for beginners to intermediate-level individuals who want to learn the language C. While having prior knowledge will speed up the learning process, a complete beginner can also learn from this course. So, even if you are from a non-IT background, this course will be helpful for you."
    },
    {
        head: "Are there any coding tests and quizzes to test my knowledge after completing this C programming course?",
        p: "Yes, there are a total of 17 tests across 20 modules of this online C programming course. You need to pass these tests and quizzes to move to the next chapter. This will ensure that you are actually learning and not wasting time sitting in front of your computer."
    },
    {
        head: "Will this C programming course learnings help me in getting a job or internship?",
        p: <>Yes, the learnings will be useful for upskilling and getting you a job, although it is not any sort of promise. However, codegnan does have its <Link to="#" className="Linkcolor">Job Assistance Program</Link> where you get a 100% placement guarantee. It is a 100-day intensive training program where you learn the latest requirements of companies from Industry experts. </>
    },
    {
        head: "Does codegnan offer classroom training for C Programming?",
        p: (
            <>
                Yes, codegnan does offer classroom training for C programming in Vijaywada.
                <ul>
                    <li><Link to="#" className="Linkcolor"><b> Codegnan Vijayawada</b></Link>: 40-5-19/16, Prasad Naidu Complex, P.B.Siddhartha Busstop, Moghalrajpuram, Vijayawada, Andhra Pradesh, 520010.</li>
                </ul>
            </>
        )
    }
];






export default function Online_C() {
    return (
        <OnlineCourse head={headContext} main={main_content} mentor={mentorsData} dropdown={data2} />
    );
}
