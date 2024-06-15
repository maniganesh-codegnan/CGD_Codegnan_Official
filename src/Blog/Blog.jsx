import React from "react";
import './Blog.css';
import style from '/training/heading-separator.png';

const BlogContent = [
    {
        tag: "Data Science",
        img: "/blog_images/data-structure-and-algorithm-projects-ilustration.png",
        head: "15 Data Structure and Algorithm (DSA) Project Ideas",
        p: "If you are a full-stack software developer, learning Data Structures and Algorithms is essential for organizing data and solving problems efficiently. Not only full-stack developers but anyone working in the…",
        url: "/blogs/data-structure-and-algorithm-project-ideas"
    },
    {
        img: "/blog_images/Data-Science-Project-illustration.png",
        tag: "Data Science",
        head: "15 Data Science Projects For Beginners With Source Code",
        p: "In this guide, Our data science trainers at Codegnan have compiled this list of 15 data science projects for beginners and final-year projects. Best part? We have included the source…",
        url: "/blogs/data-science-projects-for-beginners"
    },
    {
        tag: "Python",
        img: "/course_images/fullstack-python.png",
        head: "Python Full Stack Developer Course Syllabus (With PDF)",
        p: "Companies are adopting newer technologies to shift their workforce to operate remotely, and people are using technology to streamline their work processes. This has resulted in a significant expansion in…",
        url: "/blogs/python-full-stack-developer-course-syllabus"
    },
    {
        tag: "Machine Learning",
        img: "/blog_images/machine-learning-project-ideas-illustration.png",
        head: "15 Best Machine Learning Projects With Source Code (2024)",
        p: "Whether you’re a final-year student or a college fresher, you need to develop and demonstrate practical skills if you want to clear your interviews and get a high-paying machine learning…",
        url: "/blogs/best-machine-learning-projects"
    },
    {
        tag: "Java",
        img: "/blog_images/java-projects.png",
        head: "14 Java Final Projects For Beginners (With Source Code)",
        p: "While you might have heard of multiple programming languages today, Java ranks among the top 5 programming languages according to the TIOBE Index. For more than 20 years, Java has…",
        url: "/blogs/java-final-projects-for-beginners"
    },
    {
        tag: "Java",
        img: "/course_images/software-testing.png",
        head: "Software Testing Course Syllabus (with Downloadable PDF)",
        p: "The global market for software testing is about to rise from $40.9 billion in 2022 to $59.5 billion by 2030, growing at a CAGR of 4.8% over the forecasting period…",
        url: "/software-testing-course-syllabus"
    },
    {
        tag: "Machine Learning",
        img: "/course_images/machine-learning-syllabus-pdf-by-codegnan.png",
        head: "Machine learning course syllabus (with downloadable PDF)",
        p: "Are you overwhelmed by the vast number of machine learning topics and not knowing where to start or what order to follow? Then our machine learning course syllabus will give…",
        url: "/machine-learning-course-syllabus"
    },
    {
        tag: "C language",
        img: "/blog_images/C-programming-projects-illustration.png",
        head: "17 C Language Projects For Beginners with Source Code",
        p: "C programming is a machine-independent language that helps learners step into the World of creating operating systems like Windows, Oracle, Python interpreter, etc. It may not be the most used…",
        url: "/blogs/c-language-projects-for-beginners"
    },
    {
        tag: "C language",
        img: "/course_images/c-langauge.png",
        head: "C Language syllabus and subjects for 2024(with free PDF)",
        p: "Learning C language provides the easiest way to understand high-level languages like Java and Python. It gives coders the basic knowledge of how to start programming and learn about loops,…",
        url: "/blogs/c-language-course-syllabus"
    },
    {
        tag: "React JS",
        img: "/course_images/reactjs.webp",
        head: "15 React JS Projects for Beginners 2024",
        p: "React is the second most used web framework in the world. This JavaScript library helps web developers create rich, efficient front-end designs with less coding.  With over 5 years of…",
        url: "/blogs/react-js-projects-for-beginners"
    },
    {
        tag: "Python",
        img: "/blog_images/python-project-completion-by-students-codegnan.pngw3_.webp",
        head: "Python Projects for Beginners 2024(Shared by Experts)",
        p: "Our trainers and mentors at codegnan have trained more than 30,000 students and helped them complete hands-on Python projects and work on live case studies. In fact, our online and…",
        url: "/blogs/python-projects-for-beginners"
    },
    {
        tag: "C language",
        img: "/course_images/datas.webp",
        head: "Data Structures And Algorithms Course Syllabus(with PDF)",
        p: "At codegnan Institute, our team of experts have trained 30,500+ students in different IT fields including data structures and algorithms. And, some of the often-asked questions our students ask before…",
        url: "/blogs/data-structures-and-algorithms-course-syllabus"
    },
    {
        tag: "Java",
        img: "/course_images/java-course-fullstack-development-syllabus.webp",
        head: "The COMPLETE Full Stack Java Course Syllabus (2024 Session)",
        p: "At Codegnan, we have trained more than 30,000 students in the IT tech fields, especially in the full-stack Java program. And, some of the often-asked questions our students ask before…",
        url: "/blogs/full-stack-java-course-syllabus"
    },
    {
        tag: "React JS",
        img: "/course_images/reactjs.webp",
        head: "React JS Cource Syllabus For Beginners and Advanced (2024)",
        p: "The demand for React framework has been rising for the last few years among nearly 40.58% of developers globally, as per a recent report by Statista. ReactJS is suitable for…",
        url: "/blogs/react-js-course-syllabus"
    },
    {
        tag: "Python Uncategorized",
        img: "/course_images/python.webp",
        head: "Python Cource Syllabus For Beginners to Advanced (2024)",
        p: "Python developers have been in demand for several years, and recently, Python ranked among the top five most demanded programming languages globally. The best part of Python programming is that…",
        url: "/python-course-syllabus"
    },
    {
        tag: "Java",
        img: "/blog_images/reactjs-vs-angular-framework-comparison-for-javascript.webp",
        head: "React Js vs Angular - Which is the Best JavaScript Framework?",
        p: "Whilst talking about Javascript and its popularity, million of users around the world will not miss out on the discussion on React and Angular.",
        url: "/blogs/react-js-vs-angular"
    },
    {
        tag: "Java and Python",
        img: "/blog_images/JAVA-Interview-Questions-by-codegnan-Experts.pngw3_.webp",
        head: "120 Important Java Interview Questions and Answers(2024)",
        p: "There are endless questions asked in a Java interview depending on the job position and candidates with different skills, experience, and background knowledge. However, some common JAVA questions often get…",
        url: "/blogs/java-interview-questions"
    },
    {
        tag: "Python",
        img: "/course_images/java.webp",
        head: "The Complete Core Java Course Syllabus 2024",
        p: "Java has been around for a long time, since 1995, and still ranks among the top five most demanded programming languages by recruiters.  Learning Java can be a great skill…",
        url: "/c-language-course-syllabus"
    }
];

export default function Blog() {
    return (
        <div className="blog_page">
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
                                    <a href={blog.url} className="blog_link">{blog.head}</a>
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
