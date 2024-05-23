import './Nav.css';
import logo from '../assets/Logo.png';
import {Link } from "react-router-dom";

export default function Nav() {
  const scrollToTop = () => {
    window.scrollTo(0,0);
  };
  return (
    <div  className="Navbar">
      <Link to="/"> 
      <img id="logo" src={logo} onClick={scrollToTop} alt="Logo" />
      </Link>
      
      <span className='Home'>

        <div className="dropdown">
          <button className="dropbtn">Trainings <span className='down_triangle'>&#9660;</span></button>
          <div className="dropdown-content">
            <a href="#" className="option">Python Trainings <span>&#9654;</span></a>
            <div className="side-listings">
              <ul>
                <Link to="/python_training_in_banglore" onClick={scrollToTop}><li>In Banglore </li></Link>
                <Link to="/python_training_in_hyderabad" onClick={scrollToTop}><li>In Hyderabad</li></Link>
                <Link to="/python_training_in_Vijayawada" onClick={scrollToTop} ><li>In Vijayawada</li></Link>
                
                
              </ul>
            </div>
            <a href="#" className="option">Python full stack <span>&#9654;</span></a>
            <div className="side-listings">
              <ul>
              <Link to="/python-full-stack-developer-in-banglore" onClick={scrollToTop}><li>In Banglore</li></Link>
              <Link to="/python-full-stack-developer-in-hyderabad" onClick={scrollToTop}><li>In Hyderabad</li></Link>
              <Link to="/python-full-stack-developer-in-vijayawada" onClick={scrollToTop}> <li>In Vijayawada</li></Link>
             
              </ul>
            </div>
            <a href="#" className="option">Java Training  <span>&#9654;</span></a>
            <div className="side-listings">
              <ul>
              <Link to="/java-training-in-banglore" onClick={scrollToTop}><li>In Banglore</li></Link>
              <Link to="/java-training-in-hyderabad" onClick={scrollToTop}><li>In Hyderabad</li></Link>
              <Link to="/java-training-in-vijayawada" onClick={scrollToTop}><li>In Vijayawada</li></Link>
              </ul>
            </div>
            <a href="#" className="option">Java full stack training <span>&#9654;</span> </a>
            <div className="side-listings">
              <ul>
              <Link to="/java-full-stack-training-in-banglore" onClick={scrollToTop}><li>In Banglore</li></Link>
              <Link to="/java-full-stack-training-in-hyderabad" onClick={scrollToTop}><li>In Hyderabad</li></Link>
              <Link to="/java-full-stack-training-in-vijayawada" onClick={scrollToTop}><li>In Vijayawada</li></Link>
              </ul>
            </div>
            <a href="#" className="option">Software Testing <span>&#9654;</span> </a>
            <div className="side-listings"> 
              <ul>
              <Link to="/Software-testing-in-banglore" onClick={scrollToTop}><li>In Banglore</li></Link>
              <Link to="/Software-testing-in-hyderabad" onClick={scrollToTop}><li>In Hyderabad</li></Link>
              <Link to="/Software-testing-in-vijayawada" onClick={scrollToTop}><li>In Vijayawada</li></Link>
              </ul>
            </div>
            <a href="#" className="option">Data science training <span>&#9654;</span> </a>
            <div className="side-listings">
            <ul>
              <Link to="/data-science-in-hyderabad" onClick={scrollToTop}><li>In Hyderabad</li></Link>
              <Link to="/data-science-in-vijayawada" onClick={scrollToTop}> <li>In Vijayawada</li></Link>
              </ul>
            </div>
            <a href="#" className="option"> Machine learning  <span>&#9654;</span></a>
            <div className="side-listings">
            <ul>
              <Link to="/machine-learning-in-hyderabad" onClick={scrollToTop}><li>In Hyderabad</li></Link>
              <Link to="/machine-learning-in-vijayawada" onClick={scrollToTop}> <li>In Vijayawada</li></Link>
              </ul>
            </div>
            <Link to="/react-js-in-vijayawada" className="option"> React JS training in Vijayawada </Link>
            <div className="side-listings">
              <ul>

              </ul>
            </div>
            <Link to="/data-structures-and-algorithms-in-vijayawada" className="option">Data structures training in Vijayawada</Link>
            <div className="side-listings">
              <ul>

              </ul>
            </div>
            <Link to="/C-programming-in-vijayawada" className="option">C programming in Vijayawada</Link>
            <div className="side-listings">
              <ul>
              </ul>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Resourses <span className='down_triangle'>&#9660;</span></button>
          <div className="dropdown-content">
            <a href="#" className="option">Guides </a>
            <div className="side-listings">
              <ul>
              </ul>
            </div>
            <a href="#" className="option">Syllabus <span>&#9654;</span></a>
            <div className="side-listings">
              {/* <ul>
                <Link to='/java_course_page'><li>Java Syllabus</li></Link>
              
                <a href="./ds_course_page"><li>Data structures</li></a>
                <li>Python syllabus</li>
                <li>React JS syllabus</li>
                <li>C language syllabus</li>
                <li>Data science syllabus</li>
                <li>Java full stack syllabus</li>
              </ul> */}
                            <ul>
                <Link to="./java_course_page"><li>Java Syllabus</li></Link>
                <Link to="./ds_course_page"><li>Data structures</li></Link>
                <Link to="./python_course_page"><li>Python syllabus</li></Link>
                <Link to="./react_course_page"><li>React JS syllabus</li></Link>
                <Link to="./clanguage_course_page"><li>C language syllabus</li></Link>
                <Link to="./Data_science_course_page"><li>Data science syllabus</li></Link>
                <Link to="./Java_fullstack_course_page"><li>Java full stack syllabus</li></Link>
                <Link to="./Software_testing_course_page"><li>Software Testing Syllabus</li></Link>
                <Link to="./Python_fullstack_course_page"><li>Python Full Stack Syllabus</li></Link>
                <Link to="./machine_learning_course_page"><li>Machine learning syllabus</li></Link>
              </ul>
            </div>
          </div>
        </div>

        <Link className="dropbtn" to="/placements" onClick={scrollToTop}>Placements</Link>

        <div className="dropdown">
          <button className="dropbtn">About <span className='down_triangle'>&#9660;</span></button>
          <div className="dropdown-content">
            <Link to="/about" className="option" onClick={scrollToTop}>Team </Link>
            <Link to="/gallery" className="option" onClick={scrollToTop}>Gallery</Link>
            <Link to="/internship_page" className="option">Internships</Link>
            <a href="#" className="option">Job Accelerator Program</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Campuses <span className='down_triangle'>&#9660;</span></button>
          <div className="dropdown-content">
            <Link to="/vijayawada_campus" className="option" onClick={scrollToTop}>Vijayawada </Link>
            <Link to ="/hyderabad_campus" className="option" onClick={scrollToTop}>Hyderabad</Link>
            <Link to ="/bangalore_campus" className="option" onClick={scrollToTop}>Banglore</Link>
          </div>
        </div>
        <Link to="/contact"> <button className="dropbtn">Contact</button></Link>
       

      </span>

    </div>

  );
}




