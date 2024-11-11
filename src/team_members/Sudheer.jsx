// import './about.css';
import './team.css';
import sudheer from "/members/sudheer-java-mentor.webp";

export default function Sudheer() {
    return (
        <div className="team_about"><br /><br />
            <center>
                {/* <h1>Our Team Members at codegnan</h1> */}
            </center>
            <div className='ceoo'>
                <div className='ceo_info1'>
                    <h2><span className="Linkcolor"> Sudheer, </span> Senior Full Stack Developer and trainer at codegnan </h2>
                    {/* <img src={style} alt="" /> */}
                    <br />
                    <p style={{ textAlign: 'justify' }}>FULL STACK JAVA TRAINER</p>
                    <br />
                    <span style={{ fontSize: '19px', textAlign: 'left' }}> Sudheer is a  Java trainer having 18+ years of expertise in Java development at various MNC's.
                        He has experience in Java application development, maintanance and project management in many corporates, including HCL, Patni Computers, Capgemini, GE Money, RadiantLogic etc.</span>
                    <br /><br />
                    <p>Sudheer is a <b>Senior Full Stack Java Trainer</b> at codegnan.</p>

                    <p>Good experience in Java SE, Java EE, Hibernate, Spring Core, Spring MVC, Spring Boot, Spring RestFul APIs, Oracle Database, MySQL Database, and MongoDB.</p><br /><br />

                    <h2>Work Experience</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i> Senior Full Stack Java Trainer at codegnan </li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Java Development (Associate Project Manager), E-Procurement and E-Auctions for AP and TS </li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Java Development (Technical Project Manager), Zylog systems,Bank Dhofar(UAE) </li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Senior Java Developer,RadiantLogic, US.</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Technical Team lead at Capgemini, India</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Application Consultant, GE Money, Singapore</li>
                    </ul>


                </div>
                <div className='ceo_img1'>
                    <img src={sudheer} />
                    <br />
                    <center>
                        <span>
                            <a href="" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a>
                        </span>
                    </center>
                </div><br /><br />
            </div>


        </div>
    );
}