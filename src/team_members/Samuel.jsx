// import './about.css';
import './team.css';
import samuel from '/members/samuel.png';


export default function Samuel() {
    return (
        <div className="team_about"><br /><br />
            <center>
            </center>
            <div className='ceoo'>
                <div className='ceo_info1'>
                    <h2><span className="Linkcolor">Samuel,</span> Python Full Stack Trainer  </h2>
                    {/* <img src={style} alt="" /> */}
                    <br /><br />
                    <span style={{ fontSize: '19px', textAlign: 'left' }}>Full Stack Python Trainer and Django Developer at Codegnan, delivering technical training, creating customized learning materials, and empowering learners. </span>
                    <br /><br />
                    <p>Over 2 years of experience as a Technical Trainer, working with clients like Talentio, Bytexl, and Campus Connect to provide training for recruitment, product-based, and service-based purposes. Known for increasing user retention and securing large contracts.</p>
                    <br />
                    <p>Proficient in Python, Flask,  Django, HTML, CSS, SQL DBMS ,REST APIs. Achievements include creating a facial recognition application and publishing articles on Python and Full-Stack Development.</p>
                    <br /><br /> <br />
                    <h2>Education</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i><a href="https://www.acc.edu.in/" >JNTUK</a> Bachelor of Computers </li>
                    </ul><br /> <br />

                    <h2>Work Experience</h2><br />
                    <ul>

                        <li><i className="fa-solid fa-check-double check_double"></i>
                            Django Developer and Python Full stack Trainer <a href="codegnana.com"> Codegnan IT Solutions</a>  Vijayawada and  Hyderabad, Telangana, India ( NOV 2022 - Present ) </li>

                        <li><i className="fa-solid fa-check-double check_double"></i>
                            <a href="https://aibridgeml.ai/"> VIT University </a> Java Technical Lead Chennai, India </li>
                        <li><i className="fa-solid fa-check-double check_double"></i>  Campus Trainer at SRM, Chennai, India </li>
                    </ul>
                </div>
                <div className='ceo_img1'>
                    <img src={samuel} alt='Samuel Photo' />
                    <br />
                    <center>
                        <br />
                        <span>
                            <a href="https://www.linkedin.com/in/samuel-chitturi-4771081b6/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a>
                        </span>
                    </center>
                </div><br /><br />
            </div>
        </div>
    );
}