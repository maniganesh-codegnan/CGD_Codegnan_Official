import '../Training/training_template.css';
import FormComponent from '../Form/Form';
import { Link } from 'react-router-dom';
import style from '/training/heading-separator.png';
import Companies from '../Companies/Companies';

export default function Campus_temp(props) {
    const { head,map_details,middle2,coursep } = props;
    const { title: headTitle, color_title: headctitle, p: headP, language: headL, rating: headrating, formh } = head;
    const { title: maptitle,color_title:mctitle, mapSrc, email, phoneNumber, address } = map_details;
    const { title: m2title, color_title: m2ctitle, p: m2p, list2: m2L } = middle2;
    const { title: cptitle, color_title: cpctitle, p: cpp } = coursep;
    const scrollToTop = () => {
        window.scrollTo(0,0);
      };
    
    return (
        <div>
            <div className='training_template_headerdetails'>
                <div className='course_head_details'>
                    <h2>
                        {headTitle}
                        {headctitle && <span className='ins'>{headctitle}</span>}
                    </h2>
                    <p dangerouslySetInnerHTML={{ __html: headP.replace(/\n/g, '<br/>') }} />
                    <div className='ldpr'>
                        <i className="far fa-comment  t_t_icon"></i><span>{headL}</span>
                        <span>({headrating} Rating)</span>
                        <i className="fas fa-star star_t_t"></i>
                        <i className="fas fa-star  star_t_t"></i>
                        <i className="fas fa-star  star_t_t"></i>
                        <i className="fas fa-star  star_t_t"></i>
                        <i className="fas fa-star  star_t_t"></i>
                    </div>
                    {/* Replaced <a> tag with <Link> */}
                    <Link to="/your-path" className='explore-button'>Limited Time Offer.Enroll Your Name <span>&rarr;</span></Link>
                </div>
                <div className='training_template_form_1'>
                    <h4>{formh}</h4>
                    <br />
                    <FormComponent />
                </div>
            </div>
            <center>
            <section className="map_section"  style={{ backgroundColor: "#f3fbfb" }}>
                    <div className="map_section_title_div">
                        <h1> <span className='change_color'>{mctitle}</span>{maptitle}</h1>
                        <center><img src={style} alt="" /></center><br />
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
                                    <p><a href="tel:+91 ">{phoneNumber}</a></p>
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
                                    <h3>{index + 1} . {item.heading}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: item.info.replace(/\n/g, '<br/><br/>') }} />
                                   <Link to={item.link} onClick={scrollToTop} className="link-button"><h4><span className='show-right'> &#9758;</span>{item.name} </h4></Link>
                                    <br />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
               <div className='codegnan_success'>
                <h4>CODEGNAN LEARNERS SUCCESS</h4>
                <h1><span className='change_color'>1250+ Companies Have Hired </span>  Codegnan Learners</h1>
                <center><img src={style} alt="" /></center><br />
                <p>To ensure providing the best IT classes and training programs codegnan have mentors and trainers from the alumni of world’s tech companies and universities such as IIT Delhi, Stanford University IIT Bombay, Google, Amazon, Microsoft and many more..</p>
                <Companies/>
               </div>
               <div className='course_pricing_details'>
                    <h1><span className='change_color'>{cpctitle}</span> {cptitle}</h1>
                    <img src={style} alt="" />
                    <p dangerouslySetInnerHTML={{ __html: cpp.replace(/\n/g, '<br><br>') }}></p>
                </div>
            </center>
            
        </div>
    );
}
