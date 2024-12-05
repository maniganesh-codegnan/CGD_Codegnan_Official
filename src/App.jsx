// import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Nav from "./navigation/Nav";
import Footer from "./Footer/Footer";
import Home from "./Home/Home.jsx";
import Team from "./about/Team.jsx";
import Placements from "./placements/Placements";
import Companies from "./Companies/Companies.jsx";
// import Collaboration from './Collabarations.jsx';
// import Pre from './Prefooter/Prefooter.jsx';
import Gallery from "./about/Gallery.jsx";
// import Course_template from './course_template/Course_template.jsx';
import JavaCourseSyllabus from "./course_template/Java-course-syllabus.jsx";
import About from "./about_us/about.jsx";

// import JavaCourseSyllabus from "./blog/course_template/Java-course-syllabus.jsx";
import PythonTraininginBanglore from "./Training/Python-training-in-banglore.jsx";
import PythonTrainingCourseinHyderabad from "./Training/Python-training-in-Hyderabad.jsx";
import PythonTraininginVijayawada from "./Training/Python-training-in-vijayawada.jsx";
import Python_full_stack_training_course_in_banglore from "./Training/Python-full-stack/python-full-stack-course-bangalore.jsx";
import Python_full_stack_training_course_in_hyderabad from "./Training/Python-full-stack/Python_full_stack_course_in_Hyderabad.jsx";
import Python_full_stack_training_course_in_vijayawada from "./Training/Python-full-stack/Python_full_stack_course_Vijayawada.jsx";
import Core_java_training_course_in_bangalore from "./Training/Java-training/Core_java_training_course_in_Bangalore.jsx";
import Core_java_training_course_in_hyderabad from "./Training/Java-training/Core_java_training_course_in_hyderabad.jsx";
import Core_java_training_course_in_vijayawada from "./Training/Java-training/Core_java_training_course_in_vijayawada.jsx";
import Java_full_stack_training_course_in_bangalore from "./Training/Java-full-stack/Java_full_stack_course_in_bangalore.jsx";
import Java_full_stack_training_course_in_hyderabad from "./Training/Java-full-stack/Java_full_stack_course_in_hyderabad.jsx";
import Full_stack_java_training_course_in_vijayawada from "./Training/Java-full-stack/Full_stack_java_training_course_in_vijayawada.jsx";
import Data_science_course_training_in_vijayawada from "./Training/Data-science/Data_science_course_training_in_Vijayawada.jsx";
import Data_science_course_training_in_hyderabad from "./Training/Data-science/Data_science_course_training_in_Hyderabad.jsx";
import Machine_learning_course_training_in_hyderabad from "./Training/Machine-Learning/Machine_learning_course_training_in_Hyderabad.jsx";
import Machine_learning_course_training_in_vijayawada from "./Training/Machine-Learning/Machine_learning_course_training_in_Vijayawada.jsx";
import Software_testing_training_course_in_banglore from "./Training/Software-testing/Software_testing_training_course_in_banglore.jsx";
import Software_testing_training_course_in_hyderabad from "./Training/Software-testing/Software_testing_training_course_in_hyderabad.jsx";
import Software_testing_training_course_in_vijayawada from "./Training/Software-testing/Software_testing_training_course_in_vijayawada.jsx";
import React_JS_training_course_in_vijayawada from "./Training/React_JS_training_course_in_vijayawada.jsx";
import Data_structers_and_Algorithms_training_in_vijayawada from "./Training/Data_structures_and_algorithms_training_in_vijayawada.jsx";
import C_progrmming_course_training_in_vijayawada from "./Training/C_programming_course_training_in_vijayawada.jsx";
import Vij_campus from "./campuses/vij_campuses.jsx";
import Hyd_campus from "./campuses/hyd_campuses.jsx";
import Bang_campus from "./campuses/bang_campuses.jsx";
import Contact_us from "./contact/contact_us.jsx";

// import InternsyllabusComp from './Internship/Intern_syllabus/Intern_syllabus.jsx';
// import Intern_dropdown from './Internship/Intern_dropdown/Inter_dropdown.jsx';
import Intern_Page from "./Internship/Intership_page.jsx";

