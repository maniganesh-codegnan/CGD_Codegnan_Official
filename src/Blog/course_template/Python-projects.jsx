import React from "react";
import Course_template from "./Course_template";
import python_projects from '/course_images/python-project.webp';
import { Link } from "react-router-dom";

const headdata = {
    title: "Python Projects for Beginners 2024 (Shared by Experts)",
    date: "March 8, 2024",
    img: python_projects,
    intro: " Our trainers and mentors at codegnan have trained more than 30,000 students and helped them complete hands-on Python projects and work on live case studies.\n In fact, our online and offline Python training programs offer a bunch of interesting Python projects designed for beginners, intermediate and professionals.\n Based on our training experience, we have curated the best Python project topics and ideas for you.\n Best part? \n We have shared guidance to complete each project along with related source codes and resources.\n Let’s start it."
};

const coursedata = {
    title: " ",
    p: " ",
    linkText: " ",
    syllabusLink: ""
};

const courseSections = [
    {
        title: " ",
        intro: " ",
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
                    <p><b>👉 Announcement:</b> If you’re looking for full-stack Python training (classroom) in <Link className="link-color" to='/python-full-stack-developer-in-hyderabad'> Hyderabad </Link>, <Link className="link-color" to='/python-full-stack-developer-in-banglore'> Bangalore </Link> Hyderabad, Bangalore, or Vijayawada, contact our experts and get career consultation. Otherwise, we have a <Link className="link-color" to='https://academy.codegnan.com/learn/Python'> FREE online Python course </Link>  (135 lessons) that you can start watching right away.</p>
                </div>
            </>
        )
    },
    {
        intro: () => (
            <>
                <h3>Table of contents</h3>
                <ul>
                    {[
                        { name: "Python projects for beginners", link: "/" },
                        { name: "Python projects for intermediate", link: "/" },
                        { name: "Python projects for final-year students", link: "/"},
                        { name: "Python projects with source code", link: "/"},
                        { name: "Execute Python projects with expert Python mentors at codegnan", link: "/" },
                        { name: "Benefits of doing Python projects for students", link: "/" },
                        { name: "Become a Python expert in the next 30 days with codegnan", link: "/" }
                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <br />
            </>
        )

    },
 
    {
        title: "Python projects for beginners",
        intro: () => (
            <>
                <h3>1. QR Code Generator </h3>
                
                <img src="/syllabuspages/Build-QR-Code-generator-using-Python.png" alt="" width="100%"/>
                <p><strong> Difficulty level:</strong> Easy</p>

                <p>This project focuses on creating your QR codes of different shapes, sizes, and colours using Python. You can insert text or website address, and the program will generate a QR code image that different devices can scan.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: " : <br/><ul>" +
            [
                "<strong> Understanding of QR Code:</strong> Learners will understand the structure and components of different QR codes and their implementation",
                "<strong> Working with Python libraries:</strong> You can work with a popular Python library function, “qrcode”, for generating QR code.",
                "<strong> Knowledge of Python data types:</strong> Learners will get knowledge of how to convert different data types into a format that will be easy to encode in your QR code.",
                "<strong> Saving and displaying images:</strong> You will learn to save the generated QR code image as a file and display it on the screen."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul> "+
                [    
                    "<strong>Install Python:</strong> Ensure you have Python installed on your computer. You can download it for free from https://www.python.org/downloads/.",
                    "<strong>Install the qrcode library:</strong> Open your terminal or command prompt and type pip install qrcode. This installs the necessary library for your project.",
                    "<strong>Write the Python code:</strong> Use the qrcode library functions to:",
                        "Take user input for the text or URL to be encoded.",
                        "Create a QR code object with the desired data.",
                        "Save the generated QR code as an image file (like PNG or JPG).",
                    "<strong>Run the script:</strong> Execute your Python code, which will generate the QR code image based on your input.",
                ].map((item, index) => (
                    "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
                )).join('') +
                "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul> "+
                [    
                    "<strong>Creating interactive campaigns:</strong> You can add a QR code with your marketing materials that creates a sense of mystery among your target consumers, encouraging them to scan the codes to see what is waiting for them. ",
                    "<strong>Ensuring in-person processes are contactless:</strong> For certain functions like touching a menu to learn about the price of products in a mall, people can scan these QR codes and get all the details available on their phones and other devices. This reduces the need for touching things and saves people from transmissible viruses.",
                    "<strong>Sharing your business address:</strong> Businesses can direct customers, suppliers, or new employees to their location by sharing QR codes. By scanning these codes, anyone can locate the business address rather than search them manually on Google Maps.",
                    "<strong>Streamlining processes for business employees: </strong> You can use a QR code on each of your products so that employees can access details of each product efficiently on their smartphones and devices. "
                    
                ].map((item, index) => (
                    "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
                )).join('') +
                "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='/'> 👉 Find the source code for this project</Link>   </p>

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/IUQVO97zcE0?si=alskd-2modcvNesS" title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "2. Bulk File Rename Tool",
        intro: () => (
            <>
                <img src="/syllabuspages/Build-QR-Code-generator-using-Python-2.png" alt="" width="100%"/>

                <p><strong>Difficulty level:</strong> Easy</p>

                <p>This project helps you create a bulk file rename tool that can rename multiple files in your folder with a specific naming pattern and organise them efficiently.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: " <ul>" +
            [
                "<strong>File handling and management:</strong> You can gain experience in handling different files and directories with Python programming, along with reading file metadata, renaming files, and deleting files.",
                "<strong>Understanding Python Regex:</strong> Learners will know about Python Regular Expressions (Regex) and applying the pattern to match and manipulate different file names for advanced search and rename operations, including string manipulation and iteration through files",
                "<strong>Error handling and validation:</strong> Learners will learn to implement different error handling mechanisms to validate user inputs, and offering informative error messages to users",
                "<strong>Knowledge of CLI development:</strong> With this project, you can develop CLI (command-line interface) development skills to create a user-friendly interface for the tool."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: "<ul>" +
            [
                "<strong>Install Python:</strong> Ensure you have Python installed on your system.",
                "<strong>Write the Python code:</strong> Utilize libraries like “os” to interact with the operating system and rename files. Your code will:",
                "Allow you to specify the directory containing the files to be renamed.",
                "Define a pattern for the new filenames (e.g., adding a prefix or numbering the files).",
                "Iterate through each file in the directory and rename it based on the defined pattern.",
                "<strong>Run the script:</strong> Execute your Python code and watch it organise your files according to your defined naming scheme."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong> Digital asset management:</strong> Digital firms handling bulk amounts of digital files like images, documents, and videos can use the tool to rename large numbers of files, add metadata, and organise files for easy retrieval.",
                "<strong> Data scientists:</strong> These professionals often have to transfer data between systems or convert file formats into another, and this tool can help them rename files according to the new naming pattern or file format requirements.",
                "<strong> Media production house:</strong> Media production houses and photographers are required to rename multiple files after a recording session or photo session when they can use the tool to rename a bulk number of files according to set criteria like date, client name, or event. ",
                "<strong> Personal use:</strong> You can use the tool for personal purposes like renaming bulk files saved on your computer for better identification, organising documents, and cleaning up folders.",

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/topics/bulk-file-renaming'> 👉 Find the source code for this project</Link>   </p>

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/p7VDLy0_o1A?si=ALXtlEbruFymjVtW"
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "3. Random password generator ",
        intro: () => (
            <>
                <img src="/syllabuspages/Random-password-generator.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Easy</p>
                <p>This Python project is especially for beginners who have a basic understanding of Python programming. It aims to create a random password generator that helps users to create strong and secure passwords and avoid repetitive ones to improve online security. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Knowledge of importing libraries in Python:</strong> You will use some built-in library functions of Python, like “random” in the coding, to generate random characters, numbers and symbols for creating security and unpredictable passwords.",
                "<strong>String manipulation techniques:</strong> You learn different string manipulation techniques within the project, including string concatenation, slicing, and others.",
                "<strong>User input and validation:</strong> Learners will understand how to measure the length and complexity requirement of passwords generated by users and knowledge of input validation",
                "<strong>Using loops and conditional statements:</strong> This project will use loops and conditional statements of Python that will help you to implement logical ideas within your programming."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "<strong>Install Python:</strong> Make sure you have Python installed on your computer.",
                "<strong>Write the Python code:</strong> Utilize the random module to",
                "Generate random characters from different categories (uppercase letters, lowercase letters, numbers, symbols).",
                "Allow users to specify the desired password length.",
                "Combine randomly generated characters to create a strong password meeting the length requirement.",
                "Display the generated password on the screen.",
                "<strong>Remember:</strong> Never write or store your passwords in plain text. Consider using a password manager for secure storage and easy access to your various login credentials."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Cybersecurity purposes:</strong> You can use a random password generator to create strong and random passwords to protect your sensitive data, networks, and systems from fraud and unauthorised access.",
                "<strong>Web and software developers:</strong> These professionals often require user authentication, registration, and password recovery functions, which can be implemented with a random password generator. It encourages users to create strong passwords during registration and helps them with password reset mechanisms.",
                "<strong>Network administrators:</strong> These IT professionals need to manage user accounts along with resetting passwords and enforcing multiple password policies, which a password generator tool can assist with and enhance the overall security structure.",

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='python-password-generator.WinRAR ZIP archive' download > 👉 Find the source code</Link></p>

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/U_ZCiZ1TgOo?si=Eaqm1pubuAjtAIdK" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>

                <p>🌟 Download the  <Link className="link-color" to='/' download >complete Python syllabus </Link> and start your learning path </p>
                <h3>Python projects for intermediate</h3>
            </>
        )
    },
    {
        title: "4. Sending Automated Emails",
        intro: () => (
            <>
                <img src="/syllabuspages/Sending-Automated-Emails-Using-Python.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Medium</p>
                <p>This project automates your email-sending process so that you don’t have to manually set up emails and send them every time. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Python libraries:</strong> Learners will explore multiple Python libraries, including smtplib and email, to interact with email servers and build email messages ",
                "<strong>String manipulation:</strong> Use of string formatting and concatenation techniques to create dynamic email body",
                "<strong>Conditional statements:</strong> implementation of logical and conditional statements in Python to handle situations like sending personalised email depending on recipient data",
                "<strong>Understanding SMTP:</strong> Get basic knowledge on how email works at a technical level including SMTP (Simple Mail Transfer Protocol) for sending emails"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "<strong>Install Python:</strong> You must have Python installed on your system or download it for free from ",
                "<p><Link to='/https://www.python.org/downloads/'>https://www.python.org/downloads/</Link></p>",
                "<strong>Choose an email service:</strong> You need to have an email account that can be Gmail or Outlook accounts, as you must provide an email address and password. However, creating a dedicated test account is better rather than using real credentials for practice.",
                "<strong>Write the Python code:</strong> Python coding here will utilise certain libraries like ‘smtplib’ for connecting to your email server and ‘email’ for building email messages with the sender, recipient, subject, and email body.",
                "<strong>Run the script:</strong> Execution of the code to send automated email."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Business communication:</strong> Send automated emails to customers, e.g., newsletters, promotional emails, thank you emails, order confirmation, payment reminders",
                "<strong>Marketing and sales:</strong> Send automated personalised emails to your target consumers depending on their interests, behaviour, age, and demographics to attract attention",
                "<strong>E-commerce business process:</strong> You can send out automated emails related to order status updates, shipping notifications, purchase confirmations, abandoned cart reminders",
                "<strong>Managing events:</strong> Managers can send invitations, notifications on date or schedule changes, and updates for attendees before and after the event to a large email list through an automated email. "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/Sven-Bo/automate-sending-emails-using-python'> 👉Find the source code for this project </Link>   </p>

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/OLrC4J2-pvk?si=IIS-7mF2t0i0X0ZA" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "5. Grocery Store Management System",
        intro: () => (
            <>
                <img src="/syllabuspages/Create-a-Grocery-Store-Management-System.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Medium</p>
                <p>This is a three-tier software application where we will work with frontend tools, backend technology, and databases. By working on this project, you will gain comprehensive knowledge of how to build a complete system UI, backend, and database. The program will perform all the functions that you want to automate, including managing product information, tracking inventory, generating bills, etc. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Database management:</strong> You can understand how to design and implement different database schema using SQL or NoSQL databases for storing and managing information",
                "<strong>Understanding of Python Programming:</strong> Learners will get to know the basics of Python programming, including data types, functions, control structures, classes, and OOP principles. ",
                "<strong>Knowledge of conditional statements: </strong>You will learn to implement logic with Python conditional statements, like checking for low stock according to specific criteria. ",
                "<strong>Know User interface development:</strong> With this project, you will learn to develop GUIs (Graphical User Interfaces) using Python frameworks like Tkinter, PyQt, or Kivy. They are used in creating intuitive and user-friendly interfaces for managing inventory, generating reports, etc. ",
                "<strong>Understanding data handling and manipulation:</strong> Gain knowledge in data handling and manipulation along with reading and writing to files, performing different operations like sorting, filtering, and aggregating data."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "<strong> Install Python:</strong> Make sure you have Python installed on your computer.",
                "<strong> Choose data storage:</strong> Decide how you want to store product information. For beginners, lists or dictionaries might suffice. As you progress, you can explore using databases like SQLite for scalability.",
                "<strong> Write the Python code:</strong> Utilize your chosen data structures and control flow statements to build functionalities for adding, removing, and displaying product information. You can further expand on features like generating basic bills or tracking purchase history.",
                "<strong> Run the script:</strong> Execute your Python code and start managing your grocery list or even simulate a small store’s inventory"
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Efficient inventory management:</strong> Grocery stores won’t struggle with stockouts and overstocking problems with such a system. The store owner will automatically get remainders when the inventory level reaches a set threshold such that essential items are always in stock. ",
                
                "<strong>Seamless checkout experience:</strong> By installing a POS (Point of Sale) system, grocery stores can eliminate long checkout lines during peak hours. These systems can process transactions quickly and help customers enjoy a seamless checkout experience.",
                
                "<strong>Supply chain management: </strong> Such systems can assist with supply chain management by keeping track of new inventories, placing orders, checking deliveries, and ensuring goods are efficiently sourced.",
                
                "<strong>Personal use: </strong> It can be used for personal home grocery management, like checking available stock, monitoring expiry dates, and planning shopping dates."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='/syllabuspages/store-management-system.WinRAR ZIP archive' download target="_blanck" > 👉 Find the source code for this project</Link></p>

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/0ZaC6JaNpic?si=4k6bosNs8k-p1_pX" title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "6. Create a Discussion Board Application ",
        intro: () => (
            <>
                 <img src="/syllabuspages/Create-Discussion-Board-Application.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Medium</p>
                <p>This project aims to create a discussion board application that enables users to post views on certain topics publicly and encourage opinions from other people. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong> Python web frameworks:</strong> Learners will get a deep understanding of Python frameworks including Django or Flask to handle user accounts, manage data storage, and other functions",
                "<strong> Building user interface:</strong> You can create beautiful user interfaces using HTML, CSS, and JavaScript for users to interact with the discussion board including creating forms for posts, and displaying existing discussions",
                "<strong> Database management:</strong> Learners will get an understanding of designing and managing databases for storing user data, discussion topics and more using database systems like MySQL, and SQLite",
                "<strong> User authentication and authorisation: </strong>You will know how to implement user registration management, along with authorising users to perform certain actions like posting comments, starting a discussion, etc "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "<strong>Master the basics:</strong> Ensure you have a solid foundation in Python programming before diving into web development frameworks.",
                "<strong>Choose your framework:</strong> Select a beginner-friendly web framework like Django or Flask and learn its core functionalities.",
                "<strong>Design the application:</strong> Plan the features you want to include, such as creating posts, commenting, searching discussions, and user profiles.",
                "<strong>Develop the application:</strong> Utilize your chosen framework to build the application’s logic, including",
                "User registration and login functionalities.",
                "Creating and displaying discussion threads with posts and replies.",
                "Implementing search functionalities to find specific discussions or users.",
                "<strong>Deploy the application:</strong> Once developed, you can deploy your application on a web server to make it accessible online for users."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Online forums:</strong> These discussion board applications are used for online forums to engage users in discussion on multiple topics, ask questions, share opinions, and collaborate with people sharing similar interests.",
                "<strong>Customer support system:</strong> Discussion forums can be used by businesses to create customer support platforms where consumers can post their queries, report issues, and get assistance from customer support representatives.",
                "<strong>Project team collaboration platform:</strong> People working on the same team can use discussion boards to collaborate, share ideas, and work efficiently."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='/syllabuspages/online-discussion-forum-python-django.WinRAR ZIP archive' download target="_blanck" > 👉 Find the source code for this project</Link></p>

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/0NG9vPX9m_4?si=CRgW3PxBeluWZDGq" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "7. Personal Records Manager",
        intro: () => (
            <>
                <img src="/syllabuspages/Personal-Records-Manager.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Medium</p>
                <p>This project aims to create a simple personal records manager that can keep track of your various information, including academic certificates, awards, health records, fitness improvement notes, etc., in one location. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Use of data structures:</strong> You will learn to use multiple data structures, including lists, dictionaries and classes, to store and organise personal records efficiently",
                "<strong>Knowledge of file handling:</strong> Learners will understand how to read and write data to and from multiple files allowing them to save and load records as required",
                "<strong>Creating a user-friendly interface:</strong> You can use a command line or simple graphical user interface to create a user-friendly interface that allows users to add, edit and view records",
                "<strong>Knowledge of basic data manipulation:</strong> You will gain hands-on practice in different data manipulation techniques including sorting, filtering and searching records based on specific criteria",
                "<strong>Understanding modular programming:</strong> Learners will get experience with modular designing where they break a program into smaller reusable components and solve them individually. This will improve good programming practices and code maintainability.",

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "<strong>Install Python:</strong> Make sure you have Python installed on your computer.",
                "<strong>Choose data storage:</strong> Decide on how to store your records. Dictionaries or creating custom classes to hold details like record type, title, date, and additional information are good options.",
                "<strong>Write the Python code:</strong> Utilize your chosen data structures and functions to:",
                "Allow users to add new records by providing the necessary details.",
                "Implement functionalities for searching records based on specific criteria (e.g., record type, date range).",
                "Enable users to edit or delete existing records.",
                "Save the collected information to a file (like JSON or CSV) for persistence.",
                "<strong>Run the script:</strong> Execute your Python code and start managing your records efficiently!"
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Healthcare management:</strong> Healthcare institutions can use a personal record manager to keep track of a patient’s medical history, including compressions, appointments, and other vital signs.",
                "<strong>Educational institutes:</strong> Schools and colleges use a personal record manager to store and manage academic records, certifications, achievements, and other essential records of each student to track their growth and career milestones.",
                "<strong>Storing employee details:</strong> Businesses can store their employee details in one place using this tool and keep track of their performance and improvements",
                "<strong>Personal use:</strong> You can use such a tool to organise your inventory items like books, movies, gadgets, music etc., such that you can track your borrowings or lending, and receive notifications for upcoming due dates or warranties"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://download.code-projects.org/details/298ec9be-4b08-4451-a111-b682f51cb604'> 👉Find the source code for this project</Link></p>

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/tTqO3-pH0uA?si=9CG4ZHDW0Wp2XizM" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
                <h3>Python projects for final-year students</h3>
            </>
        )
    },
    {
        title: "8. Building a Virtual Assistant with Frontend Interface ",
        intro: () => (
            <>
                <img src="/syllabuspages/Building-a-Virtual-Assistant-with-Frontend-Interface.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Hard</p>
                <p>This project aims to create a virtual assistant like Siri and Alexa that can interact with you through a graphic user interface on the front end. It will take input from users, understand requests and perform relevant actions like wishing you, playing music, searching the internet, or setting reminders. </p>
            </>

        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Knowledge of Python programming:</strong> Acquire a basic understanding of Python Programming, including its data types, functions, classes, and modules relevant to building the project.",
                "<strong>Speech recognition and text-to-speech:</strong> Understand the use of certain library functions like speech_recognition and pyttsx3 for conversion of words spoken by the users to text and vice versa, enabling natural voice interaction with the bot.",
                "<strong>Natural Language Processing(NLP):</strong> Get knowledge of basic NLP techniques for understanding the meaning behind your usual input and determining its appropriate response",
                "<strong>GUI development:</strong> Learn the implementation of GUI (graphical user interface) using library functions like Tkinter, PyQt, or Kivy for developing visual interaction with virtual assistant",
                "<strong>API integration:</strong> Knowing the process to integrate virtual assistant with external APIs and web services like weather APIs or live music streaming platforms to improve your assistant’s capabilities"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "<strong>Master the fundamentals:</strong> This project builds upon several advanced Python concepts. Ensure you have a strong understanding of core Python programming and object-oriented programming before diving in.",
                "<strong>Choose your tools:</strong> Select libraries for speech recognition, text-to-speech, and GUI development based on your preference and research their functionalities.",
                "<strong>Develop functionalities:</strong> Start by building smaller functionalities like understanding simple commands and responding with predefined messages. Gradually add complexity as you learn.",
                "<strong>Design the UI:</strong> Use your chosen GUI library to design a user-friendly interface for interacting with your virtual assistant.",
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Managing daily life:</strong> Virtual assistants can manage users’ daily tasks, schedule appointments, set reminders, and perform multiple tasks like searching the web for music, news, etc.",
                "<strong>Customer service and support:</strong> Businesses can use virtual assistants to develop customer relationships, provide automated responses to inquiries, assist with troubleshooting, and enhance customer support.",
                "<strong>Healthcare assistance:</strong> Healthcare institutions can use virtual assistants to assist patients with scheduling appointments, accessing medical information, offering health-related advice, etc.",
                "<strong>Smart home automation:</strong> These virtual assistants can be integrated with smart home devices like security cameras, entertainment systems, lights, etc., allowing users to control the home environment with voice commands.",

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/Ascool7776/A-GUI-Virtual-Assistant-with-python'>👉 Find the source code for this project </Link>   </p>

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/LQr3iyLHiU8?si=wqA-KBI0BVGa5mu7" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "9. Web Scraping Dynamic Website with multiple pages",
        intro: () => (
            <>
                <img src="/syllabuspages/Web-Scraping-Dynamic-Website-with-multiple-pages.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Hard</p>
                <p>Here, you will learn web scraping dynamic websites with multiple pages along with data analysis. You need to choose and load URLs into the tool, and the web scraping tool will extract data from it.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Understanding the fundamentals of web scraping:</strong> You must learn the basic principles and techniques of web scraping, including HTML parsing, HTTP requests, etc. ",
                "<strong>Working with Python libraries:</strong> Learners will get to work with different web scraping libraries in Python including Selenium and Beautiful Soup",
                "<strong>Handling dynamic content and pagination:</strong> You will learn to scrape websites using JavaScript or AJAX for loading content dynamically and using library functions (Selenium and Beautiful Soup). Learners will also develop skills in navigating through multiple pages of web results or data listings",
                "<strong>Data extraction and cleaning:</strong> Gain in-depth knowledge of extracting relevant data from multiple web pages, handling HTML tags and attributes, and cleaning the extracted data for future analysis or storage",

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "<strong> Install Python:</strong> Ensure you have Python installed.",
                "<strong> Choose your tools:</strong> Select libraries based on the website’s complexity. BeautifulSoup works well for simpler structures, while Selenium tackles more intricate dynamic elements.",
                "<strong> Understand the target website:</strong> Analyze the website’s structure and identify the HTML elements containing the data you want to extract.",
                "<strong> Write the Python code:</strong> Utilize your chosen library to",
                "Access the website’s starting URL.",
                "Navigate to subsequent pages if necessary (using loops or pagination links).",
                "Parse the HTML content of each page.",
                "Locate the desired data elements using appropriate selectors.",
                "Extract the relevant information and store it in a structured format (e.g., lists, dictionaries).",
                "<strong> Run the script:</strong> Execute your code and see the extracted data displayed or saved as per your preference."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Comparing product pricing:</strong> For e-commerce sellers, this project can help them fetch data from multiple pages listing products, for price monitoring, and competitor analysis",
                "<strong>Research support:</strong> Researchers require a large amount of data, and they can use this tool to gather data from multiple sources and analyse market trends",
                "<strong>Job hunting:</strong> Jobseekers can scrap job boards and career websites to gather data on job vacancies, trending skills on demand, and hiring trends"

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

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/Dh9Ihheqyu8?si=n9KDstl3jKa5xdJE" title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "10. Create Google Translator",
        intro: () => (
            <>                
                <img src="/syllabuspages/Create-Google-Translator.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Hard</p>
                <p>This project will assist learners in creating a simple Google translator application using Python that can convert one language to another. It will provide you with an in-depth knowledge of Natural Language Processing concerning Python programming. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong> Basic knowledge of APIs: </strong> You will learn how to interact with Google Translate API, including how to make requests, handle responses, and manage authentication.",
                "<strong> Learn text processing techniques: </strong> Learners will gain knowledge of text processing techniques like tokenization, handling special characters, language detection and more using library functions like NLTK and spaCy",
                "<strong> User Interface development: </strong> You can create user-friendly web interfaces using Python libraries including Tkinter, PyQt and web frameworks (like Flask or Django) ",
                "<strong> Asynchronous programming:</strong>  Programmers will learn the concepts of asynchronous programming including how to deal with concurrent translation requests using Python libraries like asyncio",

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "<strong>Solid Python foundation:</strong> Ensure you have a strong understanding of Python programming before venturing into NLP and external APIs.",
                "<strong>Grasp NLP basics:</strong> Familiarize yourself with fundamental NLP concepts like text cleaning, tokenization, and language detection.",
                "<strong>Choose a translation API:</strong> Select a reputable translation API that offers a free tier or student plan with usage limitations. Explore options like Google Translate API or Microsoft Translator API.",
                "<strong>API integration:</strong> Learn how to interact with your chosen API using its documentation and Python libraries. This involves steps like",
                "Setting up API credentials (if applicable).",
                "Sending text data to the API for translation.",
                "Receive and process the translated text response.",
                "<strong>Develop the application (optional):</strong> Build a user interface using libraries like Tkinter or PyQt to create an interactive translation application. This is an optional step that enhances user experience."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Easy to communicate:</strong> You can use such a translator to understand the local language of people in different states or countries. It makes cross-cultural communication easy for international conferences, and global collaborations where people of different languages participate",
                "<strong>Tourist groups:</strong> People who are taking a group of people to tourist places need to understand different languages, which can be difficult. They can use this simple google translator to translate language and communicate with everyone efficiently",
                "<strong>Medical translations:</strong> You might not know all medical terms, so to understand what your doctors say about diseases, medicines, treatment plans, etc. you can use this tool",
                "<strong>Language learning platform:</strong> Such platforms use these tools to help learners understand and translate text in real time",

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='/syllabuspages/python-language-translator.WinRAR ZIP archive' download target="_blank">  Find the source code for this project</Link></p>

                <iframe  
                width="560"  
                height="315" src="https://www.youtube.com/embed/fZBCmyHAynk?si=MxDVLWupHd5ex2cH" 
                title="YouTube video player"  
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
                <h3>Python projects with source code</h3>
            </> 

        )
    },
    {
        title: "1. Calculator using Python",
        intro: () => (
            <>
                <p>Creating a calculator using Python is a beginner-friendly project that allows users to perform basic mathematical operations. It requires you to learn to use operators and expressions, conditional statements, and work with input() and output() functions in Python. Calculators are still used for small to complex calculations in businesses, financial institutions, or personal use. This project will help beginner Python developers learn about the basics of this course. </p>

                <p> <Link className="link-color" to='/syllabuspages/dataflair-python-calculator.WinRAR ZIP archive' download target="_blank">👉 Find the source code for this project</Link></p>
            </>
        )
    },
    {
        title: "2. Build a website blocker",
        intro: () => (
            <>
                <p>Python developers with basic knowledge of the programming language can do this project. A website blocker is used to block unwanted or distracting websites. You can use file handling and string manipulation functions in Python with other core programming skills to create such a website blocker. It helps parents block inappropriate sites from children or use it to improve their personal productivity by restricting distractions.</p>

                <p> <Link className="link-color" to='/syllabuspages/website-blocker.WinRAR ZIP archive' download target="_blank">👉 Find the source code for this project</Link></p>
            </>
        )
    },
    {
        title: "3. Create Screen Recorder",
        intro: () => (
            <>
                <p>You all have to use a screen recorder on your smartphone to record an ongoing video conversion. This tool can be created with Python and the project is suitable for intermediate developers with knowledge of working with different Python libraries. You will learn to use Python libraries to capture screenshots, understand image processing, and get hands-on training in basic Python knowledge. </p>

                <p> <Link className="link-color" to='/syllabuspages/screen-recorder.WinRAR ZIP archive' download target="_blank">👉 Find the source code for this project</Link></p>
            </>
        )
    },
    {
        title: "4. Face Recognition tool",
        intro: () => (
            <>
                <p>Developing a face recognition tool is suitable for final-year students. It requires knowledge of machine learning libraries, image processing, face detection algorithms, extracts of facial features, etc. The tool will help recognise faces from multiple images.</p>

                <p>You might use a face recognition password on your smartphone, which unlocks only when the tool identifies your face. Such software can be used to categorise bulk photos based on faces, create better security systems, and automatically tag people on social media by recognising faces.</p>
                <p>If you want to improve your machine-learning skills, check out our complete  <Link className="link-color" to='/machine_learning_course_page'  >Machine learning course syllabus.</Link> </p>

                <p> <Link className="link-color" to='/syllabuspages/face-recognition-python-code.WinRAR ZIP archive' download target="_blank">👉 Find the source code for this project</Link></p>
            </>
        )
    },
    {
        title: "5. Build Weather App",
        intro: () => (
            <>
                <p>Another interesting Python project that anyone with core knowledge of Python can do is building a weather App. This tool will forecast weather in a specific location. </p>

                <p>For that, you need to have knowledge of implementing APIs for weather data accessing, and data processing techniques. A weather app can be helpful for travellers who plan a trip by forecasting the weather of that area beforehand.  </p>

                <p> <Link className="link-color" to='https://realpython.com/bonus/build-a-python-weather-app-cli-project-code/'>👉 Find the source code for this project</Link></p>
                <p>👉 If you want to become a full-stack developer, check out the complete  <Link className="link-color" to='/Python_fullstack_course_page'>Python full stack developer course syllabus </Link> with a downloadable PDF.</p>
            </>
        )
    },
  
    {
        title: "Execute Python projects with expert Python mentors at codegnan",
        intro: () => (
            <>
                <p>At Codegnan, you can learn Python under the mentorship of top professionals with years of experience in the Python domain and experts from IIT and other top universities. They understand the current trends in the Python market and help students learn them to land better jobs.</p>

                <p>The best part?</p>

                <p>Our course curriculum includes hands-on Python projects so you get practical learning experience with skill development.</p>

                <p>At codegnan, we offer interactive classes where you can clear all your doubts and implement theoretical knowledge into live projects. After completion of each module, you receive hands-on training on the topics within it. By the end of the course, you will work on three live Python projects before receiving your course completion certificates</p>
            </>
        )
    },
    {
        title: "Benefits of doing Python projects for students",
        intro: () => (
            <>
                <h3>1. Improve your Python knowledge </h3>
                <p>Having theoretical Python knowledge may not be sufficient to survive the competition for Python developers today. You must acquire practical skills to implement your theoretical knowledge into real-life projects. It will help you transfer your ideas into innovative software, applications, or tools that will solve an existing problem. </p>
            </>
        )
    },
    {
        title: "2. Create innovative solutions for existing market problems",
        intro: () => (
            <>
                <p>You can create innovative solutions for problems like security threats, requirements for automation, fastening up processes, etc. </p>

                <p>For example, with Python, you can create a Random Password Generator, which helps people create strong and random passwords that are difficult for hackers to break easily. Similarly, you can build a virtual assistant with Python, like Siri, a weather reporting app, etc.</p>
            </>
        )
    },
    {
        title: "   3. Build a strong portfolio" ,
        intro: () => (
            <>

                <p>When you have hands-on practice on Python projects, you can add them to your resume. These projects showcase your proficiency in Python, HTML, CSS, and other tools used in completing the projects. This improves your professional portfolio, allowing you to land a high-paying job or acquire clients. </p>
            </>
        )
    },
    {
        title: "Become a Python expert in the next 30 days with codegnan" ,
        intro: () => (
            <>
                    <p>Codegnan offers a one-month Python training program for students all over India. Offline classes in Hyderabad, Bangalore and Vijayawada. Online classes are also available for everyone.</p>

                    <p>The course fee is only ₹8000 for a limited period discount. Learn more about Python classroom training in <Link className="link-color" to='/python_training_in_hyderabad'>  Hyderabad</Link> , <Link className="link-color" to='/python_training_in_Vijayawada'>  Vijayawada</Link> , and <Link className="link-color" to='/python_training_in_banglore'>Bangalore</Link> .</p>

                    <p>You attend live interactive classes conducted by experienced instructors, who also offer free doubt-clearing sessions to ensure concepts are clearly understood. After every module, you get <b>hands-on experience working</b> on practical applications, solidifying your learning. Upon successful course completion, you will receive industry-recognized certifications showcasing your Python proficiency. Also, you get the opportunity to earn prestigious Hackerrank badges by taking coding challenges.</p>

                    <p>Furthermore, Codegnan has a special <Link className="link-color" to='/job_accelerator_program'> Job Accelerator Program.</Link> Experts train you to get high-paying Python jobs. They support you throughout your career.</p>

                    <p>Don’t miss this great opportunity! Enrol now in Codegnan’s 30 days of Python training and become a coding expert. Affordable fees, quality training, job assistance – everything under one roof. </p>
            </>
        )
    }
  
];

const nav_interview = [
    {
        name: "Data Structures And Algorithms Course Syllabus (with PDF)",
        link: "/data-structures-and-algorithms-course-syllabus"
    },
    {
        name:"15 React JS Projects for Beginners 2024",
        link:"/react-js-projects"
    }
];

export default function JavaCoursePage() {
    return (
        <div>
            <Course_template head={headdata} course={coursedata} section={courseSections} coursep={course_brief} inter_links={nav_interview} />
        </div>
    );
}
