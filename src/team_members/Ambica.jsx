import './team.css';
import ambica from "/members/ambica.png";

export default function Ambica() {
    return (
        <div className="team_about"><br /><br />
        <center>
            <h1>Our Team Members at codegnan</h1>
        </center>
        <div className='ceoo'>
            <div className='ceo_info1'>
                <h2><span className="Linkcolor">Ambica </span> <span style={{color:'blue'}}>(FrontEnd Trainer and mentor)</span> </h2>
                {/* <img src={style} alt="" /> */}
                <br />

                <br />
                <p><span style={{ fontSize: '22px', textAlign: 'left' ,color:'green'}}> In Codegnan,</span> Currently working as a frontend trainer and mentor at Codegnan with two years of experience in teaching IT skills. 
                    Skilled in Full Stack Development, including technologies like ReactJS, JavaScript, NodeJS, and ExpressJS.</p> <br />
                     <p>Proficient with databases such as MySQL and MongoDB, along with front-end technologies like HTML, CSS, Bootstrap, and Material UI.</p>
                     <br />
                     <p>Dedicated to supporting student growth by imparting essential IT skills and development techniques.</p><br /><br />
                <h2>Education</h2><br />
                <ul>
                    <li><i className="fa-solid fa-check-double check_double"></i><a href="https://iitj.ac.in/"> JNTUA College of Engineering (B_Tech), </a> Kalikiri, Andhra Pradesh, India</li>
                </ul>
                <br /><br />
                <h2>Work Experience</h2><br /><br />
                <ul>
                    <li><i className="fa-solid fa-check-double check_double"></i> FrontEnd Developer and Trainer at Codegnan </li>
                </ul>

            </div>
            <div className='ceo_img1'>
                <img src={ambica} alt='Ambica Photo'/>
                <br />
                <center>
                    <span>
                        <a href="https://www.linkedin.com/in/ambica-kiranmayee-bellamkonda-203861200/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a>
                    </span>
                </center>
            </div><br /><br />
        </div>
    </div>
    );
}