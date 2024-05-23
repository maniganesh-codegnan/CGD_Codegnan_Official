import React from "react";
import Course_template from "./Course_template";
import softwaretesting_photo from '/course_images/software-testing.png';
import { Link } from "react-router-dom";



const headdata = {
    title: "Software Testing Course Syllabus (with Downloadable PDF)",
    date: "April 14, 2024",
    img: softwaretesting_photo,
    intro: "The global market for software testing is about to rise from $40.9 billion in 2022 to $59.5 billion by 2030, growing at a CAGR of 4.8% over the forecasting period 2022-2030. We are taking a chance to develop new-age software testers and engineers to excel in this domain. \nFrom a fresh college graduate to any IT and non-IT professionals, you can join our software testing course. With teaching 30,000+ students and placing 1250+ of them at top MNCs, we believe our practical approach to software testing will help students land better jobs.\n This guide gives you a brief overview of our software testing course syllabus that aims at building software testing professionals from zero. \n Here’s the software testing course syllabus and curriculum at a glance:"
};

const coursedata = {
    title: " ",
    p: "",
    // linkText: "full syllabus details here.",
    // syllabusLink: "/full-syllabus-details"
    
};

const courseSections = [
    

];

const course_brief = [
    {
        title: "",
        intro: () => (
            <>
             
                <br />
               
                <table className="salary-table">
                    <thead>
                        <tr>
                            <th>Module	</th>
                            <th>Topic</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>  
                            <th>Module 1</th>
                            <td>Introduction to Manual Testing</td>
                        </tr>
                        <tr>  
                            <th>Module 2</th>
                            <td>SDLC</td>
                        </tr>
                        <tr>  
                            <th>Module 3</th>
                            <td>White Box Testing & Its Types</td>
                        </tr>
                        <tr>  
                            <th>Module 4</th>
                            <td>Black Box Testing & Its Types</td>
                        </tr>
                        <tr>  
                            <th>Module 5</th>
                            <td>Defect <br/> Defect Life Cycle</td>
                        </tr>
                        <tr>  
                            <th>Module 6</th>
                            <td>AGILE Methodology</td>
                        </tr>
                      
                        <tr>  
                            <th>Module 7</th>
                            <td>Test Plan</td>
                        </tr>
                        <tr>
                            <th>Module 8</th>
                            <td>Test Case</td>
                        </tr>
                        <tr>  
                            <th>Module 9</th>
                            <td>STLC</td>
                        </tr>
                        <tr>
                            <th>Module 10</th>
                            <td>
                                Automation Testing (Selenium) <br />
                                Introduction to Selenium <br />
                                Maven Introduction <br />
                                Web Driver Manager <br />
                                Locators <br />
                                X Path <br />
                                CSS Selector <br />
                                WebElement Methods in Selenium <br />
                                Wait in Selenium <br />
                                TestNG <br />
                            </td>
                        </tr>
                        <tr>
                            <th>Module 11</th>
                            <td>
                                Core Java<br />
                                JAVA Introduction<br />
                                Java Basics & Introduction to Eclipse<br />
                                Operators & Expressions<br />
                                Control statements<br />
                                Java Object Oriented programming<br />
                                Inheritance<br />
                                Exception handling<br />
                                Interfaces<br />
                                Multi Threaded programming<br />
                                Predefined Libraries<br />
                            </td>
                        </tr>
                        <tr>
                            <th>Module 12</th>
                            <td>
                                MY SQL <br />
                                Introduction to Database <br />
                                Working with databases <br />
                                SQL Sublanguages <br />
                                MySQL Operators <br />
                                Refining Selections and Working with MySQL Workbench <br />
                                Working with Aggregate functions and SQL FILES <br />
                                More on Data types <br />
                                MySQL JOINS <br />
                            </td>
                        </tr>
                        <tr>
                            <th>Module 13</th>
                            <td>
                                HTML <br/>
                                Introduction to HTML <br/>
                                Formatting Page Content <br/>
                                Creating Lists <br/>
                                Creating Links <br/>
                                HTML Forms <br/>
                                Form Controls, Attributes, and Elements <br/>
                            </td>
                        </tr>
                        <tr>
                            <th>Module 14</th>
                            <td>
                                CSS<br />
                                Getting Started<br />
                                CSS Core<br />
                                Typography<br />
                                Layouts<br />
                                Advanced layout<br />
                            </td>
                        </tr>
                       
                    </tbody>
           
                </table><br/>

               
            </>
        )
    },
    {
        title: "Download the software testing syllabus PDF",
        intro: () => (
            <>
            <p>Download Codegnan’s<Link className="link-color" to='#'>software testing syllabus PDF →</Link> </p>
            <img src="/syllabuspages/Software-testing-syllabus.png" alt="" /><br/>
            <p>👉 Check out our complete software testing course syllabus, a 100-day classroom training program (available in Hyderabad, Bangalore and Vijayawada).</p>
            </>
        )
    },
    {
        intro: () => (
            <>
                <h3>Enroll in software testing courses (and get 100% placement support):</h3>
                <ul>
                    {[
                        { name: "Software testing training in Bangalore", link: "/Software-testing-in-banglore" },
                        { name:  "Software testing training in Vijayawada", link:'/Software-testing-in-vijayawada' },
                        { name:  "Software testing training in Hyderabad", link:'/Software-testing-in-hyderabad' }

                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link> 
                        </li>
                    ))}
                </ul><br/>
                
            </>
        )
    },
    {
        title: "Complete Software Testing Syllabus and Curriculum for Beginners",
        intro: "<h3>Module 1. Introduction to Manual Testing</h3> Manual testing uses different test cases to ensure the application is working and it meets the end user’s perspective. This course curriculum starts with giving you an introduction on manual testing, what are the defects that mostly arise in an application, and different types of software testing techniques. <br/> <br/><ul>" +
            [
                "Developers vs Test engineers",
                "Defect",
                "Types of Software Testing"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 2. SDLC",
        intro: "Software goes through multiple phases before it is deployed into the market. There are multiple models (like the waterfall model, spiral model, verification & validation model, and prototype model) used in developing software for achieving different objectives. <br/> <br/><ul>" +
            [
                "Waterfall model",
                "Spiral model",
                "Verification & Validation model",
                "Prototype model ",
                "Derived model",
                "Hybrid model"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 3. White Box Testing & Its Types",
        intro: "White box testing or glass box testing is used to understand the internal workings of software or application. You will get an in-depth knowledge of white box testing from our curriculum and its types. The testing process starts with testing small units of a source code, known as unit testing, and then the entire product. Learners will know multiple types of testing that occur until a tester ensures that the product is bug-free. <br/> <br/><ul>" +
            [
                "Path testing",
                "Conditional testing",
                "Loop testing",
                "Unit testing",
                "Testing the code from memory point of view",
                "Testing the code from performance point of view",
                "White Box Testing vs Black Box Testing"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 4. Black Box Testing & Its types",
        intro: "Unlike white box testing, which focuses on the internal workings of software, black box testing involves software engineers focusing on the software’s functionalities from the user’s perspective. This part of the course will define black box testing and its types. Each of these testing methods has a unique objective that ensures a software or application is of high quality and free from defects. <br/> <br/><ul>" +
            [
                "Functional testing",
                "Integration testing",
                "System testing",
                "Acceptance testing",
                "Smoke testing",
                "Globalization testing",
                "Ad-hoc testing",
                "Compatibility testing",
                "Exploratory testing",
                "Regression testing"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 5. Defect",
        intro: " A defect is an error in software that occurs during its designing or development phase. You will learn what defects lead to what errors in software and understand their severity. This will help you, as a software engineer, detect these defects in the early stages and resolve them efficiently to build a high-quality product. <br/> <br/><ul>" +
            [
                "Blocker defect",
                "Critical defect",
                "Major defect"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Defect Life Cycle ",
        intro: "The Defect Life Cycle is a step-by-step process from determining a defect in an application to closing it off by the tester. You will see a defect report template here that will give you an idea about how testers report defects and help developers resolve them. Additionally, we will introduce you to a popular defect tracking tool, JIRA Tool.  <br/> <br/><ul>" +
            [
                "Defect Report Template",
                "Defect Tracking Tool: JIRA Tooll"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 6. AGILE Methodology ",
        intro: "Agile methodology is an iterative and incremental software development approach. In this section, you will learn about agile methodology and gain an understanding of Scrum and Sprint methodologies, Bug triaging meetings, and Product backlog grooming.  <br/> <br/><ul>" +
            [
                "Scrum model",
                "Sprint Planning Meeting",
                "Scrum Master",
                "Scrum meeting",
                "Sprint Retrospective meeting",
                "Bug triaging meeting",
                "Product Backlog Grooming"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 7. Test Plan",
        intro: "A test plan is a vital document in an SDLC process that outlines the strategy, goals, and scope of testing activities. It ensures a better approach to evaluate the quality of a software. You will learn how to create a test plan with our sample templates.  <br/> <br/><ul>" +
            [
                " Test Plan Template"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 8. Test Case",
        intro: "A test case describes a specific scenario to determine a particular functionality of a software or application. You will get to know it in detail with our test case template and also learn about the test case review process. Additionally, this section adds a special Black Box Test case design technique for learners. <br/> <br/><ul>" +
            [
                "Test case template ",
                "Test Case Review Process",
                "Black Box Test Case Design Technique"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 9. STLC",
        intro: "Learning the software testing life cycle is equally important as the software development life cycle. STLC identifies and resolves issues in the software and ensures that the software is of high quality. You will learn about the entire software testing life cycle in this part of the module. <br/> <br/><ul>" +
            [
                "Software Testing Life Cycle"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 10. Automation Testing (Selenium)",
        intro: "<h3> Introduction to Selenium</h3> Selenium is used by software testers and developers to test web applications across multiple platforms and browsers. In this section of the course, you will learn about the Selenium WebDriver architecture, installation of Java and Eclipse IDE on Windows, setup of Selenium in Eclipse IDE, and run tests on multiple browsers. <br/> <br/><ul>" +
            [
                "Selenium WebDriver Architecture",
                "How to install Java on Windows OS",
                "How to install Eclipse IDE on Windows",
                "How to Setup Selenium WebDriver in Eclipse IDE",
                "How to run Tests on Different Browsers"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Maven Introduction ",
        intro: "Maven is a popular project management tool that automates the compilation of source code in Java and dependency management, assembles binary codes into packages, and executes test scripts. This section of the course will help you understand Maven, install it on your system, and manage dependencies with It.<br/> <br/><ul>" +
            [
                "Maven Introduction and Installation",
                "How to Manage Dependencies with Maven"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Web Driver Manager",
        intro: "This part of the course teaches students how to use WebDriver Manager in Selenium for web automation testing. You will learn how to write your first test case in Selenium, learn about the WebDriver Interface, and the basic methods in the WebDriver Interface. <br/> <br/><ul>" +
            [
                "How to use WebDriver Manager",
                "How to Write First TestCase in Selenium",
                "WebDriver Interface",
                "Basic Methods in WebDriver Interface"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Locators",
        intro: " Locators are the methods used in Selenium to locate and interact with multiple web elements on a web page. They are a powerful tool for automation testing that verifies the presence, absence, and visibility of an element on a web page. In this section of the course, you will learn about Locators in Selenium WebDriver and the different types of Locators that you can use for automation testing.<br/> <br/><ul>" +
            [
                "Locators in Selenium WebDriver",
                "Different Types of Locators"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "X Path",
        intro: "XPath in Selenium is used to navigate through the HTML structure of a web page.  You will learn about XPath and its two types: Relative XPath and Absolute XPath, along with different other XPath functions, methods, and operators in this section of the software testing curriculum.<br/> <br/><ul>" +
            [
                "Introduction to XPath",
                "Relative Vs. Absolute XPath",
                "XPath Starts-with Function",
                "XPath Contains Function",
                "XPath text() Method",
                "XPath AND Operator vs. XPath OR Operator",
                "XPath Axes Methods: Parent, Child, Self",
                "Axes Method descendant, descendant-or-self",
                "XPath Axes following, following-sibling",
                "XPath Axes preceding, preceding-sibling"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "CSS Selector ",
        intro: "CSS Selector is used to identify and locate different web elements depending on their id, name, class, and attributes. We will cover the basic understanding of using CSS Selector in Selenium and its methods.  <br/> <br/><ul>" +
            [
                "Introduction to CSS and CSS Selector",
                "CSS Selector using Class Attribute",
                "CSS Selector with Multiple Attributes",
                "Direct Child or Sub-child Elements",
                "Next Sibling, Adjacent Sibling Combinator",
                "First-Child, Last-Child, Nth-Child, Nth-Last-Child"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "WebElement Methods in Selenium",
        intro: "This part of the course introduces you to different WebElement Methods in Selenium for handling functions such as Drop-down menus, checkboxes, radio buttons, alert popups, and more. <br/> <br/><ul>" +
            [
                "Handle Dropdown in Selenium",
                "Handle Checkbox in Selenium",
                "Select Radio Button in Selenium",
                "Handle Frames in Selenium",
                "Handle Alert Popup in Selenium",
                "Handle Multiple Windows in Selenium",
                "Perform Mouse Hover in Selenium",
                "Perform Drag and Drop in Selenium",
                "Handle Resize Widget in Selenium",
                "Automate Slider in Selenium",
                "Perform Right Click in Selenium",
                "Perform Keyboard Events in Selenium",
                "Take Screenshot in Selenium",
                "Handle Authentication Popup in Selenium"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
        {
        title: "Wait in Selenium",
        intro: "Selenium Wait commands are used to wait for specific conditions to arise before proceeding forward in the code. It helps developers to write a robust automation script. You will learn about three types of Selenium Waits in this section, including Implicit Wait, Explicit Wait, and Fluent Wait.<br/> <br/><ul>" +
            [
                "Implicit Wait",
                "Explicit Wait",
                "Fluent Wait"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },    {
        title: "TestNG",
        intro: " It is a popular testing framework that simplifies selenium tests and the generation of proper test reports. This course will teach you how to install TestNG in Eclipse IDE, write your first test case using TestNG, and introduce you to its different methods and functionalities. . <br/> <br/><ul>" +
            [
                "Install TestNG in Eclipse IDE",
                "Write Test Cases Using TestNG",
                "TestNG Annotations, BeforeMethod vs BeforeTest",
                "Use Assertion in Selenium TestNG",
                "SoftAssert vs HardAssert",
                "Group Test Cases in TestNG, Grouping",
                "To Create Test Suite in TestNG",
                "To Skip Test Cases in TestNG",
                "TestNG Annonations, BeforeGroups, BeforeClass",
                "TestNG Annotations, BeforeSuite and AfterSuite",
                "DataProvider in TestNG, Data Driven Testing",
                "Use DataProvider in TestNG Selenium",
                "TestNG Listeners"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 11. Core Java",
        intro: "You don’t have to be a master in Java development, but knowledge of core Java is essential for software testing, especially in automation. Selenium supports multiple languages, but developers prefer Java over them. This course starts with introducing you to Java and Eclipse, knowledge of operators & expressions, and control statements, and proceeds with advanced concepts like inheritance, exception handling, interfaces, multi-threaded programming, predefined libraries, and Java Object Oriented Programming. <br/> <br/><ul>" +
            [

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "JAVA Introduction ",
        intro: " <ul>" +
            [
                "History",
                "Features"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Java Basics & Introduction to Eclipse ",
        intro: " <ul>" +
            [
                "Post install Configuration",
                "Compiling and executing",
                "Variables and arrays",
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
        title: "Operators & Expressions",
        intro: " <ul>" +
            [
                "Arithmetic operators",
                "Boolean operators",
                "Logical operators",
                "Binary operators"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Control statements ",
        intro: " <ul>" +
            [
                "Branching statements",
                "Iterative statements",
                "Break & Continue with enhancements",
                "While",
                "For",
                "Do..While",
                "Goto Statement",
                "Break and Continue Statement"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Java Object Oriented programming",
        intro: " <ul>" +
            [
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

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Inheritance  ",
        intro: " <ul>" +
            [
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

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Exception handling",
        intro: " <ul>" +
            [
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

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Interfaces",
        intro: " <ul>" +
            [
                "Purpose of interface",
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
        title: "Multi Threaded programming",
        intro: " <ul>" +
            [
                "Basics of threads",
                "Java threaded model",
                "Defining threads using Runnable interface",
                "Defining threads using Thread superclass",
                "Multiple threads",
                "Thread priority values",
                "Thread synchronization using synchronized methods",
                "Thread synchronization using synchronized blocks"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Predefined Libraries",
        intro: " <ul>" +
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
        title: "Module 12. MY SQL",
        intro: "Software testing requires you to ensure data integrity, and knowledge of SQL helps you directly query the database and verify the test data. SQL can also be used for understanding the database structure, analyzing database performance, design, and better test cases. In this course, you will learn about databases, DBMS, working with databases, MySQL operators, MySQL joins, and a few more essential concepts of MySQL. <br/> <br/><ul>" +
            [

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Introduction to Database",
        intro: " <ul>" +
            [
                "What is a database?",
                "Why use a database?",
                "What is DBMS?",
                "Types of DBMS",
                "Introduction to SQL",
                "Database vs. DBMS vs. SQL vs. MySQL",
                "MySQL Installation"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Working with databases",
        intro: " <ul>" +
            [
                "Creating database",
                "Use and Drop database",
                "Introduction to tables",
                "Introduction to data types",
                "Data types",
                "Numeric data types",
                "String data types",
                "Date and time and other data types"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "SQL Sublanguages",
        intro: " <ul>" +
            [
                "Introduction to SQL sublanguages",
                "Creating tables and describing its structure",
                "DML: INSERT part-1",
                "DML: INSERT part-2",
                "Null and Not Null constraints, altering default behaviour",
                "DQL: Select",
                "DCL: Commit, Rollback, Savepoint",
                "DML: Working with Update and Delete commands"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "PMySQL Operators ",
        intro: " <ul>" +
            [
                "Where Clause",
                "Introduction to MySQL Operators and their usage",
                "MySQL Warnings vs Errors",
                "Comparison Operators part-1",
                "Logical AND and other comparison operators"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " Comparison Operators",
        intro: " <ul>" +
            [
                "BETWEEN AND and NOT BETWEEN AND, OR Operator in Logical Operators",
                "IN and NOT IN Operator",
                "IS NULL and IS NOT NULL"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Refining Selections and Working with MySQL Workbench",
        intro: " <ul>" +
            [
                "DISTINCT",
                "ORDER BY",
                "LIMIT",
                "LIKE",
                "MySQL workbench installation",
                "Working with MySQL workbench "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Working with Aggregate functions and SQL FILES",
        intro: " <ul>" +
            [
                "Introduction to aggregate functions",
                "Count",
                "Group By",
                "Min and Max",
                "Group by with Min and Max",
                "SUM And AVG",
                "Group by with SUM and AVG",
                "Subqueries",
                "Exporting MySQL Databases",
                "Importing MySQL Databases"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "More on Data types",
        intro: " <ul>" +
            [
                'Char vs Varchar',
                'Integer data types (SMALLINT, TINYINT,..)',
                'float vs Decimal',
                'Working with Date and Time',
                'CURDATE, CURTIME AND CURRENT..TIMESTAMP',
                'Date functions',
                'Time functions',
                'Formatting dates',
                'Operations on dates',
                'Datetime vs Timestamp',
                'Automatic initialisation and Updating for TIMESTAMP and DATETIME'

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "MySQL JOINS",
        intro: " <ul>" +
            [
                "Why JOINS?",
                "Introduction to JOINS",
                "CROSS JOIN",
                "INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    
    {
        title: "Module 13. HTML",
        intro: "SoWith the basic understanding of HTML, you will have a clear knowledge of how web pages are built. This helps a software tester to identify and debug errors related to incorrect HTML structure or missing web elements. This course covers the basic concepts of HTML including formatting page content, creating lists and links, HTML forms, and HTML form controls, attributes and elements. <br/> <br/><ul>" +
            [

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Introduction to HTML",
        intro: " <ul>" +
            [
                "History and Importance of HTML",
                "Basic HTML syntax",
                "The current state of HTML",
                "HTML resources",
                "Choosing a code editor",
                "Exploring an HTML document",
                "DOCTYPE declarations",
                "Document head",
                "Understanding content models"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " Formatting Page Content",
        intro: " <ul>" +
            [
                "Formatting content with HTML",
                "Headings",
                "Paragraphs",
                "Whitespaces",
                "Images"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Creating Lists",
        intro: " <ul>" +
            [
                "Unordered lists",
                "Ordered lists",
                "Definition lists"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Creating Links",
        intro: " <ul>" +
            [
                "Anchor element",
                "Page internal linking",
                "Linking to external pages",
                "Linking to downloadable",
                "Linking to page regions"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "HTML Forms",
        intro: " <ul>" +
            [
                "Introduction to forms and their importance",
                "Form structure and basic form elements",
                "Text inputs, textareas, and buttons"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Form Controls, Attributes, and Elements",
        intro: " <ul>" +
            [
                "Radio buttons and Checkboxes",
                "Select dropdowns and file uploads",
                "Hidden inputs and labels"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 14. CSS",
        intro: "Learning CSS helps software testers get a clear understanding of the visual presentation of web pages including its style, layouts, fonts, colours, and page responsiveness. It allows you to test for cross-browser compatibility, page responsiveness across different devices, and locate elements on a web page. This course curriculum gives you a basic overview of CSS  including its core concepts, typography, and layouts.<br/> <br/><ul>" +
            [

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Getting Started",
        intro: " <ul>" +
            [
                "HTML overview",
                "Default browser styles",
                "Browser support and inconsistencies",
                "Inline, internal and external CSS",
                "Naming conventions"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "CSS Core",
        intro: " <ul>" +
            [
                "Syntax, terminology, and naming conventions",
                "Type, class, and id selectors",
                "Combinator selectors",
                "Selectors: Best practices"
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Typography ",
        intro: " <ul>" +
            [
                "Web-safe fonts and the font-family property",
                "Web fonts and Google fonts",
                "The font-size property",
                "The font-style and font-weight properties",
                "The color, line height, and text properties",
                "Adjusting the font-weight property"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Layouts",
        intro: " <ul>" +
            [ 
                "Block vs. inline display",
                "The box model",
                "Margin and page layout",
                "Padding",
                "Floats",
                "The box model fix",
                "Box model review",
                "Float and display review",
                "Horizontal navs with the display property",
                "Horizontal navs with the float property",
                "Positioning",
                "Float, display, and position",
                "Layers and the z-index property"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Advanced layout",
        intro: " <ul>" +
            [
                "CSS grid",
                "CSS Flexbox"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Hands on project included in Codegnan’s Software Testing course syllabus",
        intro: "At Codegnan, we believe in a practical training approach to software testing that ensures students have real-life experiences. \nSome of the projects that learners will do at Codegnan’s  during their Software Testing course are:<br/> <br/><ul>" +
            [
                "Instagram Database Clone",
                "Building your favorite blog",
                "Resume building with HTML",
                "Building Registration & Login page",
                "Building a Paytm clone page",
                "Building Portfolio page"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "",
        intro: () => (
            <>
            <p>Codegnan’s practical projects help you learn through practical learning approaches.  Enroll now in Codegnan’s software testing course and get placement assistance after course completion.</p>
            </>
        )
    },

    {
        title: "Is software testing difficult to learn? ",
        intro: () => (
            <>
                <p>No, software testing isn’t difficult to learn if you are starting with manual testing as we do at Codegnan. We start teaching our students with basic testing knowledge and then proceed to automation testing and other topics like core Java, MySQL, HTML and CSS.</p>
                <p> When I searched for the same question on  <Link to="https://www.quora.com/Is-software-testing-an-easy-course-or-tough#:~:text=It%20is%20not%20that%20difficult,good%20analytical%20skills%20and%20patience." onClick={() => window.scrollTo({ top: 0 })} className="link-color">Quora</Link>, I found experts saying software testing can be challenging but it is rewarding as well. There are a couple of things that you need to master like manual testing, knowledge of a programming language, and basic computer skills. </p><br/>

                <img src="/syllabuspages/software-testing-media1.png" alt="" /><br/>

                <p> However, software testing may not be easy for  <Link to="https://www.quora.com/Is-software-testing-an-easy-course-or-tough#:~:text=It%20is%20not%20that%20difficult,good%20analytical%20skills%20and%20patience." onClick={() => window.scrollTo({ top: 0 })} className="link-color">professionals </Link> in the domain. See what they say:</p><br/>

                <img src="/syllabuspages/software-testing-media2.png" alt="" /><br/>
            </>
        )
    },
    {
        title: "Is software testing difficult to learn? ",
        intro: () => (
            <>
                <p>No, software testing isn’t difficult to learn if you are starting with manual testing as we do at Codegnan. We start teaching our students with basic testing knowledge and then proceed to automation testing and other topics like core Java, MySQL, HTML and CSS.</p>
                <p> When I searched for the same question on  <Link to="https://www.quora.com/Is-software-testing-an-easy-course-or-tough#:~:text=It%20is%20not%20that%20difficult,good%20analytical%20skills%20and%20patience." onClick={() => window.scrollTo({ top: 0 })} className="link-color">Quora</Link>, I found experts saying software testing can be challenging but it is rewarding as well. There are a couple of things that you need to master like manual testing, knowledge of a programming language, and basic computer skills. </p><br/>

                <img src="/syllabuspages/software-testing-media1.png" alt="" /><br/>

                <p> However, software testing may not be easy for  <Link to="https://www.quora.com/Is-software-testing-an-easy-course-or-tough#:~:text=It%20is%20not%20that%20difficult,good%20analytical%20skills%20and%20patience." onClick={() => window.scrollTo({ top: 0 })} className="link-color">professionals </Link> in the domain. See what they say:</p><br/>

                <img src="/syllabuspages/software-testing-media2.png" alt="" /><br/>
            </>
        )
    },
    {
        title: "Is software testing a good career?",
        intro: () => (
            <>
               <p>Yes, software testing is a good career choice in 2024 and beyond based on the following factors such as industry demand, job availability, and high salary scope.</p>
            </>
        )
    },
    {
        title: "Industry demand ",
        intro: () => (
            <>
               <p>If you are also following industry demands before enrolling in a course like we do, here’s the <Link to="https://www.thebusinessresearchcompany.com/report/testing-software-global-market-report" onClick={() => window.scrollTo({ top: 0 })} className="link-color">  Testing Software Global Market Report 2024. </Link> It says the software testing market size will be seeing strong growth in the upcoming years and will become <Link to="https://www.thebusinessresearchcompany.com/report/testing-software-global-market-report" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> $76.98 billion </Link> in 2028, growing at a CAGR of 8.3% every year. </p>
               <img src="/syllabuspages/software-testing-media3.png" alt="" /><br/>

               <p>I questioned Quora whether it is manual testing or automated testing that gains importance in the market. From a <Link to="https://softwaretestingsapienssspace.quora.com/t" onClick={() => window.scrollTo({ top: 0 })} className="link-color">  community post, </Link> I found that only 9% of businesses choose manual testing, while 66% of companies prefer a hybrid approach that combines human and automated testing skills. So,  our software training course will prepare you with manual and automation methods for landing a good job.</p>

               <img src="/syllabuspages/software-testing-media4.png" alt="" /><br/>
            </>
        )
    },
    {
        title: "Job opportunities",
        intro: () => (
            <>
               <p>It is obvious that you want to enter this domain to find a good job. To your surprise, if you search for ‘software testing jobs in India’ on LinkedIn, you will find  <Link to="https://www.linkedin.com/jobs/software-testing-jobs/?currentJobId=3857669857&originalSubdomain=in" onClick={() => window.scrollTo({ top: 0 })} className="link-color">50,000+ </Link>  opportunities for beginners and professionals. </p><br/>
               <img src="/syllabuspages/software-testing-media5.png" alt="" /><br/>
            </>
        )
    },
    {
        title: "Salary scope",
        intro: () => (
            <>
               <p>An early-stage software tester in India earns <Link to="https://www.ambitionbox.com/profile/software-tester-salary" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> ₹1.5 LPA,</Link> but with experience and expertise in the domain, you can earn as high as ₹8.0 LPA. The average annual income of a software tester in India is ₹4.7 LPA, which is a good starting point for your career.</p><br/>
               <img src="/syllabuspages/software-testing-media6.png" alt="" /><br/>
            </>
        )
    },
    {
        title: "What is the duration of the software testing course?",
        intro: () => (
            <>
                <p>The duration of the software testing course is 100 days. It includes theoretical classes along with multiple practical sessions, working on live projects, and doubt-clearing sessions. </p>

                <p>The software testing course duration may vary for other institutions, primarily depending on the syllabus. We offer a comprehensive syllabus covering all essential concepts of software testing so that learners can work on real-world projects.</p>
            </>
        )
    },
    {
        title: "What is the software testing course fee?",
        intro: () => (
            <>
                <p>The software testing course fee is <b>₹50,000</b> at Codegnan <b>(100-days course duration with placement support).</b> We believe practical classes are more important than theory, so we have recruited top mentors in the domain to provide hands-on training to students on different software testing modules. </p>

                <p>You will have doubt clearance sessions where all your real-life challenges will be discussed. The course curriculum doesn’t only teach you manual testing, but we have covered Java, MySQL, HTML, and CSS with manual and automated testing concepts.</p>
            </>
        )
    },

    {
        title: "Why enroll in Codegnan’s Software Testing course?",
        intro: "Codegnan’s Software Testing course is especially designed for all from beginners with a basic college degree to IT professionals looking for a career shift. But why choose us?<br/> <br/><ul>" +
            [
                "We offer a 100-day course that covers multiple topics related to software testing",
                "The entire course fee is ₹50,000 (comes with 100% placement support)",
                "You will work on multiple live projects to gain real-life experiences",
                "Our experts are alumni of top universities or are professionals working in the software testing domain",
                "You will receive an industry-accredited certificate that holds global value",
                "Add our projects to your resume and highlight your skills to land better jobs",
                "We have placed more than 1250 students in top MNCs",
                "Our offline software testing classes are available in Bangalore, Vijayawada, and Hyderabad.",
                "Join our 100-day Job Accelerator Program to get a high-paying job immediately after course completion "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
 

];

const nav_interview = [
    {
        name: "Machine learning course syllabus (with downloadable PDF)",
        link: "/machine_learning_course_page"
    },
    {
        name:"15 Java Final Year Projects For Beginners (With Source Code)",
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
