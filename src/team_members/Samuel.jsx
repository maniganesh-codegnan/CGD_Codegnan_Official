// import './about.css';
import './team.css';
import m6 from '/members/manohar.webp';


export default function Samuel() {
    return (
        <div className="team_about"><br /><br />
            <center>
            </center>
            <div className='ceoo'>
                <div className='ceo_info1'>
                <h2><span className="Linkcolor">Manohar Chary Vadla,</span> Data Scientist & Mentor at codegnan </h2>
                {/* <img src={style} alt="" /> */}
                    <br />
                    <p style={{ textAlign:'justify' }}>DATA SCIENTIST</p>
                    <br />
                    <span style={{ fontSize: '19px' , textAlign:'left'}}> Manohar Chary Vadla is a Data Scientist and Mentor with a Bachelor of Commerce in Computer Science background, having 2+ years of hands-on experience in Data Extraction from documents using Python and deep learning techniques.</span>
                    <br /><br />
                    
                    <p> Manohar Chary Vadla, a dedicated Data Science professional, Holds a background in Computer science with 2+ years of experience. He excels in technology.</p><br />

                    <p> His areas of expertise include research and implementation in machine learning and deep learning, such as regression, classification, neural networks, and natural language processing (NLP).</p><br />

                    <p> As part of the AI-for India Event, in collaboration with GUVI Geek Networks and IITM Research Park, he developed a facial recognition application using the Python programming language.</p><br />

                    <p> As a result of his commitment to the technology field, Manohar Chary Vadla was able to finish a project in AI&ML on breast cancer diagnosis that was assigned to him by LetsUpgrade.</p><br />
                    <br />

                    <h2>Education</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i><a href="https://www.acc.edu.in/" >Aviansh Degree College, </a> Bachelor of Commerce in Computers( June2016-June2019)</li>
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
                    <img src={m6} />
                    <br />
                    <center>
                    <br />
                        <span>
                            <a href="https://www.linkedin.com/in/manohar-chary-v-2559811a5/"><i className="fa-brands fa-linkedin-in social-icon"></i></a>
                        </span>
                    </center>
                </div><br /><br />
            </div>
          


        </div>
    );
}