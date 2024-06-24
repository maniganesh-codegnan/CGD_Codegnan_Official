import './Nav.css';
import logo from '../assets/Logo.png';
import { Link } from "react-router-dom";
import { useState } from 'react';
// import Course_template from "./course_template/Course_template.jsx";

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
                <Link to="/python-training-in-banglore" className='drop' onClick={scrollToTop}><li>In Banglore </li></Link>
                <Link to="/python-training-course-in-hyderabad" className='drop' onClick={scrollToTop}><li>In Hyderabad</li></Link>
                <Link to="/python-training-in-vijayawada" className='drop' onClick={scrollToTop}><li>In Vijayawada</li></Link>
              </ul>
            </div>
            <a href="#" className="option">Python full stack <span>&#9654;</span></a>
            <div className="side-listings">
              <ul>
                <Link to="/python-full-stack-developer-course-in-banglore" className='drop' onClick={scrollToTop}><li>In Banglore</li></Link>
                <Link to="/python-full-stack-developer-course-in-hyderabad" className='drop' onClick={scrollToTop}><li>In Hyderabad</li></Link>
                <Link to="/python-full-stack-developer-course-in-vijayawada" className='drop' onClick={scrollToTop}><li>In Vijayawada</li></Link>
              </ul>
            </div>
            <a href="#" className="option">Java Training <span>&#9654;</span></a>
            <div className="side-listings">
              <ul>
                <Link to="/core-java-training-course-in-bangalore" className='drop' onClick={scrollToTop}><li>In Banglore</li></Link>
                <Link to="/core-java-training-course-in-hyderabad" className='drop' onClick={scrollToTop}><li>In Hyderabad</li></Link>
                <Link to="/core-java-training-course-in-vijayawada" className='drop' onClick={scrollToTop}><li>In Vijayawada</li></Link>
              </ul>
            </div>
            <a href="#" className="option">Java full stack training <span>&#9654;</span> </a>
            <div className="side-listings">
              <ul>
                <Link to="/java-full-stack-training-course-in-bangalore" className='drop' onClick={scrollToTop}><li>In Banglore</li></Link>
                <Link to="/java-full-stack-training-course-in-hyderabad" className='drop' onClick={scrollToTop}><li>In Hyderabad</li></Link>
                <Link to="/full-stack-java-training-course-in-vijayawada" className='drop' onClick={scrollToTop}><li>In Vijayawada</li></Link>
              </ul>
            </div>
            <a href="#" className="option">Software Testing <span>&#9654;</span> </a>
            <div className="side-listings">
              <ul>
                <Link to="/software-testing-training-course-in-banglore" className='drop' onClick={scrollToTop}><li>In Banglore</li></Link>
                <Link to="/software-testing-training-course-in-hyderabad" className='drop' onClick={scrollToTop}><li>In Hyderabad</li></Link>
                <Link to="/Software-testing-training-course-in-vijayawada" className='drop' onClick={scrollToTop}><li>In Vijayawada</li></Link>
              </ul>
            </div>
            <a href="#" className="option">Data science training <span>&#9654;</span> </a>
            <div className="side-listings">
              <ul>
                <Link to="/data-science-course-training-in-hyderabad" className='drop' onClick={scrollToTop}><li>In Hyderabad</li></Link>
                <Link to="/data-science-course-training-in-vijayawada" className='drop' onClick={scrollToTop}><li>In Vijayawada</li></Link>
              </ul>
            </div>
            <a href="#" className="option"> Machine learning <span>&#9654;</span></a>
            <div className="side-listings">
              <ul>
                <Link to="/machine-learning-course-training-in-hyderabad" className='drop' onClick={scrollToTop}><li>In Hyderabad</li></Link>
                <Link to="/machine-learning-course-training-in-vijayawada" className='drop' onClick={scrollToTop}><li>In Vijayawada</li></Link>
              </ul>
            </div>
            <Link to="/react-js-training-course-in-vijayawada" className="option"> React JS training in Vijayawada </Link>
            <Link to="/data-structures-and-algorithms-training-in-vijayawada" className="option">Data structures training in Vijayawada</Link>
            <Link to="/c-programming-course-training-in-vijayawada" className="option">C programming in Vijayawada</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Resources <span className='down_triangle'>&#9660;</span></button>
          <div className="dropdown-content">
          <Link to="/Blog" className="option" onClick={scrollToTop}>Blog </Link>
            <Link to="/online-academic" className="option"  onClick={scrollToTop}>Academic </Link>
            <a href="#" className="option">Syllabus <span>&#9654;</span></a>
            <div className="side-listings">
              <ul>
                <Link to="./blog/java-course-syllabus" className='drop'><li>Java Syllabus</li></Link>
                <Link to="./blog/data-structures-and-algorithms-course-syllabus" className='drop'><li>Data structures</li></Link>
                <Link to="./blog/python-course-syllabus" className='drop'><li>Python syllabus</li></Link>
                <Link to="./blog/react-js-course-syllabus" className='drop'><li>React JS syllabus</li></Link>
                <Link to="./blog/c-language-course-syllabus" className='drop'><li>C language syllabus</li></Link>
                <Link to="./blog/data-science-course-syllabus" className='drop'><li>Data science syllabus</li></Link>
                <Link to="./blog/full-stack-java-developer-course-syllabus" className='drop'><li>Java full stack syllabus</li></Link>
                <Link to="./blog/software-testing-course-syllabus" className='drop'><li>Software Testing Syllabus</li></Link>
                <Link to="./blog/python-full-stack-developer-course-syllabus" className='drop'><li>Python Full Stack Syllabus</li></Link>
                <Link to="./blog/machine-learning-course-syllabus" className='drop'><li>Machine learning syllabus</li></Link>
              </ul>
            </div>
            <a href="#" className="option">Project ideas <span>&#9654;</span></a>
            <div className="side-listings">
              <ul>
                <Link to="./blog/java_projects" className='drop'><li>Java Projects</li></Link>
                <Link to="./blog/Python-projects" className='drop'><li>Python Projects</li></Link>
                <Link to="./blog/react-js-projects" className='drop'><li>React JS Projects</li></Link>
                <Link to="./blog/c-programming-projects" className='drop'><li>C language Projects</li></Link>
                <Link to="./blog/data-structure-and-algorithm-project-ideas" className='drop'><li>Data Structure Projects</li></Link>
                <Link to="./blog/machine-learning-projects" className='drop'><li>machine-learning-projects</li></Link>
                <Link to="./blog/software-testing-projects/" className='drop'><li>Software Testing Projects</li></Link>
              </ul>
            </div>
          </div>
        </div>

        <Link to="/placements"> <button className="dropbtn">Placements</button></Link>

        <div className="dropdown">
          <button className="dropbtn">About <span className='down_triangle'>&#9660;</span></button>
          <div className="dropdown-content">
            
            <Link to="/team" className="option" onClick={scrollToTop}>Team </Link>
            <Link to="/gallery" className="option" onClick={scrollToTop}>Gallery</Link>
            <Link to="/about" className="option" onClick={scrollToTop}>About </Link>
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
