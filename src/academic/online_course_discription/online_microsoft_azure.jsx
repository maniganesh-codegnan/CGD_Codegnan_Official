import React from "react";
import OnlineCourse from "./online_template";
import { Link } from "react-router-dom";


const headContext = {
    title: "Microsoft Azure AI Fundamentals",
    p: "This Microsoft Azure AI Fundamentals course will cover the fundamentals of AI, Machine Learning, Computer Vision, NLP and how to use them in creating intelligent solutions on Microsoft Azure cloud platform. You will also get a Free Microsoft AI-900 voucher to easily crack the exam.\n" +
        "<ul>" +
        [
            "95 lessons",
            "1 tests",
            "2 trial sessions",
            "Price :599+GST",
            "24/7 online accessibility"
        ].map((item, index) => (
            "<li style='margin-left: 50px;'>" + "<span style='color:#EE4a62;'>&#x2713;&nbsp;</span>" + item + "</li>"
        )).join('') +
        "</ul>",
    start_course: "https://academy.codegnan.com/learn/ai-900",
    free_trial: "https://academy.codegnan.com/learn/home/ai-900/section/191596/lesson/1072562?",
    image: "/academic_online_syllabus/azure.webp"
}

const main_content = {
    p: (
        <>
            <h2>What this Microsoft Azure AI Fundamentals [AI-900] course is about</h2>
            <p>
                Artificial intelligence is now everywhere, from taxi booking apps, voice assistants, and chatbots to image recognition through Google Lens, smart home security cameras, car crash detection and more. This Microsoft Azure AI Fundamentals course introduces you to the fundamental concepts of AI, machine learning and Microsoft Azure services to create smart solutions. You will learn about the key elements of AI, how machines learn, data explosion, supervised and unsupervised learning, understanding of computer vision and NLP, and more.
                <br /><br />It is specifically designed for everyone who wants to understand the workings of artificial intelligence and machine learning, including beginners and intermediate to advanced-level students. By the end of the course, you will receive a digital certificate that is shareable on social media platforms and professional networks. It will showcase your knowledge, skills, and expertise in AI and help you land technical and non-technical AI-related jobs. Plus you will also get AI-900 exam preparation guidance that will help you crack the exam.
            </p>
            <h2>What you'll learn</h2>
            <ul>
                <li>Fundamental concepts of artificial intelligence</li>
                <li>Knowledge of machine learning, computer vision and natural language processing</li>
                <li>Working on different AI models</li>
                <li>Hands-on training on multiple projects (creating Bot, creating Knowledge base)</li>
                <li>Learn AI-900 exam instructions and clear the exam</li>
            </ul>
            <h2>What’s covered in this online Microsoft Azure AI Fundamentals [AI-900] course</h2>
            <ol>
                <li>Introduction to AI and Azure, 18 Lessons, 1 Quiz</li>
                <li>Working on No Code Predictive Model, 12 Lessons, 0 Quizzes</li>
                <li>Creating a Regression Model, 12 Lessons, 0 Quizzes</li>
                <li>Creating a Classification Model, 6 Lessons, 0 Quizzes</li>
                <li>Create A Clustering Model Using Azure ML Designer, 4 Lessons, 0 Quizzes</li>
                <li>Exploring Computer Vision in Microsoft Azure, 2 Lessons, 0 Quizzes</li>
                <li>Classifying Images with Custom Vision Services, 4 Lessons, 0 Quizzes</li>
                <li>Object Detection using Custom Vision Service, 4 Lessons, 0 Quizzes</li>
                <li>Detect And Analyze Face With Face Service, 5 Lessons, 0 Quizzes</li>
                <li>Reading Text with Computer Vision Service, 5 Lessons, 0 Quizzes</li>
                <li>Analyze Receipts with the Form Recognizer Service, 2 Lessons, 0 Quizzes</li>
                <li>Exploring NLP on Azure, 3 Lessons, 0 Quizzes</li>
                <li>Recognize and Synthesize Speech, 4 Lessons, 0 Quizzes</li>
                <li>Translate Text And Speech, 3 Lessons, 0 Quizzes</li>
                <li>Creating Language Model With Language Understanding, 4 Lessons, 0 Quizzes</li>
                <li>Working on Conversational AI, 6 Lessons, 0 Quizzes</li>

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
        head: "What are the prerequisites of a Microsoft Azure AI Fundamentals [AI-900] Course?",
        p: "There are no specific prerequisites for a Microsoft Azure AI Fundamentals course, but having a good grasp of basic computer skills, an understanding of mathematics, and knowledge of Microsoft Azure is a plus. However, anyone who wants to start their journey with Microsoft Azure and AI can enroll on this course."
    },
    {
        head: "How long does it take to complete this Microsoft Azure AI Fundamentals [AI-900] course?",
        p: "It takes nearly 30 days to complete this Microsoft Azure AI Fundamentals course. As it is self-paced you can complete the course as per your learning and understanding abilities. However, if you invest 1 hour for 4 days a week, you will complete the entire syllabus with quizzes and projects in one month."
    },
    {
        head: "Will I get a Certificate after completing this online Microsoft Azure AI Fundamentals [AI-900]?",
        p: "Yes, you will get a certificate after completing this online Microsoft Azure AI-900 Fundamentals. However, as this is an online course, you will receive a shareable digital certificate that you can share on social media and professional networks."
    },
    {
        head: "Who is this Microsoft Azure AI Fundamentals [AI-900] for?",
        p: "This Microsoft Azure AI Fundamentals course is for anyone willing to start their career with AI and Azure, and want to apply for the exam AI-900. Fresh graduates to IT professionals looking for a change in career, or someone having knack of automation can enroll for the course."
    },
    {
        head: "Are there any coding tests and quizzes to test my knowledge after completing this Microsoft Azure AI Fundamentals [AI-900]?",
        p: "There is only one test you will get throughout the Microsoft Azure AI Fundamentals program, but you can test your skills through the self-guided practical sessions after each module and work on projects by the end of the course. You will also get AI-900 exam instructions that will help you crack the exam."
    },
    {
        head: "work on projects by the end of the course. You will also get AI-900 exam instructions that will help you crack the exam.",
        p: "No, this Microsoft Azure AI Fundamentals will not help you get a job but can be a great skill to excel in AI fresher roles. This course will help you crack the AI-900 exam. However, you can prepare for advanced Microsoft Azure certification courses like Azure AI Engineer Associate or Azure Data Scientist Associate."
    }

];






export default function Online_MicrosoftAzure() {
    return (
        <OnlineCourse head={headContext} main={main_content} mentor={mentorsData} dropdown={data2} />
    );
}
