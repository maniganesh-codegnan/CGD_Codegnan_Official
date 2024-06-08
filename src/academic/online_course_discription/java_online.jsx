import React from "react";
import OnlineCourse from "./online_template";
import { Link } from "react-router-dom";


const headContext = {
    title: "Java FullStack Development",
    p: "Learning Java FullStack Development equips you from every corner including knowledge in both front-end and back-end development of web applications. This comprehensive course prepares you for high paying jobs in the market like Full Stack Java developer, web developer, software engineer, and more.\n" +
        "<ul>" +
        [
            "63 lessons",
            " 0 tests",
            "0 trial sessions",
            "Price: 999+GST",
            "24/7 online accessibility",
            "Course description (exixting)"
        ].map((item, index) => (
            "<li style='margin-left: 50px;'>" + "<span style='color:#EE4a62;'>&#x2713;&nbsp;</span>" + item + "</li>"
        )).join('') +
        "</ul>",
    start_course: "https://academy.codegnan.com/learn/JavaFullStackDevelopment",
    free_trial: "https://academy.codegnan.com/learn/JavaFullStackDevelopment",
    image:"/academic_online_syllabus/java-FS.webp"
}

const main_content = {
    p: (
        <>
            <h2>What this Java FullStack Development course is about</h2>
            <p>This Java FullStack Development course is a comprehensive training program designed to help learners develop high-performance, dynamic and responsive applications using Java and its related technologies. The course starts with introducing learners to Java programming and then proceeds with describing front-end and back-end technologies, data structures, web development, and rich frameworks.
                <br/><br/>Students can implement their knowledge in building projects of their own. This will improve their professional portfolio helping them get better job opportunities. For freshers, your own projects can attract employers from top companies who are ready to prepare you under their mentorship.
                <br/><br/>Throughout the course you will get multiple real life use cases that will help you understand the whole development process.</p>
            <h2>What you'll learn</h2>
            <ul>
                <li>Understanding of core Java concepts, and object oriented programming </li>
                <li>Knowledge of front end technologies to design, develop and deploy dynamic and responsive web applications </li>
                <li>Knowledge of back end technologies in building robust and scalable systems</li>
                <li>Gain complete understanding of data structures and algorithms and their implementation in Java</li>
            </ul>
            <h2>What's covered in this online Java FullStack Development course</h2>
            <ol>
                <li>Introduction - 5 Lessons, 0 Quiz</li>
                <li>Section - 49 Lessons, 0 Quiz</li>
                <li>Section 3 - 9 Lessons, 0 Quiz</li>
            </ol>
        </>
    )
}

const mentorsData = {
    color_title: "About the",
    title: "  Trainer ",
    mentors: [
        {
            name: "Subramanya Raj",
            description: "Subramanya Raj is a young Java FullStack Development course instructor at Codegnan with years of experience teaching and mentoring tech students. Besides this, he co-founded ABC for Java and Testing, and worked as a Lead Developer in MResult services pvt ltd. Subramanya Raj is also the director of Destination Technologies for 4+ years now. His efficiency in Java programming, knowledge of JavaServer Pages and Java Database Connectivity, HTML, Selenium testing, and other technologies makes him a great mentor for today’s learners.  ",
            image: "/training/Subramanya-raj-min.webp",
            mentorlinkedinid: "https://www.linkedin.com/in/subramanya-raj-m-74601b57/"}
    ]
  
}


const data2 = [
    {
        head: "What are the prerequisites of a Java FullStack Development Course? ",
        p: "The prerequisites of a Java FullStack Development course includes basic understanding of core Java concepts, and familiarity with HTML and CSS. However, if you are a beginner and have absolutely no idea about Java, or web development tools, this course will help you learn from scratch. It is designed to help beginners understand from the base, and professionals to recollect their knowledge and upskill themselves for landing better jobs."
    },
    {
        head: "How long does it take to complete this Java FullStack Development course?",
        p: "It takes nearly 3 months to complete this Java FullStack Development course. Usually when you enroll for online or classroom training sessions for Java FullStack Development course they complete the syllabus in 3 months. But, this one is a self-paced course and you can complete the whole syllabus according to your learning and understanding abilities."
    },
    {
        head: "Will I get a Certificate after completing this online Java FullStack Development course?",
        p: "Yes, you will get a digital certificate upon completion of this online Java FullStack Development course. This certificate is shareable on digital platforms like social media and within your professional network. However, if you are enrolling for their offline classes, you will receive a paper printed certificate that holds a global value."
    },
    {
        head: "Who is this Java FullStack Development course for?",
        p: "This Java FullStack Development course is for everyone who wants to learn FullStack web development using Java. It starts with introducing learners with core Java concepts, HTML, CSS, and JavaScript, and proceeds to advanced concepts. The curriculum is suitable for beginners as well as professionals."
    },
    {
        head: "Are there any coding tests and quizzes to test my knowledge after completing this Java FullStack Development course?",
        p: "Yes, there are a total of 26 tests across 46 modules of this online HTML & CSS course. You need to pass these tests and quizzes to move to the next chapter. This will ensure that you are actually learning and not wasting time sitting in front of your computer."
    },
    {
        head: "Will this Java FullStack Development course learnings help me in getting a job or internship?",
        p: <> Yes, this Java FullStack Development course learnings will help you get a good job or internship. But this program doesn’t promise you job assistance. For that you need to join their  <Link to="#" className="Linkcolor">internship program</Link>   or 100 days  <Link to="#" className="Linkcolor">Job Assistance Program</Link>  . You can learn a lot by joining these programs and they ensure immediate placements when you complete the course.     </>
     },

    {
        head: "Does codegnan offer classroom training for Java Programming?",
        p: (
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






export default function Online_java() {
    return (
        <OnlineCourse head={headContext} main={main_content} mentor={mentorsData} dropdown={data2} />
    );
}
