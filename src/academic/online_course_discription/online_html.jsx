import React from "react";
import OnlineCourse from "./online_template";
import { Link } from "react-router-dom";


const headContext = {
    title: "Online HTML & CSS Course (Free)",
    p: "If you are interested in front-end development but have zero clue, this practical-based course is all you need. Learn the fundamentals of the web and how to build, style, and design eye-grabbing web pages.\n" +
        "<ul>" +
        [
            "117 lessons",
            " 26 tests",
            "1 trial sessions",
            "24/7 online accessibility"
        ].map((item, index) => (
            "<li style='margin-left: 50px;'>" + "<span style='color:#EE4a62;'>&#x2713;&nbsp;</span>" + item + "</li>"
        )).join('') +
        "</ul>",
    start_course: "https://academy.codegnan.com/learn/Introduction-to-HTML",
    free_trial: "https://academy.codegnan.com/learn/Introduction-to-HTML"
}

const main_content = {
    p: (
        <>
            <h2>What this HTML & CSS course is about</h2>
            <p>This course will guide you through the fundamentals of HTML and CSS, the essential building blocks of any website. No prior coding experience is needed! We’ll break down complex concepts into easy-to-understand lessons with hands-on exercises to solidify your learning.
                <br /><br />Learn HTML to structure your webpage and add content, then dive into CSS to design its visual style. In this course, you will also learn the essential elements, formatting, and media integration necessary for designing noteworthy web pages.
                <br /><br />To get to every new chapter you will be required to pass a test or quiz. So do not think that this FREE course won’t expect any accountability from you. You must complete the tasks to get to the next chapter.
                <br /><br />By the end of the course, you will also work on multiple hands-on projects like building a resume and a responsive template to test to knowledge. Plus these will be a great add-on to your portfolio.</p>
            <h2>What you'll learn</h2>
            <p>Here,s a brief idea of the things you will be learning from this course.  </p>
            <ul>
                <li>HTML elements, tags, and how to build the foundation of a webpage.</li>
                <li>CSS syntax, selectors, and properties to control fonts, colors, layouts, and more.</li>
                <li>Setting up a development environment using the VS Code IDE with helpful extensions.</li>
                <li>Popular ways to format text, images, and other elements on your webpage.</li>
                <li>Building links, lists, tables, and forms to add functionality to your website.</li>
                <li>Integrating images, audio, and video into your web pages.</li>
            </ul>
            <h2>What's covered in this online HTML & CSS course</h2>
            <ol>
                <li>Introduction to HTML – Lessons: 1, Quizzes: 1</li>
                <li>vscode IDE and extensions – Lessons: 1, Quizzes: 0</li>
                <li>HTML element – Lessons: 1, Quizzes: 1</li>
                <li>Basic Page Structure – Lessons: 3, Quizzes: 1</li>
                <li>HTML code execution – Lessons: 1, Quizzes: 1</li>
                <li>Formatting Page Content – Lessons: 4, Quizzes: 1</li>
                <li>Html comments – Lessons: 1, Quizzes: 0</li>
                <li>HTML attributes – Lessons: 1, Quizzes: 1</li>
                <li>Html images – Lessons: 2, Quizzes: 1</li>
                <li>Creating Links – Lessons: 3, Quizzes: 1</li>
                <li>Creating Lists – Lessons: 3, Quizzes: 1</li>
                <li>Self closing tags – Lessons: 1, Quizzes: 1</li>
                <li>Creating tables – Lessons: 3, Quizzes: 1</li>
                <li>Using media elements – Lessons: 3, Quizzes: 1</li>
                <li>Html forms – Lessons: 4, Quizzes: 1</li>
                <li>Introduction to CSS – Lessons: 1, Quizzes: 0</li>
                <li>Syntax – Lessons: 1, Quizzes: 0</li>
                <li>Executing First CSS Code – Lessons: 1, Quizzes: 1</li>
                <li>Types of selectors – Lessons: 1, Quizzes: 1</li>
                <li>Simple Selector – Lessons: 2, Quizzes: 0</li>
                <li>Combinator Selector – Lessons: 1, Quizzes: 0</li>
                <li>Pseudo Class Selector – Lessons: 1, Quizzes: 0</li>
                <li>Attribute Selector – Lessons: 1, Quizzes: 1</li>
                <li>CSS Comment – Lessons: 1, Quizzes: 0</li>
                <li>Color properties – Lessons: 2, Quizzes: 0</li>
                <li>Typography – Lessons: 6, Quizzes: 1</li>
                <li>Box model – Lessons: 1, Quizzes: 1</li>
                <li>Borders – Lessons: 1, Quizzes: 0</li>
                <li>Margins – Lessons: 2, Quizzes: 0</li>
                <li>Padding – Lessons: 1, Quizzes: 1</li>
                <li>Styling navigations – Lessons: 1, Quizzes: 0</li>
                <li>Position – Lessons: 7, Quizzes: 1</li>
                <li>Overflow – Lessons: 1, Quizzes: 1</li>
                <li>Float – Lessons: 1, Quizzes: 0</li>
                <li>Important – Lessons: 1, Quizzes: 0</li>
                <li>Styling HTML elements – Lessons: 1, Quizzes: 1</li>
                <li>Display property – Lessons: 3, Quizzes: 1</li>
                <li>Flex – Lessons: 2, Quizzes: 1</li>
                <li>Grid – Lessons: 1, Quizzes: 1</li>
                <li>Media Queries – Lessons: 2, Quizzes: 1</li>
                <li>Project on Resume Building using HTML – Lessons: 1, Quizzes: 0</li>
                <li>Project Creating a Favorite Blog – Lessons: 1, Quizzes: 0</li>
                <li>Project Registration Page – Lessons: 1, Quizzes: 0</li>
                <li>Building a Search box of Google – Lessons: 1, Quizzes: 0</li>
                <li>Project Creating a responsive template – Lessons: 11, Quizzes: 0</li>
                <li>Assessment To get Certificate – Lessons: 0, Quizzes: 1</li>
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
            mentorlinkedinid: "https://www.linkedin.com/in/ravi-siva-ram-teja-nagulavancha-053199253/"
        }
    ],
  
}


