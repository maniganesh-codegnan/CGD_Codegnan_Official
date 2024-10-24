import './about.css';
import ceo from '/members/sairam-sir.webp'
import m1 from '/members/trainer-2.pngw3_.webp'
import m2 from '/members/sai-kiran.webp';
import m3 from '/members/Eswar-g-1.webp';
import m4 from '/members/Kishor-Kumar-java.webp';
import m5 from '/members/shiva-ram-teja.webp';
import m6 from '/members/manohar.webp';
import m7 from '/members/Kowshik.webp';
import m8 from '/members/Jitendra.webp';
import m9 from '/members/sudheer-java-mentor.webp';
import m10 from '/members/sai-vardhan.webp';
import m11 from '/members/subbu-BDE.webp';
import m12 from '/members/Jitendra.webp';

import { Helmet } from 'react-helmet';

export default function About() {
    return (
        <div className="team_about">
        <Helmet>
            <title>Our Team Members at codegnan </title>
            <meta name="description" content="Meet the experts, trainers, founders, and mentors behind codegnan. " />
        </Helmet>
            <center>
                <h1>Our Team Members at codegnan</h1>
            </center>
            <div className='ceo'>
                <div className='ceo_img'>
                    <img src={ceo} alt="Uppugundla Sairam"/>
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
                <div className='ceo_info'>
                    <a href="/sairam-uppugundla">Uppugundla Sairam</a>
                    <br />
                    <br />
                    <p style={{ textAlign:'left' }}>Founder & CEO</p>
                    <br />
                    <span style={{ fontSize: '19px' }}>A Tech-expert with a 10-year industrial experience with 360-degree expertise in Python, Data Analysis, Big Data, Machine Learning and NLP, Data Science Consultant for Andhra Pradesh State Skill Development Corporation(APSSDC) and also BOS Member for P.B.Siddhartha College of Arts and Sciences, Vijayawada and KITS Warangal(M.Tech-Data Science).</span>
                    <br /><br />
                    <p>Highly appreciated for his great interest in helping, he always believes in a practical approach to different real-time industrial problems which helps students reach their true potential and scale towards greater heights. Believing in Problem-based teaching pedagogies, he left his job as a data engineer in Malaysia and came back to the newly born state to fill voids between students and the industry</p>
                    <br /><br />
                </div>
            </div>
            <div className='codegnan_members'>
                <div className='members_div'>
                    <center>
                    <img src={m1} alt="Kallepu Saketh Reddy" />
                    <a href="/saketh-kallepu">Kallepu Saketh Reddy</a>
                    <br /><br />
                    <p>Co-Founder and Chief Management Officer </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={m2} alt="Saikiran Tarigopula" />
                    <a href="/saikiran-tarigopula">Saikiran Tarigopula</a>
                    <br /><br />
                    <p>Co-Founder and Chief Operating Officer </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={m3} alt="Eshwar Gogineni" />
                    <a href="">Eshwar Gogineni</a>
                    <br /><br />
                    <p>Co-Founder & Chief Information Officer </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={m4} alt="Kishor Kumar" />
                    <a href="/kishor-kumar">Kishor Kumar</a>
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
                    <img src={m5} alt="Ravi Siava Ram Teja" />
                    <a href="/ravi-siva-ram-teja">Ravi Siava Ram Teja</a>
                    <br /><br />
                    <p>MERN Stack Developer & Mentor </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    {/*  <img src={m6} alt="Manohar Chary Vadla" />*/}
                    <a href="/manohar-chary-vadla">Manohar Chary Vadla</a>
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
            </div>
            <div className='codegnan_members'>
                <div className='members_div'>
                    <center>
                    <img src={m9} alt="Ravi Siava Ram Teja" />
                    <a href="/ravi-siva-ram-teja">Ravi Siava Ram Teja</a>
                    <br /><br />
                    <p>MERN Stack Developer & Mentor </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={m10} alt="Manohar Chary Vadla" />
                    <a href="/manohar-chary-vadla">Manohar Chary Vadla</a>
                    <br /><br />
                    <p>Data Scientist & Mentor </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={m11} alt="" />
                    <a href="">Kowshik Chilamkurthy</a>
                    <br /><br />
                    <p>Lead AI & Product Design Head IIT-Madras </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
                <div className='members_div'>
                    <center>

                    <a href="">Jitendra Chautharia</a>
                    <br /><br />
                    <p>AI Engineer and Mentor, IIT-Jodhpur </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
            </div>

        </div>
    );
}