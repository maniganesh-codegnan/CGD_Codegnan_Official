// import './about.css';
import './team.css';
import ankit from '/members/ankit.png';

export default function Ankit() {
    return (
        <div className="team_about"><br /><br />
            <center>
                {/* <h1>Our Team Members at codegnan</h1> */}
            </center>
            <div className='ceoo'>
                <div className='ceo_info1'>
                    <h2><span className="Linkcolor"> Ankit Sharma </span>  <span style={{ textAlign: 'justify', color: 'blue' }}> &nbsp;( Full Stack Mentor / Trainer ) </span></h2>
                    {/* <img src={style} alt="" /> */}
                    <br />
                    <br />

                    <p>At <b>Codegnan</b>, a leading online platform for coding education, I am a Full Stack Trainer/Mentor and Developer who is passionate about empowering learners and driving technical excellence. I deliver dynamic technical training sessions and create customized learning materials for diverse audiences, from students to professionals.</p>
                    <br /><br />
                    <p>With 3 years of experience in Technical Training and Developement, I have worked with various organisations (Coding Ninjas , Meta16labs , L&T ), to provide company recruitment, product-based, and service-based training. I have developed and designed content and curricula that reflect the latest industry trends and best practices, using various teaching methodologies and technologies. </p>
                    <br /><br />


                    <h2>Education</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i><a href="https://www.kluniversity.in/" >  Jamia Millia Islamia</a> ,  Bachelor of Technology  </li>

                    </ul><br />

                    <h2>Work Experience</h2><br />
                    <ul>

                        <li><i className="fa-solid fa-check-double check_double"></i> Python Full Stack Mentor at  <a href="codegnana.com"> Codegnan IT Solutions</a> Hyderabad, Telangana, India (Sep 2024 - Present ) </li>

                        <li><i className="fa-solid fa-check-double check_double"></i> Software Developer at <a> Meta16labs</a>, Bengaluru, Karnataka, India </li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Freelance Web Developer at <a> CodeBrahma</a>, Bengaluru, Karnataka, India </li>

                        <li><i className="fa-solid fa-check-double check_double"></i> Teaching Assistant at  <a> Coding Ninjas </a>, Delhi, India</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Freelance Web Developer at  <a>Exatorial </a>, Delhi , India </li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Senior Engineer at  <a>L&T</a> Mumbai, India </li>
                    </ul>

                </div>
                <div className='ceo_img1'>
                    <img src={ankit} />
                    <br />
                    <center>
                        <span>
                            <a href="https://www.linkedin.com/in/ankit7rma/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a>
                        </span>
                    </center>
                </div><br /><br />
            </div>
        </div>
    );
}