const data2 = [
    {
        head: "What are the prerequisites of this HTML & CSS Course?",
        p: <>
            Undergraduates with a minimum of 60% in their high secondary (10+2 in any stream) are eligible for this course. Other than that, there are no such prerequisites for this course. 
<br/><br/>However, since this course only focuses on HTML and CSS, having prior knowledge of any other programming language like Python or C can help you understand better. 
<br/><br/>To do so, you can check out codegnan’s FREE Python and C programming courses.
        </>
    },
    {
        head: "How long does it take to complete this HTML & CSS course?",
        p: "It is a 60+ hours value-packed course. If you devote atleast 10-12 hours every week, you can comfortably learn all the HTML & CSS concepts in three months or so."
    },
    {
        head: "Will I get a Certificate after completing this online HTML & CSS course?",
        p: "Yes, you will get a shareable online certificate for this course. You just need to finish 75% of the course and the project assignment in the end to receive the certificate."
    },
    {
        head: "Who is this HTML & CSS course for?",
        p: "Anyone who wishes to become a web developer is an ideal candidate for this course. HTML and CSS are essential if you want to become successful, as they build your acumen for learning more complex languages."
    },
    {
        head: "Are there any coding tests and quizzes to test my knowledge after completing this HTML & CSS course?",
        p: "Yes, there are a total of 26 tests across 46 modules of this online HTML & CSS course. You need to pass these tests and quizzes to move to the next chapter. This will ensure that you are actually learning and not wasting time sitting in front of your computer."
    },
    {
        head: "Will this Python proaWill this HTML & CSS course learnings help me in getting a job or internship?gramming course learnings help me in getting a job or internship?",
        p: <> Yes, the learnings will be useful for getting entry-level front-end development jobs. However, if you want better opportunities codegnan does have its     <Link to="#" className="Linkcolor">Job Assistance Program</Link>  where you can get placed in prestigious companies. It is a 100-day intensive training program where you learn the latest requirements of companies from Industry experts. </>
     }

];






export default function Online_html() {
    return (
        <OnlineCourse head={headContext} main={main_content} mentor={mentorsData} dropdown={data2} />
    );
}
