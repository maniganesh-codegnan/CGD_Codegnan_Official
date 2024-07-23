import { Link } from "react-router-dom";
import InternForm from "../Form/Intership_form";
import What_you_earn from "../reusable/jab_slider/jap_slider";
import style from '/training/heading-separator.png';
import Fee from "../reusable/fee_structure/fee";
import Intern_dropdown from "../Internship/Intern_dropdown/Inter_dropdown";
import Collaboration from '../Collabarations';
import InternsyllabusComp from "../Internship/Intern_syllabus/Intern_syllabus";
import SalaryComponent from "./salary_component/salary";
import './about.css';
import Companies from '../Companies/Companies';

import { Helmet } from 'react-helmet';



const data2 = [
    {
        head: "What is the salary of a full stack developer ?",
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
    // {
    //     head: "Frontend :",
    //     p: (
    //         <>
    //             <i className="fas fa-clock im" ></i><span className="sp">Duration : 10 Days</span>
    //             <br /><br />
    //             <i className="fas fa-book im"></i>Mode : <span className="sp">10% Theory and 90% Practical </span><br /><br />
    //             <i className="fas fa-clipboard im"></i><span className="sp">Course Includes</span><br />
    //             <img src="/syllabus_jsp_courses/CSS.png" className="jap_img" alt="" />
    //             <img src="/syllabus_jsp_courses/html.png" className="jap_img" alt="" />
    //             <img src="/syllabus_jsp_courses/JS.png" className="jap_img"  alt="" />
    //             <br />
    //             <i className="fas fa-desktop im"></i><span className="sp">Frontend Exam - Global Certification</span><br />
                
    //         </>
    //     )
    // },
    // {
    //     head: "Database :",
    //     p: (
    //         <>
    //             <i className="fas fa-clock im" ></i><span className="sp">Duration : 15 Days</span>
    //             <br /><br />
    //             <i className="fas fa-book im"></i>Mode : <span className="sp"> 10% Theory and 90% Practical </span><br /><br />
    //             <i className="fas fa-clipboard im"></i><span className="sp">Course Includes</span><br />
    //             <img src="/syllabus_jsp_courses/SQL.png" className="jap_img" alt="" />
    //             <br />
    //             <i className="fas fa-desktop im"></i><span className="sp">Database Exam - Global Certification</span><br />
                
    //         </>
    //     )
    // },
    // {
    //     head: "Server :",
    //     p: (
    //         <>
    //             <i className="fas fa-clock im" ></i><span className="sp">Duration : 15 Days</span>
    //             <br /><br />
    //             <i className="fas fa-book im"></i>Mode : <span className="sp">10% Theory and 90% Practical </span><br /><br />
    //             <i className="fas fa-clipboard im"></i><span className="sp">Course Includes</span>
    //             <br />
    //             <img src="/syllabus_jsp_courses/Appache.png" className="jap_img" alt="" />
    //             <img src="/syllabus_jsp_courses/java2eee.png"  className="jap_img" alt="" /><br />
    //             <i className="fas fa-desktop im"></i><span className="sp">Use Cases Implementation </span><br />
                
    //         </>
    //     )
    // },
    // {
    //     head: "Backend :",
    //     p: (
    //         <>
    //             <i className="fas fa-clock im" ></i><span className="sp">Duration : 40 Days</span>
    //             <br /><br />
    //             <i className="fas fa-book im"></i>Mode : <span className="sp">10% Theory and 90% Practical </span><br /><br />
    //             <i className="fas fa-clipboard im"></i><span className="sp">Course Includes</span>
    //             <br />
    //             <img src="/syllabus_jsp_courses/backend/CSS-3.png"  className="jap_img" alt="" />
    //             <img src="/syllabus_jsp_courses/backend/git.png" className="jap_img" alt="" />
    //             <img src="/syllabus_jsp_courses/backend/hibernate.png"  className="jap_img" alt="" />
    //             <img src="/syllabus_jsp_courses/backend/github.png" className="jap_img" alt="" />
    //             <img src="/syllabus_jsp_courses/backend/java2eee-1.png"  className="jap_img" alt="" />
    //             <img src="/syllabus_jsp_courses/backend/jsp.png" className="jap_img" alt="" />
    //             <img src="/syllabus_jsp_courses/backend/spring-boot.png"  className="jap_img" alt="" />
    //             <img src="/syllabus_jsp_courses/backend/spring.png" className="jap_img" alt="" />
    //             <br />
    //             <i className="fas fa-desktop im"></i><span className="sp">Java Global Certification</span><br />
                
    //         </>
    //     )
    // }
]

const salaries = [
    {
        no: 20.5,
        head: "K",
        p: "STUDENTS ENROLLED"
    },
    {
        no: 667,
        head: " ",
        p: "CLASSES COMPLETED "
    },
    {
        no: 100 ,
        head: "%",
        p: " SATISFACTION "
    },
    {
        no: 100 ,
        head: "%",
        p: "HIGHLY SKILLED MENTORS"
    }
]

export default function Jap() {
    return (
        <div>
            <Helmet>
                <title>About codegnan: Why we exist</title>
                <meta name="description" content="At codegnan, we not only focus on delivering quality education and practical learning to our students but also help them get placed in jobs or internships." />
            </Helmet>
            <div className="about_container">
                <span className="home-intern">
                </span>
                <div className="jap-form-self">
                    <div className="jap-home-1">
                        <h4><span className="Linkcolor"> About codegnan: </span> Why we exist</h4>
                        <img src={style} alt="" />
                        <p>Codegnan is a leading IT training institute in india, trusted by 24,000+ students and rated as 4.8/5 by more than 2,100 students. At codegnan, we not only focus on delivering quality education and practical learning to our students but also help them get placed in jobs or internships.</p>

                        <p> In fact, there are 1250+ companies (including Google, Bosch, nvidia, etc.) have hired codegnan learners.</p>
                        <br />
                     
                    </div>
                    <div className="jap_form">
                        <img src="syllabuspages/IMG_3185-1-scaled-768x512.jpgw3.webp" alt="" width="90%" className="aboutimg"/>
                    </div>
                </div>
                <Fee />
            </div>

            <div className="jap_syllabus">
                <center>
                <div className='codegnan_success'>
                    <h4>CODEGNAN LEARNERS SUCCESS</h4>
                    <h1><span className='change_color'>1250+ Companies Have Hired </span>  Codegnan Learners</h1>
                    <center><img src={style} alt="" /></center><br />
                    <p>To ensure providing the best IT classes and training programs codegnan have mentors and trainers from the alumni of world’s tech companies and universities such as IIT Delhi, Stanford University IIT Bombay, Google, Amazon, Microsoft and many more..</p>
                    <Companies/>
                </div>
                </center>
            </div>
            

            <div className="we_are_good">
                <center>
                    <b className="Linkcolor">LEARN THE BEST FROM THE ALUMNI OF PREMIUM COMPANIES</b><br /><br />
                    <h1>Highly Qualified Professionals Mentors</h1>
                    <img src={style} alt="" />
                    
                    <br />
                    <img src="/we_are_recognized_by/iit-bombay-logo.webp" alt="" width="150px"/>&nbsp; &nbsp; 
                    <img src="/we_are_recognized_by/stanford-university-logo.webp" alt="" width="150px"/>&nbsp; &nbsp; 
                    <img src="/we_are_recognized_by/google-logo.webp" alt="" width="150px"/>&nbsp; &nbsp; 
                    <img src="/we_are_recognized_by/amazon-logo.webp" alt="" width="150px"/>&nbsp; &nbsp; 
                    <img src="/we_are_recognized_by/microsoft-logo.webp" alt="" width="150px"/>&nbsp; &nbsp; 
                    <img src="/we_are_recognized_by/ezetap-logo-1.webp" alt="" width="150px"/>&nbsp; &nbsp;
                    <br /><br /><br /><br /> 
                    <div>
                        <Link to="/contact" className="explore-button">
                            Get us Connected  <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </center>
            </div>
            <div className="media" >
                <h1><span className="Linkcolor">Important </span> links</h1>
                <img src={style} alt=""/>
            </div>
            <div className="container">
                <div className="column-1">
                    <img src="/we_are_recognized_by/team.png" alt="" width="30%"/>
                    <h1><a href="/team" className="color">Meet Our Team</a></h1>
                </div>
                <div className="column-1">
                    <img src="/we_are_recognized_by/Gallery.png" alt="" width="30%"/>
                    <h1><a href="/gallery" className="color">Gallery</a></h1>
                </div>
                <div className="column-1">
                    <img src="/we_are_recognized_by/contact.png" alt="" width="30%"/>
                    <h1><a href="/job_accelerator_program" className="color">Job accelerator program</a></h1>
                </div>
                <div className="column-1">
                    <img src="/we_are_recognized_by/contact.png" alt="" width="30%"/>
                    <h1><a href="/contact" className="color">Contact or <br/> Experts</a></h1>
                </div>
               
            </div>
            <div className="about_container">
                <span className="home-intern">
                </span>
                <div className="jap-form-self">
                    <div className="jap-home-1">
                        <h4><span className="Linkcolor"> Meet </span> Founder </h4>
                        <img src={style} alt="" />
                        <p>Sairam Uppugundla is the founder and CEO of codegnan, started in 2018. As the proud CEO of Codegnan, his mission is to build a strong foundation for young minds to unlock their true potential and contribute to the future of tech career.</p>
                        <br /><br/>
                        <div>
                        <Link to="/sairam-uppugundla" className="explore-button">
                        Learn more about the founder <i className="fas fa-arrow-right"></i>
                        </Link>
                        </div>
                        
                    </div>
                    <div className="jap_form">
                        <img src="we_are_recognized_by/sairam-sir.webp" alt="" width="80%" />
                    </div>
                </div>
            </div>
            <center>
            <h1><span className="Linkcolor"> Codegnan  </span> Impact </h1>
            <img src={style} alt="" />
            </center>
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
            <div className="media" >
                <h4>CODEGNAN</h4><br/>
                <h1><span className="Linkcolor"> Media Publications </span> Media, awards, and news</h1>
                <img src={style} alt=""/>
            </div>

            <div className="container">
                <div className="column2">
                    <p className="para">Stay up-to-date with the latest news and trends in the field through our recommended media publications. These reputable sources provide insightful articles, tutorials, and industry insights to keep you informed and inspired. Whether you’re a beginner or an advanced learner, exploring these publications will expand your knowledge and help you stay ahead.</p>
                </div>
                <div className="column2">
                    <img src="/we_are_recognized_by/the-washington-post-image.pngw3_.webp" alt="" width="40%" />&nbsp; &nbsp; &nbsp; &nbsp; 
                    <img src="/we_are_recognized_by/the-new-york-times-image.png" alt="" width="40%"/>&nbsp; &nbsp; &nbsp; 
                    <img src="/we_are_recognized_by/the-better-india-image.png" alt="" />
                </div>
               
            </div>
            
            <div className="container">
                {/* <div className="column1">
                    
                </div> */}
                <div className="column1">
                    <img src="/we_are_recognized_by/paper.jpegw3-1-595xh.webp" className="news" alt="" width="100%"/>
                 
                </div>
                <div className="column1">
                    <img src="/we_are_recognized_by/paper-ad.jpgw3_-595xh.webp" className="news" alt="" width="100%"/>
          
                </div>
                <div className="column1">
                    <img src="/we_are_recognized_by/codegnan-dat-sacience.jpgw3_-595xh.webp" className="news" alt="" width="100%"/>
                </div>
                {/* <div className="column1">
                
                </div> */}
            </div>

            
            <div className='our_collaborations jap_collab'>
                <center>
                    <h1 className='change_color'>Our Collaborations</h1>
                    <br /><br />
                    <Collaboration />
                </center>
            </div>
            {/* <div className="jap_faqs">
                <center>
                    <h1>Questions Generally Asked About This <span className="Linkcolor">Program</span></h1>
                    <img src={style} alt="" />
                </center>
                <Intern_dropdown data={data2} />
            </div> */}

        </div>
    );
}