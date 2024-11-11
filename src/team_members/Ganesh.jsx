// import './about.css';
import './team.css';
import ganesh from '/members/ganesh_photo.jpeg';

export default function Ganesh() {
    return (
        <div className="team_about"><br /><br />
            <center>
            </center>
            <div className='ceoo'>
                <div className='ceo_info1'>
                    <h2><span className="Linkcolor">Mani Ganesh </span>  <span style={{ textAlign: 'justify', color: 'blue' }}> &nbsp;( Front ReactJs Developer & Mentor ) </span></h2>
                   
                    <br />
                    <br />

                    <p>At <b>Codegnan : </b> Codegnan is an ideal environment for students starting and advancing their IT tech careers. my Role and Responsibilities is As a ReactJS Developer and Frontend Mentor at Codegnan</p>
                    <br /><br /><p>
                        Technical Skills and Projects : I have developed e-commerce platforms and web applications using technologies like ReactJS, TypeScript, JavaScript, HTML, CSS, Bootstrap, Material UI, Redux, and Node.js.
                    </p>
                    <br />
                    <p>Professional Experience: With over five years of experience, I have collaborated with project teams and team heads, contributing to organizations such as TCS, Wipro, and L&T.</p>
                    <br />
                    <p>Client-Centric Approach: My role involves understanding client requirements and designing single-page applications as ReactJS projects tailored to their needs.
                    </p>

                    <br /><br />


                    <h2>Education</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i><a href="https://www.kluniversity.in/" >  KIET, JNTUK university </a> ,  B_Tech, Kakinada, Visakhapatnam, Andhra Pradesh , India </li>

                    </ul><br />

                    <h2>Work Experience</h2><br />
                    <ul>

                        <li><i className="fa-solid fa-check-double check_double"></i> Front End Developer and  Mentor at  <a href="codegnana.com"> Codegnan IT Solutions</a> Hyderabad, Telangana, India  </li>

                        <li><i className="fa-solid fa-check-double check_double"></i> Sr Software Developer at <a> L&T Tech park</a> Bengaluru, Karnataka, India </li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Sr Software Developer at <a> Wipro</a> Hyderabad, Karnataka, India </li>

                        <li><i className="fa-solid fa-check-double check_double"></i> Software Enginner at  <a> TCS </a>Hyderabad, India</li>
                    </ul>

                </div>
                <div className='ceo_img1'>
                    <img src={ganesh} />
                    <br />
                    <center>
                        <span>
                            <a href="https://www.linkedin.com/in/mani-ganesh-n-0082a6335/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a>
                        </span>
                    </center>
                </div><br /><br />
            </div>
        </div>
    );
}