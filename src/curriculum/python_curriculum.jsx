import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "Python Introduction and setting up the environment",
    p: `
         <p> ●  Introduction to programming</p>
         <p> ●  R or Python?</p>
         <p> ●  Why Python for Data Science?</p>
         <p> ●  Different job roles with Python</p>
         <p> ●  Different Python IDEs</p>
         <p> ●  Downloading and setting up python environment</p>
         <br/>
      <p><b>Hands-On – Installing Python – IDLE</b></p>
    `
  },
  {
    head: "Python Basic Syntax and Data Types",
    p: `
          <p> ●  Python input and output operations.</p>
          <p> ●  Comments</p>
          <p> ●  Variables, rules for naming variables</p>
          <p> ●  Basic Data Types in Python</p>
          <p> ●  Typecasting in python</p>
          <br/>
     <p><b>Hands-On – Using comments, variables, data types, and typecasting in python program</b></p>
    `
  },
  {
    head: "Operators in Python",
    p: `
             <p> ●  Arithmetic operators</p>
             <p> ●  Assignment operators</p>
             <p> ●  Comparison operators</p>
             <p> ●  Logical operators</p>
             <p> ●  Identity operators</p>
             <p> ●  Membership Operators</p>
             <p> ●  Bitwise Operators</p>
             <br/>
        <p><b>Hands-On – Working with different data types in a program</b></p>
    `
  },
  {
    head: "Strings in Python ",
    p: `
             <p> ●  Creating strings</p>
             <p> ●  String formatting</p>
             <p> ●  Indexing</p>
             <p> ●  Slicing</p>
             <p> ●  String methods</p>
             <br/>
        <p><b>Hands-On – Performing string operations</b></p>
    `
  },
  {
    head: "Lists",
    p: `
            <p> ●  Creating lists</p>
            <p> ●  Properties of lists</p>
            <p> ●  List indexing</p>
            <p> ●  List slicing</p>
            <p> ●  List of lists</p>
            <p> ●  List Methods</p>
            <p> ●  Adding, Updating & removing elements from lists</p>
      <br />
      <p><b>Hands-On – Slicing, Indexing, and using methods on lists</b></p>
    `
  },
  {
    head: "Tuples",
    p: `
            <p> ●  Syntax to create tuples</p>
            <p> ●  Tuple properties</p>
            <p> ●  Indexing on tuples</p>
            <p> ●  Slicing on tuples</p>
            <p> ●  Tuple methods</p>
      <br />
      <p><b>Hands-On – Working with tuples</b></p>
    `
  },
  {
    head: "Sets",
    p: `
            <p> ●  Syntax for creating sets</p>
            <p> ●  Updating sets</p>
            <p> ●  Set operations and methods</p>
            <p> ●  Difference between sets, lists and tuples</p>
      <br/>
      <p><b>Hands-On – Performing set operations in a program</b></p>
    `
  },
  {
    head: "Dictionaries",
    p: `
          <p> ●  Syntax for creating Dictionaries</p>
          <p> ●  Storing data in dictionaries</p>
          <p> ●  Dictionaries keys and values</p>
          <p> ●  Accessing the elements of dictionaries</p>
          <p> ●  Dictionary methods</p>
      <br/>
      <p><b>Hands-On – Creating dictionaries and using dictionaries methods</b></p>
    `
  },
  {
    head: "Python conditional Statements",
    p: `
            <p> ●  Setting logic with conditional statements</p>
            <p> ●  If statements</p>
            <p> ●  If -else statements</p>
            <p> ●  If-elif-else statements</p>
      <br/>
      <p><b>Hands-On – Setting logic in programs using conditional statements</b></p>
    `
  },  
  {
    head: "Loops in Python",
    p: `
          <p> ● Iterating with python loops</p>
          <p> ●  while loop</p>
          <p> ●  for loop</p>
          <p> ●  range</p>
          <p> ●  break</p>
          <p> ●  continue</p>
          <p> ●  pass</p>
          <p> ●  enumerate</p>
          <p> ●  zip</p>
          <p> ●  assert</p>
      <br/>
      <p><b>Hands-On – Iterating with loops in python</b></p>
    `
  },
  {
    head: "Getting Started with Hackerrank use cases and working on them",
    p: `
          <p> ●   Solving Level by Level Challenges</p>
          <p> ●   Assignments to acquire Bronze and Silver Level badges</p>
      <br/>
    `
  },
  {
    head: "Lists and Dictionaries comprehension",
    p: `
            <p> ●  Why List comprehension</p>
            <p> ●  Syntax for list comprehension</p>
            <p> ●  Syntax for dict comprehension</p>
      <br/>
      <p><b>Hands-On – Using List and Dictionary comprehension</b></p>
    `
  },
  {
    head: "Loops",
    p: `
          <p> ●  Iterating with python loops</p>
          <p> ●  while loop</p>
          <p> ●  for loop</p>
          <p> ●  range</p>
          <p> ●  break</p>
          <p> ●  continue</p>
          <p> ●  pass</p>
          <p> ●  enumerate</p>
          <p> ●  zip</p>
          <p> ●  assert</p>
      <br/>
      <p><b>Hands-On – Iterating with loops in python</b></p>
    `
  },
  {
    head: "Functions",
    p: `
            <p> ●  What are Functions</p>
            <p> ●  Modularity and code reusability</p>
            <p> ●  Creating functions</p>
            <p> ●  Calling functions</p>
            <p> ●  Passing Arguments</p>
            <p> ●  Positional Arguments</p>
            <p> ●  Keyword Arguments</p>
            <p> ●  Variable length arguments (*args)</p>
            <p> ●  Variable Keyword length arguments (**kargs)</p>
            <p> ●  Return keyword in python</p>
            <p> ●  Passing function as argument</p>
            <p> ●  Passing function in return</p>
            <p> ●  Global and local variables</p>
            <p> ●  Recursion</p>
      <br/>
      <p><b>Hands-On – Creating our own functions,passing arguments and performing operations</b></p>
    `
  },
  {
    head: "Anonymous Function",
    p: `
          <p> ●  Lambda</p>
          <p> ●  Lambda with filter</p>
          <p> ●  Lambda with map</p>
          <p> ●  Lambda with reduce</p>
      <br/>
      <p><b>Hands-On – Working with lambda, filter,map and reduce in python</b></p>
    `
  },
  {
    head: "Generators",
    p: `
          <p> ● Creating and using generators</p>
      <br/>
      <p><b>Hands-On – Creating and using generators</b></p>
    `
  },
  {
    head: "Modules",
    p: `
            <p> ●  Creating modules</p>
            <p> ●  Importing functions from different module</p>
            <p> ●  Importing Variables from different modules</p>
            <p> ●  Python builtin modules</p>
      <br/>
      <p><b>Hands-On – Creating and importing Modules</b></p>
    `
  },
  {
    head: "Packages",
    p: `
              <p> ●  Creating packages</p>
              <p> ●  Importing modules from package</p>
              <p> ●  Different ways of importing modules and packages</p>
              <p> ●  Working on Numpy,Pandas and Matplotlib</p>
      <br/>
      <p><b>Hands-On – Creating and importing packages</b></p>
    `
  },
  {
    head: "Exception and Error Handling",
    p: `
            <p> ●  Syntax errors</p>
            <p> ●  Logical errors</p>
            <p> ●  Handling errors using try,except and finally</p>
            <br/>
      <p><b>Hands-On – Handling Errors with try and except</b></p>
    `
  },
  {
    head: "Classes and Objects (OOPS)",
    p: `
            <p> ●  Creating classes & Objects</p>
            <p> ●  Attributes and methods</p>
            <p> ●  Understanding __init__ constructor method</p>
            <p> ●  Class and instance attributes</p>
            <p> ●  Different types of of methods</p>
            <p> ●  Instance methods</p>
            <p> ●  Class methods</p>
            <p> ●  Static methods</p>
            <p> ●  Inheritance</p>
            <p> ●  Creating child and parent class</p>
            <p> ●  Overriding parent methods</p>
            <p> ●  The super() function</p>
            <p> ●  Understanding Types of inheritance</p>
            <p> ●  Single inheritance</p>
            <p> ●  Multiple inheritance</p>
            <p> ●  Multilevel inheritance</p>
            <p> ●  Polymorphism</p>
            <p> ●  Operator overloading</p>
      <br/>
      <p><b>Hands-On – Creating classes, objects. Creating methods and attributes. Working with different methods. Using inheritance and polymorphism.</b></p>
    `
  },
  {
    head: "Date and Time",
    p: `
              <p> ●  date module</p>
              <p> ●  time module</p>
              <p> ●  datetime module</p>
              <p> ●  time delta</p>
              <p> ●  formatting date and time</p>
              <p> ●  strftime()</p>
              <p> ●  striptime()</p>
      <br/>
      <p><b>Hands-On – Iterating with loops in python</b></p>
    `
  },
  {
    head: "Regex",
    p: `
            <p> ●  Understanding the use of regex</p>
            <p> ●  re.search()</p>
            <p> ●  re.compile()</p>
            <p> ●  re.find()</p>
            <p> ●  re.split()</p>
            <p> ●  re.sub()</p>
            <p> ●  Meta characters and their use</p>
      <br/>
      <p><b>Hands-On – using a regular expression to search patterns</b></p>
    `
  },
  {
    head: "Files",
    p: `
              <p> ●  Opening file</p>
              <p> ●  Opening different file types</p>
              <p> ●  Read,write,close files</p>
              <p> ●  Opening files in different modes</p>
      <br/>
      <p><b>Hands-On – Reading, Writing, Appending, opening and closing files.</b></p>
    `
  },
  {
    head: "Web Scraping",
    p: `
            <p> ●  Installing BeautifulSoup</p>
            <p> ●  Understanding web structures</p>
            <p> ●  Chrome devtools</p>
            <p> ●  request</p>
            <p> ●  Scraping data from web using beautifulsoup</p>
            <p> ●  scraping static websites</p>
            <p> ●  Scraping dynamic websites using beautiful soup.</p>
      <br/>
      <p><b>Hands-On – Scraping static and dynamic websites using beautifulsoup and selenium</b></p>
    `
  },
  {
    head: "Database Access",
    p: `
            <p> ●  Accessing Database using sqlite3 and MySql</p>
            <p> ●  Creating tables</p>
            <p> ●  Insert Values</p>
            <p> ●  Commit changes</p>
            <p> ●  Query</p>
            <p> ●  Update and Delete</p>
      <br/>
      <p><b>Hands-on – Connecting and Querying the database</b></p>
    `
  },
  {
    head: "APIs the Unsung Hero of the Connected World",
    p: `
            <p> ●  Introduction to APIs</p>
            <p> ●  Accessing Public APIs</p>
      <br/>
      <p><b>Hands-on – Accessing Public Weather APIs and People in Space API</b></p>
    `
  },
  {
    head: "Python for Web Development – Flask",
    p: `
            <p> ●  Introduction to Python Web Framework Flask</p>
            <p> ●  Installing Flask</p>
            <p> ●  Working on GET, POST, PUT, METHODS using Python FlaskFramework</p>
            <p> ●  Working on Templates, render_template function</p>
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
