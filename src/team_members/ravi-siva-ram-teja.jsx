// import './about.css';
import './team.css';
import m5 from '/members/shiva-ram-teja.webp';

export default function Siva_ram_teja() {
    return (
        <div className="team_about"><br /><br />
            <center>
                {/* <h1>Our Team Members at codegnan</h1> */}
            </center>
            <div className='ceoo'>
                <div className='ceo_info1'>
                <h2><span className="Linkcolor"> Ravi Siva Ram Teja Nagulavancha </span> <span style={{color:'blue'}}> (MERN Stack Developer & Senior Trainer at Codegnan)</span></h2>
               <br /><br />                 
                    <br />
                    <span style={{ fontSize: '19px' , textAlign:'left'}}> Ravi Siva Ram Teja is a Developer and Senior with a background in BTech in Computer science and 4+ years of hands-on experience and expertise as a full-stack developer and mentor. </span>
                    <br /><br />
                   
                    <p> Ravi Siva Ram Teja is a seasoned IT professional with a computer science background and over 4+ years of experience in this domain.</p><br />

                    <p> He is committed to extending his knowledge and enhancing his expertise through continuous learning. In addition, using creative thinking, he educated more than a thousand people on frontend and backend technologies.</p><br />

                    <p> Beyond everything, his primary talents lie in his skills in MERN Stack, HTML5, CSS3, Bootstrap, JavaScript, MySQL, and other programming languages and frameworks.</p><br />

                    <p> All through his career, he had the privilege of collaborating with numerous colleges and leading projects.</p><br />

                    <p> His tech skills sharpened his expertise and contributed to a robust network of professional connections in the technology field.</p><br />

                    <h2>Work Experience</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i> Senior Full Stack Corporate Trainer at codegnan</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Corporate Trainer, Freelance, Vijayawada, Andhra Pradesh, India (Sep2018- Present)</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Corporate Trainer at SunTec Business Solutions,Trivandrum(Sep 2017 - Sep 2018)</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Corporate Trainer, Freelance, Vijayawada, Andhra Pradesh, India (Mar 2008- Aug 2017)</li>
                    </ul>
                </div>
                <div className='ceo_img1'>
                    <img src={m5} />
                    <br />
                    <center>
                        <span>
                            <a href="https://www.linkedin.com/in/ravi-siva-ram-teja-nagulavancha-053199253/"  target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a>
                        </span>
                    </center>
                </div><br /><br />
            </div>
        </div>
    );
}