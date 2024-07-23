import React from "react";
import './internship.css';
import { Link } from "react-router-dom";
import Inter_dropdown from "./Intern_dropdown/Inter_dropdown";
import FormComponent from '../Form/Form';
import InternsyllabusComp from './Java_syllabus/Intern_syllabus.jsx';
import { useState } from "react";
import style from '/training/heading-separator.png';

const data2 = [
    {
        head: "JAVA Introduction",
        p: 'History \n\n\n Features'
    },
    {
        head: "Java Basics & Introduction to Eclipse",
        p: "Post Install Configuration \n Writing a simple program \ncompiling and executing \nData types \nVariables and Arrays \nUsing Eclipse \nCreate packaged classes \nEclipse shortcuts "
    },
    {
        head: "What is the future of Java Programming?",
        p: "Java programming has a promising future, with its wide adoption, robust ecosystem, and continuous updates. It remains a popular choice for enterprise applications, Android development, and emerging technologies like cloud computing and big data."
    },
    {
        head: "What are the advantages of the Java Course in Vijayawada?",
        p: "Our expert-level trainers with 8 plus years of experience have designed this Java course curriculum to teach students to face challenges in real-time industry-based problems. Upon successful completion of the Java course, you will receive a completion certificate from us. Moreover, with the training of Codegnan, students can easily crack OCJP certifications."
    },
    {
        head: "Why should you learn Java Programming?",
        p: "Learning Java programming is valuable because it is widely used in enterprise applications, Android app development, and big data technologies. It offers strong community support, excellent portability, and a vast array of libraries, making it a versatile and in-demand skill."
    },
    {
        head: "What is meant by 24*7 lifetime support?",
        p: "You will get 24*7 support and lifetime access to the LMS, where course materials like presentations, installation guides, & class recordings are available. There will be an email support throughout to clear all your doubts."
    }
];

const syllabusdata = [
    {
        head: " ",
        p: (
            <>
                <h2 style={{ color :"black" }}>Java Training Course <span style={{ color :"red" }} > Curriculum In Bangalore </span></h2><br />
                <Inter_dropdown data={data2} />
            </>
        )
    },
    {
        head: "Machine Learning :",
        p: (
            <>
                #Data Analysis using Python, , #Supervised Learning Algorithms, #Unsupervised Learning, #Algorithms, #Flask, #Git, #Github, #MIT App Inventor
                <ul>
                    {[
                        "All algorithms will be implemented with real use case datasets and finally the Model will be deployed on Web Servers"
                    ].map((item, index) => (
                        <li key={index} style={{ marginLeft: "10px" }}>{item}</li>
                    ))}
                </ul>
            </>
        )
    },
    {
        head: "Deep Learning :",
        p: (
            <>
                #Artificial Neural Networks Implementation from Scratch, #Optimization and Regularization, #Convolutional Neural Networks, #AlexNet, #GoogLeNet, #VGG Transfer, #Learning, #ResNet, #Training in Tensorflow and Keras, #Recurrent , #Neural Networks , #LSTMs, #GANs
            </>
        )
    }
]

const syllabus2data = [
    {
        head: "",
        p: (
            <>
            <Inter_dropdown data={data2} />
                ReactJS, #SQL, #MongoDB, #Express
                <ul>
                    {[
                        "Every Project will be deployed in Amazon Web Services Cloud."
                    ].map((item, index) => (
                        <li key={index} style={{ marginLeft: "10px" }}>{item}</li>
                    ))}
                </ul>
            </>
        )
    },
    {
        head: "Machine Learning :",
        p: (
            <>
                #Data Analysis using Python, , #Supervised Learning Algorithms, #Unsupervised Learning, #Algorithms, #Flask, #Git, #Github, #MIT App Inventor
                <ul>
                    {[
                        "All algorithms will be implemented with real use case datasets and finally the Model will be deployed on Web Servers"
                    ].map((item, index) => (
                        <li key={index} style={{ marginLeft: "10px" }}>{item}</li>
                    ))}
                </ul>
            </>
        )
    },
    {
        head: "Deep Learning :",
        p: (
            <>
                #Artificial Neural Networks Implementation from Scratch, #Optimization and Regularization, #Convolutional Neural Networks, #AlexNet, #GoogLeNet, #VGG Transfer, #Learning, #ResNet, #Training in Tensorflow and Keras, #Recurrent , #Neural Networks , #LSTMs, #GANs
            </>
        )
    },
    {
        head: "Computer Vision :",
        p: (
            <>
                #Opencv, #Image Classification , #Object Detection , #SSD/RetinaNet , #Video , #Object Detection , #YOLO models , #Object Counting , #Pytorch/Tensorflow & Keras , #Optical Character Recognition.
            </>
        )
    },
    {
        head: "Natural Language Processing :",
        p: (
            <>
                #NLTK, #Text Processing, #POS Tagging, #Bag of Words, #Semantics, #Entity Linking, #Information Extraction, #Text Classification, #Sentiment Analysis, #Chatbots, #Alexa, #DialogFlow and #IBM Watson.
            </>
        )
    },
    {
        head: "Internet of Things :",
        p: (
            <>
                #Networking, #Sensor Networks, #Arduino Programming, #Integration of Sensors and Actuators with Arduino, #Implementation of IoT with Raspberry Pi, #Data Handling and Analytics, #Case Studies related to Agriculture, #Activity Monitoring and Healthcare.
            </>
        )
    }

]

