import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "Python Introduction and setting up the environment",
    p: `
         <P> ● Introduction to programming</P>
         <P> ● R or Python?</P>
         <P> ● Why Python for Data Science?</P>
         <P> ● Different job roles with Python</P>
         <P> ● Different Python IDEs</P>
         <P> ● Downloading and setting up python environment</P>
         <br/>
      <p><b>Hands-On – Installing Python – IDLE</b></p>
    `
  },
  {
    head: "Python Basic Syntax and Data Types",
    p: `
          <P> ● Python input and output operations.</P>
          <P> ● Comments</P>
          <P> ● Variables, rules for naming variables</P>
          <P> ● Basic Data Types in Python</P>
          <P> ● Typecasting in python</P>
          <br/>
     <p><b>Hands-On – Using comments, variables, data types, and typecasting in python program</b></p>
    `
  },
  {
    head: "Operators in Python",
    p: `
             <P> ● Arithmetic operators</P>
             <P> ● Assignment operators</P>
             <P> ● Comparison operators</P>
             <P> ● Logical operators</P>
             <P> ● Identity operators</P>
             <P> ● Membership Operators</P>
             <P> ● Bitwise Operators</P>
             <br/>
        <p><b>Hands-On – Working with different data types in a program</b></p>
    `
  },
  {
    head: "Strings in Python ",
    p: `
             <P> ● Creating strings</P>
             <P> ● String formatting</P>
             <P> ● Indexing</P>
             <P> ● Slicing</P>
             <P> ● String methods</P>
        <br/>
        <p><b>Hands-On – Performing string operations</b></p>
    `
  },
  {
    head: "Lists",
    p: `
            <P> ● Creating lists</P>
            <P> ● Properties of lists</P>
            <P> ● List indexing</P>
            <P> ● List slicing</P>
            <P> ● List of lists</P>
            <P> ● List Methods</P>
            <P> ● Adding, Updating & removing elements from lists</P>
      <br/>
      <p><b>Hands-On – Slicing, Indexing, and using methods on lists</b></p>
    `
  },
  {
    head: "Tuples",
    p: `
            <P> ● Syntax to create tuples</P>
            <P> ● Tuple properties</P>
            <P> ● Indexing on tuples</P>
            <P> ● Slicing on tuples</P>
            <P> ● Tuple methods</P>
      <br/>
      <p><b>Hands-On – Working with tuples</b></p>
    `
  },
  {
    head: "Sets",
    p: `
            <P> ● Syntax for creating sets</P>
            <P> ● Updating sets</P>
            <P> ● Set operations and methods</P>
            <P> ● Difference between sets, lists and tuples</P>
      <br/>
      <p><b>Hands-On – Performing set operations in a program</b></p>
    `
  },
  {
    head: "Dictionaries",
    p: `
        <P> ● Syntax for creating Dictionaries</P>
        <P> ● Storing data in dictionaries</P>
        <P> ● Dictionaries keys and values</P>
        <P> ● Accessing the elements of dictionaries</P>
        <P> ● Dictionary methods</P>
      <br/>
      <p><b>Hands-On – Creating dictionaries and using dictionaries methods</b></p>
    `
  },
  {
    head: "Python conditional Statements",
    p: `
          <P> ● Setting logic with conditional statements</P>
          <P> ● If statements</P>
          <P> ● If -else statements</P>
          <P> ● If-elif-else statements</P>
      <br/>
      <p><b>Hands-On – Setting logic in programs using conditional statements</b></p>
    `
  },  
  {
    head: "Loops in Python",
    p: `
          <P> ● Iterating with python loops</P>
          <P> ● while loop</P>
          <P> ● for loop</P>
          <P> ● range</P>
          <P> ● break</P>
          <P> ● continue</P>
          <P> ● pass</P>
          <P> ● enumerate</P>
          <P> ● zip</P>
          <P> ● assert</P>
      <br/>
      <p><b>Hands-On – Iterating with loops in python</b></p>
    `
  },
  {
    head: "Getting Started with Hackerrank use cases and working on them",
    p: `
          <P> ●  Solving Level by Level Challenges</P>
          <P> ●  Assignments to acquire Bronze and Silver Level badges</P>
    `
  },
  {
    head: "Lists and Dictionaries comprehension",
    p: `
            <P> ● Why List comprehension</P>
            <P> ● Syntax for list comprehension</P>
            <P> ● Syntax for dict comprehension</P>
      <br/>
      <p><b>Hands-On – Using List and Dictionary comprehension</b></p>
    `
  },
  {
    head: "Functions",
    p: `
            <P> ● What are Functions</P>
            <P> ● Modularity and code reusability</P>
            <P> ● Creating functions</P>
            <P> ● Calling functions</P>
            <P> ● Passing Arguments</P>
            <P> ● Positional Arguments</P>
            <P> ● Keyword Arguments</P>
            <P> ● Variable length arguments (*args)</P>
            <P> ● Variable Keyword length arguments (**kargs)</P>
            <P> ● Return keyword in python</P>
            <P> ● Passing function as argument</P>
            <P> ● Passing function in return</P>
            <P> ● Global and local variables</P>
            <p> ● Recursion</p>
      <br/>
      <p><b>Hands-On – Creating our own functions,passing arguments and performing operations</b></p>
    `
  },
  {
    head: "Anonymous Function",
    p: `
          <P> ● Lambda</P>
          <P> ● Lambda with filter</P>
          <P> ● Lambda with map</P>
          <P> ● Lambda with reduce</P>
      <br/>
      <p><b>Hands-On – Working with lambda, filter,map and reduce in python</b></p>
    `
  },
  {
    head: "Generators",
    p: `
          <P> ● Creating and using generators</P>
      <br/>
      <p><b>Hands-On – Creating and using generators</b></p>
    `
  },
  {
    head: "Modules",
    p: `
          <P> ● Creating modules</P>
          <P> ● Importing functions from different module</P>
          <P> ● Importing Variables from different modules</P>
          <P> ● Python builtin modules</P>
      <br/>
      <p><b>Hands-On – Creating and importing Modules</b></p>
    `
  },
  {
    head: "Packages",
    p: `
          <P> ● Creating packages</P>
          <P> ● Importing modules from package</P>
          <P> ● Different ways of importing modules and packages</P>
          <P> ● Working on Numpy,Pandas and Matplotlib</P>
      <br/>
      <p><b>Hands-On – Creating and importing packages</b></p>
    `
  },
  {
    head: "Exception and Error Handling",
    p: `
          <P> ● Syntax errors</P>
          <P> ● Logical errors</P>
          <P> ● Handling errors using try,except and finally</P>
      <br/>
      <p><b>Hands-On – Handling Errors with try and except</b></p>
    `
  },
  {
    head: "Classes and Objects (OOPS)",
    p: `
        <P> ● Creating classes & Objects</P>
        <P> ● Attributes and methods</P>
        <P> ● Understanding __init__ constructor method</P>
        <P> ● Class and instance attributes</P>
        <P> ● Different types of of methods</P>
        <P> ● Instance methods</P>
        <P> ● Class methods</P>
        <P> ● Static methods</P>
        <P> ● Inheritance</P>
        <P> ● Creating child and parent class</P>
        <P> ● Overriding parent methods</P>
        <P> ● The super() function</P>
        <P> ● Understanding Types of inheritance</P>
        <P> ● Single inheritance</P>
        <P> ● Multiple inheritance</P>
        <P> ● Multilevel inheritance</P>
        <P> ● Polymorphism</P>
        <P> ● Operator overloading</P>
      <br/>
      <p><b>Hands-On – Creating classes, objects. Creating methods and attributes. Working with different methods. Using inheritance and polymorphism.</b></p>
    `
  },
  {
    head: "Date and Time",
    p: `
        <P> ● date module</P>
        <P> ● time module</P>
        <P> ● datetime module</P>
        <P> ● time delta</P>
        <P> ● formatting date and time</P>
        <P> ● strftime()</P>
        <P> ● striptime()</P>
       <br/>
      <p><b>Hands-On – Iterating with loops in python</b></p>
    `
  },
  {
    head: "Regex",
    p: `
        <P> ● Understanding the use of regex</P>
        <P> ● re.search()</P>
        <P> ● re.compile()</P>
        <P> ● re.find()</P>
        <P> ● re.split()</P>
        <P> ● re.sub()</P>
        <P> ● Meta characters and their use</P>
      <br/>
      <p><b>Hands-On – using a regular expression to search patterns</b></p>
    `
  },
  {
    head: "Files",
p: `
          <P> ● Opening file</P>
          <P> ● Opening different file types</P>
          <P> ● Read,write,close files</P>
          <P> ● Opening files in different modes</P>
      <br/>
      <p><b>Hands-On – Reading, Writing, Appending, opening and closing files.</b></p>
      <p><b>Use Cases: Download Instagram public Data <br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  Download Youtube Videos with its details<br/>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  Sending Automated Emails</b></p>
      <p>Learner will achieve five star badge in HackerRank Able to Crack any competitive coding question Learner HackerRank rank will be less than 1 Lakh.</p>
    `
  },
  {
    head: "MYSQL DATABASE",
    p: `
    <h2>Introduction to Database</h2><br/><br/>
          <P> ● What is a Database?</P>
          <P> ● Why use a Database?</P>
          <P> ● What is DBMS?</P>
          <P> ● Types of DBMS</P>
          <P> ● Introduction to SQL</P>
          <P> ● Database vs DBMS vs SQL vs MySQL</P>
          <P> ● MySQL Installation</P>
    `
  },
  {
    head: "SQL Sublanguages",
    p: `
          <P> ● Introduction to SQL Sublanguages</P>
          <P> ● Creating tables and describing its structure</P>
          <P> ● DML:INSERT part-1</P>
          <P> ● DML:INSERT part-2</P>
          <P> ● Null and Not Null constraints,altering default behaviour</P>
          <P> ● DQL:Select</P>
          <P> ● DCL:Commit, Rollback,Savepoint</P>
          <P> ● DML:Working with Update and delete commands</P>
    `
  },
  {
    head: "MySQL Operators",
    p: `
          <P> ● Where Clause</P>
          <P> ● Introduction to MySQL Operators-1</P>
          <P> ● Introduction to MySQL Operators-2</P>
          <P> ● MySQL Warnings vs Errors</P>
          <P> ● Comparison Operators part-1</P>
          <P> ● Logical AND and other comparison operators</P>
    `
  },
  {
    head: "Comparison Operators",
    p: `
        <P> ●  BETWEEN AND and NOT BETWEEN AND,OR operator in Logical Operators</P>
        <P> ●  IN and NOT IN Operator</P>
        <P> ●  IS NULL and IS NOT NULL</P>
    `
  },
  {
    head: "DDL:Alter and Renamee Docs",
    p: `
        <P> ● ALTER ADD</P>
        <P> ● ALTER MODIFY</P>
        <P> ● ALTER-DROP</P>
        <P> ● ALTER – RENAME and ALTER-RENAME COLUMN</P>
        <P> ● ALTER-CHANGE</P>
        <P> ● RENAME</P>
    `
  },
  {
    head: "String Functions",
    p: `
        <P> ● Use of Alias</P>
        <P> ● CONCAT</P>
        <P> ● CONCAT WS</P>
        <P> ● LOWER and UPPER</P>
        <P> ● CHARACTER LENGTH and SUBSTRING</P>
        <P> ● REVERSE and REPLACE</P>
    `
  },
  {
    head: "Constraints",
    p: `
        <P> ● Introduction to Constraints</P>
        <P> ● NOT NULL and DEFAULT Constraints</P>
        <P> ● Primary key Constraint</P>
        <P> ● Unique Constraint</P>
        <P> ● Working with Auto_increment</P>
        <P> ● CHECK Constraints</P>
        <P> ● Relationships in DBMS(One to One, One to many etc.)</P>
        <P> ● Introduction to Foreign key constraint</P>
        <P> ● Working with foreign keys</P>
        <P> ● REFERENTIAL ACTIONS and Alter Constraints</P>
        <P> ● Alter-add with other constraints</P>
    `
  },
  {
    head: "Refining Selections and working with MySQL workbench",
    p: `
        <P> ●  DISTINCT</P>
        <P> ●  ORDER BY-1</P>
        <P> ●  Order BY -2</P>
        <P> ●  LIMIT</P>
        <P> ●  LIKE</P>
        <P> ●  MySQL workbench Installation</P>
        <P> ●  Working with MYSQL Workbench</P>
    `
  },
  {
    head: "Working with Aggrate function and SQL Files",
    p: `
        <P> ●  Introduction to aggregate function</P>
        <P> ●  Count</P>
        <P> ●  Group by</P>
        <P> ●  Min And Max</P>
        <P> ●  Subqueries</P>
        <P> ●  Group by with Min and Max </P>
        <P> ●  Sum and AVG</P>
        <P> ●  Group by with SUM and AVG</P>
        <P> ●  Exporting MYSQL Databases</P>
        <P> ●  Import MYSQL Databases</P>
    `
  },
  {
    head: "More on Data types",
    p: `
        <P> ● Char Vs Varchar</P>
        <P> ● Integer data types (SMALLINT,TINYINT,…)</P>
        <P> ● FLOAT VS DECIMAL</P>
        <P> ● Working with Date and TIME</P>
        <P> ● CURDATE,CURTIME AND CURRENT_TIMESTAMP</P>
        <P> ● Date functions</P>
        <P> ● Time Functions</P>
        <P> ● Formatting dates</P>
        <P> ● Operations on dates</P>
        <P> ● Datetime vs Timestamp</P>
        <P> ● Automatic Initialization and Updating for TIMESTAMP and DATETIME</P>
    `
  },
  {
    head: "Getting Started with Hackerrank use cases and working on them",
    p: `
        <P> ● Solving Level by Level Challenges</P>
        <P> ● Assignments to acquire Bronze and Silver Level badges</P>
    `
  },
  {
    head: "MySQL JOINS",
    p: `
        <P> ● Why JOINS?</P>
        <P> ● Introduction to JOINS</P>
        <P> ● CROSS JOIN</P>
        <P> ● INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN</P>
    `
  },
  {
    head: "Project:Instagram Database Clone",
    p: `
        <p> ●   Cloning Instagram’s DB: Users Schema</p>
        <p> ●   Cloning Instagram’s DB:Followers Schema</p>
        <p> ●   Cloning Instagram’s DB:Photos Schema</p>
        <p> ●   Cloning Instagram’s DB:LikesSchema</p>
        <p> ●   Cloning Instagram’s DB:Hashtags Schema</p>
        <p> ●   Instagram Clone Challenges</p>
    `
  },
  {
    head: "Python for Web Development – Flask",
    p: `
    <h2>Flask Introduction and installation</h2><br/><br/>
        <p> ●  Introduction to flask and its architecture</p>
        <p> ●  Installing flask package and introduction to its components</p>
        <p> ●  Introduction to Virtual Environment and its importance in project development</p>
        <p> ●  Creating Virtual Environment and activating,deactivating it</p>
        <p> ●  Introduction to routing in Flask and Building sample flask application</p>
    `
  },
  {
    head: "Building routes with flask",
    p: `
        <p> ●   What is a dynamic route?</p>
        <p> ●   Building dynamic routes with flask</p>
        <p> ●   Redirection in Flask</p>
        <p> ●   Dynamic url building with url for function</p>
        <p> ●   URL converters in Flask</p>
        <p> ●   int and string url converters</p>
        <p> ●   Float,uuid and path converters</p>
        <p> ●   request and response in Flask</p>
            <br/>
      <p>Hands on:Flask package Installation and creating virtual environment, Building dynamic Routes with flask</p>
    `
  },
  {
    head: "Getting into Front-end Web Development – HTML",
    p: `
        <p> ●   Introduction</p>
        <p> ●   History and Importance of HTML</p>
        <p> ●   Basic HTML syntax</p>
        <p> ●   The current state of HTML</p>
        <p> ●   HTML resources</p>
        <p> ●   Choosing a code editor</p>
    `
  },
  {
    head: " Basic Page Structure",
    p: `
        <p> ●  Exploring an HTML document</p>
        <p> ●  DOCTYPE declarations</p>
        <p> ●  Document head</p>
        <p> ●  Document body</p>
        <p> ●  Understanding content models</p>
    `
  },
  {
    head: "Formatting Page Content",
    p: `
        <p> ●  Formatting content with HTML</p>
        <p> ●  Headings</p>
        <p> ●  Paragraphs</p>
        <p> ●  Emphasising text</p>
        <p> ●  Displaying special characters</p>
        <p> ●  Whitespaces</p>
        <p> ●  Images</p>
    `
  },
  {
    head: "Creating Lists",
    p: `
        <p> ●   Unordered lists</p>
        <p> ●   Ordered lists</p>
        <p> ●   Definition lists</p>
    `
  },
  {
    head: "Structuring Content",
    p: `
        <p> ●  Value of structure</p>
        <p> ●  Document outlines</p>
        <p> ●  Nav element</p>
        <p> ●  Article element</p>
        <p> ●  Section element</p>
        <p> ●  Aside element</p>
        <p> ●  Div element</p>
        <p> ●  Other semantic elements</p>
    `
  },
  {
    head: "Creating Links",
    p: `
        <p> ●   Anchor element</p>
        <p> ●   Page internal linking</p>
        <p> ●   Linking to external pages</p>
        <p> ●   Linking to downloadable</p>
        <p> ●   Linking to page regions</p>
    `
  },
  {
    head: "Controlling styling",
    p: `
        <p> ●   HTML and CSS</p>
        <p> ●   Creating inline styles</p>
        <p> ●   Style element</p>
        <p> ●   Controlling typography</p>
        <p> ●   Adding colour</p>
        <p> ●   Externalising styles</p>
    `
  },
  {
    head: "Basic Scripting",
    p: `
        <p> ●   HTML and JavaScript</p>
        <p> ●   The script element</p>
        <p> ●   Writing a function</p>
        <p> ●   Using the DOM</p>
        <p> ●   Listening for an event</p>
        <p> ●   Responding to events</p>
        <p> ●   Externalizing JavaScript</p>
    `
  },
  {
    head: "CSS3: Open with Google Docs",
    p: `
        <p> ●   Getting started</p>
        <p> ●   HTML overview</p>
        <p> ●   Default browser styles</p>
        <p> ●   Browser support and inconsistencies</p>
        <p> ●   Inline, internal and external CSS</p>
        <p> ●   Naming conventions</p>
    `
  },
  {
    head: "CSS Core",
    p: `
        <p> ●   Syntax, terminology, and naming conventions</p>
        <p> ●   Type, class, and id selectors</p>
        <p> ●   Combinator selectors</p>
        <p> ●   Selectors: Best practices</p>
    `
  },
  {
    head: "Flask Request Handling",
    p: `
        <p> ●   Introduction to flask request object</p>
        <p> ●   Requests handling in Flask</p>
        <p> ●   Introduction to Flask files structure</p>
        <p> ●   Implementation of Flask files structure</p>
    `
  },
  {
    head: "Jinja 2 Template Engine",
    p: `
          <p> ● Flask Intro to Jinja2</p>
      <p>Rendering HTML pages with render_template function</p>
          <p> ● Integrating css with flask</p>
      <p>More about url for and its usage in Jinja 2</p>
      <p><b> Hands on: Requesting handling with flask and integrating frontend with flask</b></p>
      <p><b> i.e HTML and CSS with Jinja2</b></p>
    `
  },
  {
    head: "Dynamic Web Pages with flask-Jinja2",
    p: `
        <p> ●   More on render_template and its syntax</p>
        <p> ●   Jinja2 outputting values to template</p>
        <p> ●   Introduction to Jinja Inheritance</p>
        <p> ●   Defining Inheritance blocks with jinja2</p>
        <p> ●   Inheriting parent contents to child template with jinja ‘extends’</p>
        <p> ●   Introduction to Jinjja 2 statements</p>
        <p> ●   If statement in Jinja2</p>
        <p> ●   Nested if,if else statements in jinja2</p>
        <p> ●   For loop in Jinja2</p>
          <br/>
      <p>Hands on: Rendering Dynamic web pages and performing conditional actions with jinja2</p>
    `
  },
  {
    head: "CSS: Typography",
    p: `
        <p> ●   Web-safe fonts and the font-family property</p>
        <p> ●   Web fonts and Google fonts</p>
        <p> ●   The font-size property</p>
        <p> ●   Practicing with web fonts and font-size</p>
        <p> ●   The font-style and font-weight properties</p>
        <p> ●   The color, line height, and text properties</p>
        <p> ●   Adjusting the font-weight property</p>
    `
  },
  {
    head: "Layouts",
    p: `
        <p> ●   Block vs. inline display</p>
        <p> ●   The box model</p>
        <p> ●   Margin and page layouts</p>
        <p> ●   Practising layouts</p>
        <p> ●   Practising with padding and spacing</p>
        <p> ●   Floats</p>
        <p> ●   Practising with floats</p>
        <p> ●   The box model fix</p>
        <p> ●   Practising with columns</p>
        <p> ●   Box model review</p>
        <p> ●   Float and display review</p>
        <p> ●   Horizontal navs with the display property</p>
        <p> ●   Horizontal navs with the float property</p>
        <p> ●   Practising with the nav element</p>
        <p> ●   Positioning</p>
        <p> ●   Practising with fixed navigation</p>
        <p> ●   Practising with positioning elements</p>
        <p> ●   Float, display, and position</p>
        <p> ●   Layers and the z-index property</p>
    `
  },
  {
    head: "Login system with flask,Server side sessions",
    p: `
          <p> ●  Introduction to Server side sessions</p>
          <p> ●  Server side sessions with flask_session</p>
          <p> ●  More on flask_session and session lifecycle control</p>
          <p> ●  Creating and popping user sessions</p>
          <p> ●  mysql database integration with flask using mysql_connector</p>
          <p> ●  More on mysql_connector package</p>
    `
  },
  {
    head: "CSS",
    p: `
          <p> ●   Horizontal navs with the display property</p>
          <p> ●   Horizontal navs with the float property</p>
          <p> ●   Practicing with the nav element</p>
          <p> ●   Positioning</p>
          <p> ●   Practicing with fixed navigation</p>
          <p> ●   Practicing with positioning elements</p>
          <p> ●   Float, display, and position</p>
          <p> ●   Layers and the z-index property</p>
    `
  },
  {
    head: "Files Handling with flask",
    p: `
          <p> ●   Introduction to binary data</p>
          <p> ●   Storing user files in MySQL database(i.e pdfs,excel,docx, etc)</p>
          <p> ●   Viewing and Downloading files with flask’s send_file on browser</p>
      <br/>
      <p><b>Hands on:Storing binary data into MySQL database i.e files data and conversion of binary data to bytes using Byteslo,sending files to browser using flask’s send_file on browser</b><p/>
    `
  },
  {
    head: "CSS :Advanced layout",
    p: `
          <p> ●   Design with a grid</p>
          <p> ●   Intro to CSS Grid</p>
          <p> ●   CSS Grid example</p>
          <p> ●   Intro to flexbox</p>
          <p> ●   CSS Flexbox</p>
          <p> ●   Responsive page building</p>
    `
  },
  {
    head: "Projects",
    p: `
    <p>Custom DevBlog Application</p>
        <p> ●   Users sign up and login and log out,forgot password</p>
        <p> ●   Blogs-create, update,delete</p>
      <p>Creating an internal template using HTML & CSS</p>
               <p> ●  Customized Template with addition of Media Queries, Layouts.</p>
      <p>Instagram Login page</p>
              <p> ●  Creating a similar Instagram Clone Login page</p>

    `
  },
  {
    head: "Java Script",
    p: `
        <h2>Introduction</h2>
        <br/>
          <p> ● What is JavaScript?</p>
          <p> ● How does JavaScript relate to Java?</p>
          <p> ● History of JavaScript</p>
          <p> ● Navigating the JavaScript landscape</p>
    `
  },
  {
    head: "Basics",
    p: `
          <p> ●   Tools for JavaScript development</p>
          <p> ●   Introducing the browser console</p>
          <p> ●   Add inline JavaScript to an HTML document</p>
          <p> ●   Add JavaScript in an external file</p>
    `
  },
  {
    head: " Writing JavaScript",
    p: `
        <p> ●   Basic syntax & comments</p>
        <p> ●   Declarations</p>
        <p> ●   Arithmetic operators and math</p>
        <p> ●   Working with strings and numbers</p>
        <p> ●   Variable hoisting</p>
        <p> ●   Data structures and types</p>
        <p> ●   Literals</p>
    `
  },
  {
    head: " Custom DevBlog Application",
    p: `
        <p> ●   Conditional statements and logic</p>
        <p> ●   Advanced conditions and logic</p>
        <p> ●   if..else</p>
        <p> ●   Switch</p>
    `
  },
  {
    head: "JavaScript :Control flow",
    p: `
        <p> ●   Conditional statements and logic</p>
        <p> ●   Advanced conditions and logic</p>
        <p> ●   if..else</p>
        <p> ●   Switch</p>
    `
  },
  {
    head: "Arrays",
    p: `
        <p> ●   Arrays</p>
        <p> ●   Typed arrays</p>
    `
  },
  {
    head: "Loops and iteration",
    p: `
        <p> ●   for while</p>
        <p> ●   do..while</p>
        <p> ●   break/continue</p>
        <p> ●   for…in</p>
        <p> ●   for..of</p>
    `
  },
  {
    head: "Functions",
    p: `
        <p> ●   Defining functions</p>
        <p> ●   Calling functions</p>
        <p> ●   Function scope</p>
        <p> ●   Closures</p>
        <p> ●   Arguments & parameters</p>
        <p> ●   Arrow functions</p>
    `
  },
  {
    head: "Flask :Fully Functional Ecommerce Application",
    p: `
    <h2>Admin Dashboard</h2>
          <br/>
          <p> ● sign up and login and log out,forgot password</p>
      <p><b>Users sign up,login and logout, forgot password</b></p>
    `
  },
  {
    head: "Essential JavaScript Built-in methods",
    p: `
        <p> ●  Number Methods</p>
        <p> ●  String Methods</p>
        <p> ●  Array Methods</p>
        <p> ●  Math Methods</p>
    `
  },
  {
    head: "Writing JavaScript-Advanced",
    p: `
        <p> ●  Text formatting – String literals</p>
        <p> ●  String object</p>
        <p> ●  Template literals</p>
        <p> ●  Regular express</p>
    `
  },
  {
    head: "Fully Functional Ecommerce Application",
    p: `
        <p><b>Admin Dashboard </b></p>
          <p> ● Add and update,delete items Items dashboard</p>
    `
  },
  {
    head: "Admin Dashboard",
    p: `
      <p> ●  Items Dashboard</p>
      <p><b>User dashboard</b></p>
    `
  },
  {
    head: "JavaScript and the DOM",
    p: `
        <p> ●  Intro to DOM</p>
        <p> ●  Target elements in the DOM with querySelector methods</p>
        <p> ●  Access and change elements</p>
        <p> ●  Access and change classes</p>
        <p> ●  Access and change attributes</p>
        <p> ●  Add DOM elements</p>
        <p> ●  Apply inline CSS to an element</p>
        <p> ●  DOM events</p>
    `
  },
  {
    head: "Fully Functional Ecommerce Application",
    p: `
        <p> ●  Search bar</p>
        <p> ●  Shopping cart</p>
    `
  },
  {
    head: "JavaScript",
    p: `
    <h4>Es6 Concepts</h4>
      <br/>
        <p> ●  map</p>
        <p> ●  filter</p>
        <p> ●  const and let</p>
        <p> ●  promises</p>
    `
  },
  {
    head: "Fully Functional Ecommerce Application",
    p: `
      <p>Payment Gateway</p>
            <p> ● Creating Orders section-1</p>
      <p><b>Creating Orders section-1</b></p>
    `
  },
    {
    head: "JAVASCRIPT",
    p: `
        <p> ●  Asynchronous actions</p>
        <p> ●  API calls</p>
        <p> ●  API integration using fetch and axios</p>
    `
  },
  {
    head: "Fully Functional Ecommerce Application",
    p: `
       <p> ●  Adding more Orders Section</p>
    `
  },
  {
    head: "Deployment in cloud",
    p: `
        <p> ●  AWS Elastic Beanstalk</p>
        <p> ●  Creating Environment,sample flask application hosting</p>
        <p> ●  AWS Codepipeline and mysql rds configuration with flask</p>
        <p> ●  Project deployment</p>
    `
  },
  {
    head: "Calculator using JS",
    p: `
        <p> ● We create a real time calculator to enter values, perform multiple operations</p>
    `
  },
  {
    head: "Random Password Generator",
    p: `
          <p> ●  OTP Generator combination of alphabets,numbers and symbols</p>
    `
  },
  {
    head: "Capstone Projects",
    p: `
          <p> Users will be able to deploy every project in Amazon Web Services</p>
    `
  },
  {
    head: "Fully Functional Ecommerce Application",
    p: `
    <p><b>Admin dashboard-</b></p>
            <p> ●  Sign up,Sign in Forget password</p>
            <p> ●  Add and update,delete items</p>
            <p> ●  Items dashboard</p>
       <p><b>User dashboard</b></p>
            <p> ●  Sign up,Sign in</p>
            <p> ●  Forget Password</p>
            <p> ●  Search bar</p>
            <p> ●  Shopping cart</p>
       <p><b>Payment Gateway</b></p>
            <p> ●  Stripe Payment Gateway Integration with flask</p>
            <p> ●  Generating Invoice for an Order</p>
            <p> ●  Orders Section</p>
    `
  },
  {
    head: "Custom DevBlog Application",
    p: `
        <p> ●  Users sign up</p>
        <p> ●  Sign in and Sign out</p>
        <p> ●  forgot password</p>
        <p> ●  Blogs-create, update,delete</p>
        <p> ●  Search bar</p>
        <p> ●  Blogs sharing on social media</p>
    `
  },
  {
    head: "Discussion Board Application",
    p: `
        <p> ●  User Sign up,Sign in and sign out</p>
        <p> ●  Forget Password</p>
        <p> ●  Discussion – Create Update and Delete</p>
        <p> ●  Adding Comments</p>
        <p> ●  Adding Replies</p>
        <p> ●  Share Discussions</p>
    `
  },
  {
    head: "Personal Records Manager",
    p: `
        <p> ●  User Sign up,Sign in and sign out</p>
        <p> ●  Forget Password</p>
        <p> ●  Notes-Add,View,Update and delete</p>
        <p> ●  Download notes in Excel</p>
        <p> ●  Files-upload,delete,view and download</p>
    `
  },
  {
    head: "Outcomes",
    p: `
    <p><b>Learner will able to build end to end project including deployment in cloud Learner can apply to 7 different job roles</b></p>
        <p> ●  Python Developer</p>
        <p> ●  Backend Developer</p>
        <p> ●  Database Developer</p>
        <p> ●  Frontend Developer</p>
        <p> ●  UI Developer</p>
        <p> ●  Javascript Developer</p>
    `
  },
  {
    head: "ReactJS",
    p: `
    <h2>Introduction to React.js</h2><br/><br/>
       <p> ● Setting up a React development environment (e.g., Node.js, npm, Create React App)</p>
    `
  },
  {
    head: "Creating Your First React Application",
    p: `
        <p> ●  Hello World example</p>
        <p> ●  Understanding React components</p>
        <p> ●  JSX syntax</p>
    `
  },
  {
    head: "Understanding Components and Props",
    p: `
        <p> ●  Functional components</p>
        <p> ●  Class components</p>
        <p> ●  Passing and using props</p>
    `
  },
  {
    head: "State and Lifecycle",
    p: `
        <p> ●  State in React components</p>
        <p> ●  Updating state</p>
        <p> ●  Component lifecycle methods</p>
    `
  },
  {
    head: "React Hooks",
    p: `
        <p> ●  useState()</p>
        <p> ●  useEffect()</p>
        <p> ●  useContext()</p>
    `
  },
  {
    head: "Handling Events",
    p: `
        <p> ●  Event handling in React</p>
        <p> ●  Binding event handlers</p>
        <p> ●  Arrow functions vs. regular functions</p>
    `
  },
  {
    head: "Working with Forms",
    p: `
        <p> ●  Controlled components</p>
        <p> ●  Handling form submission</p>
        <p> ●  Form validation</p>
    `
  },
  {
    head: "Conditional Rendering",
    p: `
        <p> ●  Conditional rendering with if statements</p>
        <p> ●  Ternary operators and logical && in JSX</p>
    `
  },
  {
    head: "Lists and Keys",
    p: `
        <p> ●  Rendering Lists</p>
        <p> ●  Using .map() to render lists of elements</p>
        <p> ●  Providing a key for each item</p>
    `
  },
  {
    head: "Understanding Keys",
    p: `
        <p> ●  The importance of keys in React</p>
        <p> ●  Choosing the correct key</p>
    `
  },
  {
    head: "Styling in React.js",
    p: `
        <p> ●  CSS in React</p>
        <p> ●  Different approaches for styling (CSS, CSS-in-JS, CSS Modules)</p>
        <p> ●  Inline styles</p>
        <p> ●  Styling Libraries</p>
        <p> ●  Popular CSS frameworks (e.g., Bootstrap, Material-UI)</p>
    `
  },
  {
    head: "React Router",
    p: `
        <p> ●  Introduction to React Router</p>
        <p> ●  Setting up React Router</p>
        <p> ●  Creating routes</p>
        <p> ●  Navigating with</p>
        <p> ●  React Router</p>
        <p> ●  Using Link and NavLink</p>
        <p> ●  Nested Routes and Dynamic Routing</p>
        <p> ●  Nested routes</p>
        <p> ●  Passing parameters to routes</p>
    `
  },
  {
    head: "Calculator using JS",
    p: `
        <p> ●  We create a real time calculator to enter values, perform multiple operations</p>
    `
  },
  {
    head: "Random Password Generator",
    p: `
        <p> ●  OTP Generator combination of alphabets,numbers and symbols</p>
    `
  },
  {
    head: "Creating Your First React Application",
    p: `
        <p>Users will be able to deploy every project in Amazon Web Services</p>
    `
  },
  {
    head: "Fully Functional Ecommerce Application",
    p: `
    <p><b>Admin dashboard-</b></p>
          <p> ●  Sign up,Sign in Forget password</p>
          <p> ●  Add and update,delete items</p>
          <p> ●  Items dashboard</p>
      <p><b>User dashboard</b></p>
          <p> ●  Sign up,Sign in</p>
          <p> ●  Forget Password</p>
          <p> ●  Search bar</p>
          <p> ●  Shopping cart</p>
      <p><b>Payment Gateway</b></p>
          <p> ●  Stripe Payment Gateway Integration with flask</p>
          <p> ●  Generating Invoice for an Order</p>
          <p> ●  Orders Section</p>
    `
  },
  {
    head: "Custom DevBlog Application",
    p: `
        <p> ●  Users sign up</p>
        <p> ●  Sign in and Sign out</p>
        <p> ●  forgot password</p>
        <p> ●  Blogs-create, update,delete</p>
        <p> ●  Search bar</p>
        <p> ●  Blogs sharing on social media</p>
    `
  },
  {
    head: "Discussion Board Application",
    p: `
        <p> ●  User Sign up,Sign in and sign out</p>
        <p> ●  Forget Password</p>
        <p> ●  Discussion – Create Update and Delete</p>
        <p> ●  Adding Comments</p>
        <p> ●  Adding Replies</p>
        <p> ●  Share Discussions</p>
    `
  },
  {
    head: "Personal Records Manager",
    p: `
        <p> ●  User Sign up,Sign in and sign out</p>
        <p> ●  Forget Password</p>
        <p> ●  Notes-Add,View,Update and delete</p>
        <p> ●  Download notes in Excel</p>
        <p> ●  Files-upload,delete,view and download</p>
    `
  },
  {
    head: "Outcomes",
    p: `
    <p><b>Learner will able to build end to end project including deployment in cloud Learner can apply to 7 different job roles</b></p>
          <p> ●  Python Developer</p>
          <p> ●  Backend Developer</p>
          <p> ●  Database Developer</p>
          <p> ●  Frontend Developer</p>
          <p> ●  UI Developer</p>
          <p> ●  Javascript Developer</p>
    `
  }
  
];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      {/* <h1>FAQs</h1> */}
      <FAQ data={data} />
    </div>
  );
};

export default App;
