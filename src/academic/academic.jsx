import React from 'react';
import './acaademic.css';
import style from '/training/heading-separator.png';
import Box from './academic_box_component/box';

const academic_box_content = [
    {
        image:"/academic_images/online-python-min.webp",
        headlink: "Online Python Programming Course",
        trainer: "Saketh Kallepu",
        price: "Free",
        p: "This free online Python course covers fundamentals like data types, operators, control flow, functions, and object-oriented programming to help beginners build a strong foundation.<br><br>It includes lessons, quizzes, projects like virtual assistant and web development with Flask to provide practical learning.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"135 Lessons"
    },
    {
        image:"/academic_images/online-c-prgm-min.webp",
        headlink:"Online C programming Course",
        trainer:"Siva Ram",
        price:"Free",
        p:"The online C programming course covers all key areas of the language, including syntax, data types, control structures, functions, pointers, memory management, file handling, and data structures. It offers practical exercises, quizzes, and projects to reinforce learning and practical skills, such as creating applications, algorithms, and small-scale software projects.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"94 Lessons"
    },
    {
        image:"/academic_images/html-and-Css.webp",
        headlink:"Online HTML and CSS Course",
        trainer:"Siva Ram",
        price:"Free",
        p:"The online HTML and CSS course provides comprehensive instruction in both languages, covering HTML for structuring web content and CSS for styling and formatting. Students will learn essential concepts such as HTML tags, elements, attributes, and CSS selectors, properties, and values.<br><br>The course offers practical exercises, quizzes, and projects to reinforce learning and practical skills. By the end of the course, students will be proficient in creating and styling web pages using HTML and CSS.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"117 Lessons"
    },
    {
        image:"/academic_images/Augmented-reality.webp",
        headlink:"Online Augumented reality Course",
        trainer:"Vamsi",
        price:"Free",
        p:"Augmented reality (AR) seamlessly integrates virtual elements into the real world, enriching experiences by blending digital and physical environments. Through devices like smartphones and AR glasses, users can interact with overlaid digital content, such as 3D models or information overlays, enhancing tasks ranging from gaming to retail shopping.<br><br>This technology revolutionizes how we perceive and interact with our surroundings, offering immersive and engaging experiences across various industries and applications.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"67 Lessons"
    },
    {
        image:"/academic_images/Augmented-reality.webp",
        headlink:"Getting Started with RASPBERRY PI",
        trainer:"Rabbani",
        price:"Free",
        p:"The “Getting Started with Raspberry Pi” online course equips participants with essential skills for utilizing Raspberry Pi in diverse projects, covering hardware setup, basic programming, and practical applications. Through hands-on experience and step-by-step tutorials, learners unlock the full potential of Raspberry Pi, making it ideal for beginners and hobbyists.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"19 Lessons"
    },
    {
        image:"/academic_images/online-java-full-stack.webp",
        headlink:"Java full stack development Course",
        trainer:"Subramanya Raj",
        price:"999",
        p:"The online Java full stack development course covers front-end and back-end technologies like Java, HTML/CSS, JavaScript, Spring, and Hibernate, preparing participants for careers as full stack developers through hands-on projects and practical training. ",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"63 Lessons"
    },
    {
        image:"/academic_images/online-react-js.webp",
        headlink:"Online ReactJS Course",
        trainer:"Siva Ram",
        price:"999",
        p:"ReactJS, renowned for its component-based architecture, facilitates the creation of dynamic user interfaces in web applications through efficient rendering and reusable components, offering developers a streamlined approach to building interactive experiences.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"37 Lessons"
    },
    {
        image:"/academic_images/online-data-analysis.webp",
        headlink:"Online Data analysis Course",
        trainer:"Manvendra",
        price:"999",
        p:"Data analysis involves examining data to extract insights, driving informed decisions across industries through statistical analysis and machine learning techniques, enhancing efficiency and competitiveness.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"102 Lessons"
    },
    {
        image:"/academic_images/online-machine-learning.webp",
        headlink:"Machine learning using Python",
        trainer:"Saketh Kallepu",
        price:"999",
        p:"Machine learning with Python utilizes libraries like scikit-learn, TensorFlow, and Keras for model development. Python’s versatility and extensive libraries make it a top choice for implementing various machine learning algorithms. Through practical exercises, learners gain hands-on experience in applying machine learning techniques to real-world data.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"129 Lessons"
    },
    {
        image:"/academic_images/online-Azure.webp",
        headlink:"Microsoft Azure AI Fundamentals[AI-900]",
        trainer:"Manvendra",
        price:"599",
        p:"The Microsoft Azure AI Fundamentals [AI-900] course provides an introduction to AI concepts and their implementation on the Azure platform. Participants learn about machine learning, natural language processing, and computer vision, gaining foundational knowledge for AI-related roles. Completion of the course prepares learners to delve deeper into Azure AI services and pursue advanced certifications",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"95 Lessons"
    },
    {
        image:"/academic_images/online-Python-Web-Framework-Flask.webp",
        headlink:"Python web framework - flask Course",
        trainer:"Eswar",
        price:"499",
        p:"The Python web framework Flask course teaches participants how to build web applications using Flask’s lightweight and flexible framework. Through practical exercises, learners acquire skills in creating routes, handling requests, and rendering templates for dynamic web development. This course offers hands-on experience, making it ideal for beginners looking to become proficient in Flask for web development.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"46 Lessons"
    },
    {
        image:"/academic_images/online-MySQL-course.webp",
        headlink:"Online MySQL Course",
        trainer:"Eswar",
        price:"499",
        p:"MySQL is an open-source relational database management system (RDBMS) renowned for its reliability and ease of use. It efficiently stores and retrieves data using structured query language (SQL), making it a top choice for web applications and organizations worldwide.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"74 Lessons"
    },
    {
        image:"/academic_images/online-JS.webp",
        headlink:"Online Javascript Course",
        trainer:"Saketh Kallepu",
        price:"499",
        p:"The online JavaScript course offers practical training in JavaScript programming, covering essential concepts for web development in a concise format, making it suitable for beginners.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"142 Lessons"
    },
    {
        image:"/academic_images/Online-NodeJS-Course.webp",
        headlink:"Online NodeJS Course",
        trainer:"Bhagath Sainath",
        price:"399",
        p:"The online Node.js course offers practical training in building efficient network applications with JavaScript, focusing on event-driven programming and non-blocking I/O, suitable for both beginners and experienced developers.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"41 Lessons"
    },
    {
        image:"/academic_images/online-Web-development-using-Python.webp",
        headlink:"Web development using Python",
        trainer:"Ravi Chandra",
        price:"399",
        p:"The online Python web development course offers practical training in creating web applications with Python, covering frameworks like Django and Flask. Participants learn essential concepts like routing, templating, and database integration, making it suitable for beginners and those looking to enhance their skills in web development. Through hands-on projects and exercises, learners gain proficiency in building dynamic and scalable web applications using Python.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"30 Lessons"
    },
    {
        image:"/academic_images/Python-mini-projects.webp",
        headlink:"Python mini projects",
        trainer:"Manvendra",
        price:"399",
        p:"The online Python mini projects course offers practical training in building small-scale projects to reinforce programming concepts. Participants learn to develop simple applications such as calculators, to-do lists, weather apps, and basic games using Python. Through hands-on exercises and guided tutorials, learners gain proficiency in Python programming while creating practical and fun projects.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"54 Lessons"
    },
    {
        image:"/academic_images/Internet-of-Things-using-Nodemcu.webp",
        headlink:"Internet of Things using NodeMCU",
        trainer:"Rabbani",
        price:"299",
        p:"The online IoT using NodeMCU course offers basic training in building IoT projects with NodeMCU, focusing on connecting sensors, collecting data, and cloud communication, ideal for beginners in IoT technology.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"28 Lessons"
    },
    {
        image:"/academic_images/Getting-Started-with-Arduino-Uno.webp",
        headlink:"Getting Started with Arduino Uno",
        trainer:"Rabbani",
        price:"299",
        p:"The online Getting Started with Arduino Uno course offers basic training in Arduino programming and hardware essentials, suitable for beginners interested in electronics and embedded systems.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"26 Lessons"   
    },
    {
        image:"/academic_images/Google-ARCore-Using-Unity-min.webp",
        headlink:"Google ARCore Using Unity",
        trainer:"Vamsi",
        price:"299",
        p:"The online Google ARCore Using Unity course provides basic training in creating augmented reality (AR) applications with Unity and Google’s ARCore platform, suitable for beginners and experienced developers interested in AR technology.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"33 Lessons"   
    },
    {
        image:"/academic_images/WebScraping-with-Python.webp",
        headlink:"Web Scraping with Python",
        trainer:"Manvendra",
        price:"Free",
        p:"The online Web Scraping with Python course provides basic training in extracting data from websites using Python, ideal for beginners and data enthusiasts looking to automate data extraction tasks.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"10 Lessons"
    },
    {
        image:"/academic_images/WordPress-with-Oxygen-Builder.webp",
        headlink:"WordPress with Oxygen Builder",
        trainer:"Jeswanth",
        price:"Free",
        p:"The WordPress with Oxygen Builder course offers straightforward training in creating websites using WordPress and Oxygen Builder, focusing on visual design and customization without coding, suitable for beginners and experienced web developers.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"14 Lessons"
    },
    {
        image:"public/academic_images/Introduction-to-Computer-Vision.webp",
        headlink:"Introduction to Computer Vision",
        trainer:"Manvendra",
        price:"Free",
        p:"The Introduction to Computer Vision course provides fundamental training in understanding and applying computer vision techniques. Participants learn about image processing, feature extraction, object detection, and image recognition algorithms. Through practical exercises and projects, learners gain hands-on experience in analyzing and interpreting visual data, making it ideal for beginners and enthusiasts interested in computer vision technology.",
        headlinklink:"#",
        buttonlink:"#",
        no_of_lessons:"7 Lessons"
    }

];

export default function Academic() {
    return (
        <div className="academic_container">
            <div className="academic_info">
                <h1>Codegnan <span className="Linkcolor">Academy</span></h1>
                <img src={style} alt="" />
                <p>Welcome to Codegnan Online Academy, your one-stop destination for mastering the latest technologies and programming languages. Our expert-led courses offer hands-on learning experiences, helping you to grow your tech career.</p>
                <p>Enroll now to unlock endless opportunities in tech and kickstart your journey towards a successful career.</p>
            </div>
            <div className="academic_boxes">
                {academic_box_content.map((content, index) => (
                    <Box key={index} box_content={content} />
                ))}
            </div>
        </div>
    );
}
