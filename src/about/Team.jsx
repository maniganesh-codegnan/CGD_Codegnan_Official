import "./about.css";
import ceo from "/members/sairam-sir.webp";
import saketh from "/members/saketh.webp";
import saikiran from "/members/sai-kiran.webp";
import kishor from "/members/Kishor-Kumar-java.webp";
import sivaRam from "/members/shiva-ram-teja.webp";
import kowshik from "/members/Kowshik.webp";
import jitendra from "/members/Jitendra.webp";
import sudheer from "/members/sudheer-java-mentor.webp";
import subbu from "/members/subbu-BDE.webp";
import saiVardhan from "/members/sai-vardhan.webp";
import mallikharjuna from "/members/mallikharjuna.png";
import samuel from "/members/samuel.png";
import bhemesh from "/members/bhemesh.png";
import raghava from "/members/raghava.png";
import prasanna from "/members/prasanna.png";
import ganesh from "/members/ganesh.png";
import ankit from "/members/ankit.png";
import ambica from "/members/ambica.png";
import pooja from "/members/pooja.png";
import babu from "/members/babu.png";
import venkatadatta from "/members/venkatadatta.png";

import { Helmet } from "react-helmet";

export default function About() {
  return (
    <div className="team_about">
      <Helmet>
        <title>Our Team Members at codegnan </title>
        <meta
          name="description"
          content="Meet the experts, trainers, founders, and mentors behind codegnan. "
        />
      </Helmet>
      <center>
        <h1>Our Team Members at codegnan</h1>
      </center>
      <div className="ceo">
        <div className="ceo_img">
          <img src={ceo} alt="Uppugundla Sairam" />
          <br />
          <center>
            <a href="/Sairam-CEO">
              <span style={{ fontSize: "1.5rem" }}>Uppugundla Sairam</span>
            </a>
            <br />
            <br />
            <h4>Founder & CEO</h4>
            <span>
              <a
                href="https://www.linkedin.com/in/sairam-uppugundla/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
              <i className="fa-brands fa-twitter social-icon"></i>
              <i className="fa-brands fa-instagram social-icon"></i>
              <i className="fa-brands fa-telegram social-icon"></i>
            </span>
          </center>
        </div>
        <br />
        <br />
        <div className="ceo_info">
          <a href="/Sairam-CEO">
            Uppugundla Sairam{" "}
            <span style={{ color: "blue" }}> (Founder & CEO ) </span>
          </a>
          <br />
          <br />
          <br />
          <span style={{ fontSize: "22px", textAlign: "left", color: "gray" }}>
            A tech expert with 10 years of industry experience and 360-degree
            expertise in Python, Data Analysis, Big Data, Machine Learning, and
            NLP. Also serves as a Data Science Consultant for the Andhra Pradesh
            State Skill Development Corporation (APSSDC) and a BOS member for
            P.B. Siddhartha College of Arts and Sciences, Vijayawada, and KITS
            Warangal (M.Tech in Data Science).
          </span>
          <br />
          <br />
          <span style={{ fontSize: "22px", textAlign: "left", color: "grey" }}>
            Highly regarded for his dedication to helping others, he believes in
            a practical approach to solving real-world industrial problems,
            which enables students to reach their full potential and aspire to
            greater heights. Advocating for problem-based teaching pedagogies,
            he left his job as a data engineer in Malaysia to return to the
            newly formed state, aiming to bridge the gap between students and
            the industry.
          </span>
          <br />
          <br />
        </div>
      </div>
      <div className="codegnan_members">
        <div className="members_div">
          <center>
            <img src={saketh} alt="Kallepu Saketh Reddy" />
            <br />
            <br />
            <a href="/saketh-CoFounder">Kallepu Saketh Reddy</a>
            <br />
            <br />
            <p>Co-Founder and Chief Management Officer </p>
            <br />
            <span>
              <a
                href="https://www.linkedin.com/in/saketh-codegnan/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>
        <div className="members_div">
          <center>
            <img src={saikiran} alt="Saikiran Tarigopula" />
            <br />
            <br />
            <a href="/saikiran-CoFounder">Saikiran Tarigopula</a>
            <br />
            <br />
            <p>Co-Founder and Chief Operating Officer </p>
            <br />
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
        <div className="members_div">
          <center>
            <img src={kishor} alt="Kishor Kumar" />
            <br />
            <br />
            <a href="/kishor-kumar">Kishor Kumar</a>
            <br />
            <br />
            <p>Senior Full Stack Corporate Trainer </p>
            <br />
            <span>
              <a href="https://www.linkedin.com/in/kishorgn/" target="_blank">
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>
        <div className="members_div">
          <center>
            <img src={sivaRam} alt="Ravi Siva Ram Teja" />
            <br />
            <br />
            <a href="/siva-ram">Ravi Siva Ram Teja</a>
            <br />
            <br />
            <p>MERN Stack Developer & Mentor </p>
            <br />
            <span>
              <a
                href="https://www.linkedin.com/in/ravi-siva-ram-teja-nagulavancha-053199253/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>
      </div>
      <div className="codegnan_members">
        <div className="members_div">
          <center>
            <img src={kowshik} alt="Kowshik Chilamkurthy" />
            <br />
            <br />
            <a href="/kowshik">Kowshik Chilamkurthy</a>
            <br />
            <br />
            <p>Lead AI & Product Design Head IIT-Madras </p>
            <br />
            <span>
              <a
                href="https://www.linkedin.com/in/kowshik-chilamkurthy-67a501113/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>
        <div className="members_div">
          <center>
            <img src={jitendra} alt="Jitendra Chautharia" />
            <br />
            <br />
            <a href="/jitendra">Jitendra Chautharia</a>
            <br />
            <br />
            <p>AI Engineer and Mentor, IIT-Jodhpur </p>
            <br />
            <span>
              <a href="https://www.linkedin.com/in/jiten15/" target="_blank">
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>
        <div className="members_div">
          <center>
            <img src={sudheer} alt="Sudheer" />
            <br />
            <br />
            <a href="/sudheer">Sudheer </a>
            <br />
            <br />
            <p>Java Full Stack Developer & Mentor & Trainer </p>
            <br />
            <span>
              <a href="https://www.linkedin.com/in/" target="_blank">
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>
        <div className="members_div">
          <center>
            <img src={subbu} alt="Subramanyam" />
            <br />
            <br />
            <a href="/subramanyam">D. Subramanyam</a>
            <br />
            <br />
            <p>Business Development Manager</p>
            <br />
            <span>
              <a
                href="https://www.linkedin.com/in/subbu-devalla-021806222/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>
      </div>
      <div className="codegnan_members">
        <div className="members_div">
          <center>
            <img src={saiVardhan} alt="Sai Vardhan" />
            <br />
            <br />
            <a href="/sai-vardhan">T. Venkata Sai Vardhan</a>
            <br />
            <br />
            <p>Python FullStack Developer & Trainer </p>
            <br />
            <span>
              <a
                href="https://www.linkedin.com/in/sai-vardhan-thimmisetty-778389186/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>
        <div className="members_div">
          <center>
            <img
              src={mallikharjuna}
              alt="Mallikharjuna"
              style={{ width: "19rem", position: "relative", left: "-1rem" }}
            />
            <br />
            <br />
            <a href="/mallikharjuna">K. Mallikharjuna</a>
            <br />
            <br />
            <p>Java FullStack Developer & Trainer </p>
            <br />
            <span>
              <a
                href="https://www.linkedin.com/in/mallikharjuna-kollipati-533aa5315/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>
        <div className="members_div">
          <center>
            <img src={samuel} alt="Samuel Photo" />
            <br />
            <br />
            <a href="/samuel">Ch. Samuel</a>
            <br />
            <br />
            <p>Django Developer & Python Full Stack Mentor </p>
            <br />
            <span>
              <a
                href="https://www.linkedin.com/in/samuel-chitturi-4771081b6/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>
        <div className="members_div">
          <center>
            <img src={bhemesh} alt="bhemesh" />
            <br />
            <br />
            <a href="/bhemesh">Bhemesh</a>
            <br />
            <br />
            <p>Java FullStack Developer & Mentor</p>
            <br />
            <span>
              <a href="https://www.linkedin.com/in/" target="_blank">
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>
      </div>
      <div className="codegnan_members">
        <div className="members_div">
          <center>
            <img
              src={raghava}
              alt="raghava"
              style={{ width: "19rem", position: "relative", left: "-1rem" }}
            />
            <br />
            <br />
            <a href="/raghava">K. Raghava Krishna</a>
            <br />
            <br />
            <p>Head of Placements</p>
            <br />
            <span>
              <a
                href="https://www.linkedin.com/in/raghava-krishna-kinnera-l-i-o-n-81160824/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>
        <div className="members_div">
          <center>
            <img
              src={prasanna}
              alt="prasanna"
              style={{ width: "19rem", position: "relative", left: "-1rem" }}
            />
            <br />
            <br />
            <a href="/prasanna">Prasanna Vatturi</a>
            <br />
            <br />
            <p>Aptitude Trainer</p>
            <br />
            <span>
              <a
                href="https://www.linkedin.com/in/prasanna-vatturi-05b87a29b/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>
        <div className="members_div">
          <center>
            <img
              src={ganesh}
              alt="ganesh"
              style={{ width: "19rem", position: "relative", left: "-1rem" }}
            />
            <br />
            <br />
            <a href="/ganesh">Ganesh</a>
            <br />
            <br />
            <p>Front_End React Developer & Mentor</p>
            <br />
            <span>
              <a
                href="https://www.linkedin.com/in/mani-ganesh-n-0082a6335/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>

        <div className="members_div">
          <center>
            <img
              src={ankit}
              alt="ankit"
              style={{ width: "19rem", position: "relative", left: "-1rem" }}
            />
            <br />
            <br />
            <a href="/ankit">Ankit</a>
            <br />
            <br />
            <p>Front_end Developer & Mentor</p>
            <br />
            <span>
              <a href="https://www.linkedin.com/in/ankit7rma/" target="_blank">
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>
      </div>
      <div className="codegnan_members">
        <div className="members_div">
          <center>
            <img
              src={ambica}
              alt="ambica"
              style={{ width: "19rem", position: "relative", left: "-1rem" }}
            />
            <br />
            <br />
            <a href="/ambica">Ambica</a>
            <br />
            <br />
            <p>Front End Developer and Trainer </p>
            <br />
            <span>
              <a
                href="https://www.linkedin.com/in/ambica-kiranmayee-bellamkonda-203861200//"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>
        <div className="members_div">
          <center>
            <img
              src={pooja}
              alt="pooja"
              style={{ width: "19rem", position: "relative", left: "-1rem" }}
            />
            <br />
            <br />
            <a href="/pooja">Pooja</a>
            <br />
            <br />
            <p>Python fullstack developer and Trainer</p>
            <br />
            <span>
              <a
                href="https://www.linkedin.com/in/pooja-chinthakayala-536634201/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>
        <div className="members_div">
          <center>
            <img
              src={venkatadatta}
              alt="venkatadatta"
              style={{ width: "19rem", position: "relative", left: "-1rem" }}
            />
            <br />
            <br />
            <a href="/venkatadatta">Venkata datta</a>
            <br />
            <br />
            <p>Python Full stack Trainer</p>
            <br />
            <span>
              <a
                href="https://www.linkedin.com/in/venkatadatta-m//"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>
        <div className="members_div">
          <center>
            <img
              src={babu}
              alt="babu"
              style={{ width: "19rem", position: "relative", left: "-1rem" }}
            />
            <br />
            <br />
            <a href="/babu">Babu</a>
            <br />
            <br />
            <p>Java full stack Trainer</p>
            <br />
            <span>
              <a
                href="https://www.linkedin.com/in/ganesh-babu-b87021274/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in social-icon"></i>
              </a>
            </span>
          </center>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
