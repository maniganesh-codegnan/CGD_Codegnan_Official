import React from "react";
import Course_template from "./Course_template";
import reactjs_projects from '/course_images/react-j-project-ideas-illustration.png';
import { Link } from "react-router-dom";

import { Helmet } from 'react-helmet';

const headdata = {
    title: "15 React JS Projects for Beginners 2024",
    date: "March 14, 2024",
    img: reactjs_projects,
    intro: "React is the second most used web framework in the world. This JavaScript library helps web developers create rich, efficient front-end designs with less coding."
};

const coursedata = {
    title: " ",
    p: " ",
    linkText: " ",
    syllabusLink: "",
};

const courseSections = [
    {
        title: " ",
        intro: "",
        content: [
            // "Using String class",
            // "Using java.lang package",
            // "Working with Data & Time",
            // "Utility framework",
            // "Collection framework",
            // "I/O framework"
        ]
    }
];

const course_brief = [
    {
        title: " ",
        intro: () => (
            <>
                <div>
                    <img src="/syllabuspages/image-1024x521.png" alt="" width="100%"/>
                    <p> With over 5 years of experience training 30,000+ students at Codegnan, we believe hands-on training for ReactJS is the best tool to prepare a candidate for real-life challenges. It ensures you can implement theoretical knowledge into projects to solve existing problems.</p>
                    <p> This guide lists the top React JS projects for beginners and professionals that can help learners develop their skills and land high-quality jobs.</p>
                    <p> Best part?</p>
                    <p> We have asked our trainers and mentors to share their project ideas for this guide.</p>
                    <p className='ceo_details_in_syllabus'>
                        <p className="ceo_photo_details">
                            <img src="/syllabuspages/Sairam-Uppugundla-codegnan.jpg" alt="" width="30%" />
                            <p> <h4>FOUNDER’S NOTE</h4><br/>At codegnan, we have trained more than 30,000 students through our online and classroom training courses. And, one thing we ensure is that every training course is supported by hands-on projects. So, our students can learn by doing practical projects and live case studies.<br/>If you want to learn the <Link className="link-color" to='/react-js-in-vijayawada'> React JS training course from Vijayawada</Link>  , Hyderabad, or Bangalore, <Link className="link-color" to='/contact'> contact our team </Link> right here. <br/>Also, if you want to access a self-paced course, check out our <Link className="link-color" to='https://academy.codegnan.com/learn/ReactJS'>online React JS course</Link>  with 37 video lessons.</p>
                        </p>
                    </p>
                </div>
            </>
        )
    },
    {
        title: "React JS projects for beginners",
        intro: () => (
            <>
                <h3>1. Create a simple functional college website</h3>
                
                <img src="/syllabuspages/Create-a-simple-functional-college-website.png" alt="" width="100%"/>
                <p><strong> Difficulty level:</strong> Easy</p>

                <p>This project is specifically designed for beginners, where you will create a basic website for your college using ReactJS. The website will provide details for prospective students, faculty, and alumni associations. You can include sections about different academic programs,  campus life, important notices,  admission details, and contact information.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: " <ul>" +
            [
                "<strong> ReactJS fundamentals:</strong> Beginners will gain a solid understanding of the fundamentals of ReactJS, including its components, state, JSX syntax, event handling, and more complex React applications",
                "<strong> Component-based architecture:</strong> You will learn various components of React JS, including headers and footers, navigation bars, and content sections. They will also learn the concept of component-based architecture and its advantages in building modular and reusable user interfaces",
                "<strong> Responsive design:</strong> Students will develop skills in creating multiple responsive layouts and designs to adapt the website to different screen sizes and devices, ensuring a user-friendly experience across mobile, tablet and desktop platforms",
                "<strong> Client-side routing:</strong> If you want to add more complexity to the project, you can explore using React router for creating multiple pages for different sections of the website, enhancing usability and offering a seamless browsing experience for users",
                "<strong> External libraries and APIs:</strong> If you are willing to add extra functionality to your website, you may learn how to integrate external libraries and APIs like fetching data from external sources, implementing third-party components, adding social media widgets, etc. ",
                "<strong> Styling:</strong> You will gain experience in using CSS for styling your website and make it visually appealing and user-friendly"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul> "+
                [    
                    "<strong> Set up your React environment:</strong> Install Node.js and npm (or yarn) on your computer. Use create-react-app to create a new React project.",
                    "<strong> Gather your college information:</strong> Collect text, images, and links related to your college’s programs, faculty, student life, and contact details.",
                    "<strong> Plan your website structure:</strong> Decide on the main sections you want to include, like “About,” “Academics,” “Admissions,” and “Contact.”",
                    "<strong> Build React components:</strong> Create reusable components for each section of your website to facilitate organisation and future updates.",
                    "<strong> Manage website content:</strong> Store your college information (text, links, and image URLs) in JavaScript objects or arrays for easy access within your components.",
                    "<strong> Display your website content:</strong> Render your college information dynamically using React, ensuring a clear and informative layout.",
                    "<strong> Style your website (optional):</strong> Use CSS to add visual appeal to your website, including colours, fonts, and layouts.",
                    "<strong> Routing (optional):</strong> To explore further, you can learn how to implement React Router to create separate pages for different sections (e.g., separate pages for each academic program)."
                ].map((item, index) => (
                    "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
                )).join('') +
                "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul> "+
                [    
                    "<strong>Displaying vital information:</strong> Colleges can use such websites to display vital information and announcements, admission details, campus life, interactive map of the college campus, and contact details",
                    "<strong>Develop Alumni relations:</strong> An institute can create a simple college website to stay connected with their alumni association, access their directories, update contact information, and allow them to participate in alumni events and reunions. ",
                    "<strong>Academic resources and research:</strong> A College website can be a great place for sharing academic resources like digital repositories, research databases, and scholarly journals. Students can access these platforms to search books, articles and other study materials. "
                    
                ].map((item, index) => (
                    "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
                )).join('') +
                "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/I2UBjN5ER4s?si=qPT8pTh2orsohhcy" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>

                <p><Link className="link-color" to='https://github.com/sanajitjana/My-Portfolio-v1'> 👉 Find the source code for this project</Link>   </p>
            </>
        )
    },
    {
        title: "2. Creating a multi-user website blog",
        intro: () => (
            <>
                <img src="/syllabuspages/Build-a-multi-users-website-blog.png" alt="" width="100%"/>

                <p><strong>Difficulty level:</strong> Easy</p>

                <p>This project involves building a website where users can create and manage their favourite blog posts. It includes the ability to create, edit, and delete blog posts.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: " <ul>" +
            [
                "<strong> Knowledge of React JS:</strong> Students will get hands-on training on ReactJS fundamentals, including state management, components, props, and more",
                "<strong> Component creation:</strong> You can learn to design and implement a blog interface using a component-based architecture, breaking down the UI into reusable React components such as navigation bars, user profiles, and comment sections.",
                "<strong> Data management:</strong> Learners will know how to manage data related to blog posts using JavaScript objects or arrays. ",
                "<strong> List rendering:</strong> You will practice displaying a list of blog entries dynamically using the rendering features of ReactJS. ",
                "<strong> Styling:</strong> Students will gain experience in styling a blog with CSS to personalise its look and feel. "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: "<ul>" +
            [
                "<strong> Set up your React environment:</strong> Install Node.js and npm (or yarn) on your computer. Use create-react-app to create a new React project.",
                "<strong> Gather your content:</strong> Collect links and information for your favourite articles and websites, or write your own short blog posts.",
                "<strong> Create React components:</strong> Build components for individual blog entries, displaying titles, descriptions, and thumbnail images (if available).",
                "<strong> Manage your blog data:</strong> Create a system to store your blog content (titles, links, descriptions) using JavaScript objects or arrays.",
                "<strong> Render your blog:</strong> Use React’s rendering functionalities to dynamically display your list of blog entries.",
                "<strong> Style your blog (optional):</strong> Use CSS to add visual appeal to your blog, including layout, fonts, and colours."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Personal Blogging Platforms:</strong> You can use these for managing your personal blogs, creating and editing posts, and organising content effectively",
                "<strong>Educational institution:</strong> Institutions can implement blog features for students and faculty to share class notes, project updates, research findings and educational content.",
                "<strong>Branding:</strong> Companies can use a blog to educate their target consumers on multiple topics and establish themselves as an authority in the market to attract more consumers "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/c7aiB2uqQoc?si=GXA7rFFB003tjf57" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>

                <p> <Link className="link-color" to='https://github.com/MohitSojitra/react-blog-website'> 👉 Find the source code for this project</Link></p>

            </>
        )
    },
    {
        title: "3. Build an interactive resume using React JS ",
        intro: () => (
            <>
                <img src="/syllabuspages/Build-an-interactive-resume-using-React-JS.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Easy</p>
                <p>This project aims to build an interactive resume using ReactJS that allows users to enter their work experience, educational qualifications, skills, and other details. It can also be exported to PDF or printable documents.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Proficiency in React JS:</strong> Students will understand the fundamentals of React JS, including its components, props, state management, and JSX syntax.",
                "<strong>Component-based architecture:</strong> You will learn to implement component-based architecture and break down the user interface into reusable and manageable components to design and implement a resume builder interface",
                "<strong>Form handling and validation:</strong> While working on the project, you will learn how to implement form handling and validation features, including error handling, input validation, and feedback mechanism",
                "<strong>Dynamic content rendering:</strong> You will understand the process of dynamically rendering and updating content on the resume preview based on user input, allowing users to see real-time changes while they fill out the form and customise their resume layout and content.",
                "<strong>Exporting functionality:</strong> For complex resume builder projects, he will also learn how to export your resume as a PDF or printable document"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "<strong>Set up your React environment:</strong> Install Node.js and npm (or yarn) on your computer. Use create-react-app to create a new React project.",
                "<strong>Design your resume layout:</strong> Sketch out the structure of your resume, including sections for your contact information, skills, work experience, and education.",
                "<strong>Build React components:</strong> Create reusable components for each section of your resume, allowing for easy editing and organisation.",
                "<strong>Develop forms:</strong> Implement forms to capture your resume information like job titles, companies, educational institutions, and skills.",
                "<strong>Manage your resume data:</strong> Use React’s state management to keep track of your resume content as you enter it.",
                "<strong>Display your resume:</strong> Render your resume information dynamically using React, ensuring a visually appealing and well-structured layout.",
                "<strong>Exporting your resume (optional):</strong> You can explore libraries or techniques to export your resume as a PDF or allow for easy printing."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Personal use:</strong> Users can create their resumes as per the job they are looking for",
                "<strong>Job searching platforms:</strong> These platforms can implement a resume builder to help candidates create impressive resumes before applying for a job",
                "<strong>Educational institutions:</strong> An institution can use resume builder tools to help the students and alumni create professional resumes",
                "<strong>Freelancer platforms:</strong> Such marketplaces often provide resume builders for freelancers to showcase their expertise, skills, and project history helping them secure contracts and project opportunities"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <h4>Source codes and resources:</h4>
                
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/Tgo6CasaM0E?si=imCL8MUMPege5gxQ" 
                title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>

                <p> <Link className="link-color" to='https://github.com/Yagnik-Gohil/Resume-Builder'> 👉 Find the source code</Link></p>

                <h3>React JS projects for intermediate</h3>
            </>
        )
    },
    {
        title: "4. Online appointment booking application",
        intro: () => (
            <>
                <img src="/syllabuspages/Online-appointments-booking-application.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Medium</p>
                <p>This project focuses on building an online booking application that helps users schedule their appointments and manage them online. You will need to create reusable components to display calendars, user forms, and appointment details.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Building reusable components:</strong> You will get a good understanding of creating components that can be used and reused throughout your project and are useful for building complex user interfaces with React ",
                "<strong>State management:</strong> This project will teach you how to manage different states effectively within the React component, as it requires you to keep track of user selections, appointments, and other user information.",
                "<strong>Data interaction:</strong> An online booking system needs to store and retrieve data, so you will learn how to use API or backend services to fetch and store booking information on your system, giving you valuable experience with data handling in React applications",
                "<strong>Conditional rendering:</strong >You will understand different conditions and rendering techniques in React by hiding and showing user interface (UI) elements based on user actions, and appointment status."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "<strong>Set up your React Development Environment:</strong> Install Node.js and a code editor like Visual Studio Code. There are many tutorials online to guide you through this.",
                "<strong>Learn React Fundamentals:</strong> Before diving in, make sure you have a solid grasp of React JS basics like components, props, state, and lifecycle methods. There are many resources available online, such as the official React documentation https://legacy.reactjs.org/docs/getting-started.html.",
                "<strong>Plan Your Features:</strong> Decide on the functionalities you want to include. Start with a basic booking system and gradually add features like user logins, appointment cancellations, and notifications.",
                "<strong>Break it Down:</strong> Break down the application into smaller, manageable components. This will make the development process more efficient.",
                "<strong>Test and Refine:</strong> Continuously test your application as you build. This will help identify and fix bugs early on."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Doctors appointment booking:</strong> Hospitals and clinics can use an online booking system to allow patients to book slots with their respective doctors.",
                "<strong>Class registration:</strong> Educational institutions can use an online booking system for students to register for respective online classes, which streamlines the registration process and frees up administrative employee time",
                "<strong>Event ticket booking:</strong> An online booking system allows event organisers to manage ticket sales and registration for events, conferences, or concerts",
                "<strong>Service booking:</strong> Service industry like beauty salons, cosmetologists, dermatologists, dentists, etc., can implement these systems to track customer booking and ensure there is no overlapping of service slots"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Source codes and resources: ",
        intro: () => (
            <>

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/RkWpJ4XUHuw?si=6Jf4Qe-1SiB5fg8R" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>

                <p> <Link className="link-color" to='https://github.com/Qloapps/QloApps'> 👉Find the source code for this project </Link></p>
            </>
        )
    },
    {
        title: "5. Build an interactive online banking application",
        intro: () => (
            <>
                <img src="/syllabuspages/Build-an-interactive-online-banking-application.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Medium</p>
                <p>This project aims to build an interactive online banking application using React JS that will allow users to log in to the system, view account balances, and make simple transactions like deposits or withdrawals. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Component creation:</strong> You’ll break down the application into reusable components like login forms, account displays, and transaction interfaces.",
                "<strong>State management:</strong> You’ll use React’s state management features to track user data, such as account information and balances.",
                "<strong>Data fetching (optional):</strong> If you choose to implement transactions, you’ll practice fetching data (simulating communication with a bank server) to update account balances.",
                "<strong>User Interface (UI) libraries (optional):</strong> You can explore using UI libraries like Bootstrap or Material-UI to style your application and make it visually appealing."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "<strong>Set up your development environment:</strong> Install Node.js and a code editor like Visual Studio Code. You can find resources to set these up online.",
                "<strong>Create a React project:</strong> Use tools like Create React App (CRA) to quickly set up the basic project structure.",
                "<strong>Design your components:</strong> Sketch out the different screens your application will have (login, account view, transactions). Then, translate those designs into reusable React components.",
                "<strong>Implement functionalities:</strong> Focus on core features like login, displaying account information, and (optionally) transactions. Remember, this is a simulation, so data interaction will likely be mocked for learning purposes.",
                "<strong>Style your application (optional):</strong> Use CSS or UI libraries to make your application visually appealing and user-friendly."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Money transfer:</strong> This app can be used to transfer money from one bank account to another smoothly removing the hassle of travelling to banks for money transfers ",
                "<strong>Bill payments and mobile recharge:</strong> Users can utilise the application for bill payments like credit card bills, utility bills, and recharge their mobile phones from the comfort of their home.",
                "<strong>Cashless shopping:</strong> Users can go around shopping without carrying cash and pay at shops using this app, which reduces the chance of losing money on the way or pickpocketing."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/HoRA-zLuMf8?si=yWJKV5CB9WfqAINr" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>

                <p> <Link className="link-color" to='https://github.com/jeffdelara/banking-app' > 👉 Find the source code for this project</Link> </p>
            </>
        )
    },
    {
        title: "6. Online medical shopping system",
        intro: () => (
            <>
                 <img src="/syllabuspages/Online-Medical-Shopping-System.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Medium</p>
                <p>This is a web application that will allow a user to find necessary medicines and purchase them at a set price. It mainly includes features like user authentication, product browsing, shopping cart management, and order processing. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Component-based architecture:</strong> Learners will understand how to break down the application into reusable React components, such as navigation bars, user authentication forms, and product cards.",
                "<strong>State management:</strong> They will gain experience in managing application states within ReactJS applications using built-in states and props of React JS, as well as knowledge of external libraries like Redux and Context API.",
                "<strong>Client-side routing:</strong> Learners will understand how to implement client-side routing to enable navigation between multiple pages of the application, such as product details, shopping cart, etc.",
                "<strong>API integration:</strong> The project will teach students how to fetch data from a backend server with RESTful APIs and handle multiple asynchronous operations to update the application state, such as medical product listing and order processing."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "<strong>Set up your React environment:</strong> Install Node.js and npm (or yarn) on your computer. Use create-react-app to create a new React project.",
                "<strong>Design your user interface (UI):</strong> Sketch out the layout of your application, including product listings, product details, and a shopping cart section.",
                "<strong>Build React components:</strong> Create reusable components for products, categories, and other UI elements.",
                "<strong>Manage product data:</strong> Create a system to store and manage product information (name, description, price, image). This can be done initially with simple JavaScript objects.",
                "<strong>Implement functionalities:</strong> Develop features like adding items to the cart, displaying cart contents, and (optionally) a checkout flow (remembering disclaimers about real transactions).",
                "<strong>Style your application (optional):</strong> Use CSS to style your application and make it visually appealing."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Order medicines online: </strong>Users can order their medicines online and get medicines delivered at home. ",
                "<strong>Track medical history:</strong> To place orders, users need to upload their prescriptions, which allows them to track their medical history.",
                "<strong>Online consultation:</strong> Some systems can include online doctor consultation features that help patients meet doctors whenever needed.",
                "<strong>Drug information:</strong> These systems contain drug information that gives users an idea about the medicine they are purchasing. ",
                "<strong>Medicine reminders:</strong> People often forget to shop for medicines on time, and these systems can remind users when to buy medicines."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/p8MPTXLCIWU?si=nzsVvdulouJEnnKo" title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>

                <p> <Link className="link-color" to='https://github.com/hackstarsj/DjangoMedicalStoreFrontEndInReactJS' > 👉 Find the source code for this project</Link></p>
            </>
        )
    },
    {
        title: "React JS projects for final-year students",
        intro: () => (
            <>
                <h3>7. Hospital management system</h3>
                <img src="/syllabuspages/Hospital-Management-System.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Hard</p>
                <p>This project helps learners create software that helps hospitals run their operations smoothly, including patient management, appointment scheduling, inventory management, staff management, billing, reporting and analytics</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Data handling and manipulation:</strong> Learners will gain an understanding of data handling with hospital management systems as they work with patient data, appointment information, and staff records or more. They will also learn how to implement libraries like Redux and Context API to handle complex data flows in interactions between multiple parts of the application.",
                "<strong>Component design and structure:</strong> This project involves building reusable components for multiple functionalities like creating appointment forms, doctor profiles, and patient dashboards. So you will learn how to create these functionalities and improve your ability to design a well-structured React application",
                "<strong>Routing:</strong> You will need to implement different functionalities for multiple user roles, which requires knowledge of React routing to manage navigation between different sections of the application. You will also learn how to use authentication libraries to restrict access based on user roles.",
                "<strong>State management:</strong> Learners will gain an understanding of how to effectively handle dynamic data, user interactions, and complex workflows using the in-built state management features of React."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "<strong>Set up your React environment:</strong> Install Node.js and npm (or yarn) on your computer. Use create-react-app to create a new React project.",
                "<strong>Plan your functionalities:</strong> Decide on the core functionalities you want to include, like patient registration, appointment scheduling (consider disclaimers about real bookings), and patient information display.",
                "<strong>Design user interfaces (UIs):</strong> Sketch out separate UIs for patients and potentially doctors (if including appointment scheduling).",
                "<strong>Build React components:</strong> Create advanced and reusable components for forms, data displays, and potentially doctor dashboards.",
                "<strong>Manage patient data:</strong> Implement a system to store and manage patient information securely (remember, this is a learning project, not a real system). You can explore solutions like Redux or Context API for complex data management.",
                "<strong>Develop functionalities:</strong> Based on your plan, create functionalities like patient registration forms, displaying patient information (with disclaimers), and potentially appointment scheduling (again, with disclaimers).",
                "<strong>Routing and user authentication (optional):</strong> If you want to push your skills, explore React Router to create separate interfaces for patients and doctors and potentially implement basic user login functionalities.",
                "<strong>Fetching data (optional):</strong> As an advanced step, delve into fetching data from a backend server (potentially using an API) to simulate real-time information retrieval (e.g., doctor appointments)."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Patient management:</strong> Hospitals and clinics use this system to manage patient records, including medical history, diagnosis, treatment plans, and medications. The system can help institutes with efficient patient registration, admission, discharge, transfer processes, and more to streamline patient care and improve workflow efficiency.",
                "<strong>Appointment scheduling:</strong> This project helps patients to schedule and manage patient appointments for consultations, surgeries, diagnostic tests, and other procedures. It allows users to check appointment availability, send reminders to patients, and manage appointment calendars for medical professionals. ",
                "<strong>Healthcare inventory management:</strong> This project will allow healthcare management to keep track of its inventory and supplies of medical equipment, pharmaceuticals, and other healthcare products. The system can track inventory levels, generate purchase orders, and ensure adequate amounts of medical supply availability. "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <iframe 
                width="560" 
                height="315" src="https://www.youtube.com/embed/nTHVnhsgIYU?si=kc5wz27aSGd2blUp" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>

                <p> <Link className="link-color" to='https://github.com/opensource-emr/hospital-management-emr'> 👉 Find the source code for this project</Link></p>
            </>
        )
    },
    {
        title: "8. Building a clone page of the Paytm payment platform ",
        intro: () => (
            <>
                <img src="/syllabuspages/Building-a-clone-page-of-Paytm-payment-platform.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Hard</p>
                <p>This project will guide learners to build a simplified version of the Paytm payment platform using ReactJS. It will focus on building a clone of the UI layout and functionality for basic features like money transfers, bill payments, and mobile recharge.</p>
            </>

        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Component Creation:</strong> Build reusable React components for different sections of the Paytm UI, like the header, navigation bar, service tiles, and forms.",
                "<strong>State Management:</strong> Manage user interactions like inputting recharge amount or selecting a bill category using React’s state management features.",
                "<strong>Conditional Rendering:</strong> Conditionally display different UI elements based on user actions, like showing specific recharge options for a chosen mobile provider.",
                "<strong>API Integration:</strong> Students will integrate backend APIs or mock APIs to fetch and display data such as product listings, pricing, and user information, simulating the functionality of the original Paytm website and familiarising themselves with asynchronous data fetching and handling in React.",
                "<strong>User Authentication and Authorization:</strong> They may implement user authentication and authorisation features to simulate user login, registration, and account management functionalities, providing a personalised experience and ensuring secure access to user-specific data and features.",
                "<strong>Form Handling and Validation:</strong> Students will gain experience in implementing form handling and validation features, including input validation, error handling, and feedback mechanisms for forms such as the payment form, ensuring data integrity and user-friendly interactions.",
                "<strong>Styling with CSS:</strong> Apply CSS to style your components and achieve Paytm’s visual look and feel."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "<strong>Set up your development environment:</strong> You’ll need Node.js and npm (or yarn) installed on your computer. Several tools like Create React App can help you quickly set up a React project.",
                "<strong>Design the UI:</strong> Sketch out the different screens and functionalities you want to include in your Paytm clone. This helps visualise the component structure.",
                "<strong>Build React Components:</strong> Start coding reusable components for various UI elements like the header, navigation, service cards, and input forms.",
                "<strong>Implement State Management:</strong> Use React’s state management features like useState or Redux (if comfortable) to handle user interactions with the app.",
                "<strong>Style with CSS:</strong> Apply CSS styles to your components to achieve the desired visual design that resembles the Paytm app."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Build a payment app:</strong> This project will teach you how to build a payment app similar to Paytm that allows smooth money transfers",
                "<strong>Experimentation purposes:</strong> This Paytm clone page creation project can be used for experiment with new features in the fintech industry "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/7yimpk_cgps?si=trPtS5kZbt4b99vr" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>

                <p> <Link className="link-color" to='https://github.com/rishabhthakur11/paytm-UI-clone'>👉 Find the source code for this project </Link></p>
            </>
        )
    },
    {
        title: "9. Building a personal portfolio website",
        intro: () => (
            <>
                <img src="/syllabuspages/Building-a-personal-portfolio-website.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Hard</p>
                <p>This project is about creating a personal portfolio website using ReactJS where you can showcase your skills, expertise, experience, and project history to potential customers, employers, or partners. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Component Creation:</strong> You’ll break down your portfolio into reusable React components like “About Me,” “Skills,” and “Projects.”",
                "<strong>Styling with CSS:</strong> Learn how to style your components using CSS to create a unique and professional look for your portfolio.",
                "<strong>Data Management:</strong> Explore ways to manage your project information and details within React components.",
                "<strong>Interactive Features:</strong> You can add interactive elements like carousels for project images or a contact form for visitors to reach you.",
                "<strong>State Management:</strong> Through managing application state within the portfolio page, students will understand how to handle dynamic content, user interactions, and navigation transitions effectively using React’s state management features.",
                "<strong>Routing:</strong> Students will implement client-side routing using React Router to enable navigation between different sections of the portfolio website, such as projects, about me, resume, and contact pages, providing a seamless and intuitive user experience."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: () => (
            <>                
                <h4>Set up your Development Environment:</h4>
                <p>1. Install Node.js and a code editor like Visual Studio Code. <br/>
                   2. Use create-react-app to create a new React project.</p>

                <h4>Build your Portfolio Components:</h4>
                   <p> 1. Create separate React components for different sections of your portfolio (About, Skills, Projects, etc.).<br/>
                       2. Focus on clear structure and informative content within each component.</p>

                <h4>Style your Portfolio:</h4>
                   <p> 1. Use CSS to style your components and create a visually appealing layout.<br/>
                       2. Explore online resources or pre-built themes for inspiration.</p>
                
                <h4>(Optional) Add Functionality:</h4>
                   <p> 1. Implement features like carousels for displaying project images, or a contact form for visitors to reach you.<br/>
                       2. Consider using external libraries for functionalities like animations or forms.</p>

                <h4>Deploy your Portfolio:</h4>
                <p>Use services like Netlify or Vercel to host your React application online and share your portfolio with the world!</p>
            </>
        )
    },

    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Job searching and career development</strong>: This portfolio page will showcase your skills, expertise, and achievements, helping you land a job or attract clients.",
                "<strong>Networking and personal branding:</strong> You can use this portfolio page to expand your network and showcase your skills and contributions in the domain to establish yourself as an authority for personal branding. ",
                "<strong>Pitching: </strong>This page will allow you to showcase business products and services while pitching for investment and effectively communicate your value proposition and startup potential to reach higher limits."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/vijendra-code/Pyhton-Web-Scraping-from-a-Dynamic-Website/blob/main/Web%20Scraping%20from%20a%20dynamic%20website%20using%20python.ipynb'> 👉 Find the source code for this project</Link> </p>
                <h3>React JS projects with source code</h3>

            </>
        )
    },

    {
        title: "10. Life Line – A Health Assistance Web Application",
        intro: () => (
            <>                
                <p>Life Line is a health assistance web application created with ReactJS  that offers multiple health-related features like a symptom checker, health information library, vitals checker, appointment management, etc. You can also add complex features like personalised health tips or integration with wearable devices. For the project, you need knowledge of HTML & CSS, JavaScript, a solid grasp of React concepts, use of APIs, and React developer tools. </p>
                <p> <Link className="link-color" to='https://github.com/topics/healthcare-website-react'>  Find the source code for this project</Link> </p>

            </>
        )
    },
    
    {
        title: "11. Online auction application",
        intro: () => (
            <>
                <p>This project is for learners with intermediary skills where you create an application for online auctioning of goods. Users can browse for items up for auction, view details and images, and participate in real-time bidding. It requires basic knowledge of HTML, CSS, and JavaScript, a solid grasp of ReactJS (including component architecture, state management, and event handling), experience with UI library (Bootstrap or Material UI), node.js and npm, and real-time communication library (like Socket.IO). This app can be used by local communities or charities to host online bidding programs.</p>
                <p> <Link className="link-color" to='https://github.com/sanjaymusale/Online_Auction'>  Find the source code for this project</Link> </p>
            </>
        )
    },
    {
        title: "12. Building calculator " ,
        intro: () => (
            <>

                <p>This is a beginner-friendly ReactJS project that aims to create a simple calculator which can handle user input, perform easy arithmetic operations, and display real-time results. The project will give you knowledge about state management and event handling in React,  as well as how to create dynamic user interfaces. It requires having basic knowledge of HTML, CSS, and JavaScript, an understanding of mathematical operations, and practice using npm or yarn, IDE or text editor, and Bootstrap or Material UI. </p>
                <p> <Link className="link-color" to='https://github.com/andrewagain/calculator'>  Find the source code for this project</Link> </p>
            </>
        )
    },
    {
        title: "13. Creating weather app" ,
        intro: () => (
            <>

                <p>This project will help you build a weather app that displays real-time weather information according to your location. To build the app, you must have knowledge of basic HTML, CSS, & JavaScript, and an understanding of API & JSON. You will also use React, npm (Node Package Manager) or yarn (Alternative package manager), OpenWeatherMap API, Axios, IDE or text editor, and Bootstrap for styling. </p>
                <p> <Link className="link-color" to='https://www.knowledgehut.com/blog/web-development/routing-in-reactjs'>  Find the source code for this project</Link> </p>
            </>
        )
    },
    {
        title: "14. Building a stopwatch" ,
        intro: () => (
            <>
                It is another beginner-friendly ReactJS project that creates a stopwatch measuring elapsed time. You can implement your knowledge of state management and event handling of ReactJS in this project. However, before you start building a stopwatch make sure you have knowledge in HTML, CSS, and JavaScript, use of IDE, Bootstrap, and npm (Node Package Manager).
                <p></p>
                <p> <Link className="link-color" to='https://github.com/msanatan/react-stopwatch'>  Find the source code for this project</Link> </p>
            </>
        )
    },
    {
        title: "15. Video call app" ,
        intro: () => (
            <>

                <p>This is an advanced ReactJS project that aims at building a video calling app with basic features like screen sharing, chat, and call recording. It requires proficiency in React, HTML, CSS, JavaScript, and knowledge of WebRTC (Web Real-Time Communication) technology, media servers, NAT traversal, and signalling protocols. There are multiple other things you need to know before developing such an app.</p>
                <p> <Link className="link-color" to='https://github.com/nguymin4/react-videocall'>  Find the source code for this project</Link> </p>
            </>
        )
    },
    {
        title: "Execute React JS projects with expert ReactJS mentors at codegnan" ,
        intro: () => (
            <>
                <p>At Codegnan, you will learn  <Link className="link-color" to='/react-js-in-vijayawada'> ReactJS </Link> under the mentorship of  <Link className="link-color" to='https://www.linkedin.com/in/ravi-siva-ram-teja-nagulavancha-053199253/?originalSubdomain=in'>Ravi Siva Ram Teja Nagulavancha, </Link> an IT professional with 4+ years of experience in this domain and teaching thousands of students on frontend and backend technologies. Learners will get good exposure to ReactJS live projects under his mentorship designed for beginners to professionals at Codegnan that sharpens their skills and makes them job-ready. </p>

                <p>By the end of every module, learners can implement their theoretical knowledge into projects. This allows them to understand clearly what they have learned and how it works in real-life projects. Upon successful completion, students will receive an industry-recognised certification that proves their abilities. </p>

            </>
        )
    },
    {
        title: "Benefits of doing React JS projects for students" ,
        intro: () => (
            <>
                <h3>1. Hands-on experience with ReactJS</h3>
                <p>Having theoretical knowledge is not sufficient for students enrolling on ReactJS programs. They need to acquire hands-on training to apply that knowledge to real-time projects. This not only clears all their doubts but also develops their practical skills.  Additionally, while doing these projects, students will encounter multiple problems that they can solve under mentor guidance and develop a good grasp of ReactJS.</p>

            </>
        )
    },
    {
        title: "2. Build your professional portfolio" ,
        intro: () => (
            <>
                <p>Learners can add these projects or showcase their skills in developing a simple ReactJS application. You can add your difficulties and achievements in completing the project that can set you apart from the competition. This will improve their professional portfolio, allowing them to land a job as per their quality and abilities. Also, if you want to start as a freelancer, your projects are the social proof of your abilities, and you can attract more clients.  </p>

            </>
        )
    },
    {
        title: "3. Improve creative skills" ,
        intro: () => (
            <>
                <p>Once you start doing a project, you can put your ideas into codes that will create unique and visually appealing user interfaces. It will create interest among students in implementing additional features and design elements to create an easy-to-use application for users. </p>

            </>
        )
    },
    {
        title: "4. Enter into the professional network " ,
        intro: () => (
            <>
                <p>Students usually learn ReactJS projects under experts or mentors. If they can finish up projects smoothly or mentors find them extraordinary, they can connect students with other people within their network. This opens up the door to better opportunities and land a job in top companies.  </p>
                <p>👉 Find related <Link className="link-color" to='/python-projects'> Python projects for beginners.</Link> </p>

            </>
        )
    },
    ,
    {
        title: "Become a React JS expert in the next 30 days with codegnan" ,
        intro: () => (
            <>
                <p>  <Link className="link-color" to='/react-js-training-course-in-vijayawada'> Codegnan </Link> offers a 30-day ReactJS program for learners who want to start their career in the software development industry in 2024. This program comprises multiple modules covering the basic knowledge of ReactJS, and to implement your theoretical knowledge, Codegnan experts conduct live projects. ReactJS offline classes are available at Vijayawada, and everyone globally can opt for their online classes.</p>

                <p>The ReactJS course fee is ₹7,999, available for a limited period. Learn more about <Link className="link-color" to='/react-js-training-course-in-vijayawada'> ReactJS classroom training facilities in Vijayawada </Link>, and download the brochure for more information.  </p>
                <p>You can attend the live interactive ReactJS classes by Codegnan conducted by experienced trainers. They also provide doubt-clearing sessions to ensure you can understand every topic and implement them into real-world projects.</p>

                <p>You can also enrol in their <Link className="link-color" to='job_accelerator_program'>Job Accelerator Program</Link>, which is a 100-day training program conducted by Codegnan experts. You can get a 4-month internship letter on successful completion of this program. Thus, it can be a stepping stone for greater opportunities in future. </p>
            </>
        )
    }
  
];

const nav_interview = [
    {
        name: "Python Projects for Beginners 2024 (Shared by Experts)",
        link: "/python-projects"
    },
    {
        name:"C Language syllabus and subjects for 2024 (with free PDF)",
        link:"/c-language-course-syllabus"
    }
];

export default function JavaCoursePage() {
    return (
        <div>
            <Helmet>
                <title>15 React JS Projects for Beginners 2024 - Codegnan</title>
                <meta name="description" content="This guide lists the top React JS projects for beginners and professionals that can help learners develop their skills and land high-quality jobs." />
            </Helmet>
            <Course_template head={headdata} course={coursedata} section={courseSections} coursep={course_brief} inter_links={nav_interview} />
        </div>
    );
}
