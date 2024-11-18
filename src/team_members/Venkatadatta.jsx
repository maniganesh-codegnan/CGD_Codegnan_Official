import './team.css';
import venkatadatta from "/members/venkatadatta.png";

export default function Venkatadatta() {
    return (
        <div className="team_about"><br /><br />
            <center>
                <h1>Our Team Members at codegnan</h1>
            </center>
            <div className='ceoo'>
                <div className='ceo_info1'>
                <h2><span className="Linkcolor">Venkatadatta </span><span style={{color:'blue'}}>Python FullStack Trainer</span></h2>
                <br />

        <br />
      <p><span style={{ fontSize: '22px', textAlign: 'left' ,color:'green'}}> In Codegnan,</span>Currently working as a Python full stack trainer and mentor at Codegnan with two years of experience in teaching IT skills..  </p>
<br />   
      <p>Having Skilled in HTML, CSS, Bootstrap, JavaScript, MySQL, and Python, and experienced in building projects using Python with Amazon S3, Flask API, and frontend technologies.</p>
     <br />
      <p>Dedicated to supporting student growth by imparting essential IT skills and development techniques. Focused on delivering a comprehensive learning experience to equip students with both foundational and advanced development skills.</p><br /><br />
{/* <h2>Education</h2><br />
<ul>
    <li><i className="fa-solid fa-check-double check_double"></i><a href="https://iitj.ac.in/">
Usha Rama College of Engineering & Technology,(B_Tech) </a>, Near Gannavaram, Unguturu mandal, Telaprolu, Vijayawada, Andhra pradesh, India</li>
</ul> */}
<br /><br />
                    <h2>Work Experience</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i> Python Full stack Trainer and Mentor at codegnan</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Having internship in Insights on IVIS </li>
                         </ul>
                </div>
                <div className='ceo_img1'>
                    <img src={venkatadatta} />
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