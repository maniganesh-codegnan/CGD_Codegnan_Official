import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import InternForm from "../Form/Intership_form";
import What_you_earn from "../reusable/jab_slider/jap_slider";
import style from '/training/heading-separator.png';
import Fee from "../reusable/fee_structure/fee";
import Intern_dropdown from "../Internship/Intern_dropdown/Inter_dropdown";
import Collaboration from '../Collabarations';
import InternsyllabusComp from "../Internship/Intern_syllabus/Intern_syllabus";
import SalaryComponent from "./salary_component/salary";
import './jap.css';

const data2 = [
    {
        head: "What is the salary of a full stack developer?",
        p: "A full stack developer in India could earn anywhere from INR 60,000 to 80,000 per month, depending on the type of company."
    },
    {
        head: "What are the eligibility criteria?",
        p: "The basic and foremost eligibility criteria for the Codegnan Full Stack Development class is for the student to be a learning-oriented individual seeking opportunities to upskill for faster career growth. For other criteria, you can see the section above."
    },
    {
        head: "What is meant by a full-stack development program?",
        p: "Full Stack Course breaks down the fundamentals of each technology that you would require to become a Full Stack Developer. The entire course is broken down into five separate segments: Frontend, Backend, Database, Other Essential Technologies, and Debugging/Version Control."
    },
    {
        head: "Is there any entrance test for this program?",
        p: "Your interest in programming itself is the entrance test."
    },
    {
        head: "Are full-stackers in demand?",
        p: "Full stack is a high-demand job where the candidates could get placed in IT companies. Even startups have a more high demand for full-stack developers."
    },
    {
        head: "I’m new to programming and without an engineering background, how can I cope?",
        p: "To create as many job opportunities for our students, we do intend to help every student who is willing to “make the extra catching up needed” in terms of programming & Development logic."
    }
];

const syllabusdata = [
    {
        head: "Frontend :",
        p: (
            <>
                <i className="fas fa-clock im"></i><span className="sp">Duration : 10 Days</span>
                <br /><br />
                <i className="fas fa-book im"></i>Mode : <span className="sp">10% Theory and 90% Practical</span><br /><br />
                <i className="fas fa-clipboard im"></i><span className="sp">Course Includes</span><br />
                <img src="/syllabus_jsp_courses/CSS.png" className="jap_img" alt="" />
                <img src="/syllabus_jsp_courses/html.png" className="jap_img" alt="" />
                <img src="/syllabus_jsp_courses/JS.png" className="jap_img" alt="" />
                <br />
                <i className="fas fa-desktop im"></i><span className="sp">Frontend Exam - Global Certification</span><br />
            </>
        )
    },
    {
        head: "Database :",
        p: (
            <>
                <i className="fas fa-clock im"></i><span className="sp">Duration : 15 Days</span>
                <br /><br />
                <i className="fas fa-book im"></i>Mode : <span className="sp">10% Theory and 90% Practical</span><br /><br />
                <i className="fas fa-clipboard im"></i><span className="sp">Course Includes</span><br />
                <img src="/syllabus_jsp_courses/SQL.png" className="jap_img" alt="" />
                <br />
                <i className="fas fa-desktop im"></i><span className="sp">Database Exam - Global Certification</span><br />
            </>
        )
    },
    {
        head: "Server :",
        p: (
            <>
                <i className="fas fa-clock im"></i><span className="sp">Duration : 15 Days</span>
                <br /><br />
                <i className="fas fa-book im"></i>Mode : <span className="sp">10% Theory and 90% Practical</span><br /><br />
                <i className="fas fa-clipboard im"></i><span className="sp">Course Includes</span>
                <br />
                <img src="/syllabus_jsp_courses/Appache.png" className="jap_img" alt="" />
                <img src="/syllabus_jsp_courses/java2eee.png" className="jap_img" alt="" /><br />
                <i className="fas fa-desktop im"></i><span className="sp">Use Cases Implementation</span><br />
            </>
        )
    },
    {
        head: "Backend :",
        p: (
            <>
                <i className="fas fa-clock im"></i><span className="sp">Duration : 40 Days</span>
                <br /><br />
                <i className="fas fa-book im"></i>Mode : <span className="sp">10% Theory and 90% Practical</span><br /><br />
                <i className="fas fa-clipboard im"></i><span className="sp">Course Includes</span>
                <br />
                <img src="/syllabus_jsp_courses/backend/CSS-3.png" className="jap_img" alt="" />
                <img src="/syllabus_jsp_courses/backend/git.png" className="jap_img" alt="" />
                <img src="/syllabus_jsp_courses/backend/hibernate.png" className="jap_img" alt="" />
                <img src="/syllabus_jsp_courses/backend/github.png" className="jap_img" alt="" />
                <img src="/syllabus_jsp_courses/backend/java2eee-1.png" className="jap_img" alt="" />
                <img src="/syllabus_jsp_courses/backend/jsp.png" className="jap_img" alt="" />
                <img src="/syllabus_jsp_courses/backend/spring-boot.png" className="jap_img" alt="" />
                <img src="/syllabus_jsp_courses/backend/spring.png" className="jap_img" alt="" />
                <br />
                <i className="fas fa-desktop im"></i><span className="sp">Java Global Certification</span><br />
            </>
        )
    }
];