export default function Intern_Page() {
    const [year, setYear] = useState('2nd');
    
    return (
        <div className="inter_container">

            {/* <div className="inter_inner_div">
                <span className="home-intern">
                    <Link className="Linkcolor" to="/">Home</Link>&nbsp; &gt; &nbsp;<strong>Internship</strong>
                </span>
                <div className="intern-home-1">
                    <h4><span className="Linkcolor">#1</span> Setting A Benchmark</h4>
                    <h4>In Providing <span className="Linkcolor">"TECH GNAN"</span></h4>
                    <p>
                        Dive into the world of technology and gain valuable insights through hands-on experience. Expand your knowledge and skills with CODE GNAN's internship program.<br /><br />Time to Invest in Your Skills:-
                    </p>

                    <ul>
                        <li>2 months program Frontend</li>
                        <li>6 months program Backend</li>
                    </ul>
                    <br />
                    <div>
                        <span className="internship_rating">( 183 Rating)</span>
                        <i className="fas fa-star star_t_t"></i>
                        <i className="fas fa-star star_t_t"></i>
                        <i className="fas fa-star star_t_t"></i>
                        <i className="fas fa-star star_t_t"></i>
                        <i className="fas fa-star star_t_t"></i>
                        <br /><br /><br />


                    </div>
                    <div>
                        <Link to="your_destination_url" className="explore-button">
                            Explore Program <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
                <center>
                    <div className="services_provided1">
                        {data.map((service, index) => (
                            <div key={index} className='each_service_intern'>
                                <img src={service.img} alt="service icon" />
                                <br />
                                <div className="services_text">
                                    <h4>{service.head}</h4>
                                    <p>{service.p}</p>
                                </div>

                            </div>
                        ))}

                    </div>
                </center>
            </div> */}


            <div className="intern-home3">
                <div className="intern-home-form">
                   
                    <div className="all_year_syllabus">
                        <div className="syllabus-button-container">
                        <button onClick={() => setYear('2nd')}>
                        Course Curriculum
                        </button>
                        <button onClick={() => setYear('3rd')}>
                        Skills covered
                        </button>
                        </div>
                        <hr />
                        <div className="inside_syllabus_container">
                        {year === '2nd' && <InternsyllabusComp data={syllabusdata} />}
                        {year === '3rd' && <InternsyllabusComp data={syllabus2data} />}
                        </div>
                        
                    </div>
                    <div className="intern_from">
                        <h2 className="Linkcolor">Become a Python developer</h2><br />
                        {/* <h1>Benchmark <span className="change_color">Codegnan</span> Internship programs</h1><br /> */}
                        {/* <img src={style} alt="" /> */}
                        {/* <h3>Talk to our Expert</h3><br /> */}
                        <p>Talk to our expert Python mentors and learn how our training programs in Bangalore can help you become a  Python developer and get a high-paying job.</p><br /><br />
                        <FormComponent />
                    </div>
                </div>
            </div><br /><br /><br />


            {/* <div className="intern-home2">
                <center>
                    <h1>Questions Generally Asked About  <span className="Linkcolor">Internship</span></h1>
                    <img src={style} alt="" />
                </center>
                <div className="intern-home-drop">
                    <Inter_dropdown data={data2} />
                </div>
            </div> */}

        </div>
    );
}
