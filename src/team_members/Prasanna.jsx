// import './about.css';
import './team.css';
import prasanna from '/members/prasanna_photo.jpeg';

export default function Prasanna() {
    return (
        <div className="team_about"><br /><br />
            <center>
                {/* <h1>Our Team Members at codegnan</h1> */}
            </center>
            <div className='ceoo'>
                <div className='ceo_info1'>
                    <h2><span className="Linkcolor">Prasanna, </span> Senior Aptitude Trainer at Codegnan, </h2>
                    {/* <img src={style} alt="" /> */}
                    <br />

                    <br />
                    <span style={{ fontSize: '19px', textAlign: 'left' }}> I'm Senior Aptitude Trainer at Codegnan with experience in training students across various levels and helping them achieve success in competitive exams </span>
                    <br /><br /> <p>Specialized in CRT and Company-Specific Training, with a strong foundation in logical reasoning and arithmetic, designed to improve problem-solving and analytical skills in students.</p>
                    <br /><p>Freelance Aptitude Trainer, delivering customized training sessions to individuals and groups to enhance their aptitude and reasoning abilities.</p>
                    <br /><p> Experienced in Training at Reputed Colleges such as Andhra Loyola Institute of Engineering & Technology, Venus Institute of Competitive Exams, and Eswar College of Engineering, focusing on comprehensive aptitude and reasoning skills</p>                    <br /><br />
                    <h2>Education</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i><a href="https://iitj.ac.in/"> GIET College of Engineering,</a> Master Of Computer Applications (MCA), Chaitanya Knowledge City, Rajahmundry, Andhra Pradesh, India</li>
                    </ul>
                    <br /><br />
                    <h2>Work Experience</h2><br /><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i> Senior Aptitude Lead Trainer at Codegnan, overseeing training and development of aptitude skills for students. </li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Aptitude Trainer at Andhra Loyola Institute of Engineering & Technology, Vijayawada, Andhra Pradesh, teaching students various aptitude concepts and strategies </li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Freelance Aptitude Trainer, providing personalized training sessions and competitive exam preparation. </li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Aptitude Trainer at Venus Institute of Competitive Exams and Eswar College of Engineering, focusing on enhancing students' problem-solving and logical reasoning abilities for competitive exams..</li>
                    </ul>

                </div>
                <div className='ceo_img1'>
                    <img src={prasanna} />
                    <br />
                    <center>
                        <span>
                            <a href="https://www.linkedin.com/in/prasanna-vatturi-05b87a29b/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a>
                        </span>
                    </center>
                </div><br /><br />
            </div>
        </div>
    );
}