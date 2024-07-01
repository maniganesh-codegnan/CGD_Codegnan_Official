import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "JAVA Introduction",
    p: `
          <p> ● History</p>
          <p> ● Features</p>
    `
  },
  {
    head: "Java Basics & Introduction to Eclipse",
    p: `
        <p> ● Post Install Configuration</p>
        <p> ● Writing a simple program</p>
        <p> ● compiling and executing</p>
        <p> ● Data types</p>
        <p> ● Variables and Arrays</p>
        <p> ● Using Eclipse</p>
        <p> ● Create packaged classes</p>
        <p> ● Eclipse shortcuts</p>
    `
  },
  {
    head: "Operators & Expressions",
    p: `
        <p> ●  Arithmetic Operators</p>
        <p> ●  Boolean Operators</p>
        <p> ●  Logical Operators</p>
        <p> ●  Binary Operators</p>

    `
  },
  {
    head: "Control Statements",
    p: `
        <p> ●  Branching Statements</p>
        <p> ●  Iterative Statements</p>
        <p> ●  Break & Continue with enhancements</p>
        <p> ●  While</p>
        <p> ●  For</p>
        <p> ●  Do..While</p>
        <p> ●  Break and Continue Statement</p>
    `
  },
  {
    head: "Java Object Oriented Programming",
    p: `
        <p> ● Basics of OOPs</p>
        <p> ● Fundamentals of class & object</p>
        <p> ● new keyword</p>
        <p> ● Reference variables</p>
        <p> ● Member methods of a class</p>
        <p> ● Constructors</p>
        <p> ● Finalize method</p>
        <p> ● Overloading member methods</p>
        <p> ● Overloading constructors</p>
        <p> ● Passing and returning objects with methods</p>
        <p> ● Access Control</p>
        <p> ● Static Methods</p>
        <p> ● Static Variables</p>
        <p> ● Static Block</p>
        <p> ● Using final keyword</p>
        <p> ● Unit Testing using Junit-5</p>
    `
  },
  {
    head: "Inheritance",
    p: `
      <p> ●  Basics of Inheritance</p>
      <p> ●  Members accessibility in inheritance</p>
      <p> ●  Using super keyword</p>
      <p> ●  The sequence of execution of constructors in inheritance</p>
      <p> ●  Method Overriding</p>
      <p> ●  Dynamic Method Dispatch</p>
      <p> ●  Abstract classes</p>
      <p> ●  Preventing overriding</p>
      <p> ●  Preventing inheritance</p>
    `
  },
  {
    head: "Exception Handling",
    p: `
        <p> ●  Fundamentals of Exceptions</p>
        <p> ●  Types of exceptions</p>
        <p> ●  Using try and catch keywords</p>
        <p> ●  Multiple catches</p>
        <p> ●  Nesting of try blocks</p>
        <p> ●  Using throw keyword</p>
        <p> ●  Using throws keyword</p>
        <p> ●  Finally block</p>
        <p> ●  Some predefined exceptions and their usage</p>
        <p> ●  User defined exceptions</p>
    `
  },
  {
    head: "Interfaces",
    p: `
        <p> ●  Purpose of Interface</p>
        <p> ●  Defining an interface</p>
        <p> ●  Implementing interfaces</p>
        <p> ●  Interface reference variables</p>
        <p> ●  Interface with variables</p>
        <p> ●  Extending interfaces</p>
    `
  },
  {
    head: "Multi Threaded programming",
    p: `
          <p> ●   Basics of threads</p>
          <p> ●   Java threaded model</p>
          <p> ●   Defining threads using Runnable interface</p>
          <p> ●   Defining threads using Thread superclass</p>
          <p> ●   Multiple threads</p>
          <p> ●   Thread Priority values</p>
          <p> ●   Thread Synchronization using synchronized methods</p>
      <br/>
      <p>Thread Synchronization using synchronized blocks</p>
    `
  },  
  {
    head: "Predefined Libraries",
    p: `
          <p> ●   Using String class</p>
          <p> ●   Using java.lang package</p>
          <p> ●   Working with Data & Time</p>
          <p> ●   Utility framework</p>
          <p> ●   Collection framework</p>
          <p> ●   I/O framework</p>
    `
  },
  {
    head: "Getting Started with Hackerrank use cases and working on them",
    p: `
            <p> ● Solving Level by Level Challenges</p>
            <p> ● Assignments to acquire Bronze and Silver Level badges</p>
    `
  },
  {
    head: "RDBMS (MySQL)",
    p: `
            <p> ●  Introduction to Database & DBMS</p>
            <p> ●  Data types</p>
            <p> ●  Table, Record, Field</p>
            <p> ●  SQL Queries,</p>
            <p> ●  Database Normalization</p>
            <p> ●  Joins, Sub Queries</p>
            <p> ●  INSERT UPDATE | DELETE Operations</p>
            <p> ●  DDL Commands</p>
            <p> ●  PL/Sql</p>
    `
  },
  {
    head: "Database Programming",
    p: `
            <p> ●  Overview of JDBC API</p>
            <p> ●  Different types of JDBC Drivers</p>
            <p> ●  JDBC URLS</p>
            <p> ●  DriverManager</p>
            <p> ●  Establishing a connection with the database</p>
            <p> ●  Creating and executing SQL Statements</p>
            <p> ●  Working with CallableStatement</p>
    `
  },
  {
    head: "Server side Programming with Servlets",
    p: `
            <p> ●   Definition</p>
            <p> ●   Deploying a simple servlet in a Servlet Container (Tomcat)</p>
            <p> ●   Life cycle of a Servlet</p>
            <p> ●   Servlet interface</p>
            <p> ●   ServletRequest Interface</p>
            <p> ●   ServletResponse Interface</p>
            <p> ●   Additional capabilities of HTTPServlet</p>
            <p> ●   Servlet Programming with JDBC CRUD Operations</p>
            <p> ●   Session tracking</p>
    `
  },
  {
    head: "Java Server Pages (JSPs)",
    p: `
            <p> ●   JSP Basics</p>
            <p> ●   Differences between Servlets and JSPs</p>
            <p> ●   Running a simple JSP</p>
            <p> ●   The JSP generated Servlet code</p>
            <p> ●   JSP Implicit Objects</p>
            <p> ●   JSP Syntax for Different JSP Elements</p>
            <p> ●   Developing JSP Beans</p>
    `
  },
  {
    head: "JPA-Hibernate (ORM FrameWork)",
    p: `
            <p> ●  Introduction to ORM, JPA</p>
            <p> ●  SessionFactory, Session, Transaction</p>
            <p> ●  Performing CRUD Operations with XML</p>
            <p> ●  Performing CRUD Operations with Annotations</p>
            <p> ●  Different ID Generation Strategies</p>
            <p> ●  Hibernate with Inheritance</p>
    `
  },
  {
    head: "Spring",
    p: `
            <p> ●   In-troduction</p>
            <p> ●   Bean-Factory and application Context</p>
            <p> ●   Conta-iner Concepts</p>
            <p> ●   Sprin-g Data JPA Template</p>
            <p> ●   AOP-</p>
            <p> ●   MVC-</p>
    `
  },
  {
    head: "Spring Boot",
    p: `
            <p> ●   Introduction to STS</p>
            <p> ●   DI with STS</p>
            <p> ●   MVC, AOP</p>
            <p> ●   Security, Role based Authentication, OAuth2, Token based authentication</p>
    `
  },
  {
    head: "Spring WebServicers",
    p: `
          <p> ●   Introduction to WebServicer</p>
          <p> ●   Basics of REST APIs</p>
          <p> ●   MVC, AOP</p>
          <p> ●   Spring REST</p>
    `
  },
  {
    head: "Microservices with Spring Boot, Spring Cloud",
    p: `
            <p> ●  Introduction to MicroService architecture</p>
            <p> ●  Advantages with MicroService over Monolithinc architecture</p>
            <p> ●  Develop and Deploy Microservice application in localhost Introduction to Service Discovery</p>
            <p> ●  Client side Discovery pattern</p>
            <p> ●  Server side Discovery pattern</p>
            <p> ●  Load Balancing configuration</p>
    `
  },
  {
    head: "DevOps Tools",
    p: `
            <p> ●  Introduction to DevOps and advantages</p>
            <p> ●  Cit</p>
            <p> ●  Maven</p>
            <p> ●  Jenkins</p>
            <p> ●  Docker</p>
            <p> ●  Unit Testing with JUnit</p>
    `
  },  {
    head: "Design Patterns",
    p: `
            <p> ●  Creational Design Patterns</p>
            <p> ●  Structural Design Patterns</p>
            <p> ●  Miscellaneous Design Patterns</p>
            <p> ●  Behavioral Design Patterns</p>
    `
  },

    {
    head: "Projects",
    p: `<p>Life Line – A Health Assistance Web Application Requirement description</p>
      <br/>
            <p> ●  Patient portfolio service- Health records (medical checkup history), book a bed (hospital), compare the cost of beds, compare Test reports, order medicines Doctor (service) -find doctor, book an appointment, doctor details</p>
            <p> ●  Hospital (service) – list of doctors, specialty, available beds, book outdoor appoint- ment, treatment package(pregnancy, heart surgery etc.)</p>
            <p> ●  Pathology (service) – list of tests, details about each test, book an appointment, test results/current and history)</p>
            <p> ●  Medical Store (Service) – search Medicines, order medicines, upload prescriptions. view order history</p>
            <p> ●  Ambulance service – Find Ambulance, Get travel cost. Book a travel, View travel history</p>
    `
  },
  {
    head: "Online Medicine Shopping System",
    p: `<p>Requirement description</p>
        <br/>
            <p> ● To provide computerised data storage facilities</p>
            <p> ● Users can search easily for any record.</p>
            <p> ● The new system requires less time for completion of any work.</p>
            <p> ● All the stock of medicine is updated automatically in the new system.</p>
            <p> ● Integration of Payment Gateway</p>
            <p> ● The system is user friendly and anyone having computer knowledge can handle it easily.</p>
            <p> ● Maintaining stock, Supplier information, Customer information & bill information are easy.</p>
      
    `
  },
  {
    head: "POnline Auction Application (e-Auction)",
    p: `
      <p>Requirement description</p>
      <br/>
        <p> ● Develop a web based application auctions. This application allows the users to sell something in auctions.</p>
        <p> ● Users of the application bid on the products they are interested in buying.</p>
        <p> ● The main objective of the e-Auction must be to obtain best value and the highest price.</p>
        <p> ● It cannot be possible to achieve best value outcomes whilst the focus remains on price.</p>
    `
  },
  {
    head: "Online Banking Application",
    p: `
    <p>Requirement description</p>
    <p>An online-banking application allows you to perform day to day banking activities.</p>
      <br/>
          <p> ●  New User Registration</p>
          <p> ●  Login</p>
          <p> ●  Deposit</p>
          <p> ●  Withdrawal</p>
          <p> ●  Fund Transfer</p>
    `
  },
  {
    head: "FrontEnd Development",
    p: `
        <p> ●  Introduction</p>
        <p> ●  History and Importance of HTML</p>
        <p> ●  Basic HTML syntax</p>
        <p> ●  The current state of HTML</p>
        <p> ●  HTML resources</p>
        <p> ●  Choosing a code editor</p>
        <p> ●  Exploring an HTML document</p>
        <p> ●  DOCTYPE declarations</p>
        <p> ●  Document head</p>
        <p> ●  Understanding content models</p>
    `
  },
  {
    head: "Formatting Page Content",
    p: `
        <p> ●  Formatting content with HTML</p>
        <p> ●  Headings</p>
        <p> ●  Paragraphs</p>
        <p> ●  Whitespaces</p>
        <p> ●  Images</p>
    `
  },
  {
    head: "Creating Lists",
    p: `
      <p> ●  Unordered lists</p>
      <p> ●  Ordered lists</p>
      <p> ●  Definition lists</p>
    `
  },
  {
    head: "Creating Links",
    p: `
        <p> ●  Anchor element</p>
        <p> ●  Page internal linking</p>
        <p> ●  Linking to external pages</p>
        <p> ●  Linking to downloadable</p>
        <p> ●  Linking to page regions</p>
    `
  },
  {
    head: "HTML Forms",
    p: `
        <p> ●  Introduction to forms and their importance</p>
        <p> ●  Form structure and basic form elements</p>
        <p> ●  Text inputs, textareas, and buttons</p>
    `
  },
  {
    head: "Form Controls, Attributes and Elements",
    p: `
        <p> ●  Radio buttons and checkboxes</p>
        <p> ●  Select dropdowns and file uploads</p>
        <p> ●  Hidden inputs and labels</p>
    `
  },
  {
    head: "Projects",
    p: `
          <p>1. Favourite Blog</p>
          <p>2. Resume building with HTML</p>
          <p>3. Registration & Login page</p>
    `
  },
  {
    head: "CSS3",
    p: `
      <h2>Getting started</h2>
      <br/>
        <p> ●  HTML overview</p>
        <p> ●  Default browser styles</p>
        <p> ●  Browser support and inconsistencies</p>
        <p> ●  Inline, internal and external CSS</p>
        <p> ●  Naming conventions</p>
    `
  },
  {
    head: "CSS Core",
    p: `
        <p> ●   Syntax, terminology, and naming conventions</p>
        <p> ●   Type, class, and id selectors.</p>
        <p> ●   Combinator selectors</p>
        <p> ●   Selectors: Best practices</p>
    `
  },
  {
    head: "Typography",
    p: `
        <p> ● Web-safe fonts and the font-family property</p>
        <p> ● Web fonts and Google fonts</p>
        <p> ● The font-size property</p>
        <p> ● The font-style and font-weight properties</p>
        <p> ● The color, line height, and text properties</p>
        <p> ● Adjusting the font-weight property</p>
    `
  },
  {
    head: "Layouts",
    p: `
        <p> ●  Block vs. inline display</p>
        <p> ●  The box model</p>
        <p> ●  Margin and page layout</p>
        <p> ●  Padding</p>
        <p> ●  Floats</p>
        <p> ●  The box model fix</p>
        <p> ●  Box model review</p>
        <p> ●  Float and display review</p>
        <p> ●  Horizontal navs with the display property</p>
        <p> ●  Horizontal navs with the float property</p>
        <p> ●  Positioning</p>
        <p> ●  Float, display, and position</p>
        <p> ●  Layers and the z-index property</p>
    `
  },
  {
    head: "Advanced layout",
    p: `
        <p> ●  CSS grid</p>
        <p> ●  CSS Flexbox</p>
    `
  },
  {
    head: "Projects",
    p: `
        <p> 1. Building Paytm clone Page</p>
        <p> 2.Building Portfolio page</p>
    `
  },
  {
    head: "Bootstrap – CSS Framework",
    p: `
        <p> ●  Introduction</p>
        <p> ●  What is Bootstrap? Why do we use it?</p>
        <p> ●  Initial environment setup</p>
    `
  },
  {
    head: "Typography and Utilities",
    p: `
            <p> ●   Section introduction</p>
            <p> ●   Headings and basic typography</p>
            <p> ●   Text alignment and Display</p>
            <p> ●   Floats and Fixed positions</p>
            <p> ●   Colors and Backgrounds.</p>
            <p> ●   Margin and Padding spacing</p>
            <p> ●   Sizing and Borders</p>
    `
  },
  {
    head: "CSS Breakpoints",
    p: `
        <p> ●   Section Intro</p>
        <p> ●   Buttons and Button groups</p>
        <p> ●   Navbar and Navs</p>
        <p> ●   List groups and Badges</p>
        <p> ●   Forms & input</p>
        <p> ●   Input groups</p>
        <p> ●   Alerts and Progress Bars</p>
        <p> ●   Tables and Pagination</p>
        <p> ●   Working with cards</p>
        <p> ●   Media objects</p>
        <p> ●   Jumbotron</p>
    `
  },
  {
    head: "Grid system and Flex-box",
    p: `
        <p> ●   Section Intro</p>
        <p> ●   Grid system</p>
        <p> ●   Grid alignment</p>
        <p> ●   Flexbox classes</p>
        <p> ●   Auto margin, wrap, and ordering</p>
    `
  },
  {
    head: "JS JavaScript",
    p: `
      <p> ●  Introduction</p>
      <p> ●  What is JavaScript?</p>
      <p> ●  How does JavaScript relate to Java?</p>
      <p> ●  History of JavaScript</p>
      <p> ●  Navigating the JavaScript landscape</p>
      <p> ●  Tools for JavaScript development</p>
      <p> ●  Introducing the browser console</p>
      <p> ●  Add inline JavaScript to an HTML document</p>
      <p> ●  Add JavaScript in an external file</p>
    `
  },
  {
    head: "Writing JavaScript",
    p: `
        <p> ●   Basic syntax & comments</p>
        <p> ●   Declarations</p>
        <p> ●   Arithmetic operators and math operators</p>
        <p> ●   Working with strings and numbers</p>
        <p> ●   Literals</p>
    `
  },
  {
    head: "Control Flow",
    p: `
        <p> ●  Conditional statements and logic</p>
        <p> ●  Looping Statements</p>
    `
  },
  {
    head: "Arrays",
    p: `
           <p> ●  Arrays</p>
           <p> ●  Predefined functions of an Array</p>
    `
  },
  {
    head: "Functions",
    p: `
        <p> ●  Defining functions</p>
        <p> ●  Calling functions</p>
        <p> ●  Closures</p>
        <p> ●  Arguments & parameters</p>
        <p> ●  Arrow functions</p>
    `
  },
  {
    head: "Essential JavaScript Built-in methods",
    p: `
        <p> ●   Number Methods</p>
        <p> ●   Boolean Methods</p>
        <p> ●   String Methods</p>
        <p> ●   Array Methods</p>
        <p> ●   Math Methods</p>
        <p> ●   RegExp Methods</p>
    `
  },
  {
    head: "Objects",
    p: `
        <p> ●  Creating objects</p>
        <p> ●  Objects and properties</p>
        <p> ●  Map</p>
    `
  },
  {
    head: "JavaScript modules",
    p: `
        <p> ●  Exporting<p> ● 
        <p> ●  Importing<p> ● 
        <p> ●  Default exports<p> ● 
        <p> ●  Renaming features<p> ● 
        <p> ●  Aggregating modules<p> ● 
        <p> ●  Dynamic module loading<p> ● 
    `
  },
  {
    head: "JavaScript and the DOM",
    p: `
        <p> ●  Intro to DOM</p>
        <p> ●  Target elements in the DOM with querySelector methods</p>
        <p> ●  Access and change classes</p>
        <p> ●  Access and change attributes</p>
        <p> ●  Add DOM elements</p>
        <p> ●  Apply inline CSS to an element</p>
        <p> ●  DOM events</p>
    `
  },
  {
    head: "JavaScript Server Actions",
    p: `
        <p> ●   AJAX calls</p>
        <p> ●   get, post, put, delete using fetch() and axios library</p>
    `
  },
  {
    head: "Projects",
    p: `
        <p>1. Creating a website in which we can upload files, displaying data in table format, and adding CSS to it from the front end.</p>
        <p>2.Creating a simple College website using HTML, CSS, JS. In which we can move from one page to another page, building a registration page.</p>
    `
  },
  {
    head: "ReactJs",
    p: `
      <p> ●  Introduction to React.js</p>
      <p> ●  Setting up a React development environment (e.g., Nodejs, npm, Create React App)</p>
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
        <p> ●   Functional components</p>
        <p> ●   Class components</p>
        <p> ●   Passing and using props</p>
    `
  },
  {
    head: "State and Lifecycle",
    p: `
      <p> ●   State in React components</p>
      <p> ●   Updating state</p>
      <p> ●   Component lifecycle methods</p>
    `
  },
  {
    head: "React Hooks",
    p: `
      <p> ●  useState() </p>
      <p> ●  useEffect() </p>
      <p> ●  useContext) </p>
    `
  },
  {
    head: "Handling Events",
    p: `
      <p> ●   Event handling in React</p>
      <p> ●   Binding event handlers</p>
      <p> ●   Arrow functions vs. regular functions</p>
    `
  },
  {
    head: "Working with Forms",
    p: `
      <p> ●   Controlled components</p>
      <p> ●   Handling form submission</p>
      <p> ●   Form validation</p>
    `
  },
  {
    head: "Conditional Rendering",
    p: `
      <p> ●  Conditional rendering with if statements</p>
      <p> ●  Ternary operators and logical && in J5X</p>
    `
  },
  {
    head: "Lists and Keys",
    p: `
        <p> ●  Rendering Lists</p>
        <p> ●  Using map to render lists of elements</p>
        <p> ●  Providing a key for each item</p>
    `
  },
  {
    head: "Understanding Keys",
    p: `
        <p> ● The importance of keys in React</p>
        <p> ●  Choosing the correct key</p>
    `
  },
  {
    head: "Styling in React.js",
    p: `
      <p> ● CSS in React</p>
      <p> ● Different approaches for styling (CSS, CSS-in-JS, CSS Modules)</p>
      <p> ● Inline styles</p>
      <p> ● Styling Libraries</p>
      <p> ● Popular CSS frameworks (eg, Bootstrap, Material-Ul)</p>
    `
  },
  {
    head: "React Router",
    p: `
        <p> ●   Introduction to React Router</p>
        <p> ●   Setting up React Router</p>
        <p> ●   Creating routes</p>
        <p> ●   Navigating with React Router</p>
        <p> ●   Using Link and NavLink</p>
        <p> ●   Nested Routes and Dynamic Routing</p>
        <p> ●   Nested routes</p>
        <p> ●   Passing parameters to routes</p>
    `
  },
  {
    head: "State Management with Redux",
    p: `
        <p> ●   Introduction to Redux</p>
        <p> ●   Understanding the need for state management</p>
        <p> ●   Basic concepts: actions, reducers, store</p>
        <p> ●   Setting Up Redux</p>
        <p> ●   Installing Redux and setting up a store</p>
        <p> ●   Creating actions and reducers</p>
        <p> ●   Connecting React with Redux</p>
        <p> ●   Using connect to connect components to the store</p>
        <p> ●   Dispatching actions</p>
    `
  },
  {
    head: "Asynchronous Programming and API Integration AJAX and Fetch API",
    p: `
        <p> ●   Making HTTP requests in React</p>
        <p> ●   Fetching data from an API</p>
        <p> ●   Async/Await and Promises</p>
    `
  },
  {
    head: "Handling errors in React applications",
    p: `
        <p> ●  Error Handling and Debugging</p>
        <p> ●  Debugging React apps</p>
        <p> ●  Performance Optimization</p>
        <p> ●  Memoization</p>
        <p> ●  React.memo and PureComponent</p>
    `
  },
  {
    head: "Hands-on Projects",
    p: `
      <p> 1) Hospital Management System:- It is a single Page application. In which doctors and patients are available. Using ReactJS, json-server package. Doctors are going to be added based on their Specialisation  Patients are going to book appointments for a Specific Doctor.</p>
      <p> 2) Online Banking Application:- A simple online-banking application allows you to perform day to day banking activities.</p>
      <p> New User Registration</p>
      <p> Login</p>
      <p> Deposit</p>
      <p> Withdrawal</p>
      <p> Fund Transfer</p>
      <p> Deploying a React application</p>
      <br/>
          <p> ● Deployment strategies (e.g., Netlify, Vercel, AWS)</p>
      
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
