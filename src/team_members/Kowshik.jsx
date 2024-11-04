// import './about.css';
import './team.css';
import kowshik from '/members/Kowshik.webp';

export default function Kowshik() {
    return (
        <div className="team_about"><br /><br />
            <center>
            </center>
            <div className='ceoo'>
                <div className='ceo_info1'>
                <h2><span className="Linkcolor">Jitendra Chautharia, </span> AI Engineer at codegnan</h2>
                {/* <img src={style} alt="" /> */}
                    <br />
                    <p style={{ textAlign:'justify' }}>AI ENGINEER AND MENTOR</p>
                    <br />
                    <span style={{ fontSize: '19px' , textAlign:'left'}}> Jitendra Chautharia specializes in artificial intelligence and holds a Master of Technology degree in cyber-physical systems. He has over three years of expertise in developing projects, including artificial intelligence, the Internet of Things, and robots.</span>
                    <br /><br />
                    
                    <p> Jitendra Chautharia formerly held a position at ATL Lab, where he not only participated in developing projects using artificial intelligence (AI), (IoT), and robots but also trained students in these areas.</p>

                    <p> At Digio, where he worked as a Software Engineer specializing in Machine Learning, he had the opportunity to contribute to some of the most cutting-edge initiatives in artificial intelligence and machine learning throughout his tenure there.</p>
                    <br />

                    <h2>Education</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i><a href="https://iitj.ac.in/"> Indian Institute of Technology,</a> Jodhpur, MTech in Cyber-Physical System (2019-2021)</li>

                        <li><i className="fa-solid fa-check-double check_double"></i><a href="https://collegedunia.com/college/14209-maharishi-arvind-international-institute-of-technology-maiit-kota"> Maharshi Arvind International Institute of Technology,</a> Ranpur, BTech in Electrical and Electronics Engineering (2011-2015)</li>

                        <li><i className="fa-solid fa-check-double check_double"></i> Kendriya Vidyalaya, High School in PCM (2008-2010)</li>

                        <li><i className="fa-solid fa-check-double check_double"></i> <a href="http://stdavsuratgarh.org/">D.A.V Public School,</a> Thermal Colony, Suratgarh, Secondary School (2007-2008)</li>
                    </ul><br />
                    
                    <h2>Work Experience</h2><br />
                    <ul>
                        
                        <li><i className="fa-solid fa-check-double check_double"></i> 
                        Data Scientist at  <a href="codegnana.com"> Codegnan IT Solutions</a>  Hyderabad, Telangana, India (Aug 2023 - Present ) </li>

                        <li><i className="fa-solid fa-check-double check_double"></i> 
                        Associate Data Scientist at <a href="https://aibridgeml.ai/"> AIBridge ML,</a>Hyderabad, Telangana, India (Jul 2021 - Mar 2023 )</li>
                    </ul>

                </div>
                <div className='ceo_img1'>
                    <img src={kowshik} />
                    <br />
                    <center>
                    <br />
                        <span>
                        <a href="https://www.linkedin.com/in/jiten15/"><i className="fa-brands fa-linkedin-in social-icon"></i></a>
                        </span>
                    </center>
                </div><br /><br />
            </div>         

        </div>
    );
}