import DataStructuresAndAlgorithmsCourseSyllabus from "./course_template/data-structures-and-algorithms-course-syllabus.jsx";
import PythonCourseSyllabus from "./course_template/python-course-syllabus.jsx";
import ReactJsCourseSyllabus from "./course_template/react-js-course-syllabus.jsx";
import FullStackJavaDeveloperCourseSyllabus from "./course_template/full-stack-java-developer-course-syllabus.jsx";
import CLanguageCourseSyllabus from "./course_template/c-language-course-syllabus.jsx";
import MachineLearningCourseSyllabus from "./course_template/machine-learning-course-syllabus.jsx";
import DataScienceCourseSyllabus from "./course_template/data-science-course-syllabus.jsx";
import SoftwareTestingCourseSyllabus from "./course_template/software-testing-course-syllabus.jsx";
import PythonFullStackDeveloperCourseSyllabus from "./course_template/python-full-stack-developer-course-syllabus.jsx";
import JavaProjects from "./course_template/Java-projects.jsx";
import PythonProjects from "./course_template/Python-projects.jsx";
import ReactJsProjects from "./course_template/react-js-projects.jsx";
import CProgrammingProjects from "./course_template/c-programming-projects.jsx";
import DataStructureAndAlgorithmProjectIdeas from "./course_template/data-structure-and-algorithm-project-ideas.jsx";
import MachineLearningProjects from "./course_template/machine-learning-projects.jsx";
import SoftwareTestingProjects from "./course_template/software-testing-projects.jsx";
import Data_science_projects_for_beginners from "./course_template/data-science-projects-for-beginners.jsx";
import React_js_vs_angular_which_is_best_javascript_framework from "./course_template/react-js-vs-angular-which-is-best-javascript-framework.jsx";
import Java_interview_questions from "./course_template/java-interview-questions.jsx";
import Software_Testing_Career_Paths from "./course_template/software-testing-career-paths.jsx";
import Python_Career_Paths from "./course_template/python-career-paths.jsx";
import Data_Science_Course_Fees_and_Duration from "./course_template/data-science-course-fees-and-duration.jsx";
import How_to_Become_a_Python_Full_Stack_Developer from "./course_template/how-to-become-a-python-full-stack-developer.jsx";
import Data_Science_and_ai_Companies_Building_Tomorrow_on_Fast_Track from "./course_template/data-science-and-ai-companies-building-tomorrow-on-fast-track.jsx";
import Why_Django_is_the_go_to_Framework_for_Python_Web_Development_Ultimate_Django_Guide from "./course_template/why-django-is-the-go-to-framework-for-python-web-development-ultimate-django-guide.jsx";
import Top_13_Artificial_Intelligence_Applications_In_Real_World_Ai_Use_Cases from "./course_template/top-13-artificial-intelligence-applications-in-real-world-ai-use-cases.jsx";
import Java_Career_Paths from "./course_template/java-career-paths.jsx";
import How_To_Become_A_Java_Full_Stack_Developer from "./course_template/how-to-become-a-java-full-stack-developer.jsx";
import Future_Scope_Of_Data_Science_Career_In_India from "./course_template/future-scope-of-data-science-career-in-india.jsx";

import Jap from "./JAP/JAP.jsx";
import Blog from "./Blog/Blog.jsx";
// import OnlineCourse from './academic/online_course_discription/online_template.jsx';

import Online_Academic from "./academic/Online_academic.jsx";
import Online_python from "./academic/online_course_discription/python_online.jsx";
import Online_C from "./academic/online_course_discription/c_online.jsx";
import Online_html from "./academic/online_course_discription/online_html.jsx";
import Online_raspberry from "./academic/online_course_discription/raspberry_online.jsx";
import Online_java from "./academic/online_course_discription/java_online.jsx";
import Online_react from "./academic/online_course_discription/react_online.jsx";
import Online_data_analysis from "./academic/online_course_discription/online_data_analysis.jsx";
import Online_ML from "./academic/online_course_discription/machine_learning_online.jsx";
import Online_MicrosoftAzure from "./academic/online_course_discription/online_microsoft_azure.jsx";
import Online_flask from "./academic/online_course_discription/flask_online.jsx";
import Online_sql from "./academic/online_course_discription/online_sql.jsx";
import Online_js from "./academic/online_course_discription/oonline_js.jsx";
import Online_node from "./academic/online_course_discription/online_node.jsx";
import Online_python_web from "./academic/online_course_discription/online_python_web.jsx";
import Online_python_mini from "./academic/online_course_discription/online_python_mini.jsx";

