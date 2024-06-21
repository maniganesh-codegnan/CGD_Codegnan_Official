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
                {/* <h1>Our Team Members at codegnan</h1> */}
            </center>
            <div className='ceoo'>
                <div className='ceo_info1'>
                <h2><span className="Linkcolor"> Saketh Kallepu, </span> </h2>
                {/* <img src={style} alt="" /> */}
                    <br />
                    <p style={{ textAlign:'justify' }}>Co-Founder and Chief Management Officer </p>
                    <br />
                    <span style={{ fontSize: '19px' , textAlign:'left'}}>Saketh Kallepu is a Chief Management Officer and Data Science Mentor with a background of Masters in Computational Intelligence.</span>
                    <br /><br />

                    <p> He has 7+ years of experience in Data science as a consultant and mentor certified as a Microsoft-certified trainer.</p><br />

                    <p> Saketh Kallepu is a Data science professional in the IT field with a background in Computational Intelligence. Having 7+ years of experience in this field, he is an outstanding Data Science Mentor and trainer.</p><br />

                    <p> Saketh Kallepu believes, <b>“Don’t work hard, just work with heart.</b>” With this belief, he joined as Co-Founder, mentor, and trainer at Codegnan to change the education platform and build a new technical arena for passionate learners.</p><br />

                    <p> He has proficiency in various technical skills, including Seaborn, Flask, Pandas, Plotly, Matplotlib, TensorFlow, Computer Vision, Machine Learning, Data Analysis, Python (Programming Language), and more.</p><br />

                    <p> Apart from being a co-founder with Codegnan, he is also a <b>Data Science</b> Consultant at Andhra Pradesh State Skill Development Corporation (APSSDC) to expand his expertise in this technical area.</p><br />

                    <p> Previously, he worked as a <b>Data Engineer and Chief Operating Officer</b> for SuBrains Solutions Private Limited, the first technology startup from India based on E-learning with the help of AI.</p><br />

                    <p> During his college days, Sairam Uppugundla was actively involved and even held the position of <b>Head Volunteer in the “JMTEK” Technical Fest.</b> He has shown his dedication to technology and leadership from his college days.</p><br />
                    <br /><br />

                    <h2>Education</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i><a href="https://www.kluniversity.in/" > KL University, </a>Master’s Degree, Computational Intelligence (2015-2017).</li>
                        <li><i className="fa-solid fa-check-double check_double"></i><a href="https://www.kluniversity.in/" > Jyothishmathi Institute of Technological Sciences,</a> Engineers Degree, Electrical, Electronics and Communication Engineering (2011-2015)</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Sri Chaitanya Junior College, Ameenpur, Hyderabad, Intermediate(M.P.C)(2002-2011)</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> St.Paul’s, High School/ Secondary School (2000- 2009)</li>
                    </ul><br />

                    <h2>Work Experience</h2><br />
                    <ul>
                        
                        <li><i className="fa-solid fa-check-double check_double"></i> Chief Management Officer and Data Science Mentor a <a href="codegnana.com"> Codegnan IT Solutions</a> Vijayawada, Andhra Pradesh, India (March 2020- Present) </li>

                        <li><i className="fa-solid fa-check-double check_double"></i> 
                        Data Science Consultant at  <a href="https://www.apssdc.in/home/"> Andhra Pradesh State Skill Development Corporation (APSSDC), </a> Vijayawada, Andhra Pradesh, India (Sep 2019 - Present)</li>

                        <li><i className="fa-solid fa-check-double check_double"></i> Data Engineer & Chief Operating Officer at SuBrains Solutions Private Limited, Vijayawada Area, India (Aug 2016 - Jun 2019)</li>
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