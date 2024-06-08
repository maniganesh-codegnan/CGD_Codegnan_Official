import React from "react";
import OnlineCourse from "./online_template";
import { Link } from "react-router-dom";


const headContext = {
    title: "Online Data Analysis Course",
    p: "Learn data analysis using Python framework (Numpy, Pandas, Matplotlib) and gain hands-on experience on real-time projects with this course. This beginner-friendly course is for everyone looking to start a promising career as a data analyst.\n" +
        "<ul>" +
        [
            "102 lessons",
            "2 tests",
            "3 trial sessions",
            "Price :999+GST",
            "24/7 online accessibility"
        ].map((item, index) => (
            "<li style='margin-left: 50px;'>" + "<span style='color:#EE4a62;'>&#x2713;&nbsp;</span>" + item + "</li>"
        )).join('') +
        "</ul>",
    start_course: "https://academy.codegnan.com/learn/Data-Analysis",
    free_trial: "https://academy.codegnan.com/learn/home/Data-Analysis/section/182778/lesson/1007967?",
    image: "/academic_online_syllabus/Data-analysis.webp"
}

const main_content = {
    p: (
        <>
            <h2>What this Data Analysis course is about</h2>
            <p>
                Data plays a vital role in the decision making process for individuals and almost every business. Analyzing large volumes of data allows them to understand consumer purchase patterns, latest trends, change in purchasing behaviour and more. Almost every industry depends on data today, including finance, IT, marketing, insurance, health care, fashion, media, and automotive, which has raised the demand for data analysts globally.
                <br /><br />This data analysis course covers all the necessary skills an analyst must have to land a job. Learners will gain understanding of how to analyse data using different techniques, and present their analysis and findings. You will get introduced to data analysis using Python – Numpy, and the use of Pandas, Matplotlib, and Seaborn. The course plans to teach you ways on extracting valuable information from raw and messy data, use latest tools, and explore the use of Excel and Python for analysing data.
                <br /><br /> <Link to="https://www.statista.com/statistics/1124699/worldwide-developer-survey-most-used-frameworks-web/" className="Linkcolor"> b frameworks</Link>   among developers globally for developing both web and mobile applications. It doesn’t require much coding and offers more functionalities than many other web development frameworks.
                <br /><br />This course covers all the basic knowledge of ReactJS that you must know for web development. It includes setting up the environment for implementation of ReactJS, structure of ReactJS, use of virtual DOM, React state and components, how to send data from one component to another using React Props, and more.
                <br /><br />Most of the modules end in a quiz which allows you to test your knowledge and improve skills. Upon successful completion of the course you will be able to use reusable components to render views where data changes over time, and create more scalable and maintainable websites and applications. Additionally you can use props to pass data between components, forms to allow users interact with the web page, and build an application in React.
            </p>
            <h2>What you'll learn</h2>
            <ul>
                <li>Basic training in Microsoft Excel (including Excel formatting, Excel formula, VLOOKUP, merging columns, analysing sales and profits, and much more)</li>
                <li>Use of Python- Numpy (Numpy indexing and slicing, indexing 3D array, understanding of random numbers, statistical functions)</li>
                <li>Understanding Pandas (reading and writing files, checking dataset attributes and descriptions, rename columns, handling missing values)</li>
                <li>Knowledge of Matplotlib (Histograms, Boxplot, Scatterplot, piechart, Scatter3Dplot)</li>
                <li>Use of Seaborn (Countplot, barplot, histplot, kdeplot, pairplot, Violinplot)</li>
                <li>Hands-on training on three live projects</li>
            </ul>
            <h2>What's covered in this online ReactJS course</h2>
            <ol>
                <li>Understanding Importance of Data Analysis - 4 Lessons, 1 Quiz</li>
                <li>Working on Microsoft Excel - 12 Lessons, 1 Quiz</li>
                <li>Data Analysis using Python - Numpy - 17 Lessons, 0 Quizzes</li>
                <li>Understanding Pandas - 18 Lessons, 0 Quizzes</li>
                <li>Understanding Matplotlib - 12 Lessons, 0 Quizzes</li>
                <li>Understanding Seaborn - 14 Lessons, 0 Quizzes</li>
                <li>Project-1: Working on Bike Sharing Data Analysis - 4 Lessons, 0 Quizzes</li>
                <li>Plotly - 9 Lessons, 0 Quizzes</li>
                <li>Project-2: Working on Gapminder Data Analysis - 10 Lessons, 0 Quizzes</li>
            </ol>
        </>
    )
}

const mentorsData = {
    color_title: "About the",
    title: "  Trainer ",
    mentors: [
        {
            name: "Manvendra Singh",
            description: "Manvendra Singh is a machine learning developer and trainer at Codegnan IT Solutions Pvt. Ltd. He has a PG Diploma in Data Science and has experience working on multiple machine learning projects throughout his career. He has trained over 300 students in Python, data analysis, machine learning, and data science domains. He believes in training students with real-time examples so that learners have a clear understanding of the knowledge they receive at Codegnan and work on live projects under his mentorship. ",
            image: "/training/Manvendra-singh1.webp",
            mentorlinkedinid: "https://www.linkedin.com/in/me-manvendra/"
        }
    ]
}


const data2 = [
    {
        head: "What are the prerequisites of a Data Analysis Course?",
        p: "This course is suitable for anyone with fundamental knowledge of Python programming concepts such as data types, operators, variables, conditional statements, looping, functions, modules, and Python packages."
    },
    {
        head: "How long does it take to complete this Data Analysis course?",
        p: "It takes almost a month to complete this data analysis course that comprises of 102 lessons, 2 tests, and 3 trial lessons. However, it is a self-paced course which allows learners to complete each module according to their learning and understanding abilities. If you can devote at least 1 hour daily for 4 days a week, you can complete the syllabus within 10-15 days."
    },
    {
        head: "Will I get a Certificate after completing this online Data Analysis course?",
        p: "Yes, you will get a Data Analysis Course Completion Certificate after successful completion of the program. These certificates are globally recognized, and you can receive them only when you finish the course and complete project assignments. They come in digital format that are shareable on social media and professional networking platforms."
    },
    {
        head: "Who is this Data Analysis course for?",
        p: "This Data Analysis course is suitable for candidates with basic knowledge of Python. Having knowledge in Microsoft Excel can be an added benefit, however the course covers the fundamentals of Excel before teaching students about data analysis using multiple tools."
    },
    {
        head: "Are there any coding tests and quizzes to test my knowledge after completing this Data Analysis course?",
        p: "Yes, there are two quizzes available for module 1 and 2, and you have to complete 3 projects to test your knowledge after completing the Data Analysis course. Since it is a self-paced online course, you can use the tests and projects to understand your abilities and clear up data analysis concepts."
    },
    {
        head: "Will this Data Analysis course learnings help me in getting a job or internship?",
        p: <>No, this program doesn’t come with job placement or internship opportunities. However, it prepares you for landing high paying jobs or internships, and can be a stepping stone to better career opportunities. You can also enroll for a 100 days <Link to="#" className="Linkcolor">Job Accelerator Program</Link>  of Codegnan that gives you a 100% placement guarantee.
        </>
    }
   
];






export default function Online_data_analysis() {
    return (
        <OnlineCourse head={headContext} main={main_content} mentor={mentorsData} dropdown={data2} />
    );
}
