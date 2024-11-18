import './team.css';
import pooja from "/members/pooja.png";

export default function Pooja() {
    return (
        <div className="team_about"><br /><br />
        <center>
            <h1>Our Team Members at codegnan</h1>
        </center>
        <div className='ceoo'>
            <div className='ceo_info1'>
                <h2><span className="Linkcolor">Pooja, </span><span style={{color:'blue'}}>(Python full stack Trainer and mentor)</span>  </h2>
                {/* <img src={style} alt="" /> */}
                <br />

                <br />
                <p><span style={{ fontSize: '22px', textAlign: 'left' ,color:'green'}}> In Codegnan,</span> Currently working as a Python full stack trainer and mentor at Codegnan with two years of experience in teaching IT skills. 
                    Having Skilled in Python Full Stack Development and Datascience and Machine learning, including technologies like python, SQL, DataScience.</p> <br />
                     <p>Proficient with databases such as MySQL and API creation, along with Python Full stack technologies like HTML, CSS, Bootstrap, javascript, SQL and Python </p>
                     <br />
                     <p>Dedicated to supporting student growth by imparting essential IT skills and development techniques.</p><br /><br />
               <h2>Education</h2><br />
                <ul>
                    <li><i className="fa-solid fa-check-double check_double"></i><a href="https://iitj.ac.in/">
                Usha Rama College of Engineering & Technology,(B_Tech) </a>, Near Gannavaram, Unguturu mandal, Telaprolu, Vijayawada, Andhra pradesh, India</li>
                </ul>
                <br /><br />
                <h2>Work Experience</h2><br /><br />
                <ul>
                    <li><i className="fa-solid fa-check-double check_double"></i> Senior Aptitude Lead Trainer at Codegnan, overseeing training and development of aptitude skills for students. </li>
                </ul>

            </div>
            <div className='ceo_img1'>
                <img src={pooja} alt='Ambica Photo'/>
                <br />
                <center>
                    <span>
                        <a href="https://www.linkedin.com/in/pooja-chinthakayala-536634201/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a>
                    </span>
                </center>
            </div><br /><br />
        </div>
    </div>
    );
}