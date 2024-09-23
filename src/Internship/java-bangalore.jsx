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
        head: "JAVA Introduction",
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
            </ul>
            <p>Thread Synchronization using synchronized blocks</p>
            </>
        )
    }

];

const syllabusdata = [
    {
        head: " ",
        p: (
            <>
                <h2 style={{ color :"black" }}>Java Training Course <span style={{ color :"red" }} > Curriculum In Bangalore </span></h2><br />
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
            <h2 style={{ color :"black" }}>Skills you will learn <span style={{ color :"red" }} >  after completing the Java training in Bangalore  </span></h2><br />
            {/* <Inter_dropdown data={data2} /> */}
                <p>Wondering if this course can help you master Java basics? Don’t trust our words; simply have a look at the skills covered and be the judge.</p>
            </>
        )
    },
    {
        head: "Learn to do object-oriented designs: ",
        p: (
            <>
                <ul>
                    {[
                        "You will learn the skills required to do object-oriented design principles in Java. This will enhance your proficiency in developing modern desktop and web applications."
                    ].map((item, index) => (
                        <li key={index} style={{ marginLeft: "10px" }}>{item}</li>
                    ))}
                </ul>
            </>
        )
    },
    {
        head: "Control statements: ",
        p: (
            <>
                <ul>
                    {[
                        "Learn how to use control statements that can help you break into advanced concepts like break, continue, and goto for effective control flow in your programs."
                    ].map((item, index) => (
                        <li key={index} style={{ marginLeft: "10px" }}>{item}</li>
                    ))}
                </ul>
            
            </>
        )
    },
    {
        head: "Create object-oriented programs: ",
        p: (
            <>
                <ul>
                    {[
                        "Not only designing but also work on object-oriented programs by learning concepts like class fundamentals, constructors, and method overloading."
                    ].map((item, index) => (
                        <li key={index} style={{ marginLeft: "10px" }}>{item}</li>
                    ))}
                </ul>
            </>
        )
    },
    {
        head: "Exception handling:",
        p: (
            <>
                <ul>
                    {[
                        "Learn the essentials of exception handling, covering various types of exceptions, try-catch blocks, and throwing exceptions. This is a must for you to write reliable and error-free Java code."
                    ].map((item, index) => (
                        <li key={index} style={{ marginLeft: "10px" }}>{item}</li>
                    ))}
                </ul>
            </>
        )
    },
    {
        head: "Multi-thread programming: ",
        p: (
            <>
                <ul>
                    {[
                        "Get insights into basic threads, Java’s threaded model, and techniques for thread synchronization. This will help you develop efficient and responsive applications."
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
                        <h2 className="Linkcolor">Become a Java Developer </h2><br />
                        <p>Talk to our expert Java mentors and learn how our training programs in Bangalore can help you become a Full Stack Java developer and get a high-paying job.</p><br /><br />
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
