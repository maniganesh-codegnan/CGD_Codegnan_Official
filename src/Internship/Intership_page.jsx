import React from "react";
import './internship.css';
import { Link } from "react-router-dom";
import Inter_dropdown from "./Intern_dropdown/Inter_dropdown";
import InternForm from "../Form/Intership_form";



const data = [
    {
        img: "/intern_services/image-61-1.png ",
        head: "Skilled Leader",
        p: "Empower your career under the professional guidance of industry-experienced leaders."
    },
    {
        img: "/intern_services/image-55-1-1.png ",
        head: "Realtime Project ",
        p: "Gain hands-on knowledge and industry insights with real-time enterprise projects "
    },
    {
       
        img: "/intern_services/image-56-1-1.png ",
        head: "Completion Certificate",
        p: "Elevate your career with Codegnan's internship program and earn comprehensive certifications"
    }
]

const data2 = [
    {
      head:"Who can be the audience of Online Java Training in Vijayawada?",
      p:"The following aspirants can opt for a Java course in Vijayawada: Programming Enthusiasts, Project Managers, Web Developers, Full Stack Developers, Software Developers, Software Engineers, Technical Lead Architects, Technology Enthusiasts, Web Enthusiasts, etc."
    },
    {
        head:"What are the prerequisites of Java training in Vijayawada Online?",
        p:"To learn Java you do not really need any prerequisites. This means no programming language knowledge is needed to learn Java. However, for a better understanding, you can opt for C++ programming as a foundational language."
    },
    {
        head:"What is the future of Java Programming?",
        p:"Java programming has a promising future, with its wide adoption, robust ecosystem, and continuous updates. It remains a popular choice for enterprise applications, Android development, and emerging technologies like cloud computing and big data."
    },
    {
        head:"What are the advantages of the Java Course in Vijayawada?",
        p:"Our expert-level trainers with 8 plus years of experience have designed this Java course curriculum to teach students to face challenges in real-time industry-based problems. Upon successful completion of the Java course, you will receive a completion certificate from us. Moreover, with the training of Codegnan, students can easily crack OCJP certifications."
    },
    {
        head:"Why should you learn Java Programming?",
        p:"Learning Java programming is valuable because it is widely used in enterprise applications, Android app development, and big data technologies. It offers strong community support, excellent portability, and a vast array of libraries, making it a versatile and in-demand skill."
    },
    {
        head:"What is meant by 24*7 lifetime support?",
        p:"You will get 24*7 support and lifetime access to the LMS, where course materials like presentations, installation guides, & class recordings are available. There will be an email support throughout to clear all your doubts."
    }
  ];

export default function Intern_Page() {
    return (
        <div className="inter_container">
            <div className="inter_inner_div">
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
            </div>
            <div className="intern-home3">
                <div className="intern-home-form">
                <InternForm/>
                </div>
                

            </div>
            <div className="intern-home2">
                <div className="intern-home-drop">
                    <Inter_dropdown data={data2}/>
                </div>

            </div>

        </div>
    );
}
