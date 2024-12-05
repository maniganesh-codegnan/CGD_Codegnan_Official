import "./Footer.css";
import codegnanLogo from "../photos/footer/codegnan_new.png";

const Footer = () => {
  return (
    <>
      <footer className="footer footerBg">
        <div className="footer-container">
          <div className="footer-left">
            <button className="codegnanCls">
              <a href="/"><img
                src={codegnanLogo}
                alt="Codegnan Logo"
                className="footer-logo"
              /></a>
            </button>
            <br />
            <br />
            <p>
              With over two decades, we are bringing international teaching
              standards to the tech aspirants globally. Nurture your inner coder
              with us and take charge of your coding career with the top
              trending and high-paying technologies. This is the right time to
              enlighten your code “GNAN”.
            </p>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#">
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-section">
              <h4>COMPANY</h4>
              <ul>
                <li>
                  <a href="/Blog">Blogs</a>
                </li>
                <li>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <a href="/internship_page">Internships</a>
                </li>
                <li>
                  <a href="/placements">Placements</a>
                </li>
                <li>
                  <a href="#">Become a mentor</a>
                </li>
                <li>
                  <a href="#">Job acceleration program</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>OUR BRANCHES</h4>
              <p>
                <strong style={{ color: "#ffb400" }}>Vijayawada:</strong>
                <br />
                40-5-19/16, Prasad Naidu Complex,
                <br />
                P.B. Siddhartha Busstop, Moghalrajpuram,
                <br />
                Vijayawada, Andhra Pradesh, 520010.
              </p>
              <br />
              <br />
              <p>
                <strong style={{ color: "#ffb400" }}>Hyderabad:</strong>
                <br />
                Kothwal Madhava Reddy Plaza, Beside Indian Oil Petrol Bunk,
                <br />
                JNTUH Metro Station, Nizampet X Roads, Hyderabad, 500072.
              </p>
            </div>
            <div className="footer-section">
              <h4>OUR COURSES</h4>
              <ul>
                <li><a href="/python-full-stack-developer-course-in-hyderabad">Python</a></li>
                <li><a href="/java-full-stack-training-course-in-hyderabad">Java</a></li>
                <li><a href="/data-science-course-training-in-hyderabad">Data Science</a></li>
                <li><a href="/machine-learning-course-training-in-hyderabad">Machine Learning</a></li>
                <li><a href="/react-js-training-course-in-vijayawada">React JS</a></li>
                <li><a href="/data-structures-and-algorithms-training-in-vijayawada">Data Structures</a></li>
                <li><a href="/c-programming-course-training-in-vijayawada">C Programming</a></li>
                <li><a href="/software-testing-training-course-in-hyderabad">Software Testing</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>
          © Copyright 2018-2024 | Codegnan IT Solutions PVT LTD
          <br />
          Privacy policy | Terms and conditions | Refund Policy | Cancellation
          Policy
        </p>
      </div>
    </>
  );
};
export default Footer;

//=========================================================================================
// import "./Footer.css";
// import logo from "../assets/Logo2-1.png";
// // import { useState } from 'react';
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <div className="Footer">
//       <section className="elementor_selection">
//         <div className="center">
//           <div className="left">
//             <img id="logo2" src={logo} alt="Logo" />
//             <p id="main_p">
//               With ver two decades, we are bringing international teaching
//               standards to the tech aspirants globally. Nurture your inner coder
//               with us and take a charge of your coding career with the top
//               trending and high paying technologies. This is the right time to
//               enlighten your codeGNAN.
//             </p>
//             <div className="branch_details">
//               <strong id="strong">OUR BRANCHES</strong>
//               <br />
//               <br />
//               <Link to="">Vijayawada</Link>
//               <br />
//               <br />
//               <p>
//                 40-5-19/16, Prasad Naidu Complex, P.B.Siddhartha Busstop,
//                 Moghalrajpuram, Vijayawada, Andhra Pradesh, 520010.
//               </p>
//               <br />
//               <Link to="">Hyderabad</Link>
//               <br />
//               <br />
//               <p>
//                 Kothwal Madhava Reddy Plaza, Beside Indian Oil Petrol Bunk,
//                 JNTUH Metro Station, Nizampet X Roads, Hyderabad, 500072
//               </p>
//               <br />
//               <Link to="">Bengaluru</Link>
//               <br />
//               <br />
//               <p>
//                 #951, 16th Main, BTM 2nd Stage, Bengaluru, Karnataka, 560076
//               </p>
//             </div>
//           </div>
//           <div className="populated">
//             <strong id="strong">COMPANY</strong>
//             <br />
//             <br />
//             <span>
//               <Link className="foot_men" to="/Blog">
//                 Blogs
//               </Link>
//             </span>
//             <span>
//               <Link className="foot_men" to="/about-us">
//                 About us
//               </Link>
//             </span>
//             <span>
//               <Link className="foot_men" to="/internships">
//                 Internships
//               </Link>
//             </span>
//             <span>
//               <Link className="foot_men" to="/placements">
//                 Placements
//               </Link>
//             </span>
//             {/* <span><Link className="foot_men" to="#">Become a mentor</Link></span> */}
//             <span>
//               <Link className="foot_men" to="/job_accelerator_program">
//                 Job acceleration program
//               </Link>
//             </span>

