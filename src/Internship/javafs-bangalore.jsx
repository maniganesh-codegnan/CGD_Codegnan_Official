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
        head: "JAVA Introduction",
        p: (
            <ul>
                <li>History.</li>
                <li>Features.</li>
            </ul>
        )
    },
    {
        head: "Java Basics & Introduction to Eclipse",
        p: (
            <ul>
                   <li> Post Install Configuration</li>
                   <li> Writing a simple program</li>
                   <li> compiling and executing</li>
                   <li> Data types</li>
                   <li> Variables and Arrays</li>
                   <li> Using Eclipse</li>
                   <li> Create packaged classes</li>
                   <li> Eclipse shortcuts</li>
            </ul>
        )
    },
    {
        head: "Operators & Expressions",
        p: (
            <ul>
                    <li> Arithmetic Operators</li>
                    <li> Boolean Operators</li>
                    <li> Logical Operators</li>
                    <li> Binary Operators</li>
            </ul>
        )
    },
    {
        head: "Control Statements",
        p: (
            <ul>
                    <li> Branching Statements</li>
                    <li> Iterative Statements</li>
                    <li> Break & Continue with enhancements</li>
                    <li> While</li>
                    <li> For</li>
                    <li> Do..While</li>
                    <li> Break and Continue Statement</li>
            </ul>
        )
    },
    {
        head: "Java Object Oriented Programming",
        p: (
            <ul>
                    <li> Basics of OOPs</li>
                    <li> Fundamentals of class & object</li>
                    <li> new keyword</li>
                    <li> Reference variables</li>
                    <li> Member methods of a class</li>
                    <li> Constructors</li>
                    <li> Finalize method</li>
                    <li> Overloading member methods</li>
                    <li> Overloading constructors</li>
                    <li> Passing and returning objects with methods</li>
                    <li> Access Control</li>
                    <li> Static Methods</li>
                    <li> Static Variables</li>
                    <li> Static Block</li>
                    <li> Using final keyword</li>
                    <li> Unit Testing using Junit-5</li>
            </ul>
        )
    },
    {
        head: "Inheritance",
        p: (
            <ul>
                    <li> Basics of Inheritance</li>
                    <li> Members accessibility in inheritance</li>
                    <li> Using super keyword</li>
                    <li> The sequence of execution of constructors in inheritance</li>
                    <li> Method Overriding</li>
                    <li> Dynamic Method Dispatch</li>
                    <li> Abstract classes</li>
                    <li> Preventing overriding</li>
                    <li> Preventing inheritance</li>
            </ul>
        )
    },
    {
        head: "Exception Handling",
        p: (
            <ul>
                    <li> Fundamentals of Exceptions</li>
                    <li> Types of exceptions</li>
                    <li> Using try and catch keywords</li>
                    <li> Multiple catches</li>
                    <li> Nesting of try blocks</li>
                    <li> Using throw keyword</li>
                    <li> Using throws keyword</li>
                    <li> Finally block</li>
                    <li> Some predefined exceptions and their usage</li>
                    <li> User defined exceptions</li>
            </ul>
        )
    },
    {
        head: "Interfaces",
        p: (
            <ul>
                    <li> Purpose of Interface</li>
                    <li> Defining an interface</li>
                    <li> Implementing interfaces</li>
                    <li> Interface reference variables</li>
                    <li> Interface with variables</li>
                    <li> Extending interfaces</li>
            </ul>
        )
    },
    {
        head: "Predefined Libraries",
        p: (
            <ul>
                    <li> Basics of Inheritance</li>
                    <li> Members accessibility in inheritance</li>
                    <li> Using super keyword</li>
                    <li> The sequence of execution of constructors in inheritance</li>
                    <li> Method Overriding</li>
                    <li> Dynamic Method Dispatch</li>
                    <li> Abstract classes</li>
                    <li> Preventing overriding</li>
                    <li> Preventing inheritance</li>
            </ul>
        )
    },

    {
        head: "Predefined Libraries",
        p: (
        <>
            <ul> 
              <li>   Using String class</li>
              <li>   Using java.lang package</li>
              <li>   Working with Data & Time</li>
              <li>   Utility framework</li>
              <li>   Collection framework</li>
              <li>   I/O framework</li>
        </ul>
        </>
        )
      },
      {
        head: "Getting Started with Hackerrank use cases and working on them",
        p: (
        <>
            <ul> 
                <li> Solving Level by Level Challenges</li>
                <li> Assignments to acquire Bronze and Silver Level badges</li>
            </ul>
        </>
        )
      },
      {
        head: "RDBMS (MySQL)",
        p: (
        <>
            <ul> 
                <li>  Introduction to Database & DBMS</li>
                <li>  Data types</li>
                <li>  Table, Record, Field</li>
                <li>  SQL Queries,</li>
                <li>  Database Normalization</li>
                <li>  Joins, Sub Queries</li>
                <li>  INSERT UPDATE | DELETE Operations</li>
                <li>  DDL Commands</li>
                <li>  PL/Sql</li>
            </ul>
        </>
        )
      },
      {
        head: "Database Programming",
        p: (
        <>
            <ul> 
                <li>  Overview of JDBC API</li>
                <li>  Different types of JDBC Drivers</li>
                <li>  JDBC URLS</li>
                <li>  DriverManager</li>
                <li>  Establishing a connection with the database</li>
                <li>  Creating and executing SQL Statements</li>
                <li>  Working with CallableStatement</li>
            </ul>
        </>
        )
      },
      {
        head: "Server side Programming with Servlets",
        p: (
        <>
            <ul> 
                <li>   Definition</li>
                <li>   Deploying a simple servlet in a Servlet Container (Tomcat)</li>
                <li>   Life cycle of a Servlet</li>
                <li>   Servlet interface</li>
                <li>   ServletRequest Interface</li>
                <li>   ServletResponse Interface</li>
                <li>   Additional capabilities of HTTPServlet</li>
                <li>   Servlet Programming with JDBC CRUD Operations</li>
                <li>   Session tracking</li>
            </ul>
        </>
        )
      },
      {
        head: "Java Server Pages (JSPs)",
        p: (
        <>
            <ul> 
                <li>   JSP Basics</li>
                <li>   Differences between Servlets and JSPs</li>
                <li>   Running a simple JSP</li>
                <li>   The JSP generated Servlet code</li>
                <li>   JSP Implicit Objects</li>
                <li>   JSP Syntax for Different JSP Elements</li>
                <li>   Developing JSP Beans</li>
            </ul>
        </>
        )
      },
      {
        head: "JPA-Hibernate (ORM FrameWork)",
        p: (
        <>
            <ul> 
                <li>  Introduction to ORM, JPA</li>
                <li>  SessionFactory, Session, Transaction</li>
                <li>  Performing CRUD Operations with XML</li>
                <li>  Performing CRUD Operations with Annotations</li>
                <li>  Different ID Generation Strategies</li>
                <li>  Hibernate with Inheritance</li>
            </ul>
        </>
        )
      },
      {
        head: "Spring",
        p: (
        <>
            <ul> 
                <li>   In-troduction</li>
                <li>   Bean-Factory and application Context</li>
                <li>   Conta-iner Concepts</li>
                <li>   Sprin-g Data JPA Template</li>
                <li>   AOP-</li>
                <li>   MVC-</li>
            </ul>
        </>
        )
      },
      {
        head: "Spring Boot",
        p: (
        <>
            <ul> 
                <li>   Introduction to STS</li>
                <li>   DI with STS</li>
                <li>   MVC, AOP</li>
                <li>   Security, Role based Authentication, OAuth2, Token based authentication</li>
        </ul>
        </>
        )
      },
      {
        head: "Spring WebServicers",
        p: (
        <>
            <ul> 
              <li>   Introduction to WebServicer</li>
              <li>   Basics of REST APIs</li>
              <li>   MVC, AOP</li>
              <li>   Spring REST</li>
            </ul>
        </>
        )
      },
      {
        head: "Microservices with Spring Boot, Spring Cloud",
        p: (
        <>
            <ul> 
                <li>  Introduction to MicroService architecture</li>
                <li>  Advantages with MicroService over Monolithinc architecture</li>
                <li>  Develop and Deploy Microservice application in localhost Introduction to Service Discovery</li>
                <li>  Client side Discovery pattern</li>
                <li>  Server side Discovery pattern</li>
                <li>  Load Balancing configuration</li>
            </ul>
        </>
        )
      },
      {
        head: "DevOps Tools",
        p: (
        <>
            <ul> 
                <li>  Introduction to DevOps and advantages</li>
                <li>  Cit</li>
                <li>  Maven</li>
                <li>  Jenkins</li>
                <li>  Docker</li>
                <li>  Unit Testing with JUnit</li>
            </ul>
        </>
        )
      },  
      {
        head: "Design Patterns",
        p: (
        <>
            <ul> 
                <li>  Creational Design Patterns</li>
                <li>  Structural Design Patterns</li>
                <li>  Miscellaneous Design Patterns</li>
                <li>  Behavioral Design Patterns</li>
            </ul>
        </>
        )
      },
      {
        head: "Projects",
        p: (
        <>
            <p>Life Line – A Health Assistance Web Application Requirement description</p>
            <ul> 
            <li>  Patient portfolio service- Health records (medical checkup history), book a bed (hospital), compare the cost of beds, compare Test reports, order medicines Doctor (service) -find doctor, book an appointment, doctor details</li>
                <li>  Hospital (service) – list of doctors, specialty, available beds, book outdoor appoint- ment, treatment package(pregnancy, heart surgery etc.)</li>
                <li>  Pathology (service) – list of tests, details about each test, book an appointment, test results/current and history</li>
                <li>  Medical Store (Service) – search Medicines, order medicines, upload prescriptions. view order history</li>
                <li>  Ambulance service – Find Ambulance, Get travel cost. Book a travel, View travel history</li>
            </ul>
        </>
        )
      },
      {
        head: "Online Medicine Shopping System",
        p: (
        <><p>Requirement description</p>
            <ul> 
                <li> To provide computerised data storage facilities</li>
                <li> Users can search easily for any record.</li>
                <li> The new system requires less time for completion of any work.</li>
                <li> All the stock of medicine is updated automatically in the new system.</li>
                <li> Integration of Payment Gateway</li>
                <li> The system is user friendly and anyone having computer knowledge can handle it easily.</li>
                <li> Maintaining stock, Supplier information, Customer information & bill information are easy.</li>
            </ul>
        </>
        )
      },
      {
        head: "Online Auction Application (e-Auction)",
        p: (
        <>
            <p>Requirement description</p>
            <ul> 
                <li> Develop a web based application auctions. This application allows the users to sell something in auctions.</li>
                <li> Users of the application bid on the products they are interested in buying.</li>
                <li> The main objective of the e-Auction must be to obtain best value and the highest price.</li>
                <li> It cannot be possible to achieve best value outcomes whilst the focus remains on price.</li>
            </ul>
        </>
        )
      },
      {
        head: "Online Banking Application",
        p: (
        <>
            
            <p>Requirement description</p>
            <p>An online-banking application allows you to perform day to day banking activities.</p><br/>
            <ul> 
                <li>  New User Registration</li>
                <li>  Login</li>
                <li>  Deposit</li>
                <li>  Withdrawal</li>
                <li>  Fund Transfer</li>
            </ul>
        </>
        )
      },
      {
        head: "FrontEnd Development",
        p: (
        <>
            <ul> 
            <li>  Introduction</li>
            <li>  History and Importance of HTML</li>
            <li>  Basic HTML syntax</li>
            <li>  The current state of HTML</li>
            <li>  HTML resources</li>
            <li>  Choosing a code editor</li>
            <li>  Exploring an HTML document</li>
            <li>  DOCTYPE declarations</li>
            <li>  Document head</li>
            <li>  Understanding content models</li>
        </ul>
        </>
        )
      },
      {
        head: "Formatting Page Content",
        p: (
        <>
            <ul> 
                <li>  Formatting content with HTML</li>
                <li>  Headings</li>
                <li>  Paragraphs</li>
                <li>  Whitespaces</li>
                <li>  Images</li>
            </ul>
        </>
        )
      },
      {
        head: "Creating Lists",
        p: (
        <>
            <ul>
                <li> Unordered lists</li>
                <li> Ordered lists</li>
                <li> Definition lists</li>
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
        head: "HTML Forms",
        p: (
        <>
            <ul> 
                <li>  Introduction to forms and their importance</li>
                <li>  Form structure and basic form elements</li>
                <li>  Text inputs, textareas, and buttons</li>
            </ul>
        </>
        )
      },
      {
        head: "Form Controls, Attributes and Elements",
        p: (
        <>
            <ul> 
                <li>  Radio buttons and checkboxes</li>
                <li>  Select dropdowns and file uploads</li>
                <li>  Hidden inputs and labels</li>
            </ul>
        </>
        )
      },
      {
        head: "Projects",
        p: (
        <>
              <p>1. Favourite Blog</p>
              <p>2. Resume building with HTML</p>
              <p>3. Registration & Login page</p>
        </>
        )
      },
      {
        head: "CSS3",
        p: (
        <>
            <h2>Getting started</h2><br/>
            <ul> 
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
                <li>   Syntax, terminology, and naming conventions</li>
                <li>   Type, class, and id selectors.</li>
                <li>   Combinator selectors</li>
                <li>   Selectors: Best practices</li>
            </ul>
        </>
        )
      },
      {
        head: "Typography",
        p: (
        <>
            <ul> 
                <li> Web-safe fonts and the font-family property</li>
                <li> Web fonts and Google fonts</li>
                <li> The font-size property</li>
                <li> The font-style and font-weight properties</li>
                <li> The color, line height, and text properties</li>
                <li> Adjusting the font-weight property</li>
            </ul>
        </>
        )
      },
      {
        head: "Layouts",
        p: (
        <>
            <ul> 
                <li>  Block vs. inline display</li>
                <li>  The box model</li>
                <li>  Margin and page layout</li>
                <li>  Padding</li>
                <li>  Floats</li>
                <li>  The box model fix</li>
                <li>  Box model review</li>
                <li>  Float and display review</li>
                <li>  Horizontal navs with the display property</li>
                <li>  Horizontal navs with the float property</li>
                <li>  Positioning</li>
                <li>  Float, display, and position</li>
                <li>  Layers and the z-index property</li>
            </ul>
        </>
        )
      },
      {
        head: "Advanced layout",
        p: (
        <>
            <ul> 
                <li>  CSS grid</li>
                <li>  CSS Flexbox</li>
            </ul>
        </>
        )
      },
      {
        head: "Projects",
        p: (
            <>
            <p> 1. Building Paytm clone Page</p>
            <p> 2.Building Portfolio page</p>
        </>
        )
      },
      {
        head: "Bootstrap – CSS Framework",
        p: (
        <>
            <ul> 
                <li>  Introduction</li>
                <li>  What is Bootstrap? Why do we use it?</li>
                <li>  Initial environment setup</li>
            </ul>
        </>
        )
      },
      {
        head: "Typography and Utilities",
        p: (
        <>
            <ul> 
                <li>   Section introduction</li>
                <li>   Headings and basic typography</li>
                <li>   Text alignment and Display</li>
                <li>   Floats and Fixed positions</li>
                <li>   Colors and Backgrounds.</li>
                <li>   Margin and Padding spacing</li>
                <li>   Sizing and Borders</li>
            </ul>
        </>
        )
      },
      {
        head: "CSS Breakpoints",
        p: (
        <>
            <ul> 
                <li>   Section Intro</li>
                <li>   Buttons and Button groups</li>
                <li>   Navbar and Navs</li>
                <li>   List groups and Badges</li>
                <li>   Forms & input</li>
                <li>   Input groups</li>
                <li>   Alerts and Progress Bars</li>
                <li>   Tables and Pagination</li>
                <li>   Working with cards</li>
                <li>   Media objects</li>
                <li>   Jumbotron</li>
            </ul>
        </>
        )
      },
      {
        head: "Grid system and Flex-box",
        p: (
        <>
            <ul>
                <li>   Section Intro</li>
                <li>   Grid system</li>
                <li>   Grid alignment</li>
                <li>   Flexbox classes</li>
                <li>   Auto margin, wrap, and ordering</li>
            </ul>
        </>
        )
      },
      {
        head: "JS JavaScript",
        p: (
        <>
            <ul>
                <li>  Introduction</li>
                <li>  What is JavaScript?</li>
                <li>  How does JavaScript relate to Java?</li>
                <li>  History of JavaScript</li>
                <li>  Navigating the JavaScript landscape</li>
                <li>  Tools for JavaScript development</li>
                <li>  Introducing the browser console</li>
                <li>  Add inline JavaScript to an HTML document</li>
                <li>  Add JavaScript in an external file</li>
            </ul>
        </>
        )
      },
      {
        head: "Writing JavaScript",
        p: (
        <>
            <ul>
                <li>   Basic syntax & comments</li>
                <li>   Declarations</li>
                <li>   Arithmetic operators and math operators</li>
                <li>   Working with strings and numbers</li>
                <li>   Literals</li>
            </ul>
        </>
        )
      },
      {
        head: "Control Flow",
        p: (
        <>
            <ul>
                <li>  Conditional statements and logic</li>
                <li>  Looping Statements</li>
            </ul>
        </>
        )
      },
      {
        head: "Arrays",
        p: (
        <>
            <ul>
               <li>  Arrays</li>
               <li>  Predefined functions of an Array</li>
            </ul>
        </>
        )
      },
      {
        head: "Functions",
        p: (
        <>
            <ul>
                <li>  Defining functions</li>
                <li>  Calling functions</li>
                <li>  Closures</li>
                <li>  Arguments & parameters</li>
                <li>  Arrow functions</li>
            </ul>
        </>
        )
      },
      {
        head: "Essential JavaScript Built-in methods",
        p: (
        <>
            <ul>
                <li>   Number Methods</li>
                <li>   Boolean Methods</li>
                <li>   String Methods</li>
                <li>   Array Methods</li>
                <li>   Math Methods</li>
                <li>   RegExp Methods</li>
            </ul>
        </>
        )
      },
      {
        head: "Objects",
        p: (
        <>
            <ul>
                <li>  Creating objects</li>
                <li>  Objects and properties</li>
                <li>  Map</li>
            </ul>
        </>
        )
      },
      {
        head: "JavaScript modules",
        p: (
            <>
            <ul>
                <li>  Exporting</li >
                <li>  Importing</li >
                <li>  Default exports</li >
                <li>  Renaming features</li >
                <li>  Aggregating modules</li >
                <li>  Dynamic module loading</li >
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
        head: "JavaScript Server Actions",
        p: (
        <>
            <ul>
                <li>AJAX calls</li>
                <li>get, post, put, delete using fetch() and axios library</li>
            </ul>
        </>
        )
      },
      {
        head: "Projects",
        p: (
            <>
                <p>1. Creating a website in which we can upload files, displaying data in table format, and adding CSS to it from the front end.</p>
                <p>2.Creating a simple College website using HTML, CSS, JS. In which we can move from one page to another page, building a registration page.</p>
        </>
        )
      },
      {
        head: "ReactJs",
        p: (
        <>
        <ul>
            <li>  Introduction to React.js</li>
            <li>  Setting up a React development environment (e.g., Nodejs, npm, Create React App)</li>
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
                <li> Functional components</li>
                <li> Class components</li>
                <li> Passing and using props</li>
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
          <li> useState() </li>
          <li> useEffect() </li>
          <li> useContext() </li>
        </ul>
        </>
        )
      },
      {
        head: "Handling Events",
        p: (
        <>
            <ul>
                <li> Event handling in React</li>
                <li> Binding event handlers</li>
                <li> Arrow functions vs. regular functions</li>
            </ul>
        </>
        )
      },
      {
        head: "Working with Forms",
        p:(
        <>
           <ul>
                <li> Controlled components</li>
                <li> Handling form submission</li>
                <li> Form validation</li>
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
          <li>  Ternary operators and logical && in J5X</li>
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
            <li>  Using map to render lists of elements</li>
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
                <li> The importance of keys in React</li>
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
            <li> CSS in React</li>
            <li> Different approaches for styling (CSS, CSS-in-JS, CSS Modules)</li>
            <li> Inline styles</li>
            <li> Styling Libraries</li>
            <li> Popular CSS frameworks (eg, Bootstrap, Material-Ul)</li>
        </ul>
        </>
        )
      },
      {
        head: "React Router",
        p:(
        <>
            <ul>
                <li> Introduction to React Router</li>
                <li> Setting up React Router</li>
                <li> Creating routes</li>
                <li> Navigating with React Router</li>
                <li> Using Link and NavLink</li>
                <li> Nested Routes and Dynamic Routing</li>
                <li> Nested routes</li>
                <li> Passing parameters to routes</li>
            </ul>
        </>
        )
      },
      {
        head: "State Management with Redux",
        p: (
    <>
        <ul>
            <li> Introduction to Redux</li>
            <li> Understanding the need for state management</li>
            <li> Basic concepts: actions, reducers, store</li>
            <li> Setting Up Redux</li>
            <li> Installing Redux and setting up a store</li>
            <li> Creating actions and reducers</li>
            <li> Connecting React with Redux</li>
            <li> Using connect to connect components to the store</li>
            <li> Dispatching actions</li>
        </ul>
        </>
        )
      },
      {
        head: "Asynchronous Programming and API Integration AJAX and Fetch API",
        p: (
        <>
            <ul>
                <li>Making HTTP requests in React</li>
                <li>Fetching data from an API</li>
                <li>Async/Await and Promises</li>
            </ul>
        </>
        )
      },
      {
        head: "Handling errors in React applications",
        p: (
            <>
            <ul>
                <li>  Error Handling and Debugging</li>
                <li>  Debugging React apps</li>
                <li>  Performance Optimization</li>
                <li>  Memoization</li>
                <li>  React.memo and PureComponent</li>
            </ul>
        </>
        )
      },
      {
        head: "Hands-on Projects",
        p: (
        <>
          <p> 1. Hospital Management System:- It is a single Page application. In which doctors and patients are available. Using ReactJS, json-server package. Doctors are going to be added based on their Specialisation  Patients are going to book appointments for a Specific Doctor.</p>
          <p> 2. Online Banking Application:- A simple online-banking application allows you to perform day to day banking activities.</p>
          <p> New User Registration</p>
          <p> Login</p>
          <p> Deposit</p>
          <p> Withdrawal</p>
          <p> Fund Transfer</p>
          <p> Deploying a React application</p>
          <br/>
            <ul>
                <li> Deployment strategies (e.g., Netlify, Vercel, AWS)</li>
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
                <h2 style={{ color :"black" }}>Full Stack Java Developer  <span style={{ color :"red" }} > Course Curriculum in Bangalore </span></h2><br />
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
            <h2 style={{ color :"black" }}>Java Skills <span style={{ color :"red" }} > Covered in Bangalore </span></h2><br />
                <ul>
                    {[
                        "Become a pro in Java programming",
                        "Become a pro in Java programming.",
                        "Gain expertise in Java, MySQL, CSS, Spring, Bootstrap, React JS, DevOPs, Hibernate and Javascript for real world projects",
                        "End-to-end experience in front-end, back-end and web development",
                        "Become acquainted with Java object oriented programming, databases and multithreaded programming among others",
                        "Build a diverse Java and full stack portfolio with case studies and hands-on projects"
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
                        <h2 className="Linkcolor">Become a full stack java developer </h2><br />
                        <p>Talk to our expert Java mentors and learn how our training programs can help you become a java developer and get a high-paying job. </p><br /><br />
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
