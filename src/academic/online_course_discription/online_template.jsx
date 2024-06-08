import React, { useState } from "react";
import './online_template.css';
import { Link } from "react-router-dom";
import style from '/training/heading-separator.png';
import Intern_dropdown from "../../Internship/Intern_dropdown/Inter_dropdown";


export default function OnlineCourse(props) {
    const { head,main,mentor ,dropdown} = props;
    const { title, p: para ,start_course,free_trial,image} = head;
    const {p:mainp}=main;
    const { title: mentitle, color_title: menctitle, menlis: mentors ,mentorlinkedinid} = mentor;
    return (
        <div className="online_container">
            <div className="online_course_info_container">
                <div className="online_course_info">
                    <h1>{title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: para.replace(/\n/g, '<br><br>') }}></p><br /><br />
                    <Link to={start_course} className='link_to_academic1' target="_blank">Start Course &#8594;</Link>
                    <Link to={free_trial} className='link_to_academic2' target="_blank">Free Trails &#8594;</Link>
                </div>
                <center>
                    {
                        image &&(
                            <div className="online_course_image">
                            <img src={image} alt="" />
                        </div>
                        )
                    }
               
                </center>
               
            </div>
            <div className="span_content">
                {mainp}
                </div>
                <center>
                <div className='mentors_of_the_course'>
                    <div className='mentors_container'>
                        <center>
                            <h1><span className='change_color'>{mentor.color_title}</span>{mentor.title}</h1>
                            <img src={style} alt="" />
                        </center>
                        <br />
                        {mentor.mentors.map((mentorData, index) => (
                            <div className='mentor' key={index}>
                                {index % 2 === 0 ? (
                                    <React.Fragment>
                                        <div className='metor_description'>
                                            <h2>{mentorData.name}</h2>
                                            <p dangerouslySetInnerHTML={{ __html: mentorData.description.replace(/\n/g, '<br /><br/>') }}></p>
                                        </div>
                                        <div><img className='course_mentor_image' src={mentorData.image} alt={mentorData.name} /><br />
                                        <center>
                                        <Link  to={mentorData.mentorlinkedinid} target="_blank" > <i className="fa-brands fa-linkedin-in social-icon"></i></Link>
                                        </center>
                                       
                                        </div>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <div><img className='course_mentor_image' src={mentorData.image} alt={mentorData.name} /><br />
                                        <center>
                                        <Link  to={mentorData.mentorlinkedinid} target="_blank"> <i className="fa-brands fa-linkedin-in social-icon"></i></Link>
                                        </center>
                                       
                                        </div>
                                        <div className='metor_description'>
                                            <h2>{mentorData.name}</h2>
                                            <p dangerouslySetInnerHTML={{ __html: mentorData.description.replace(/\n/g, '<br /><br/>') }}></p>
                                        </div>
                                    </React.Fragment>
                                )}
                               
                            </div>
                        ))}
                    </div>
                </div>
                </center>
                <div className="online_dropdown">
                <Intern_dropdown  data={dropdown}/>
                </div>
                
                
        </div>
    );
}
