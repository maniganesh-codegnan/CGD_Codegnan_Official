import React from 'react';
import './Course_templat.css';
import { Link } from 'react-router-dom';

export default function Course_template(props) {
    const { head, course, section, coursep, inter_links } = props;
    const { title: htitle, date: hdate, img: himg, intro: hintro } = head;
    const { title: course_title, p: cp, linkText, syllabusLink } = course;

    return (
        <div className="Course_Template">
            <div className='Course_Template_container'>
                <center>
                    <h1>{htitle}</h1>
                    <i className="fas fa-user-circle course_icons"></i><Link to="./about" className='link-class'>Sairam Uppugundla</Link> {'\u00A0'} {'\u00A0'}
                    <i className="far fa-calendar-alt course_icons"></i> {hdate}
                    <img className='image' src={himg} alt="" />
                </center>
                <p dangerouslySetInnerHTML={{ __html: hintro.replace(/\n/g, '<br><br>') }}></p>
                <center>
                    <h2>{course_title}</h2>
                </center>
                <p style={{ display: 'inline' }} dangerouslySetInnerHTML={{ __html: cp.replace(/\n/g, '<br><br>') }} ></p>
                <Link className="link-color" to={syllabusLink}>{linkText}</Link>
                {section.map((subsection, index) => (
                    <div key={index}>
                        {subsection.title && (
                            <h3 dangerouslySetInnerHTML={{ __html: `${index + 1}. ${subsection.title}` }}></h3>
                        )}
                        {subsection.intro && (
                            <p dangerouslySetInnerHTML={{ __html: subsection.intro.replace(/\n/g, '<br><br>') }}></p>
                        )}
                        {subsection.content && subsection.content.length > 0 && (
                            <ul>
                                {subsection.content.map((item, idx) => (
                                    <li key={idx} className='list-items'>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}



                <div>
                    {coursep.map((item, index) => (
                        <div key={index}>
                            <h2>{item.title}</h2>
                            {typeof item.intro === 'function' ? (
                                item.intro()
                            ) : typeof item.intro === 'string' ? (
                                <p dangerouslySetInnerHTML={{ __html: item.intro.replace(/\n/g, '<br>') }}></p>
                            ) : (
                                <p>{item.intro}</p>
                            )}
                        </div>
                    ))}
                </div>



                <div className='ceo_details_in_syllabus'>
                    <div className='ceo_photo_details'>
                        <img src="/syllabuspages/Sairam-Uppugundla-codegnan.jpg" alt="" />
                        <p><Link className='link-light-color' to="/">Sairam Uppugundla</Link><br />Sairam Uppugundla is the CEO and founder of Codegnan IT Solutions. With a strong background in Computer Science and over 10 years of experience, he is committed to bridging the gap between academia and industry.<br />Sairam Uppugundla’s expertise spans Python, Software Development, Data Analysis, AWS, Big Data, Machine Learning, Natural Language Processing (NLP) and more.</p>
                    </div>
                    He previously worked as a Board Of Studies Member at PB Siddhartha College of Arts and Science. With expertise in data science, he was involved in designing the Curriculum for the BSc data Science Branch. Also, he worked as a Data Science consultant for Andhra Pradesh State Skill Development Corporation (APSSDC).
                    <br />
                    <div className='ceo_detail_links'>
                        <Link to="https://www.youtube.com/@Codegnan"> <i className="fab fa-youtube socioicons"></i></Link>
                        <Link to="https://www.linkedin.com/in/sairam-uppugundla/"><i className="fab fa-linkedin socioicons"></i></Link>

                    </div>
                </div>

                <div className='inter_links'>
                    
                    {inter_links.map((item, index) => (
                        <Link key={index} to={item.link}>
                            <button onClick={() => window.scrollTo({ top: 0 })} >
                                {index % 2 === 0 ? (
                                    <>&#8592; {item.name}</>
                                ) : (
                                    <><span>{item.name} </span>  <span>&#8594;</span></>
                                )}
                            </button>
                        </Link>
                    ))}
                </div>




            </div>
        </div>
    );
}