import Sairam_Uppugundla from "./team_members/sairam-uppugundla.jsx";
import Saketh_Kallepu from "./team_members/saketh-kallepu.jsx";
import Saikiran_Tarigopula from "./team_members/saikiran-tarigopula.jsx";
import Kishor_Kumar from "./team_members/kishor-kumar.jsx";
import Ravi_Siva_Ram_Teja from "./team_members/ravi-siva-ram-teja.jsx";
// import Manohar_Chary_Vadla from './team_members/manohar-chary-vadla.jsx';
import Jitendra_Chautharia from "./team_members/jitendra-chautharia.jsx";
import Privacy_Policy from "./Privacy_policy/privacy-policy.jsx";
import Terms_Conditions from "./Privacy_policy/terms-conditions.jsx";
import Refund_Policy from "./Privacy_policy/refund-policy.jsx";
import Cancellation_Policy from "./Privacy_policy/cancellation-policy.jsx";
import Java_Curriculum from "./faqs/java_curriculum.jsx";
import Python_Curriculum from "./faqs/python_curriculum.jsx";
import Java_Full_Stack_Curriculum from "./faqs/java_full_stack_curriculum.jsx";
// import Python_Full_Stack_Curriculum from './curriculum/python_full_stack_curriculum.jsx';
import Python_Full_Stack_Faq_Bangalore from "./faqs/python_full_stack_faq_bangalore.jsx";
import Data_Science_Curriculum from "./faqs/data-science-curriculum.jsx";
import Machine_Learning_Curriculum from "./faqs/machine-learning-curriculum.jsx";
import Machine_Learning_Faq_Vijayawada from "./faqs/machine-learning-faq-vijayawada.jsx";

import Software_Testing_Curriculum from "./faqs/Software-testing-curriculum.jsx";
import React_JS_Curriculum from "./faqs/react-js-curriculum.jsx";
import Data_Structures_Curriculum from "./faqs/data-structures-curriculum.jsx";
import Data_Science_Faq_vijayawada from "./faqs/data-science-faq-vijayawada.jsx";
import C_Programming_Curriculum from "./faqs/c-programming-faqs.jsx";
import TabS from "./faqs/Tabs.jsx";

// import Video_Testimonials from './video-testimonials.jsx';
import Java from "./Internship/java.jsx";
import Java_Bangalore from "./Internship/java-bangalore.jsx";
// import Java_Vijayawada from './Internship/java-vijayawada.jsx';
import Java_Hyderabad from "./Internship/java-hyderabad.jsx";
// import Python from './Internship/python.jsx';
// // import Java_Curriculum from './Training/Java-Curriculum.jsx';
// import JavaCurriculum from './Training/Java-Curriculum-Bangalore.jsx';
// import JavaCurriculum from './Training/Java-Curriculum-Bangalore.jsx';
// import Java_Curriculum_Vijayawada from './Training/Java-Curriculum-Vijayawada.jsx';
// import Java_Curriculum_Hyderabad from './Training/Java-Curriculum-Hyderabad.jsx';
// import Python_Hyd from './Internship/python-hyd.jsx';

import Pythonfs_Bangalore from "./Internship/pythonfs-bangalore.jsx";
import Pythonfs_Hyderabad from "./Internship/pythonfs-hyderabad.jsx";
import Pythonfs_Vijayawada from "./Internship/pythonfs-vijayawada.jsx";
import Javafs_Bangalore from "./Internship/javafs-bangalore.jsx";
import Javafs_Hyd from "./Internship/javafs-hyd.jsx";
import Javafs_Vijayawadaa from "./Internship/javafs-vijayawadaa.jsx";
import Software_Testing_Bangalore from "./Internship/software-testing-bangalore.jsx";
import Software_Testing_Hyderabad from "./Internship/software-testing-hyderabad.jsx";
import Software_Testing_Vijayawada from "./Internship/software-testing-vijayawada.jsx";
import Data_Science_Hyderabad from "./Internship/data-science-hyderabad.jsx";
import Data_Science_Vijayawada from "./Internship/data-science-vijayawada.jsx";
import Machine_Learning_Hyderabad from "./Internship/machine-learning-hyderabad.jsx";
import Machine_Learning_Vijayawada from "./Internship/machine-learning-vijayawada.jsx";
import ReactJS from "./Internship/reactjs.jsx";
import Data_Structures from "./Internship/data-structures.jsx";
import C_Programming from "./Internship/c-programming.jsx";

