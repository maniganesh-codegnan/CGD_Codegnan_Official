import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './navigation/Nav'
import Footer from './Footer/Footer';
import Home from './Home/Home.jsx';
import Team from './about/Team.jsx';
import Placements from './placements/Placements';
import Companies from './Companies/Companies.jsx';
import Collaboration from './Collabarations.jsx';
import Pre from './Prefooter/Prefooter.jsx';
import Gallery from './about/Gallery.jsx';
import Course_template from './course_template/Course_template.jsx';
import JavaCourseSyllabus from './course_template/Java-course-syllabus.jsx';
import About from './about_us/about.jsx' ;

// import JavaCourseSyllabus from "./blog/course_template/Java-course-syllabus.jsx";
import PythonTraininginBanglore from './Training/Python-training-in-banglore.jsx';
import PythonTrainingCourseinHyderabad from './Training/python-full-stack-developer-in-banglore.jsx';
import PythonTraininginVijayawada  from './Training/Python-training-in-banglore.jsx';
import Python_full_stack_training_course_in_banglore from './Training/Python-full-stack/python-full-stack-developer-course-in-bangalore.jsx';
import Python_full_stack_training_course_in_hyderabad from './Training/Python-full-stack/Python_full_stack_course_in_Hyderabad.jsx';
import Python_full_stack_training_course_in_vijayawada from './Training/Python-full-stack/Python_full_stack_course_Vijayawada.jsx';
import Core_java_training_course_in_bangalore from './Training/Java-training/Core_java_training_course_in_Bangalore.jsx';
import Core_java_training_course_in_hyderabad from './Training/Java-training/Core_java_training_course_in_hyderabad.jsx';
import Core_java_training_course_in_vijayawada from './Training/Java-training/Core_java_training_course_in_vijayawada.jsx';
import Java_full_stack_training_course_in_bangalore from './Training/Java-full-stack/Java_full_stack_course_in_bangalore.jsx';
import Java_full_stack_training_course_in_hyderabad from './Training/Java-full-stack/Java_full_stack_course_in_hyderabad.jsx';
import Full_stack_java_training_course_in_vijayawada from './Training/Java-full-stack/Full_stack_java_training_course_in_vijayawada.jsx';
import Data_science_course_training_in_vijayawada from './Training/Data-science/Data_science_course_training_in_Vijayawada.jsx';
import Data_science_course_training_in_hyderabad from './Training/Data-science/Data_science_course_training_in_Hyderabad.jsx';
import Machine_learning_course_training_in_hyderabad from './Training/Machine-Learning/Machine_learning_course_training_in_Hyderabad.jsx';
import Machine_learning_course_training_in_vijayawada from './Training/Machine-Learning/Machine_learning_course_training_in_Vijayawada.jsx';
import Software_testing_training_course_in_banglore from './Training/Software-testing/Software_testing_training_course_in_banglore.jsx';
import Software_testing_training_course_in_hyderabad from './Training/Software-testing/Software_testing_training_course_in_hyderabad.jsx';
import Software_testing_training_course_in_vijayawada from './Training/Software-testing/Software_testing_training_course_in_vijayawada.jsx';
import React_JS_training_course_in_vijayawada from './Training/React_JS_training_course_in_vijayawada.jsx';
import Data_structers_and_Algorithms_training_in_vijayawada from './Training/Data_structures_and_algorithms_training_in_vijayawada.jsx';
import C_progrmming_course_training_in_vijayawada from './Training/C_programming_course_training_in_vijayawada.jsx';
import Vij_campus from './campuses/vij_campuses.jsx';
import Hyd_campus from './campuses/hyd_campuses.jsx';
import Bang_campus from './campuses/bang_campuses.jsx';
import Contact_us from './contact/contact_us.jsx';

import InternsyllabusComp from './Internship/Intern_syllabus/Intern_syllabus.jsx';
import Intern_dropdown from './Internship/Intern_dropdown/Inter_dropdown.jsx';
import Intern_Page from './Internship/Intership_page.jsx';


