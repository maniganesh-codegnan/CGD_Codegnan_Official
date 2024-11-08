import './about.css';
import ceo from '/members/sairam-sir.webp'
import saketh from '/members/trainer-2.pngw3_.webp'
import saikiran from '/members/sai-kiran.webp';
// import m3 from '/members/Eswar-g-1.webp';
import kishor from '/members/Kishor-Kumar-java.webp';
import sivaRam from '/members/shiva-ram-teja.webp';
// import m6 from '/members/manohar.webp';
import kowshik from '/members/Kowshik.webp';
import jitendra from '/members/Jitendra.webp';
import sudheer from '/members/sudheer-java-mentor.webp';
import saiVardhan from '/members/sai-vardhan.webp';
import subbu from '/members/subbu-BDE.webp';
import mallikharjuna from '/members/mallikharjuna.jpg';
// import sagar from '/members/sagar.png';
import bhemesh from '/members/bhemesh.png';


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
                    <a href="/Sairam-CEO" ><span style={{fontSize:'1.5rem'}}>Uppugundla Sairam</span></a>
                    <br /><br />
                    <h4>Founder & CEO</h4>
                        <span>
                        <a href="https://www.linkedin.com/in/sairam-uppugundla/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a>
                            <i className="fa-brands fa-twitter social-icon"></i>
                            <i className="fa-brands fa-instagram social-icon"></i>
                            <i className="fa-brands fa-telegram social-icon"></i>
                        </span>
                    </center>
                </div><br /><br />
                <div className='ceo_info'>
                    <a href="/Sairam-CEO">Uppugundla Sairam</a>
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
                    <img src={saketh} alt="Kallepu Saketh Reddy" />
                    <a href="/saketh-CoFounder">Kallepu Saketh Reddy</a>
                    <br /><br />
                    <p>Co-Founder and Chief Management Officer </p>
                    <br />
                    <span><a href="https://www.linkedin.com/in/saketh-codegnan/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a></span>
                    
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={saikiran} alt="Saikiran Tarigopula" />
                    <a href="/saikiran-CoFounder">Saikiran Tarigopula</a>
                    <br /><br />
                    <p>Co-Founder and Chief Operating Officer </p>
                    <br />
                    <span><a href="https://www.linkedin.com/in/saikiran-tarigopula-222564136/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a></span>
                    </center>
                </div>                
                <div className='members_div'>
                    <center>
                    <img src={kishor} alt="Kishor Kumar" />
                    <a href="/kishor-kumar">Kishor Kumar</a>
                    <br /><br />
                    <p>Senior Full Stack Corporate Trainer </p>
                    <br />
                    <span><a href="https://www.linkedin.com/in/kishorgn/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a></span>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={sivaRam} alt="Ravi Siva Ram Teja" />
                    <a href="/siva-ram">Ravi Siva Ram Teja</a>
                    <br /><br />
                    <p>MERN Stack Developer & Mentor </p>
                    <br />
                    <span><a href="https://www.linkedin.com/in/ravi-siva-ram-teja-nagulavancha-053199253/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a></span>
                    </center>
                </div>
            </div>
            <div className='codegnan_members'>               
                <div className='members_div'>
                    <center>
                    <img src={kowshik} alt="Kowshik Chilamkurthy" />
                    <a href="/kowshik">Kowshik Chilamkurthy</a>
                    <br /><br />
                    <p>Lead AI & Product Design Head IIT-Madras </p>
                    <br />
                    <span><a href="https://www.linkedin.com/in/kowshik-chilamkurthy-67a501113/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a></span>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={jitendra} alt="Jitendra Chautharia" />
                    <a href="/jitendra">Jitendra Chautharia</a>
                    <br /><br />
                    <p>AI Engineer and Mentor, IIT-Jodhpur </p>
                    <br />
                    <span><a href="https://www.linkedin.com/in/jiten15/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a></span>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={sudheer} alt="Sudheer" />
                    <a href="/sudheer">Sudheer </a>
                    <br /><br />
                    <p>Java Full Stack Developer & Mentor & Trainer </p>
                    <br />
                    <span><a href="https://www.linkedin.com/in/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a></span>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                     <img src={subbu} alt="Subramanyam" />
                    <a href="/subramanyam">D. Subramanyam</a>
                    <br /><br />
                    <p>Business Development Manager</p>
                    <br />
                    <span><a href="https://www.linkedin.com/in/subbu-devalla-021806222/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a></span>
                    </center>
                </div>
            </div>
            <div className='codegnan_members'>
                <div className='members_div'>
                    <center>
                    <img src={saiVardhan} alt="Sai Vardhan" /><br />
                    <a href="/sai-vardhan">T. Venkata Sai Vardhan</a>
                    <br /><br />
                    <p>Python FullStack Developer & Trainer </p>
                    <br />
                    <span><a href="https://www.linkedin.com/in/sai-vardhan-thimmisetty-778389186/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a></span>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={mallikharjuna} alt="Mallikharjuna" />
                    <a href="/mallikharjuna">K. Mallikharjuna</a>
                    <br /><br />
                    <p>Java FullStack Developer & Trainer </p>
                    <br />
                    <span><a href="https://www.linkedin.com/in/mallikharjuna-kollipati-533aa5315/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a></span>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    {/* <img src={sagar} alt="Samuel" /> */}
                    <a href="/samuel">Ch. Samuel</a>
                    <br /><br />
                    <p>Django Developer  & Python Full Stack Mentor </p>
                    <br />
                    <span><a href="https://www.linkedin.com/in/samuel-chitturi-4771081b6/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a></span>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={bhemesh} alt="bhemesh" />
                    <a href="/bhemesh">Bhemesh</a>
                    <br /><br />
                    <p>Java FullStack Developer  & Mentor</p>
                    <br />
                    <span><a href="https://www.linkedin.com/in/saketh-codegnan/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a></span>
                    </center>
                </div>
            </div>

        </div>
    );
}