import Software_Testing_Faq_Vijayawada from "./faqs/Software-testing-faq-vijayawada.jsx";
import Software_Testing_Faq_Hyderabad from "./faqs/Software-testing-faq-hyderabad.jsx";
import Java_Full_Stack_Faq_Vijayawada from "./faqs/java_full_stack_Faq_Vijayawada.jsx";
import Sai_Vardhan from "./team_members/Sai-Vardhan.jsx";
import Kowshik from "./team_members/Kowshik.jsx";
import Samuel from "./team_members/Samuel.jsx";
import Mallikharjuna from "./team_members/Mallikharjuna.jsx";
import Subramanyam from "./team_members/Subramanyam.jsx";
import Sudheer from "./team_members/Sudheer.jsx";
import Bhemesh from "./team_members/Bhemesh.jsx";
import Ankit from "./team_members/Ankit.jsx";
import Ganesh from "./team_members/Ganesh.jsx";
import Prasanna from "./team_members/Prasanna.jsx";
import Raghava from "./team_members/Raghava.jsx";
import Ambica from "./team_members/Ambica.jsx";
import Pooja from "./team_members/Pooja.jsx";
import Venkatadatta from "./team_members/Venkatadatta.jsx";
import Babu from "./team_members/Babu.jsx";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Companies" element={<Companies />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/placements" element={<Placements />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route
          path="/blog/Java-course-syllabus"
          element={<JavaCourseSyllabus />}
        ></Route>
        <Route
          path="/python-training-in-banglore"
          element={<PythonTraininginBanglore />}
        ></Route>
        <Route
          path="/python-training-course-in-hyderabad"
          element={<PythonTrainingCourseinHyderabad />}
        ></Route>
        <Route
          path="/python-training-in-vijayawada"
          element={<PythonTraininginVijayawada />}
        ></Route>
        <Route
          path="/python-full-stack-developer-course-in-banglore"
          element={<Python_full_stack_training_course_in_banglore />}
        ></Route>
        <Route
          path="/python-full-stack-developer-course-in-hyderabad"
          element={<Python_full_stack_training_course_in_hyderabad />}
        ></Route>
        <Route
          path="/python-full-stack-developer-course-in-vijayawada"
          element={<Python_full_stack_training_course_in_vijayawada />}
        ></Route>
        <Route
          path="/core-java-training-course-in-bangalore"
          element={<Core_java_training_course_in_bangalore />}
        ></Route>
        <Route
          path="/Core-java-training-course-in-hyderabad"
          element={<Core_java_training_course_in_hyderabad />}
        ></Route>
        <Route
          path="/Core-java-training-course-in-vijayawada"
          element={<Core_java_training_course_in_vijayawada />}
        ></Route>
        <Route
          path="/java-full-stack-training-course-in-bangalore"
          element={<Java_full_stack_training_course_in_bangalore />}
        ></Route>
        <Route
          path="/java-full-stack-training-course-in-hyderabad"
          element={<Java_full_stack_training_course_in_hyderabad />}
        ></Route>
        <Route
          path="/full-stack-java-training-course-in-vijayawada"
          element={<Full_stack_java_training_course_in_vijayawada />}
        ></Route>
        <Route
          path="/data-science-course-training-in-vijayawada"
          element={<Data_science_course_training_in_vijayawada />}
        ></Route>
        <Route
          path="/data-science-course-training-in-hyderabad"
          element={<Data_science_course_training_in_hyderabad />}
        ></Route>
        <Route
          path="/machine-learning-course-training-in-hyderabad"
          element={<Machine_learning_course_training_in_hyderabad />}
        ></Route>
        <Route
          path="/machine-learning-course-training-in-vijayawada"
          element={<Machine_learning_course_training_in_vijayawada />}
        ></Route>
        <Route
          path="/software-testing-training-course-in-banglore"
          element={<Software_testing_training_course_in_banglore />}
        ></Route>
        <Route
          path="/software-testing-training-course-in-hyderabad"
          element={<Software_testing_training_course_in_hyderabad />}
        ></Route>
        <Route
          path="/software-testing-training-course-in-vijayawada"
          element={<Software_testing_training_course_in_vijayawada />}
        ></Route>
        <Route
          path="/react-js-training-course-in-vijayawada"
          element={<React_JS_training_course_in_vijayawada />}
        ></Route>
        <Route
          path="/data-structures-and-algorithms-training-in-vijayawada"
          element={<Data_structers_and_Algorithms_training_in_vijayawada />}
        ></Route>
        <Route
          path="/c-programming-course-training-in-vijayawada"
          element={<C_progrmming_course_training_in_vijayawada />}
        ></Route>
        <Route path="/vijayawada_campus" element={<Vij_campus />}></Route>
        <Route path="/hyderabad_campus" element={<Hyd_campus />}></Route>
        <Route path="/bangalore_campus" element={<Bang_campus />}></Route>
        <Route path="/contact" element={<Contact_us />}></Route>
        <Route path="/internship_page" element={<Intern_Page />}></Route>

        <Route
          path="/blog/data-structures-and-algorithms-course-syllabus"
          element={<DataStructuresAndAlgorithmsCourseSyllabus />}
        ></Route>
        <Route
          path="/blog/python-course-syllabus"
          element={<PythonCourseSyllabus />}
        ></Route>
        <Route
          path="/blog/react-js-course-syllabus"
          element={<ReactJsCourseSyllabus />}
        ></Route>
        <Route
          path="/blog/full-stack-java-developer-course-syllabus"
          element={<FullStackJavaDeveloperCourseSyllabus />}
        ></Route>
        <Route
          path="/blog/c-language-course-syllabus"
          element={<CLanguageCourseSyllabus />}
        ></Route>
        <Route
          path="/blog/machine-learning-course-syllabus"
          element={<MachineLearningCourseSyllabus />}
        ></Route>
        <Route
          path="/blog/data-science-course-syllabus"
          element={<DataScienceCourseSyllabus />}
        ></Route>
        <Route
          path="/blog/software-testing-course-syllabus"
          element={<SoftwareTestingCourseSyllabus />}
        ></Route>
        <Route
          path="/blog/python-full-stack-developer-course-syllabus"
          element={<PythonFullStackDeveloperCourseSyllabus />}
        ></Route>
        <Route path="/job_accelerator_program" element={<Jap />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/java_projects" element={<JavaProjects />}></Route>
        <Route
          path="/blog/python-projects"
          element={<PythonProjects />}
        ></Route>
        <Route
          path="/blog/react-js-projects"
          element={<ReactJsProjects />}
        ></Route>
        <Route
          path="/blog/c-programming-projects"
          element={<CProgrammingProjects />}
        ></Route>
        <Route
          path="/blog/data-structure-and-algorithm-project-ideas"
          element={<DataStructureAndAlgorithmProjectIdeas />}
        ></Route>
        <Route
          path="/blog/machine-learning-projects"
          element={<MachineLearningProjects />}
        ></Route>
        <Route
          path="/blog/software-testing-projects"
          element={<SoftwareTestingProjects />}
        ></Route>
        <Route
          path="/blog/data-science-projects-for-beginners"
          element={<Data_science_projects_for_beginners />}
        ></Route>
        <Route
          path="/blog/react-js-vs-angular-which-is-best-javascript-framework"
          element={<React_js_vs_angular_which_is_best_javascript_framework />}
        ></Route>
        <Route
          path="/blog/java-interview-questions"
          element={<Java_interview_questions />}
        ></Route>
        <Route
          path="/blog/software-testing-career-paths"
          element={<Software_Testing_Career_Paths />}
        ></Route>
        <Route
          path="/blog/python-career-paths"
          element={<Python_Career_Paths />}
        ></Route>
        <Route
          path="/blog/data-science-course-fees-and-duration"
          element={<Data_Science_Course_Fees_and_Duration />}
        ></Route>
        <Route
          path="/blog/how-to-become-a-python-full-stack-developer"
          element={<How_to_Become_a_Python_Full_Stack_Developer />}
        ></Route>
        <Route
          path="/blog/data-science-and-ai-companies-building-tomorrow-on-fast-track"
          element={
            <Data_Science_and_ai_Companies_Building_Tomorrow_on_Fast_Track />
          }
        ></Route>
        <Route
          path="/blog/why-django-is-the-go-to-framework-for-python-web-development-ultimate-django-guide"
          element={
            <Why_Django_is_the_go_to_Framework_for_Python_Web_Development_Ultimate_Django_Guide />
          }
        ></Route>
        <Route
          path="/blog/top-13-artificial-intelligence-applications-in-real-world-ai-use-cases"
          element={
            <Top_13_Artificial_Intelligence_Applications_In_Real_World_Ai_Use_Cases />
          }
        ></Route>
        <Route
          path="/blog/java-career-paths"
          element={<Java_Career_Paths />}
        ></Route>
        <Route
          path="/blog/how-to-become-a-java-full-stack-developer"
          element={<How_To_Become_A_Java_Full_Stack_Developer />}
        ></Route>
        <Route
          path="/blog/future-scope-of-data-science-career-in-india"
          element={<Future_Scope_Of_Data_Science_Career_In_India />}
        ></Route>
        <Route path="/online-academic" element={<Online_Academic />}></Route>
        <Route
          path="/academy/online-python-course/"
          element={<Online_python />}
        ></Route>
        <Route
          path="/academy/online-c-programming-course/"
          element={<Online_C />}
        ></Route>
        <Route
          path="/academy/online-html-css-course/"
          element={<Online_html />}
        ></Route>
        <Route
          path="/academy/online-raspberry-pi-course/"
          element={<Online_raspberry />}
        ></Route>
        <Route
          path="/academy/online-java-full-stack-development-course/"
          element={<Online_java />}
        ></Route>
        <Route
          path="/academy/online-reactjs-course/"
          element={<Online_react />}
        ></Route>
        <Route
          path="/academy/online-data-analysis-course/"
          element={<Online_data_analysis />}
        ></Route>
        <Route
          path="/academy/online-machine-learning-course-using-python/"
          element={<Online_ML />}
        ></Route>
        <Route
          path="/academy/online-microsoft-azure-ai-fundamentals-course/"
          element={<Online_MicrosoftAzure />}
        />
        <Route
          path="/academy/online-python-web-framework-course/"
          element={<Online_flask />}
        />
        <Route path="/academy/online-mysql-course/" element={<Online_sql />} />
        <Route
          path="/academy/online-javascript-course/"
          element={<Online_js />}
        />
        <Route
          path="/academy/online-nodejs-course/"
          element={<Online_node />}
        />
        <Route
          path="/academy/online-web-development-with-python/"
          element={<Online_python_web />}
        />
        <Route
          path="/academy/online-python-mini-projects/"
          element={<Online_python_mini />}
        ></Route>

        <Route path="/Sairam-CEO" element={<Sairam_Uppugundla />}></Route>
        <Route path="/saketh-CoFounder" element={<Saketh_Kallepu />}></Route>
        <Route
          path="/saikiran-CoFounder"
          element={<Saikiran_Tarigopula />}
        ></Route>
        <Route path="/kishor-kumar" element={<Kishor_Kumar />}></Route>
        <Route path="/siva-ram" element={<Ravi_Siva_Ram_Teja />}></Route>
        {/* <Route path='/manohar-chary-vadla' element={<Manohar_Chary_Vadla/>}></Route> */}
        <Route path="/kowshik" element={<Kowshik />}></Route>
        <Route path="/jitendra" element={<Jitendra_Chautharia />}></Route>
        <Route path="/sudheer" element={<Sudheer />}></Route>
        <Route path="/subramanyam" element={<Subramanyam />}></Route>
        <Route path="/sai-vardhan" element={<Sai_Vardhan />}></Route>
        <Route path="/mallikharjuna" element={<Mallikharjuna />}></Route>
        <Route path="/samuel" element={<Samuel />}></Route>
        <Route path="/bhemesh" element={<Bhemesh />}></Route>
        <Route path="/raghava" element={<Raghava />}></Route>
        <Route path="/prasanna" element={<Prasanna />}></Route>
        <Route path="/ankit" element={<Ankit />}></Route>
        <Route path="/ganesh" element={<Ganesh />}></Route>
        <Route path="/ambica" element={<Ambica />}></Route>
        <Route path="/pooja" element={<Pooja />}></Route>
        <Route path="/Venkatadatta" element={<Venkatadatta />}></Route>
        <Route path="/babu" element={<Babu />}></Route>
        <Route path="/privacy-policy" element={<Privacy_Policy />}></Route>
        <Route path="/terms-conditions" element={<Terms_Conditions />}></Route>
        <Route path="/refund-policy" element={<Refund_Policy />}></Route>
        <Route
          path="/cancellation-policy"
          element={<Cancellation_Policy />}
        ></Route>
        <Route path="/java_curriculum" element={<Java_Curriculum />}></Route>
        <Route
          path="/python_curriculum"
          element={<Python_Curriculum />}
        ></Route>
        <Route
          path="/java_full_stack_curriculum"
          element={<Java_Full_Stack_Curriculum />}
        ></Route>
        <Route
          path="/python_full_stack_faq_bangalore"
          element={<Python_Full_Stack_Faq_Bangalore />}
        ></Route>
        <Route
          path="/data-science-curriculum"
          element={<Data_Science_Curriculum />}
        ></Route>
        <Route
          path="/machine-learning-curriculum"
          element={<Machine_Learning_Curriculum />}
        ></Route>
        <Route
          path="/machine-learning-faq-vijayawada"
          element={<Machine_Learning_Faq_Vijayawada />}
        ></Route>
        <Route
          path="/Software-testing-curriculum"
          element={<Software_Testing_Curriculum />}
        ></Route>
        <Route
          path="/react-js-curriculum"
          element={<React_JS_Curriculum />}
        ></Route>
        <Route
          path="/data-structures-curriculum"
          element={<Data_Structures_Curriculum />}
        ></Route>
        <Route
          path="/data-science-faq-vijayawada"
          element={<Data_Science_Faq_vijayawada />}
        ></Route>
        <Route
          path="/c-programming-curriculum"
          element={<C_Programming_Curriculum />}
        ></Route>
        {/*        <Route path='/video-testimonials' element={<Video_Testimonials/>}></Route> */}
        <Route path="/Tabs" element={<TabS />}></Route>
        <Route path="/java" element={<Java />}></Route>
        <Route path="/java-bangalore" element={<Java_Bangalore />}></Route>
        {/* <Route path='/java-vijayawada' element={<Java_Vijayawada/>}></Route> */}
        <Route path="/java-hyderabad" element={<Java_Hyderabad />}></Route>
        {/* <Route path='/python' element={<Python/>}></Route> */}
        {/* <Route path='/Java-Curriculum' element={<Java_Curriculum/>}></Route>  */}
        {/* <Route path='/Java-Curriculum' element={<JavaCurriculum/>}></Route> */}
        {/* <Route path='/python-hyd' element={<Python_Hyd/>}></Route> */}

        {/* <Route path='/Java-Curriculum-Vijayawada' element={<Java_Curriculum_Vijayawada/>}></Route>
        <Route path='/Java-Curriculum-Hyderabad' element={<Java_Curriculum_Hyderabad/>}></Route> */}

        <Route
          path="/pythonfs-bangalore"
          element={<Pythonfs_Bangalore />}
        ></Route>
        <Route
          path="/pythonfs-hyderabad"
          element={<Pythonfs_Hyderabad />}
        ></Route>
        <Route
          path="/pythonfs-vijayawada"
          element={<Pythonfs_Vijayawada />}
        ></Route>
        <Route path="/javafs-bangalore" element={<Javafs_Bangalore />}></Route>
        <Route path="/javafs-hyd" element={<Javafs_Hyd />}></Route>
        <Route
          path="/javafs-vijayawadaa"
          element={<Javafs_Vijayawadaa />}
        ></Route>
        <Route
          path="/software-testing-bangalore"
          element={<Software_Testing_Bangalore />}
        ></Route>
        <Route
          path="/software-testing-hyderabad"
          element={<Software_Testing_Hyderabad />}
        ></Route>
        <Route
          path="/software-testing-vijayawada"
          element={<Software_Testing_Vijayawada />}
        ></Route>
        <Route
          path="/data-science-hyderabad"
          element={<Data_Science_Hyderabad />}
        ></Route>
        <Route
          path="/data-science-vijayawada"
          element={<Data_Science_Vijayawada />}
        ></Route>
        <Route
          path="/machine-learning-hyderabad"
          element={<Machine_Learning_Hyderabad />}
        ></Route>
        <Route
          path="/machine-learning-vijayawada"
          element={<Machine_Learning_Vijayawada />}
        ></Route>
        <Route path="/reactjs" element={<ReactJS />}></Route>
        <Route path="/data-structures" element={<Data_Structures />}></Route>
        <Route path="/c-programming" element={<C_Programming />}></Route>

        <Route
          path="/Software-testing-faq-vijayawada"
          element={<Software_Testing_Faq_Vijayawada />}
        ></Route>
        <Route
          path="/Software-testing-faq-hyderabad"
          element={<Software_Testing_Faq_Hyderabad />}
        ></Route>
        <Route
          path="/java_full_stack_Faq_Vijayawada"
          element={<Java_Full_Stack_Faq_Vijayawada />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
