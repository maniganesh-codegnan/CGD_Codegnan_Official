import React from "react";
import { Link } from 'react-router-dom';
import './Blog.css';
import style from '/training/heading-separator.png';
import { Helmet } from 'react-helmet';

const BlogContent = [
    {
        tag: "Java ",
        img: "/course_images/java-career-path-direction-guide-by-codegnan.png",
        head: "6 Java Career Paths: High Paying and In-Demand",
        p: "At Codegnan, we have trained 4,000+ students to become Java developers with placement assistance. So, with our experience and training of Java students for 6+ years, we know the ins…",
        url: "/blog/java-career-paths/"
    },
    {
        tag: "Java ",
        img: "/course_images/Become-a-java-Full-Stack-Developer-illustration.png",
        head: "How To Become a Java Full Stack Developer (Only 5 Steps)",
        p: "At Codegnan, our mentors have trained more than 30,000 students to start their tech careers (especially in Java and full-stack development) and get jobs and internships. From learning to getting…",
        url: "/blog/how-to-become-a-java-full-stack-developer/"
    },
    {
        tag: "Python ",
        img: "/course_images/Become-a-Python-Full-Stack-Developer-illustration.png",
        head: "How To Become a Python Full Stack Developer (Only 5 Steps)",
        p: "At Codegnan, our mentors have trained more than 30,000 students to start their tech careers (especially in Python and Java) and secure jobs and internships.  From learning to getting high-paying…",
        url: "/blog/how-to-become-a-python-full-stack-developer"
    },
    {
        tag: "Software Testing ",
        img: "/course_images/Software-testing-career-path-illustration-by-codegnan.png",
        head: "6 High-Paying Software Testing Career Paths In 2024",
        p: "After training more than 30,000+ students in the tech field, we know the ins and outs of career paths for software testers. Based on our expertise and years of experience,…",
        url: "/blog/software-testing-career-paths/"
    },
    {
        tag: "Python",
        img: "/course_images/python-career-paths-illustration-by-codegnan.png",
        head: "7 Python Career Paths That Are Most In-Demand",
        p: "After completing a Python course, most students are inclined towards back-end web development, scripting, or product development.  But, you can advance your Python career path in multiple ways, like working…",
        url: "/blog/python-career-paths"
    },
    {
        tag: "Data Science",
        img: "/course_images/Data-science-course-duration-and-fees-illustration-by-codegnan.png",
        head: "Data Science Course Fees and Duration in India [2024]",
        p: "Data science course fees in India range from ₹2,00,000 to ₹8,00,000 in 2024 if you opt for academic qualifications such as B.Tech, M.Tech, and so on. The data science course…",
        url: "/blog/data-science-course-fees-and-duration/"
    },
    {
        tag: "C langauge Java Python Uncategorized",
        img: "/course_images/software-testing-projects-illustration.png",
        head: "Software Testing Projects For Final Year With Source Code",
        p: "No applications or software are launched on the market without being tested. Software testing projects give you an idea of what to test within an application and how you can…",
        url: "/blog/software-testing-projects/"
    },
    {
        tag: "Data Science",
        img: "/blog_images/data-structure-and-algorithm-projects-ilustration.png",
        head: "15 Data Structure and Algorithm (DSA) Project Ideas",
        p: "If you are a full-stack software developer, learning Data Structures and Algorithms is essential for organizing data and solving problems efficiently. Not only full-stack developers but anyone working in the…",
        url: "/blog/data-structure-and-algorithm-project-ideas"
    },
    {
        img: "/blog_images/Data-Science-Project-illustration.png",
        tag: "Data Science",
        head: "15 Data Science Projects For Beginners With Source Code",
        p: "In this guide, Our data science trainers at Codegnan have compiled this list of 15 data science projects for beginners and final-year projects. Best part? We have included the source…",
        url: "/blog/data-science-projects-for-beginners"
    },
    {
        tag: "Python",
        img: "/course_images/fullstack-python.png",
        head: "Python Full Stack Developer Course Syllabus (With PDF)",
        p: "Companies are adopting newer technologies to shift their workforce to operate remotely, and people are using technology to streamline their work processes. This has resulted in a significant expansion in…",
        url: "/blog/python-full-stack-developer-course-syllabus"
    },
    {
        tag: "Machine Learning",
        img: "/blog_images/machine-learning-project-ideas-illustration.png",
        head: "15 Best Machine Learning Projects With Source Code (2024)",
        p: "Whether you’re a final-year student or a college fresher, you need to develop and demonstrate practical skills if you want to clear your interviews and get a high-paying machine learning…",
        url: "/blog/machine-learning-projects"
    },
    {
        tag: "Java",
        img: "/blog_images/java-projects.png",
        head: "15 Java Final Projects For Beginners (With Source Code)",
        p: "While you might have heard of multiple programming languages today, Java ranks among the top 5 programming languages according to the TIOBE Index. For more than 20 years, Java has…",
        url: "/blog/java_projects"
    },
    {
        tag: "Java",
        img: "/course_images/software-testing.png",
        head: "Software Testing Course Syllabus (with Downloadable PDF)",
        p: "The global market for software testing is about to rise from $40.9 billion in 2022 to $59.5 billion by 2030, growing at a CAGR of 4.8% over the forecasting period…",
        url: "/blog/software-testing-course-syllabus"
    },
    {
        tag: "Machine Learning",
        img: "/course_images/machine-learning-syllabus-pdf-by-codegnan.png",
        head: "Machine learning course syllabus (with downloadable PDF)",
        p: "Are you overwhelmed by the vast number of machine learning topics and not knowing where to start or what order to follow? Then our machine learning course syllabus will give…",
        url: "/blog/machine-learning-course-syllabus"
    },
    {
        tag: "C language",
        img: "/blog_images/C-programming-projects-illustration.png",
        head: "17 C Language Projects For Beginners with Source Code",
        p: "C programming is a machine-independent language that helps learners step into the World of creating operating systems like Windows, Oracle, Python interpreter, etc. It may not be the most used…",
        url: "/blog/c-programming-projects"
    },
    {
        tag: "C language",
        img: "/course_images/c-langauge.png",
        head: "C Language syllabus and subjects for 2024(with free PDF)",
        p: "Learning C language provides the easiest way to understand high-level languages like Java and Python. It gives coders the basic knowledge of how to start programming and learn about loops,…",
        url: "/blog/c-language-course-syllabus"
    },
    {
        tag: "Java ReactJS",
        img: "/course_images/react-j-project-ideas-illustration.png",
        head: "15 React JS Projects for Beginners 2024",
        p: "React is the second most used web framework in the world. This JavaScript library helps web developers create rich, efficient front-end designs with less coding. With over 5 years of…",
        url: "/blog/react-js-projects"
    },
    {
        tag: "Python",
        img: "/blog_images/python-project-completion-by-students-codegnan.pngw3_.webp",
        head: "Python Projects for Beginners 2024(Shared by Experts)",
        p: "Our trainers and mentors at codegnan have trained more than 30,000 students and helped them complete hands-on Python projects and work on live case studies. In fact, our online and…",
        url: "/blog/python-projects"
    },
    {
        tag: "C language",
        img: "/course_images/datas.webp",
        head: "Data Structures And Algorithms Course Syllabus(with PDF)",
        p: "At codegnan Institute, our team of experts have trained 30,500+ students in different IT fields including data structures and algorithms. And, some of the often-asked questions our students ask before…",
        url: "/blog/data-structures-and-algorithms-course-syllabus"
    },
    {
        tag: "Java",
        img: "/course_images/java-course-fullstack-development-syllabus.webp",
        head: "The COMPLETE Full Stack Java Course Syllabus (2024 Session)",
        p: "At Codegnan, we have trained more than 30,000 students in the IT tech fields, especially in the full-stack Java program. And, some of the often-asked questions our students ask before…",
        url: "/blog/full-stack-java-developer-course-syllabus"
    },
    {
        tag: "React JS",
        img: "/course_images/reactjs.webp",
        head: "React JS Cource Syllabus For Beginners and Advanced (2024)",
        p: "The demand for React framework has been rising for the last few years among nearly 40.58% of developers globally, as per a recent report by Statista. ReactJS is suitable for…",
        url: "/blog/react-js-course-syllabus"
    },
    {
        tag: "Python Uncategorized",
        img: "/course_images/python.webp",
        head: "Python Cource Syllabus For Beginners to Advanced (2024)",
        p: "Python developers have been in demand for several years, and recently, Python ranked among the top five most demanded programming languages globally. The best part of Python programming is that…",
        url: "/blog/python-course-syllabus"
    },
    {
        tag: "Java",
        img: "/blog_images/reactjs-vs-angular-framework-comparison-for-javascript.webp",
        head: "React Js vs Angular - Which is the Best JavaScript Framework?",
        p: "Whilst talking about Javascript and its popularity, million of users around the world will not miss out on the discussion on React and Angular.",
        url: "/blog/react-js-vs-angular-which-is-best-javascript-framework"
    },
    {
        tag: "Java and Python",
        img: "/blog_images/JAVA-Interview-Questions-by-codegnan-Experts.pngw3_.webp",
        head: "120 Important Java Interview Questions and Answers(2024)",
        p: "There are endless questions asked in a Java interview depending on the job position and candidates with different skills, experience, and background knowledge. However, some common JAVA questions often get…",
        url: "/blog/java-interview-questions"
    },
    {
        tag: "Python",
        img: "/course_images/java.webp",
        head: "The Complete Core Java Course Syllabus 2024",
        p: "Java has been around for a long time, since 1995, and still ranks among the top five most demanded programming languages by recruiters.  Learning Java can be a great skill…",
        url: "/blog/java-course-syllabus/"
    },
    {
        tag: "Data Science",
        img: "/course_images/Data-science-career-scope-in-India-BY-CODEGNAN-destination.webp",
        head: " Future Scope Of Data Science Career in India (2024)",
        p: "Data science will become one of the highest-valued careers in 2024 and beyond, and we expect it to only grow further.  According to Indeed’s research, jobs like data scientist, data…",
        url: "/blog/future-scope-of-data-science-career-in-india/"
    },
    {
        tag: "Data Science",
        img: "/course_images/data-science.webp",
        head: "Data Science Course Syllabus and Subjects 2024 (PDF included)",
        p: "If you’re looking to start your career in data science, you should know the key subjects and course syllabus to plan your learning path. In this guide, I have listed…",
        url: "/blog/data-science-course-syllabus/"
    },
    {
        tag: "Data Science",
        img: "/course_images/Core-Java-syllabus-details.webp",
        head: "Data Science and AI Companies building tomorrow on Fast Track",
        p: "Data Science and Artificial Intelligence technologies are spreading like a virus.",
        url: "/blogs/data-science-and-ai-companies-building-tomorrow-on-fast-track"
    },
    {
        tag: "Uncategorized",
        img: "/course_images/why-django-is-the-go-to-framework-for-python-web-development-ultimate-django-guide.webp",
        head: "Why Django is the go to framework for Python Web development? Ultimate Django Guide ",
        p: "If you are a web developer, then probably choosing the right framework for your web development tasks is crucial.",
        url: "/blogs/top-13-artificial-intelligence-applications-in-real-world-ai-use-cases"
    },
    {
        tag: "Uncategorized",
        img: "/course_images/how-to-send-multiple-emails-simple-way-using-python.jpgw3.webp",
        head: "How to send multiple emails simple way using python ",
        p: "Using python send an email To check and reply to the emails is a big-time draining.",
        url: "/blog/data-science-course-syllabus"
    },
    {
        tag: "Artificial Intelligence",
        img: "/course_images/top-13.jpgw3.webp",
        head: "Top 13 Artificial Intelligence Applications in real world | AI Use Cases",
        p: "From predicting human actions to the advancement of natural language processing, Artificial Intelligence is the field that is giving a new direction to the living of a normal person..",
        url: "/blog/data-science-course-syllabus"
    },
    

];

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Blog() {
    return (
        <div className="blog_page">
            <Helmet>
                <title>Codegnan blog: Start and grow your career in tech</title>
                <meta name="description" content="Our guides and resources help you learn IT skills and become job-ready in the tech field. Get access to free articles, eBooks, templates, etc." />
            </Helmet>
            <center>
                <h1 className="blog_head2">The codegnan blog</h1>
                <br /><br />
                <p className="blog_p">Our guides and resources help you learn IT skills and become job-ready in the tech field. Get access to free articles, eBooks, templates, learning materials, and more.</p>
                <div className="blog_content">
                    {BlogContent.map((blog, index) => (
                        <div key={index} className="blog_post">
                            <div className="image_container">
                                <img src={blog.img} alt={blog.head} className="blog_image" />
                                <span className="blog_tag">{blog.tag}</span>
                            </div><br />
                            <center>
                                <h3 className="blog_head">
                                    <Link to={blog.url} className="blog_link" onClick={scrollToTop}>{blog.head}</Link>
                                </h3>
                                <p className="blog_description">{blog.p}</p>
                            </center>
                        </div>
                    ))}
                </div>
            </center>
        </div>
    );
}
