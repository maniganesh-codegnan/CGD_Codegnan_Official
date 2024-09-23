import React from "react";
import './internship.css';
import { Link } from "react-router-dom";
import Inter_dropdown from "./Intern_dropdown/Inter_dropdown.jsx";
import FormComponent from '../Form/Form.jsx';
import InternsyllabusComp from './Java_syllabus/Intern_syllabus.jsx';
import { useState } from "react";
import style from '/training/heading-separator.png';

const  data2 = [

    {
        head: "Python Introduction and setting up the environment",
        p: (
            <>
            <ul>
              <li> Introduction to programming</li>
              <li> R or Python?</li>
              <li> Why Python for Data Science?</li>
              <li> Different job roles with Python</li>
              <li> Different Python IDEs</li>
              <li> Downloading and setting up python environment</li>
            </ul> 
          <p><b>Hands-On – Installing Python – IDLE</b></p>
        </>
        )
      },
      {
        head: "Python Basic Syntax and Data Types",
        p: (
            <>
            <ul>
              <li> Python input and output operations.</li>
              <li> Comments</li>
              <li> Variables, rules for naming variables</li>
              <li> Basic Data Types in Python</li>
              <li> Typecasting in python</li>
            </ul>
         <p><b>Hands-On – Using comments, variables, data types, and typecasting in python program</b></p>
        </>
        )
      },
      {
        head: "Operators in Python",
        p: (
            <>
                 <li> Arithmetic operators</li>
                 <li> Assignment operators</li>
                 <li> Comparison operators</li>
                 <li> Logical operators</li>
                 <li> Identity operators</li>
                 <li> Membership Operators</li>
                 <li> Bitwise Operators</li>
                 <br/>
            <p><b>Hands-On – Working with different data types in a program</b></p>
        </>
        )
      },
      {
        head: "Strings in Python ",
        p: (
            <>
                 <li> Creating strings</li>
                 <li> String formatting</li>
                 <li> Indexing</li>
                 <li> Slicing</li>
                 <li> String methods</li>
            <br/>
            <p><b>Hands-On – Performing string operations</b></p>
        </>
        )
      },
      {
        head: "Lists",
        p: (
        <>
                <li> Creating lists</li>
                <li> Properties of lists</li>
                <li> List indexing</li>
                <li> List slicing</li>
                <li> List of lists</li>
                <li> List Methods</li>
                <li> Adding, Updating & removing elements from lists</li>
          <br/>
          <p><b>Hands-On – Slicing, Indexing, and using methods on lists</b></p>
        </>
        )
      },
      {
        head: "Tuples",
        p: (
            <>
                <li> Syntax to create tuples</li>
                <li> Tuple properties</li>
                <li> Indexing on tuples</li>
                <li> Slicing on tuples</li>
                <li> Tuple methods</li>
          <br/>
          <p><b>Hands-On – Working with tuples</b></p>
        </>
        )
      },
      {
        head: "Sets",
        p: (
        <>
                <li> Syntax for creating sets</li>
                <li> Updating sets</li>
                <li> Set operations and methods</li>
                <li> Difference between sets, lists and tuples</li>
          <br/>
          <p><b>Hands-On – Performing set operations in a program</b></p>
        </>
        )
      },
      {
        head: "Dictionaries",
        p: (
            <>
            <li> Syntax for creating Dictionaries</li>
            <li> Storing data in dictionaries</li>
            <li> Dictionaries keys and values</li>
            <li> Accessing the elements of dictionaries</li>
            <li> Dictionary methods</li>
          <br/>
          <p><b>Hands-On – Creating dictionaries and using dictionaries methods</b></p>
        </>
        )
      },
      {
        head: "Python conditional Statements",
        p: (
        <>
              <li> Setting logic with conditional statements</li>
              <li> If statements</li>
              <li> If -else statements</li>
              <li> If-elif-else statements</li>
          <br/>
          <p><b>Hands-On – Setting logic in programs using conditional statements</b></p>
        </>
        )
      },  
      {
        head: "Loops in Python",
        p: (
            <>
              <li> Iterating with python loops</li>
              <li> while loop</li>
              <li> for loop</li>
              <li> range</li>
              <li> break</li>
              <li> continue</li>
              <li> pass</li>
              <li> enumerate</li>
              <li> zip</li>
              <li> assert</li>
          <br/>
          <p><b>Hands-On – Iterating with loops in python</b></p>
        </>
        )
      },
      {
        head: "Getting Started with Hackerrank use cases and working on them",
        p: (
        <>
              <li>  Solving Level by Level Challenges</li>
              <li>  Assignments to acquire Bronze and Silver Level badges</li>
        </>
        )
      },
      {
        head: "Lists and Dictionaries comprehension",
        p: (
            <>
                <li> Why List comprehension</li>
                <li> Syntax for list comprehension</li>
                <li> Syntax for dict comprehension</li>
          <br/>
          <p><b>Hands-On – Using List and Dictionary comprehension</b></p>
        </>
        )
      },
      {
        head: "Functions",
        p: (
        <>
                <li> What are Functions</li>
                <li> Modularity and code reusability</li>
                <li> Creating functions</li>
                <li> Calling functions</li>
                <li> Passing Arguments</li>
                <li> Positional Arguments</li>
                <li> Keyword Arguments</li>
                <li> Variable length arguments (*args)</li>
                <li> Variable Keyword length arguments (**kargs)</li>
                <li> Return keyword in python</li>
                <li> Passing function as argument</li>
                <li> Passing function in return</li>
                <li> Global and local variables</li>
                <p> ● Recursion</p>
          <br/>
          <p><b>Hands-On – Creating our own functions,passing arguments and performing operations</b></p>
        </>
        )
      },
      {
        head: "Anonymous Function",
        p: (
            <>
              <li> Lambda</li>
              <li> Lambda with filter</li>
              <li> Lambda with map</li>
              <li> Lambda with reduce</li>
          <br/>
          <p><b>Hands-On – Working with lambda, filter,map and reduce in python</b></p>
        </>
        )
      },
      {
        head: "Generators",
        p: (
        <>
              <li> Creating and using generators</li>
          <br/>
          <p><b>Hands-On – Creating and using generators</b></p>
        </>
        )
      },
      {
        head: "Modules",
        p: (
            <>
              <li> Creating modules</li>
              <li> Importing functions from different module</li>
              <li> Importing Variables from different modules</li>
              <li> Python builtin modules</li>
          <br/>
          <p><b>Hands-On – Creating and importing Modules</b></p>
        </>
        )
      },
      {
        head: "Packages",
        p: (
        <>
              <li> Creating packages</li>
              <li> Importing modules from package</li>
              <li> Different ways of importing modules and packages</li>
              <li> Working on Numpy,Pandas and Matplotlib</li>
          <br/>
          <p><b>Hands-On – Creating and importing packages</b></p>
        </>
        )
      },
      {
        head: "Exception and Error Handling",
        p: (
            <>
              <li> Syntax errors</li>
              <li> Logical errors</li>
              <li> Handling errors using try,except and finally</li>
          <br/>
          <p><b>Hands-On – Handling Errors with try and except</b></p>
        </>
        )
      },
      {
        head: "Classes and Objects (OOPS)",
        p: (
        <>
            <li> Creating classes & Objects</li>
            <li> Attributes and methods</li>
            <li> Understanding __init__ constructor method</li>
            <li> Class and instance attributes</li>
            <li> Different types of of methods</li>
            <li> Instance methods</li>
            <li> Class methods</li>
            <li> Static methods</li>
            <li> Inheritance</li>
            <li> Creating child and parent class</li>
            <li> Overriding parent methods</li>
            <li> The super() function</li>
            <li> Understanding Types of inheritance</li>
            <li> Single inheritance</li>
            <li> Multiple inheritance</li>
            <li> Multilevel inheritance</li>
            <li> Polymorphism</li>
            <li> Operator overloading</li>
          <br/>
          <p><b>Hands-On – Creating classes, objects. Creating methods and attributes. Working with different methods. Using inheritance and polymorphism.</b></p>
        </>
        )
      },
      {
        head: "Date and Time",
        p: (
            <>
            <li> date module</li>
            <li> time module</li>
            <li> datetime module</li>
            <li> time delta</li>
            <li> formatting date and time</li>
            <li> strftime()</li>
            <li> striptime()</li>
           <br/>
          <p><b>Hands-On – Iterating with loops in python</b></p>
        </>
        )
      },
      {
        head: "Regex",
        p: (
        <>
            <li> Understanding the use of regex</li>
            <li> re.search()</li>
            <li> re.compile()</li>
            <li> re.find()</li>
            <li> re.split()</li>
            <li> re.sub()</li>
            <li> Meta characters and their use</li>
          <br/>
          <p><b>Hands-On – using a regular expression to search patterns</b></p>
        </>
        )
      },
      {
        head: "Files",
        p: (
            <>
              <li> Opening file</li>
              <li> Opening different file types</li>
              <li> Read,write,close files</li>
              <li> Opening files in different modes</li>
          <br/>
          <p><b>Hands-On – Reading, Writing, Appending, opening and closing files.</b></p>
          <p><b>Use Cases: Download Instagram public Data <br/>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  Download Youtube Videos with its details<br/>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  Sending Automated Emails</b></p>
          <p>Learner will achieve five star badge in HackerRank Able to Crack any competitive coding question Learner HackerRank rank will be less than 1 Lakh.</p>
        </>
        )
      },
      {
        head: "MYSQL DATABASE",
        p: (
        <>
        <h2>Introduction to Database</h2><br/><br/>
              <li> What is a Database?</li>
              <li> Why use a Database?</li>
              <li> What is DBMS?</li>
              <li> Types of DBMS</li>
              <li> Introduction to SQL</li>
              <li> Database vs DBMS vs SQL vs MySQL</li>
              <li> MySQL Installation</li>
        </>
        )
      },
      {
        head: "SQL Sublanguages",
        p: (
            <>
              <li> Introduction to SQL Sublanguages</li>
              <li> Creating tables and describing its structure</li>
              <li> DML:INSERT part-1</li>
              <li> DML:INSERT part-2</li>
              <li> Null and Not Null constraints,altering default behaviour</li>
              <li> DQL:Select</li>
              <li> DCL:Commit, Rollback,Savepoint</li>
              <li> DML:Working with Update and delete commands</li>
        </>
        )
      },
      {
        head: "MySQL Operators",
        p: (
        <>
              <li> Where Clause</li>
              <li> Introduction to MySQL Operators-1</li>
              <li> Introduction to MySQL Operators-2</li>
              <li> MySQL Warnings vs Errors</li>
              <li> Comparison Operators part-1</li>
              <li> Logical AND and other comparison operators</li>
        </>
        )
      },
      {
        head: "Comparison Operators",
        p: (
            <>
            <li>  BETWEEN AND and NOT BETWEEN AND,OR operator in Logical Operators</li>
            <li>  IN and NOT IN Operator</li>
            <li>  IS NULL and IS NOT NULL</li>
        </>
        )
      },
      {
        head: "DDL:Alter and Renamee Docs",
        p: (
            <>

            <li> ALTER ADD</li>
            <li> ALTER MODIFY</li>
            <li> ALTER-DROP</li>
            <li> ALTER – RENAME and ALTER-RENAME COLUMN</li>
            <li> ALTER-CHANGE</li>
            <li> RENAME</li>
        </>
        )
      },
      {
        head: "String Functions",
        p: (
        <>
            <li> Use of Alias</li>
            <li> CONCAT</li>
            <li> CONCAT WS</li>
            <li> LOWER and UPPER</li>
            <li> CHARACTER LENGTH and SUBSTRING</li>
            <li> REVERSE and REPLACE</li>
        </>
        )
      },
      {
        head: "Constraints",
        p: (
            <>
            <li> Introduction to Constraints</li>
            <li> NOT NULL and DEFAULT Constraints</li>
            <li> Primary key Constraint</li>
            <li> Unique Constraint</li>
            <li> Working with Auto_increment</li>
            <li> CHECK Constraints</li>
            <li> Relationships in DBMS(One to One, One to many etc.)</li>
            <li> Introduction to Foreign key constraint</li>
            <li> Working with foreign keys</li>
            <li> REFERENTIAL ACTIONS and Alter Constraints</li>
            <li> Alter-add with other constraints</li>
        </>
        )
      },
      {
        head: "Refining Selections and working with MySQL workbench",
        p: (
        <>
            <li>  DISTINCT</li>
            <li>  ORDER BY-1</li>
            <li>  Order BY -2</li>
            <li>  LIMIT</li>
            <li>  LIKE</li>
            <li>  MySQL workbench Installation</li>
            <li>  Working with MYSQL Workbench</li>
        </>
        )
      },
      {
        head: "Working with Aggrate function and SQL Files",
        p: (
            <>
            <li>  Introduction to aggregate function</li>
            <li>  Count</li>
            <li>  Group by</li>
            <li>  Min And Max</li>
            <li>  Subqueries</li>
            <li>  Group by with Min and Max </li>
            <li>  Sum and AVG</li>
            <li>  Group by with SUM and AVG</li>
            <li>  Exporting MYSQL Databases</li>
            <li>  Import MYSQL Databases</li>
        </>
        )
      },
      {
        head: "More on Data types",
        p: (
        <>
            <li> Char Vs Varchar</li>
            <li> Integer data types (SMALLINT,TINYINT,…)</li>
            <li> FLOAT VS DECIMAL</li>
            <li> Working with Date and TIME</li>
            <li> CURDATE,CURTIME AND CURRENT_TIMESTAMP</li>
            <li> Date functions</li>
            <li> Time Functions</li>
            <li> Formatting dates</li>
            <li> Operations on dates</li>
            <li> Datetime vs Timestamp</li>
            <li> Automatic Initialization and Updating for TIMESTAMP and DATETIME</li>
        </>
        )
      },
      {
        head: "Getting Started with Hackerrank use cases and working on them",
        p: (
            <>
            <li> Solving Level by Level Challenges</li>
            <li> Assignments to acquire Bronze and Silver Level badges</li>
            </>
        )
      },
      {
        head: "MySQL JOINS",
        p: (
        <>
            <li> Why JOINS?</li>
            <li> Introduction to JOINS</li>
            <li> CROSS JOIN</li>
            <li> INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN</li>
        </>
        )
      },
      {
        head: "Project:Instagram Database Clone",
        p: (
            <>
            <ul>
                <li>   Cloning Instagram’s DB: Users Schema</li>
                <li>   Cloning Instagram’s DB:Followers Schema</li>
                <li>   Cloning Instagram’s DB:Photos Schema</li>
                <li>   Cloning Instagram’s DB:LikesSchema</li>
                <li>   Cloning Instagram’s DB:Hashtags Schema</li>
                <li>   Instagram Clone Challenges</li>
            </ul>
        </>
        )
      },
      {
        head: "Python for Web Development – Flask",
        p: (
        <>
            <h2>Flask Introduction and installation</h2><br/><br/>
            <ul>
                <li> Introduction to flask and its architecture</li>
                <li> Installing flask package and introduction to its components</li>
                <li> Introduction to Virtual Environment and its importance in project development</li>
                <li> Creating Virtual Environment and activating,deactivating it</li>
                <li> Introduction to routing in Flask and Building sample flask application</li>
            </ul>
        </>
        )
      },
      {
        head: "Building routes with flask",
        p: (
            <>
            <ul>
                    <li>  What is a dynamic route?</li>
                    <li>  Building dynamic routes with flask</li>
                    <li>  Redirection in Flask</li>
                    <li>  Dynamic url building with url for function</li>
                    <li>  URL converters in Flask</li>
                    <li>  int and string url converters</li>
                    <li>  Float,uuid and path converters</li>
                    <li>  request and response in Flask</li>
           </ul>
          <p>Hands on:Flask package Installation and creating virtual environment, Building dynamic Routes with flask</p>
        </>
        )
      },
      {
        head: "Getting into Front-end Web Development – HTML",
        p: (
        <>
        <ul>
            <li>  Introduction</li>
            <li>  History and Importance of HTML</li>
            <li>  Basic HTML syntax</li>
            <li>  The current state of HTML</li>
            <li>  HTML resources</li>
            <li>  Choosing a code editor</li>
        </ul>
        </>
        )
      },
      {
        head: " Basic Page Structure",
        p: (
            <>
            <ul>
                <li> Exploring an HTML document</li>
                <li> DOCTYPE declarations</li>
                <li> Document head</li>
                <li> Document body</li>
                <li> Understanding content models</li>
            </ul>
        </>
        )
      },
      {
        head: "Formatting Page Content",
        p: (
        <>
        <ul>
            <li> Formatting content with HTML</li>
            <li> Headings</li>
            <li> Paragraphs</li>
            <li> Emphasising text</li>
            <li> Displaying special characters</li>
            <li> Whitespaces</li>
            <li> Images</li>
        </ul>
        </>
        )
      },
      {
        head: "Creating Lists",
        p: (
            <>
            <ul>
            <li>  Unordered lists</li>
            <li>  Ordered lists</li>
            <li>  Definition lists</li>
        </ul>
        </>
        )
      },
      {
        head: "Structuring Content",
        p: (
        <>
            <ul>
                <li> Value of structure</li>
                <li> Document outlines</li>
                <li> Nav element</li>
                <li> Article element</li>
                <li> Section element</li>
                <li> Aside element</li>
                <li> Div element</li>
                <li> Other semantic elements</li>
            </ul>
        </>
        )
      },
      {
        head: "Creating Links",
        p: (
            <>
            <ul>
                <li>  Anchor element</li>
                <li>  Page internal linking</li>
                <li>  Linking to external pages</li>
                <li>  Linking to downloadable</li>
                <li>  Linking to page regions</li>
            </ul>
        </>
        )
      },
      {
        head: "Controlling styling",
        p: (
            <>
                <ul>
                    <li>  HTML and CSS</li>
                    <li>  Creating inline styles</li>
                    <li>  Style element</li>
                    <li>  Controlling typography</li>
                    <li>  Adding colour</li>
                    <li>  Externalising styles</li>
                </ul>
            </>
        )
      },
      {
        head: "Basic Scripting",
        p: (
        <>
            <ul>
            <li>  HTML and JavaScript</li>
            <li>  The script element</li>
            <li>  Writing a function</li>
            <li>  Using the DOM</li>
            <li>  Listening for an event</li>
            <li>  Responding to events</li>
            <li>  Externalizing JavaScript</li>
        </ul>
        </>
        )
      },
      {
        head: "CSS3: Open with Google Docs",
        p: (
            <>
                <ul>
            <li>  Getting started</li>
            <li>  HTML overview</li>
            <li>  Default browser styles</li>
            <li>  Browser support and inconsistencies</li>
            <li>  Inline, internal and external CSS</li>
            <li>  Naming conventions</li>
        </ul>
        </>
        )
      },
      {
        head: "CSS Core",
        p: (
        <>
            <ul>
            <li>  Syntax, terminology, and naming conventions</li>
            <li>  Type, class, and id selectors</li>
            <li>  Combinator selectors</li>
            <li>  Selectors: Best practices</li>
        </ul>
        </>
        )
      },
      {
        head: "Flask Request Handling",
        p: (
            <>
                <ul>
            <li>   Introduction to flask request object</li>
            <li>   Requests handling in Flask</li>
            <li>   Introduction to Flask files structure</li>
            <li>   Implementation of Flask files structure</li>
        </ul>
        </>
        )
      },
      {
        head: "Jinja 2 Template Engine",
        p: (
        <>
            <ul>
              <li> Flask Intro to Jinja2</li>
          <p>Rendering HTML pages with render_template function</p>
              <li> Integrating css with flask</li>
          <p>More about url for and its usage in Jinja 2</p>
          <p><b> Hands on: Requesting handling with flask and integrating frontend with flask</b></p>
          <p><b> i.e HTML and CSS with Jinja2</b></p>
        </ul>
        </>
        )
      },
      {
        head: "Dynamic Web Pages with flask-Jinja2",
        p: (
            <>
                <ul>
            <li>   More on render_template and its syntax</li>
            <li>   Jinja2 outputting values to template</li>
            <li>   Introduction to Jinja Inheritance</li>
            <li>   Defining Inheritance blocks with jinja2</li>
            <li>   Inheriting parent contents to child template with jinja ‘extends’</li>
            <li>   Introduction to Jinjja 2 statements</li>
            <li>   If statement in Jinja2</li>
            <li>   Nested if,if else statements in jinja2</li>
            <li>   For loop in Jinja2</li>
              <br/>
          <p>Hands on: Rendering Dynamic web pages and performing conditional actions with jinja2</p>
        </ul>
        </>
        )
      },
      {
        head: "CSS: Typography",
        p: (
        <>
            <ul>
            <li>   Web-safe fonts and the font-family property</li>
            <li>   Web fonts and Google fonts</li>
            <li>   The font-size property</li>
            <li>   Practicing with web fonts and font-size</li>
            <li>   The font-style and font-weight properties</li>
            <li>   The color, line height, and text properties</li>
            <li>   Adjusting the font-weight property</li>
        </ul>
        </>
        )
      },
      {
        head: "Layouts",
        p: (
            <>
                <ul>
            <li>   Block vs. inline display</li>
            <li>   The box model</li>
            <li>   Margin and page layouts</li>
            <li>   Practising layouts</li>
            <li>   Practising with padding and spacing</li>
            <li>   Floats</li>
            <li>   Practising with floats</li>
            <li>   The box model fix</li>
            <li>   Practising with columns</li>
            <li>   Box model review</li>
            <li>   Float and display review</li>
            <li>   Horizontal navs with the display property</li>
            <li>   Horizontal navs with the float property</li>
            <li>   Practising with the nav element</li>
            <li>   Positioning</li>
            <li>   Practising with fixed navigation</li>
            <li>   Practising with positioning elements</li>
            <li>   Float, display, and position</li>
            <li>   Layers and the z-index property</li>
        </ul>
        </>
        )
      },
      {
        head: "Login system with flask,Server side sessions",
        p: (
        <>
            <ul>
              <li>  Introduction to Server side sessions</li>
              <li>  Server side sessions with flask_session</li>
              <li>  More on flask_session and session lifecycle control</li>
              <li>  Creating and popping user sessions</li>
              <li>  mysql database integration with flask using mysql_connector</li>
              <li>  More on mysql_connector package</li>
        </ul>
        </>
        )
      },
      {
        head: "CSS",
        p: (
        <>
            <ul>
                <li>   Horizontal navs with the display property</li>
                <li>   Horizontal navs with the float property</li>
                <li>   Practicing with the nav element</li>
                <li>   Positioning</li>
                <li>   Practicing with fixed navigation</li>
                <li>   Practicing with positioning elements</li>
                <li>   Float, display, and position</li>
                <li>   Layers and the z-index property</li>
            </ul>
        </>
        )
      },
      {
        head: "Files Handling with flask",
        p: (
        <>
            <ul>
                <li> Introduction to binary data</li>
                <li> Storing user files in MySQL database(i.e pdfs,excel,docx, etc)</li>
                <li> Viewing and Downloading files with flask’s send_file on browser</li>
            </ul>
            <p><b>Hands on:Storing binary data into MySQL database i.e files data and conversion of binary data to bytes using Byteslo,sending files to browser using flask’s send_file on browser</b></p>
        </>
        )
      },
    {
        head: "CSS :Advanced layout",
        p: (
        <>
            <ul>
              <li>   Design with a grid</li>
              <li>   Intro to CSS Grid</li>
              <li>   CSS Grid example</li>
              <li>   Intro to flexbox</li>
              <li>   CSS Flexbox</li>
              <li>   Responsive page building</li>
            </ul>
        </>
        )
      },
      {
        head: "Projects",
        p: (
        <>
            <ul>
        <p>Custom DevBlog Application</p>
            <li>   Users sign up and login and log out,forgot password</li>
            <li>   Blogs-create, update,delete</li>
          <p>Creating an internal template using HTML & CSS</p>
                   <li>  Customized Template with addition of Media Queries, Layouts.</li>
          <p>Instagram Login page</p>
                  <li>  Creating a similar Instagram Clone Login page</li>
    
        </ul>
        </>
        )
      },
      {
        head: "Java Script",
        p: (
            <>
                <ul>
            <h2>Introduction</h2>
            <br/>
              <li> What is JavaScript?</li>
              <li> How does JavaScript relate to Java?</li>
              <li> History of JavaScript</li>
              <li> Navigating the JavaScript landscape</li>
        </ul>
        </>
        )
      },
      {
        head: "Basics",
        p: (
        <>
            <ul>
              <li>   Tools for JavaScript development</li>
              <li>   Introducing the browser console</li>
              <li>   Add inline JavaScript to an HTML document</li>
              <li>   Add JavaScript in an external file</li>
        </ul>
        </>
        )
      },
      {
        head: " Writing JavaScript",
        p: (
            <>
                <ul>
            <li>   Basic syntax & comments</li>
            <li>   Declarations</li>
            <li>   Arithmetic operators and math</li>
            <li>   Working with strings and numbers</li>
            <li>   Variable hoisting</li>
            <li>   Data structures and types</li>
            <li>   Literals</li>
        </ul>
        </>
        )
      },
      {
        head: " Custom DevBlog Application",
        p: (
        <>
            <ul>
            <li>   Conditional statements and logic</li>
            <li>   Advanced conditions and logic</li>
            <li>   if..else</li>
            <li>   Switch</li>
        </ul>
        </>
        )
      },
      {
        head: "JavaScript :Control flow",
        p: (
            <>
                <ul>
            <li>   Conditional statements and logic</li>
            <li>   Advanced conditions and logic</li>
            <li>   if..else</li>
            <li>   Switch</li>
        </ul>
        </>
        )
      },
      {
        head: "Arrays",
        p: (
        <>
            <ul>
            <li>   Arrays</li>
            <li>   Typed arrays</li>
        </ul>
        </>
        )
      },
      {
        head: "Loops and iteration",
        p: (
            <>
                <ul>
            <li>   for while</li>
            <li>   do..while</li>
            <li>   break/continue</li>
            <li>   for…in</li>
            <li>   for..of</li>
        </ul>
        </>
        )
      },
      {
        head: "Functions",
        p: (
        <>
            <ul>
            <li>   Defining functions</li>
            <li>   Calling functions</li>
            <li>   Function scope</li>
            <li>   Closures</li>
            <li>   Arguments & parameters</li>
            <li>   Arrow functions</li>
        </ul>
        </>
        )
      },
      {
        head: "Flask :Fully Functional Ecommerce Application",
        p: (
            <>
                <ul>
        <h2>Admin Dashboard</h2>
              <br/>
              <li> sign up and login and log out,forgot password</li>
          <p><b>Users sign up,login and logout, forgot password</b></p>
        </ul>
        </>
        )
      },
      {
        head: "Essential JavaScript Built-in methods",
        p: (
            <>
            <ul>
                <li> Number Methods</li>
                <li> String Methods</li>
                <li> Array Methods</li>
                <li> Math Methods</li>
            </ul>
        </>
        )
      },
      {
        head: "Writing JavaScript-Advanced",
        p: (
        <>
            <ul>
                <li> Text formatting – String literals</li>
                <li> String object</li>
                <li> Template literals</li>
                <li> Regular express</li>
            </ul>
        </>
        )
      },
      {
        head: "Fully Functional Ecommerce Application",
        p: (
            <>
                
            <p><b>Admin Dashboard </b></p>
            <ul>
              <li> Add and update,delete items Items dashboard</li>
            </ul>
        </>
        )
      },
      {
        head: "Admin Dashboard",
        p: (
        <>
            <ul>
                <li> Items Dashboard</li>
                <li>User dashboard</li>
            </ul>
        </>
        )
      },
      {
        head: "JavaScript and the DOM",
        p: (
            <>
                <ul>
            <li> Intro to DOM</li>
            <li> Target elements in the DOM with querySelector methods</li>
            <li> Access and change elements</li>
            <li> Access and change classes</li>
            <li> Access and change attributes</li>
            <li> Add DOM elements</li>
            <li> Apply inline CSS to an element</li>
            <li> DOM events</li>
        </ul>
        </>
        )
      },
      {
        head: "Fully Functional Ecommerce Application",
        p: (
        <>
            <ul>
                <li> Search bar</li>
                <li> Shopping cart</li>
            </ul>
        </>
        )
      },
      {
        head: "JavaScript",
        p: (
            <>
            <h4>Es6 Concepts</h4> <br/>
            <ul>
                <li> map</li>
                <li> filter</li>
                <li> const and let</li>
                <li> promises</li>
        </ul>
        </>
        )
      },
      {
        head: "Fully Functional Ecommerce Application",
        p: (
        <>
            <p>Payment Gateway</p>
            <ul>
                <li>Creating Orders section-1</li>
            </ul>
        <p><b>Creating Orders section-1</b></p>
        </>
        )
      },
        {
        head: "JAVASCRIPT",
        p: (
        <>
            <ul>
                <li> Asynchronous actions</li>
                <li> API calls</li>
                <li> API integration using fetch and axios</li>
            </ul>
        </>
        )
      },
      {
        head: "Fully Functional Ecommerce Application",
        p: (
        <>
            <ul>
                <li> Adding more Orders Section</li>
            </ul>
        </>
        )
      },
      {
        head: "Deployment in cloud",
        p: (
        <>
        <ul>
            <li> AWS Elastic Beanstalk</li>
            <li> Creating Environment,sample flask application hosting</li>
            <li> AWS Codepipeline and mysql rds configuration with flask</li>
            <li> Project deployment</li>
        </ul>
        </>
        )
      },
      {
        head: "Calculator using JS",
        p: (
        <>
        <ul>
            <li>We create a real time calculator to enter values, perform multiple operations</li>
        </ul>
        </>
        )
      },
      {
        head: "Random Password Generator",
        p: (
        <>
            <ul>
              <li> OTP Generator combination of alphabets,numbers and symbols</li>
            </ul>
        </>
        )
      },
      {
        head: "Capstone Projects",
        p: (
        <>
            <ul>
              <li> Users will be able to deploy every project in Amazon Web Services</li>
            </ul>
        </>
        )
      },
      {
        head: "Fully Functional Ecommerce Application",
        p: (
            <>
            <p><b>Admin dashboard-</b></p>
            <ul>
                <li>  Sign up,Sign in Forget password</li>
                <li>  Add and update,delete items</li>
                <li>  Items dashboard</li>
            </ul>
                
           <p><b>User dashboard</b></p>
            <ul>
                <li>  Sign up,Sign in</li>
                <li>  Forget Password</li>
                <li>  Search bar</li>
                <li>  Shopping cart</li>
            </ul>

           <p><b>Payment Gateway</b></p>
           <ul>
                <li>  Stripe Payment Gateway Integration with flask</li>
                <li>  Generating Invoice for an Order</li>
                <li>  Orders Section</li>
            </ul>
        </>
        )
      },
      {
        head: "Custom DevBlog Application",
        p: (
        <>
            <ul>
                <li>  Users sign up</li>
                <li>  Sign in and Sign out</li>
                <li>  forgot password</li>
                <li>  Blogs-create, update,delete</li>
                <li>  Search bar</li>
                <li>  Blogs sharing on social media</li>
            </ul>
        </>
        )
      },
      {
        head: "Discussion Board Application",
        p: (
        <>
            <ul>
                <li>  User Sign up,Sign in and sign out</li>
                <li>  Forget Password</li>
                <li>  Discussion – Create Update and Delete</li>
                <li>  Adding Comments</li>
                <li>  Adding Replies</li>
                <li>  Share Discussions</li>
            </ul>
        </>
        )
      },
      {
        head: "Personal Records Manager",
        p: (
        <>
            <ul>
                <li>  User Sign up,Sign in and sign out</li>
                <li>  Forget Password</li>
                <li>  Notes-Add,View,Update and delete</li>
                <li>  Download notes in Excel</li>
                <li>  Files-upload,delete,view and download</li>
            </ul>
        </>
        )
      },
      {
        head: "Outcomes",
        p: (
            <>
                <ul>
        <p><b>Learner will able to build end to end project including deployment in cloud Learner can apply to 7 different job roles</b></p>
            <li>  Python Developer</li>
            <li>  Backend Developer</li>
            <li>  Database Developer</li>
            <li>  Frontend Developer</li>
            <li>  UI Developer</li>
            <li>  Javascript Developer</li>
        </ul>
        </>
        )
      },
      {
        head: "ReactJS",
        p: (
        <>
            <h2>Introduction to React.js</h2><br/><br/>
            <ul>
            <li> Setting up a React development environment (e.g., Node.js, npm, Create React App)</li>
            </ul>
        </>
        )
      },
      {
        head: "Creating Your First React Application",
        p: (
        <>
            <ul>
                <li>  Hello World example</li>
                <li>  Understanding React components</li>
                <li>  JSX syntax</li>
            </ul>
        </>
        )
      },
      {
        head: "Understanding Components and Props",
        p: (
        <>
            <ul>
                <li>  Functional components</li>
                <li>  Class components</li>
                <li>  Passing and using props</li>
            </ul>
        </>
        )
      },
      {
        head: "State and Lifecycle",
        p: (
        <>
            <ul>
                <li>  State in React components</li>
                <li>  Updating state</li>
                <li>  Component lifecycle methods</li>
            </ul>
        </>
        )
      },
      {
        head: "React Hooks",
        p: (
        <>
            <ul>
                <li>  useState()</li>
                <li>  useEffect()</li>
                <li>  useContext()</li>
            </ul>
        </>
        )
      },
      {
        head: "Handling Events",
        p: (
        <>
            <ul>
                <li>  Event handling in React</li>
                <li>  Binding event handlers</li>
                <li>  Arrow functions vs. regular functions</li>
            </ul>
        </>
        )
      },
      {
        head: "Working with Forms",
        p: (
        <>
            <ul>
                <li>  Controlled components</li>
                <li>  Handling form submission</li>
                <li>  Form validation</li>
            </ul>
        </>
        )
      },
      {
        head: "Conditional Rendering",
        p: (
        <>
            <ul>
                <li>  Conditional rendering with if statements</li>
                <li>  Ternary operators and logical && in JSX</li>
            </ul>
        </>
        )
      },
      {
        head: "Lists and Keys",
        p: (
        <>
            <ul>
                <li>  Rendering Lists</li>
                <li>  Using .map() to render lists of elements</li>
                <li>  Providing a key for each item</li>
            </ul>
        </>
        )
      },
      {
        head: "Understanding Keys",
        p: (
        <>
            <ul>
                <li>  The importance of keys in React</li>
                <li>  Choosing the correct key</li>
            </ul>
        </>
        )
      },
      {
        head: "Styling in React.js",
        p: (
        <>
            <ul>
                <li>  CSS in React</li>
                <li>  Different approaches for styling (CSS, CSS-in-JS, CSS Modules)</li>
                <li>  Inline styles</li>
                <li>  Styling Libraries</li>
                <li>  Popular CSS frameworks (e.g., Bootstrap, Material-UI)</li>
            </ul>
        </>
        )
      },
      {
        head: "React Router",
        p: (
        <>
            <ul>
                <li>  Introduction to React Router</li>
                <li>  Setting up React Router</li>
                <li>  Creating routes</li>
                <li>  Navigating with</li>
                <li>  React Router</li>
                <li>  Using Link and NavLink</li>
                <li>  Nested Routes and Dynamic Routing</li>
                <li>  Nested routes</li>
                <li>  Passing parameters to routes</li>
            </ul>
        </>
        )
      },
      {
        head: "Calculator using JS",
        p: (
        <>
            <ul>
                <li>  We create a real time calculator to enter values, perform multiple operations</li>
            </ul>
        </>
        )
      },
      {
        head: "Random Password Generator",
        p: (
        <>
            <ul>
                <li>  OTP Generator combination of alphabets,numbers and symbols</li>
            </ul>
        </>
        )
      },
      {
        head: "Creating Your First React Application",
        p: (
        <>
            <p>Users will be able to deploy every project in Amazon Web Services</p>
        </>
        )
      },
      {
        head: "Fully Functional Ecommerce Application",
        p: (
        <>
            <p><b>Admin dashboard-</b></p>
            <ul>
                <li> Sign up,Sign in Forget password</li>
                <li> Add and update,delete items</li>
                <li> Items dashboard</li>
            </ul>
            <p><b>User dashboard</b></p>
            <ul>
                <li>  Sign up,Sign in</li>
                <li>  Forget Password</li>
                <li>  Search bar</li>
                <li>  Shopping cart</li>
            </ul>
            <p><b>Payment Gateway</b></p>
            <ul>
                <li>  Stripe Payment Gateway Integration with flask</li>
                <li>  Generating Invoice for an Order</li>
                <li>  Orders Section</li>
            </ul>
        </>
        )
      },
      {
        head: "Custom DevBlog Application",
        p: (
        <>
            <ul>
                <li>  Users sign up</li>
                <li>  Sign in and Sign out</li>
                <li>  forgot password</li>
                <li>  Blogs-create, update,delete</li>
                <li>  Search bar</li>
                <li>  Blogs sharing on social media</li>
            </ul>
        </>
        )
      },
      {
        head: "Discussion Board Application",
        p: (
        <>
            <ul>
                <li>  User Sign up,Sign in and sign out</li>
                <li>  Forget Password</li>
                <li>  Discussion – Create Update and Delete</li>
                <li>  Adding Comments</li>
                <li>  Adding Replies</li>
                <li>  Share Discussions</li>
            </ul>
        </>
        )
      },
      {
        head: "Personal Records Manager",
        p: (
        <>
            <ul>
                <li>  User Sign up,Sign in and sign out</li>
                <li>  Forget Password</li>
                <li>  Notes-Add,View,Update and delete</li>
                <li>  Download notes in Excel</li>
                <li>  Files-upload,delete,view and download</li>
            </ul>
        </>
        )
      },
      {
        head: "Outcomes",
        p: (
        <>
            <p><b>Learner will able to build end to end project including deployment in cloud Learner can apply to 7 different job roles</b></p>
            <ul>
              <li>  Python Developer</li>
              <li>  Backend Developer</li>
              <li>  Database Developer</li>
              <li>  Frontend Developer</li>
              <li>  UI Developer</li>
              <li>  Javascript Developer</li>
            </ul>
        </>
        )
      }

];

