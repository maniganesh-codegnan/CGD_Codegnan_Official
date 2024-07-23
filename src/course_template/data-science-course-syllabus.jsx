import React from "react";
import Course_template from "./Course_template";
import datascience_photo from '/course_images/data-science.webp';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const headdata = {
    title: "Data Science Course Syllabus and Subjects 2024 (PDF included)",
    date: "January 18, 2024",
    img: datascience_photo,
    intro: "If you’re looking to start your career in data science, you should know the key subjects and course syllabus to plan your learning path.\nIn this guide, I have listed all data science course curriculum syllabus for key streams such as M.tech, B.Sc, BCA, and M.Sc (with free downloadable PDF)."
    
};

const coursedata = {
    title: " ",
    p: "",
    // linkText: "full syllabus details here.",
    // syllabusLink: "/full-syllabus-details"
};

const courseSections = [
    

];

const course_brief = [
    {
        intro: () => (
            <>
                <h3>What’s covered in this data science syllabus guide</h3>
                <ul>
                    {[
                        { name: "Full stack training in Vijayawada", link: "/" },
                        { name:  "Data science course syllabus for beginners", link:'/' },
                        { name:  "M.Tech data science syllabus", link:'/' },
                        { name:  "B.Sc data science syllabus", link:'/' },
                        { name:  "M.Sc data science syllabus", link:'/' },
                        { name:  "BCA data science syllabus", link:'/' },
                        { name:  "Data science course subjects and topics to learn", link:'/' },
                        { name:  "Apply for data science classes with codegnan", link:'/' },
                        { name:  "Data scientist study material", link:'/' },
                        { name:  "How much does a data scientist earn in India?", link:'/' },
                        { name:  "Data science course eligibility in 2024 ", link:'/' },
                        { name:  "Is data science a subject in CSE?", link:'/' },
                        { name:  "What are the subjects in data science in the first year?", link:'/' },
                        { name:  "Is data science a high-paying job in 2024?", link:'/' },
                        { name:  "Who can study data science?", link:'/' }
                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link> 
                        </li>
                    ))}
                </ul>
              
            </>
        )

    },
    {
        title: "Data science course syllabus for beginners",
        intro: () => (
            <>
            <p>Below, I have listed the complete course curriculum of our data science training program which is available in online and offline <Link className="link-color" to='#'>Hyderabad and Vijayawada </Link>  training centres:</p>
            <p><Link className="link-color" to='#'>👉 Download the full data science syllabus PDF from here. </Link> </p>
            </>
        )
    },
    {
        title: "",
        intro: () => (
            <>
             
                <br />
               
                <table className="salary-table">
                    {/* <thead>
                        <tr>
                            <th>Module	</th>
                            <th>Java full stack subjects and topics in the syllabus</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        
                        <tr>  
                            <th>Module 1</th>
                            <td>Python Programming</td>
                        </tr>
                        <tr>  
                            <th>Module 2</th>
                            <td> <b>Data science course duration: </b>6 months | English</td>
                        </tr>
                        <tr>  
                            <th>Module 3</th>
                            <td>Statistics</td>
                        </tr>
                        <tr>  
                            <th>Module 4</th>
                            <td>Machine Learning and <Link className="link-color" to='/machine_learning_course_page'> machine learning projects </Link>  for final year students</td>
                        </tr>
                        <tr>  
                            <th>Module 5</th>
                            <td>NLP</td>
                        </tr>
                        <tr>  
                            <th>Module 6</th>
                            <td>Deep Learning</td>
                        </tr>
                        <tr>  
                            <th>Module 7</th>
                            <td>Computer vision</td>
                        </tr>
                        <tr>  
                            <th>Module 8</th>
                            <td>Live projects and challenges</td>
                        </tr>
                        <tr>
                            <th>Data science course dration:</th>
                            <td> 6 months | English</td>
                        </tr>
                        <p>By Codegnan institute</p>
                    </tbody>
           
                </table><br/>

               
            </>
        )
    },
    {
        title: "Module 1. Python Programming",
        intro: "Learning the basics of Python programming is essential for data scientists to manipulate and visualizing data. This section will cover the basic syntax, operators, strings, functions, and other essential details to help you analyse large amounts of data and manipulate them.<br/> <br/><ul>" +
            [
                "Python Introduction and setting up the environment",
                "Python Basic Syntax and Data Types",
                "Operators in Python (e.g., Arithmetic, Logical, Bitwise)",
                "Strings in Python",
                "Lists",
                "Tuples",
                "Sets",
                "Dictionaries",
                "Python conditional statements (e.g., if, if-else, if-elif-else)",
                "Loops in Python (e.g., while, for, break, continue)",
                "Getting Started with HackerRank use cases and working on them",
                "List and Dictionaries comprehension",
                "Functions",
                "Anonymous Functions (Lambda)",
                "Generators",
                "Modules",
                "Exceptions and Error Handling",
                "Classes and Objects (OOPS) (including different types of methods, inheritance, ","polymorphism, operator overloading, overriding)",
                "Date and Time",
                "Regex (e.g., re.search(), re.compile(), re.find(), re.split())",
                "Files (including opening, closing, reading and writing files)",
                "APIs the Unsung Hero of the Connected World",
                "Python for Web Development – Flask",
                "Hands-On Projects (Web Scraping, Sending Automated Emails, Building a Virtual Assistant)"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 2. Data Analysis",
        intro: "Data analysis helps you in making informed decisions with data exploration and visualization using advanced tools. This section will cover the basics along with teaching you how to scrape data from websites using libraries like BeautifulSoup and handling and storing them in appropriate formats. <br/> <br/><ul>" +
            [
                "Packages (Working on Numpy, Pandas, and Matplotlib)",
                "Web Scraping (learning about tools, libraries and ethical considerations)",
                "Exploratory data analysis (EDA) using Pandas and NumPy",
                "Data Visualization using Matplotlib, Seaborn, and Plotly",
                "Database Access",
                "Tableau",
                "Power BI"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 3. Statistics",
        intro: "The specific topics covered in the statistics section give you an overview of descriptive statistics and inferential statistics that provide the foundation for understanding and analyzing complex data. Explore the statistical foundations for data signs from this section and apply them to data analysis projects.<br/> <br/><ul>" +
            [
                "Descriptive Statistics (including central tendency, variance, standard deviation, covariance, correlation, probability)",
                "Inferential Statistics (including Central limit theorem, hypothesis testing, one-tailed and two-tailed test, and Chi-Square test)"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 4. Machine Learning",
        intro: "This part of the syllabus comprises mathematical models and algorithms that are needed in coding machines to adapt them to real-world challenges. The course comprises basic knowledge of machine learning and its three main types: supervised, unsupervised, and reinforcement learning among other essential topics.<br/> <br/><ul>" +
            [
                "Introduction to Machine Learning",
                "Introduction to data science and its applications",
                "Data Engineering and Preprocessing",
                "Model Evaluation and Hyperparameter Tuning",
                "Supervised Learning – Regression",
                "Supervised Learning – Classification",
                "SVM, KNN & Naive Bayes",
                "Ensemble Methods and Boosting",
                "Unsupervised Learning – Clustering",
                "Unsupervised Learning – Dimensionality Reduction",
                "Recommendation Systems",
                "Reinforcement Learning",
                "Developing API using Flask / Webapp with Streamlit",
                "Deployment of ML Models",
                "Project Work and Consolidation"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 5. NLP",
        intro: "Natural Language Processing NLP helps machines understand and create human language. This section will teach you Named Entity Recognition, text pre-processing, and text representation, along with applications ranging from sequential modelling, and building sentiment analysis. <br/> <br/><ul>" +
            [
                "Natural Language Processing (NLP) (including NER, text representation, sequential model, sentiment analysis)"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 6. Deep Learning ",
        intro: "This section allows you to master advanced topics like CNN (Convolutional Neural Networks), RNN (Recurrent Neural Networks), Neural Network architecture, and more.<br/> <br/><ul>" +
            [
                "RISE OF THE DEEP LEARNING",
                "Artificial Neural Networks",
                "Convolution Neural Networks",
                "CNN – Transfer Learning",
                "RNN – Recurrent Neural Networks",
                "Generative Models and GANs"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 7.  Computer Vision",
        intro: "The computer vision syllabus allows you to understand how to create algorithms for computers to read and write data sent via images or videos. <br/> <br/><ul>" +
            [
                "Computer Vision (including reading and writing images, drawing shapes using OpenCV, reason eye detection using OpenCV, VGG, CNN with Keras)"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Bonus Module: Projects & Case Study",
        intro: " <br/><ul>" +
            [
                "Real-Time Rain Prediction using ML",
                "Real-Time Drowsiness Detection Alert System",
                "House Price Prediction using LSTM",
                "Customizable Chabot using OpenAI API",
                "Fire and Smoke Detection using CNN"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    
 
    {
        title: "M.Tech data science syllabus",
        intro: () => (
            <>
                <p>The salary of full-stack Java developers in India usually ranges between ₹2.0LPA and ₹13.0LPA. Presently, the average annual salary of these professionals is around ₹6.8L. It means you have an average take-home salary per month of about ₹33,547 – ₹34,809. </p>
            </>
        )
    },
    {
        title: " ",
        intro: () => (
            <>
                <p>The table below gives an overview of the salary range for Java full-stack developers in the top 3 Indian cities.</p><br/><br/>
                <table className="salary-table">
                    <thead>
                        <tr>
                           <th> Semester</th>
                           <th> Modules</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td> Semester-I	</td>
                            <td>
                                <ul className="space">
                                    <li> Computational Linear Algebra</li>
                                   
                                    <li> Optimization Techniques for Data Science</li>
                                    <li> Machine Learning</li>
                                    <li> Data Structures and Algorithms for Data Science</li>
                                    <li> SC-1</li>
                                    <li> Research Methodology</li>
                                    <li> Career Competency – I</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td> Semester-II	</td>
                            <td>
                                <ul className="space">
                                        <li>Deep Learning</li>
                                        <li>SC-2</li>
                                        <li>SC-3</li>
                                        <li>SC-4</li>
                                        <li>Elective 1</li>
                                        <li>Elective 2</li>
                                        <li>Career Competency – II</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td> Semester -III	</td>
                            <td>
                                <ul className="space">
                                    <li>Elective 3</li>
                                    <li>Elective 4</li>
                                    <li>Dissertation I</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                           <td>Semester IV	</td>
                           <td>
                            <ul className="space">
                                <li>Dissertation II</li>
                            </ul>
                           </td>
                        </tr>                       
                    </tbody>
                </table>
            </>
        )
        
    },
    {
        title: " ",
        intro: () => (
            <>
                <table className="salary-table">
                    <thead>
                        <tr>
                           <th> List of Courses</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>
                                <p><b> Core Subjects</b></p>
                                <ul className="space">
                                <li> Computational Linear Algebra</li>
                                <li> Optimization Techniques for Data Science</li>
                                <li> Data Structures and Algorithms for Data Science</li>
                                <li> Machine Learning</li>
                                <li> Deep Learning</li>
                                </ul>
                                </td>
                            
                        </tr>         
                    </tbody>
                </table>
            </>
        )
    },
    {
        title: " ",
        intro: () => (
            <>
                <table className="salary-table">
                    <thead>
                        <tr>
                           <th>Subject Core (SC)</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>
                                <ul className="space">
                                    <li> Embedded Computing & Realtime OS for Data Science</li>
                                    <li> Research Methodology</li>
                                    <li> Introduction to Probabilistic Graphical Models</li>
                                    <li> Scientific Computing</li>
                                    <li> Text Mining and Analytics</li>
                                    <li> Big Data Framework for Data Science</li>
                                    <li> Statistical Modelling</li>
                                    <li> Advanced Data Visualization and Analytics</li>
                                </ul>
                            </td>
                            
                        </tr>         
                    </tbody>
                </table>
            </>
        )
    },
    {
        title: " ",
        intro: () => (
            <>
                <table className="salary-table">
                    <thead>
                        <tr>
                           <th>Electives</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>
                                <ul className="space">
                                    <li> AI Applications for Power Systems</li>
                                    <li> Deep Learning in Genomics and Biomedicine</li>
                                    <li> Deep Learning for Biomedical Data Analysis</li>
                                    <li> Deep Learning for Speech Signal Processing</li>
                                    <li> Social Media Analytics</li>
                                    <li> Deep Learning for Visual Recognition</li>
                                    <li> Deep Learning for Cyber Security</li>
                                    <li> Complex Systems in Engineering, Finance & Biology: Modelling & Analysis</li>
                                    <li> High Performance Computing</li>
                                    <li> Multiscale Fluid Modelling</li>
                                    <li> Computer Vision</li>
                                    <li> Reinforcement Learning</li>
                                    <li> Blockchain Technology</li>
                                    <li> Predictive Analytics for Internet of Things</li>
                                    <li> Cloud Computing and Security in the Cloud</li>
                                </ul>
                            </td>
                            
                        </tr>         
                    </tbody>
                </table>
                <strong className="download_course_syllabus"><span className='show-right'> &#9758; </span> Download the M.Tech data science course syllabus PDF: <Link className="link-color" to='/'> M.Tech data science curriculum</Link> </strong>
            </>
        )
    },
    {
        title: "B.Sc data science syllabus",
        intro: () => (
            <>
                <p>B.Sc data science is a 3-year graduate program having 6 semesters that revolves around the core data science subjects. Some of these are compulsory papers and a few of them are elective papers that you can choose from a huge range of options. The main topics covered in the course are mentioned in the table and for more details download the <Link to="#" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> B.Sc data science course syllabus PDF.  </Link></p>
            </>
        )
    },
    {
        title: " ",
        intro: () => (
            <>
                <table className="salary-table">
                    <thead>
                        <tr>
                            <th> Semester	</th>
                            <th> Modules</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Semester-I</td>
                            <td>
                                <ul className="space">
                                    <li>Communicative English</li>
                                    <li>Linear Algebra & Calculus</li>
                                    <li>Computer Architecture</li>
                                    <li>Problem Solving and Programming using C</li>
                                    <li>Digital System Design</li>
                                    <li>Ethics and Human Values</li>
                                </ul>
                            </td>
                        </tr>       
                        <tr>
                            <td>Semester-II</td>
                            <td>
                                <ul className="space">
                                    <li>Principles of Data Science</li>
                                    <li>Fundamentals of Statistics</li>
                                    <li>Operating Systems</li>
                                    <li>Database Management System</li>
                                    <li>Computer Networks</li>
                                </ul>
                            </td>
                        </tr> 
                        <tr>
                            <td>Semester-III</td>
                            <td>
                                <ul className="space">
                                    <li>Probability Theory</li>
                                    <li>Cloud Computing</li>
                                    <li>Advanced Database Technologies</li>
                                    <li>Web Programming</li>
                                    <li>Data Mining</li>
                                    <li>Operation Research</li>
                                </ul>
                            </td>
                        </tr>   
                        <tr>
                            <td>Semester-IV</td>
                            <td>
                                <ul className="space">
                                    <li>Data Handling and Visualization</li>
                                    <li>Machine Learning</li>
                                    <li>Optimization Techniques</li>
                                    <li>Big Data Analytics</li>
                                    <li>PEC1</li>
                                </ul>
                            </td>
                        </tr> 
                        <tr>
                            <td>Semester-V</td>
                            <td>
                                <ul className="space">
                                    <li>Deep Learning</li>
                                    <li>Natural Language Processing</li>
                                    <li>PEC 2</li>
                                    <li>PEC 3</li>
                                </ul>
                            </td>
                        </tr> 
                        <tr>
                            <td>Semester-VI</td>
                            <td>
                                <ul className="space">
                                    <li>Stream Processing Analytics</li>
                                    <li>PEC 4</li>
                                    <li>PEC 5</li>
                                </ul>
                            </td>
                        </tr> 
                        <tr>
                            <td>PEC</td>
                            <td>
                                <ul className="space">
                                    <li>Program Elective Course (PEC) -1
                                        <ul className="space1" >
                                            <li>Cloud Services for IoT</li>
                                            <li>Business Analytics</li>
                                            <li>Business Intelligence</li>
                                            <li>Intelligent Database System</li>
                                            <li>Digital Marketing Analytics</li>
                                            <li>Internet of Things</li>
                                        </ul>
                                    </li>
                                </ul>
                            </td>
                        </tr> 
                        <tr>
                            <td>PEC – 2 & 3</td>
                            <td>
                                <ul className="space">
                                    <li>Augmented Reality & Virtual reality</li>
                                    <li>Linux Programming</li>
                                    <li>Image Processing and Analysis</li>
                                    <li>Healthcare Analytics</li>
                                    <li>Data mining using R</li>
                                    <li>Text Analytics</li>
                                </ul>
                            </td>
                        </tr> 
                        <tr>
                            <td>PEC – 4 & 5</td>
                            <td>
                                <ul className="space">
                                    <li>High-Dimensional Data Analysis</li>
                                    <li>Cyber Forensic analytics</li>
                                    <li>Social Network Analytics</li>
                                    <li>IoT cloud and data analytics</li>
                                    <li>Predictive Modeling Analysis</li>
                                </ul>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </>
        )
    },
    {
        title: "M.Sc data science syllabus",
        intro: () => (
            <>
                <p>M.Sc data science course is a 2-year postgraduate course comprising 4 semesters. The below table consists of the major topics, find the M.Sc data science syllabus PDF for more details. <Link to="#" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> M.Sc data science syllabus PDF </Link>for more details. </p>
            </>
        )
    },

    {
        title: " ",
        intro: () => (
            <>
                <table className="salary-table">
                    <thead>
                        <tr>
                            <th> Semester	</th>
                            <th> Modules</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Semester-I</td>
                            <td>
                                <ul className="space">
                                    <li> Linear Algebra</li>
                                    <li> Probability and Statistics</li>
                                    <li> Principles of Data Science</li>
                                    <li> Database Management Systems</li>
                                    <li> Python and R Programming</li>
                                    <li> Elective-I</li>
                                </ul>
                            </td>
                        </tr>       
                        <tr>
                            <td>Semester-II</td>
                            <td>
                                <ul className="space">
                                    <li> Optimization Techniques Using MATLAB</li>
                                    <li> Multivariate Data Analysis</li>
                                    <li> Machine Learning Techniques</li>
                                    <li> Data Mining</li>
                                    <li> IoT Analytics</li>
                                    <li> Elective-II</li>
                                </ul>
                            </td>
                        </tr> 
                        <tr>
                            <td>Semester-III</td>
                            <td>
                                <ul className="space">
                                    <li> Big Data Analytics</li>
                                    <li> Deep Learning Techniques</li>
                                    <li> Data Privacy and Security</li>
                                    <li> Elective-III</li>
                                    <li> Elective-IV</li>
                                </ul>
                            </td>
                        </tr>   
                        <tr>
                            <td>Semester-IV</td>
                            <td>
                                <ul className="space">
                                    <li>Project Work</li>
                                    <li>Elective papers
                                        <ul className="space">
                                            <li>Elective – I
                                                <ul className="space">
                                                    <li> Design of Algorithms</li>
                                                    <li> Artificial Intelligence</li>
                                                    <li> Business Intelligence</li>
                                                </ul>
                                            </li>
                                            <li>Elective – III
                                                <ul  className="space">
                                                   <li> Natural Language Processing</li>
                                                   <li> Social Media Analytics</li>
                                                   <li> Health Care Analytics</li>
                                                   <li> Nature Inspired Computing</li>
                                                </ul>
                                            </li>
                                            <li>Elective – IV
                                                <ul className="space">
                                                    <li>Cloud Security</li>
                                                    <li>Sentiment Analysis</li>
                                                    <li>Text Analytics</li>
                                                    <li>Marketing Analytics</li>
                                                </ul>
                                                
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </td>
                        </tr> 
                        
                    </tbody>
                </table>
             
            </>
        )
    },
    {
        title: "BCA data science syllabus ",
        intro: () => (
            <>
            <p> BCA data science course is a 3-year graduate program that comprises 6 semesters. It covers multiple areas of data science and the main topics are mentioned in the below table. For more details on the course, you can check out the <Link to="/" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> BCA data science syllabus PDF.  </Link> </p>

            </>
        )
    },

    {
        title: " ",
        intro: () => (
            <>
                <table className="salary-table">
                    <thead>
                        <tr>
                            <th>Semester	</th>
                            <th> Modules</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Semester-I</td>
                            <td>
                                <ul className="space">
                                    <li> General English-I</li>
                                    <li> Algebra, calculus and trigonometry</li>
                                    <li> Computer fundamentals & organization</li>
                                    <li> Programming in C</li>
                                    <li> Operating system</li>
                                </ul>
                            </td>
                        </tr>       
                        <tr>
                            <td>Semester-II</td>
                            <td>
                                <ul className="space">
                                    <li> General English-II</li>
                                    <li> Probability and statistics</li>
                                    <li> Introduction to data science</li>
                                    <li> OOPS with C++</li>
                                    <li> Data structure using C</li>
                                    <li> Environmental studies</li>
                                </ul>
                            </td>
                        </tr> 
                        <tr>
                            <td>Semester-III</td>
                            <td>
                                <ul className="space">
                                    <li> Reasoning and thinking</li>
                                    <li> Database Management systems</li>
                                    <li> Computer networks</li>
                                    <li> Linear algebra</li>
                                    <li> Scientific programming using R</li>
                                </ul>
                            </td>
                        </tr>   
                        <tr>
                            <td>Semester-IV</td>
                            <td>
                                <ul className="space">
                                    <li> Inferential statistics</li>
                                    <li> NoSQL Databases</li>
                                    <li> Big Data Analytics</li>
                                    <li> Cloud computing</li>
                                    <li> Exploratory data analysis</li>
                                    <li> Employability skills</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Semester-VI</td>
                            <td>
                                <ul className="space">
                                    <li> Time series analysis</li>
                                    <li> Data analytics using Ms Excel and SQL</li>
                                    <li> Machine learning algorithms</li>
                                    <li> Elective-I</li>
                                    <li> Elective-II</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Elective Papers</td>
                            <td>
                                <ul className="space">
                                    <li>Elective-I
                                        <ul className="space">
                                            <li>Internet of Things</li>
                                            <li>Artificial Intelligence</li>
                                            <li>Mobile Computing</li>
                                        </ul>
                                    </li>
                                    <li>Elective-II
                                        <ul className="space">
                                            <li>Python Programming</li>
                                            <li>Java Programming</li>
                                            <li>Data Visualization</li>
                                        </ul>
                                    </li>
                                    <li>Elective-III
                                        <ul className="space">
                                        <li>Data Science Project Management</li>
                                        <li>Software Engineering</li>
                                        <li>Agile Methodology</li>
                                        </ul>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    
                        
                    </tbody>
                </table>
            </>
        )
    },

    {
        title: "Data science course subjects and topics to learn",
        intro: () => (
            <>
            <h3>1. Python Programming</h3>
             <p> Learning Python for data scientists allows them to analyse data and build machine learning models. This data science module teaches you the basic syntax and data types, operators, strings, lists, tuples, sets, dictionaries, conditional statements, loops, functions, generators, exceptions and error handling, classes and objects, files, and more.</p>

            <p>Proper understanding and implementation of Python programming can help you solve real-world problems with data.</p>

            </>
        )
    },
    
    {
        title: "2. Data exploration and visualization",
        intro: () => (
            <>
             <p>Data exploration helps you understand data by summarising them, identifying patterns and making inferences. On the other hand, data visualisation refers to communicating the data through visual representations. These are essential skills for data scientists to better understand and communicate data and make informed and critical decisions. </p>

            </>
        )
    },
    
    {
        title: "3. Statistics",
        intro: () => (
            <>
             <p>Statistics and probability in data science help you understand data distributions, make inferences and build data models. Mastering statistical methods is essential for insightful data analysis and complex business forecasting.</p>

            </>
        )
    },
    
    {
        title: "4. Machine Learning",
        intro: () => (
            <>
            <p>Machine learning is also the core part of data science that teaches you on how to develop algorithms that help computers learn data patterns and make complex decisions. Subfields of machine learning mainly comprise three topics: supervised learning, unsupervised learning, and reinforcement learning. </p>

            <p> It also comprises metrics used in evaluating ML models. Learning these concepts of machine learning will help you solve real-world problems. </p>

            </>
        )
    },
    
    {
        title: "5. Natural Language Processing NLP",
        intro: () => (
            <>
            <p>NLP covers everything about text analysis and tokenization, as well as text preprocessing and representation. This allows students to analyse text to extract better meaning and draw conclusions. </p>

            </>
        )
    },
    
    {
        title: "6. Deep Learning",
        intro: () => (
            <>
                <p>Understanding of deep learning can help you explore advanced topics such as Neural Network architecture and Transfer Learning techniques. These are often used for natural language processing, image recognition, and more.</p>

            </>
        )
    },
    
    {
        title: "7. Computer Vision",
        intro: () => (
            <>
            <p>It allows you to understand how to develop algorithms that allow computers to interpret and understand visual data often used for video and image analysis.</p>

            </>
        )
    },
    {
        title: "8. Database Access",
        intro: "Knowledge of databases and SQL is critical for data retrieval and storage, as it allows data scientists to interact with structured datasets and perform complex analyses.<br/> <br/><ul>" +
            [
                "Introduction to databases",
                "SQL basics",
                "MySQL setup and queries",
                "Analyzing scraped datasets using SQL"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "9. Excel and Visualization Tools",
        intro: "Excel and visualization tools like Tableau and Power BI are vital for communicating data insights visually, making complex data more accessible and understandable.<br/> <br/><ul>" +
            [
                "Excel basics and functions",
                "Visualization with Tableau",
                "Power BI for data analysis and visualization"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "10. Reinforcement Learning",
        intro: "Why learn this: Reinforcement learning principles are valuable for creating systems that learn from interactions, allowing data scientists to build models capable of making sequential decisions and learning from feedback.<br/> <br/><ul>" +
            [
                "Basics of reinforcement learning",
                "Markov Decision Processes (MDP)",
                "Q-learning",
                "Working with OpenAI Gym"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Apply for data science classes with codegnan",
        intro: () => (
            <>
            <p>Data science is a trending profession today, and the demand for data scientists is on the rise. If you want to be a part of it, take up a data science course from Codegnan. </p>

            <p>You can get a clear understanding of data science subjects and experience real-world projects. We also share <Link to="/" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> data science trends </Link> or news related to it for your knowledge growth. </p>

            </>
        )
    },
    {
        title: "Why join codegnan’s data science training programs:",
        intro: "  <br/><ul>" +
            [
                " 6-month core data science course ",
                " Classes will be taken 2 hours daily for 6 days a week (Monday-Saturday) ",
                " In-hand training along with theoretical knowledge",
                " Gain experience on 25 real use cases during the course",
                " Get online assistance on doubt clearance, career guidance, monitoring session, interview preparation & mock interviews",
                " In-hand practice on real-world projects for different modules",
                " Improve knowledge with our assignments and quizzes for each module",
                " Get access to training materials like lab exercises, codes, data sets, and case studies on real data",
                " Check-out recorded live session",
                " Real-time training with live scenarios and applications"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        intro: () => (
            <>
                
                <p>👉 Enroll for codegnan’s classroom training:</p>
                <ul>
                    {[
                        { name: "Data science training course in Hyderabad", link: "/data-science-in-hyderabad", duration: "6 month" },
                        { name: "Vijayawada data science training", link: "/data-science-in-vijayawada", duration: "6 month" }

                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link> ({program.duration})
                        </li>
                    ))}
                </ul>
                <br />
                <p>👉 <Link to="/contact_us" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> Contact our team ,</Link> for online data science courses.</p>
            </>
        )

    },
    {
        title: "Data scientist study material ",
        intro: () => (
            <>
                <p>If you’re looking for a clear <Link to="https://10pie.com/data-science-career-paths/" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> data science career roadmap and career paths, </Link> check out our free webinar where our experts have shared a guide on how to start your data science career.</p><br/>

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/JRj1r4kOrrE?si=AM-fr2q844b07LWg" title="YouTube video player" f
                rameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen className="video">
                </iframe>
                <p>Here are other free resources where you start learning relevant data science skills:</p>
            </>
        )
    },
    {
        title: "1. Free Data Science course by Barton Poulson",
        intro: () => (
            <>
                <p>This course is specially designed for beginners. You can learn the core of Data Science within 6 hours and have the flexibility to complete the course at your own pace.</p> 
                <p> It covers the introduction to data science, data sourcing, coding, mathematics, and statistics. </p>
                <p> Follow the link:.</p><br/>

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/ua-CiDNNj30?si=bJnzVx1hS7wxpEF5" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="video"></iframe>
             
            </>
        )
    },
    {
        title: "2. Free Data Science course for beginners by codebasics",
        intro: () => (
            <>
                <p>It is a course for beginners; even the ones with no computer science background can follow the entire series to learn core data science. </p>

                <p>The course is subdivided into multiple parts and mainly covers Python, Jupyter Notebook, Numpy, Pandas, Matpotlib, machine learning and deep learning tools, and more.</p><br/>

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/JL_grPUnXzY?si=NWoNwo6W5yp5lp4t" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen className="video"></iframe>
             
            </>
        )
    },

    {
        title: "How much does a data scientist earn in India? ",
        intro: () => (
            <>
                <p>Data science is among the highest-paying tech jobs in India with an average salary <Link to="https://www.linkedin.com/jobs/full-stack-java-developer-jobs/?currentJobId=3829882593" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> ranging from ₹3.9-27.9 lakhs </Link> per annum for professionals with relevant skills and some years of experience.</p>

                <img src="/syllabuspages/data-science-salary.png" alt="" width="100%"/><br/><br/>

                <p>👉 Learn about the  <Link to="/" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> future career scope of data scientists in India. </Link> </p>
            </>
        )
    },
    
    {
        title: "Data science course eligibility in 2024 ",
        intro: () => (
            <>
                <p>To qualify for the data science course, candidates must have a Science or Engineering graduation with 50% aggregate and Mathematics/Statistics/Computer Science/Information Technology as a core subject.</p>

                <p>However, to enroll in codegnan’s data science training classes, you need to secure a minimum of 60% in B.Tech/B.Sc/MCA/BCA, and 60% or above in both Intermediate and 10th class examinations.</p>

                <p>👉 <Link to="/contact_us" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> Talk to our experts </Link> to learn how our course will help in your data science career.</p>
            </>
        )
    },
    {
        title: "Is data science a subject in CSE? ",
        intro: () => (
            <>
                <p>Yes, data science is now a subject in Computer Science and Engineering (CSE) that puts emphasis on core data science subjects with related computational mathematics, statistics, and computer science subjects.</p>
            </>
        )
    },
  
    {
        title: "What are the subjects in data science in the first year?",
        intro: () => (
            <>
                <p>The core subjects in data science in the first year comprise linear algebra, probability, basic statistics, discrete mathematics, probability, business intelligence, programming languages like Python and R, machine learning, and data manipulation.</p>
            </>
        )
    },
    {
        title: "Is data science a high-paying job in 2024?",
        intro: () => (
            <>
                <p>Data scientists are highly paid in India and the US as the demand for data keeps increasing across most industries. This is mainly because the demand for data scientists is increasing massively globally, but the supply of qualified scientists is fairly low. According to AmbitionBox, data scientists in India can earn nearly  <Link to="https://www.ambitionbox.com/profile/data-scientist-salary" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> ₹27.9LPA, </Link>  which is nearly ₹2.3L per month. </p>
            </>
        )
    },
    {
        title: "Who can study data science?",
        intro: () => (
            <>
                <p>Usually, students from science, maths, technology, or engineering backgrounds qualify for data science courses. However, professionals from non-tech domains can also start learning data science through online courses and transition into these roles. Programming experience is a must to effectively leverage data science.</p>
            </>
        )
    },

];

const nav_interview = [
    {
        name: "Data Science and AI Companies building tomorrow on Fast Track",
        link: "/"
    },
    {
        name:" Future Scope Of Data Science Career in India (2024)",
        link:"/"
    }
];

export default function JavaCoursePage() {
    return (
        <div>
            <Helmet>
                <title>Data Science Course Syllabus and Subjects 2024 (PDF included)</title>
                <meta name="description" content="Find the complete course curriculum and subject syllabus of data science for different streams such as M.sc, B.Tech, BCA with free PDF." />
            </Helmet>
            <Course_template head={headdata} course={coursedata} section={courseSections} coursep={course_brief} inter_links={nav_interview} />
        </div>
    );
}
