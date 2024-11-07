// import './about.css';
import './team.css';
import saiVardhan from '/members/sai-vardhan.webp';

export default function Sai_Vardhan() {
    return (
        <div className="team_about"><br /><br />
            <center>
                {/* <h1>Our Team Members at codegnan</h1> */}
            </center>
            <div className='ceoo'>
                <div className='ceo_info1'>
                    <h2><span className="Linkcolor"> Venkata Sai Vardhan T </span>  <span style={{ textAlign: 'justify', color: 'blue' }}> &nbsp;( Python Full Stack Mentor / Trainer ) </span></h2>
                    {/* <img src={style} alt="" /> */}
                    <br />
                    <br />

                    <p>At <b>Codegnan</b>, a leading online platform for coding education, I am a Full Stack Python Trainer and Developer who is passionate about empowering learners and driving technical excellence. I deliver dynamic technical training sessions and create customized learning materials for diverse audiences, from students to professionals.</p>
                    <br /><br />
                    <p>With 4 years of experience as a Technical Trainer, I have worked with various clients such as Talentio, Bytexl, Pyramid, and Campus Connect, to provide company recruitment, product-based, and service-based training. I have developed and designed content and curricula that reflect the latest industry trends and best practices, using various teaching methodologies and technologies. Some of my notable achievements include increasing the user retention rate by 25%, securing a large contract with a Fortune 500 company, and publishing multiple articles on Python and Full-Stack Development. </p>
                    <br /><br />

                    <p>I hold a Bachelor of Technology in Computer Science from KKR&KSR Institute of Technology & Sciences, and I have earned multiple certifications in Python, Google Analytics, and Azure ML Studio. I am proficient in Flask, Open ai, C, C++, HTML, and DBMS, among other skills. I am always eager to learn new technologies and tools, and to share my knowledge and expertise with others</p>
                    <br /><br />
                    <h2>Education</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i><a href="https://www.kluniversity.in/" > KKR & KSR </a> Institute of Technology & Sciences, Bachelor of Technology in Computer Science And Engineering</li>

                    </ul><br />

                    <h2>Work Experience</h2><br />
                    <ul>

                        <li><i className="fa-solid fa-check-double check_double"></i> Python Full Stack Mentor at  <a href="codegnana.com"> Codegnan IT Solutions</a> Hyderabad, Telangana, India (March 2024 - Present ) </li>

                        <li><i className="fa-solid fa-check-double check_double"></i> Freelance Python Trainer at <a> Byte XL</a>, Hyderabad, Telangana, India (Jan 2024 - Mar 2024 )</li>

                        <li><i className="fa-solid fa-check-double check_double"></i> Freelance Python Trainer at <a> Instacks</a>, Hyderabad, Telangana, India (Dec 2023 - Jan 2024 )</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Freelance Python Trainer at <a>Coign</a>, Hyderabad, Telangana, India (Aug 2023 - December 2023 )</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Freelance Python Trainer at  <a>Value</a> Laden, Hyderabad, Telangana, India (May 2023 - Aug 2023 )</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Freelance Python Trainer at <a>Talentio</a>, Hyderabad, Telangana, India (Mar 2022 - April 2023)</li>
                    </ul>

                </div>
                <div className='ceo_img1'>
                    <img src={saiVardhan} />
                    <br />
                    <center>
                        <span>
                        <a href="https://www.linkedin.com/in/sai-vardhan-thimmisetty-778389186/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a>
                        </span>
                    </center>
                </div><br /><br />
            </div>
        </div>
    );
}