//             <i className="fa-brands fa-linkedin-in social-icon"></i>
//             <i className="fa-brands fa-youtube social-icon"></i>
//             <i className="fa-brands fa-facebook social-icon"></i>
//             <i className="fa-brands fa-twitter social-icon"></i>
//             <i className="fa-brands fa-instagram social-icon"></i>
//             <i className="fa-brands fa-whatsapp social-icon"></i>
//             <i className="fa-brands fa-telegram social-icon"></i>
//           </div>
//         </div>
//       </section>
//       <br />
//       <br />
//       <section className="our_courses">
//         <div className="courses">
//           <h3>Our courses in Vijayawada</h3>
//           <br />
//           <Link to="/python-training-in-vijayawada">
//             Python Training in Vijayawada
//           </Link>
//           <br />
//           <Link to="/python-full-stack-developer-course-in-vijayawada">
//             Python full-stack course Vijayawada
//           </Link>
//           <br />
//           <Link to="/data-science-course-training-in-vijayawada">
//             Data science training in Vijayawada
//           </Link>
//           <br />
//           <Link to="/machine-learning-course-training-in-vijayawada">
//             Machine learning in Vijayawada
//           </Link>
//           <br />
//           <Link to="/react-js-training-course-in-vijayawada">
//             React JS training in Vijayawada
//           </Link>
//           <br />
//           <Link to="/data-structures-and-algorithms-training-in-vijayawada">
//             Data structures course in Vijayawada
//           </Link>
//           <br />
//           <Link to="/c-programming-course-training-in-vijayawada">
//             C programming course in Vijayawada
//           </Link>
//         </div>
//         <div className="courses">
//           <h3>Our courses in Hyderabad </h3>
//           <br />
//           <Link to="/python-training-course-in-hyderabad">
//             Python training in Hyderabad
//           </Link>
//           <br />
//           <Link to="/python-full-stack-developer-course-in-hyderabad">
//             Python full-stack training in Hyderabad
//           </Link>
//           <br />
//           <Link to="/core-java-training-course-in-hyderabad">
//             Core Java training in Hyderabad
//           </Link>
//           <br />
//           <Link to="/java-full-stack-training-course-in-hyderabad">
//             Java full-stack course in Hyderabad
//           </Link>
//           <br />
//           <Link to="/data-science-course-training-in-hyderabad">
//             Data science training in Hyderabad
//           </Link>
//           <br />
//           <Link to="/machine-learning-course-training-in-hyderabad">
//             Machine learning course in Hyderabad
//           </Link>
//           <br />
//         </div>
//         <div className="courses">
//           <h3>Our courses in Bangalore </h3>
//           <br />
//           <Link to="/python-training-in-bangalore">
//             Python training in Bangalore
//           </Link>
//           <br />
//           <Link to="/python-full-stack-developer-course-in-bangalore">
//             Python full-stack training in Bangalore
//           </Link>
//           <br />
//           <Link to="/core-java-training-course-in-bangalore">
//             Core Java training in Bangalore
//           </Link>
//           <br />
//           <Link to="/java-full-stack-training-course-in-bangalore">
//             Java full-stack course in Bangalore
//           </Link>
//           <br />
//         </div>
//       </section>
//       <br />
//       <br />
//       <div className="footer_end">
//         &copy; Copyright 2018-{new Date().getFullYear()} | Codegnan IT Solutions
//         PVT LTD
//         <br />
//         <p>
//           <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
//           <Link to="/terms-conditions">Terms and Conditions</Link> |{" "}
//           <Link to="/refund-policy">Refund Policy</Link> |{" "}
//           <Link to="/cancellation-policy">Cancellation Policy</Link>
//         </p>
//       </div>
//     </div>
//   );
// }
//==================================================================================================================================
// import "./Footer.css"
// import logo from '../assets/Logo2.png';
// import { useState } from 'react';

