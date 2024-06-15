import React from "react";
import Course_template from "./Course_template";
import Reactvsangular_photo from '/course_images/reactjs-vs-angular-framework-comparison-for-javascript.webp';
import { Link } from "react-router-dom";

const headdata = {
    title: "React Js vs Angular – Which is the Best JavaScript Framework?",
    date: "February 6, 2024",
    img: Reactvsangular_photo,
    intro: "Whilst talking about Javascript and its popularity, millions of users around the world will not miss out on the discussion on React and Angular. \nThe difference between React and Angular can be scrolled on the web and you will be able to find discussions and debates deeply contrasting ideas about them. Here are a few more points related to  React vs. Angular. \nLet us discuss."
};

const coursedata = {
    title: "",
    p: "👉  Releated resources: ",
    linkText: " Complete Java Course Syllabus for beginners",
    syllabusLink: "/java-course-syllabus"
};

const courseSections = [
   
    {
        title: "What is ReactJS ?",
        intro: "React.js is maintained by Facebook which is an open-source JavaScript library for creating desktop, web, and mobile application UIs. \nIn contrast to most of the websites, those who worked with React don’t have server-side rendering, they are rendered in the browser. \nThis implies users don’t need to wait for the server response to render another page. It’s a quicker experience, which is particularly significant for mobile applications. React’s tool library permits developers to fabricate components that are dropped onto a website page. \nThese components, which resemble custom HTML components, are what the clients see on the site. Components can be reused across applications and are a lot simpler to refresh and update than looking through lines of code. Organizations that use React incorporate Facebook (and Instagram), Uber, and Netflix, among others.<h3>Organizations that use ReactJS:</h3>",
        content: [
                "Facebook",
                "Instagram",
                "Netflix",
                "WhatsApp",
                "Twitter",
                "Uber",
                "Codecademy",
                "Dropbox",
                "Yahoo!",
                "MailAsana"
        ]
    },

];

