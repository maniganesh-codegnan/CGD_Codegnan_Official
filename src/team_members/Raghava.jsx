// import './about.css';
import './team.css';
import raghava from '/members/raghava.png';

export default function Raghava() {
    return (
        <div className="team_about"><br /><br />
            <center>
                {/* <h1>Our Team Members at codegnan</h1> */}
            </center>
            <div className='ceoo'>
                <div className='ceo_info1'>
                    <h2><span className="Linkcolor"> Raghava, </span> Senior Placement Team head at codegnan </h2>
                    {/* <img src={style} alt="" /> */}
                    <br />

                    <br />
                    <span style={{ fontSize: '19px', textAlign: 'left' }}> Raghava is the Placement Support Team Head and has worked with various MNCs. Regional Head (AP & TG) - Training & Placements at Codegnan IT Solutions.</span><br />
                    <p>Senior Head of Students Training & Placements at Codegnan. Director - Operations & Corporate Business and Head at RK Software Solutions. </p> <br />
                    <p>Head - HR & Business Operations at Convey Tech Labs. Chief Manager - Corporate Business at Feligrat Global Solutions Pvt. Ltd.</p> <br />

                    <p>Head - Placements, Recruitments, and Operations at Milieu Global IT Solutions and Innomatics Research Labs.</p> <br />
                    <p>Skills include Onboarding, Customer Engagement, Account Management, Resource Management, People Development, Business Development, Relationship Building, and Human Resources (HR)</p>
                    <br /><br />
                    <h2>Work Experience</h2><br />
                    <ul>
                        <li><i className="fa-solid fa-check-double check_double"></i>Senior Head of Students Training & Placements at Codegnan, responsible for guiding student success and corporate connections. </li>
                        <li><i className="fa-solid fa-check-double check_double"></i>  Former Director of Operations & Corporate Business and Head of Corporate Business Operations at RK Software Solutions, Head of HR & Business Operations at Convey Tech Labs, and Chief Manager of Corporate Business at Feligrat Global Solutions Pvt. Ltd..</li>
                        <li><i className="fa-solid fa-check-double check_double"></i> Previously led Placements, Recruitments, and Operations at Milieu Global IT Solutions and Innomatics Research Labs. </li>
                        <li><i className="fa-solid fa-check-double check_double"></i>  Passionate about operational excellence and strategic workforce development across industries.</li>
                    </ul>
                </div>
                <div className='ceo_img1'>
                    <img src={raghava} />
                    <br />
                    <center>
                        <span>
                            <a href="https://www.linkedin.com/in/raghava-krishna-kinnera-l-i-o-n-81160824/" target='_blank'><i className="fa-brands fa-linkedin-in social-icon"></i></a>
                        </span>
                    </center>
                </div><br /><br />
            </div>
        </div>
    );
}