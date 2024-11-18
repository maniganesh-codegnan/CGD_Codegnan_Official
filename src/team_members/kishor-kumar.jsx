// import './about.css';
import './team.css';
import kishor from '/members/Kishor-Kumar-java.webp';

export default function Kishor_Kumar() {
    return (
        <div className="team_about"><br /><br />
            <center>
                <h1>Our Team Members at codegnan</h1>
            </center>
            <div className='ceoo'>
                <div className='ceo_info1'>
                <h2><span className="Linkcolor"> Kishor Kumar </span>  <span style={{color:'blue'}}>(Senior Full Stack Corporate Trainer at codegnan) </span></h2>                
                    <br /><br />
                    <br />
                    <span style={{ fontSize: '19px' , textAlign:'left'}}>Kishor Kumar is a freelance corporate trainer having 20+ years of expertise in corporate training. He hones his expertise in Java, having trained in many corporates, including JP Morgan Chase, TCS, HSBC, DBS, and many more.</span>
                    <br /><br />
                    <p>Kishor Kumar is a <b>Senior Full Stack Corporate Trainer</b> at codegnan with uninterrupted corporate trainer experience for over 20+ years.</p>

                    <p>He was a  freelance corporate trainer for many tech companies like  JP Morgan Chase, TCS, HSBC, DBS Bank, Guardian Life, UST Global, HCL, Capgemini, Cognizant, DXC, CSC, and Covalense Digital.</p>

                    <p>His continuous journey as a corporate trainer shows his interest and the technical skills he has in this IT technology.</p>

                    <p>Predominantly, he has expertise in Java SE, Java EE, Hibernate, Spring Core, Spring AOP, Spring Boot, Spring RestFul APIs, Oracle Database, MySQL Database, and MongoDB.</p><br /><br />

                    <h2>Work Experience</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i> Senior Full Stack Corporate Trainer at codegnan</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Corporate Trainer, Freelance, Vijayawada, Andhra Pradesh, India (Sep2018- Present)</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Corporate Trainer at SunTec Business Solutions,Trivandrum(Sep 2017 - Sep 2018)</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Corporate Trainer, Freelance, Vijayawada, Andhra Pradesh, India (Mar 2008- Aug 2017)</li>
                    </ul>


                </div>
                <div className='ceo_img1'>
                    <img src={kishor} />
                    <br />
                    <center>
                        <span>
                            <a href="https://www.linkedin.com/in/kishorgn" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a>
                        </span>
                    </center>
                </div><br /><br />
            </div>                    
        </div>
    );
}