import DataStructuresAndAlgorithmsCourseSyllabus from './course_template/data-structures-and-algorithms-course-syllabus.jsx';
import PythonCourseSyllabus from './course_template/python-course-syllabus.jsx';
import ReactJsCourseSyllabus from  './course_template/react-js-course-syllabus.jsx';
import FullStackJavaDeveloperCourseSyllabus from './course_template/full-stack-java-developer-course-syllabus.jsx';
import CLanguageCourseSyllabus from './course_template/c-language-course-syllabus.jsx';
import MachineLearningCourseSyllabus from './course_template/machine-learning-course-syllabus.jsx';
import DataScienceCourseSyllabus from './course_template/data-science-course-syllabus.jsx';
import SoftwareTestingCourseSyllabus from './course_template/software-testing-course-syllabus.jsx';
import PythonFullStackDeveloperCourseSyllabus from './course_template/python-full-stack-developer-course-syllabus.jsx';
import JavaProjects from './course_template/Java-projects.jsx';
import PythonProjects from './course_template/Python-projects.jsx';
import ReactJsProjects from './course_template/react-js-projects.jsx';
import CProgrammingProjects from './course_template/c-programming-projects.jsx';
import DataStructureAndAlgorithmProjectIdeas from './course_template/data-structure-and-algorithm-project-ideas.jsx';
import MachineLearningProjects from './course_template/machine-learning-projects.jsx';
import SoftwareTestingProjects from './course_template/software-testing-projects.jsx';
import Data_science_projects_for_beginners from './course_template/data-science-projects-for-beginners.jsx';
import React_js_vs_angular_which_is_best_javascript_framework from './course_template/react-js-vs-angular-which-is-best-javascript-framework.jsx';
import Java_interview_questions from './course_template/java-interview-questions.jsx';


import Jap from './JAP/JAP.jsx';
import Blog from './Blog/Blog.jsx';
import OnlineCourse from './academic/online_course_discription/online_template.jsx';

import Online_Academic from './academic/Online_academic.jsx';
import Online_python from './academic/online_course_discription/python_online.jsx';
import Online_C from './academic/online_course_discription/c_online.jsx';
import Online_html from './academic/online_course_discription/online_html.jsx';
import Online_raspberry from './academic/online_course_discription/raspberry_online.jsx';
import Online_java from './academic/online_course_discription/java_online.jsx';
import Online_react from './academic/online_course_discription/react_online.jsx';
import Online_data_analysis from './academic/online_course_discription/online_data_analysis.jsx';
import Online_ML from './academic/online_course_discription/machine_learning_online.jsx';
import Online_MicrosoftAzure from './academic/online_course_discription/online_microsoft_azure.jsx';
import Online_flask from './academic/online_course_discription/flask_online.jsx';
import Online_sql from './academic/online_course_discription/online_sql.jsx';
import Online_js from './academic/online_course_discription/oonline_js.jsx';
import Online_node from './academic/online_course_discription/online_node.jsx';
import Online_python_web from './academic/online_course_discription/online_python_web.jsx';
import Online_python_mini from './academic/online_course_discription/online_python_mini.jsx';

import Sairam_Uppugundla from './team_members/sairam-uppugundla.jsx';
import Saketh_Kallepu from './team_members/saketh-kallepu.jsx';
import Saikiran_Tarigopula from './team_members/saikiran-tarigopula.jsx';
import Kishor_Kumar from './team_members/kishor-kumar.jsx';
import Ravi_Siva_Ram_Teja  from './team_members/ravi-siva-ram-teja.jsx';
import Manohar_Chary_Vadla from './team_members/manohar-chary-vadla.jsx';
import Jitendra_Chautharia from './team_members/jitendra-chautharia.jsx';
import Privacy_Policy from './Privacy_policy/privacy-policy.jsx';
import Terms_Conditions from './Privacy_policy/terms-conditions.jsx';
import Refund_Policy from './Privacy_policy/refund-policy.jsx';
import Cancellation_Policy from './Privacy_policy/cancellation-policy.jsx';










