// import './about.css';
import "./team.css";
import m2 from "/members/sai-kiran.webp";

export default function Saikiran_CoFounder() {
  // alert('Sai kiran')
  return (
    <div className="team_about">
      <br />
      <br />
      <center>{/* <h1>Our Team Members at codegnan</h1> */}</center>
      <div className="ceoo">
        <div className="ceo_info1">
          <h2>
            <span className="Linkcolor"> Saikiran Tarigopula </span>{" "}
            <span style={{ color: "blue" }}>
              (Co-Founder and Chief Management Officer){" "}
            </span>
          </h2>
          <br />
          <br />
          <br />
          <span style={{ fontSize: "19px", textAlign: "left" }}>
            {" "}
            Saikiran Tarigopula is the Chief Operating Officer at Codegnan IT
            Solutions, with a Bachelor’s in Technology specializing in
            Electrical and Electronics Engineering.
          </span>
          <br />
          <br />
          <p>
            With over 7 years of career experience, he has demonstrated
            excellence in HR management and business development. In addition,
            he brings his expertise in digital marketing to Codegnan, focusing
            on maintaining the company’s strong digital presence and reaching a
            global audience.
          </p>
          <br />

          <p>
            As the digital team leader, Saikiran Tarigopula is also responsible
            for the day-to-day operations at Codegnan.
          </p>
          <br />

          <p>
            In the past, he has achieved remarkable success while serving as a
            manager at SuBrains Solutions.
          </p>
          <br />

          <p>
            He believes in developing talent, leading teams, and fostering
            efficient departmental collaboration. He also takes an active role
            in identifying and nurturing individuals within his team who possess
            untapped potential.
          </p>
          <br />

          <h2>Education</h2>
          <br />
          <ul>
            <li>
              <i className="fa-solid fa-check-double check_double"></i>
              <a href="https://www.kluniversity.in/"> KL University, </a>
              Master’s Degree, Computational Intelligence (2015-2017).
            </li>
            <li>
              <i className="fa-solid fa-check-double check_double"></i>
              <a href="https://www.kluniversity.in/">
                {" "}
                Jyothishmathi Institute of Technological Sciences,
              </a>{" "}
              Engineers Degree, Electrical, Electronics and Communication
              Engineering (2011-2015)
            </li>
            <li>
              <i className="fa-solid fa-check-double check_double"></i> Sri
              Chaitanya Junior College, Ameenpur, Hyderabad,
              Intermediate(M.P.C)(2002-2011)
            </li>
            <li>
              <i className="fa-solid fa-check-double check_double"></i>{" "}
              St.Paul’s, High School/ Secondary School (2000- 2009)
            </li>
          </ul>
          <br />

          <h2>Work Experience</h2>
          <br />
          <ul>
            <li>
              <i className="fa-solid fa-check-double check_double"></i> Chief
              Management Officer and Data Science Mentor a{" "}
              <a href="codegnana.com"> Codegnan IT Solutions</a> Vijayawada,
              Andhra Pradesh, India (March 2020- Present){" "}
            </li>

            <li>
              <i className="fa-solid fa-check-double check_double"></i> Data
              Science Consultant at{" "}
              <a href="https://www.apssdc.in/home/">
                {" "}
                Andhra Pradesh State Skill Development Corporation (APSSDC),{" "}
              </a>{" "}
              Vijayawada, Andhra Pradesh, India (Sep 2019 - Present)
            </li>

            <li>
              <i className="fa-solid fa-check-double check_double"></i> Data
              Engineer & Chief Operating Officer at SuBrains Solutions Private
              Limited, Vijayawada Area, India (Aug 2016 - Jun 2019)
            </li>
          </ul>
        </div>
        <div className="ceo_img1">
          <img src={m2} />
          <br />
          <center>
            <span>
              <a
                href="https://www.linkedin.com/in/saikiran-tarigopula-222564136/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>
        <br />
        <br />
      </div>

      {/* <div className='codegnan_members'>
                <div className='members_div'>
                    <center>
                    <img src={m1} alt="" />
                    <a href="">Kallepu Saketh Reddy</a>
                    <br /><br />
                    <p>Co-Founder and Chief Management Officer </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={m2} alt="" />
                    <a href="">Saikiran Tarigopula</a>
                    <br /><br />
                    <p>Co-Founder and Chief Operating Officer </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={m3} alt="" />
                    <a href="">Eshwar Gogineni</a>
                    <br /><br />
                    <p>Co-Founder & Chief Information Officer </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={m4} alt="" />
                    <a href="">Kishor Kumar</a>
                    <br /><br />
                    <p>Senior Full Stack Corporate Trainer </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
            </div>
            <div className='codegnan_members'>
                <div className='members_div'>
                    <center>
                    <img src={m5} alt="" />
                    <a href="">Ravi Siava Ram Teja</a>
                    <br /><br />
                    <p>MERN Stack Developer & Mentor </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={m6} alt="" />
                    <a href="">Manohar Chary Vadla</a>
                    <br /><br />
                    <p>Data Scientist & Mentor </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={m7} alt="" />
                    <a href="">Kowshik Chilamkurthy</a>
                    <br /><br />
                    <p>Lead AI & Product Design Head IIT-Madras </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
                <div className='members_div'>
                    <center>
                    <img src={m8} alt="" />
                    <a href="">Jitendra Chautharia</a>
                    <br /><br />
                    <p>AI Engineer and Mentor, IIT-Jodhpur </p>
                    <br />
                    <i className="fa-brands fa-linkedin-in social-icon"></i>
                    </center>
                </div>
            </div> */}
    </div>
  );
}
