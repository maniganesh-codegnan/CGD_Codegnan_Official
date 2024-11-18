// import './about.css';
import "./team.css";
import saketh from "/members/saketh.webp";

export default function Saketh_CoFounder() {
  // alert('Saketh')
  return (
    <div className="team_about">
      <br />
      <br />
      <center>
        <h1>Our Team Management at Codegnan</h1>
      </center>
      <div className="ceoo">
        <div className="ceo_info1">
          <h2>
            <span className="Linkcolor"> Saketh Kallepu </span>{" "}
            <span style={{ color: "blue" }}>
              {" "}
              (Co-Founder and Chief Management Officer){" "}
            </span>{" "}
          </h2>
          <br />
          <br />

          <br />
          <span style={{ fontSize: "19px", textAlign: "left" }}>
            Saketh Kallepu is the Chief Management Officer and a Data Science
            Mentor with a Masters degree in Computational Intelligence.
          </span>
          <br />
          <br />

          <p>
            {" "}
            He has over 7 years of experience as a data science consultant and
            mentor and is a Microsoft Certified Trainer.
          </p>
          <br />

          <p>
            {" "}
            Saketh Kallepu is a data science professional in the IT field with a
            background in Computational Intelligence. With over 7 years of
            experience, he is an exceptional Data Science Mentor and trainer.
          </p>
          <br />

          <p>
            {" "}
            Saketh Kallepu believes,{" "}
            <b>“Don’t work hard, just work with heart.</b>” With this belief, he
            joined Codegnan as Co-Founder, mentor, and trainer to transform the
            educational platform and create a new technical arena for passionate
            learners.
          </p>
          <br />

          <p>
            {" "}
            He is proficient in various technical skills, including Seaborn,
            Flask, Pandas, Plotly, Matplotlib, TensorFlow, Computer Vision,
            Machine Learning, Data Analysis, Python, and more.
          </p>
          <br />

          <p>
            {" "}
            Apart from being a co-founder at Codegnan, he is also a{" "}
            <p> Data Science</p>
            Consultant at the Andhra Pradesh State Skill Development Corporation
            (APSSDC), where he continues to expand his expertise in this
            technical field.
          </p>
          <br />

          <p>
            {" "}
            Previously, he worked as a{" "}
            <b>Data Engineer and Chief Operating Officer </b>
            at SuBrains Solutions Private Limited, the first technology startup
            in India focused on E-learning with the help of AI.
          </p>
          <br />

          <p>
            {" "}
            During his college days, Sairam Uppugundla was actively involved and
            even held the position of Head Volunteer for the “JMTEK” Technical
            Fest. He demonstrated his dedication to technology and leadership
            from an early stage.
          </p>
          <br />
          <br />
          <br />

          <h2>Education</h2>
          <br />
          <ul>
            <li>
              <i className="fa-solid fa-check-double check_double"></i>
              <a href="https://www.kluniversity.in/"> KL University, </a>
              Master’s Degree in Computational Intelligence (2015-2017).
            </li>
            <li>
              <i className="fa-solid fa-check-double check_double"></i>
              <a href="https://www.kluniversity.in/">
                {" "}
                Jyothishmathi Institute of Technological Sciences,
              </a>{" "}
              Bachelor Degree in Electrical, Electronics, and Communication
              Engineering (2011-2015)
            </li>
            <li>
              <i className="fa-solid fa-check-double check_double"></i> Sri
              Chaitanya Junior College, Ameenpur, Hyderabad Intermediate
              (M.P.C.) (2002-2011)
            </li>
            <li>
              <i className="fa-solid fa-check-double check_double"></i>{" "}
              St.Paul’s, High School / Secondary School (2000- 2009)
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
          <img src={saketh} />
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
    </div>
  );
}