// export default function Footer() {
//     return (
//         <div className="Footer">
//             <section className="elementor_selection">
//                 <div className="center">
//                     <div className="left">
//                         <img id="logo2" src={logo} alt="Logo" />
//                         <p id="main_p">With ver two decades, we are bringing international teaching standards to the tech aspirants globally. Nurture your inner coder with us
//                             and take a charge of your coding carrer with the top trending and high paying technologies.THis is the right time to enloghten your code "GNAN".
//                         </p>
//                         <div className="branch_details">
//                             <strong id="strong">OUR BRANCHES</strong>
//                             <br /><br />
//                             <a href="">Vijayawada</a>
//                             <br /><br />
//                             <p>40-5-19/16,Prasad Naidu Complex , P.B.Siddhartha Busstop , Moghalrajpuram , Vijayawada , Andhra Pradesh , 520010.</p>
//                             <br />
//                             <a href="">Hyderabad</a>
//                             <br /><br />
//                             <p>Kothwal Madhava Reddy Plaza , Beside Indian Oil Petrol Bunk , JNTUH Metro Station , Nizampet X Roads, Hyderabad , 500072</p>
//                             <br />
//                             <a href="">Bengaluru</a>
//                             <br /><br />
//                             <p>#951 ,16th Main , BTM 2nd Stage , Benguluru , Karnataka , 560076</p>
//                         </div>
//                     </div>
//                     <div className="populated">
//                         <strong id="strong">COMPANY</strong><br /><br />
//                         <span><a className="foot_men" href="/Blog">Blogs</a></span>
//                         <span><a href="/about-us">About us</a></span>
//                         <span><a href="/internships">Internships</a></span>
//                         <span><a href="placements">Placements</a></span>
//                         <span>Become a mentor</span>
//                         <span><a href="/job_accelerator_program">Job acceleration program</a></span>

//                         <i className="fa-brands fa-linkedin-in social-icon"></i>
//                         <i className="fa-brands fa-youtube social-icon"></i>
//                         <i className="fa-brands fa-facebook social-icon"></i>
//                         <i className="fa-brands fa-twitter social-icon"></i>
//                         <i className="fa-brands fa-instagram social-icon"></i>
//                         <i className="fa-brands fa-whatsapp social-icon"></i>
//                         <i className="fa-brands fa-telegram social-icon"></i>
//                     </div>
//                 </div>
//             </section>
//             <br /><br />
//             <section className="our_courses">
//                 <div className="courses">
//                     <h3>Our courses in Vijayawada</h3><br />
//                     <a href="/python-training-in-vijayawada">Python Training in Vijayawada</a><br />
//                     <a href="/python-full-stack-developer-course-in-vijayawada">Python full-stack course Vijayawada</a><br />
//                     <a href="/data-science-course-training-in-vijayawada">Data science training in Vijayawada</a><br />
//                     <a href="/machine-learning-course-training-in-vijayawada">Machine learning in Vijayawada</a><br />
//                     <a href="/react-js-training-course-in-vijayawada">React JS training in Vijayawada</a><br />
//                     <a href="/data-structures-and-algorithms-training-in-vijayawada">Data structures course in Vijayawada</a><br />
//                     <a href="/c-programming-course-training-in-vijayawada">C programming course in Vijayawada</a>
//                 </div>
//                 <div className="courses">
//                     <h3>Our courses in Hyderabad </h3><br />
//                     <a href="/python-training-course-in-hyderabad">Python training in Hyderabad</a><br />
//                     <a href="/python-full-stack-developer-course-in-hyderabad">Python full-stack training in Hyderabad</a><br />
//                     <a href="/core-java-training-course-in-hyderabad">Core Java training in Hyderabad</a><br />
//                     <a href="/java-full-stack-training-course-in-hyderabad">Java full-stack course in Hyderabad</a><br />
//                     <a href="/data-science-course-training-in-hyderabad">Data science training in Hyderabad</a><br />
//                     <a href="/machine-learning-course-training-in-hyderabad">Machine learning course in Hyderabad</a><br />
//                 </div>
//                 <div className="courses">
//                     <h3>Our courses in Banglore </h3><br />
//                     <a href="/python-training-in-banglore">Python training in Banglore</a><br />
//                     <a href="/python-full-stack-developer-course-in-banglore">Python full-stack training in Banglore</a><br />
//                     <a href="/core-java-training-course-in-bangalore">Core Java training in Banglore</a><br />
//                     <a href="/java-full-stack-training-course-in-bangalore">Java full-stack course in Banglore</a><br />
//                 </div>
//             </section><br /><br />
//             <div className="footer_end">
//             &copy; Copyright 2018-{new Date().getFullYear()} | Codegnan IT Solutions PVT LTD
//             <br />
//             <p>
//             <a href="/privacy-policy">Privacy Policy</a>|<a href="/terms-conditions">Terms ans Conditions</a>|<a href="/refund-policy">Refuncd Policy</a>|<a href="/cancellation-policy">Cancellation Policy</a>
//             </p>
//             </div>
//         </div>
//     );
// }
