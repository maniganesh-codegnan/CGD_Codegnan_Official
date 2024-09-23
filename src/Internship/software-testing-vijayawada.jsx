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
        head: "Introduction To Manual Testing",
        p: (
          <>
          <ul>
            <li> Developers VS Test engineers</li>
            <li> Defect</li>
            <li> Types of Software Testing</li>
        </ul>
        </>
        )
      },
      {
        head: "SDLC",
        p: (
        <>
        <ul>
            <li> Waterfall model</li>
            <li> Spiral model Verfication &</li>
            <li> Validation model</li>
            <li> Prototype model</li>
            <li> Derived modelHybrid mode</li>
        </ul>
        </>
        )
      },
      {
        head: "White Box Testing & Its Types",
        p: (
          <>
          <ul>
            <li> Path testing</li>
            <li> Conditional testing</li>
            <li> Loop testing</li>
            <li> Unit testing</li>
            <li> Testing the code from memory point of view</li>
            <li> Testing the code from performance point of view</li>
            <li> White Box Testing VS Black Box Testing</li>
        </ul>
        </>
        )
      },
      {
        head: "Black Box Testing & Its Types",
        p: (
        <>
        <ul>
            <li> Functional testing</li>
            <li> Integration Testing</li>
            <li> System testing</li>
            <li> Acceptance testing</li>
            <li> Smoke testing</li>
            <li> Globalization testing</li>
            <li> Ad-hoc testing</li>
            <li> Compatibility testing</li>
            <li> Exploratory testing</li>
            <li> Regression testing</li>
        </ul>
        </>
        )
      },
      {
        head: "Defect",
        p: (
          <>
          <ul>
              <li> Blocker defect</li>
              <li> Critical defect</li>
              <li> Major defect</li>
        </ul>
        </>
        )
      },
      {
        head: "Defect Life Cycle",
        p: (
        <>
        <ul>
              <li> Defect Report Template </li>
              <li> Defect Tracking Tool: JIRA Tool</li>
        </ul>
        </>
        )
      },
      {
        head: "AGILE Methodology",
        p: (
          <>
          <ul>
            <li> Scrum model</li>
            <li> Sprint Planning Meeting</li>
            <li> Scrum Master</li>
            <li> Scrum meeing</li>
            <li> Sprint Retrospective meeting</li>
            <li> Release Retrospective meeting</li>
            <li> Bug triaging meeting</li>
            <li> Product Backlog Grooming</li>
        </ul>
        </>
        )
      },
      {
        head: "Test Plan",
        p: (
        <>
        <ul>
            <li> Test plan template</li>
        </ul>
        </>
        )
      },
      {
        head: "Test Case",
        p: (
          <>
          <ul>
            <li> Test case template</li>
            <li> Test Case Review Process</li>
            <li> Black Box Test Case Design Technique</li>
        </ul>
        </>
        )
      },  
      {
        head: "STLC",
        p: (
        <>
        <ul>
            <li> Software Testing  Life Cycle</li>
        </ul>
        </>
        )
      },
      {
        head: "Selenium",
        p: (
          <>
          <ul>
          <h2>Introduction To Selenium</h2><br/>
              <li> Selenium WebDriver Architecture</li>
              <li> How to install Java on Windows OS</li>
              <li> How to install Eclipse IDE on Windows</li>
              <li> How to Setup Selenium WebDriver in Eclipse IDE</li>
              <li> How to run Tests on Different Browsers</li>
        </ul>
        </>
        )
      },
      {
        head: "Maven Introduction",
        p: (
        <>
        <ul>
            <li> Maven Introduction and Installation</li>
            <li> How to Manage Dependencies with Maven</li>
        </ul>
        </>
        )
      },
      {
        head: "Web Driver Manager",
        p: (
          <>
          <ul>
              <li> How to use WebDriver Manager</li>
              <li> How to Write First TestCase in Selenium</li>
              <li> WebDriver Interface</li>
              <li> Basic Methods in WebDriver Interface</li>
        </ul>
        </>
        )
      },
      {
        head: "Locators",
        p: (
        <>
        <ul>
              <li> Locators in Selenium WebDriver</li>
              <li> Different Types Of locators</li>
        </ul>
        </>
        )
      },
      {
        head: "X Path",
        p: (
          <>
          <ul>
            <li> Introduction to XPath</li>
            <li> Relative Vs Absolute Xpath</li>
            <li> XPath Starts-with Function</li>
            <li> XPath Contains Function</li>
            <li> XPath text() Method</li>
            <li> XPath AND Operator vs XPath OR Operator</li>
            <li> XPath Axes Methods | Parent, Child, Self</li>
            <li> Axes Method descendant, descendant-or-self</li>
            <li> XPath Axes following, following-sibling</li>
            <li> XPath Axes preceding, preceding-sibling</li>
        </ul>
        </>
        )
      },
      {
        head: "CSS Selector",
        p: (
        <>
        <ul>
            <li> Introduction to CSS and CSS Selector</li>
            <li> CSS Selector using Class Attribute</li>
            <li> CSS Selector with Multiple Attributes</li>
            <li> Direct Child or Sub-child Elements</li>
            <li> Next Sibling | Adjacent Sibling Combinator</li>
            <li> First-Child, Last-Child, Nth-Child, Nth-Last-Child</li>
        </ul>
        </>
        )
      },
      {
        head: "WebElement Methods in Selenium",
        p: (
          <>
          <ul>
            <li> Handle Dropdown in Selenium</li>
            <li> Handle Checkbox in Selenium</li>
            <li> Select Radio Button in Selenium</li>
            <li> Handle Frames in Selenium</li>
            <li> Handle Alert Popup in Selenium</li>
            <li> Handle Multiple Windows in Selenium</li>
            <li> Perform Mouse Hover in Selenium</li>
            <li> Perform Drag and Drop in Selenium</li>
            <li> Handle Resize Widget in Selenium</li>
            <li> Automate Slider in Selenium</li>
            <li> Perform Right Click in Selenium</li>
            <li> Perform Keyboard Events in Selenium</li>
            <li> Take Screenshot in Selenium</li>
            <li> Handle Authentication Popup in Selenium</li>
        </ul>
        </>
        )
      },
      {
        head: "Wait in Selenium",
        p: (
        <>
        <ul>
            <li> Implicit Wait</li>
            <li> Explicit Wait</li>
            <li> Fluent Wait</li>
        </ul>
        </>
        )
      },
      {
        head: "TestNG",
        p: (
            <>
            <ul>
            <li> Install TestNG in Eclipse IDE</li>
            <li> Write Test Cases Using TestNG</li>
            <li> TestNG Annotations | Before Method vs BeforeTest</li>
            <li> Use Assertion in Selenium TestNG</li>
            <li> SoftAssert vs HardAssert</li>
            <li> Group Test Cases in TestNG | Grouping</li>
            <li> To Create Test Suite in TestNG</li>
            <li> To Skip Test Cases in TestNG</li>
            <li> TestNG Annotations | BeforeGroups | BeforeClass</li>
            <li> TestNG Annotations | BeforeSuite and AfterSuite</li>
            <li> DataProvider in TestNG \ Data Driven Testing</li>
            <li> Use DataProvider in TestNG Selenium</li>
            <li> TestNg Listeners</li>
        </ul>
        </>
        )
      },
      {
        head: "Java Introduction",
        p: (
        <>
        <ul>
            <li> History</li>
            <li> Features</li>
        </ul>
        </>
        )
      },
      {
        head: "Java Basics & Introduction to Eclipse",
        p: (
            <>
            <ul>
            <li> Post Install Configuration</li>
            <li> Writing a simple progra</li>
            <li> compiling and executing</li>
            <li> Data types</li>
            <li> Variables and Arrays</li>
            <li> Using Eclipse</li>
            <li> Create packaged classes</li>
            <li> Eclipse shortcuts</li>
        </ul>
        </>
        )
      },
      {
        head: "Operators & Expressions",
        p: (
        <>
        <ul>
              <li> Arithmetic Operators</li>
              <li> Boolean Operators</li>
              <li> Logical Operators</li>
              <li> Binary Operators</li>
        </ul>
        </>
        )
      },
      {
        head: "Control Statements",
        p: (
            <>
            <ul>
            <li> Branching Statements</li>
            <li> Iterative Statements</li>
            <li> Break & Continue with enhancements</li>
            <li> While</li>
            <li> For</li>
            <li> Do..While</li>
            <li> Goto Statement</li>
            <li> Break and Continue Statement</li>
        </ul>
        </>
        )
      },
      {
        head: "Java Object Oriented Programming Basics of OOPS",
        p: (
        <>
        <ul>
            <li> Basic of OOPs</li>
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
        </>
        )
      },
      {
        head: "Inheritance",
        p: (
            <>
            <ul>
            <li> Basics of Inheritance</li>
            <li> Members accessibility in inheritance</li>
            <li> Using super keyword</li>
            <li> Multilevel Inheritance</li>
            <li> The sequence of execution of constructors in inheritance</li>
            <li> Method Overriding</li>
            <li> Dynamic Method Dispatch</li>
            <li> Abstract classes</li>
            <li> Preventing overriding</li>
            <li> Preventing inheritance</li>
        </ul>
        </>
        )
      },
      {
        head: "Exception Handling",
        p: (
        <>
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
        </>
        )
      },
      {
        head: "Interfaces",
        p: (
            <>
            <ul>
              <li> Purpose of Interface</li>
              <li> Defining an interface</li>
              <li> Implementing interfaces</li>
              <li> Interface reference variables</li>
              <li> Interface with variables</li>
              <li> Extending interfaces</li>
        </ul>
        </>
        )
      },
      {
        head: "Multi Threaded programming",
        p: (
        <>
        <ul>
            <li> Basics of threads</li>
            <li> Java threaded model</li>
            <li> Defining threads using Runnable interface</li>
            <li> Defining threads using Thread superclass</li>
            <li> Multiple threads</li>
            <li> Thread Priority values</li>
            <li> Thread Synchronization using synchronized methods</li>
            <li> Thread Synchronization using synchronized blocks</li>
        </ul>
        </>
        )
      },
      {
        head: "Predefined Libraries",
        p: (
            <>
            <ul>
            <li> Using String class</li>
            <li> Using java.lang package</li>
            <li> Working with Data & Time</li>
            <li> Utility framework</li>
            <li> Collection framework</li>
            <li> I/O framework</li>
        </ul>
        </>
        )
      },
      {
        head: "MySQL",
        p: (
        <>
        <ul>
        <h2> Introduction to Database</h2>
              <br/>
              <li> What is a Database</li>
              <li> Why use a Database?</li>
              <li> What is DBMS?</li>
              <li> Types of DBMS</li>
              <li> Introduction to SQL</li>
              <li> Database vs DBMS vs SQL vs MySQL</li>
              <li> MySQL Installation</li>
        </ul>
        </>
        )
      },
      {
        head: "Working with Databases",
        p: (
            <>
            <ul>
            <li> Creating Database</li>
            <li> Use and Drop Database</li>
            <li> Introduction to Tables</li>
            <li> Introduction to data types</li>
            <li> Data Types</li>
            <li> Numeric Data types</li>
            <li> String Data types</li>
            <li> Date and time and other data types</li>
        </ul>
        </>
        )
      },
      {
        head: "SQL Sublanguages",
        p: (
        <>
        <ul>
            <li> Introduction to SQL Sublanguages</li>
            <li> Creating tables and describing its structure</li>
            <li> DML:INSERT part-1</li>
            <li> DML:INSERT part-2</li>
            <li> Null and Not Null constraints,altering default behaviour</li>
            <li> DQL:Select</li>
            <li> DCL:Commit, Rollback,Savepoint</li>
            <li> DML:Working with Update and Delete commands</li>
        </ul>
        </>
        )
      },
      {
        head: "MySQL Operators",
        p: (
            <>
            <ul>
            <li>  Where Clause</li>
            <li>  Introduction to MySQL Operators and their usage</li>
            <li>  MySQL Warnings vs Errors</li>
            <li>  Comparison Operators part-1</li>
            <li>  Logical AND and other comparison operators</li>
        </ul>
        </>
        )
      },
      {
        head: "Comparison Operators",
      p: (
      <>
      <ul>
              <li>  BETWEEN AND and NOT BETWEEN AND,OR operator in Logical Operators</li>
              <li>  IN and NOT IN Operator</li>
              <li>  IS NULL and IS NOT NULL</li>
        </ul>
        </>
      )
      },
      {
        head: "Refining Selections and Working with MySQL Workbench",
        p: (
            <>
            <ul>
              <li> DISTINCT</li>
              <li> ORDER BY</li>
              <li> LIMIT</li>
              <li> LIKE</li>
              <li> MySQL workbench Installation</li>
              <li> Working with MySQLworkbench</li>
        </ul>
        </>
        )
      },
      {
        head: "Working with Aggregate functions and SQL FILES",
        p: (
        <>
        <ul>
              <li> Introduction to aggregate functions</li>
              <li> Count</li>
              <li> Group by</li>
              <li> Min and Max</li>
              <li> Group by with Min and Max</li>
              <li> SUM And AVG</li>
              <li> Group by with SUM and AVG</li>
              <li> Subqueries</li>
              <li> Exporting MySQL Databases</li>
              <li> Importing MySQL Databases</li>
        </ul>
        </>
        )
      },
      {
        head: "More on Data Types",
        p: (
            <>
            <ul>
              <li> Char Vs Varchar</li>
              <li> Integer data types (SMALLINT,TINYINT,..)</li>
              <li> float VS DECIMAL</li>
              <li> Working with Date and TIME</li>
              <li> CURDATE,CURTIME AND CURRENT_TIMESTAMP</li>
              <li> Date functions</li>
              <li> Time Functions</li>
              <li> Formatting dates</li>
              <li> Operations on dates</li>
              <li> Datetime vs Timestamp</li>
              <li> Automatic Initialization and Updating for TIMESTAMP and DATETIME</li>
        </ul>
        </>
        )
      },
      {
        head: "MySQL JOINS",
        p: (
        <>
        <ul>
              <li> Why JOINS?</li>
              <li> Introduction to JOINS</li>
              <li> CROSS JOIN</li>
              <li> INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN</li>
        </ul>
        </>
        )
      },
      {
        head: "Project:Instagram Database Clone",
        p: (
            <>
            <ul>
              <li> Cloning Instagram’s DB: Users Schema</li>
              <li> Cloning Instagram’s DB: Followers Schema</li>
              <li> Cloning Instagram’s DB: Photos Schema</li>
              <li> Cloning Instagram’s DB: Likes Scema</li>
              <li> Cloning Instagram’s DB: Hashtags Schema</li>
              <li> Instgram Clone Callenges</li>
        </ul>
        </>
        )
      },
      {
        head: "HTML",
        p: (
        <>
        <ul>
              <li> History and Importance of HTML</li>
              <li> Basic HTML syntax</li>
              <li> The current state of HTML</li>
              <li> HTML resources</li>
              <li> Choosing a code editor</li>
              <li> Exploring an HTML document</li>
              <li> DOCTYPE declarations</li>
              <li> Document head</li>
              <li> Understanding content models</li>
        </ul>
        </>
        )
      },
        {
        head: "Formatting Page content",
        p: (
            <>
            <ul>
            <li> Formatting Content with HTML</li>
            <li> Headings</li>
            <li> Paragraphs</li>
            <li> Whitespaces</li>
            <li> Images </li>
        </ul>
        </>
        )
      },  {
        head: "Creating Lists",
        p: (
        <>
        <ul>
            <li> Unordered lists</li>
            <li> Ordered lists</li>
            <li> Definition Lists</li>
        </ul>
        </>
        )
      },
      {
        head: "Creating Links",
        p: (
            <>
            <ul>
              <li> Anchor element</li>
              <li> Page internal linking</li>
              <li> Linking to external pages</li>
              <li> Linking to downloadable</li>
              <li> Linking to page regions</li>
        </ul>
        </>
        )
      },
      {
        head: "Form Controls, Attributes and Elements",
        p: (
        <>
        <ul>
              <li> Radio buttons and checkboxes</li>
              <li> Select dropdowns and file uploads</li>
              <li> Hidden inputs and labels</li>
        </ul>
        </>
        )
      },
      {
        head: "Projects",
        p: (
            <>
            <ul>
              <li> Favourite Blog</li>
              <li> Resume building with</li>
              <li> HTML Registration & Login page</li>
        </ul>
        </>
        )
      },
      {
        head: "CSS",
        p: (
        <>
        <ul>
        <h2>Getting started</h2><br/>
              <li> HTML overview</li>
              <li> Default browser styles</li>
              <li> Browser support and inconsistencies</li>
              <li> Inline, internal and external CSS</li>
              <li> Naming conventions</li>
        </ul>
        </>
        )
      },
      {
        head: "CSS Core",
        p: (
            <>
            <ul>
            <li> Syntax, terminology, and naming conventions</li>
            <li> Type, class, and id selectors</li>
            <li> Combinator selectors</li>
            <li> Selectors: Best practices</li>
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
            <li> Block Vs. inline display</li>
            <li> The Box model </li>
            <li> Margin and page layout</li>
            <li> Padding </li>
            <li> Floats</li>
            <li> The box model fix</li>
            <li> Box model review</li>
            <li> Horizontal navs with the display property</li>
            <li> Horizontal navs with the float property</li>
            <li> Positioning</li>
            <li> Float, display, and position</li>
            <li> Layers and the z-index property</li>
        </ul>
        </>
        )
      },
        {
        head: " Advanced layout",
        p: (
            <>
            <ul>
              <li> CSS grid</li>
              <li> CSS Flexbox</li>
        </ul>
        </>
        )
      },
      {
        head: "Projects",
        p: (
            <>
            <ul>
                <li> Building Paytm clone Page</li>
                <li> Building Portfolio page</li>
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
                <h2 style={{ color :"black" }}>Software testing course <span style={{ color :"red" }} > Course Curriculum in Vijayawada </span></h2><br />
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
            <h2 style={{ color :"black" }}>Projects covered in <span style={{ color :"red" }} > our Software testing training institute in Vijayawada </span></h2><br />
                <ul>
                    {[
                        "Learn to do object-oriented designs: Instagram Database Clone: This project aims at cloning the Instagram Database especially the User schema, Followers schema, and Photos, Likes, and Hashtags schema. Learners will get a clear understanding of MySQL through this project. They will go through multiple challenges while implementing the project and learn from their mistakes.",
                        "Building favourite blog : Learners can build a simple blog using HTML elements that will allow users to add, modify, and delete content. By the end of the project most of the core HTML concepts will be cleared including writing and executing HTML syntax, creating lists and links, and different HTML attributes.",
                        "Resume building with HTML This project will help learners build digital resumes using HTML elements instead of using traditional resumes for job interviews. It shows how you can use different HTML tags and build the structure of your resume to showcase skills, experience and education.",
                        "Building registration and login page: Learners will know how to build the registration and login page of a website using HTML elements. They will learn the use of HTML tags, knowledge of creating lists and links, and work with HTML forms and different form control elements.",
                        "Building Paytm clone page: This project aims at cloning a Paytm page with HTML and CSS elements and making it look visually appealing. Learners will use CSS elements like selectors, CSS properties and values, layouts, and more for the project.",
                        "Building portfolio page: It is an advanced level for the resume-building project. There, students learn about building a resume with HTML, and here you will learn how to use CSS elements for styling your resume. Learners will get knowledge of creating advanced CSS layout that includes grids and flexbox, along with basic CSS layout elements, use of web fonts, Google fonts, adjusting color, line height and text properties, and more.",
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
                        <h2 className="Linkcolor">Become a Software Testing Hyderabad </h2><br />
                        <p>Talk to our expert  Software testing mentors and learn how our training programs in Hyderabad can help you become a  Software testing  developer and get a high-paying job. </p><br /><br />
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
