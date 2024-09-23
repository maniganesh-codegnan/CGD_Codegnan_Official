import React from "react";
import './internship.css';
import { Link } from "react-router-dom";
import Inter_dropdown from "./Intern_dropdown/Inter_dropdown.jsx";
import FormComponent from '../Form/Form.jsx';
import InternsyllabusComp from './Java_syllabus/Intern_syllabus.jsx';
import { useState } from "react";
import style from '/training/heading-separator.png';

const data2 = [
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
            <ul>
                <li> Arithmetic operators</li>
                <li> Assignment operators</li>
                <li> Comparison operators</li>
                <li> Logical operators</li>
                <li> Identity operators</li>
                <li> Membership Operators</li>
                <li> Bitwise Operators</li>
            </ul>
            <p><b>Hands-On – Working with different data types in a program</b></p>
            </>
        )
    },
    {
        head: "Strings in Python",
        p: (
            <>
            <ul>
                <li> Creating strings</li>
                <li> String formatting</li>
                <li> Indexing</li>
                <li> Slicing</li>
                <li> String methods</li>
            </ul>
            <p><b>Hands-On – Performing string operations</b></p>
            </>
        )
    },
    {
        head: "Lists",
        p: (
            <>
            <ul>
                <li> Creating lists</li>
                <li> Properties of lists</li>
                <li> List indexing</li>
                <li> List slicing</li>
                <li> List of lists</li>
                <li> List Methods</li>
                <li> Adding, Updating & removing elements from lists</li>
            </ul>
            <p><b>Hands-On – Slicing, Indexing, and using methods on lists</b></p>
            </>
        )
    },
    {
        head: "Tuples",
        p: (
            <>
            <ul>
                <li> Syntax to create tuples</li>
                <li> Tuple properties</li>
                <li> Indexing on tuples</li>
                <li> Slicing on tuples</li>
                <li> Tuple methods</li>
            </ul>
            <p><b>Hands-On – Working with tuples</b></p>
            
            </>
        )
    },
    {
        head: "Sets",
        p: (
            <>
            <ul>
                <li> Syntax for creating sets</li>
                <li> Updating sets</li>
                <li> Set operations and methods</li>
                <li> Difference between sets, lists and tuples</li>
            </ul>  
            <p><b>Hands-On – Performing set operations in a program</b></p>          
            </>
        )
    },
    {
        head: "Dictionaries",
        p: (
            <>
            <ul>
                <li> Syntax for creating Dictionaries</li>
                <li> Storing data in dictionaries</li>
                <li> Dictionaries keys and values</li>
                <li> Accessing the elements of dictionaries</li>
                <li> Dictionary methods</li>
            </ul>
            <p><b>Hands-On – Creating dictionaries and using dictionaries methods</b></p>
            </>
        )
    },
    {
        head: "Python conditional Statements",
        p: (
            <>
            <ul>
                <li> Setting logic with conditional statements</li>
                <li> If statements</li>
                <li> If -else statements</li>
                <li> If-elif-else statements</li>
            </ul>
            <p><b>Hands-On – Setting logic in programs using conditional statements</b></p>
            </>
        )
    },
    {
        head: " Loops in Python",
        p: (
            <>
             <ul>
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
            </ul>
            <p><b>Hands-On – Iterating with loops in python</b></p>
            </>
        )
    },
    {
        head:"Getting Started with Hackerrank use cases and working on them",
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
        head:"Lists and Dictionaries comprehension",
        p: (
            <>
            <ul>
                <li> Why List comprehension</li>
                <li> Syntax for list comprehension</li>
                <li> Syntax for dict comprehension</li>
            </ul>
            <p><b>Hands-On – Using List and Dictionary comprehension</b></p>
            </>
        )
    },
    {
        head:"Functions",
        p: (
            <>
            <ul>
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
                <li> Recursion</li>
            </ul>
            <p><b>Hands-On – Creating our own functions,passing arguments and performing operations</b></p>
            </>
        )
    },
    {
        head:"Anonymous Function",
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
        head:"Modules",
        p: (
            <>
            <ul>
                <li> Creating modules</li>
                <li> Importing functions from different module</li>
                <li> Importing Variables from different modules</li>
                <li> Python builtin modules</li>
            </ul>
            <p>Hands-On – Creating and importing Modules</p>
            </>
        )
    },
    {
        head:"Packages",
        p: (
            <>
            <ul>
                <li> Creating packages</li>
                <li> Importing modules from package</li>
                <li> Different ways of importing modules and packages</li>
                <li> Working on Numpy,Pandas and Matplotlib</li>
            </ul>
            <p>Hands-On – Creating and importing packages</p>
            </>
        )
    },
    {
        head:"Exception and Error Handling",
        p: (
            <>
            <ul>
                <li> Syntax errors</li>
                <li> Logical errors</li>
                <li> Handling errors using try,except and finally</li>
            </ul>
            </>
        )
    },
    {
        head:"Classes and Objects (OOPS)",
        p: (
            <>
            <ul>
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
            </ul>
            <p>Hands-On – Creating classes, objects. Creating methods and attributes. Working with different methods. Using inheritance and polymorphism.</p>
            </>
        )
    },
    {
        head:"Date and Time",
        p: (
            <>
            <ul>
                <li> date module</li>
                <li> time module</li>
                <li> datetime module</li>
                <li> time delta</li>
                <li> formatting date and time</li>
                <li> strftime()</li>
                <li> striptime()</li>
            </ul>
            <p>Hands-On – working with date and time</p>
            </>
        )
    },
    {
        head:"Regex",
        p: (
            <>
            <ul>
                <li> Understanding the use of regex</li>
                <li> re.search()</li>
                <li> re.compile()</li>
                <li> re.find()</li>
                <li> re.split()</li>
                <li> re.sub()</li>
                <li> Meta characters and their use</li>
            </ul>
            </>
        )
    },
    {
        head:"Files",
        p: (
            <>
            <ul>
                <li> Opening file</li>
                <li> Opening different file types</li>
                <li> Read,write,close files</li>
                <li> Opening files in different modes</li>
            </ul>
            <p>Hands-On – Reading, Writing, Appending, opening and closing files.</p>
            </>
        )
    },
    {
        head:"Web Scraping",
        p: (
            <>
            <ul>
                <li> Installing BeautifulSoup</li>
                <li> Understanding web structures</li>
                <li> Chrome devtools</li>
                <li> request</li>
                <li> Scraping data from web using beautifulsoup</li>
                <li> scraping static websites</li>
                <li> Scraping dynamic websites using beautiful soup.</li>
            </ul>
            <p>Hands-On – Scraping static and dynamic websites using beautifulsoup and selenium</p>
            </>
        )
    },
    {
        head:"Database Access",
        p: (
            <>
            <ul>
                <li> Accessing Database using sqlite3 and MySql</li>
                <li> Creating tables</li>
                <li> Insert Values</li>
                <li> Commit changes</li>
                <li> Query</li>
                <li> Update and Delete</li>
            </ul>
            <p>Hands-on – Connecting and Querying the database</p>
            </>
        )
    },    
    {
        head:"APIs the Unsung Hero of the Connected World",
        p: (
            <>
            <ul>
                <li> Introduction to APIs</li>
                <li> Accessing Public APIs</li>
            </ul>
            <p>Hands-on – Accessing Public Weather APIs and People in Space API</p>
            </>
        )
    },
    {
        head:"Python for Web Development – Flask",
        p: (
            <>
            <ul>
                <li> Introduction to Python Web Framework Flask</li>
                <li> Installing Flask</li>
                <li> Working on GET, POST, PUT, METHODS using Python FlaskFramework</li>
                <li> Working on Templates, render_template function</li>
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
                <h2 style={{ color :"black" }}>Python Training course <span style={{ color :"red" }} > curriculum in Vijayawada </span></h2><br />
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
            <h2 style={{ color :"black" }}>Python skills <span style={{ color :"red" }} > Covered in Vijayawada </span></h2><br />
            {/* <Inter_dropdown data={data2} /> */}
                <p>Python professionals work with data scientists to get insights into real-time data. Python is well known for being understandable and versatile, which makes it an ideal choice for creating an extensive variety of applications, including Web Development, Data Analysis, and Artificial Intelligence.</p>
                <h3>Training outcomes:</h3>
                <ul>
                    {[
                        "Become a pro in web development using Python.",
                        "Use Python libraries like Scikit-learn, Tensorflow, etc. in your projects.",
                        "Utilizing skills in front-end and back-end development.",
                        "Framework specialist using various Python frameworks.",
                        "Upskill yourself for advanced technologies like Artificial Intelligence, Machine Learning, etc.",
                        "Build a portfolio of projects in various streams.",
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
                        <h2 className="Linkcolor">Become a Python developer</h2><br />
                        {/* <h1>Benchmark <span className="change_color">Codegnan</span> Internship programs</h1><br /> */}
                        {/* <img src={style} alt="" /> */}
                        {/* <h3>Talk to our Expert</h3><br /> */}
                        <p>Talk to our expert Python mentors and learn how our training programs in Vijayawada can help you become a  Python developer and get a high-paying job.</p><br /><br />
                        <FormComponent />
                    </div>
                </div>
            </div><br /><br /><br />


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
