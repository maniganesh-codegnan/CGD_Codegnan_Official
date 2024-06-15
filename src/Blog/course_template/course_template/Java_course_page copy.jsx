import React from "react";
import Course_template from "./Course_template";
import java_photo from '/course_images/java.webp';
import { Link } from "react-router-dom";



const headdata = {
    title: "The Complete Core Java Course Syllabus 2024",
    date: "January 25, 2024",
    img: java_photo,
    intro: "Java has been around for a long time, since 1995, and still ranks among the top five most demanded programming languages by recruiters. \nLearning Java can be a great skill to acquire if you want to work in the programming or software development domain. In addition, if you have knowledge of other programming languages and are looking to increase your skill set, Java can be a great option. \nIn a survey of 57,378 software developers globally, it was found that 63.1% of people are using HTML/CSS, SQL, Python, and Java, which makes considering a Java course a thoughtful decision. \nBut where do we start from? What is the syllabus for core Java? Are we really getting jobs immediately after completing a Java course? You will find all your answers from our guide today!"
};

const coursedata = {
    title: "Complete Java Course Syllabus and Curriculum For 2024",
    p: "Below, I have listed the overview of the Java course curriculum and subjects. Find the ",
    linkText: "full syllabus details here.",
    syllabusLink: "/full-syllabus-details"
};

const courseSections = [
    {
        title: "Java Introduction",
        intro: "Before we start developing Java programs, we need to learn about who invented Java and how the language survived for nearly 27 years, its history and its basic features. This section of the course will introduce you to Java.",
        content: [
            "History",
            "Features"
        ]
    },
    {
        title: "Java Basics & Introduction to Eclipse",
        intro: "This section takes you to the post-installation phase of Java and introduces you to the most popular Java IDE, Eclipse. We will also discuss variables and arrays, datatypes, how to create packaged classes, and write your first Java code.",
        content: [
            "Post-install configuration",
            "Compiling and executing",
            "Variables and arrays",
            "Create packaged classes",
            "Writing a simple program",
            "Data types",
            "Using Eclipse"
        ]
    },
    {
        title: "Operators & Expressions",
        intro: "Operators in Java are the symbols that instruct the machine to perform an activity. These are mainly arithmetic, logical, binary, and boolean. This section clarifies the use of each operator in a statement or an expression.",
        content: [
            "Arithmetic operators",
            "Boolean operators",
            "Logical operators",
            "Binary operators"
        ]
    },
    {
        title: "Control statements",
        intro: "Java uses decision-making statements and loops to control the execution of codes according to specific conditions. Here, you will learn about branching and iterative statements and understand what loops to use in Java and how they are functionally different.",
        content: [
            "Branching statements",
            "Iterative statements",
            "Break & Continue with enhancements",
            "While",
            "For",
            "Do..While",
            "Goto Statement",
            "Break and Continue statement"
        ]
    },
    {
        title: "Java Object Oriented Programming",
        intro: "Java uses classes and objects in its programs, which is known as object-oriented programming. This section of the course will provide you with the basics of OOPs and ensure you understand the difference between class and object. In addition to that, you will learn a few more things that are essential when you are writing Java code, like reference variables, constructors and overloading constructors, member methods and overloading member methods, and so on.",
        content: [
            "Basics of OOPs",
            "Fundamentals of class & object",
            "New keyword",
            "Reference variables",
            "Member methods of a class",
            "Constructors",
            "Finalize method",
            "Overloading member methods",
            "Overloading constructors",
            "Passing and returning objects with methods",
            "Access control",
            "Static methods",
            "Static variables",
            "Static block",
            "Using final keyword",
            "Unit testing using Junit-5"
        ]
    },
    {
        title: "Inheritance",
        intro: "Java objects can inherit properties from their parent objects, and the concept of inheritance is an essential part of OOPs. If you know the implementation of inheritance in your codes, you can reuse methods from an existing class in your new classes, which is quite interesting. Here, you get a complete idea of inheritance, member accessibility, method overriding, preventing inheritance and some relevant topics.",
        content: [
            "Basics of inheritance",
            "Members accessibility in inheritance",
            "Using super keyword",
            "Multilevel inheritance",
            "The sequence of execution of constructors in inheritance",
            "Method overriding",
            "Dynamic method dispatch",
            "Abstract classes",
            "Preventing overriding",
            "Preventing inheritance"
        ]
    },
    {
        title: "Exception handling",
        intro: "Exception handling in Java refers to handling runtime errors. Here, you will get to know what exceptions are and their types, as well as the use of try-and-catch keywords. There are a few predefined exceptions in Java, and you will know them in this section.",
        content: [
            "Fundamentals of exceptions",
            "Types of exceptions",
            "Using try and catch keywords",
            "Multiple catches",
            "Nesting of try blocks",
            "Using throw keyword",
            "Using throws keyword",
            "Finally block",
            "Some predefined exceptions and their usage",
            "User defined exceptions"
        ]
    },
    {
        title: "Interfaces",
        intro: "This part of the core Java course syllabus introduces you to Java interfaces, their purpose in a code, and how to implement them in a program.",
        content: [
            "Purpose of interface",
            "Defining an interface",
            "Implementing interfaces",
            "Interface reference variables",
            "Interface with variables",
            "Extending interfaces"
        ]
    },
    {
        title: "Multithreaded programming",
        intro: "Multithreaded programming refers to the execution of more than one part of a program to maximize the CPU’s memory usage. In this section, you will learn about the basics of threads and their model, defining threads, using multiple threads, and thread synchronization.",
        content: [
            "Basics of threads",
            "Java threaded model",
            "Defining threads using Runnable interface",
            "Defining threads using Thread superclass",
            "Multiple threads",
            "Thread Priority values",
            "Thread Synchronization using synchronized methods",
            "Thread Synchronization using synchronized blocks"
        ]
    },
    {
        title: "Predefined Libraries",
        intro: "Java has multiple predefined libraries, which are basically codes of different classes that someone else wrote and help developers easily transform their ideas into coding. You will get to know some of the popular library classes during the course.",
        content: [
            "Using String class",
            "Using java.lang package",
            "Working with Data & Time",
            "Utility framework",
            "Collection framework",
            "I/O framework"
        ]
    }
];

