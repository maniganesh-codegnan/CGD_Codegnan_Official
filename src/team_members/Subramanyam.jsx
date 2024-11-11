// import './about.css';
import './team.css';
import subbu from '/members/subbu-BDE.webp';

export default function Subramanyam() {
    return (
        <div className="team_about"><br /><br />
            <center>
                {/* <h1>Our Team Members at codegnan</h1> */}
            </center>
            <div className='ceoo'>
                <div className='ceo_info1'>
                    <h2><span className="Linkcolor">Subramanyam, </span> is Business Development  Manager at Codegnan </h2>
                    {/* <img src={style} alt="" /> */}
                    <br />
                    <br />
                    <span style={{ fontSize: '19px', textAlign: 'left' }}>Subbu is an experienced Business Development Manager with over 7 years of expertise, having worked with numerous private companies. </span><br />'
                    <p>
                        His corporate training experience includes roles such as Business Development Manager at Codegnan and team lead positions at companies like Innomatics, Hyderabad, and ACCOR Plus, Hyderabad. </p> <br />
                    <p>
                        He has also held senior roles, such as Senior Associate Team Lead at TATA Business Support Services, demonstrating his leadership and team management skills. </p>
                    <p>
                        With a continuous career in executive management and team leadership, Subbu brings significant experience to the IT and business development fields.</p>
                    <br /><br />
                    <h2>Work Experience</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i> Business Development  Manager at codegnan</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Innomatics, Team lead, Hyderabad, India</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> ACCOR plus  Sr.Employee, Hyderabad,</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> TATA Business support services, Sr Associate Team lead, Hyderabad, India</li>
                    </ul>
                </div>
                <div className='ceo_img1'>
                    <img src={subbu} />
                    <br />
                    <center>
                        <span>
                            <a href="https://www.linkedin.com/in/subbu-devalla-021806222/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a>
                        </span>
                    </center>
                </div><br /><br />
            </div>
        </div>
    );
}