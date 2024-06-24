// import './about.css';
import './team.css';
import ceo from '/members/sairam-sir.webp'

export default function About() {
    return (
        <div className="team_about"><br /><br />
            <center>
                {/* <h1>Our Team Members at codegnan</h1> */}
            </center>
            <div className='ceoo'>
                <div className='ceo_info1'>
                <h2><span className="Linkcolor"> Sairam Uppugundla, </span> Tech expert and founder of codegnan </h2>
                {/* <img src={style} alt="" /> */}
                    <br />
                    <p style={{ textAlign:'justify' }}>Founder & CEO</p>
                    <br />
                    <span style={{ fontSize: '19px' , textAlign:'left'}}>Sairam Uppugundla is the CEO and founder of Codegnan IT Solutions. With a strong background in Computer Science and over 10 years of experience, he is committed to bridging the gap between academia and industry</span>
                    <br /><br />
                    <p>Sairam Uppugundla is the CEO and founder of Codegnan IT Solutions. With a strong background in Computer Science and over 10 years of experience, he is committed to bridging the gap between academia and industry.</p><br/>

                    <p>Sairam Uppugundla is a dedicated IT professional with a Bachelor’s in Technology and Computer science with 10+ years of experience in this field.</p><br/>

                    <p>To achieve his mission, Sairam Uppugundla decided to leave his position as a Data Engineer in Malaysia, returned to Andhra Pradesh, and established Codegnan. </p><br/>

                    <p>In 2018, his deep-rooted interest in teaching led him to change his career, shifting his focus to bring up the next generation of engineers. </p><br/>

                    <p>As a result, he is now the Founder and CEO of Codegnan.</p><br/>

                    <p>Sairam Uppugundla’s expertise spans Python, Software Development, Data Analysis, AWS, Big Data, Machine Learning, Natural Language Processing (NLP) and more. </p><br/>

                    <p>He previously worked as a Board Of Studies Member at PB Siddhartha College of Arts and Science. With expertise in data science, he was involved in designing the Curriculum for the BSc data Science Branch.</p><br/>

                    <p>In addition to the above, he worked as a Data Science consultant for Andhra Pradesh State Skill Development Corporation (APSSDC).</p><br/>

                    <p>He did not limit his passion for technology and expanded by working as a Board of Studies Member, DataScience MTechBoard of Studies.</p><br/>
                    <br /><br />

                    <h2>Education</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i> <a href="https://www.kluniversity.in/">KL University</a>, B.Tech in Electronics and Electrical Engineering ( 2012-2016)</li>
                        <li><i className="fa-solid fa-check-double check_double"></i>  Narayana Junior College, Intermediate(MPC) (2010-2012)</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> <a href="https://vignanschools.org/"> Vignan Vidyalaya,</a> Thimmapuram, Higher School (2007-2010)</li>
                        <li><i className="fa-solid fa-check-double check_double"></i>  Vignan Vidyalaya, Siripuram, Primary School (2000-2006)</li>
                        </ul><br />

                    <h2>Work Experience</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i> Co-founder and Chief Operating Officer at <a href="codegnan.com">CODEGNAN IT SOLUTIONS,</a> Vijayawada Area, India (Apr 2018- Present)</li>
                        <li><i className="fa-solid fa-check-double check_double"></i>  Manager at Subrains (Nov 2016-June 2017)</li>
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