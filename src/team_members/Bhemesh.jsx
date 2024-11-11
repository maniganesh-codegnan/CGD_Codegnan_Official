// import './about.css';
import './team.css';
import bhemesh from '/members/bhemesh.png';

export default function Bhemesh() {
    return (
        <div className="team_about"><br /><br />
            <center>
                {/* <h1>Our Team Members at codegnan</h1> */}
            </center>
            <div className='ceoo'>
                <div className='ceo_info1'>
                <h2><span className="Linkcolor">Bhemesh </span><span style={{color:'blue'}}>Java FullStack Developer & Mentor</span></h2>
                    <h2>Work Experience</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i> Training & Placements at codegnan</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Corporate Trainer, Freelance, Vijayawada, Andhra Pradesh, India (Sep2018- Present)</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Corporate Trainer at SunTec Business Solutions,Trivandrum(Sep 2017 - Sep 2018)</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Corporate Trainer, Freelance, Vijayawada, Andhra Pradesh, India (Mar 2008- Aug 2017)</li>
                    </ul>
                </div>
                <div className='ceo_img1'>
                    <img src={bhemesh} />
                    <br />
                    <center>
                        <span>
                            <a href=""  target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a>
                        </span>
                    </center>
                </div><br /><br />
            </div>
         
        </div>
    );
}