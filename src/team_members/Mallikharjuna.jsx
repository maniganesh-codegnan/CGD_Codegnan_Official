// import './about.css';
import './team.css';
import mallikharjuna from '/members/mallikharjuna.jpg';

export default function Mallikharjuna() {
    return (
        <div className="team_about"><br /><br />
            <center>
                {/* <h1>Our Team Members at codegnan</h1> */}
            </center>
            <div className='ceoo'>
                <div className='ceo_info1'>
                    <h2><span className="Linkcolor"> Mallikharjuna.K</span>  <span style={{ textAlign: 'justify', color: 'blue' }}> &nbsp;( Java Full Stack Mentor / Trainer ) </span></h2>
                    {/* <img src={style} alt="" /> */}
                    <br />
                    <br />


                    <p>At <b>Codegnan</b>, As a Full Stack Java Trainer and Developer at a leading online coding education platform, I am passionate about empowering learners and driving technical excellence. I deliver dynamic, engaging training sessions and create customized learning materials for diverse audiences, ranging from students to professionals.</p><br /><br />

                    <p>With over 3 years of experience as a Technical Trainer, I have developed and designed content and curricula that reflect the latest industry trends and best practices, utilizing various teaching methodologies and technologies. Notable achievements include increasing the user retention rate by 25%, securing a major contract with a Fortune 500 company, and publishing multiple articles on Java  Full-Stack Development.</p> <br /><br />

                    <p> I hold a Bachelor of Technology degree in Computer Science Engineering from Guntur Engineering College. I have also earned multiple certifications in Java, Google Analytics, and Azure ML Studio. My technical skill set includes Java, Advanced Java, Spring Boot, Hibernate, SQL, Git, databases, Docker, HTML, CSS, JavaScript, Bootstrap, and React, among others. I am always eager to learn new technologies and tools and to share my knowledge and expertise with others.</p>
                    <br /><br /><br />
                    <h2>Education</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i><a href="https://www.kluniversity.in/" >Guntur </a> Enginnering College in Computer Science Engineering</li>

                    </ul><br />

                    <h2>Work Experience</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i>   Java Full Stack Mentor & Trainer at <a href="codegnana.com">  Codegnan IT Solutions </a> Hyderabad, Telangana, India (March 2024 - Present ) </li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Java Full Stack Mentor at  <a href="codegnana.com"> Newzen Infotech solutions pvt Ltd </a> Hyderabad, Telangana, India (MAY 2021 -  MAR 2023 ) </li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Java Full Stack Mentor at  <a href="codegnana.com"> Magniquee software solutions </a> Hyderabad, Telangana, India (April 2023 - March 2024 ) </li>


                    </ul>

                </div>
                <div className='ceo_img1'>
                    <img src={mallikharjuna} />
                    <br />
                    <center>
                        <span>
                            <a href="https://www.linkedin.com/in/mallikharjuna-kollipati-533aa5315/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a>
                        </span>
                    </center>
                </div><br /><br />
            </div>


        </div>
    );
}