const course_brief = [
    {
        title: "Hands-on projects included in Codegnan’s Java course curriculum",
        intro: () => (
            <>
                Here are some of the <Link className="link-color" to='/'>Java projects</Link> you will get to complete at Codegnan’s Java training classroom.
                <div>
                    <ul>
                        {[
                            "Hello Java world",
                            "Operators playground",
                            "OOPs Fundamentals",
                            "Inheritance showcase",
                            "Interface exploration",
                            "Java libraries showcase, etc."
                        ].map((item, index) => (
                            <li key={index} className="list-items" style={{ marginLeft: '100px' }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    },
    {
        title: "Download the Java course curriculum PDF",
        intro: () => (
            <>
                <br />
                <strong className="download_course_syllabus"><span className='show-right'> &#9758; </span> Download  <Link className="link-color" to='/'> codegnan’s Core Java course syllabus </Link>  (PDF) for free.</strong>
                <br />
                <p style={{ paddingTop: '10px' }}>According to the TIOBE Programming Community Index, <Link className="link-color" to='https://www.tiobe.com/tiobe-index/'>Java </Link>  still ranks among the top five popular programming languages. If you are looking to be a part of this domain, now is the best time to give it a try. Codegnan’s core Java course curriculum comprises the basics of Java, predefined libraries, operators in Java, control statements, inheritance, exception handling, interfaces, and more. </p>
            </>
        )
    },
    {
        title: "What topics come under Java full stack?",
        intro: "Besides covering the core Java syllabus, Java full-stack courses usually cover a few more things. : <br/><ul>" +
            ["Database",
                "UI Development",
                "Automation Testing",
                "DevSecOps",
                "Spring",
                "Web services and microservices "
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Is learning Java easy? ",
        intro: "If you have experience with some other programming language, then Java can be easy. Otherwise, for beginners, this can be a little difficult as there are numerous core topics in Java, without which constructing a program is impossible. However, it can be easy if you are doing an online or offline Java course with top instructors and special live interactive classes that Codegnan offers. "
    },
    {
        title: "Is core Java enough to get a job? ",
        intro: () => (
            <>
                <p>Experts say learning core Java with an industry-accredited certificate is enough to launch a junior developer job. However, you need to have expertise in different aspects of computer science. You can find  <Link className="link-color" to='https://www.linkedin.com/jobs/core-java-developer-jobs/?currentJobId=3813322063&originalSubdomain=in'> 1691+ core Java developer jobs</Link>   across India on LinkedIn. </p>
            </>
        )
    },
    {
        title: "What is the salary of a Java developer in India?",
        intro: () => (
            <>
                Java developers in India can make an annual income of <Link className="link-color" to="https://www.ambitionbox.com/profile/java-programmer-salary ">₹1.2LPA to ₹8.1LPA</Link> with 1 to 5 years of experience.
                <br />
                <img src="/syllabuspages/java.1.png" alt="" />
                <table className="salary-table">
                    <thead>
                        <tr>
                            <th>Cities in India</th>
                            <th>Java Developer Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hyderabad</td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/java-programmer-salary/hyderabad-location">₹1.2 LPA – ₹7.0 LPA</Link></td>
                        </tr>
                        <tr>
                            <td>Bengaluru</td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/java-programmer-salary/bengaluru-location">₹2.2 LPA – ₹8.1 LPA</Link></td>
                        </tr>
                        <tr>
                            <td>Vijayawada</td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/java-programmer-salary/vijayawada-location">₹0.5 LPA – ₹5.2 LPA</Link></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    },
    {
        title: "How many months is the full Java course? ",
        intro: () => (
            <>
                <p>The full  <Link to="/java-training-in-banglore" onClick={() => window.scrollTo({ top: 0 })} className="link-color">core Java course</Link> in Codegnan is only for one month, and upon successful completion, you will get an industry-accredited certificate. In addition, you get a chance to win HackerRank certification from this platform. </p>
            </>
        )
    },
    {
        title: "Why enroll in codegnan’s Java training course?",
        intro: "There’s no one reason why anyone can enroll in Codegnan’s Java training course. Firstly, to enroll for our courses, you don’t need to be a professional in programming. But if you are one, doing a core Java course with us can improve your portfolio. What can you get at Codegnan? :<br/> <br/><ul>" +
            ["1-month core Java course",
                "Course fees are ₹10,000, which is available now for ₹7,999 (limited-time offer)",
                "Both online and offline classes are available in Vijayawada, Bengaluru, and Hyderabad. ",
                "Course delivered in English.",
                "Codegnan’s learners are placed in 1250+ companies, including Google, Amazon, Accenture, Deloitte",
                "24/7 online support for all students ",
                "Received 4.8 out of 5 from 2180+ students",
                "We also offer a job acceleration program that offers a 100% job placement guarantee. "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        intro: () => (
            <>
                <h4>Looking for more details about codegnan’s Core Java courses?</h4>
                <ul>
                    {[
                        { name: "Java training program in Bangalore", link: "/java-training-bangalore", duration: "1 month" },
                        { name: "Java training in Hyderabad location", link: "/java-training-hyderabad", duration: "1 month" },
                        { name: "Java course in Vijayawada", link: "/java-course-vijayawada", duration: "1 month" }
                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link> ({program.duration})
                        </li>
                    ))}
                </ul>
                <br />
                <h5>Further resources</h5>
                <Link to=" " className="link-light-color">Differences between Python, PHP, and Java languages</Link><br />
                <Link to=" " className="link-light-color">Python career opportunities</Link>
            </>
        )

    }

];

const nav_interview = [
    {
        name: "Python Career Opportunities: Scope, Jobs, and Future in India",
        link: "/"
    },
    {
        name:"120 Important Java Interview Questions and Answers (2024)",
        link:"/"
    }
];

export default function JavaCoursePage() {
    return (
        <div>
            <Course_template head={headdata} course={coursedata} section={courseSections} coursep={course_brief} inter_links={nav_interview} />
        </div>
    );
}
