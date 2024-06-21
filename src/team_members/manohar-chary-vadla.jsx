// import './about.css';
import './team.css';
import ceo from '/members/sairam-sir.webp'
import m1 from '/members/trainer-2.pngw3_.webp'
import m2 from '/members/sai-kiran.webp';
import m3 from '/members/Eswar-g-1.webp';
import m4 from '/members/Kishor-Kumar-java.webp';
import m5 from '/members/shiva-ram-teja.webp';
import m6 from '/members/manohar.webp';
import m7 from '/members/Kowshik.webp';
import m8 from '/members/Jitendra.webp';

export default function About() {
    return (
        <div className="team_about"><br /><br />
            <center>
            </center>
            <div className='ceoo'>
                <div className='ceo_info1'>
                <h2><span className="Linkcolor">Manohar Chary Vadla,</span> Data Scientist & Mentor at codegnan </h2>
                {/* <img src={style} alt="" /> */}
                    <br />
                    <p style={{ textAlign:'justify' }}>DATA SCIENTIST</p>
                    <br />
                    <span style={{ fontSize: '19px' , textAlign:'left'}}> Manohar Chary Vadla is a Data Scientist and Mentor with a Bachelor of Commerce in Computer Science background, having 2+ years of hands-on experience in Data Extraction from documents using Python and deep learning techniques.</span>
                    <br /><br />
                    
                    <p> Manohar Chary Vadla, a dedicated Data Science professional, Holds a background in Computer science with 2+ years of experience. He excels in technology.</p><br />

                    <p> His areas of expertise include research and implementation in machine learning and deep learning, such as regression, classification, neural networks, and natural language processing (NLP).</p><br />

                    <p> As part of the AI-for India Event, in collaboration with GUVI Geek Networks and IITM Research Park, he developed a facial recognition application using the Python programming language.</p><br />

                    <p> As a result of his commitment to the technology field, Manohar Chary Vadla was able to finish a project in AI&ML on breast cancer diagnosis that was assigned to him by LetsUpgrade.</p><br />
                    <br />

                    <h2>Education</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i><a href="https://www.acc.edu.in/" >Aviansh Degree College, </a> Bachelor of Commerce in Computers( June2016-June2019)</li>
                    </ul><br />

                    <h2>Work Experience</h2><br />
                    <ul>
                        
                        <li><i className="fa-solid fa-check-double check_double"></i> 
                        Data Scientist at  <a href="codegnana.com"> Codegnan IT Solutions</a>  Hyderabad, Telangana, India (Aug 2023 - Present ) </li>

                        <li><i className="fa-solid fa-check-double check_double"></i> 
                        Associate Data Scientist at <a href="https://aibridgeml.ai/"> AIBridge ML,</a>Hyderabad, Telangana, India (Jul 2021 - Mar 2023 )</li>
                    </ul>

                </div>
                <div className='ceo_img1'>
                    <img src={ceo} />
                    <br />
                    <center>
                    <h3>Uppugundla Sairam</h3>
                    <br />
                    <h4>Founder & CEO</h4>
                        <span>
                            <i className="fa-brands fa-linkedin-in social-icon"></i>
                            <i className="fa-brands fa-twitter social-icon"></i>
                            <i className="fa-brands fa-instagram social-icon"></i>
                            <i className="fa-brands fa-telegram social-icon"></i>
                        </span>
                    </center>
                </div><br /><br />
            </div>
          

            {/* <div className='codegnan_members'>
                <div className='members_div'>
                    <center>
                    <img src={m1} alt="" />
                    <a href="">Kallepu Saketh Reddy</a>
                    <br /><br />
                    <p>Co-Founder and Chief Management Officer </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={m2} alt="" />
                    <a href="">Saikiran Tarigopula</a>
                    <br /><br />
                    <p>Co-Founder and Chief Operating Officer </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={m3} alt="" />
                    <a href="">Eshwar Gogineni</a>
                    <br /><br />
                    <p>Co-Founder & Chief Information Officer </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={m4} alt="" />
                    <a href="">Kishor Kumar</a>
                    <br /><br />
                    <p>Senior Full Stack Corporate Trainer </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
            </div>
            <div className='codegnan_members'>
                <div className='members_div'>
                    <center>
                    <img src={m5} alt="" />
                    <a href="">Ravi Siava Ram Teja</a>
                    <br /><br />
                    <p>MERN Stack Developer & Mentor </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={m6} alt="" />
                    <a href="">Manohar Chary Vadla</a>
                    <br /><br />
                    <p>Data Scientist & Mentor </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={m7} alt="" />
                    <a href="">Kowshik Chilamkurthy</a>
                    <br /><br />
                    <p>Lead AI & Product Design Head IIT-Madras </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={m8} alt="" />
                    <a href="">Jitendra Chautharia</a>
                    <br /><br />
                    <p>AI Engineer and Mentor, IIT-Jodhpur </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
            </div> */}

        </div>
    );
}