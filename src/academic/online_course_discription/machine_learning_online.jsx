import React from "react";
import OnlineCourse from "./online_template";
import { Link } from "react-router-dom";


const headContext = {
    title: "Machine Learning using Python",
    p: "This machine-learning course will teach you about the fundamentals of how data is used to train computers by building your own machine-learning models with data and algorithms. Learn how to create machine-learning models and build your own mobile applications.\n" +
        "<ul>" +
        [
            "129 lessons",
            "8 tests",
            "3 trial sessions",
            "Price :999+GST",
            "24/7 online accessibility"
        ].map((item, index) => (
            "<li style='margin-left: 50px;'>" + "<span style='color:#EE4a62;'>&#x2713;&nbsp;</span>" + item + "</li>"
        )).join('') +
        "</ul>",
    start_course: "https://academy.codegnan.com/learn/Machine-Learning",
    free_trial: "https://academy.codegnan.com/learn/home/Machine-Learning/section/175628/lesson/956276?",
    image: "/academic_online_syllabus/ML-Python.jpg"
}

const main_content = {
    p: (
        <>
            <h2>What this Machine Learning using Python is about</h2>
            <p>
                Machine learning is gaining popularity across various industries, such as finance, healthcare, marketing, manufacturing, automotive, e-commerce, and media. Like doctors reading your past medical history and current symptoms can predict illness, stock brokers see past trends to invest in stocks, and machines can also predict situations by considering past experiences with machine learning algorithms.
                <br /><br />This course covers the basic understanding of machine learning, different types of machine learning algorithms, the use of contemporary tools and technologies, and implementing knowledge into real-time projects. With proper knowledge of machine learning, learners can create fraud detection and cyber resilience solutions, digital assistants, image recognition tools, spam filters, sentiment analysis tools and more, solving existing problems in the market.
            </p>
            <h2>What you'll learn</h2>
            <ul>
                <li>Basic understanding of machine learning (history, types, and machine learning activities)</li>
                <li>Knowledge of feature engineering (feature engineering methods, construction methods, standardisation, handling categorical variables)</li>
                <li>Concepts of probability and statistics (density function, continuous distribution, exponential distribution, Poisson distribution)</li>
                <li>Understanding the difference between supervised and unsupervised learning</li>
                <li>Knowledge of linear models, decision trees, random forests, K-nearest neighbours, Bayesian concept</li>
                <li>Hands-on training on building two mobile applications for Linear Classifier and NativeBayesClassifier</li>
            </ul>

            <h2>What's covered in this online Machine Learning using Python course</h2>
            <ol>
                <li>Machine Learning Landscape – 5 Lessons, 1 Quiz</li>
                <li>Feature Engineering – 9 Lessons, 1 Quiz</li>
                <li>Thinking Statistically in Machine Learning – 8 Lessons, 1 Quiz</li>
                <li>Modelling and Evaluation – 3 Lessons, 1 Quiz</li>
                <li>Supervised Learning: Regression – 10 Lessons, 1 Quiz</li>
                <li>Regularized Linear Models – 10 Lessons, 1 Quiz</li>
                <li>Supervised Learning: Classification – 10 Lessons, 1 Quiz</li>
                <li>Decision Trees – 7 Lessons, 1 Quiz</li>
                <li>Ensemble Learning and Random Forests – 18 Lessons, 0 Quizzes</li>
                <li>Support Vector Machines – 8 Lessons, 0 Quizzes</li>
                <li>Bayesian Concept Learning – 5 Lessons, 0 Quizzes</li>
                <li>K-Nearest Neighbors – 4 Lessons, 0 Quizzes</li>
                <li>Unsupervised Learning – 14 Lessons, 0 Quizzes</li>
                <li>Project 1: Building Mobile Application for Linear Classifier – 6 Lessons, 0 Quizzes</li>
                <li>Project 2: Building Mobile App for NaiveBayesClassifier – 4 Lessons, 0 Quizzes</li>
            </ol>

        </>
    )
}

