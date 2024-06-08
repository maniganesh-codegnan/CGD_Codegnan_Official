import React from "react";
import OnlineCourse from "./online_template";
import { Link } from "react-router-dom";


const headContext = {
    title: "Online Python Programming Course (Free)",
    p: "Unlike some programming languages with complex syntax, Python is known for its readability.  However, that does not compromise with the fact that it is also a versatile language. It can be used for web development to create dynamic websites and applications. So, if you’re entirely new to programming, Python is an excellent language to start with.\n" +
        "<ul>" +
        [
            "135 lessons",
            " 17 tests",
            "3 trial sessions",
            "24/7 online accessibility"
        ].map((item, index) => (
            "<li style='margin-left: 50px;'>" + "<span style='color:#EE4a62;'>&#x2713;&nbsp;</span>" + item + "</li>"
        )).join('') +
        "</ul>",
    start_course: "https://academy.codegnan.com/learn/Python",
    free_trial: "https://academy.codegnan.com/learn/home/Python/section/177592/lesson/967216?",
    image: "/academic_online_syllabus/python-prg-course1.webp"
}

const main_content = {
    p: (
        <>
            <h2>What this Python programming course is about</h2>
            <p>This Python programming course is designed for beginners with no prior programming experience. As a beginner, Python is a great choice to start with as it is easy to use, integrates with other languages, and is open-source. 
                <br /><br />The course covers a variety of topics including data types, operators, control flow, functions, and object-oriented programming. Once you complete the course, you will be prepared to take the Microsoft Certification Exam and bag yourself an entry-level programming language-based job.
                <br /><br />If that’s not what you want, you can even implement the learnings of this course to work on various freelance projects like web development, game development, developing software and mobile applications, network programming, and many more things.
                <br /><br />In data science, Python is a must for tasks like data analysis, machine learning, and creating insightful visualizations. It’s also a popular choice for scripting and automation, allowing you to automate repetitive tasks on your computer.
                <br /><br />So if you are interested in any of the above but are completely new to programming, this course will help you lay a strong foundation.
                <br /><br />Plus, unlike other free courses available online, this will be a practical learning base. In almost every module you will be presented with a test or quiz to understand how much you have learned.
                <br /><br />To top it off, if you want a more extensive classroom experience of this course with certification and other benefits, you can avail yourself of that too. </p>
            <h2>What you'll learn</h2>
            <ul>
                <li>The fundamentals of Python. Such as understanding different data types (like numbers and text) and how to use operators (special symbols that perform calculations or comparisons) to manipulate that data.</li>
                <li>Give instructions to your Python programs using input and output statements.</li>
                <li>Using conditional statements (like if/else) to make decisions and loops (like for/while) to repeat tasks automatically.</li>
                <li>Functions like organizing your codes. </li>
                <li>Object-Oriented Programming (OOP).</li>
                <li>Working with modules and files. </li>
                <li>Working on projects like building virtual assistants.</li>
                <li>Doing web development using Flask.</li>
            </ul>
            <h2>What’s covered in this online Python programming course</h2>
            <ol>
                <li>Introduction to Python: 3 Lessons, 1 Quiz</li>
                <li>Data Types in Python: 18 Lessons, 1 Quiz</li>
                <li>Operators in Python: 10 Lessons, 1 Quiz</li>
                <li>Input and Output Statements: 3 Lessons, 1 Quiz</li>
                <li>Control Flow with Decisions and Loops: 15 Lessons, 1 Quiz</li>
                <li>Functions: 23 Lessons, 1 Quiz</li>
                <li>Modules and Files Input/Output Methods: 17 Lessons, 1 Quiz</li>
                <li>Object Oriented Programming in Python: 22 Lessons, 1 Quiz</li>
                <li> <b>Project –</b>1 Building Virtual Assistant: 7 Lessons, 0 Quizzes</li>
                <li><b>Project-</b>2 Working with Flask Framework: Not specified, Not specified</li>
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
        mentorlinkedinid:"#"
      }
    ]
  }
  

  const data2 = [
    {
        head: "What are the prerequisites of a Python Programming Course?",
        p: "Undergraduates with a minimum of 60% in their high secondary (10+2 in any stream) are eligible for this course. Other than that, there are no such prerequisites for this course. However, having a basic understanding of computer or programming languages can help you grasp the concept faster."
    },
    {
        head: "How long does it take to complete this Python programming course?",
        p: "It is a 30+ hours value-packed course. Since it is self-paced, the amount of time required to finish it depends on how much time can you devote. We recommend giving it atleast 10-12 hours a week, so you can complete it in under a month, including the assignments and tests."
    },
    {
        head: "Will I get a Certificate after completing this online Python programming course?",
        p: "Yes, this free online course does come with a certification. To obtain that you will be required to finish at least 70% of the modules and take the final assessment in module 11. Upon successfully completing the project assignment you will get a digital certificate that you can share on social media."
    },
    {
        head: "Who is this Python programming course for?",
        p: "This Python programming course is for anyone and everyone who is interested in learning Python. Especially if you are new to programming language, don’t come from a technical background but still have the passion to learn, this course will be for you."
    },
    {
        head: "Are there any coding tests and quizzes to test my knowledge after completing this Python programming course?",
        p: "Yes, there are a total of 18 tests across 11 modules of this online Python programming course. Since this is a self-paced, self-guided course these tests and quizzes will help you judge how well you have grasped the new concepts."
    },
    {
        head: "Will this Python programming course learnings help me in getting a job or internship?",
        p: <>This online Python programming course by codegnan does not come with an internship or placement facility. However, codegnan does have its <Link to="#" className="Linkcolor">Job Assistance Program</Link>  where you get a 100% placement guarantee. It is a 100-day intensive training program where you learn the latest requirements of companies from Industry experts.</>
    },
    {
        head:"Does codegnan offer classroom training for Python Programming?",
        p:(
            <>
            Yes, codegnan does offer classroom training for Python programming in three locations across India. These are- Vijayawada, Hyderabad and Bangalore. Here are the detailed addresses of each of the locations. 
            <br/>
            Here are the detailed addresses of each of the locations. 
            <br/>
            <ul>
                <li><Link to="#" className="Linkcolor"><b>Codegnan Banglore</b> </Link>: #951, 16th Main, BTM 2nd Stage, Bengaluru, Karnataka, 560076.</li>
                <li><Link to="#" className="Linkcolor"><b>Codegnan Vijayawada</b> </Link>: 40-5-19/16, Prasad Naidu Complex, P.B.Siddhartha Busstop, Moghalrajpuram, Vijayawada, Andhra Pradesh, 520010.</li>
                <li><Link to="#" className="Linkcolor"><b> Codegnan Hyderabad</b></Link>: Kothwal Madhava Reddy Plaza, Beside Indian Oil Petrol Bunk, JNTUH Metro Station, Nizampet X Roads, Hyderabad, 500072.</li>
            </ul>
            </>
        )
    }
];






export default function Online_python() {
    return (
        <OnlineCourse head={headContext} main={main_content} mentor={mentorsData}  dropdown={data2}/>
    );
}
