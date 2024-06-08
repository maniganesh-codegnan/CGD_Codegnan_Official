import React from "react";
import OnlineCourse from "./online_template";
import { Link } from "react-router-dom";


const headContext = {
    title: "Getting Started With RASPBERRY PI",
    p: "This course will help you learn about Raspberry Pi and how to write code and work with different functionalities of Raspberry Pi. Learners can implement the knowledge in building their own projects which will improve their professional portfolio, helping them launch better jobs.\n" +
        "<ul>" +
        [
            "19 lessons",
            " 0 tests",
            "0 trial sessions",
            "Price :Free",
            "24/7 online accessibility"
        ].map((item, index) => (
            "<li style='margin-left: 50px;'>" + "<span style='color:#EE4a62;'>&#x2713;&nbsp;</span>" + item + "</li>"
        )).join('') +
        "</ul>",
    start_course: "https://academy.codegnan.com/learn/Getting-Started-with-RASPBERRY-PI",
    free_trial: "https://academy.codegnan.com/learn/Getting-Started-with-RASPBERRY-PI",
    image:"/academic_online_syllabus/raspberry-Pi.webp"
}

const main_content = {
    p: (
        <>
            <h2>What this Getting Started With RASPBERRY PI course is about</h2>
            <p>This Getting Started with RASPBERRY PI course is a beginner-friendly free skill training program. Learners will get to know about Raspberry Pi, OS booting, and Raspberry Pi configuration.
<br/><br/>Raspberry Pi uses Linux operating system and this course covers the knowledge of writing and implementing the basic Linux commands. Learners will also understand how to work with LEDs, and different sensors. Additionally, this course will train you on working with cloud, posting sensor data in Google sheets, and controlling things using google assistant. 
<br/><br/>Mentors will give learners a clear understanding of how to control LED using MIT APP, taking snaps using a USB camera and sending images as attachments to Gmail, and about Node-Red.</p>
            <h2>What you'll learn</h2>
            
            <ul>
            <li>In-depth knowledge of Raspberry Pi</li>
    <li>Understanding of OS booting and Raspberry Pi configuration</li>
    <li>Knowledge of basic Linux commands</li>
    <li>Working with sensors, Cloud, MIT App, Camera, and Node-red</li>
            </ul>
            <h2>What's covered in this online HTML & CSS course</h2>
            <ol>
                
            <li>About Course – Lessons: 3, Quizzes: 0</li>
    <li>About OS and Raspberry pi Configuration – Lessons: 2, Quizzes: 0</li>
    <li>Linux Commands – Lessons: 1, Quizzes: 0</li>
    <li>Working With LED – Lessons: 1, Quizzes: 0</li>
    <li>Working With Sensors – Lessons: 4, Quizzes: 0</li>
    <li>Working with DHT sensor – Lessons: 1, Quizzes: 0</li>
    <li>Working With CLOUD – Lessons: 2, Quizzes: 0</li>
    <li>Working with MIT APP – Lessons: 1, Quizzes: 0</li>
    <li>Working with CAMERA – Lessons: 3, Quizzes: 0</li>
    <li>Working with NODE-RED – Lessons: 1, Quizzes: 0</li>
            </ol>
        </>
    )
}

const mentorsData = {
    color_title: "About the",
    title: "  Trainer ",
    mentors: [
        {
            name: "Shaik Rabbani Basha",
            description: "Shaik Rabbani Basha is a young talent at Codegnan with a background in BTech in Computer Science. Being an experienced IoT developer and having worked in multiple institutes, he has built a strong understanding of the latest technology trends in the market. His constant effort in learning new technologies and skills will help learners gain better insights into the real tech market. He has trained more than 2,000 students and has mentored more than 50 projects in several hackathons. His knowledge in building IoT applications using Raspberry Pi helps in bringing out real-time use cases in the domain for learners.            ",
            image: "/training/shaik-rabbani-min.webp",
            mentorlinkedinid: "https://www.linkedin.com/in/shaik-rabbani-basha-0a42a8223/"
        }
    ],
  
}


const data2 = [
    {
        head: "What are the prerequisites for Getting Started with RASPBERRY PI Programming Course?",
       p:"The prerequisites of a Getting Started with RASPBERRY PI programming course include a basic understanding of computers and a little knowledge of programming, and Linux OS is good. This course is specifically designed for beginners, so it covers almost everything from scratch. Even if you are willing to change your domain or upskill yourself, this course can be a great choice. "
    },
    {
        head: "How long does it take to complete this Getting Started with RASPBERRY PI course?",
        p: "It usually takes a month or two to complete the Getting Started with RASPBERRY PI course, but you can finish this in a few days. This is a self paced course which means there are no conditions that forces you to complete the course within a scheduled time. If you are investing daily 1 hour into the course, you can complete the whole in 10-15 days. However, it depends on the ability of your understanding a new technology and its implementations."
    },
    {
        head: "Will I get a Certificate after completing this online Getting Started with RASPBERRY PI course?",
        p: "Yes, you will get a digital certificate after completing this online Getting Started with RASPBERRY PI course. These certificates are shareable on social platforms and within professional networks, which increases your credibility and options for landing a high-quality job.        "
    },
    {
        head: "Who is this Getting Started with RASPBERRY PI course for?",
        p: "This Getting Started with RASPBERRY PI course is designed for all including beginners and professionals. It starts with introducing students to the course and about RASPBERRY PI, knowledge of OS and Raspberry Pi configuration, and Linux commands and proceeds to advanced concepts like working with sensors, Cloud, MIT App, Camera and more."
    },
    {
        head: "Are there any coding tests and quizzes to test my knowledge after completing this Getting Started with RASPBERRY PI course?",
        p: "No, there are no coding tests and quizzes throughout the course for testing your knowledge, but you can implement the knowledge earned into completing your projects. Employers often hire freshers depending on the projects they do as they usually don’t have experience working with companies."
    },
    {
        head: "Will this Python proaWill this HTML & CSS course learnings help me in getting a job or internship?gramming course learnings help me in getting a job or internship?",
        p: <>  This Getting Started with RASPBERRY PI course learning helps you get a job or an internship, but the course doesn’t promise placement assistance. However, you can join their 100-day <Link to="#" className="Linkcolor">Job Assistance Program</Link>  , which offers immediate job and internship opportunities after completing the course. </>  
     }

];






export default function Online_raspberry() {
    return (
        <OnlineCourse head={headContext} main={main_content} mentor={mentorsData} dropdown={data2} />
    );
}
