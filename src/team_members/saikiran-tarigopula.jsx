// import './about.css';
import './team.css';
import m2 from '/members/sai-kiran.webp';

export default function About() {
    return (
        <div className="team_about"><br /><br />
            <center>
                {/* <h1>Our Team Members at codegnan</h1> */}
            </center>
            <div className='ceoo'>
                <div className='ceo_info1'>
                <h2><span className="Linkcolor"> Saikiran Tarigopula </span> </h2>
                {/* <img src={style} alt="" /> */}
                    <br />
                    <p style={{ textAlign:'justify' }}>Co-Founder and Chief Management Officer </p>
                    <br />
                    <span style={{ fontSize: '19px' , textAlign:'left'}}>  Saikiran Tarigopula is a Chief Operating Officer at Codegnan IT Solutions, with a Bachelor’s in technology specializing in electrical and electronics engineering. He has over 7+ years of experience in the tech field, showing a solid foundation in HR, digital marketing, and business development.</span>
                    <br /><br />
                    
                    <p>Saikiran Tarigopula is a multitalented professional driven by results. He holds a Bachelor of Science in Technology specializing in electrical and electronic engineering.</p><br />

                    <p>In his 7+ years of career experience, he has shown excellence in HR management and business development. Beyond all, he offers his expertise in digital marketing at Codegnan to prioritize the maintenance of the company’s strong digital presence, reaching out to a global audience.</p><br />

                    <p>In addition to being the digital team leader, Saikiran Taigopula is also responsible for the day-to-day operations of codegnan. </p><br />

                    <p>In the past, he has shown remarkable success while serving as a manager at Subrains.</p><br />

                    <p>He believes in developing talent, leading teams, and facilitating efficient departmental cooperation. He also assists in identifying and grooming individuals within his team who represent a great deal of unrealized potential.</p><br />

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
                    <img src={m2} />
                    <br />
                    <center>
                        <span>
                            <a href="https://www.linkedin.com/in/saikiran-tarigopula-222564136/?original_referer=https%3A%2F%2Fcodegnan.com%2F"><i className="fa-brands fa-linkedin-in social-icon"></i></a>
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