const syllabusdata = [
    {
        head: " ",
        p: (
            <>
                <h2 style={{ color :"black" }}>Python Full stack development <span style={{ color :"red" }} > Training curriculum in Hyderabad </span></h2><br />
                <Inter_dropdown data={data2} />
            </>
        )
    }
]

const syllabus2data = [
    {
        head: "",
        p: (
            <>
            <h2 style={{ color :"black" }}>Python Full Stack Development <span style={{ color :"red" }} >Skills Covered in Hyderabad </span></h2><br />
                <p>By enrolling in the Python training program in Hyderabad, you take your first step in lightening up your career path in various fields like web development, Machine Learning, Artificial Intelligence, etc. While pursuing the training, you get to work with data scientists to get insights into real-time data. That is how we prepare you for the top skills that a Python developer should possess.</p>
                <h3>Training outcomes:</h3>
                <ul>
                    {[
                        "Build an end-to-end project including deployment in cloud learner that helps you build a strong portfolio for 7 different job roles like Python developer, backend developer, etc."
                    ].map((item, index) => (
                        <li key={index} style={{ marginLeft: "10px" }}>{item}</li>
                    ))}
                </ul>
            </>
        )
    }

]

export default function Intern_Page() {
    const [year, setYear] = useState('2nd');
    // alert('asadfgds')
    return (
        <div className="inter_container">

            {/* <div className="inter_inner_div">
                <span className="home-intern">
                    <Link className="Linkcolor" to="/">Home</Link>&nbsp; &gt; &nbsp;<strong>Internship</strong>
                </span>
                <div className="intern-home-1">
                    <h4><span className="Linkcolor">#1</span> Setting A Benchmark</h4>
                    <h4>In Providing <span className="Linkcolor">"TECH GNAN"</span></h4>
                    <p>
                        Dive into the world of technology and gain valuable insights through hands-on experience. Expand your knowledge and skills with CODE GNAN's internship program.<br /><br />Time to Invest in Your Skills:-
                    </p>

                    <ul>
                        <li>2 months program Frontend</li>
                        <li>6 months program Backend</li>
                    </ul>
                    <br />
                    <div>
                        <span className="internship_rating">( 183 Rating)</span>
                        <i className="fas fa-star star_t_t"></i>
                        <i className="fas fa-star star_t_t"></i>
                        <i className="fas fa-star star_t_t"></i>
                        <i className="fas fa-star star_t_t"></i>
                        <i className="fas fa-star star_t_t"></i>
                        <br /><br /><br />


                    </div>
                    <div>
                        <Link to="your_destination_url" className="explore-button">
                            Explore Program <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
                <center>
                    <div className="services_provided1">
                        {data.map((service, index) => (
                            <div key={index} className='each_service_intern'>
                                <img src={service.img} alt="service icon" />
                                <br />
                                <div className="services_text">
                                    <h4>{service.head}</h4>
                                    <p>{service.p}</p>
                                </div>

                            </div>
                        ))}

                    </div>
                </center>
            </div> */}


            <div className="intern-home3">
                <div className="intern-home-form">
                   
                    <div className="all_year_syllabus">
                        <div className="syllabus-button-container">
                        <button onClick={() => setYear('2nd')}>
                        Course Curriculum
                        </button>
                        <button onClick={() => setYear('3rd')}>
                        Skills covered
                        </button>
                        </div>
                        <hr />
                        <div className="inside_syllabus_container">
                        {year === '2nd' && <InternsyllabusComp data={syllabusdata} />}
                        {year === '3rd' && <InternsyllabusComp data={syllabus2data} />}
                        </div>
                        
                    </div>
                    <div className="intern_from">
                        <h2 className="Linkcolor">Become a Python Full Stack developer </h2><br />
                        <p>Talk to our expert Python mentors and learn how our training programs in Hyderabad can help you become a Full Stack Python developer and get a high-paying job. </p><br /><br />
                        <FormComponent />
                    </div>
                </div>
            </div><br /><br />
            
            {/* <div className="intern-home2">
                <center>
                    <h1>Questions Generally Asked About  <span className="Linkcolor">Internship</span></h1>
                    <img src={style} alt="" />
                </center>
                <div className="intern-home-drop">
                    <Inter_dropdown data={data2} />
                </div>
            </div> */}

        </div>
    );
}
