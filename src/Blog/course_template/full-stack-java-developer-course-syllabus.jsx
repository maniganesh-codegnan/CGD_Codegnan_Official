import React from "react";
import Course_template from "./Course_template";
import javaFullstack_photo from '/course_images/java-course-fullstack-development-syllabus.webp';
import { Link } from "react-router-dom";



const headdata = {
    title: "The COMPLETE Full Stack Java Course Syllabus (2024 Session)",
    date: "February 19, 2024",
    img: javaFullstack_photo,
    intro: "At Codegnan, we have trained more than 30,000 students in the IT tech fields, especially in the full-stack Java program. And, some of the often-asked questions our students ask before joining the training program are:<br/> <br/><ul>" +
    [
        "What is the course curriculum of the full-stack Java course?",
        "What topics and subjects are covered in your full-stack Java syllabus?"

    ].map((item, index) => (
        "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
    )).join('') +
    "</ul>"
    
};

const coursedata = {
    title: " ",
    p: "So, we decided to create this transparent course syllabus for anyone wanting to become a full-stack Java developer in 2024.",
    // linkText: "full syllabus details here.",
    // syllabusLink: "/full-syllabus-details"
    
};

const courseSections = [
    
   

];

const course_brief = [
    {
        title: "Download the Full Stack Java developer course curriculum",
        intro: () => (
            <>
            <img src="/syllabuspages/image-2.jpeg" alt="image" width="100%" />
            <h2><Link className="link-color" to='#'>PDF copy of the Java full stack developer course syllabus →</Link>
                </h2>
            </>
        )
    },

  
    {
        title: "Java full stack Course Syllabus and Curriculum For 2024",
        intro: () => (
            <>
               
                <p>Find the overview of the syllabus and what you will learn under each module:</p><br/>
            </>
        )
    },

    {
        title: "Complete React JS Course Syllabus and Curriculum For 2024",
        intro: () => (
            <>
             
                <br />
               
                <table className="salary-table">
                    <thead>
                        <tr>
                            <th>Module	</th>
                            <th>Java full stack subjects and topics in the syllabus</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>  
                            <td>1	</td>
                            <td> Java Introduction: Origin, History, Features, Career Prospects, Salary Ranges</td>
                        </tr>
                        <tr>  
                            <td>2	</td>
                            <td> Java Basics & Eclipse: Installation, Compilation, Variables, Arrays, Eclipse Usage</td>
                        </tr>
                        <tr>  
                            <td>3	</td>
                            <td>  Operators & Expressions: Arithmetic, Boolean, Logical, Binary</td>
                        </tr>
                        <tr>  
                            <td>4	</td>
                            <td> Control Statements: Branching, Iterative, Break & Continue Statements</td>
                        </tr>
                        <tr>  
                            <td>5	</td>
                            <td>Java OOP: Class/Object Fundamentals, Constructors, Overloading, Access Control, Statics</td>
                        </tr>
                        <tr>  
                            <td>6	</td>
                            <td>Inheritance: Basics, Method Overriding, Abstract Classes, Preventing Inheritance</td>
                        </tr>
                        <tr>  
                            <td>7	</td>
                            <td>Exception Handling: Fundamentals, Types, Try-Catch Blocks, Throw & Throws Keywords, Predefined & User-defined Exceptions</td>
                        </tr>
                        <tr>  
                            <td>8	</td>
                            <td>Interfaces: Purpose, Definition, Implementation, Extending</td>
                        </tr>
                        <tr>  
                            <td>9	</td>
                            <td>  Multi-Threaded Programming: Basics, Thread Definition, Synchronization</td>
                        </tr>
                        <tr>  
                            <td>10</td>
                            <td> Predefined Libraries: String, java.lang, Data & Time, Utility & Collection Frameworks, I/O</td>
                        </tr>
                        <tr>  
                            <td>11</td>
                            <td> RDBMS (MySQL): Database Basics, SQL Queries, Normalization, Joins, DDL Commands</td>
                        </tr>
                        <tr>  
                            <td>12</td>
                            <td>Database Programming: JDBC Overview, Drivers, URLS, Connection Establishment, SQL Execution</td>
                        </tr>
                        <tr>  
                            <td>13</td>
                            <td>Server-side Programming with Servlets: Deployment, Lifecycle, Request & Response Handling, Session Tracking, JDBC Operations</td>
                        </tr>
                        <tr>  
                            <td>14</td>
                            <td>Java Server Pages (JSPs): Basics, Differences from Servlets, Running, Implicit Objects, Syntax, Beans</td>
                        </tr>
                        <tr>  
                            <td>15</td>
                            <td>JPA-Hibernate (ORM Framework): Introduction, Session Management, CRUD Operations, ID Generation</td>
                        </tr>
                        <tr>  
                            <td>16</td>
                            <td> Spring: Bean Management, Dependency Injection, AOP, MVC</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>Spring Boot: Introduction, DI, MVC, Security, OAuth2 Authentication</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>Spring Web Services: Introduction, REST Basics, Spring REST</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>Microservices with Spring Boot, Spring Cloud: Architecture, Advantages, Deployment Considerations</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>DevOps Tools: Introduction, Git, Maven, Jenkins, Docker, Unit Testing</td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>Design Patterns: Creational & Behavioral Patterns</td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>Front-End Development: HTML, CSS3, Bootstrap, JavaScript</td>
                        </tr>
                    </tbody>
                   
                </table><br/>
                <p><b> Course duration:</b> 100 days, <b> Placement assistance:</b> Yes, <b> Enrollment in the course:</b> Apply for scholarships now</p>
            </>
        )
    }, 
    {
        title: "Module 1. Java Introduction",
        intro: "Before starting with a Java full stack course, you need to understand the origin of this language, its history and essential features. The course begins with clearing all these topics, discussing career prospects and salary ranges, such that your interest in the course increases. <br/> <br/><ul>" +
            [
                "History",
                "Features"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 2. Java Basics & Introduction to Eclipse",
        intro: "Eclipse is a popular IDE (Integrated Development Environment) for Java and other programming languages (like C, C++, PHP, Ruby, etc.). You can learn more about Eclipse and use some of its shortcuts in this section and understand Java basics.\nThis includes understanding compiling and executing Java programs, variables and arrays, data types, and creating packaged classes in Java.<br/> <br/><ul>" +
            [
                "Post Install Configuration",
                "compiling and executing",
                "Variables and Arrays",
                "Create packaged classes",
                "Writing a simple program",
                "Data types",
                "Using Eclipse",
                "Eclipse shortcuts"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 3. Operators & Expressions",
        intro: "Operators & expressions in Java are used in codes to instruct the system to perform specific operations. For example, “+” is an arithmetic operator that is used to perform addition. Similarly, there are multiple operators used in Java code to perform different operations, and you will learn them in this section.<br/> <br/><ul>" +
            [
                "Arithmetic Operators",
                "Boolean Operators",
                "Logical Operators",
                "Binary Operators"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 4. Control Statements ",
        intro: "In Java, you might need to execute a block of code multiple times until a certain condition is met. Control statements are used in programming languages to control the flow of code execution depending on specific conditions. You can learn while, for, do..while statements, along with the use of break & continue statements.<br/> <br/><ul>" +
            [
                "Branching Statements",
                "Iterative Statements",
                "Break & Continue with enhancements",
                "While ",
                "For",
                "Do..While",
                "Break and Continue Statement"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 5. Java Object-Oriented Programming",
        intro: "Object Oriented Programming in Java refers to the use of objects as a primary source to implement what happens to the code. This section of Java covers the fundamentals of class & object, constructors and overloading constructors, status methods, use of final keywords, and some relevant OOPS topics.<br/> <br/><ul>" +
            [
                "Basics of OOPS",
                "Fundamentals of class & object",
                "new keyword",
                "Reference variables",
                "Member methods of a class",
                "Constructors",
                "Finalize method",
                "Overloading member methods",
                "Overloading constructors",
                "Passing and returning objects with methods",
                "Access Control",
                "Static Methods",
                "Static Variables",
                "Static Block",
                "Using final keyword",
                "Unit Testing using Junit-5"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 6. Inheritance ",
        intro: "Inheritance allows one class to inherit the fields and methods from another class. You can also add new methods and fields to your existing class. This part of the Java section covers the basis of inheritance, method overriding, abstract class, preventing inheritance, and a few more relevant topics.<br/> <br/><ul>" +
            [
                "Basics of Inheritance",
                "Members accessibility in inheritance",
                "Using super keyword",
                "The sequence of execution of constructors in inheritance",
                "Method Overriding",
                "Dynamic Method Dispatch",
                "Abstract classes",
                "Preventing overriding",
                "Preventing inheritance"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 7. Exception Handling ",
        intro: "Java’s Exception handling is one of the effective means to handle runtime errors to preserve the constant flow of the codes. There are multiple errors in Java, like ClassNotFoundException, SQLException, IOException, RemoteException, etc. You will learn how to handle similar Java errors in this section of the course. <br/> <br/><ul>" +
            [
                "Fundamentals of Exceptions",
                "Types of exceptions",
                "Using try and catch keywords",
                "Multiple catches",
                "Nesting of try blocks",
                "Using throw keyword",
                "Using throws keyword",
                "Finally block",
                "Some predefined exceptions and their usage",
                "User defined exceptions"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 8. Interfaces ",
        intro: "Interfaces in Java have methods and functions that specify what a class needs to do. This section will give you a clear understanding of the purpose of using interfaces, how to implement them, and the use of extending interfaces. <br/> <br/><ul>" +
            [
                "Purpose of Interface",
                "Defining an interface",
                "Implementing interfaces",
                "Interface reference variables",
                "Interface with variables",
                "Extending interfaces"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 9.  Multi Threaded programming",
        intro: "Multi-threading refers to the concurrent execution of two or more parts of the program, saving CPU utilisation, and each part is known as thread. This section covers the basics of threads, defining threads using the Thread superclass and Runnable interface, multiple threads, and thread synchronisation.<br/> <br/><ul>" +
            [
                "Basics of threads",
                "Java threaded model",
                "Defining threads using Runnable interface",
                "Defining threads using Thread superclass",
                "Multiple threads",
                "Thread Priority values",
                "Thread Synchronization using synchronized methods",
                "Thread Synchronization using synchronized blocks"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 10. Predefined Libraries",
        intro: "This section of the course covers the Predefined libraries in Java, use of string class, java.lang package, java.util and java.io packages, working with data & time, and knowledge of Java frameworks. <br/> <br/><ul>" +
            [
                "Using String class",
                "Using java.lang package",
                "Working with Data & Time",
                "Utility framework",
                "Collection framework",
                "I/O framework"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 11. RDBMS (MySQL)",
        intro: "Relational database management system is a program that allows Java coders to create, delete and update a relational database that stores and retrieves data in a tabular format. Learners will get a brief understanding of tables, records, and fields of relational databases and write different SQL queries. Additionally, this section describes database and DBMS, data types, database normalisation, different table operations, and DDL commands.<br/> <br/><ul>" +
            [
                "Introduction to Database & DBMS",
                "Data types",
                "Table, Record, Field",
                "SQL Queries,",
                "Database Normalization",
                "Joins, Sub Queries",
                "INSERT | UPDATE | DELETE Operations",
                "DDL Commands",
                "PL/Sql"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 12. Database Programming",
        intro: "Here you will learn about JDBC which stands for Java Database Connectivity a Java API used for connecting and executing queries with the database. Here, you will learn different types of JDBC drivers, and driver managers, how to establish a connection with the database, how to create and execute SQL statements, and how to work with CallableStatement. <br/> <br/><ul>" +
            [
                "Overview of JDBC API",
                "Different types of JDBC Drivers",
                "JDBC URLS",
                "Driver Manager",
                "Establishing a connection with the database",
                "Creating and executing SQL Statements",
                "Working with CallableStatement"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "MModule 13. Server-side Programming with Servlets",
        intro: " Java Servlets are used in server-side programming that handle your client requests and return a dynamic or customised response for every request. Learners will learn about Servlets, implementing them in a Servlet container, its lifecycle, servlet interface and relative topics that are useful for Java full-stack development.  <br/> <br/><ul>" +
            [
                "Deploying a simple servlet in a Servlet Container (Tomcat)",
                "Life cycle of a Servlet",
                "Servlet interface",
                "ServletRequest Interface",
                "ServletResponse Interface",
                "Additional capabilities of HTTPServlet",
                "Session tracking",
                "Servlet Programming with JDBC CRUD Operations"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 14. Java Server Pages (JSPs) ",
        intro: " JSP (Java Server Pages) is a server-side technology that Java coders use to create web applications and create dynamic web content. From this section of the course, you will learn the basics of JSP, its difference from Servlets, how to run them, implement JSP syntax for different JSP elements, and how to develop JSP beans.<br/> <br/><ul>" +
            [
                "JSP Basics",
                "Differences between Servlets and JSPs",
                "Running a simple JSP",
                "The JSP generated Servlet code",
                "JSP Implicit Objects",
                "JSP Syntax for Different JSP Elements",
                "Developing JSP Beans"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 15. JPA-Hibernate (ORM FrameWork)",
        intro: " JPA-Hibernate is one of the most mature and widely used ORM (Object-relational mapping) tools and is compatible with multiple popular Java platforms. Learners will get a clear understanding of ORM and JPA in this part of the course, along with performing CRUD operations with XML and Annotations, different ID generation strategies, and hibernating with inheritance.<br/> <br/><ul>" +
            [
                "Introduction to ORM, JPA ",
                "SessionFactory, Session, Transaction",
                "Performing CRUD Operations with XML",
                "Performing CRUD Operations with Annotations",
                "Different ID Generation Strategies",
                "Hibernate with Inheritance"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 16. Spring",
        intro: "Spring is a popular open-source Java-based framework, used in developing enterprise-level applications and it supports frameworks like Hibernate and more. Learners will learn about Spring and its implementation in Java, Spring AOP module, MVC module, and other relevant topics.<br/> <br/><ul>" +
            [
                "BeanFactory and application Context",
                "Container Concepts",
                "Spring Data JPA Template",
                "AOP",
                "MVC"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 17. Spring Boot",
        intro: "Spring Boot is also an open-source Java tool that makes using Java-based frameworks easier for creating microservices and web apps. You will gain a comprehensive knowledge of STS (Spring Tool Suite) in Java, DI (Dependency Injection) with STS, and multiple other relevant topics.<br/> <br/><ul>" +
            [
                "Introduction to STS",
                "Di with STS",
                "MVC, AOP",
                "Security, Role-based Authentication, OAuth2, Token based authentication"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 18. Spring WebServices",
        intro: " Spring-WS is a popular product of the Spring Community and you will learn about it in detail from this part of the course. Additionally, you will know the basics of REST APIs, and Spring REST that makes web services more effective.<br/> <br/><ul>" +
            [
                "Introduction to Web Service",
                "Basics of REST APIS",
                "Spring REST"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 19. Microservices with Spring Boot, Spring Cloud",
        intro: "If you have a good understanding of Spring, you can develop microservices with Spring Boot and Spring Cloud. This section of the course will introduce you to microservice architecture and its advantages over monolithic architecture, knowledge of Service discovery, client-side and server-side discovery patterns, and load balancing configuration.<br/> <br/><ul>" +
            [
                "Introduction to MicroService architecture",
                "Advantages with MicroService over Monolithinc architecture",
                "Develop and Deploy MicroService application in localhost",
                "Introduction to Service Discovery",
                "Client side Discovery pattern",
                "Server side Discovery pattern",
                "Load Balancing configuration"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 20. DevOps Tools",
        intro: "DevOps is a collaborative word for development and operations that indicates the two teams working behind the development of software at the enterprise level. This section of the course will introduce you to DevOps and its advantages, source code management with Git, creating a Java program with Maven, and Jenkins Docker Unit Testing with JUnit.<br/> <br/><ul>" +
            [
                "Introduction to DevOps and advantages",
                "Git",
                "Maven",
                "Jenkins Docker Unit Testing with JUnit"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 21. Design Patterns",
        intro: "Design patterns in Java are well-proved solutions that help you solve specific problems. One can use data patterns during the analysis and requirement phase of the software development life cycle. These design patterns can be categorised into core Java design patterns and JEE design patterns. In this section of the course, you will learn about creational and behavioural design patterns in core Java design patterns. <br/> <br/><ul>" +
            [
                "Creational Design Patterns",
                "Behavioral Design Patterns"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 22. Front-End Development",
        intro: " The front end development is usually done using multiple technologies like HTTP, CSS, Bootstrap, and JavaScript. All these are used to design and construct the user experience elements on webpages or applications. Our full-stack Java course offers theoretical knowledge on all the essential front-end technologies and conducts hands-on training to sharpen your practical skill set. <br/> <br/><ul>" +
            [
                "HTML (formatting page content and creating lists, links, and forms)",
                "CSS3 (Syntax, terminology, typography, layouts)",
                "Bootstrap-CSS (Typography and utilities, CSS components, Grid system and Flex-box)",
                "JavaScript (Syntax and commands, control flow, arrays, functions, objects, modules)"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "ReactJs",
        intro: "React is an efficient and flexible Javascript library used for developing the user interface of full stack applications. This section of the course will teach learners what React.js is, how to create their own React application and give them an understanding of the different elements and approaches of React. <br/> <br/><ul>" +
            [
                "Introduction to React.js",
                "Creating your first React Application (Find more beginner-friendly React JS projects)",
                "Understanding Components and Props",
                "State and Lifecycle",
                "React Hooks",
                "Handling events",
                "Working with forms",
                "Conditional rendering",
                "Lists and keys",
                "Unerstanding keys",
                "Styling in React.js",
                "React Router",
                "State Management with Redex",
                "Asynchronous Programing and API integration",
                "Handling errors in React applications"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Hands-on projects included codegnan’s Java full stack course syllabus",
        intro: " Codegnan’s Java full-stack course syllabus comprises multiple hands-on projects. Some of them are  <br/> <br/><ul>" +
            [
                "Life Line – A Health Assistance Web Application",
                "Employee Timesheet Management System",
                "Building Paytm clone Page ",
                "Building Portfolio page ",
                "Creating a simple College website using HTML, CSS, and JS.",
                "Hospital Management System",
                "Online Banking Application:"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What topics come under Java full stack?",
        intro: "Java full stack development course covers topics across multiple subjects as below <br/> <br/><ul>" +
            [
                "Java fundamentals ",
                "Front end technologies: HTML, CSS, JavaScript, and ReactJS ",
                "Server side programming: Servlets, JSP, and JPA-Hibernate, ",
                "Spring MVC",
                "Database management systems: MySQL ",
                "Microservices: Spring Boot, Spring Cloud",
                "DevOps Tools",
                "Design Patterns "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Is Java full stack difficult to learn? ",
        intro: () => (
            <>
                <p>Java full-stack training can be challenging, especially if you are new in the domain. However, if you have a basic understanding of any programming language and database management systems, this course can be a little easy. <p/>

                <p> When I searched for the same question on Reddit,  <Link to="/react-js-projects" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> I found a discussion </Link> that highlighted that it takes time and effort to become a Java full-stack developer and that the route is difficult. You need to master a couple of things, including Java and JavaScript coding languages and front-end and back-end development.</p><br/><br/>

                <img src="/syllabuspages/media.png" alt="" width="100%" /><br/><br/>

                </p>
            </>
        )
    },
    {
        title: "What is the salary of a Full-stack Java developer in India?",
        intro: () => (
            <>
                <p>The salary of full-stack Java developers in India usually ranges between ₹2.0LPA and ₹13.0LPA. Presently, the average annual salary of these professionals is around ₹6.8L. It means you have an average take-home salary per month of about ₹33,547 – ₹34,809. </p>
                <img src="/syllabuspages/java-media.png" alt="" width="100%" /><br/><br/>
                <p></p>
            </>
        )
    },
    {
        title: " ",
        intro: () => (
            <>
                <p>The table below gives an overview of the salary range for Java full-stack developers in the top 3 Indian cities.</p><br/><br/>
                <table className="salary-table">
                    <thead>
                        <tr>
                           <th> Indian cities</th>
                           <th> Java full-stack developer salary</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td> Hyderabad	</td>
                            <td>Rs.2.0LPA – Rs. 12.0LPA</td>
                        </tr>
                        <tr>
                           <td>Bangalore	</td>
                           <td>	Rs. 3.3LPA – Rs. 13.0LPA</td>
                        </tr>

                        <tr>
                            <td> Vijayawada	</td>
                            <td> Rs. 1.0LPA – Rs. 10.0LPA</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
        
    },
    {
        title: "Is Java full stack a good career?",
        intro: () => (
            <>
                <p> Yes, Java full-stack development is a good career in 2024 and is going to stay mainstream in the next few years.</p>

                <p>According to a report from Statista, in 2023, we see <Link to="#" onClick={() => window.scrollTo({ top: 0 })} className="link-color">   full-stack developer </Link>job roles as one of the most demanded technical positions by recruiters globally. </p>
                <img src="/syllabuspages/media2.png" alt="" width="100%" /><br/><br/>
            </>
        )
    },
    {
        title: "Demand for Java full-stack developers is high: ",
        intro: () => (
            <>
             <p> Java full-stack developers are in high demand because of their varied skill sets. Companies are increasingly looking for professionals who can design, develop, and maintain full-stack applications because of the rising need for web and mobile applications.</p>

            <p> The graph below depicts the changes in the <Link to="https://trends.google.com/trends/explore?geo=IN&q=java%20full%20stack%20developer&hl=en" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> demand for Java full-stack developers </Link> in the last 12 months.</p>
            <img src="/syllabuspages/media3.png" alt="" width="100%"/><br/><br/>

            </>
        )
    },
    {
        title: "Multiple job opportunities: ",
        intro: () => (
            <>
                <p>They can opt for various career options, including Java development, web designing and development, back-end development, front-end development, testing, and more. </p>
                <p> So, the chances of getting a job after completing a Java full-stack development course are high.</p>
                <p> I saw <Link to="https://www.linkedin.com/jobs/full-stack-java-developer-jobs/?currentJobId=3829882593" onClick={() => window.scrollTo({ top: 0 })} className="link-color">  1600+ jobs</Link> available on LinkedIn for full-stack Java developers in India.</p><br/>
                <img src="/syllabuspages/media4.jpg" alt="" width="100%" /><br/><br/>
                <p>Similarly, I searched for full-stack Java developers on Indeed and Glassdoor. On Indeed, I saw  <Link to="https://in.indeed.com/jobs?q=Full+Stack+Java+Developer&l=&vjk=483822a8062faa7a" onClick={() => window.scrollTo({ top: 0 })} className="link-color">  2400+ job vacancies </Link> in multiple areas of the Java full-stack development domain.</p>
                <img src="/syllabuspages/media5.png" alt="" width="100%" /><br/><br/> 
                <p>On Glassdoor, you can find 2100+ jobs available for full-stack Java developers for multiple relevant roles.</p>
                <img src="/syllabuspages/media6.jpg" alt="" width="100%" /><br/><br/> 
            </>
        )
    },
    {
        intro: () => (
            <>
                <h3>Salary is high:</h3>
                <p>Due to the higher demand for Java full-stack developers, they get competitive pay. However, the remuneration of these professionals depends on the company’s size, location, and experience level. </p>

                <p>Further resources:</p>
                <ul>
                    {[
                        { name: "React Js and Angular – choosing the best JavaScript framework", link: "/java-training-bangalore", duration: "1 month" },
                        { name: "Core java course syllabus", link: "/java-training-hyderabad", duration: "1 month" },
                        { name: "React JS course sullabus", link: "/java-course-vijayawada", duration: "1 month" }
                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link> ({program.duration})
                        </li>
                    ))}
                </ul>
                <br />
               
            </>
        )

    },
    {
        title: "How many months is the full-stack Java course?",
        intro: () => (
            <>
                <p>Usually, the full-stack Java course can be completed within 3-4 months or 100 days. During this period, you will not only get to know about Java programming and front-end and back-end technologies but also have hands-on training on live projects. This adds value to your professional portfolio and allows you to land your dream job. </p>
            </>
        )
    },

    {
        title: "Why enroll in codegnan’s Java Full Stack Developer course?",
        intro: "You can enroll in Codegnan’s Java full-stack developer course for multiple reasons. <br/> <br/><ul>" +
            [
                "The course duration is <b>100 days</b>",
                "<b>Get jobs and placement support</b> from codegnan team after course completion",
                "It will cost you only 34,999 (limited-time offer) for the course",
                "The trainers and mentors at Codegnan are from tech companies and institutes (such as    IIT Bombay, IIT Jodhpur, Amazon, Google, Stanford University, and so on.)",
                "It has options for both <b>online and offline training classes</b>"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
            
    },

    
    {
        intro: () => (
            <>
                <h3>If you’re looking for classroom training, Check our programs in different locations:</h3>
                <ul>
                    {[
                        { name: "Full stack training in Vijayawada", link: "/java-training-bangalore", duration: "1 month" },
                        { name: "Full stack training in Hyderabad", link: "/java-training-hyderabad", duration: "1 month" },
                        { name: "Full stack training in Bangalore", link: "/java-course-vijayawada", duration: "1 month" }
                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link> ({program.duration})
                        </li>
                    ))}
                </ul>
                <br />
                <p>Also, codegnan has an <Link to="https://academy.codegnan.com/learn/JavaFullStackDevelopment" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> between which Angular and React JS,</Link> course at an affordable fee (₹999). Here’s what’s covered in the online course:</p>

                <img src="/syllabuspages/pasted image 0.png" alt="error" width="100%" /> 
              
                
            </>
        )

    },
    {
        title: " ",
        intro: "<br/> <br/><ul>" +
            [
                "At Codegnan, you can get hands-on training on <b>live projects and assignments </b>",
                "You get<b> 24/7 online support</b> from the team",
                "Upon completion of the course, you receive an industry-recognised certification",
                "Codegnan offers an opportunity to win a Hackerrank certificate and get placed in top companies ",
                "It received <b>4.8 out of 5</b> ratings from 2180+ learners on Google ",
                "More than <b>2700 learners</b> have been placed in top MNCs since 2020, the next one can be you."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
            
    },
    {
        title: " ",
        intro: () => (
            <>
                <p>Do you have any questions regarding the career opportunity, course syllabus, and job placements? <Link to="#" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> Contact our team of experts </Link>here and get personal assistance for free.</p>
            </>
        )
    },

];

const nav_interview = [
    {
        name: " React JS Course Syllabus For Beginners and Advanced (2024)",
        link: "/react_course_page"
    },
    {
        name:"Data Structures And Algorithms Course Syllabus (with PDF)",
        link:"/ds_course_page"
    }
];

export default function JavaCoursePage() {
    return (
        <div>
            <Course_template head={headdata} course={coursedata} section={courseSections} coursep={course_brief} inter_links={nav_interview} />
        </div>
    );
}