const course_brief = [
    
   
    {
        title: "Download the Python course curriculum PDF",
        intro: "<br/><ul>" +
            [
                "Python course PDF",
                "Find more information about our Python classroom training in Vijayawada, Hyderabad, Bangalore",
                "Enroll in our free Python course (135 lessons) "
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
   
   
    {
        title: "Complete Python Course Syllabus and Curriculum For 2024",
        intro: () => (
            <>
                Here’s a quick overview of the Python training syllabus for beginners: 
                <br /><br/>
              
                <table className="salary-table">
                    <thead>
                        <tr>
                            <th>Module number</th>
                            <th>Module name</th>
                            <th>Topics Covered</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1	</td>
                            <td>Python Introduction and Setting up the Environment	</td>
                            <td>Introduction to Programming, Choosing Python, Setting up Python environment, Python IDEs</td>
                        </tr>
                        <tr>
                            <td>2	</td>
                            <td>Python Basic Syntax and Data Types	</td>
                            <td>Input/output, Comments, Variables, Data types, Typecasting</td>
                        </tr>
                        <tr>
                            <td>3	</td>
                            <td>Operators in Python	</td>
                            <td>Arithmetic, Assignment, Comparison, Logical, Identity, Membership, Bitwise operators</td>
                        </tr>
                        <tr>
                            <td>4	</td>
                            <td>Strings in Python	</td>
                            <td>Creating, Formatting, Indexing, Slicing, String methods5</td>
                        </tr>
                        <tr>
                            <td> 5	</td>
                            <td> Lists in Python	Creating, Properties, </td>
                            <td> Indexing, Slicing, Methods, Modifying lists</td>
                        </tr>
                        <tr>
                            <td> 6	</td>
                            <td> Tuples in Python	</td>
                            <td> Syntax, Properties, Indexing, Slicing, Methods</td>
                        </tr>
                        <tr>
                            <td> 7	</td>
                            <td> Sets in Python	</td>
                            <td> Syntax, Updating, Operations, Methods</td>
                        </tr>
                        <tr>
                            <td>  8	</td>
                            <td>  Dictionaries in Python	</td>
                            <td>  Syntax, Keys/values, Accessing, Methods</td>
                        </tr>
                        <tr>
                            <td>9	</td>
                            <td>Python Conditional Statements	</td>
                            <td>if, if-else, if-elif-else</td>
                         </tr>
                        <tr>
                            <td>10	</td>
                            <td>Loops in Python	</td>
                            <td>while, for, break, continue, pass, range</td>
                        </tr>
                        <tr>
                            <td>11	</td>
                            <td>List and Dictionary Comprehensions	</td>
                            <td>Syntax, Uses</td>
                            </tr>
                        <tr>
                            <td>12	</td>
                            <td>Functions in Python	</td>
                            <td>Creating, Calling, Arguments, Variables, Recursion</td>
                        </tr>
                        <tr>
                            <td>13	</td>
                            <td>Anonymous Functions	</td>
                            <td>Lambda functions</td>
                         </tr>
                        <tr>
                            <td>14	</td>
                            <td>Generators in Python	</td>
                            <td>Creating, Using generators</td>
                            </tr>
                        <tr>
                            <td>15	</td>
                            <td>Modules in Python	</td>
                            <td>Creating, Importing, Built-in modules</td>
                            </tr>
                        <tr>
                            <td>16	</td>
                            <td>Packages & Data Analysis	</td>
                            <td>Creating packages, NumPy, Pandas, Matplotlib</td>
                            </tr>
                        <tr>
                            <td>17	</td>
                            <td>Exceptions & Error Handling	Syntax errors, </td>
                        <td>Logical errors, try/except/finally</td>
                        </tr>
                        <tr>
                            <td>18	</td>
                            <td>Classes & Objects	</td>
                            <td>Creating, Attributes, Methods, Inheritance, Polymorphism</td>
                        </tr>
                        <tr>
                            <td>19	</td>
                            <td>Date & Time	</td>
                            <td>date, time, datetime modules</td>
                        </tr>
                        <tr>
                            <td>20	</td>
                            <td>Regex in Python	</td>
                            <td>re module, Common functions</td>
                        </tr>
                        <tr>
                            <td>21	</td>
                            <td>Files in Python	Opening, </td>
                            <td>Reading, Writing, Closing files</td>
                        </tr>
                        <tr>
                            <td>22	</td>
                            <td>Web Scraping </td>	
                            <td>BeautifulSoup, Scraping static & dynamic sites</td>
                        </tr>
                        <tr>
                            <td>23	</td>
                            <td>Database Access	MySQL, </td>
                            <td>CRUD operations</td>
                        </tr>
                        <tr>
                            <td>24	</td>
                            <td>Data Analysis	NumPy, </td>
                            <td>Pandas, Visualization</td>
                        </tr>
                        <tr>
                            <td>25	</td>
                            <td>APIs in Python	</td>
                            <td>Public APIs, Accessing data</td>
                        </tr>
                        <tr>
                            <td>26	</td>
                            <td>Python for Web Development	</td>
                            <td>Flask Framework, Routes, Templates</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    },

    {
        title: "1. Python Introduction and Setting up the Environment",
        intro: "The first section of the course introduces learners to Python programming, including the process of downloading and setting up its environment, and Python IDEs. Plus, you will know where Python is mostly used and why it is gaining popularity in Data Science.\nSubjects covered in introduction and setting up the Python environment: :<br/> <br/><ul>" +
            [
                " Introduction to Programming",
                " R or Python?",
                " Why Python for Data Science?",
                " Different job roles with Python",
                " Different Python IDEs",
                " Downloading and setting up the Python environment"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "2. Python Basic Syntax and Data Types",
        intro: "Once you have installed Python on PCs and Macs, you must know how to write a program. But before that, this course will introduce you to the basic syntax, input and output operations, comments, variables, data types, and typecasting in Python. While variables store data of multiple types, each type has a different function. You will learn each data type category and cast them from one type to another. \nSubjects covered in basic syntax and data types in Python: :<br/> <br/><ul>" +
            [
                "Python input and output operations.",
                "Comments",
                "Variables, rules for naming variables",
                "Basic Data Types in Python",
                "Typecasting in Python"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "3. Operators in Python",
        intro: "Operators in a programming language instruct the machine to perform a particular operation on variables and values. Python operators are of multiple types, and each defines a unique operation. For example, the arithmetic operator “+” instructs the interpreter to perform “addition”. In this part of the course, you will be introduced to each of these operators and will understand where to use them and how they function in an instruction. \nSubjects covered in operators in Python :<br/> <br/><ul>" +
            [
                "Arithmetic operators",
                "Assignment operators",
                "Comparison operators",
                "Logical operators",
                "Identity operators",
                "Membership operators",
                "Bitwise operators"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "4. Strings in Python",
        intro: "Strings are usually the collection of alphabets, words, or characters. These are some of the primitive data structures and building blocks for data manipulation. This part of the Python course will introduce you to strings and their representation, multiple string methods, string indexing and slicing, and formatting strings.\nSubjects covered in strings in Python:<br/> <br/><ul>" +
            [
                "Creating strings",
                "String formatting",
                "Indexing",
                "Slicing",
                "String methods"
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "5. Lists",
        intro: "Python programmers use lists to store multiple items in a single variable. Lists are one of the four main in-built Python data types, and you can identify them when mentioned within square brackets. List items maintain an order, are changeable, and allow duplicate values. This section will cover the basics of creating Python lists, including list indexing and slicing, and different list methods. \nSubjects covered in lists in Python:<br/> <br/><ul>" +
            [
                "Creating lists",
                "Properties of lists",
                "List indexing",
                "List slicing",
                "List of lists",
                "List methods",
                "Adding, updating & removing elements from lists"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "6. Tuples",
        intro: "Another in-built Python data type, other than lists, is tuples and it also stores multiple items in a single variable. Python tuple items are written within round brackets, and these collections maintain an order and are unchangeable. This part of the Python course will give in-depth knowledge of tuples, including their syntax, properties, indexing and slicing, and tuple methods. \nSubjects covered in tuples in Python:<br/> <br/><ul>" +
            [
                "Syntax to create tuples",
                "Tuple properties",
                "Indexing on tuples",
                "Slicing on tuples",
                "Tuple methods"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "7. Sets",
        intro: "Just like Lists and Tuples, Sets form an essential part of Python’s in-built data types that can store several items in a single variable. These elements are written within curly brackets and are unordered, unchangeable, and unindexed. Sets are different from the previous two data types, and learners will know the difference in this section. Plus, you will learn the syntax for creating sets, their operations and methods, and updating sets. \nSubjects covered in sets in Python:<br/> <br/><ul>" +
            [
                "The syntax for creating sets",
                "Updating sets",
                "Set operations and methods",
                "Difference between sets, lists, and tuples",

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "8. Dictionaries ",
        intro: "Lastly, you will know dictionaries, one of the four in-built Python data types used to store data values in a key:value pairs, and are written within curly brackets. This section will introduce you to the creation of dictionaries and storing data within them, along with knowledge of keys and values, ways to access elements of dictionaries, and different dictionary methods.\n Subjects covered in dictionaries in Python:<br/> <br/><ul>" +
            [
                "The syntax for creating Dictionaries",
                "Storing data in Dictionaries ",
                "Dictionaries keys and values",
                "Accessing the elements of Dictionaries ",
                "Dictionary methods"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "9. Python conditional statements",
        intro: "While you are creating a Python program, you may need to put some conditions. For example, if a condition is true, then the next statement will be executed; otherwise, another statement will be printed. Python conditional statements consist of if statements, if-else statements, and if-elif-else statements. This section of the course will help you set logic with each of these conditional statements. \nSubjects covered in conditional statements in Python:<br/> <br/><ul>" +
            [
                "Setting logic with conditional statements",
                "If statements",
                "If -else statements",
                "If-elif-else statements"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "10. Loops in Python",
        intro: "ust like conditional statements, loops in Python are vital to know. Looping refers to the execution of repeated statements until a specific condition is met. This programming language mainly uses while and for loop commands. You will learn them in this section, along with the use of break, continue, and pass statements and the use of the range function. \nSubjects covered in loops in Python:<br/> <br/><ul>" +
            [
                "Iterating with Python loops",
                "while loop",
                "for loop",
                "range",
                "break",
                "continue",
                "pass",
                "enumerate",
                "zip",
                "assert"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "11. List and Dictionaries comprehension",
        intro: "Python List and Dictionaries comprehension offers shorter syntax to create new lists or new dictionaries depending on the value of an existing list. This section will define why list comprehension is used and the syntax for list comprehension and dict comprehension. \nSubjects covered in list and dictionary comprehension in Python:<br/> <br/><ul>" +
            [
                "Why List comprehension",
                "The syntax for list comprehension",
                "The syntax for dict comprehension"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "12. Functions ",
        intro: "Functions within a Python program are a collection or block of code that is executed only when you call for them, and they return data as a result. This segment of the Python course will teach you about creating and calling functions, along with different arguments, global and local variables, and recursion.\n Subjects covered in functions in Python:<br/> <br/><ul>" +
            [
                "What are Functions",
                "Modularity and code reusability",
                "Creating functions",
                "Calling functions",
                "Passing Arguments",
                "Positional Arguments",
                "Keyword Arguments",
                "Variable-length arguments (*args)",
                "Variable Keyword length arguments (**kargs)",
                "Return keyword in Python ",
                "Passing function as an argument",
                "Passing function in return",
                "Global and local variables",
                "Recursion"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "13. Anonymous Function ",
        intro: "Python’s anonymous functions refer to those that have no name and can be invoked immediately or stored within a variable. These are known as lambda functions. They can take any number of arguments and only one expression. You will learn about them in depth in this portion. \n Subjects covered in anonymous function in Python:<br/> <br/><ul>" +
            [
                "Lambda",
                "Lambda with filter",
                "Lambda with map",
                "Lambda with reduce"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "14. Generators",
        intro: "Generators in Python allow coders to declare a function that acts like an iterator. These are the shortcuts to creating iterators, and this part of the course will teach you how to create and use generators. \nSubject covered in generators in Python: <br/> <br/><ul>" +
            [
                " Creating and using generators"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "15. Modules ",
        intro: "Modules are similar to a code library that consists of Python definitions and statements and can be imported into other modules or to the main module. You will learn how to create modules, import functions and variables from different modules, and learn the in-built Python modules here.\nubjects covered in modules in Python:<br/> <br/><ul>" +
            [
                "Creating modules",
                "Importing functions from a different module",
                "Importing variables from different modules",
                "Python built-in modules"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "16. Packages  – Data Analysis",
        intro: "<br/> <br/><ul>" +
            [
                "Creating packages",
                "Importing modules from the package",
                "Different ways of importing modules and packages",
                "Working on Numpy, Pandas, and Matplotlib"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "17. Exceptions and Error handling",
        intro: "When your Python program encounters an error or exception while executing a code, it normally stops execution and generates an error message. You need to know ways of handling such errors and exceptions. This part of the course will teach with the necessary measures using try, except, and finally block, along with teaching multiple syntax and logical errors.\nSubjects covered in exceptions and error handling in Python:<br/> <br/><ul>" +
            [
                "Syntax errors",
                "Logical errors",
                "Handling errors using try, except and finally"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "18. Classes and Objects (OOPS) ",
        intro: "As Python programming is object-oriented, there is an object in almost everything in Python. So, you need to know what an object is and how to create it. Along with that, you must know about classes that act like object constructors in Python. This portion of the course will give you a clear view of both classes and objects, along with attributes and methods, inheritance, polymorphism, and operator overloading.\nSubjects covered in classes and objects in Python:<br/> <br/><ul>" +
            [
                "Creating classes & Objects",
                "Attributes and methods",
                "Understanding __init__ constructor method",
                "Class and instance attributes",
                "Different types of methods",
                "Instance methods",
                "Class methods",
                "Static methods",
                "Inheritance",
                "Creating child and parent class",
                "Overriding parent methods",
                "The super() function",
                "Understanding Types of inheritance",
                "Single inheritance",
                "Multiple Inheritance",
                "Multilevel Inheritance",
                "Polymorphism",
                "Operator overloading"
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "19. Date and Time",
        intro: "Date and time are modules of Python and are named the DateTime module, which supplies Python classes to work with date and time. You can learn multiple other associated things like time delta, strftime(), striptime() and more, along with date and time modules.\nSubjects covered in data and time in Python:<br/> <br/><ul>" +
            [
                "date module",
                "time module",
                "datetime module",
                "time delta",
                "formatting date and time",
                "strftime()",
                "striptime()"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "20. Regex",
        intro: "Regular Expression (Regex), a tiny but highly specialised programming language, is used within Python and is available through the “re” module. This portion of the course will allow you to understand in depth the use of regex and a few “re” module functions that are commonly used while coding.\n Subjects covered in Regex in Python:<br/> <br/><ul>" +
            [
                "Understanding the use of regex",
                "re.search()",
                "re.compile()",
                "re.find()",
                "re.split()",
                "re.sub()",
                "Meta characters and their use"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "21. Files",
        intro: "A file in Python is the named location where you can store data. There are multiple functions in Python for creating, reading, deleting, and updating files. You can learn them from this part of the course that gives you a clear understanding of files, from opening and reading to writing and closing files. \nSubjects covered in files in Python:<br/> <br/><ul>" +
            [
                "Opening file",
                "Opening different file types",
                "Read, write, close files",
                "Opening files in different modes"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "22. Web Scraping ",
        intro: "Web Scraping is a vital skill for anyone, especially data scientists, who are responsible for analysing large volumes of datasets. This process uses an algorithm or a program to extract a huge volume of data from the web. You can learn the basics of web scraping with beautiful soup and scraping dynamic websites in this segment.  \nSubjects covered in web scraping in Python:<br/> <br/><ul>" +
            [
                "Installing BeautifulSoup",
                "Understanding web structures",
                "Chrome devtools",
                "request ",
                "Scraping data from the web using Beautiful Soup",
                "scraping static websites",
                "Scraping dynamic websites using Beautifulsoup"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "23. Database Access ",
        intro: "You can use Python in database applications, and this section teaches you MySQL which is one of the most popular databases. It will cover the basics of creating tables and inserting values into them, along with the idea of querying and updating and deleting database tables.\nSubjects covered in database access in Python: <br/> <br/><ul>" +
            [
                "Accessing Database using MySql",
                "Creating tables",
                "Insert Values",
                "Commit changes",
                "Query",
                "Update and Delete"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "24. Working on Data Analysis ",
        intro: "Data analysis is a process of collecting, transforming, and organising data to make data-driven decisions. In Python, data analysis can be done using NumPy and Pandas. This section will teach you data analysis and data visualisation in Python.\nSubjects covered in working on data analysis in Python:<br/> <br/><ul>" +
            [
                "Introduction and Working on Numpy-Multidimensional Arrays",
                "Working on Pandas – EDA Process",
                " Data Visualization",

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "25. APIs the Unsung Hero of the Connected World ",
        intro: "Python APIs are used to retrieve data from multiple sources. For example, you can retrieve weather data from various websites, and this segment will give you hands-on experience on it. Learners will get a clear understanding of APIs and how to access Public APIs.\nSubjects covered in APIs in Python:<br/> <br/><ul>" +
            [
                "Introduction to APIs",
                "Accessing Public APIs"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "26. Python for Web Development – Flask",
        intro: "Flask is a popular Python API that allows experts to build web applications. Python 2.6 and higher variants must install Flask, and you can import Flask on any Python IDE from the Flask package. This section of the course will help you install Flask and learn how to use the Python Flask Framework.\n Subjects covered in Python for Web development using Flask:<br/> <br/><ul>" +
            [
                "Introduction to Python Web Framework Flask",
                "Installing Flask",
                "Working on GET, POST, PUT, METHODS using Python Flask Framework",
                "Working on Templates, render_template function"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
   
    {
        title: "Hands-on projects included the Python course syllabus",
        intro: () => (
            <>
                <p>You can also check out our complete <Link to="/python-full-stack-developer-course-syllabus" onClick={() => window.scrollTo({ top: 0 })} className="link-color">full stack Python developer course curriculum.</Link> </p>
            </>
        )
    },
    {
        title: "1. Web Scraping Dynamic Website with multiple pages along with Data Analysis",
        intro: () => (
            <>
            <p>Web scraping refers to extracting of useful data from websites using Python script. This hands-on training program teaches you web scraping of dynamic websites and collects data from single and multiple websites without manually writing code for each site. </p>

            <p>Learners will get in-depth knowledge of importing necessary libraries, setting up URL strings, parsing data from target websites using the BeautifulSoup library parser, identifying and extracting classes and tags, and creating and applying loops on multiple pages to extract required data.</p>
            </>
        )
    },
    {
        title: "2. Sending Automated Emails",
        intro: () => (
            <>
            <p>You will get hands-on training in sending automated email messages in Python, including text messages, photos, and important files. Learners can import modules, build message content, attach pictures and multiple attachments, make a list of all emails they want to send, and set a function to instruct the machine to send emails automatically to set destinations. </p>
             
            <p>You will also learn to  <Link to="/how-to-send-multiple-emails-simple-way-using-python" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> schedule email messages using the schedule package in Python.</Link> </p>
            <img src="/courses-images/sending_automated_emails_illustrationg.png" alt="error" />
            <img src="/syllabuspages/python_is_most_popular_programming_language.png" alt="error" />
            </>
        )
    },
    {
        title: "3. Building a Virtual Assistant with Frontend Interface",
        intro: () => (
            <>
            <p>Building a virtual assistant with a front-end interface is interesting, and you can do it with Python. This course will give you real-life experience in building a virtual assistant and understanding the use of different Python methods.</p>
               
            </>
        )
    },
    {
        title: "4. Assessing Public Weather APIs and People in Space API",
        intro: () => (
            <>
            <p>Python APIs help in understanding and predicting the weather for tomorrow. Here, you can learn how to use Public Weather APIs in real-time to predict tomorrow’s weather. Similarly, you can work with People in Space APIs, which create an indicator that displays the number of people currently in space.</p>
              
            </>
        )
    },
    {
        title: "What is the Python course fee? ",
        intro: () => (
            <>
            <p>Passing the Hackerrank examination is tough, but you can easily crack it with regular practice. This course will help you solve challenges at every level, ensuring you achieve a five-star badge and rank within the top 1 lakh challengers. </p>
            </>
        )
    },
    {
        title: "5. Working on Hackerrank use cases and solving level-by-level challenges ",
        intro: () => (
            <>
            <p>The Python course fee at Codegnan is Rs 8,000 for both online and offline classes. Upon completion, you will receive an industry-recognised certificate that will help you land good jobs in your early career phase.</p>
             
            </>
        )
    },
    {
        title: "Is learning Python easy?",
        intro: () => (
            <>
            <p>Learning Python is comparatively easier than most other programming languages and is a good place to start your programming career. However, by saying easy, it doesn’t mean they can’t build complexity. Still, its packaging or library simplifications, easy-going syntax, and object model simplifications make it easier than C, Java, and other languages.</p>
            <p>It has an easy-to-understand syntax that beginners can catch and implement in their programs. Python has multiple built-in features and available modules that you can import into your program to get the desired result. So, all you need to do is learn the library functions, APIs, how to import modules and other elements of Python programming. </p>
            <p> Learn the <Link to="/java-training-in-banglore" onClick={() => window.scrollTo({ top: 0 })} className="link-color">career opportunities as a Python developer in India.</Link> </p>
            </>
        )
    },
    {
        title: "What is the Python course duration? ",
        intro: () => (
            <>
                <p>The Python course duration at Codegnan is 1 month. During this period, you will not only receive in-depth theoretical Python knowledge but also hands-on experience upon completion of each module. </p>
                <p>Additionally, you get to work on three <Link to="/python-projects" onClick={() => window.scrollTo({ top: 0 })} className="link-color">real-life Python projects</Link>that can improve your professional portfolio.</p>
                <p>Have questions? <Link to="/contact_us" onClick={() => window.scrollTo({ top: 0 })} className="link-color">Contact our Python experts </Link> and get your first two classes for FREE.</p>
            </>
        )
    },
    {
        title: "What is the Python course fee? ",
        intro: () => (
            <>
            <p>The Python course fee at Codegnan is Rs 8,000 for both online and offline classes. Upon completion, you will receive an industry-recognised certificate that will help you land good jobs in your early career phase.</p>
              
            </>
        )
    },
    {
        title: "What is the salary of a Python developer in India?",
        intro: () => (
            <>
                A Python developer in India can make a salary between  <Link className="link-color" to="https://www.ambitionbox.com/profile/python-software-developer-salary"> ₹1.5 LPA and ₹11.0 LPA </Link>  with an average salary of ₹6.1 LPA. Therefore, the estimated take-home salary for Python developers is ₹33,547-₹34,809 per month. 
                <br />
                <img src="/syllabuspages/java.1.png" alt="" width="100%" />
                
                <table className="salary-table">
                    <thead>
                        <tr>
                            <th>City name</th>
                            <th>Python developer salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Python in Hyderabad</td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/python-software-developer-salary/hyderabad-location">₹2.0LPA – ₹9.0LPA</Link></td>
                        </tr>
                        <tr>
                            <td>Python in Bengaluru</td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/python-software-developer-salary/bengaluru-location">₹2.4LPA – ₹11.0LPA</Link></td>
                        </tr>
                        <tr>
                            <td>Python in Vijayawada</td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/python-software-developer-salary/vijayawada-location">₹3.5LPA – ₹8.0LPA</Link></td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    },
    {
        intro: () => (
            <>
                <h4>Looking for more details about codegnan’s Core Java courses?</h4>
                <ul>
                    {[
                        { name: "Data Science Course curriculum and syllabus", link: "/data-science-course-syllabus" },
                        { name: "Java course syllabus for beginners to advanced", link: "/java-training-hyderabad" },
                        { name: "Python vs Java vs PHP—The key differences", link: "/python-vs-java-vs-php-the-ultimate-guide/" }
                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <br />
                <h5>Further resources</h5>
                <p>Visit our training centres (in Hyderabad, Vijayawada, and Bangalore) and get your first two training classes for free.</p>
            </>
        )

    },
    {
        title: "Why enroll in codegnan’s Python training course?",
        intro: "If you want to start your career in Python programming, you can try Codegnan. There are multiple reasons why you must give it a try.<br/> <br/><ul>" +
            [
                "The course is available for only Rs 8,000",
                "Gain in-depth Python knowledge within 1 month",
                "Trained by experts from top institutions and industry specialists",
                "Both online and offline classes are available",
                "Each module ends in a practical class",
                "Work on three real-world projects",
                "Get career support with Codegnan’s job acceleration program",
                "Receive industry-accredited certificate on course completion",
                "Gain chances to rank among less than 1 lakh candidates and win a Hackerrank certificate",
                "Codegnan’s learners are placed in more than 1250 companies",
                "Codegnan has received 4.8/5 ratings from more than 2,200 students"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },

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
