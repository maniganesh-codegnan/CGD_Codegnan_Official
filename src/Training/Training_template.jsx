import './training_template.css';
import FormComponent from '../Form/Form';
import style from '/training/heading-separator.png';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FAQ from '../faqs/FAQ';
// import JavaComponent from './Internship/java.jsx';
// import JavaComponent from "./Internship/java.jsx";


export default function Training_template(props) {
//     alert('Hello')
//   console.log('Hai')
    const { head, middle, middle2, curriculumData, middle3, middle4, middle5, mentor, coursep, other, map_details, train_opt } = props;
    const { title: headTitle, color_title: headctitle, p: headP, language: headL, duration: headDuation, price: headPrice, rating: headrating, formh, formtext, no_of_hours } = head;
    const { title: mtitle, color_title: mctitle, p: mp, list: mlistings } = middle;
    const { title: m2title, color_title: m2ctitle, p: m2p, list2: m2L } = middle2;
    const { title: m3title, color_title: m3ctitle, p: m3p, list: m3L } = middle3;
    const { title: m4title, color_title: m4ctitle, p: m4p, list: m4L } = middle4;
    const { title: m5title, color_title: m5ctitle, p: m5p } = middle5;
    const { title: mentitle, color_title: menctitle, menlis: mentors } = mentor;
    const { title: cptitle, color_title: cpctitle, p: cpp } = coursep;
    const { locationTitle, locations, courseTitle, courses } = other;
    const { title: maptitle, mapSrc, email, phoneNumber, address } = map_details;
    const { title: train_title, color_title: trainc_title, p: train_p, list: train_listings } = train_opt;

    //---------------- State for countdown timer ------------------
    const [offerEndsIn, setOfferEndsIn] = useState('');

    //---------- Calculate time remaining until offer ends----------
    useEffect(() => {
        const offerEndTime = new Date(); 
        offerEndTime.setHours(offerEndTime.getHours() + 6);
        offerEndTime.setMinutes(offerEndTime.getMinutes() + 59);
        offerEndTime.setSeconds(offerEndTime.getSeconds() + 60);

        const updateCountdown = () => {
            const currentTime = new Date().getTime();
            const distance = offerEndTime - currentTime;

            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setOfferEndsIn(`${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`);

            if (distance < 0) {
                clearInterval(interval);
                setOfferEndsIn("00 : 00 : 00");
            }
        };

        const interval = setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call to update immediately
        return () => clearInterval(interval);
    }, []);

    // Data for services provided
    const servicedata = [
        {
            img: '/training/img-1.svg',
            p: `${no_of_hours}`
        },
        {
            img: '/training/course-icon.svg',
            p: "SELF-PACED VIDEOS"
        },
        {
            img: '/training/img-3.svg',
            p: "EXERCISES & PROJECTS"
        },
        {
            img: '/training/img-4.svg',
            p: "AUTHORIZED CERTIFICATION"
        },
        {
            img: '/training/img-5.svg',
            p: "FLEXIBLE SCHEDULE"
        },
        {
            img: '/training/img-6.svg',
            p: "LIFETIME ACCESS & UPGRADE"
        },
        {
            img: '/training/img-7.svg',
            p: "24/7 LIFETIME SUPPORT"
        }
    ];

    return (
        
        <div className='tth'>
            <center>
                <div className='download_broucher'><button> Need more info? <span>Download the Brochure</span></button></div>
            </center>
            <div className='training_template_headerdetails'>
                <div className='course_head_details'>
                    <h2>{headTitle}</h2>{headctitle && <span className='ins'>{headctitle}</span>}
                    <p dangerouslySetInnerHTML={{ __html: headP.replace(/\n/g, '<br/>') }} />
                    <div className='ldpr'>
                        <i className="far fa-comment  t_t_icon"></i><span>{headL}</span>
                        <i className="fa-solid fa-calendar-days t_t_icon"></i> <span>{headDuation}</span>
                        <i className="fas fa-inr t_t_icon"></i> <span>{headPrice}</span>
                        <span>({headrating} Rating)</span>
                        <i className="fas fa-star star_t_t"></i>
                        <i className="fas fa-star  star_t_t"></i>
                        <i className="fas fa-star  star_t_t"></i>
                        <i className="fas fa-star  star_t_t"></i>
                        <i className="fas fa-star  star_t_t"></i>
                    </div>
                    <a href="" className='explore-button'>Limited Time Offer. Enroll Your Name <span>&rarr;</span></a>
                    <br /><br />
                    <h3><a href="#"><u className='discount'>Click here to get team discount</u> </a></h3>
                    <p style={{fontSize:"22px", fontFamily:"sans-serif"}}>Offer Ends in </p> 
                    {/* Display countdown */}
                    <h2>{offerEndsIn}</h2>
                </div>
                <div className='training_template_form_1'>
                    <h4>{formh}</h4>
                    <p>{formtext}</p>
                    <br />
                    <FormComponent />
                    {/* <JavaComponent /> */}
                </div>
            </div>
            <br /><br /><br /><br /><br />
            <center>
                <div className='service_provided_in_training'>
                    <div className='sevices_provided'>
                        {servicedata.map((service, index) => (
                            <div key={index} className='each_service'>
                                <img src={service.img} alt="service icon" />
                                <br />
                                <p>{service.p}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='course_breif'>
                    <div className='breif_about_course'>
                        <h1><span className='change_color'>{mtitle}</span>{mctitle}</h1><br /><br />
                        {mp && <p dangerouslySetInnerHTML={{ __html: mp.replace(/\n/g, '<br/>') }} />}
                        <br /><br />
                        <ul>
                            {mlistings.map((item, index) => (
                                <li key={index}><i className="fa-solid fa-check-double check_double"></i> {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <div className='career_scope_container'>
                    <div className='career_scope'>
                        <h1><span className='change_color'>{m2ctitle}</span>{m2title}</h1>
                        <center><img src={style} alt="" /></center><br />
                        {m2p && (
                            <p className='carrer_scope_info' dangerouslySetInnerHTML={{ __html: m2p.replace(/\n/g, '<br/><br/>') }} />
                        )}
                        <br /><br />
                        <div className='each_scope_container'>
                            {m2L.map((item, index) => (
                                <div className='each_scope' key={index}>
                                    <h4>{index + 1} . {item.heading}</h4>
                                    <p dangerouslySetInnerHTML={{ __html: item.info }} />
                                    <br />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
               {curriculumData}
                <div className='career_scope_container' style={{ backgroundColor: "#f3fbfb" }}>
                    {(m3ctitle || m3title || m3p || (m3L && m3L.length > 0)) ? (
                        <div className='career_scope'>
                            {m3ctitle && m3title && <h1><span className='change_color'>{m3ctitle}</span>{m3title}</h1>}
                            {style && <center><img src={style} alt="" /></center>}
                            {m3p && <p className='carrer_scope_info' dangerouslySetInnerHTML={{ __html: m3p.replace(/\n/g, '<br/><br/>') }} />}<br /><br />
                            {(m3L && m3L.length > 0) &&
                                <div className='each_scope_container'>
                                    {m3L.map((item, index) => (
                                        <div className='each_scope' key={index}>
                                            <h4>{index + 1}.{item.heading}</h4>
                                            <p>{item.info}</p>
                                            <br />
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    ) : null}
                </div>

                <div className='career_scope_container'>
                    {(m4ctitle || m4title || style || m3p || (m4L && m4L.length > 0)) && (
                        <div className='career_scope'>
                            {m4ctitle && <h1><span className='change_color'>{m4ctitle}</span>{m4title}</h1>}
                            {style && <center><img src={style} alt="" /></center>}
                            {m4p && <p className='special_p' dangerouslySetInnerHTML={{ __html: m4p.replace(/\n/g, '<br/><br/>') }} />}<br /><br />
                            {m4L && m4L.length > 0 && (
                                <div className='each_scope_container'>
                                    {m4L.map((item, index) => (
                                        <div className='each_scope' key={index}>
                                            <h4>{index + 1} . {item.heading}</h4>
                                            <p dangerouslySetInnerHTML={{ __html: item.info.replace(/\n/g, '<br/><br/>') }} />
                                            <br />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className='career_scope_container' style={{ backgroundColor: "#f3fbfb" }}>
                    <div className='career_scope'>
                        <h1><span className='change_color'>{m5ctitle}</span>{m5title}</h1>
                        <center> <img src={style} alt="" /></center><br />
                        <p className='carrer_scope_info'>
                            {m5p.split('\n').map((paragraph, index) => (
                                <React.Fragment key={index}>
                                    {paragraph}
                                    <br /><br />
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                </div>

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
                                        <div><img className='course_mentor_image' src={mentorData.image} alt={mentorData.name} /></div>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <div><img className='course_mentor_image' src={mentorData.image} alt={mentorData.name} /></div>
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

                <div className='course_pricing_details'>
                    <h1><span className='change_color'>{cpctitle}</span> {cptitle}</h1>
                    <img src={style} alt="" />
                    <p dangerouslySetInnerHTML={{ __html: cpp.replace(/\n/g, '<br><br>') }}></p>
                </div>
                <div className='other_locations'>
                    <div className='other_locations_container'>
                        <h4>{locationTitle}</h4>
                        <br />
                        <ul className='olpul'>
                            {locations.map((location, index) => (
                                <li key={index}>
                                    <Link className='olp' to={location.link}>{location.name}</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                </li>
                            ))}
                        </ul>
                        <br />
                        <p>{courseTitle}</p><br />
                        <ul className='olpul'>
                            {courses.map((course, index) => (

                                <li key={index}>
                                    <Link className="olp " to={course.link}>{course.name}</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {trainc_title && train_title && (
                    <div className='career_scope_container'>
                        <div className='career_scope'>
                            <h1><span className='change_color'>{trainc_title}</span>{train_title}</h1>
                            {style && <center><img src={style} alt="" /></center>}
                            {train_p && <p className='carrer_scope_info'>{train_p}</p>}
                            <br /><br />
                            <div className='each_scope_container'>
                                {train_listings && train_listings.map((item, index) => (
                                    <div className='each_scope' key={index}>
                                        {item.title && <h4> {item.title}</h4>}
                                        {item.p && <p dangerouslySetInnerHTML={{ __html: item.p.replace(/\n/g, '<br /><br/>') }} />}
                                        <br />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                <section className="map_section">
                    <div className="map_section_title_div">
                    </div>
                    <div className="map_grid-container1">
                        <div className="">
                            <div className='map_grid-item1'>
                                <iframe src={mapSrc}
                                    width="560"
                                    height="380"
                                    style={{ border: "0" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                        <div className="map_grid-item2">
                            <div className="map_main-section">
                                <h2>Contact Details</h2><br />
                                <div>
                                    <i className="fa-regular fa-envelope en-icon"></i><span> Quick Contact</span>
                                    <p><a href="mailto:info@codegnan.com">{email}</a></p>
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                    <i className="fa-solid fa-phone phone-icon"> </i> <span> Phone Number</span>
                                    <p><a href="tel:+91 98887 38888">{phoneNumber}</a></p>
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div>
                                    <i className="fa-solid fa-map-location add-icon"></i><span>Address</span>
                                    <p>{address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </center>
        </div>
    );
}
