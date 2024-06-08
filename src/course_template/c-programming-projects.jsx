import React from "react";
import Course_template from "./Course_template";
import cprogram_projects from '/course_images/C-programming-projects-illustration.png';
import { Link } from "react-router-dom";

const headdata = {
    title: "17 C Language Projects For Beginners with Source Code",
    date: "March 23, 2024",
    img: cprogram_projects,
    intro: " "
};

const coursedata = {
    title: " ",
    p: "C programming is a machine-independent language that helps learners step into the World of creating operating systems like Windows, Oracle, Python interpreter, etc. It may not be the most used programming language in 2024, but it still ranks among the ",
    linkText: " top 10 languages.  ",
    syllabusLink: "https://www.statista.com/statistics/793628/worldwide-developer-survey-most-used-languages/"
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
                    <img src="/syllabuspages/image-1.png" alt="" width="100%"/>
                    <p>With 5+ years of experience training 30,000+ students globally, Codegnan believes hands-on training is essential to learning a programming language. We have seen students excel in top companies with practical skills that improve their understanding of core topics in C. </p>
                    <p>This guide will share a few projects for beginners to final-year students that all can try.</p>
                    <p><Link className="link-color" to='https://academy.codegnan.com/learn/C-Programming'> 👉 Enroll in our FREE online C programming language </Link>which includes 15+ practical tests that will help you in completing your final year C language projects.</p>
                    <p>Also, if you want one-on-one classroom training, check out  <Link className="link-color" to=' classroom C language training in Vijayawada '> classroom C language training in Vijayawada </Link> trained by top experts and ex-IIT mentors.</p>
                </div>
            </>
        )
    },

    {
        title: "C programming projects for beginners",
        intro: () => (
            <>
                <h3>1. Building Calculator using C programming</h3>
                
                <img src="/syllabuspages/1.png" alt="" width="100%"/>
                <p><strong> Difficulty level:</strong> Easy</p>

                <p>This project aims to build a calculator that can perform simple arithmetic operations and display the results to users.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: " : <br/><ul>" +
            [
                "Understanding of variables, data types, and operators in C",
                "Use of multiple library functions and work with user input",
                "Implementation of control flow statements like if-else statements or switch statements ",
                "Performing basic arithmetic operations "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this C programming project:",
        intro: " <ul> "+
                [    
                    "Include the stdio.h library for input-output operations in C.",
                    "Define the main() function where our code execution begins. Inside the main function, declare three variables: a, b, and choice",
                    "Ask the user to enter two integer numbers and store them in variables a and b using the scanf() function.",
                    "Provide the user with choices for different calculator operations and store their choice in the ‘choice’ variable.",
                    "Using a switch statement, check the user’s choice. For example, if the choice is 1, we perform addition (a + b); for choice 2, we perform subtraction, and so on, and display the result.",
                    "In the case of division, we check if the divisor b is not zero before performing the division to avoid a division-by-zero error",
                    "If the user enters a choice that is not in the provided list, the default case is executed, and an error message is printed."
                ].map((item, index) => (
                    "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
                )).join('') +
                "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul> "+
                [    
                    "<strong>Educational purpose:</strong> Kids can use the tool for simple mathematical calculations in their exams.",
                    "<strong>Calculating interests:</strong> You can use such a tool to calculate interests and other essential calculations to avoid manual errors.",
                    "<strong>Real estate and e-commerce platforms:</strong> Several online platforms implement these tools for website visitors for various calculations."
                    
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
                height="315" src="https://www.youtube.com/embed/5QLxkgnl1Nc?si=YYUljZJANZaab2B6" title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>

                <p> <Link className="link-color" to='https://github.com/BradStevenson/Simple-C-Calculator'> 👉 Find the source code for this project</Link>   </p>
            </>
        )
    },
    {
        title: "2. Building a Calendar using C ",
        intro: () => (
            <>
                <img src="/syllabuspages/2.png" alt="" width="100%"/>

                <p><strong>Difficulty level:</strong> Easy</p>

                <p>This project aims to create a calendar program in C that will display the days, months, and years. You can add some advanced features to the project that allows you to set reminders and schedule meetings.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: " <ul>" +
            [
                "Breaking down complex tasks into smaller, reusable functions",
                "Knowledge of looping statements in C (for loop)",
                "Use of arrays to store data",
                "Work with conditional statements in C (if statements)"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this C programming project:",
        intro: "1. Setting Up:<ul>" +
            [
                "<strong>1. Setting Up:</strong>",
                "Install a C compiler like GCC. There are many free options available online.",
                "Choose a text editor or IDE (Integrated Development Environment) to write your code. Popular options include Visual Studio Code or Code::Blocks.",
                "<strong>2. Coding:</strong>",
                "Start by defining arrays to hold month names and the number of days in each month.",
                "Create functions to:",
                          " &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  Check for leap years.",
                          " &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  Determine the day of the week for the first day of the month.",
                          " &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;  Print the calendar layout with appropriate spacing for days.",
                "Use loops to iterate through days and weeks, conditionally displaying dates based on calculations.",
                "<strong>3. Testing:</strong>",
                "Compile and run your program, testing it with different months and years.",
                "Refine your code to handle edge cases and improve readability.",
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 80px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Keep track of days and weeks:</strong> This tool can be similar to a paper print calendar that helps you keep track of days and weeks digitally.",
                "<strong>Set reminders for important events:</strong> Some tools with advanced features can allow you to set reminders for important events like graduation day, birthdays, anniversaries, etc",
                "<strong>Schedule meetings:</strong> You can set meeting time on calendars ahead of time with these tools"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
            
                <iframe width="560" height="315" src="https://www.youtube.com/embed/VRcJpUOKRt8?si=Wj-jbVE-NOEYRlzX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <p> <Link className="link-color" to='https://github.com/RocktimRajkumar/Calendar-in-C'> 👉 Find the source code for this project</Link>   </p>
            </>
        )
    },
    {
        title: "C programming projects for intermediate ",
        intro: () => (
            <>
                <h3>3. Banking management system</h3>
                <img src="/syllabuspages/3.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Medium</p>
                <p>This project aims to create a virtual banking management system where you can see and manage all your transactions as you do in a bank, verify details of existing accounts, and browse bank details. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Solid understanding of core C programming concepts like structure and arrays",
                "Implementation of multiple functions in C",
                "Knowledge of file-handling techniques",
                "Use of conditional statements to control program flow"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this C programming project:",
        intro: " <ul>" +
            [
                "<strong>Set Up: </strong> Install a C compiler like GCC.",
                "<strong>Planning:</strong>  Decide what functionalities you want to include (create an account, deposit, withdraw, etc.).",
                "<strong>Coding: </strong> Develop the C program using structures, functions, and user input/output.",
                "<strong>Testing:</strong>  Thoroughly test your program with various scenarios (deposits, withdrawals, potential errors)."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Mobile money transaction:</strong> Mobile banking services can implement such systems for money transfers within the country or internationally.",
                "<strong>Banking services:</strong> When a bank implements such systems for its customers, you can use them to access banking services like opening a fixed deposit or recurring deposits, applying for personal loans, etc.",
                "<strong>Online KYC verification:</strong> Sometimes, banks use these systems for their customer verification process which saves time in handling huge queues affecting other essential banking activities.",
                "<strong>Customer support:</strong> Banks often use such tools to automate their customer service processes. This project at an advanced level uses bots that reply to common customer queries before forwarding calls to customer service representatives."

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
                src="https://www.youtube.com/embed/eezQ7zBijdw?si=5IAonlXnVxxqfyXk" title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
                <p> <Link className="link-color" to='https://www.geeksforgeeks.org/bank-account-system-in-c-using-file-handling/' > 👉 Find the source code for this project</Link></p>
            </>
        )
    },
    {
        title: "4. Student record management system",
        intro: () => (
            <>
                <img src="/syllabuspages/4.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Medium</p>
                <p>This student record management system tool is a project for intermediate learners who can add numerous features to record and manage students’ details, update information, and delete records.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Working with Structure in C to store student information",
                "Use of different C in-built functions",
                "Knowledge of Arrays and Linked lists",
                "Learn file-handling techniques "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this C programming project:",
        intro: " <ul>" +
            [
                "<strong>Plan the Data Structure:</strong> Decide what information you want to store for each student (name, roll number, etc.) and define a structure to hold this data.",
                "<strong>Develop Core Functions:</strong> Create functions for adding new students, searching by roll number or name (optional), updating existing records, and potentially deleting students (be cautious with deleting!).",
                "<strong>Implement User Interface:</strong> Use printf() and scanf() functions to create a menu-driven interface for users to interact with the program.",
                "<strong>Test and Improve:</strong> Thoroughly test your program with various scenarios and add error handling where necessary"
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Educational institution:</strong> Every kind of institution can use this tool to record their students’ data on the system and manage them efficiently. ",
                "<strong>Attendance tracking:</strong> Such a tool can be used in schools and colleges to mark students’ attendance, track absences, and generate automatic attendance reports."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/AveyBD/student-management-system'> 👉Find the source code for this project </Link>   </p>
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/E9HHKiwvlH8?si=VsIZGsCX3p6tvEsf" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "5. Unit converter C project",
        intro: () => (
            <>
                <img src="/syllabuspages/5.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Medium</p>
                <p>This unit converter project aims at creating a tool that helps users to convert units of measurement like temperature (Celsius to Fahrenheit), currency (Dollar to Rupees), length (meter to centimetre), etc. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Solid understanding of core C programming",
                "Use of conditional statements to determine appropriate conversion formula",
                "Apply unit conversion formulas within the C code",
                "Use of in-built functions in C"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this C programming project:",
        intro: " <ul>" +
            [
                "<strong>Set up your development environment:</strong> Install a C compiler (like GCC) and a text editor (like Visual Studio Code) where you’ll write your code.",
                "<strong>Plan your conversions:</strong> Decide which units you want your program to handle initially (e.g., length, temperature, volume).",
                "<strong>Research conversion formulas:</strong> Find the mathematical formulas for converting between the chosen units.",
                "<strong>Write your C code:</strong> Break down the functionalities into smaller steps and write code for each step using C functions and control flow statements.",
                "<strong>Test and refine:</strong> Run your program with different input values to ensure accurate conversions. Fix any errors and improve the user experience."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Personal use:</strong> You can use such a tool for personal uses like converting your height from feet to meters, your weight from kgs to lbs, etc.",
                "<strong>Banks:</strong> Banks can implement such tools on their website to allow users to convert currencies for international transactions like dollars to rupees",
                "<strong>Real estate agencies:</strong> Such agencies can use these tools to convert land measurement units and calculate their value accordingly "

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
                src="https://www.youtube.com/embed/vX4YfPWIKIM?si=JzJR5bBG1VCK2UBw" 
                title="YouTube video player" 
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>

                <p> <Link className="link-color" to='https://github.com/achen58/Basic-Unit-Converter.git' > 👉 Find the source code for this project</Link></p>

            </>
        )
    },
    {
        title: "6. Virtual workplace application",
        intro: () => (
            <>
                 <img src="/syllabuspages/6.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Medium</p>
                <p>This project aims at building a virtual workplace application where teams can collaborate and work together. This virtual workplace will focus on core functionalities like user management, task creation, and developing basic communication features. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Practice using data structures in C",
                "Use of file handling techniques to store and retrieve data from file",
                "Use of well-defined functions in C to perform multiple tasks",
                "Understanding of how to accept user input for different actions and display information"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this C programming project:",
        intro: " <ul>" +
            [
                "<strong>Planning:</strong> Decide on the functionalities you want to include. Start with a basic structure for users, tasks, and maybe a simple messaging system.",
                "<strong>Define Data Structures:</strong> Create structures to hold user information (name, username, password), task details (title, description, due date), and potentially messages (sender, receiver, content).",
                "<strong>Build Core Functions: </strong>Develop functions for user login, task creation, viewing tasks, and potentially sending messages.",
                "<strong>Implement File I/O:</strong> Use file handling functions like fopen, fclose, fread, and fwrite to store and retrieve data from files. This ensures information is saved even when the program exits.",
                "<strong>User Interface:</strong> Design a basic text-based interface for users to interact with the program. This might involve menus, prompts, and displaying information clearly.",
                "<strong>Testing and Improvement:</strong> Test your program thoroughly, identify bugs, and make improvements."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Remote offices:</strong> Offices that don’t have a physical infrastructure can use this tool to allow communication among multiple team members and work together"

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
                src="https://www.youtube.com/embed/BzlmwFdI9E4?si=YV8Wf4DdPo503_m0" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>

                <p> <Link className="link-color" to='https://github.com/microsoft/vscode/wiki/Virtual-Workspaces'> 👉 Find the source code for this project</Link></p>
            </>
        )
    },
    {
        title: "7. Food order management system",
        intro: () => (
            <>
                <img src="/syllabuspages/7.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Medium</p>
                <p>This project will help Learners to build a food order management system to manage food orders at a restaurants, hotels and food stalls. Users can browse a menu, add food items to a cart, order and view the final bill.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Learn designing C Structure",
                "Use of arrays to store data",
                "Knowledge of C functions",
                "Understanding of how to get user input",
                "Use of loops to handle repetitive tasks "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this C programming project:",
        intro: " <ul>" +
            [
                "<strong>Planning:</stron> Decide on the functionalities you want to include. Start with a basic system that allows users to browse the menu, add items, and view the total bill. You can later expand to features like removing items, applying discounts, or handling different payment methods.",
                "<strong>Define Data Structures:</stron> Create structures to represent menu items and potentially user orders. Include details like item name, price, and potentially a unique identifier.",
                "<strong>Develop Functions:</stron> Break down the functionalities into separate functions. This could include functions for displaying the menu, taking user input for choices and quantity, adding items to the cart, calculating the bill, and displaying the final order.",
                "<strong>Implement User Interaction:</stron> Use printf() to display menu items, prompts, and the final bill. Use scanf() or getchar() to get user input for their choices and quantity.",
                "<strong>Testing and Debugging:</stron>Test your code thoroughly with various scenarios. Add comments throughout your code to improve readability and maintainability."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Restaurants: Hotels and restaurants can implement this system to manage multiple food orders",
                "Online food delivery platforms: Such platforms can use a food order management system to receive orders online, send them bills, and accept payments "

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
                src="https://www.youtube.com/embed/TDzzsDDECEs?si=3NV_aUAdShuP-GGt" title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>

                <p> <Link className="link-color" to='https://github.com/Srinithyee/FOOD-ORDER-MANAGEMENT-SYSTEM/blob/master/project.c'> 👉Find the source code for this project</Link></p>

                <h3>C programming projects for final year students</h3>
            </>
        )
    },
    {
        title: "8. Mini Voting System",
        intro: () => (
            <>
                <img src="/syllabuspages/8.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Hard</p>
                <p>This project aims at creating a virtual voting system that allows users to vote for an event or a person, and then display the results.</p>
            </>

        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "A clear understanding of C programming",
                "Knowledge of file-handling techniques",
                "Learn the use of different data structures, including arrays and linked lists",
                "Hands-on training with control structures (loops and conditional statements) in C",
                "Understanding of error handling mechanisms in C",
                "Handling user inputs and managing data effectively"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this C programming project:",
        intro: " <ul>" +
            [
                "<strong>Planning:</strong> Start by defining the functionalities you want your voting system to have.",
                "<strong>Design:</strong> Plan the structure of your program, including how you’ll store candidate information and handle user interactions.",
                "<strong>Coding:</strong> Write the code for your voting system, focusing on implementing each functionality step by step.",
                "<strong>Testing:</strong> Test your program thoroughly to ensure it works as expected and handles various scenarios, including incorrect user input.",
                "<strong>Refining:</strong> Refactor your code if needed to improve its efficiency and readability."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>College election: </strong>Colleges can use such a voting system to conduct elections for class representatives, student council elections, etc",
                "<strong>Business decision-making:</strong> Businesses can use this tool to collect feedback on how their employees are reacting to specific decisions. For example, if you decide to increase daily working hours, this tool can be used to see how many members are in support of your decision and how many are against it.",
                "<strong>Government feedback collection:</strong> Government can use this system to gather feedback from people across the country about their measures for country welfare."

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
                height="315" src="https://www.youtube.com/embed/f0dTHCXSVLM?si=vt9Znv0KVYcJYJmz" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>

                <p> <Link className="link-color" to='https://github.com/cognitive-ninja/Mini-Voting-System'>👉 Find the source code for this project </Link>   </p>
            </>
        )
    },
    {
        title: "9. Library management system",
        intro: () => (
            <>
                <img src="/syllabuspages/9.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Hard</p>
                <p>This project is about creating a library management system that allows users to add books, search books by title/author, display book information, and manage borrowing and returning functionalities. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Knowledge of using C Structure for storing information",
                "Use of multiple functions within the code to make them look organised",
                "Learn the use of files to store and retrieve data and different data handling techniques",
                "Understanding of how to get user input and display information "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this C programming project:",
        intro: " <ul>" +
            [
                "<strong>Planning:</strong> Decide what functionalities you want your library system to have. Start with a basic version that allows adding and displaying books, then gradually add features like searching and (optionally) borrowing management.",
                "<strong>Coding:</strong> Begin by defining a structure for your book data. Then, write functions for each desired functionality. Utilise loops, conditional statements (if/else), and string manipulation functions as needed.",
                "<strong>Testing:</strong> Thoroughly test your program by adding different books and trying out all the functionalities. Fix any errors you encounter.",
                "<strong>(Optional) File Handling:</strong> If you want to make book data persistent, explore using C’s file I/O functions (fopen, fclose, fscanf, etc.) to write book information to a file and read it back when needed."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong> Public Libraries:</strong> Any kind of library can use such tools to manage their whole process efficiently ",
                "<strong> Educational institutes:</strong> Schools and other institutes offering study materials, books, class notes, videos, etc., with students, and this system helps them manage the whole process of searching for books, borrowing, and returning back",
                "<strong> Businesses:</strong> Businesses offering study resources to employees can use the system to allow them access to the required study materials, office files, etc.",
                "<strong> Hospitals:</strong> Hospitals and medical centres can use this system to handle medical files of thousands of patients they deal with every month."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tcq9MIEXpuY?si=eposT25-8xVvBsyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <p> <Link className="link-color" to='https://github.com/SonikaAalla/Stepin_Librarymanagmentsystem'> 👉 Find the source code for this project</Link> </p>
            </>
        )
    },
    {
        title: "10. Bus reservation system",
        intro: () => (
            <>                
                <img src="/syllabuspages/10.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Hard</p>
                <p>This project aims to create a bus reservation system that allows users to view available bus seats, book tickets, and cancel reservations. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Hands-on experience with arrays in C programming",
                "Knowledge of using C functions with a code for different purposes ",
                "Use of conditional statements to control the program flow",
                "Use of loops for validating user input"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this C programming project:",
        intro: " <ul>" +
            [
                "<strong>1. Setting Up:</strong>",
                "Choose a C compiler like GCC. Most computers have them pre-installed, or you can download one for free.",
                "Pick a text editor (e.g., Notepad++) or a C development environment (e.g., Code::Blocks) for writing and running your code.",
                "<strong>2. Developing the Program:</strong>",
                "Start by defining variables and arrays to store bus details and passenger information.",
                "Create functions for:",
                "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Displaying a user menu with options like “Book Ticket,” “View Available Seats,” and “Exit.”",
                "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Checking seat availability for a chosen bus.",
                "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Booking a ticket (if a seat is available) by storing passenger details and updating seat availability.",
                "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (Optional) Cancelling a reservation (updating passenger and seat data).",
                "Use conditional statements (if/else) to control program flow based on user choices and seat availability.",
                "Use loops (for/while) to iterate through seat data, display menus, and potentially validate user input.",
                "<strong>3. Testing and Debugging:</strong>",
                "Test your program thoroughly with different scenarios (booking, checking availability, handling full buses).",
                "Use a debugger (built-in with most compilers) to identify and fix errors in your code.",
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Bus service providers:</strong> Government bus providers can use the system for all passengers to book tickets, check seat availability, and cancel tickets.",
                "<strong>Travel agencies:</strong> Such agencies can use this system for tour bus reservations "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2bGs8zjnygU?si=zo1_WGy5TjF0S0BL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                
                <p> <Link className="link-color" to='/https://download.code-projects.org/details/2b6b6048-8b90-482b-8b65-468c0d76fc0a#google_vignette'>  Find the source code for this project</Link></p>

            </> 

        )
    },
    {
        title: "11. Hospital management system using C project",
        intro: () => (
            <>                
                <img src="/syllabuspages/11.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Hard</p>
                <p>This project will create a system that will help hospitals manage patient information, appointments, and billing patients. It will focus on some core functionalities like creating patient records, scheduling appointments and basic hospital data management.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Knowledge of using Structure to represent patents, doctors, appointments and other facilities",
                "Understanding of file handling techniques ",
                "Use of different functions in C",
                "Hands-on practice on arrays and linked lists to manage data"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this C programming project:",
        intro: " <ul>" +
            [
                "<strong>Planning:</strong> Decide on the functionalities you want to include. Start with a basic structure for patients (name, ID, contact details), appointments (date, time, doctor), and potentially billing information (optional).",
                "<strong>Define Data Structures:</strong> Create structures to hold patient information, appointment details, and potentially doctor information (if including doctors).",
                "<strong>Build Core Functions:</strong> Develop functions for adding new patients, scheduling appointments, searching for patients or appointments, and displaying information.",
                "<strong>Implement File I/O:</strong> Use file handling functions like fopen, fclose, fread, and fwrite to store and retrieve patient data and appointments from files.",
                "<strong>User Interface:</strong> Design a basic text-based interface for users (hospital staff) to interact with the program. This might involve menus, prompts, and displaying information clearly.",
                "<strong>Testing and Improvement:</strong> Test your program thoroughly, identify bugs, and make improvements."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Government and Private hospitals:</strong> All kinds of hospitals can use this system to record and manage their patient data efficiently",
                "<strong>Hospital billing department:</strong> These departments can use a hospital management system that facilitates billing and invoicing functions. ",
                "<strong>Patient use:</strong> Patients can use this system to book potential doctors, set alerts for checkups, get critical test results, etc."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_1yOWB6HYXE?si=2GCfuzfVlInFhmo2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                
                <p> <Link className="link-color" to='https://github.com/Nandakishore-Menon/Hospital-Management-System'>  Find the source code for this project</Link></p>

            </> 

        )
    },
    {
        title: "12. Build a Quiz Game",
        intro: () => (
            <>                
                <img src="/syllabuspages/12.png" alt="" width="100%"/>
                <p><b>Difficulty level: </b>Hard</p>
                <p>This project aims to build a quiz game using C programming that will ask questions, accept answers and display scores for each player based on a chosen topic.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Basic knowledge of C programming elements",
                "Knowledge of input and output operations using in-built C functions",
                "Use of conditional statements",
                "Hands-on practice of looping in C to execute repetitive tasks",
                "Understanding of basic data structures like arrays to store account data",
                "Knowledge of string manipulation techniques "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this C programming project:",
        intro: " <ul>" +
            [
                "<strong>Set up your C development environment:</strong> You’ll need a C compiler and a text editor to write your code. Popular options include GCC compiler and editors like Visual Studio Code.",
                "<strong>Design your quiz content:</strong> Prepare a list of questions and their corresponding answers (including potentially incorrect options).",
                "<strong>Code the logic:</strong> Write C code to display questions, accept user input for answers, check them against the correct answer, and award points.",
                "<strong>Test and refine:</strong> Run your program, play the quiz yourself, and identify any errors or areas for improvement."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "<strong>Educational purposes:</strong> This tool can be used in schools and educational institutions for arranging Quiz competitions for students to test their knowledge in multiple subjects",
                "<strong>Training camps:</strong> Such camps can use a quiz game to test the outcomes of their training in various fields ",
                "<strong>Hiring assessment tests:</strong> Companies or HRs can use these tools for assessing the quality of candidates applying for a job role"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/csS_nrzBwos?si=gAfvfg2bN5ZtQ39Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                
                <p> <Link className="link-color" to='/syllabuspages/ATM-Machine-C-Program-Source-Code.WinRAR ZIP archive' download target="_blank">👉 Find the source code for this project</Link></p>
                
            </> 

        )
    },
    {
        title: "C Programming projects with source code",
        intro: () => (
            <>
                <h3>13. Cricket scoreboard</h3>
                <p>This project can be a great start for beginners where they can add a few features for tracking team names and scores, runs scored, wickets that have fallen, overs left, and simple commentary. It requires students to define structures with variables, implement loops, and display required data. </p>

                <p>Cricket boards can implement this tool to display team names, runs scored, and all necessary cricket details to the audience </p>

                <p> <Link className="link-color" to='https://github.com/Ankur1210/cricket_score_board_display/tree/master'>👉 Find the source code for this project</Link></p>
            </>
        )
    },
    {
        title: "14. Typing Tutor",
        intro: () => (
            <>
                <p>This project aims to create a tool that can help users measure and improve their typing speed. Building a typing tutor is a beginner-friendly project where you must understand the concepts of user-defined functions and file handling in C. Anyone who is willing to become a typist and looking for a tool to check how fast they can complete a paragraph or how many words they can type per minute can use this tool.</p>

                <p> <Link className="link-color" to='https://github.com/n05la3/cmdtypist' >👉 Find the source code for this project</Link></p>
            </>
        )
    },
    {
        title: "15. Employee Salary Slip Generation",
        intro: () => (
            <>
                <p>This is, again, a beginner-friendly project that can be done with basic C programming skills. It aims at creating a tool that generates salary slips for all employees within an organisation, including their allowances and deductions with net salary. Here, you will learn different file-handling techniques for data storage and retrieval in C, data formatting, and the use of calculation algorithms. </p>

                <p> Any business or organisation with multiple employees can use this employee salary slip generation tool to calculate each employee’s salary, pay them correctly, and keep records of their payments. </p>

                <p> <Link className="link-color" to='https://gist.github.com/VishalVishwakarma/6c7b5ff31a902d9276bca98484221ac1' >👉 Find the source code for this project</Link></p>
            </>
        )
    },
    {
        title: "16. Contact management system ",
        intro: () => (
            <>
                 <p>This project may not be suitable for beginners, but someone with a clear understanding of C programming, data structures, and file-handling operations can. A contact management system is an excellent modern-age tool that allows users to manage contacts, including adding them to a list and deleting or updating them whenever needed. </p>

                 <p>By completing this project, you will learn how to implement different data structures (like LinkedIn and arrays), handle data inputs, data validation in C, and file-handling operations for data storage. Such a system can be used for personal or professional purposes to organise contacts of employees, clients, suppliers, and others. </p>

                <p> <Link className="link-color" to='https://github.com/topics/contact-management-system?o=asc&s=stars' >👉 Find the source code for this project</Link></p>
            </>
        )
    },
    {
        title: "17. Railway reservation system",
        intro: () => (
            <>
                <p>This project is also suitable for intermediate learners who already know how to do C programming projects. It aims at creating a system for users to reserve seats, retrieve passenger information, and assist in ticket generation. </p>

                <p>While doing this project, learners will better understand how to use C codes and knowledge of data structure, file handling, and input validation. </p>

                <p>Similar tools, like bus reservation systems, can be built with almost the same code. These are used today to save time for passengers travelling to railway stations and standing in large queues to collect tickets. </p>

                <p> <Link className="link-color" to='https://github.com/abhijitjadhav1998/Railway-reservation-system'>👉 Find the source code for this project</Link></p>
            </>
        )
    },
    {
        intro: () => (
            <>
                <h4>Other hands-on project ideas you might want to check:</h4>
                <ul>
                    {[
                        { name: "React JS Projects for Beginners ", link: "/react-js-projects", duration: "with source code" },
                        { name: "Python Projects for Beginners ", link: "/python-projects", duration: "Shared by Experts" }
                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link> ({program.duration})
                        </li>
                    ))}
                </ul>
            </>
        )

    },
  
    {
        title: "Execute C Programming projects with expert C Programming mentors at codegnan",
        intro: () => (
            <>
                <p>At<Link className="link-color" to='https://codegnan.com'> Codegnan </Link> , you can learn C programming skills under the mentorship of x-IITians and students of other top universities. These professionals have been teaching thousands of students for over 4+ years and have work experience in the domain as well. They can not only give you theoretical knowledge of C but also help you implement the knowledge into real-world projects. </p>

                <p>Learners can join live interactive classes with these experts and clear all their doubts within the course period. After completion of the course, each learner needs to crack an examination with a mandatory percentage to get a course completion certificate. These are globally recognised certificates that can assist learners in landing a good job or proceeding with their career towards advanced levels. </p>
            </>
        )
    },
    {
        title: "Benefits of doing C Programming projects for students",
        intro: () => (
            <>
                <p>👉 Find the complete <Link className="link-color" to='/c-language-course-syllabus/'>  C language course syllabus.</Link></p>
            </>
        )
    },
    {
        title: "1. Solid understanding of core concepts",
        intro: () => (
            <>
                <p> When students do projects, they can improve practical skills by implementing all the theoretical knowledge they have gained during the course. </p>
                <p> This helps them have a better understanding of all the core C programming concepts and how their code executes in the real world.</p>
            </>
        )
    },
    {
        title: "2. Build career portfolio" ,
        intro: () => (
            <>
                <p>You can add all these projects to your portfolio which showcases your knowledge and expertise in C programming. </p>
                <p>Learners start with beginner friendly projects to gain in-depth knowledge of C and then move forward to intermediate level projects and then to advanced projects. </p>
            </>
        )
    },
    {
        title: "3. Enhance trust and credibility" ,
        intro: () => (
            <>
                    <p>By putting projects in your portfolio, you can showcase the complexity of projects you can handle. This builds trust and credibility among your customers for freelancers and attracts employers from top companies. </p>
            </>
        )
    },
    {
        title: "4. Land technical jobs" ,
        intro: () => (
            <>
                <p> Having theoretical knowledge of C programming won’t help you land a high-paying technical job. However, with advanced practical knowledge and problem-solving skills, you can excel in this domain. </p>

                <p> Doing C programming projects can help you gain experience and understand every small thing that you may encounter while writing and executing C codes. </p>
            </>
        )
    },
    {
        title: "Become a C Programming expert in the next 30 days with codegnan" ,
        intro: () => (
            <>
                <p>You can enrol in the 30-day C Programming training course at Codegnan under the mentorship of top professionals in the domain. This course covers the fundamentals of C programming, along with <b>hands-on training</b> after each module. It ensures you can implement theoretical knowledge into real-world projects. </p>

                <p>They offer <b>online classes</b> for students globally and have an <b>offline training </b>institute in <Link className="link-color" to='/python_training_in_Vijayawada'>  Vijayawada</Link> . The course fee is <b>₹5,000</b> for both online and offline classes, available for a limited period. Eligible people can also get a 35% discount on the course fee and pay only ₹3500.</p>

                <p>Codegnan also offers a 100-day <Link className="link-color" to='/job_accelerator_program'>Job Accelerator Program</Link> that promises students to offer jobs immediately after course completion. This can be a great start for your career. Plus, they will provide your support and job assistance throughout your career.</p>

                <p>You can also join their <Link className="link-color" to='/internship_page'> internship program </Link>  to get trained under skilled leaders and work on real-time enterprise projects. There is a set of internship opportunities for Codegnan learners that will give you experience working in the market and get a comprehensive internship certificate</p>
            </>
        )
    },
  
];

const nav_interview = [
    {
        name: "C Language syllabus and subjects for 2024 (with free PDF)",
        link: "/c-language-course-syllabus"
    },
    {
        name:"Machine learning course syllabus (with downloadable PDF)",
        link:"/machine-learning-course-syllabus/"
    }
];

export default function JavaCoursePage() {
    return (
        <div>
            <Course_template head={headdata} course={coursedata} section={courseSections} coursep={course_brief} inter_links={nav_interview} />
        </div>
    );
}