function App() {
  return(
    <div>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>  } />
        <Route path="/team" element={<Team/>  } ></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/placements' element={<Placements />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/blog/Java-course-syllabus' element={<JavaCourseSyllabus />}></Route>
        <Route path='/python-training-in-banglore' element={<PythonTraininginBanglore />}></Route>
        <Route path='/python-training-course-in-hyderabad' element={<PythonTrainingCourseinHyderabad />}></Route>
        <Route path='/python-training-in-vijayawada' element={<PythonTraininginVijayawada />}></Route>
        <Route path='/python-full-stack-developer-course-in-banglore' element={<Python_full_stack_training_course_in_banglore/>}></Route>
        <Route path='/python-full-stack-developer-course-in-hyderabad' element={<Python_full_stack_training_course_in_hyderabad/>}></Route>
        <Route path='/python-full-stack-developer-course-in-vijayawada' element={<Python_full_stack_training_course_in_vijayawada/>}></Route>
        <Route path='/core-java-training-course-in-bangalore' element={<Core_java_training_course_in_bangalore/>}></Route>
        <Route path='/Core-java-training-course-in-hyderabad' element={<Core_java_training_course_in_hyderabad/>}></Route>
        <Route path='/Core-java-training-course-in-vijayawada' element={<Core_java_training_course_in_vijayawada/>}></Route>
        <Route path='/java-full-stack-training-course-in-bangalore' element={<Java_full_stack_training_course_in_bangalore/>}></Route>
        <Route path='/java-full-stack-training-course-in-hyderabad' element={<Java_full_stack_training_course_in_hyderabad/>}></Route>
        <Route path='/full-stack-java-training-course-in-vijayawada' element={<Full_stack_java_training_course_in_vijayawada/>}></Route>
        <Route path='/data-science-course-training-in-vijayawada' element={<Data_science_course_training_in_vijayawada/>}></Route>
        <Route path='/data-science-course-training-in-hyderabad' element={<Data_science_course_training_in_hyderabad/>}></Route>
        <Route path='/machine-learning-course-training-in-hyderabad' element={<Machine_learning_course_training_in_hyderabad/>}></Route>
        <Route path='/machine-learning-course-training-in-vijayawada' element={<Machine_learning_course_training_in_vijayawada/>}></Route>
        <Route path='/software-testing-training-course-in-banglore' element={<Software_testing_training_course_in_banglore/>}></Route>
        <Route path='/software-testing-training-course-in-hyderabad' element={<Software_testing_training_course_in_hyderabad/>}></Route>
        <Route path='/software-testing-training-course-in-vijayawada' element={<Software_testing_training_course_in_vijayawada/>}></Route>
        <Route path='/react-js-training-course-in-vijayawada' element={<React_JS_training_course_in_vijayawada/>}></Route>
        <Route path='/data-structures-and-algorithms-training-in-vijayawada' element={<Data_structers_and_Algorithms_training_in_vijayawada/>}></Route>
        <Route path='/c-programming-course-training-in-vijayawada' element={<C_progrmming_course_training_in_vijayawada/>}></Route>
        <Route path='/vijayawada_campus' element={<Vij_campus/>}></Route>
        <Route path='/hyderabad_campus' element={<Hyd_campus/>}></Route>
        <Route path='/bangalore_campus' element={<Bang_campus/>}></Route>
        <Route path='/contact' element={ <Contact_us/>}></Route>
        <Route path='/internship_page' element={ <Intern_Page/>}></Route>


        <Route path='/blog/data-structures-and-algorithms-course-syllabus' element={<DataStructuresAndAlgorithmsCourseSyllabus />}></Route>
        <Route path='/blog/python-course-syllabus' element={<PythonCourseSyllabus />}></Route>
        <Route path='/blog/react-js-course-syllabus' element={<ReactJsCourseSyllabus />}></Route>
        <Route path='/blog/full-stack-java-developer-course-syllabus' element={<FullStackJavaDeveloperCourseSyllabus/>}></Route>
        <Route path='/blog/c-language-course-syllabus' element={<CLanguageCourseSyllabus/>}></Route>
        <Route path='/blog/machine-learning-course-syllabus' element={<MachineLearningCourseSyllabus/>}></Route>
        <Route path='/blog/data-science-course-syllabus' element={<DataScienceCourseSyllabus/>}></Route>
        <Route path='/blog/software-testing-course-syllabus' element={<SoftwareTestingCourseSyllabus/>}></Route>
        <Route path='/blog/python-full-stack-developer-course-syllabus' element={<PythonFullStackDeveloperCourseSyllabus/>}></Route>
        <Route path='/job_accelerator_program' element={<Jap/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/blog/java_projects' element={<JavaProjects/>}></Route>
        <Route path='/blog/python-projects' element={<PythonProjects/>}></Route>
        <Route path='/blog/react-js-projects' element={<ReactJsProjects/>}></Route>
        <Route path='/blog/c-programming-projects' element={<CProgrammingProjects/>}></Route>
        <Route path='/blog/data-structure-and-algorithm-project-ideas' element={<DataStructureAndAlgorithmProjectIdeas/>}></Route>
        <Route path='/blog/machine-learning-projects' element={<MachineLearningProjects/>}></Route>
        <Route path='/blog/software-testing-projects' element={<SoftwareTestingProjects/>}></Route>
        <Route path='/blog/data-science-projects-for-beginners' element={<Data_science_projects_for_beginners/>}></Route>
        <Route path='/blog/react-js-vs-angular-which-is-best-javascript-framework' element={<React_js_vs_angular_which_is_best_javascript_framework />}></Route>
        <Route path='/blog/java-interview-questions' element={<Java_interview_questions/>}></Route>

        <Route path='/online-academic' element={<Online_Academic/>}></Route>
        <Route path='/academy/online-python-course/' element={<Online_python/>}></Route>     
        <Route path='/academy/online-c-programming-course/' element={<Online_C/>}></Route>
        <Route path='/academy/online-html-css-course/' element={<Online_html/>}></Route>
        <Route path='/academy/online-raspberry-pi-course/' element={<Online_raspberry/>}></Route>
        <Route path='/academy/online-java-full-stack-development-course/' element={<Online_java/>}></Route>
        <Route path='/academy/online-reactjs-course/' element={<Online_react/>}></Route>
        <Route path='/academy/online-data-analysis-course/' element={<Online_data_analysis/>}></Route>
        <Route path='/academy/online-machine-learning-course-using-python/' element={<Online_ML/>}></Route>
        <Route path='/academy/online-microsoft-azure-ai-fundamentals-course/' element={<Online_MicrosoftAzure/>}/>
        <Route path='/academy/online-python-web-framework-course/' element={<Online_flask/>}/>
        <Route path='/academy/online-mysql-course/' element={<Online_sql/>}/>
        <Route path='/academy/online-javascript-course/' element={<Online_js/>}/>
        <Route path='/academy/online-nodejs-course/' element={<Online_node/>}/>
        <Route path='/academy/online-web-development-with-python/' element={<Online_python_web/>}/>
        <Route path='/academy/online-python-mini-projects/' element={<Online_python_mini/>}/>

        <Route path='/sairam-uppugundla' element={<Sairam_Uppugundla/>}></Route>
        <Route path='/saketh-kallepu/' element={<Saketh_Kallepu/>}></Route>
        <Route path='/saikiran-tarigopula' element={<Saikiran_Tarigopula/>}></Route>
        <Route path='/kishor-kumar' element={<Kishor_Kumar/>}></Route>
        <Route path='/ravi-siva-ram-teja' element={<Ravi_Siva_Ram_Teja/>}></Route>
        <Route path='/manohar-chary-vadla' element={<Manohar_Chary_Vadla/>}></Route>
        <Route path='/jitendra-chautharia' element={<Jitendra_Chautharia/>}></Route>
        <Route path='/privacy-policy' element={<Privacy_Policy />}></Route>
        <Route path='/terms-conditions' element={<Terms_Conditions />}></Route>
        <Route path='/refund-policy' element={<Refund_Policy />}></Route>
        <Route path='/cancellation-policy' element={<Cancellation_Policy/>}></Route>

      </Routes>
     
       <Footer></Footer>    
      
    </div>
  );
 
}

export default App
