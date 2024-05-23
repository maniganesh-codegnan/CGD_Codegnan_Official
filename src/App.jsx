import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './navigation/Nav'
import Footer from './Footer/Footer';
import Home from './Home/Home.jsx';
import About from './about/About';
import Placements from './placements/Placements';
import Companies from './Companies/Companies.jsx';
import Collaboration from './Collabarations.jsx';
import Pre from './Prefooter/Prefooter.jsx';
import Gallery from './about/Gallery.jsx';
import Course_template from './course_template/Course_template.jsx';
import JavaCoursePage from './course_template/Java_course_page.jsx';
import Python_training_in_banglore from './Training/Python_training_in_banglore.jsx';
import Python_training_in_hyderabad from './Training/python_training_in_hyderabad.jsx';
import Python_training_in_Vijayawada from './Training/Python_training_in_Vijayawada.jsx';
import Python_full_stack_training_in_banglore from './Training/Python-full-stack/Python_full_stack_in_Banglore.jsx';
import Python_full_stack_training_in_hyderabad from './Training/Python-full-stack/Python_full_stack_in_Hyderabad.jsx';
import Python_full_stack_training_in_vijayawada from './Training/Python-full-stack/Python_full_stack_Vijayawada.jsx';
import Java_training_in_banglore from './Training/Java-training/Java_training_in_Banglore.jsx';
import Java_training_in_hyderabad from './Training/Java-training/Java_training_in_hyderabad.jsx';
import Java_training_in_vijayawada from './Training/Java-training/Java_training_in_vijayawada.jsx';
import Java_full_stack_training_in_banglore from './Training/Java-full-stack/Java_full_stack_in_banglore.jsx';
import Java_full_stack_training_in_hyderabad from './Training/Java-full-stack/Java_full_stack_in_hyderabad.jsx';
import Java_full_stack_training_in_vijayawada from './Training/Java-full-stack/Java_full_stack_in_vijayawada.jsx';
import Data_science_in_vijayawada from './Training/Data-science/Data_science_in_Vijayawada.jsx';
import Data_science_in_hyderabad from './Training/Data-science/Data_science_in_Hyderabad.jsx';
import Machine_learning_in_hyderabad from './Training/Machine-Learning/Machine_learning_in_Hyderabad.jsx';
import Machine_learning_in_vijayawada from './Training/Machine-Learning/Machine_learning_in_Vijayawada.jsx';
import Software_testing_in_banglore from './Training/Software-testing/Software_testing_in_Banglore.jsx';
import Software_testing_in_hyderabad from './Training/Software-testing/Software_testing_in_Hyderabad.jsx';
import Software_testing_in_vijayawada from './Training/Software-testing/Software_testing_in_Vijayawada.jsx';
import React_JS_in_vijayawada from './Training/React_JS_in_vijayawada.jsx';
import Data_structers_and_Algorithms_in_vijayawada from './Training/Data_structures_and_algorithms_in_vijayawada.jsx';
import C_progrmming_in_vijayawada from './Training/C_programming_in_vijayawada.jsx';
import Vij_campus from './campuses/vij_campuses.jsx';
import Hyd_campus from './campuses/hyd_campuses.jsx';
import Bang_campus from './campuses/bang_campuses.jsx';
import Contact_us from './contact/contact_us.jsx';

import InternsyllabusComp from './Internship/Intern_syllabus/Intern_syllabus.jsx';
import Intern_dropdown from './Internship/Intern_dropdown/Inter_dropdown.jsx';
import Intern_Page from './Internship/Intership_page.jsx';


import DsCoursePage from './course_template/ds_course_page.jsx';
import PythonCoursePage from './course_template/python_course_page.jsx';
import ReactCoursePage from  './course_template/React_course_page.jsx';
import JavaFullstackCoursePage from './course_template/Java_fullstack_course_page';
import ClanguageCoursePage from './course_template/Clanguage_course_page';
import MachineLearningCoursePage from './course_template/Machine_learning_course_page';
import DataScienceCoursePage from './course_template/Data_science_course_page';
import SoftwareTestingCoursePage from './course_template/Software_testing_course_page';
import PythonFullstackCoursePage from './course_template/Python_fullstack_course_page.jsx';