const mentorsData = {
    color_title: "About the",
    title: "  Trainer ",
    mentors: [
        {
            name: "Kallepu Saketh Reddy",
            description: "Kallepu Saketh Reddy is a CMO and Data Science Mentor at Codegnan IT Solutions. He holds a master’s degree in Computational Intelligence from KL University and is a Microsoft-certified trainer who worked as a Data Science consultant and mentor for over 7 years. Previously, he worked as a Data Engineer and Chief Operating Officer for SuBrains Solutions Private Limited. He also works as a Data Science Consultant at Andhra Pradesh State Skill Development Corporation (APSSDC). His experience and expertise in multiple technical areas, including Seaborn, Computer Vision, Machine Learning, Python, Data Analysis, and more, can enrich students with tech skills that set them apart from the competition.",
            image: "/members/trainer-2.pngw3_.webp",
            mentorlinkedinid: "https://www.linkedin.com/in/saketh-codegnan/"
        }
    ],

}


const data2 = [
    {
        head: "What are the prerequisites of a Machine Learning using Python Programming Course?",
        p: "The prerequisites of a Machine Learning course includes knowledge in Python, and understanding of mathematics (including linear algebra, probability, graph theory). However, this program is designed for everyone who wants to start their career in the machine learning domain."
    },
    {
        head: "How long does it take to complete this Machine Learning using Python course?",
        p: "It takes 30+ days to complete this machine learning using Python course. As it is a self-paced online course, you can complete it according to your ability to grasp the topics. However, if you devote at least 1 hour daily for 5 days a week, you can complete the course with project assignments within 15-20 days."
    },
    {
        head: "Will I get a Certificate after completing this online Machine Learning using Python course?",
        p: "Yes, you will receive a certificate after completing this online machine learning using Python course. These certificates are industry-accredited and are recognised globally, but to receive them, you need to finish up all the modules, including the quizzes and project assignments."
    },
    {
        head: "Who is this Machine Learning using Python course for?",
        p: <>This Machine Learning using  Python course is for anyone who wants to start their career in this domain. Having a good grasp of a programming language like Python makes the course easy to understand. You can first enroll for a  <Link to="https://academy.codegnan.com/learn/Python" className="Linkcolor"> Python course</Link> and then start with this machine learning program that will help you catch the fundamentals better and implement them into real projects.</>
    },
    {
        head: "Are there any coding tests and quizzes to test my knowledge after completing this Machine Learning using Python course?",
        p: "Yes, there are two quizzes available for module 1 and 2, and you have to complete Yes, there are 8 tests and quizzes available throughout the program that allow you to test your knowledge. As this is a self-paced program with no assessment at the end of the course, you need to use these tests and complete the project assignments to understand how much you can understand the course. Later, you can enrol for different certification exams and make progress in your career. 3 projects to test your knowledge after completing the Data Analysis course. Since it is a self-paced online course, you can use the tests and projects to understand your abilities and clear up data analysis concepts."
    },
    {
        head: "Will this Machine Learning using Python course learnings help me in getting a job or internship?",
        p: <>Yes, this machine learning using Python course learnings can help you land a job. But, the program doesn’t promise you placement opportunities. However, you can enroll for the  <Link className="Linkcolor" to="#">Job Accelerator Program</Link>  and get assured placement opportunities. Otherwise, you can use your knowledge to complete professional certification programs and reach higher targets.  </>
    },
    {
        head: "Does codegnan offer classroom training for Machine Learning using Python course",
        p: (
            <>
                Yes, codegnan does offer classroom training for Machine Learning using Python course in Vijaywada and Hyderabad.
                <ul>
                    <li><Link to="#" className="Linkcolor"><b> Codegnan Hyderabad</b></Link>: Kothwal Madhava Reddy Plaza, Beside Indian Oil Petrol Bunk, JNTUH Metro Station, Nizampet X Roads, Hyderabad, 500072.</li>
                    <li><Link to="#" className="Linkcolor"><b> Codegnan Vijayawada</b></Link>:  #951, 16th Main, BTM 2nd Stage, Bengaluru, Karnataka, 560076.</li>
                </ul>
            </>
        )
    }
];






export default function Online_ML() {
    return (
        <OnlineCourse head={headContext} main={main_content} mentor={mentorsData} dropdown={data2} />
    );
}
