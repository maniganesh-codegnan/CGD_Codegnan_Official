import React from "react";
import Course_template from "./Course_template";
import Softwaretesting_projects from '/course_images/software-testing-projects-illustration.png';
import { Link } from "react-router-dom";

const headdata = {
    title: "Software Testing Projects For Final Year With Source Code ",
    date: "June 3, 2024",
    img: Softwaretesting_projects,
    intro: "No applications or software are launched on the market without being tested. Software testing projects give you an idea of what to test within an application and how you can do so. \nIf you are interested in a successful career in this domain, you need hands-on experience in software testing.\nIn the last five years, training over 30,000 tech students, we have seen what practical knowledge can do in the IT industry. It improves your professional portfolio, making you stand out from the fresher’s competition. \nSo we have researched 13 software testing projects that will give you an in-depth understanding of how to test software."
};

const coursedata = {
    title: " ",
    p: " ",
    linkText: " ",
    syllabusLink: "",
};

const courseSections = [
   
    {
        title: " Software Testing Project ideas at a glance",
        intro: " ",
        content: [
            // "Knowledge of how to store and manage different tasks using arrays and lists",
            // "Implement algorithms to search and sort tasks based on specific criteria like priority or due dates",
            // "Implementation of linked list data structure for dynamically managing tasks",
            // "Understanding the efficiency of different operations like adding, removing, and searching for time-complexity analysis "
        ]
    },
    
];
const course_brief = [
    {
        intro: () => (
            <>
                <Link to=" " className="link-light-color">Software Testing projects for beginners with source code</Link><br />
                <ul>
                    {[
                        { name: "1. E-commerce website testing ", link: "/machine-learning-in-hyderabad", duration: "1 month" },
                        { name: "2. Social media websites testing  ", link: "/machine-learning-in-hyderabad", duration: "1 month" },
                        { name: "3. Derive Sanity Test Scenarios for Admin Interface  ", link: "/machine-learning-in-hyderabad", duration: "1 month" },
                        { name: "4. Chat Application Testing  ", link: "/machine-learning-in-hyderabad", duration: "1 month" },
                        { name: "5. Building and testing your favourite blog in HTML ", link: "/machine-learning-in-hyderabad", duration: "1 month" },
                        { name: "6. Resume building with HTML and manual testing  ", link: "/machine-learning-in-hyderabad", duration: "1 month" },
                        { name: "7. Building and testing registration and login page ", link: "/machine-learning-in-hyderabad", duration: "1 month" },
                        { name: "8. Building and testing the Paytm clone Page ", link: "/machine-learning-in-hyderabad", duration: "1 month" },
                        { name: "9. Building and testing portfolio page with CSS ", link: "/machine-learning-in-hyderabad", duration: "1 month" }

                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link to=" " className="link-light-color">Software Testing projects for final-year students with source code</Link><br />
                <ul>
                    {[
                        { name: "10. Banking System Testing ", link: "/machine-learning-in-hyderabad" },
                        { name: "11. Online Education Platform Testing ", link: "/machine-learning-in-hyderabad" },
                        { name: "12. Cross-platform tool for building and testing software ", link: "/machine-learning-in-hyderabad" },
                        { name: "13. Instagram database cloning and testing ", link: "/machine-learning-in-hyderabad" },
                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link to=" " className="link-light-color">Benefits of doing software testing projects for students</Link><br/>
                <ul>
                    {[
                        { name: "Becoming a Software Testing expert in the next 100 days with Codegnan  ", link: "/machine-learning-in-hyderabad" }
                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        )
    },
    {
        intro: () => (
            <>
                <p>If you want to become an expert and get a high-paying job in software testing, then enroll in Codegnan’s classroom-training programs:</p>
                
                <ul>
                    {[
                        { name: "Software testing training course in Bangalore", link: "/Software-testing-in-banglore" },
                        { name: "Software testing course in Hyderabad", link: "/Software-testing-in-hyderabad" },
                        { name: "Software testing course in Vijayawada", link: "/Software-testing-in-vijayawada" }
                       
                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        )
    },
    {
        title: "Software Testing projects for beginners with source code ",
        intro: () => (
            <>
                <h3>1. E-commerce website testing</h3>
                <img src="/syllabuspages/E-commerce-website-testing.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Medium</p>
                <p>This project focuses on testing the functionalities, usability and performance of an e-commerce website. Learners will need to create different test cases, execute them manually and through automation tools, and report any issues or defects to the development team. The main purpose of the project is to ensure the website meets all the client’s requirements and provides a seamless shopping experience for users. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: " <ul> "+
                [    
                    "Understand testing types, including functional testing, integration testing, system testing, and acceptance testing.",
                    "Gain experience in manual testing techniques like exploratory testing, smoke testing, and regression testing.",
                    "Develop automation testing skills using tools like Selenium or Appium.",
                    "Use Selenium WebDriver for automation testing and TestNG framework for test management ",
                    "Understand defect tracking and test case reporting"
                ].map((item, index) => (
                    "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
                )).join('') +
                "</ul>"
    },
    {
        title: "What it takes to execute this software testing project:",
        intro: " <ul> "+
                [    
                    "Design test cases/scenarios for core e-commerce functionalities, e.g., shopping cart, payment gateway, checkout process, etc., using Java for automation scripts.",
                    "Write SQL queries to validate database data integrity during integration testing.",
                    "Utilise HTML and CSS knowledge to verify and validate web elements during functional testing.",
                    "Design test cases/scenarios for end-to-end user flows and integration points for integration testing.",
                    "Perform system testing by creating test environments mimicking production setup.",
                    "Conduct acceptance testing based on client/business requirements and user stories.",
                    "Set up test environments for web automation using Java-based frameworks like Selenium WebDriver.",
                    "Implement data-driven testing using Java and SQL to handle varied test data scenarios.",
                    "Conduct system testing by creating test environments mimicking production setup.",
                    "Perform load/stress testing using Java-based tools to assess system performance under different user loads.",
                    "Generate comprehensive test reports using Java-based reporting utilities.",
                    "Collaborate with development teams to fix bugs and manage test cycles across all testing levels."
                ].map((item, index) => (
                    "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
                )).join('') +
                "</ul>"
                
    },
    {
        title: " ",
        intro: () => (
            <>
               <p> <Link className="link-color" to='/java-projects'>👉 Find the list of java project ideas</Link></p>
            </>
        )
    },
    {
        title: "Real-world applications:",
        intro: " <ul> "+
                [    
                    "<strong>Online retail space:</strong> With the knowledge of testing an e-commerce website, you can help companies develop bug-free websites for clients that ensure a seamless shopping experience. "
                    
                ].map((item, index) => (
                    "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
                )).join('') +
                "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
               <p> <Link className="link-color" to='https://github.com/rani1510/EcommerceWebsiteAutomation'> 👉 Find the source code</Link></p>

               <iframe 
               width="560" 
               height="315" 
               src="https://www.youtube.com/embed/aR3JIXKBzAE?si=DdkKJ36vdJTEldpy" title="YouTube video player" 
               frameborder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               referrerpolicy="strict-origin-when-cross-origin" className="video" 
               allowfullscreen ></iframe>

                <p> <Link className="link-color" to='/software-testing-course-syllabus'>👉 Download the complete software testing syllabus </Link></p>

            </>
        )
    },
    {
        title: "2. Social media websites testing ",
        intro: () => (
            <>
                <img src="/syllabuspages/Social-media-websites-testing.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Medium</p>
                <p>This project aims to test a social media website to check its functionality matches the requirements, its usability, performance, and security measures. You will get to evaluate a site that covers features like user registration, profile management, posting content, commenting, messaging, notification, and settings. The primary task is to design test cases, look out for bugs or issues, and report them to the development team.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: " <ul>" +
            [
                "Understanding the various features and workflows of the social media website.",
                "Designing and executing test cases for different functionalities.",
                "Performing usability testing to ensure a user-friendly experience.",
                "Conducting performance testing to assess the website’s responsiveness and load handling.",
                "Evaluating security measures to protect user data and privacy.",
                "Documenting the testing process, findings, and any issues discovered."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this software testing project:",
        intro: "<ul>" +
            [
                "Access to the social media website or a test environment.",
                "Understand the features and workflows of the social media website.",
                "Develop detailed test cases for each feature",
                "Create test cases for usability, performance, and security testing",
                "Execute the functional test cases to verify that all features work correctly",
                "Execute usability, performance, and security testing",
                "Write any issues or bugs found during testing, providing detailed information for developers to fix the problems",
                "Retest the website after fixes are applied to ensure issues are resolved.",
                "Validate that all test cases pass and the website meets the required quality standards",
                "Prepare a comprehensive test report summarising the test cases, execution results, bugs found, and fixes applied"
                 
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Online businesses:</strong> With these skills, you can assist developers in building social media websites for online businesses that are bug-free and compatible with all screens. ",
                "<strong>Online content creators:</strong> These people need to create social media websites to share their video content and images, and you can test their sites for bugs or any issues."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
           
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/Abhishek-PratapSingh/Social-Media-Platform'> 👉 Find the source code</Link></p>
            </>
        )
    },
    {
        title: "3. Derive Sanity Test Scenarios for Admin Interface  ",
        intro: () => (
            <>
                <img src="/syllabuspages/Derive-Sanity-Test-Scenarios-for-Admin-Interface.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Medium</p>
                <p>This project involves creating a set of sanity taste cases for an administrative interface of a website or application. Students will be responsible for understanding the core functionalities of the admin interface, identifying areas that require testing, and designing effective test cases to validate the essential features. The goal is to ensure that the admin interface operates as expected and it allows administrators to perform necessary tasks without any bugs or issues.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Learn to perform sanity testing, a quick and focused type of testing to ensure key functionalities are intact after changes",
                "Designing effective sanity test scenarios",
                "Knowledge of documenting and reporting issues effectively, providing clear and actionable feedback to developers"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this software testing project:",
        intro: " <ul>" +
            [
                "Obtain a thorough understanding of the software application and its administrative interface.",
                "Identify the critical functionalities that must work correctly for the admin interface to be operational.",
                "Develop sanity test scenarios for each critical functionality. Focus on areas that are most likely to be affected by recent changes or bug fixes.",
                "Include scenarios for login, user management, content approval, settings changes, and data viewing.",
                "Execute the sanity test scenarios, verifying that each functionality works as expected.",
                "Focus on identifying any major issues that would prevent the admin interface from being used effectively.",
                "Document the results of each test scenario, noting any issues or discrepancies.",
                "Analyse the test results to identify any patterns or common issues.",
                "Prepare a report summarising the test scenarios, execution results, and any issues found."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Industry application: Software testers can use these skills to test administrative interfaces of different websites across multiple industries  "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/qawolf/qawolf'> 👉 Find the source code</Link></p>
            </>
        )
    },
    {
        title: "4. Chat Application Testing ",
        intro: () => (
            <>
                <img src="/syllabuspages/Chat-Application-Testing.png" alt="" width="100%"/>
                <p><b>Difficulty level:  </b>Medium</p>
                <p>Students will learn how to test a chat application from this project and verify if it functions the same as intended. They will also need to design multiple other test cases for verifying usability, performance, and security checks. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Learn functional testing techniques to verify that each feature of the chat application works as intended.",
                "Knowledge of using automated testing tools (e.g., Selenium, Appium) to create and execute repetitive and regression testing scripts.",
                "Implementing usability testing techniques ensures the user interface is intuitive and easy to use.",
                "Evaluate the application’s performance under different conditions, including load and stress testing.",
                "Practice security testing methods to identify and assess potential security vulnerabilities and ensure user data and communication are protected.",
                "Document and report bugs effectively."
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this software testing project:",
        intro: " <ul>" +
            [
                "Understanding of the application architecture and its functionalities ",
                "Develop detailed manual test cases for each feature",
                "Create automated test scripts for repetitive tasks and regression testing.",
                "Include test cases for usability, performance, and security testing",
                "Execute manual test cases to verify the functionality and usability of the application.",
                "Perform performance testing to assess load times, response times, and scalability.",
                "Conduct security testing to identify potential vulnerabilities and ensure data protection",
                "Provide details on any bugs or issues found during testing to the development team ",
                "Retest the application after fixing all the issues to identify any remaining bugs and ensure that it meets the required quality standards."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Customer support team:</strong> They use chat applications to automate client responses; you can test these applications for better user experience and functionality ",
                "<strong>E-commerce platforms:</strong> These platforms often integrate chat applications to assist customers in their purchase journey, which requires them to be bug-free. Having hands-on experience with chat application testing, you can help developers create bug-free applications.",
                "<strong>IoT and smart home devices manufacturers:</strong> Such items require bug-free chat applications for controlling and interacting with them where you can use your skills to check if their functionality matches the requirements"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/jerinpeter/chat_app'> 👉Find the source code</Link></p>
            </>
        )
    },
    {
        title: "5. Building and testing your favourite blog in HTML",
        intro: () => (
            <>
                <img src="/syllabuspages/Building-and-testing-your-favourite-blog-in-HTML.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Medium</p>
                <p>This project allows learners to create a simple blog website using HTML and then perform manual tests to ensure its functionality and usability. Students will be required to design and develop the blog with essential features like posts, comments, and navigation links, and the testing phases will include functional testing, usability testing, compatibility testing, etc. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Improve designing skills with HTML",
                "Knowledge of test case designing to create detailed test cases for the blog",
                "Learn manual testing techniques such as functional testing, usability testing, and compatibility testing.",
                "Knowledge of bug documentation and reporting"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this software testing project:",
        intro: " <ul>" +
            [
                "Set up the project development and testing environment",
                "Plan the layout and structure of the blog, like adding a home page, post pages, and an about page.",
                "Write HTML code to build the blog, ensuring it includes sections for posts, comments, and navigation links.",
                "Style the blog using basic CSS to enhance its appearance and usability.",
                "Develop test cases for functional testing, checking that all elements (e.g., links, forms) work as intended",
                "Create usability test cases to ensure the blog is easy to navigate and user-friendly.",
                "Develop compatibility test cases to ensure the blog works across different web browsers and devices.",
                "Execute the test cases systematically on different browsers and devices.",
                "Document any issues or bugs encountered during testing.",
                "Retest after fixing all identified issues to ensure they have been resolved.",
                "Compile a detailed test report summarising the test cases, execution results, bugs found, and fixes applied.",
                "Include screenshots or videos of any critical issues for better understanding."
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Building blog website:</strong> You can create your own or a client blog website with these skills and ensure it is functional, user friendly and compatible across different environments",
                "<strong>Business blog website:</strong> Businesses often create blog websites to share marketing purpose informative content, and your testing skills will help them create a high-quality, bug-free website"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/Sowwyz/shops2-website' > 👉 Find the source code</Link> </p>
            </>
        )
    },
    {
        title: "6. Resume building with HTML and manual testing ",
        intro: () => (
            <>
                <img src="/syllabuspages/Resume-building-with-HTML-and-manual-testing.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Easy</p>
                <p>This project helps students learn how to design an appealing resume with HTML elements and test it for proper functionality and presentation. Your resume will have certain sections like personal information, education, work experience, skills, and contact details. Then, test your resume for content accuracy, layout consistency, link functionality, and compatibility across multiple browsers and devices. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Understanding the basic concepts of HTML elements for structuring a resume and applying semantic HTML markup for better accessibility",
                "Designing an effective and visually appealing resume layout with properly structured resume sections ",
                "Testing HTML markup to ensure cross-browser compatibility ",
                "Accessibility testing for keyboard navigation, screen reader compatibility and colour contrast ",
                "User experience testing to evaluate the usability of your resume ",
                "Performance testing to measure and optimise the resume’s loading speed"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this software testing project:",
        intro: " <ul>" +
            [
                "Set up the environment for resume building and testing ",
                "Plan the layout and sections of the resume, like adding personal information, education, work experience, skills, and contact.",
                "Write HTML code to structure the resume content and style it using basic CSS to ensure it is visually appealing and easy to read.",
                "Develop test cases for content verification, ensuring all information is accurate and properly formatted.",
                "Create test cases for layout testing, checking that the resume displays consistently across different browsers and devices.",
                "Develop test cases for link functionality, ensuring all links (e.g., email, LinkedIn profile) work correctly.",
                "Include usability test cases to ensure the resume is easy to read and navigate.",
                "Execute the test cases systematically on different browsers and devices and document any issues or inconsistencies found during testing.",
                "Retest after fixing all identified issues to ensure they have been resolved.",
                "Prepare a detailed test report based on your findings."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Create a personal resume:<strong> With this knowledge, you can create an eye-catching resume that increases your chances of getting selected for a job.",
                "<strong>Professional resume building:<strong> You can get a job role of creating bug-free resumes for clients, making them stand out from the competition "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/jensinthomas/Job-Applicants-Analyzer' > 👉 Find the source code </Link></p>
            </>
        )
    },
    {
        title: "7. Building and testing registration and login page",
        intro: () => (
            <>
                <img src="/syllabuspages/Building-and-testing-registration-and-login-page.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Medium </p>
                <p>This project involves creating simple registration and login pages using HTML, CSS, and JavaScript. Learners will design and develop these pages where users can register on the site by entering details like username, password, and email and log in using the credentials. Then, test the site to validate form inputs, show proper error messages, and verify login functionality is working as intended. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Knowledge of HTML form elements and validation ",
                "Understanding of client-side scripting for enhancing form functionality and user experience ",
                "Develop test case design for web forms and user authentication system ",
                "Hands-on practice with cross-browser compatibility testing, functional testing, input validation, and usability testing ",
                "Implementing error-handling mechanisms ",
                "Knowledge of bug documentation and reporting "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this software testing project:",
        intro: " <ul>" +
            [
                "Set up the development and testing environment ",
                "Plan the layout and sections of the registration and login pages.",
                "Write HTML code to create forms for registration (username, password, email) and login (username, password).",
                "Style the forms using CSS to ensure they are visually appealing and user-friendly.",
                "Add JavaScript to handle basic client-side validation, e.g., ensuring required fields are filled, email format is correct, and passwords match.",
                "Develop test cases for functional testing, checking that all form inputs work as intended.",
                "Create test cases for input validation, ensuring proper error messages are displayed for invalid inputs.",
                "Develop test cases for usability testing, ensuring the forms are easy to use and navigate.",
                "Include compatibility test cases to ensure the pages work correctly across different browsers and devices.",
                "Execute the test cases systematically on different browsers and devices.",
                "Document any issues or inconsistencies found during testing.",
                "Retest after fixing any identified issues to ensure they have been resolved.",
                "Prepare a detailed test report."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Early stage Web development: You can create bug-free registration and login pages for websites "
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/drahem/register-page-testing'> 👉 Find the source code</Link></p>
            </>
        )
    },
    {
        title: "8. Building and testing the Paytm clone Page",
        intro: () => (
            <>
                <img src="/syllabuspages/Testing-the-Paytm-clone-Page.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Medium</p>
                <p>This project will teach students to develop a static Paytm clone homepage where they will use HTML and CSS and then perform multiple tests to ensure it properly works. They will design and develop the clone page replicating the original Paytm page’s layout, style and responsiveness and perform tests to check the functionality, responsiveness, and compatibility across multiple browsers and devices.</p>
            </>

        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Analysing the Paytm homepage to understand its structure and design elements.",
                "Writing HTML code to create the structure of the page.",
                "Use CSS to style the page and replicate the look and feel of the Paytm homepage.",
                "Ensuring that the page is responsive and works well on various screen sizes.",
                "Developing and executing test cases to verify the page’s layout, styling, and responsiveness.",
                "Documenting the testing process and any issues found"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this software testing project:",
        intro: " <ul>" +
            [
                "Analyse the Paytm homepage to understand its layout, design elements, and responsiveness.",
                "Write HTML code to create the structure of the Paytm clone page and use CSS to style it as per the original Paytm homepage",
                "Implement responsive design techniques using CSS media queries to ensure the page works well on various screen sizes.",
                "Develop test cases for layout testing, ensuring the page elements are positioned correctly and the design matches the original page.",
                "Create multiple test cases for styling verification, checking that colours, fonts, and other styles are applied correctly.",
                "Develop test cases for responsiveness testing, ensuring the page adjusts properly to different screen sizes.",
                "Include cross-browser test cases to ensure the page works correctly across different browsers.",
                "Execute the test cases systematically on different browsers and devices.",
                "Use browser developer tools to test responsiveness and inspect CSS.",
                "Document any issues or inconsistencies found during testing.",
                "Retest after fixing any identified issues to ensure they have been resolved.",
                "Create a detailed test report with execution results, bugs found, and fixes applied."
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Web development:<strong> You will gain knowledge of how to develop a static webpage with HTML and CSS, and how to perform multiple tests to ensure the page performs exactly like the client requirements.",
                "<strong>Testing web pages:<strong> You can work as a software tester with these skills and ensure the development teams deploy a bug-free application in the market."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/hiteshdotcom/Paytm-Clone-'>👉 Find the source code </Link></p>
            </>
        )
    },
    {
        title: "9. Building and testing portfolio page with CSS ",
        intro: () => (
            <>
                 <img src="/syllabuspages/Building-and-testing-portfolio-page-with-CSS.png" alt="" width="100%"/>
                 <p><b>Difficulty level: </b>Medium</p>
                <p>This project focuses on building a portfolio page with HTML, CSS, and JavaScript, and test it thoroughly for proper functionality and compatibility across all screen sizes. You can add necessary details on the page including your professional skills, projects, work experience, and contact information</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Designing the layout and structure of the portfolio page.",
                "Writing HTML code to create sections like About Me, Projects, Skills, Experience, and Contact.",
                "Using CSS to style the portfolio and make it visually attractive.",
                "Implementing basic JavaScript to make the page interactive by working on form validation and dynamic content display.",
                "Developing and executing test cases for functional testing, layout testing, responsiveness testing, and cross-browser testing",
                "Understanding of test case documentation and reporting."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this software testing project:",
        intro: "<ul>" +
            [
                "Prepare the development and test environment with a text editor or IDE, web browsers for testing, tools for responsive designing ",
                "Plan the layout and sections of the portfolio, including About Me, Projects, Skills, Experience, and Contact sections ",
                "Write HTML code to structure the content of the portfolio page and style it with CSS.",
                "Add JavaScript to handle basic interactivity of the page, like form validation and dynamic content",
                "Implement responsive design techniques using CSS media queries to ensure the portfolio works well on multiple screen sizes.",
                "Develop test cases for functional testing, checking that all links, forms, and interactive elements work as intended.",
                "Create test cases for layout testing, ensuring the page elements are positioned correctly, and the design is consistent across different browsers.",
                "Develop test cases for responsiveness testing, ensuring the page adjusts properly to different screen sizes.",
                "Include cross-browser test cases to ensure the portfolio works correctly across different browsers.",
                "Execute the test cases systematically on different browsers and devices.",
                "Use browser developer tools to test responsiveness and inspect CSS and JavaScript.",
                "Document any issues or inconsistencies found during testing.",
                "You need to retest it after fixing all the bugs and report the entire case to the development team"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Professional portfolio creator:<strong> You can work as a portfolio creator with knowledge in developing such responsive pages and testing them thoroughly for a bug-free portfolio page",
                "<strong>Personal branding:<strong> With these skills, you can create a personal portfolio that attracts the attention of potential recruiters"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/FreeCodeCamp-Solutions/Personal-Portfolio-Webpage'> 👉 Find the source code </Link> </p>

            </>
        )
    },
    {
        title: "Software Testing projects for final-year students with source code ",
        intro: () => (
            <>
                <h3>10. Banking System Testing </h3>
                <p><b>Difficulty level: </b>Hard</p>
                <p>Students need to test the functionality, security measures, and reliability of a banking system in this project. They will create different test cases, execute them manually and with automation tools, and report bugs to the development team. The goal of this project is to deploy an efficient banking system that can handle customer-sensitive data securely and allow users to perform banking operations smoothly. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Understand core banking functionalities, e.g., accounts, transactions, loans, etc., before testing the system.",
                "Designing comprehensive test cases and scenarios covering various banking operations",
                "Gain experience in manual testing techniques like exploratory and regression testing.",
                "Learn test automation using tools and frameworks for efficient regression testing.",
                "Understanding of data-driven testing for handling diverse banking data scenarios.",
                "Knowledge of defect tracking, reporting, and test cycle management"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this software testing project:",
        intro: "<ul>" +
            [
                "Identify core banking functionalities, e.g., account management, transactions, loans, etc, for testing.",
                "Design comprehensive test cases and scenarios covering various banking operations.",
                "Perform manual testing techniques like exploratory, usability, and regression testing.",
                "Set up test environments and automation frameworks (e.g., Selenium, Appium).",
                "Write and maintain automated test scripts for regression and continuous testing.",
                "Implement data-driven testing techniques to handle diverse banking data scenarios.",
                "Conduct integration and system testing to validate end-to-end banking workflows.",
                "Perform load and performance testing to assess system behaviour under different user loads.",
                "Generate test reports, analyse code coverage, and communicate defects to the software development team."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Banking and financial institutions:</strong> Having knowledge in testing banking system will help you build real-life applications for banks and financial institutions that can perform banking operations efficiently and handle customer sensitive data securely."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/abhi9720/BankingPortal-API'> 👉 Find the source code </Link> </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/z5zxZ-GeZn4?si=io_8m4dfX7SumptC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                
            </>
        )
    },
    {
        title: "11. Online Education Platform Testing ",
        intro: () => (
            <>     
                <p><b>Difficulty level: </b>Hard</p>  
                <p>This software testing project helps learners develop and implement automated tests for an online education platform. You need to develop a platform with features like user registration, course enrollment, video streaming, quizzes, decision forums and payment gateway. Automated testing tools and frameworks are then used to create scripts that test the functionality, usability, performance, and security of the platform.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Learn Automated Test Case designing techniques.",
                "Knowledge of framework setups like Selenium, JUnit, or TestNG and their usage",
                "Having proper scripting skills for writing automated test scripts in languages such as Java, Python, or JavaScript.",
                "Understand how to integrate automated tests into a CI/CD pipeline using tools like Jenkins or GitLab CI.",
                "Learn to use tools like JMeter or LoadRunner for automated performance and load testing.",
                "Gain basic knowledge of automated security testing tools and practices.",
                "Learn bug documenting and reporting to developers."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://codegnan.com/blogs/python-projects/'> 👉 Find project project ideas for final year students </Link> </p>
                
            </>
        )
    },
    {
        title: "What it takes to execute this software testing project:",
        intro: "<ul>" +
            [
                "Understand the platform functionalities for user registration, course enrollment, content delivery, quizzes, and payment processing.",
                "Access to automated testing tools in frameworks (e.g., Selenium WebDriver, JUnit), version control systems (e.g., Git), performance testing tools (e.g., JMeter) and security testing tools (e.g., OWASP ZAP)",
                "Perform exploratory testing to identify defects, edge cases, and usability issues across different workflows and user scenarios.",
                "Create performance test cases to measure load times, responsiveness, and scalability of the platform",
                "Execute the automated test cases to ensure proper functioning, usability, performance and security measures of the system",
                "Implement strategies for handling dynamic web elements, asynchronous operations, and browser compatibility.",
                "Conduct integration testing to validate end-to-end learning workflows and data integrity across components.",
                "Generate test reports and collaborate with the development team for defect resolution and test cycle management."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>School and college learning platform development:</strong> Educational institutions often use such platforms for their students to access learning materials. You can use your testing skills to help the development team create bug-free platforms.",
                "<strong>Online learning platforms:</strong> When you enrol in online courses, they provide an LMS for students to complete assignments and quizzes, watch recorded sessions, etc. They ask for such applications, and you can help test their platform for usability, functionalities, and compatibility with different devices. "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/aungttant/Education'> 👉 Find the source code </Link> </p>
            </>
        )
    },
    {
        title: "12. Cross-platform tool for building and testing software ",
        intro: () => (
            <>
                <p><b>Difficulty level: </b>Hard</p>
                <p>TThis cross-platform tool project is about creating a tool for building and testing multiple software across different platforms like Windows, Mac OS, and Linux. Learners will design and implement multiple test cases to verify the tool’s functionality, usability, compatibility, and performance across different operating systems.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Learn test case designing",
                "Know how to execute functional testing to verify each feature of the tool is working as intended on different operating systems",
                "Knowledge of compatibility testing",
                "Implementing usability testing to ensure the tool is intuitive and easy to use.",
                "Learn to assess the tool’s performance, including build times and resource utilization",
                "Understanding of bug documentation and reporting."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this software testing project:",
        intro: "<ul>" +
            [
                "Understand the features and workflow of the tool.",
                "Develop detailed test cases for each feature.",
                "Include test cases for cross-platform compatibility, ensuring the tool operates correctly on different operating systems.",
                "Create usability test cases to ensure the tool is user-friendly and intuitive.",
                "Execute the functional test cases on each operating system to verify that all features work correctly.",
                "Perform compatibility testing by running the tool on different platforms and documenting any inconsistencies or issues.",
                "Conduct usability testing to assess the overall user experience.",
                "Perform performance testing to evaluate build times and resource utilisation on each platform.",
                "Record any issues or bugs found during testing and provide detailed information to developers to fix the problems.",
                "Retest the tool after fixes are applied to ensure issues are resolved.",
                "Validate that all test cases pass and the tool meets the required quality standards across all platforms."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Assist software developers:</strong> This tool will streamline the software development process by providing developers with a unified environment for compiling, testing and deploying applications ",
                "<strong>Software development companies:</strong> These companies can save money on hiring a manual tester by using this tool, which can identify bugs within a system and instruct the developer to make necessary changes."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/Kitware/CMake'> 👉 Find the source code </Link> </p>
            </>
        )
    },
    {
        title: "13. Instagram database cloning and testing ",
        intro: () => (
            <>
                <p><b>Difficulty level: </b>Hard</p>
                <p>This project aims to create a mock version of Instagram’s database and then perform manual tests on its functionalities, such as profiles, posts, comments, likes, and followers. Learners will need to design and execute different test cases to ensure data integrity and test the performance and security of the database. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Understanding of Database Schema, including analysis and replication of a complex database schema",
                "Test case designing concepts to design comprehensive test cases for database operations",
                "Knowledge of manual testing techniques such as functional testing, data validation, and security testing.",
                "Bug documenting and reporting",
                "Troubleshooting and resolving database-related issues"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this software testing project:",
        intro: "<ul>" +
            [
                "Install a relational database management system (RDBMS) like MySQL or PostgreSQL, and use a database management tool, e.g., MySQL Workbench or pgAdmin.",
                "Analyse Instagram’s database components and relationships; design and create the database schema based on that",
                "Create tables for users, posts, comments, likes, and followers with appropriate attributes and relationships.",
                "Insert sample data into the tables to simulate real-world usage and ensure to maintain data variety to cover different test scenarios.",
                "Develop test cases for CRUD operations on each table.",
                "Include test cases for data validation (e.g., data types, constraints), performance testing (e.g., response times for queries), and security testing (e.g., SQL injection testing).",
                "Execute the test cases systematically.",
                "Document the process, noting any bugs or issues encountered.",
                "Retest after fixing all the identified issues within the application. ",
                "Prepare a detailed test report summarising the test cases, execution results, bugs found, and fixes applied."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Database administration and quality assurance:</strong> With these skills, you can work in database administration and quality assurance roles that focus on maintaining data integrity and security",
                "<strong>Data migration projects:</strong> When you have hands-on practice in cloning and testing databases, you can apply the skills for data migration projects where you need to transfer data from one system to another without loss or corruption",
                "<strong>Database security audits:</strong> You can implement these security testing skills to identify vulnerabilities in the database and ensure data protection "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/vangav/vos_instagram_test'> 👉 Find the source code </Link> </p>
            </>
        )
    },
    {
        title: "Benefits of doing software testing projects for students ",
        intro: () => (
            <>
                <p>There are multiple benefits of doing software testing projects for students. One key factor is that you get hands-on practice with the software testing tools and mentor guidance on how to write scripts for the execution of various test cases. Here are a few more reasons for doing software testing projects.</p>
                <p>Understanding of real-world challenges </p>
                <p>Students will understand the potential challenges they can face while executing software testing methods and how to face such situations. You can enrol on a software testing course to learn software testing from senior software testers.</p>

                <p><b>Increase your work pace</b></p>
                <p>When you work on multiple projects, you will gain more experience with manual testing and the use of automated software tools, testing frameworks, programming skills, etc. This will improve your work pace and lead to faster delivery of test reports to the development team.</p>

                <p><b>Enhance professional image</b></p>
                <p>You can add these projects to your resume or share them on professional sites like LinkedIn, Indeed, Glassdoor, etc. This increases your chance of meeting potential recruiters. It is hard for freshers to get a high-salary job without work experience, but by showcasing your project work, you can land a good job. Another way of adding projects to your resume without making it look messy is adding your GitHub account link, where you add all your project works. </p>

                <p><b>Improved critical thinking and collaboration skills</b></p>
                <p>While executing these projects, you will face different scenarios. To handle them self-handedly or under expert advice, you need to use your brain, which improves critical thinking skills. Also, you can work in a group or with a software development team that improves your collaboration skills.</p>

                <p><b>Build trust and credibility </b></p>
                <p>If you can share your project’s details and source code on the internet, people in the same genre will start following you. This will help you build trust and credibility, making individual clients hire you as a freelancer. You can work for such clients to gain professional experience. </p>

                <p><b>Expand professional network </b></p>
                <p>When you work under industry specialists, the chances of getting connected to their professional network are high. They can also recommend you to their connections after carefully watching your skills and expertise for a few months. This increases your chance of landing an internship offer or a job opportunity. </p>
            </>
        )
    },
    {
        title: "Becoming a Software Testing expert in the next 100 days with Codegnan ",
        intro: "Codegnan offers a 100-day software testing course for interested learners with assured job placement. This course will cover all the basic theoretical knowledge and put an extra focus on hands-on training. It is a great option for you as the course focuses on Java + Selenium training, which is in high demand in the market. What additional benefits do you get? <br/><ul>" +
            [
                "The entire course fee is ₹50,000 (offline training mode) and covers your classroom practice costs",
                "The course is delivered in English language, which makes it suitable for local and global students to understand the sessions",
                "You can learn from experienced professionals who are alumni of top universities like IIT Madras and Stanford University or are working people in MNCs like Microsoft and Amazon",
                "The institute offers separate doubt-clearing sessions daily after the class ends, where you can ask all your queries to industry experts ",
                "Work on multiple live projects under different topics in software testing to improve your practical skills",
                "Get assured placement after course completion, along with getting an industry-accredited certificate from the institute"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    }
    
];

const nav_interview = [
    {
        name: "15 Data Structure and Algorithm (DSA) Project Ideas",
        link: "/data-structure-and-algorithm-project-ideas/"
    },
    {
        name:"C Language syllabus and subjects for 2024 (with free PDF)",
        link:"/c-language-course-syllabus"
    }
];

export default function JavaCoursePage() {
    return (
        <div>
            <Course_template head={headdata} course={coursedata} section={courseSections} coursep={course_brief} inter_links={nav_interview} />
        </div>
    );
}
