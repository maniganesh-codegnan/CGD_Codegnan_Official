import React from "react";
import OnlineCourse from "./online_template";
import { Link } from "react-router-dom";


const headContext = {
    title: "Python Mini Projects",
    p: "Having theoretical knowledge of Python is not sufficient for someone who wants to become a Python developer and excel in the field, it requires practical knowledge. This course compiles a few mini Python projects along with providing you necessary knowledge about how to build them effectively.\n" +
        "<ul>" +
        [
            "54 lessons",
            "0 tests",
            "3 trial sessions",
            "Pricfe: 399+GST",
            "24/7 online accessibility"
        ].map((item, index) => (
            "<li style='margin-left: 50px;'>" + "<span style='color:#EE4a62;'>&#x2713;&nbsp;</span>" + item + "</li>"
        )).join('') +
        "</ul>",
    start_course: "https://academy.codegnan.com/learn/Python-Mini-Projects",
    free_trial: "https://academy.codegnan.com/learn/home/Python-Mini-Projects/section/175278/lesson/956299?",
    image: "/academic_online_syllabus/python-mini-project.webp"
}

const main_content = {
    p: (
        <>
            <h2>What this Python Mini Projects is about</h2>
            <p>
            This Python Mini Projects aims to improve your practical skills by developing basic to advanced Python projects that showcases your skills and abilities. Anyone with prior knowledge in Python programming and willing to become a Python developer needs to create projects that attract employers. 
<br/><br/>This series of videos will first go through the basic Python concepts such that if you have forgotten certain topics you can remember them. Then you will learn web scraping of a real estate website and gather essential data. 
<br/><br/>Learners will understand data analysis concepts where they will know how to analyse and ask proper sets of questions to the data, and the use of Matplotlib and Seaborn in data analysis. They will also know how to build APIs using Python Flask. 
<br/><br/>The fourth project of this course is building a Face Detection Model to identify faces within an image using OpenCV. Finally, our last project includes a step by step guide of building a Virtual Assistant with multiple features like responding to your commands, searching and communicating true data from the browser, etc.
            </p>
            <h2>What you'll learn</h2>
            <ul>
    <li>Remembering Python core concepts</li>
    <li>Learn web scraping of a single page website as well as multiple pages website, along with concepts of BeautifulSoup</li>
    <li>Knowledge of data analysis with Matplotlib and Seaborn and working on multiple projects</li>
    <li>Understanding of Flask API</li>
    <li>Knowledge of OpenCV and building a face detection model</li>
    <li>Building a virtual assistant with multiple features</li>
</ul>



            <h2>What’s covered in this online Python Mini Projects course</h2>
            <ol>
    <li>Python Overview, 7 Lessons, 0 Quizzes</li>
    <li>Web Scraping, 8 Lessons, 0 Quizzes</li>
    <li>Data Analysis, 15 Lessons, 0 Quizzes</li>
    <li>API, 5 Lessons, 0 Quizzes</li>
    <li>OpenCV, 6 Lessons, 0 Quizzes</li>
    <li>Virtual Assistant, 13 Lessons, 0 Quizzes</li>
</ol>



        </>
    )
}

const mentorsData = {
    color_title: "About the",
    title: "  Trainer ",
    mentors: [
        {
            name: "Manvendra Singh",
            description: "Manvendra Singh is a machine learning developer and trainer at Codegnan IT Solutions Pvt. Ltd. He has a PG Diploma in Data Science and has experience working on multiple machine learning projects throughout his career. He has trained over 300 students in Python, data analysis, machine learning, and data science domains. He believes in training students with real-time examples so that learners have a clear understanding of the knowledge they receive at Codegnan and work on live projects under his mentorship. ",
            image: "/training/Manvendra-singh1.webp",
            mentorlinkedinid: "https://www.linkedin.com/in/me-manvendra/"
        }
    ]
}


const data2 = [
    {
        head: "What are the prerequisites of a Python Mini Projects Course?",
        p: "Having basic knowledge of Python programming is the only prerequisite of a Python Mini Projects course. The program begins with reintroducing you to Python concepts such that you can remember all of them thoroughly."
    },
    {
        head: "How long does it take to complete this Python Mini Projects course?",
        p: "This project will take almost 5 days to complete this Python Mini Projects course, if you are investing 30-40 mins daily into each module of the course. However there is no mandatory timeframe for completing the course so you can finish it according to your learning ability."
    },
    {
        head: "Will I get a Certificate after completing this online Python Mini Projects course?",
        p: "Yes, you will get a digital certificate after completing this online Python Mini Projects course. This certificate is shareable on social media and professional networks. For freshers, who don’t have previous work experience, these projects enrich their portfolio and help them get hired for entry-level positions in top companies.        "
    },
    {
        head: "Who is this Python Mini Projects course for?",
        p: "This project is for beginner Python developers who have basic knowledge of Python programming and now want to gain hands-on experience on real-time projects. You can add these 5 mini projects on your resume to improve your professional outlook.        "
    },
    {
        head: "Are there any coding tests and quizzes to test my knowledge after completing this Python Mini Projects course?",
        p: "No, there are no coding tests and quizzes to test your knowledge after completing this Python Mini Projects course. You will only get experienced with developing Python projects yourself."
    },
    {
        head: "Will this Python Mini Projects course learnings help me in getting a job or internship?",
        p: "Yes, this Python Mini Projects course learnings will help you get a job or internship. You can add these projects on your resume which will attract employers from top companies. But the program doesn’t promise you placement assistance or internship opportunities."
    }
];






export default function Online_python_mini() {
    return (
        <OnlineCourse head={headContext} main={main_content} mentor={mentorsData} dropdown={data2} />
    );
}
