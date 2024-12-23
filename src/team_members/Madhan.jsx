// import './about.css';
import "./team.css";
import subbu from "/members/subbu-BDE.webp";

export default function Subramanyam() {
  return (
    <div className="team_about">
      <br />
      <br />
      <center>{/* <h1>Our Team Members at codegnan</h1> */}</center>
      <div className="ceoo">
        <div className="ceo_info1">
          <h2>
            <span className="Linkcolor">Madhan, </span> Senior Full Stack
            Corporate Trainer at codegnan{" "}
          </h2>
          {/* <img src={style} alt="" /> */}
          <br />
          <p style={{ textAlign: "justify" }}>FULL STACK CORPORATE TRAINER</p>
          <br />
          <span style={{ fontSize: "19px", textAlign: "left" }}>
            Kishor Kumar is a freelance corporate trainer having 20+ years of
            expertise in corporate training. He hones his expertise in Java,
            having trained in many corporates, including JP Morgan Chase, TCS,
            HSBC, DBS, and many more.
          </span>
          <br />
          <br />
          <p>
            Kishor Kumar is a <b>Senior Full Stack Corporate Trainer</b> at
            codegnan with uninterrupted corporate trainer experience for over
            20+ years.
          </p>

          <p>
            He was a freelance corporate trainer for many tech companies like JP
            Morgan Chase, TCS, HSBC, DBS Bank, Guardian Life, UST Global, HCL,
            Capgemini, Cognizant, DXC, CSC, and Covalense Digital.
          </p>

          <p>
            His continuous journey as a corporate trainer shows his interest and
            the technical skills he has in this IT technology.
          </p>

          <p>
            Predominantly, he has expertise in Java SE, Java EE, Hibernate,
            Spring Core, Spring AOP, Spring Boot, Spring RestFul APIs, Oracle
            Database, MySQL Database, and MongoDB.
          </p>
          <br />
          <br />

          <h2>Work Experience</h2>
          <br />
          <ul>
            <li>
              <i className="fa-solid fa-check-double check_double"></i> Business
              Development Manager at codegnan
            </li>
            <li>
              <i className="fa-solid fa-check-double check_double"></i>{" "}
              Innomatics, Team lead, Hyderabad, India
            </li>
            <li>
              <i className="fa-solid fa-check-double check_double"></i> ACCOR
              plus Sr.Employee, Hyderabad,
            </li>
            <li>
              <i className="fa-solid fa-check-double check_double"></i> TATA
              Business support services, Sr Associate Team lead, Hyderabad,
              India
            </li>
          </ul>
        </div>
        <div className="ceo_img1">
          <img src={subbu} />
          <br />
          <center>
            <span>
              <a
                href="https://www.linkedin.com/in/madhan-kumar-v-t-5aaa0415b/"
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
    </div>
  );
}