function App() {
  return(
    <div>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>  } />
        <Route path="/about" element={<About/>  } />
        <Route path='/placements' element={<Placements />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/java_course_page' element={<JavaCoursePage />}></Route>
        <Route path='/python_training_in_banglore' element={<Python_training_in_banglore />}></Route>
        <Route path='/python_training_in_hyderabad' element={<Python_training_in_hyderabad />}></Route>
        <Route path='/python_training_in_Vijayawada' element={<Python_training_in_Vijayawada/>}></Route>
        <Route path='/python-full-stack-developer-in-banglore' element={<Python_full_stack_training_in_banglore/>}></Route>
        <Route path='/python-full-stack-developer-in-hyderabad' element={<Python_full_stack_training_in_hyderabad/>}></Route>
        <Route path='/python-full-stack-developer-in-vijayawada' element={<Python_full_stack_training_in_vijayawada/>}></Route>
        <Route path='/java-training-in-banglore' element={<Java_training_in_banglore/>}></Route>
        <Route path='/java-training-in-hyderabad' element={<Java_training_in_hyderabad/>}></Route>
        <Route path='/java-training-in-vijayawada' element={<Java_training_in_vijayawada/>}></Route>
        <Route path='/java-full-stack-training-in-banglore' element={<Java_full_stack_training_in_banglore/>}></Route>
        <Route path='/java-full-stack-training-in-hyderabad' element={<Java_full_stack_training_in_hyderabad/>}></Route>
        <Route path='/java-full-stack-training-in-vijayawada' element={<Java_full_stack_training_in_vijayawada/>}></Route>
        <Route path='/data-science-in-vijayawada' element={<Data_science_in_vijayawada/>}></Route>
        <Route path='/data-science-in-hyderabad' element={<Data_science_in_hyderabad/>}></Route>
        <Route path='/machine-learning-in-hyderabad' element={<Machine_learning_in_hyderabad/>}></Route>
        <Route path='/machine-learning-in-vijayawada' element={<Machine_learning_in_vijayawada/>}></Route>
        <Route path='/software-testing-in-banglore' element={<Software_testing_in_banglore/>}></Route>
        <Route path='/software-testing-in-hyderabad' element={<Software_testing_in_hyderabad/>}></Route>
        <Route path='/software-testing-in-vijayawada' element={<Software_testing_in_vijayawada/>}></Route>
        <Route path='/react-js-in-vijayawada' element={<React_JS_in_vijayawada/>}></Route>
        <Route path='/data-structures-and-algorithms-in-vijayawada' element={<Data_structers_and_Algorithms_in_vijayawada/>}></Route>
        <Route path='/c-programming-in-vijayawada' element={<C_progrmming_in_vijayawada/>}></Route>
        <Route path='/vijayawada_campus' element={<Vij_campus/>}></Route>
        <Route path='/hyderabad_campus' element={<Hyd_campus/>}></Route>
        <Route path='/bangalore_campus' element={<Bang_campus/>}></Route>
        <Route path='/contact' element={ <Contact_us/>}></Route>
        <Route path='/internship_page' element={ <Intern_Page/>}></Route>


        <Route path='/ds_course_page' element={<DsCoursePage />}></Route>
        <Route path='/python_course_page' element={<PythonCoursePage />}></Route>
        <Route path='/react_course_page' element={<ReactCoursePage />}></Route>
        <Route path='/Java_fullstack_course_page' element={<JavaFullstackCoursePage/>}></Route>
        <Route path='/clanguage_course_page' element={<ClanguageCoursePage/>}></Route>
        <Route path='/machine_learning_course_page' element={<MachineLearningCoursePage/>}></Route>
        <Route path='/data_science_course_page' element={<DataScienceCoursePage/>}></Route>
        <Route path='/software_testing_course_page' element={<SoftwareTestingCoursePage/>}></Route>
        <Route path='/python_fullstack_course_page' element={<PythonFullstackCoursePage/>}></Route>
        
      </Routes>
     
       <Footer></Footer>    
      
    </div>
  );
 
}

export default App