const salaries = [
    {
        no: 12,
        head: " L P.a",
        p: "An average Full Stack Developer gets INR 12 Lakhs Per Annum as their salary."
    },
    {
        no: 2,
        head: " Rank",
        p: "Fullstack development is listed as Top 2nd in 2020 and continuing in 2021."
    },
    {
        no: 15,
        head: " K Jobs",
        p: "Highly potential Job Portals are adding 5k jobs every month. Naukri, linkedin are top of it."
    },
    {
        no: 4,
        head: " k/hr",
        p: "As a Freelancer you can earn 4,000 per hour. You’ll never imagine what is the full scope of it."
    }
];

export default function Jap() {
    return (
        <div>
            <Helmet>
                <title>100 Days Codegnan’s Job Accelerator Program (JAP)</title>
                <meta name="description" content="Codegnan's Job Accelerator Program (JAP) offers a 100-day intensive training to prepare students for high-demand tech " />
            </Helmet>

            <div className="jap_container">
                <span className="home-intern">
                    <Link className="Linkcolor" to="/">Home</Link>&nbsp; &gt; &nbsp;<strong>Codegnan’s 100 Days Job Accelerator Program (JAP)</strong>
                </span>
                <div className="jap-form-self">
                    <div className="jap-home-1">
                        <h4><span className="Linkcolor">100 Days Codegnan’s</span> Job Accelerator Program (JAP)</h4>
                        <p>
                            We are trusted by 20,000+ students around the globe. Join us and get started in your career from ZERO to HERO <b>100 Days Codegnan’s Job Accelerator Program (JAP)</b>
                        </p>
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
                                Limited Time Offer. Enroll your name <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                        <br /><br /><br /><br />
                        <p>AFTER SUCCESSFUL COMPLETION</p>
                        <p><b>What Will You Achieve Through Successful Completion of the Program?</b></p>
                        <What_you_earn />
                    </div>
                    <div className="jap_form">
                        <iframe
                            width="380"
                            height="200"
                            src="https://www.youtube.com/embed/ZPtH0Qw_AWA" // Changed to embed URL for better compatibility
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <center>
                            <br />
                            <h2>Talk to Our Expert</h2>
                            <img src={style} alt="" />
                            <InternForm />
                        </center>
                    </div>
                </div>
                <Fee />
            </div>
            <div className="jap_syllabus">
                <div className="jap_meet_expert">
                    <h3 className="Linkcolor">Training will be completely Project Oriented Learning</h3><br /><br />
                    <h1>What You Will Be <span className="change_color">Learning </span> In This Program?</h1><br />
                    <img src={style} alt="" /><br /><br />
                    <Link to="your_destination_url" className="explore-button">
                        Request a Call Back <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
                <div className="jap_syllabus_full">
                    <InternsyllabusComp data={syllabusdata} />
                </div>
            </div>
            <div className="jap_salary_container">
                {salaries.map((salaryItem, index) => (
                    <div key={index} className="each_component_in_jap">
                        <h1>
                            <SalaryComponent salary={salaryItem.no} /> <p>&nbsp;</p> <span>{salaryItem.head}</span>
                        </h1>
                        <center>
                            <p>{salaryItem.p}</p>
                        </center>
                    </div>
                ))}
            </div>
            <div className="we_are_good">
                <center>
                    <b className="Linkcolor">WE ARE GOOD</b><br /><br />
                    <h1>We are recognized by</h1>
                    <img src={style} alt="" />
                    <br /><br />
                    <p>
                        Notable councils & associations, as an empowering community of individuals who strive to create fulfilling careers. We thrive in an environment that inspires growth and cultivates success, deriving immense satisfaction from your achievements. Together, we impact the communities we serve, igniting positive change wherever we go.
                    </p>
                    <br />
                    <img src="/we_are_recognized_by/ministry-commerce-industry-logo.png" alt="" />
                    <img src="/we_are_recognized_by/nasscom-logo.png" alt="" />
                    <img src="/we_are_recognized_by/nsdc-logo.png" alt="" />
                </center>
            </div>
            <div className='our_collaborations jap_collab'>
                <center>
                    <h1 className='change_color'>Our Collaborations</h1>
                    <br /><br />
                    <Collaboration />
                </center>
            </div>
            <div className="jap_faqs">
                <center>
                    <h1>Questions Generally Asked About This <span className="Linkcolor">Program</span></h1>
                    <img src={style} alt="" />
                </center>
                <Intern_dropdown data={data2} />
            </div>
        </div>
    );
}
