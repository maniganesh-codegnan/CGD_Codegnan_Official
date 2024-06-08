import React from "react";
import OnlineCourse from "./online_template";
import { Link } from "react-router-dom";


const headContext = {
    title: "Web Development with Python",
    p: "Django is a server-side high-level web framework written in Python language that helps web developers build pages faster and ensure pragmatic design approach. This course gives an overview of how to install Django on your system and start developing a web page, understand CRUD operations, payment gateway integration with website, and hosting app in cloud.\n" +
        "<ul>" +
        [
            "30 lessons",
            "1 tests",
            "3 trial sessions",
            "Pricfe: 399+GST",
            "24/7 online accessibility"
        ].map((item, index) => (
            "<li style='margin-left: 50px;'>" + "<span style='color:#EE4a62;'>&#x2713;&nbsp;</span>" + item + "</li>"
        )).join('') +
        "</ul>",
    start_course: "https://academy.codegnan.com/learn/Web-Development-with-Python",
    free_trial: "https://academy.codegnan.com/learn/home/Web-Development-with-Python/section/175596/lesson/955394?",
    image: "/academic_online_syllabus/pytho-web-development1.webp"
}

const main_content = {
    p: (
        <>
            <h2>What this Web Development with Python is about</h2>
            <p>
                Web development is no more a task of a huge team but you alone can do it by mastering Python programming language and web development frameworks.
                <br /><br />Django is a popular web framework that uses Python language and follows a model-template-view architecture. The primary goal of Django is to ease the process of creating complex database driven websites. It focuses on reusability and plugability of components, writing less codes, low coupling, rapid website development, and working with the principle of ‘don’t repeat yourself’.
                <br /><br />This tutorial we provide you a guide on how to install and create a Django project. You will also learn how to implement CRUD operations within your project where you can add, read, update or delete data. It gives a step by step guide on how to integrate payment gateway, and deployment of app in cloud.
            </p>
            <h2>What you'll learn</h2>
            <ul>
                <li>How to setup Virtual ENV and installation of Django</li>
                <li>Create a Django project</li>
                <li>Creating models, views, and templates</li>
                <li>Understanding of CRUD operation</li>
                <li>Knowledge of payment gateway integration with your website</li>
                <li>Introduction of GitHub and knowledge of hosting app in cloud</li>
            </ul>


            <h2>What’s covered in this online Web Development with Python course</h2>
            <ol>
                <li>Introduction and Architecture, 5 Lessons, 0 Quizzes</li>
                <li>Models, Views and Templates, 6 Lessons, 0 Quizzes</li>
                <li>CRUD Operations (cart), 11 Lessons, 0 Quizzes</li>
                <li>Payment Gateway Integration, 5 Lessons, 0 Quizzes</li>
                <li>Deployment in Cloud, 2 Lessons, 1 Quiz</li>
            </ol>


        </>
    )
}

const mentorsData = {
    color_title: "About the",
    title: "  Trainer ",
    mentors: [
        {
            name: "Ravi Chandra KL",
            description: "Ravi Chandra KL is a professional in Web Development and a mentor who can translate software requirements into effective programming code. His long experience in the domain can help learners know about latest trends in the market and create websites efficiently wi",
            image: "",
            mentorlinkedinid: "https://www.linkedin.com/in/saketh-codegnan/"
        }
    ]
}


const data2 = [
    {
        head: "What are the prerequisites of a Web Development with Python Programming Course?",
        p: <>
           Having basic knowledge of Python programming and web development are the prerequisites of this web development with Python programming course. If you aren’t aware of Python programming, you can get that training first. At Codegnan, you can enrol for the self-paced <Link to="https://academy.codegnan.com/learn/Python" className="Linkcolor">Python</Link>  course, join live online sessions, or attend classroom training sessions at Bangalore, Hyderabad and Vijayawada.
        </>
    },
    {
        head: "How long does it take to complete this Web Development with Python course?",
        p: "It takes almost 20 days to complete this Web Development with Python course if you are putting 20-30 mins daily. However, it is a self paced course and there is no fixed timeframe for completing the syllabus. You can learn according to your abilities and within your comfort zone."
    },
    {
        head: "Will I get a Certificate after completing this online Web Development with Python course?",
        p: "Yes, you will get a digital certificate after completing this web development with Python course. This certificates are shareable on social media platforms and professional networks. So, learners can share their certificate as a proof of their mastery in web development using Django."
    },
    {
        head: "Who is this Web Development with Python course for?",
        p: "This web development with Python course is for everyone willing to start their career in web development. However, you need to have a basic understanding of Python Programming."
    },
    {
        head: "Are there any coding tests and quizzes to test my knowledge after completing this Web Development with Python?",
        p: "Yes, there is a coding test or quiz at the end of the course to test your knowledge in web development with Django. Once you complete the test you will receive their digital certificate. Additionally, you will have one e-commerce website development to add on your portfolio that increases your professional profile."
    },
    {
        head: "Will this Web Development with Python course learnings help me in getting a job or internship?",
        p: <>
        Yes, this web development with Python course learnings will help you get a job or internship. But it doesn’t promise you to offer job letters or any placement assistance. For that, you can enrol into their <Link to="" className="Linkcolor">Job Accelerator Program</Link>  or  <Link to="#" className="Linkcolor"> Internship Program </Link> that offers you an opportunity to get a job immediately after course completion.
        </>
    }
];






export default function Online_python_web() {
    return (
        <OnlineCourse head={headContext} main={main_content} mentor={mentorsData} dropdown={data2} />
    );
}
