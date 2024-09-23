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
    head: "ReactJs Introduction",
    p: (
      <>
        <p>  1. Overview of ReactJs</p>
        <p>  2. Scope of ReactJs</p>
        <p>  3. Props & Cons of ReactJs</p>
    </>
    )
  },
  {
    head: "ReactJs setup",
    p: (
    <>
        <p>  1. Regarding Nodejs</p>
        <p>  2. Npm and Setting Environment for ReactJS projects.</p>
    </>
    )
  },
  {
    head: "ReactJs Components",
    p: (
      <>
         <p>  1. Types of Components Functional</p>
         <p>  2. Class Components & difference between those two components.</p>
    </>
    )
  },
  {
    head: "ReactJs State",
    p: (
    <>
       <p>  1. What is a state</p>
       <p>  2. How to use state</p>
       <p>  3. What’s the role of the state in ReactJs projects.</p>
    </>
    )
  },
  {
    head: "ReactJs Props",
    p: (
      <>
       <p>  1. What are props</p>
       <p>  2. Props validation</p>
       <p>  3. Passing data to multiple components</p>
    </>
    )
  },
  {
    head: "ReactJs Component Lifecycle",
    p: (
    <>
       <p>  Types of lifecycle methods in ReactJs.</p>
    </>
    )
  },
  {
    head: "ReactJs forms, events",
    p: (
      <>
       <p>  1. Form validation</p>
       <p>  2. Preventing data submission while page refresh also.</p>
    </>
    )
  },
  {
    head: "ReactJs refs, fragments",
    p: (
    <>
       <p>  Using refs concept for pausing and playing videos in ReactJs.</p>
    </>
    )
  },
  {
    head: "ReactJs Lists, Keys",
    p: (
      <>
       <p>  1. How to store data in one order</p>
       <p>  2. How to pass data in a loop using ES6 concepts.</p>
    </>
    )
  },  
  {
    head: "ReactJs Router",
    p: (
    <>
       <p>  Connecting from one page to other pages to react without using a tag.</p>
    </>
    )
  },
  {
    head: "ReactJs Flux",
    p: (
      <>
       <p>  Using Flux and the difference between the flux and normal MVC.</p>
    </>
    )
  },
  {
    head: "ReactJs Redux",
    p: (
    <>
       <p>  How to use Redux in ReactJs.using of react-redux package.</p>
    </>
    )
  },
  {
    head: "ReactJs with DB",
    p: (
      <>
       <p>  1. Connecting the front-end ReactJs application with server like Express.js</p>
       <p>  2. Firebase</p>
       <p>  3. MySql.</p>
    </>
    )
  }


];

const syllabusdata = [
    {
        head: " ",
        p: (
            <>
                <h2 style={{ color :"black" }}>React JS Training course <span style={{ color :"red" }} > Curriculum in Vijayawada </span></h2><br />
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
            <h2 style={{ color :"black" }}>React JS skills <span style={{ color :"red" }} > Our covered in Vijayawada </span></h2><br />

                <p>By enrolling yourself in the React JS training program in Vijayawada, you create your ladder. The members of our team will help you get all of your course-related questions answered. Additionally, you will gain full access to all of the course materials for React, which will be very helpful for going over particular subjects. We do this to get you ready for the most crucial skills that a React JS developer must possess.</p>

                <p> Learning outcome of this React JS course training:. </p>
                <ul>
                    {[
                        "Understand the fundamentals of ReactJS and its role in web development.",
                        "Set up a ReactJS development environment efficiently.",
                        "Create and manage ReactJS components to build dynamic web applications.",
                        "Grasp the concept of state in React and use it to manage component data.",
                        "Effectively pass and handle props between React components.",
                        "Gain insight into the lifecycle of React components for better control and optimization.",
                        "Develop forms and handle events in React applications.",
                        "Utilize React refs and fragments for fine-grained control over the DOM.",
                        "Master the concepts of lists and keys in React to efficiently render dynamic data.",
                        "Implement routing in React applications using React Router.",
                        "Understand the Flux architecture pattern and its role in React application development.",
                        "Learn the principles of Redux and apply it to manage the state in complex React applications.",
                        "Connect ReactJS applications to databases, enabling data storage and retrieval."
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
                        <h2 className="Linkcolor">Become a React JS developer </h2><br />
                        <p>Talk to our expert React JS mentors and learn how our training programs in Vijayawada can help you become a React JS developer and get a high-paying job. </p><br /><br />
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
