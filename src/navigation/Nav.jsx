import './Nav.css';
import logo from '../assets/Logo.png';
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Navbar">
      <Link to="/">
        <img id="logo" src={logo} onClick={scrollToTop} alt="Logo" />
      </Link>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger menu icon */}
      </button>
      <span className={`Home ${isMenuOpen ? 'open' : ''}`}>
        <button className="menu-close" onClick={toggleMenu}>
          &times; {/* Close menu icon */}
        </button>
        <div className="dropdown">
          <button className="dropbtn">Trainings <span className='down_triangle'>&#9660;</span></button>
          <div className="dropdown-content">
            <a href="#" className="option">Python Trainings <span>&#9654;</span></a>
            <div className="side-listings">
              <ul>
                <Link to="/python_training_in_banglore" className='drop' onClick={scrollToTop}><li>In Banglore </li></Link>
                <Link to="/python_training_in_hyderabad" className='drop' onClick={scrollToTop}><li>In Hyderabad</li></Link>
                <Link to="/python_training_in_Vijayawada" className='drop' onClick={scrollToTop}><li>In Vijayawada</li></Link>
              </ul>
            </div>
            <a href="#" className="option">Python full stack <span>&#9654;</span></a>
            <div className="side-listings">
              <ul>
                <Link to="/python-full-stack-developer-in-banglore" className='drop' onClick={scrollToTop}><li>In Banglore</li></Link>
                <Link to="/python-full-stack-developer-in-hyderabad" className='drop' onClick={scrollToTop}><li>In Hyderabad</li></Link>
                <Link to="/python-full-stack-developer-in-vijayawada" className='drop' onClick={scrollToTop}><li>In Vijayawada</li></Link>
              </ul>
            </div>
            <a href="#" className="option">Java Training <span>&#9654;</span></a>
            <div className="side-listings">
              <ul>
                <Link to="/java-training-in-banglore" className='drop' onClick={scrollToTop}><li>In Banglore</li></Link>
                <Link to="/java-training-in-hyderabad" className='drop' onClick={scrollToTop}><li>In Hyderabad</li></Link>
                <Link to="/java-training-in-vijayawada" className='drop' onClick={scrollToTop}><li>In Vijayawada</li></Link>
              </ul>
            </div>
            <a href="#" className="option">Java full stack training <span>&#9654;</span> </a>
            <div className="side-listings">
              <ul>
                <Link to="/java-full-stack-training-in-banglore" className='drop' onClick={scrollToTop}><li>In Banglore</li></Link>
                <Link to="/java-full-stack-training-in-hyderabad" className='drop' onClick={scrollToTop}><li>In Hyderabad</li></Link>
                <Link to="/java-full-stack-training-in-vijayawada" className='drop' onClick={scrollToTop}><li>In Vijayawada</li></Link>
              </ul>
            </div>
            <a href="#" className="option">Software Testing <span>&#9654;</span> </a>
            <div className="side-listings">
              <ul>
                <Link to="/Software-testing-in-banglore" className='drop' onClick={scrollToTop}><li>In Banglore</li></Link>
                <Link to="/Software-testing-in-hyderabad" className='drop' onClick={scrollToTop}><li>In Hyderabad</li></Link>
                <Link to="/Software-testing-in-vijayawada" className='drop' onClick={scrollToTop}><li>In Vijayawada</li></Link>
              </ul>
            </div>
            <a href="#" className="option">Data science training <span>&#9654;</span> </a>
            <div className="side-listings">
              <ul>
                <Link to="/data-science-in-hyderabad" className='drop' onClick={scrollToTop}><li>In Hyderabad</li></Link>
                <Link to="/data-science-in-vijayawada" className='drop' onClick={scrollToTop}><li>In Vijayawada</li></Link>
              </ul>
            </div>
            <a href="#" className="option"> Machine learning <span>&#9654;</span></a>
            <div className="side-listings">
              <ul>
                <Link to="/machine-learning-in-hyderabad" className='drop' onClick={scrollToTop}><li>In Hyderabad</li></Link>
                <Link to="/machine-learning-in-vijayawada" className='drop' onClick={scrollToTop}><li>In Vijayawada</li></Link>
              </ul>
            </div>
            <Link to="/react-js-in-vijayawada" className="option"> React JS training in Vijayawada </Link>
            <Link to="/data-structures-and-algorithms-in-vijayawada" className="option">Data structures training in Vijayawada</Link>
            <Link to="/C-programming-in-vijayawada" className="option">C programming in Vijayawada</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Resources <span className='down_triangle'>&#9660;</span></button>
          <div className="dropdown-content">
          <Link to="/Blog" className="option" onClick={scrollToTop}>Blog </Link>
            <a href="#" className="option">Guides </a>
            <a href="#" className="option">Syllabus <span>&#9654;</span></a>
            <div className="side-listings">
              <ul>
                <Link to="./java_course_page" className='drop'><li>Java Syllabus</li></Link>
                <Link to="./ds_course_page" className='drop'><li>Data structures</li></Link>
                <Link to="./python_course_page" className='drop'><li>Python syllabus</li></Link>
                <Link to="./react_course_page" className='drop'><li>React JS syllabus</li></Link>
                <Link to="./clanguage_course_page" className='drop'><li>C language syllabus</li></Link>
                <Link to="./Data_science_course_page" className='drop'><li>Data science syllabus</li></Link>
                <Link to="./Java_fullstack_course_page" className='drop'><li>Java full stack syllabus</li></Link>
                <Link to="./Software_testing_course_page" className='drop'><li>Software Testing Syllabus</li></Link>
                <Link to="./Python_fullstack_course_page" className='drop'><li>Python Full Stack Syllabus</li></Link>
                <Link to="./machine_learning_course_page" className='drop'><li>Machine learning syllabus</li></Link>
              </ul>
            </div>
            <a href="#" className="option">Project ideas <span>&#9654;</span></a>
            <div className="side-listings">
              <ul>
                <Link to="./java_projects" className='drop'><li>Java Projects</li></Link>
                <Link to="./python-projects" className='drop'><li>Python Projects</li></Link>
                <Link to="./react-js-projects" className='drop'><li>React JS Projects</li></Link>
                <Link to="./react_course_page" className='drop'><li>React JS syllabus</li></Link>
                <Link to="./clanguage_course_page" className='drop'><li>C language syllabus</li></Link>
                <Link to="./Data_science_course_page" className='drop'><li>Data science syllabus</li></Link>
                <Link to="./Java_fullstack_course_page" className='drop'><li>Java full stack syllabus</li></Link>
                <Link to="./Software_testing_course_page" className='drop'><li>Software Testing Syllabus</li></Link>
                <Link to="./Python_fullstack_course_page" className='drop'><li>Python Full Stack Syllabus</li></Link>
                <Link to="./machine_learning_course_page" className='drop'><li>Machine learning syllabus</li></Link>
              </ul>
            </div>
          </div>
        </div>

        {/* <Link className="dropbtn" to="/placements" onClick={scrollToTop}>Placements</Link> */}
        {/* <Link  to="/placements" onClick={scrollToTop}>Placements</Link> */}
        <Link to="/placements"> <button className="dropbtn">Placements</button></Link>

        <div className="dropdown">
          <button className="dropbtn">About <span className='down_triangle'>&#9660;</span></button>
          <div className="dropdown-content">
            <Link to="/about" className="option" onClick={scrollToTop}>Team </Link>
            <Link to="/gallery" className="option" onClick={scrollToTop}>Gallery</Link>
            <Link to="/internship_page" className="option" onClick={scrollToTop}>Internships</Link>
            <Link to="/job_accelerator_program" className="option" onClick={scrollToTop}>Job Accelerator Program</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Campuses <span className='down_triangle'>&#9660;</span></button>
          <div className="dropdown-content">
            <Link to="/vijayawada_campus" className="option" onClick={scrollToTop}>Vijayawada </Link>
            <Link to="/hyderabad_campus" className="option" onClick={scrollToTop}>Hyderabad</Link>
            <Link to="/bangalore_campus" className="option" onClick={scrollToTop}>Banglore</Link>
          </div>
        </div>
        <Link to="/contact"> <button className="dropbtn">Contact</button></Link>
      </span>
    </div>
  );
}
