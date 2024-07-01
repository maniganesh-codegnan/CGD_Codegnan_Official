import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "Introduction To Manual Testing",
    p: `
        <p> ● Developers VS Test engineers</p>
        <p> ● Defect</p>
        <p> ● Types of Software Testing</p>
    `
  },
  {
    head: "SDLC",
    p: `
        <p> ● Waterfall model</p>
        <p> ● Spiral model Verfication &</p>
        <p> ● Validation model</p>
        <p> ● Prototype model</p>
        <p> ● Derived modelHybrid mode</p>
    `
  },
  {
    head: "White Box Testing & Its Types",
    p: `
        <p> ● Path testing</p>
        <p> ● Conditional testing</p>
        <p> ● Loop testing</p>
        <p> ● Unit testing</p>
        <p> ● Testing the code from memory point of view</p>
        <p> ● Testing the code from performance point of view</p>
        <p> ● White Box Testing VS Black Box Testing</p>
    `
  },
  {
    head: "Black Box Testing & Its Types",
    p: `
        <p> ● Functional testing</p>
        <p> ● Integration Testing</p>
        <p> ● System testing</p>
        <p> ● Acceptance testing</p>
        <p> ● Smoke testing</p>
        <p> ● Globalization testing</p>
        <p> ● Ad-hoc testing</p>
        <p> ● Compatibility testing</p>
        <p> ● Exploratory testing</p>
        <p> ● Regression testing</p>
    `
  },
  {
    head: "Defect",
    p: `
          <p> ● Blocker defect</p>
          <p> ● Critical defect</p>
          <p> ● Major defect</p>
    `
  },
  {
    head: "Defect Life Cycle",
    p: `
          <p> ● Defect Report Template </p>
          <p> ● Defect Tracking Tool: JIRA Tool</p>
    `
  },
  {
    head: "AGILE Methodology",
    p: `
        <p> ● Scrum model</p>
        <p> ● Sprint Planning Meeting</p>
        <p> ● Scrum Master</p>
        <p> ● Scrum meeing</p>
        <p> ● Sprint Retrospective meeting</p>
        <p> ● Release Retrospective meeting</p>
        <p> ● Bug triaging meeting</p>
        <p> ● Product Backlog Grooming</p>
    `
  },
  {
    head: "Test Plan",
    p: `
        <p> ● Test plan template</p>
    `
  },
  {
    head: "Test Case",
    p: `
        <p> ● Test case template</p>
        <p> ● Test Case Review Process</p>
        <p> ● Black Box Test Case Design Technique</p>
    `
  },  
  {
    head: "STLC",
    p: `
        <p> ● Software Testing  Life Cycle</p>
    `
  },
  {
    head: "Selenium",
    p: `
      <h2>Introduction To Selenium</h2><br/>
          <p> ● Selenium WebDriver Architecture</p>
          <p> ● How to install Java on Windows OS</p>
          <p> ● How to install Eclipse IDE on Windows</p>
          <p> ● How to Setup Selenium WebDriver in Eclipse IDE</p>
          <p> ● How to run Tests on Different Browsers</p>
    `
  },
  {
    head: "Maven Introduction",
    p: `
        <p> ● Maven Introduction and Installation</p>
        <p> ● How to Manage Dependencies with Maven</p>
    `
  },
  {
    head: "Web Driver Manager",
    p: `
          <p> ● How to use WebDriver Manager</p>
          <p> ● How to Write First TestCase in Selenium</p>
          <p> ● WebDriver Interface</p>
          <p> ● Basic Methods in WebDriver Interface</p>
    `
  },
  {
    head: "Locators",
    p: `
          <p> ● Locators in Selenium WebDriver</p>
          <p> ● Different Types Of locators</p>
    `
  },
  {
    head: "X Path",
    p: `
        <p> ● Introduction to XPath</p>
        <p> ● Relative Vs Absolute Xpath</p>
        <p> ● XPath Starts-with Function</p>
        <p> ● XPath Contains Function</p>
        <p> ● XPath text() Method</p>
        <p> ● XPath AND Operator vs XPath OR Operator</p>
        <p> ● XPath Axes Methods | Parent, Child, Self</p>
        <p> ● Axes Method descendant, descendant-or-self</p>
        <p> ● XPath Axes following, following-sibling</p>
        <p> ● XPath Axes preceding, preceding-sibling</p>
    `
  },
  {
    head: "CSS Selector",
    p: `
        <p> ● Introduction to CSS and CSS Selector</p>
        <p> ● CSS Selector using Class Attribute</p>
        <p> ● CSS Selector with Multiple Attributes</p>
        <p> ● Direct Child or Sub-child Elements</p>
        <p> ● Next Sibling | Adjacent Sibling Combinator</p>
        <p> ● First-Child, Last-Child, Nth-Child, Nth-Last-Child</p>
    `
  },
  {
    head: "WebElement Methods in Selenium",
    p: `
        <p> ● Handle Dropdown in Selenium</p>
        <p> ● Handle Checkbox in Selenium</p>
        <p> ● Select Radio Button in Selenium</p>
        <p> ● Handle Frames in Selenium</p>
        <p> ● Handle Alert Popup in Selenium</p>
        <p> ● Handle Multiple Windows in Selenium</p>
        <p> ● Perform Mouse Hover in Selenium</p>
        <p> ● Perform Drag and Drop in Selenium</p>
        <p> ● Handle Resize Widget in Selenium</p>
        <p> ● Automate Slider in Selenium</p>
        <p> ● Perform Right Click in Selenium</p>
        <p> ● Perform Keyboard Events in Selenium</p>
        <p> ● Take Screenshot in Selenium</p>
        <p> ● Handle Authentication Popup in Selenium</p>
    `
  },
  {
    head: "Wait in Selenium",
    p: `
        <p> ● Implicit Wait</p>
        <p> ● Explicit Wait</p>
        <p> ● Fluent Wait</p>
    `
  },
  {
    head: "TestNG",
    p: `
        <p> ● Install TestNG in Eclipse IDE</p>
        <p> ● Write Test Cases Using TestNG</p>
        <p> ● TestNG Annotations | Before Method vs BeforeTest</p>
        <p> ● Use Assertion in Selenium TestNG</p>
        <p> ● SoftAssert vs HardAssert</p>
        <p> ● Group Test Cases in TestNG | Grouping</p>
        <p> ● To Create Test Suite in TestNG</p>
        <p> ● To Skip Test Cases in TestNG</p>
        <p> ● TestNG Annotations | BeforeGroups | BeforeClass</p>
        <p> ● TestNG Annotations | BeforeSuite and AfterSuite</p>
        <p> ● DataProvider in TestNG \ Data Driven Testing</p>
        <p> ● Use DataProvider in TestNG Selenium</p>
        <p> ● TestNg Listeners</p>
    `
  },
  {
    head: "Java Introduction",
    p: `
        <p> ● History</p>
        <p> ● Features</p>
    `
  },
  {
    head: "Java Basics & Introduction to Eclipse",
    p: `
        <p> ● Post Install Configuration</p>
        <p> ● Writing a simple progra</p>
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
          <p> ● Arithmetic Operators</p>
          <p> ● Boolean Operators</p>
          <p> ● Logical Operators</p>
          <p> ● Binary Operators</p>
    `
  },
  {
    head: "Control Statements",
    p: `
        <p> ● Branching Statements</p>
        <p> ● Iterative Statements</p>
        <p> ● Break & Continue with enhancements</p>
        <p> ● While</p>
        <p> ● For</p>
        <p> ● Do..While</p>
        <p> ● Goto Statement</p>
        <p> ● Break and Continue Statement</p>
    `
  },
  {
    head: "Java Object Oriented Programming Basics of OOPS",
    p: `
        <p> ● Basic of OOPs</p>
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
        <p> ● Basics of Inheritance</p>
        <p> ● Members accessibility in inheritance</p>
        <p> ● Using super keyword</p>
        <p> ● Multilevel Inheritance</p>
        <p> ● The sequence of execution of constructors in inheritance</p>
        <p> ● Method Overriding</p>
        <p> ● Dynamic Method Dispatch</p>
        <p> ● Abstract classes</p>
        <p> ● Preventing overriding</p>
        <p> ● Preventing inheritance</p>
    `
  },
  {
    head: "Exception Handling",
    p: `
          <p> ● Fundamentals of Exceptions</p>
          <p> ● Types of exceptions</p>
          <p> ● Using try and catch keywords</p>
          <p> ● Multiple catches</p>
          <p> ● Nesting of try blocks</p>
          <p> ● Using throw keyword</p>
          <p> ● Using throws keyword</p>
          <p> ● Finally block</p>
          <p> ● Some predefined exceptions and their usage</p>
          <p> ● User defined exceptions</p>
    `
  },
  {
    head: "Interfaces",
    p: `
          <p> ● Purpose of Interface</p>
          <p> ● Defining an interface</p>
          <p> ● Implementing interfaces</p>
          <p> ● Interface reference variables</p>
          <p> ● Interface with variables</p>
          <p> ● Extending interfaces</p>
    `
  },
  {
    head: "Multi Threaded programming",
    p: `
        <p> ● Basics of threads</p>
        <p> ● Java threaded model</p>
        <p> ● Defining threads using Runnable interface</p>
        <p> ● Defining threads using Thread superclass</p>
        <p> ● Multiple threads</p>
        <p> ● Thread Priority values</p>
        <p> ● Thread Synchronization using synchronized methods</p>
        <p> ● Thread Synchronization using synchronized blocks</p>
    `
  },
  {
    head: "Predefined Libraries",
    p: `
        <p> ● Using String class</p>
        <p> ● Using java.lang package</p>
        <p> ● Working with Data & Time</p>
        <p> ● Utility framework</p>
        <p> ● Collection framework</p>
        <p> ● I/O framework</p>
    `
  },
  {
    head: "MySQL",
    p: `
    <h2> Introduction to Database</h2>
          <br/>
          <p> ● What is a Database</p>
          <p> ● Why use a Database?</p>
          <p> ● What is DBMS?</p>
          <p> ● Types of DBMS</p>
          <p> ● Introduction to SQL</p>
          <p> ● Database vs DBMS vs SQL vs MySQL</p>
          <p> ● MySQL Installation</p>
    `
  },
  {
    head: "Working with Databases",
    p: `
        <p> ● Creating Database</p>
        <p> ● Use and Drop Database</p>
        <p> ● Introduction to Tables</p>
        <p> ● Introduction to data types</p>
        <p> ● Data Types</p>
        <p> ● Numeric Data types</p>
        <p> ● String Data types</p>
        <p> ● Date and time and other data types</p>
    `
  },
  {
    head: "SQL Sublanguages",
    p: `
        <p> ● Introduction to SQL Sublanguages</p>
        <p> ● Creating tables and describing its structure</p>
        <p> ● DML:INSERT part-1</p>
        <p> ● DML:INSERT part-2</p>
        <p> ● Null and Not Null constraints,altering default behaviour</p>
        <p> ● DQL:Select</p>
        <p> ● DCL:Commit, Rollback,Savepoint</p>
        <p> ● DML:Working with Update and Delete commands</p>
    `
  },
  {
    head: "MySQL Operators",
    p: `
        <p> ●  Where Clause</p>
        <p> ●  Introduction to MySQL Operators and their usage</p>
        <p> ●  MySQL Warnings vs Errors</p>
        <p> ●  Comparison Operators part-1</p>
        <p> ●  Logical AND and other comparison operators</p>
    `
  },
  {
    head: "Comparison Operators",
  p: `
          <p> ●  BETWEEN AND and NOT BETWEEN AND,OR operator in Logical Operators</p>
          <p> ●  IN and NOT IN Operator</p>
          <p> ●  IS NULL and IS NOT NULL</p>
    `
  },
  {
    head: "Refining Selections and Working with MySQL Workbench",
    p: `
          <p>●  DISTINCT</p>
          <p>●  ORDER BY</p>
          <p>●  LIMIT</p>
          <p>●  LIKE</p>
          <p>●  MySQL workbench Installation</p>
          <p>●  Working with MySQLworkbench</p>
    `
  },
  {
    head: "Working with Aggregate functions and SQL FILES",
    p: `
          <p>●  Introduction to aggregate functions</p>
          <p>●  Count</p>
          <p>●  Group by</p>
          <p>●  Min and Max</p>
          <p>●  Group by with Min and Max</p>
          <p>●  SUM And AVG</p>
          <p>●  Group by with SUM and AVG</p>
          <p>●  Subqueries</p>
          <p>●  Exporting MySQL Databases</p>
          <p>●  Importing MySQL Databases</p>
    `
  },
  {
    head: "More on Data Types",
    p: `
          <p>●  Char Vs Varchar</p>
          <p>●  Integer data types (SMALLINT,TINYINT,..)</p>
          <p>●  float VS DECIMAL</p>
          <p>●  Working with Date and TIME</p>
          <p>●  CURDATE,CURTIME AND CURRENT_TIMESTAMP</p>
          <p>●  Date functions</p>
          <p>●  Time Functions</p>
          <p>●  Formatting dates</p>
          <p>●  Operations on dates</p>
          <p>●  Datetime vs Timestamp</p>
          <p>●  Automatic Initialization and Updating for TIMESTAMP and DATETIME</p>
    `
  },
  {
    head: "MySQL JOINS",
    p: `
          <p> ● Why JOINS?</p>
          <p> ● Introduction to JOINS</p>
          <p> ● CROSS JOIN</p>
          <p> ● INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN</p>
    `
  },
  {
    head: "Project:Instagram Database Clone",
    p: `
          <p> ● Cloning Instagram’s DB: Users Schema</p>
          <p> ● Cloning Instagram’s DB: Followers Schema</p>
          <p> ● Cloning Instagram’s DB: Photos Schema</p>
          <p> ● Cloning Instagram’s DB: Likes Scema</p>
          <p> ● Cloning Instagram’s DB: Hashtags Schema</p>
          <p> ● Instgram Clone Callenges</p>
    `
  },
  {
    head: "HTML",
    p: `
          <p> ● History and Importance of HTML</p>
          <p> ● Basic HTML syntax</p>
          <p> ● The current state of HTML</p>
          <p> ● HTML resources</p>
          <p> ● Choosing a code editor</p>
          <p> ● Exploring an HTML document</p>
          <p> ● DOCTYPE declarations</p>
          <p> ● Document head</p>
          <p> ● Understanding content models</p>
    `
  },
    {
    head: "Formatting Page content",
    p: `
        <p> ● Formatting Content with HTML</p>
        <p> ● Headings</p>
        <p> ● Paragraphs</p>
        <p> ● Whitespaces</p>
        <p> ● Images </p>
    `
  },  {
    head: "Creating Lists",
    p: `
        <p> ● Unordered lists</p>
        <p> ● Ordered lists</p>
        <p> ● Definition Lists</p>
    `
  },
  {
    head: "Creating Links",
    p: `
          <p> ● Anchor element</p>
          <p> ● Page internal linking</p>
          <p> ● Linking to external pages</p>
          <p> ● Linking to downloadable</p>
          <p> ● Linking to page regions</p>
    `
  },
  {
    head: "Form Controls, Attributes and Elements",
    p: `
          <p> ● Radio buttons and checkboxes</p>
          <p> ● Select dropdowns and file uploads</p>
          <p> ● Hidden inputs and labels</p>
    `
  },
  {
    head: "Projects",
    p: `
          <p> ● Favourite Blog</p>
          <p> ● Resume building with</p>
          <p> ● HTML Registration & Login page</p>
    `
  },
  {
    head: "CSS",
    p: `
    <h2>Getting started</h2><br/>
          <p> ● HTML overview</p>
          <p> ● Default browser styles</p>
          <p> ● Browser support and inconsistencies</p>
          <p> ● Inline, internal and external CSS</p>
          <p> ● Naming conventions</p>
    `
  },
  {
    head: "CSS Core",
    p: `
        <p> ● Syntax, terminology, and naming conventions</p>
        <p> ● Type, class, and id selectors</p>
        <p> ● Combinator selectors</p>
        <p> ● Selectors: Best practices</p>
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
        <p> ● Block Vs. inline display</p>
        <p> ● The Box model </p>
        <p> ● Margin and page layout</p>
        <p> ● Padding </p>
        <p> ● Floats</p>
        <p> ● The box model fix</p>
        <p> ● Box model review</p>
        <p> ● Horizontal navs with the display property</p>
        <p> ● Horizontal navs with the float property</p>
        <p> ● Positioning</p>
        <p> ● Float, display, and position</p>
        <p> ● Layers and the z-index property</p>
    `
  },
    {
    head: " Advanced layout",
    p: `
          <p> ● CSS grid</p>
          <p> ● CSS Flexbox</p>
    `
  },
  {
    head: "Projects",
    p: `
        <p> ● Building Paytm clone Page</p>
        <p> ● Building Portfolio page</p>
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
