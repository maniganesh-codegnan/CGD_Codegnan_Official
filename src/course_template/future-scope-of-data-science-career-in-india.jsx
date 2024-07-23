import React from "react";
import Course_template from "./Course_template";
import Dscsibcd_photo from '/course_images/Data-science-career-scope-in-India-BY-CODEGNAN-destination.webp';
import { Link } from "react-router-dom";

import { Helmet } from 'react-helmet';


const headdata = {
    title: "📈 Future Scope Of Data Science Career in India (2024)",
    date: "January 21, 2024",
    img: Dscsibcd_photo,
    intro: "Data science will become one of the highest-valued careers in 2024 and beyond, and we expect it to only grow further.\n According to Indeed’s research, jobs like data scientist, data analyst, and machine learning engineer were among the highest-paying job roles that are based on data science. \n In fact, The global advanced technologies market’s projected value of USD 550 billion by 2023, with a 9.2% CAGR until 2030, highlights the immense potential for data science careers\n But if you are skeptical about whether it’ll still be relevant in 2024 or not, I am here to answer all your doubts. \n Today, I will discuss the future scope of data science and whether it will be a good career choice for you in 2024 or not.  "
};

const coursedata = {
    title: " ",
    p: " ",
    linkText: " ",
    syllabusLink: " "
};

const courseSections = [
  
    // {
    //     title: "Java Introduction",
    //     intro: "Before we start developing Java programs, we need to learn about who invented Java and how the language survived for nearly 27 years, its history and its basic features. This section of the course will introduce you to Java.",
    //     content: [
    //         "History",
    //         "Features"
    //     ]
    // }

];

const course_brief = [
    {
        intro: () => (
            <>
                <h2> What’s covered in this guide </h2><br />
                <ul>
                    {[
                        { name: "Is data science a good career scope in 2024?", link: "/" },
                        { name: "How big is the data science industry in India and worldwide?", link: "/"},
                        { name: "What are the skills to learn to become a data scientist in 2024? ", link: "/" },
                        { name: "Career Opportunities and Job Types in Data Science ", link: "/" },
                        { name: "Who is eligible for data science?", link: "/" },
                        { name: "What is the salary scope of data scientists in India?", link: "/" },
                        { name: "Scope of data science engineering certification", link: "/" },
                        { name: "Which certification course is best for data science?", link: "/" },
                        { name: "Scope of data science and artificial intelligence", link: "/" },
                        { name: "Is data science a future career?", link: "/" },
                        { name: "Start your data science career with codegnan’s expert Data Science trainers", link: "/" },
                        { name: "FAQs related to data science career scope in India", link: "/" }
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
        title: "Is data science a good career scope in 2024?",
        intro: () => (
            <>
                <p style={{ paddingTop: '10px' }}>Yes, data science has a good career in 2024, and here are the reasons why. </p>
            </>
        )
    },
    {
        title: "1. Steady Demand (64% Growth Over The Past 5 Years)",
        intro: () => (
            <>
                <p>While researching the demand for Data Science, I found that the search demand for the term “data science” has gone up by 64% over the past five years and showed an overall inclined growth. </p>

                <img src="/syllabuspages/steady-demand.png" alt="" width="100%"/>
                <p>Source: <Link className="link-color" to='https://explodingtopics.com/topic/data-science'>ExplodingTopics.com </Link></p>
                
                <p>This steady growth confirms that you can stop worrying about the relevance of data science in 2024- as it will still be in demand.</p>
                
            </>
        )
    },
    {
        title: "2. Job Availability (1.5K-2K Active Data Science Jobs)",
        intro: () => (
            <>
                <p> When I roughly looked up data science jobs in India, it showed me over 10,000 results pan India. </p>
                <p> But to be more specific, I decided to look into individual job boards, and here’s what I found. </p>
                
                <p> On <Link className="link-color" to='https://www.linkedin.com/jobs/search/?currentJobId=3801918962&keywords=data%20scientist&originalSubdomain=in'>LinkedIn</Link> , I could find over 1950 data science jobs in India for different roles like data scientist, staff AI scientist, ML engineer, and so on.</p>

                <img src="/syllabuspages/job-availability.png" alt="" width="100%"/>

                <p>The results for <Link className="link-color" to='https://www.google.com/search?q=data+scince+jobs+in+india&rlz=1C1CHBF_enIN1017IN1017&oq=data+scince+jobs+in+india&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIPCAEQABgNGIMBGLEDGIAEMgkIAhAAGA0YgAQyCQgDEAAYDRiABDIJCAQQABgNGIAEMgkIBRAAGA0YgAQyCQgGEAAYDRiABDIJCAcQABgNGIAEMggICBAAGBYYHjIICAkQABgWGB7SAQk1MjY5ajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwjvx-zA7NeDAxWGka8BHYziBhYQutcGKAF6BAgdEAU&sxsrf=ACQVn09kfGsjpxHalOB7AmfTjmCa8FCoOA:1705062424066#htivrt=jobs&htidocid=FZPK5QGBourQFUvLAAAAAA%3D%3D&fpstate=tldetail'> Google Jobs </Link> were also more or less the same. Although there was no indicator telling the total number of jobs available, the list was long and full of the latest job postings. </p>

                <img src="/syllabuspages/image-1024x469.png" alt="" width="100%"/>

                <p>On Naukri.com, the number of active jobs for data scientists was 850+, which is quite impressive.  So, in short, there are plenty of jobs in data science. </p>
                
                <img src="/syllabuspages/img-222.png" alt="" width="100%"/>
                
            </>
        )
    },
    {
        title: "3.  Handsome Salary",
        intro: () => (
            <>
                <p>According to Ambitionbox, the average salary of a data scientist in India is around ₹14.6 LPA. while Glassdoor gives a range between ₹7- ₹19 LPA. </p>
                <p>If you’re planning to go abroad, then in the US, you can expect an average salary of $99K per annum. Here are the average data scientist salaries for some other popular countries. </p>
                <table className="salary-table">
                    <thead>
                        <tr>
                            <th> Country 	</th>
                            <th> Pay Per Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Canada</th>
                            <td><Link className="link-color" to="https://www.payscale.com/research/CA/Job=Data_Scientist/Salary?loggedIn"> C$83,108</Link></td>
                        </tr>
                        <tr>
                            <th>UK</th>
                            <td><Link className="link-color" to="https://www.payscale.com/research/UK/Job=Data_Scientist/Salary"> £41,382</Link></td>
                        </tr>
                        <tr>
                            <th>UAE</th>
                            <td><Link className="link-color" to="https://www.payscale.com/research/AE/Job=Data_Scientist/Salary">AED 133,332</Link></td>
                        </tr>
                        <tr>
                            <th>Germany</th>
                            <td><Link className="link-color" to="https://www.payscale.com/research/DE/Job=Data_Scientist/Salary">€56,076</Link></td>
                        </tr>
                        <tr>
                            <th>Australia</th>
                            <td><Link className="link-color" to="https://www.payscale.com/research/AU/Job=Data_Scientist/Salary">AU$93,760</Link></td>
                        </tr>
                        <tr>
                            <th>France</th>
                            <td><Link className="link-color" to="https://www.payscale.com/research/FR/Job=Data_Scientist/Salary">€44,468</Link></td>
                        </tr>
                        <tr>
                            <th>Switzerland </th>
                            <td><Link className="link-color" to="https://www.payscale.com/research/CH/Job=Data_Scientist/Salary">97,675 Fr.</Link></td>
                        </tr>
                    </tbody>
                </table>

                <p>Remind you that these are average salaries based on countries, and I can only give you a rough estimate. The actual figures will depend on a lot of other factors like the exact location, the company you work in, and your job experience.  </p>
                
                
            </>
        )
    },
    {
        title: "4. Growing Industry (57.5% Growth)",
        intro: () => (
            <>
                <p> In 2023, the data science market in India was worth <Link className="link-color" to="https://economictimes.indiatimes.com/industry/services/education/data-science-education-market-in-india-to-rise-58-to-1-4-bn-by-2028-report/articleshow/104654320.cms?from=mdr">$204.23 million</Link> . And experts predict it will reach $1.391 billion by 2028 with a CAGR of 57.5%. So, naturally, the career opportunities in this market will also go up. </p>
                <p> According to the United States Bureau of Labour Statistics, data scientist jobs will grow <Link className="link-color" to="https://extension.harvard.edu/blog/why-study-data-science/#:~:text=According%20to%20the%20United%20States%20Bureau%20of%20Labor%20Statistics%2C%20data%20scientist%20jobs%20are%20projected%20to%20grow%2036%25%20by%202031%2C%20which%20is%20much%20faster%20than%20the%20average%20for%20all%20occupations.">36% by 2031</Link> , and this number is much higher compared to other occupations. </p>
                <p> Plus, if you plan to niche down on big data analytics, the numbers will remain promising. By 2023, the big data analytics market is also expected to grow from <Link className="link-color" to="https://extension.harvard.edu/blog/why-study-data-science/#:~:text=According%20to%20the%20United%20States%20Bureau%20of%20Labor%20Statistics%2C%20data%20scientist%20jobs%20are%20projected%20to%20grow%2036%25%20by%202031%2C%20which%20is%20much%20faster%20than%20the%20average%20for%20all%20occupations."> $307.52 billion to $745.15 billion with a 13.5% CAGR. </Link></p>
            </>
        )
    },
    {
        title: "How big is the data science industry in India and worldwide? ",
        intro: () => (
            <>
                <p>The global market for data science is projected to reach around   <Link className="link-color" to='https://www.statista.com/statistics/254266/global-big-data-market-forecast/'> $103 billion by 2027. </Link> This is why India’s data science education market alone is estimated to reach <Link className="link-color" to='https://economictimes.indiatimes.com/industry/services/education/indias-data-science-education-market-to-grow-at-cagr-of-57-52-report/articleshow/105280572.cms?from=mdr'> $1.39 billion by 2028.</Link></p>

                <img src="/syllabuspages/bigds.png" alt="" width="100%"/>
                <p><i>Big data market size revenue forecast worldwide from 2011 to 2027 (Source: <Link className="link-color" to="https://www.statista.com/statistics/254266/global-big-data-market-forecast/"> Statista.com</Link>)</i></p>
                <p> So, the Data Science industry is quite thriving and is full of career opportunities. In fact, in India, jobs like Data Scientists and Business analysts were considered to be the highest-paying jobs in 2023. </p>

                <p> Plus, now that AI is in the picture, the industry is expected to grow even faster. AI tools like AutoML are making data science much more accessible and allowing more people to contribute. So this is possibly the best time to join in!</p>
            </>
        )
    },
    {
        title: "What are the skills to learn to become a data scientist in 2024? ",
        intro: () => (
            <>
             <p>Now, if you have made up your mind to finally join the data science world and be a data scientist in 2024, here are seven skills you must have. </p>
            </>
        )
    },
    {
        title: "1. Programming Knowledge",
        intro: " <ul>" +
            [
                "<b> Key skills:</b> Proficiency in Python (dominant choice), R, SQL, and knowledge of other languages like Java or C++ can come in handy.",
                "<b> Importance:</b> Python is the industry standard for data manipulation, model building, and scripting. SQL is essential for querying and extracting data from databases.  Therefore if you have to pick one, Python it is! But you might need to know other languages to let you work with specific tools or data formats. "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "2. Statistical Analysis and Modeling:",
        intro: " <ul>" +
            [
                "<b> Key skills:</b> Hypothesis testing, linear regression, time series analysis, ability to choose and implement appropriate statistical models.",
                "<b> Importance:</b> Understanding statistical concepts will help you interpret data patterns, draw valid conclusions, and build accurate models. Plus, choosing the right model is crucial for effective analysis and generating reliable insights."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "3. Machine Learning and Deep Learning Expertise:",
        intro: " <ul>" +
            [
                "<b> Key skills:</b>  Familiarity with various algorithms (decision trees, neural networks, etc.), model training and evaluation, and hyperparameter tuning for optimal performance.",
                "<b> Importance:</b> Machine learning and deep learning are the backbone of data-driven solutions across industries. Knowing how to build and implement these models will help you utilize them for prediction, pattern recognition, and automation."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p>Learn more about: <Link className="link-color" to="/blog/machine-learning-course-syllabus/">Machine learning syllabus (with PDF)</Link> </p>
            </>
        )
    },

    {
        title: "4. Data Wrangling and Preprocessing:",
        intro: " <ul>" +
            [
                "<b> Key skills:</b> Data cleaning, handling missing values, handling outliers, and feature engineering to prepare data for analysis.",
                "<b> Importance:</b> Cluttered and disorganized data leads to inaccurate results. Data wrangling ensures data quality and usability, ensuring your analysis and model building are reliable. "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "5. Cloud Computing and Big Data Technologies:",
        intro: " <ul>" +
            [
                "<b> Key skills:</b>  familiarity with cloud platforms like AWS, Azure, or GCP, ability to work with big data tools like Hadoop or Spark.",
                "<b> Importance:</b>  Data volume is ever-growing, and cloud platforms give you scalable and efficient storage with processing capabilities. Big data tools handle massive datasets for large-scale analysis and model training, so knowing it is a must for data science.  "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "6. Version Control and Collaboration Tools:",
        intro: " <ul>" +
            [
                "<b> Key skills:</b> Git for version control, familiarity with collaboration platforms like GitHub or Slack.",
                "<b> Importance:</b> Data science projects often involve teamwork and code sharing. Version control will help you track and manage code revisions effectively. Meanwhile, collaboration tools will let you communicate with your team and have an efficient workflow."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "7. Visualization and Communication Skills:",
        intro: " <ul>" +
            [
                "<b> Key skills:</b>  Data visualization tools like Tableau or Power BI and the ability to communicate complex findings clearly and compellingly.",
                "<b> Importance:</b> Visual representations are always easier to understand. Therefore, transforming data into insightful visuals helps stakeholders understand better and make informed decisions. You might often need to explain the data verbally or in writing through reports. So, effective verbal and written communication skills are also important."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p>You might not need to ace all of these to get an entry-level data science job. But the more skills you have, the higher your chances of being promoted to a better position. And not to mention, get better pay!</p>
            </>
        )
    },
    {
        title: "Career Opportunities and Job Types in Data Science",
        intro: () => (
            <>
                <p>Being a Data Scientist is not the only career option you have after pursuing data science. Here, I have shared the top five highest-paying data science jobs and everything related to them.</p>
            </>
        )
    },
    {
        title: "Machine Learning Engineer",
        intro: "As an ML engineer, you would design, build, and deploy machine learning models that will solve real-world problems. For that, you would need to collaborate with data scientists and other engineers. \n\n <h4>Skills required:</h4><br/> <ul>" +
            [
                "Expertise in ML algorithms, ",
                "Software engineering, ",
                "Cloud computing, ",
                "Strong coding skills (Python, Java, etc.)"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p><b>Salary:</b> $150,000+ (USD) </p>
                <p><b>Experience Required:</b> 5+ years in software engineering; experience with ML is a plus.</p>
            </>
        )
    },
    {
        title: "",
        intro: "<h4>Roles & Responsibilities: </h4><br/> <ul>" +
            [
                "Build machine learning models using various algorithms like regression, classification, clustering, deep learning etc.",
                "Perform feature engineering and selection to feed the most relevant data to models.",
                "Optimize models through hyperparameter tuning, regularization, ensemble techniques etc.",
                "Productionize models by developing APIs, prediction services, lowering latency etc.",
                "Monitor model performance in production and re-train models when needed.",
                "Develop data pipelines for cleaning, transforming and feeding data to models.",
                "Collaborate with data scientists to improve modeling techniques and evaluation.",
                "Follow best practices around versioning models, project structure, testing, documentation.",
                "Adhere to standards around security, privacy, reliability and scalability of ML systems.",
                "Stay up-to-date on latest ML advancements and frameworks like PyTorch, TensorFlow etc."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Data Architect",
        intro: "As a data architect, you will design and build foundational data infrastructure for an organization. You will also be responsible for ensuring data quality, security, and scalability.  \n\n <h4>Skills required:</h4><br/> <ul>" +
            [
                "Expertise in data modeling, ",
                "Databases, ",
                "Data warehousing, ",
                "Knowledge of cloud platforms."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p><b>Salary:</b> $140,000+ (USD) </p>
                <p><b>Experience Required:</b> 7+ years in data management and architecture.</p>
            </>
        )
    },
    {
        title: "",
        intro: "<h4>Roles & Responsibilities: </h4><br/> <ul>" +
            [
                "Design and develop data architecture to support business goals. This includes architecting databases, data pipelines, warehouses etc.",
                "Model, integrate and organize data from various structured and unstructured data sources.",
                "Build and maintain data pipelines that transform, aggregate, cleanse and move data.",
                "Collaborate with IT, product and business teams to understand data needs and build solutions.",
                "Monitor data integrity, optimize performance and scalability of data infrastructure.",
                "Establish data standards, policies, governance and security around company data.",
                "Lead evaluation and adoption of new data technologies like Hadoop, Spark, cloud platforms etc."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Quantitative Analyst",
        intro: "Quant analysts use mathematical models and data analysis to assess financial risks and make investment decisions for companies, hedge funds, banks, and other financial institutions.  \n\n <h4>Skills required:</h4><br/> <ul>" +
            [
                "Strong mathematical and statistical skills, ",
                "Knowledge of financial markets, ",
                "programming skills (Python, R)."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p><b>Salary:</b> $120,000+ (USD) </p>
                <p><b>Experience Required:</b> Master’s degree in finance or related field; experience in quantitative analysis preferred.</p>
            </>
        )
    },
    {
        title: "",
        intro: "<h4>Roles & Responsibilities: </h4><br/> <ul>" +
            [
                "Build statistical and mathematical models using programming languages like R, Python, C++ etc.",
                "Implement complex quantitative algorithms like time series analysis, regression, Monte Carlo simulations etc.",
                "Perform quantitative data analysis techniques like predictive modeling, simulation, optimization, machine learning etc.",
                "Develop APIs, libraries and pipelines to process large datasets efficiently.",
                "Test and validate models thoroughly using statistical techniques like cross-validation, significance testing etc.",
                "Create interactive visualizations and dashboards using D3.js, Tableau or other BI tools.",
                "Keep up with latest trends in quantitative finance, algorithmic trading, risk modeling etc.",
                "Optimize models and algorithms to improve speed, scalability and efficiency.",
                "Maintain thorough documentation of implemented mathematical models and evaluation results."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Natural Language Processing (NLP) Engineer",
        intro: "NLP engineers develop and implement NLP algorithms for tasks like machine translation, chatbots, and text analysis. They are hired for various industries like tech, healthcare, and marketing. \n\n <h4>Skills required:</h4><br/> <ul>" +
            [
                "Expertise in NLP algorithms, ",
                "Linguistics, ",
                "Knowledge of deep learning, ",
                "Strong coding skills (Python)."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p><b>Salary:</b> $110,000+ (USD)</p>
                <p><b>Experience Required:</b> 5+ years in software development, experience with NLP is a plus. </p>
            </>
        )
    },
    {
        title: "",
        intro: "<h4>Roles & Responsibilities: </h4><br/> <ul>" +
            [
                "Develop and optimize NLP models like text classification, sentiment analysis, named entity recognition, etc. using machine learning algorithms.",
                "Perform text processing and feature engineering tasks like tokenization, lemmatization, vectorization, embedding, etc.",
                "Build NLP pipelines by integrating various components like parsers, neural networks, rules-based models, etc.",
                "Keep up-to-date with latest advancements in NLP and leverage pre-trained models like BERT, GPT-3, etc.",
                "Monitor and improve NLP model metrics like accuracy, precision, recall, F1-score, etc.",
                "Productionize NLP models by building APIs and prediction services while optimizing for latency and throughput."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Data Scientist (Senior Level)",
        intro: "Senior data scientists lead data science projects from conception to implementation. They help businesses to solve complex problems using data analysis and machine learning. \n\n <h4>Skills required:</h4><br/> <ul>" +
            [
                "Advanced statistical and machine learning skills, ",
                "Experience with big data tools, ",
                "Excellent communication and problem-solving skills."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p><b>Salary:</b> $100,000+ (USD)</p>
                <p><b>Experience Required:</b> 7+ years in data science or related field.</p>
            </>
        )
    },
    {
        title: "",
        intro: "<h4>Roles & Responsibilities: </h4><br/> <ul>" +
            [
                "Build data pipelines to retrieve, clean, transform and integrate data from diverse sources. Requires SQL, Python, data manipulation skills.",
                "Perform statistical analysis and hypothesis testing to uncover patterns in data. Use statistical techniques like regression, ANOVA, t-tests etc.",
                "Implement machine learning algorithms like random forest, XGBoost, neural networks, SVM using Python/R libraries.",
                "Optimize machine learning models through techniques like regularization, hyperparameter tuning, and ensemble modeling.",
                "Evaluate model performance using metrics like RMSE, R-squared, confusion matrix, AUC-ROC etc. Identify over/under-fitting.",
                "Productionize models by building APIs, web services and dashboards using cloud platforms.",
                "Visualize and present data insights using Matplotlib, Seaborn, Tableau and effective storytelling."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Data Analyst ",
        intro: "Data analysts analyze and interpret data to provide insights and support business decisions. They also prepare reports, visualizations, and recommendations based on findings.  \n\n <h4>Skills required:</h4><br/> <ul>" +
            [
                "Strong Excel skills ",
                "Data cleaning and manipulation ",
                "Basic statistical analysis ",
                "SQL proficiency ",
                "Good communication and presentation skill."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p><b>Salary:</b> $60,000-$80,000 (USD) </p>
                <p><b>Experience Required:</b> Bachelor’s degree in data science, statistics, or related field, internship experience preferred.</p>
            </>
        )
    },
    {
        title: "Data Engineer (Junior) ",
        intro: "Junior data engineers build and maintain data pipelines and infrastructure. They ensure data quality and accessibility for analysis and work with data scientists and architects to implement solutions. \n\n <h4>Skills required:</h4><br/> <ul>" +
            [
                "Familiarity with cloud platforms (AWS, Azure, etc.), ",
                "SQL and scripting languages (Python, Bash), ",
                "Knowledge of data warehousing and ETL tools."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p><b>Salary:</b> $80,000-$100,000 (USD)</p>
                <p><b>Experience Required:</b> Bachelor’s degree in computer science, information technology, or related field, experience with coding and databases.</p>
            </>
        )
    },
    {
        title: "Who is eligible for data science?",
        intro: () => (
            <>
                <p>In the case of BSc data science, candidates need to qualify their 10+2 in the science stream with atleast 60% aggregate. But for diploma and certification courses, these criteria might change. </p>

                <p>We have barely stretched the surface for subjects like data science, making it ever-evolving. So, one of the biggest criteria for pursuing it would be to have a continuous passion for learning and adaptability. </p>

                <p>However, here are the academic, skill-wise, and basic eligibility criteria to pursue data science in 2024. </p>
            </>
        )
    },
    {
        title: "Academic Criteria",
        intro: " <ul>" +
            [
                "Formal Education: While not always essential, a Bachelor’s or Master’s degree in statistics, computer science, mathematics, engineering, or related fields provides a strong foundation in necessary concepts.",
                "Alternative Paths: Bootcamps, online courses, and self-learning can help you with the necessary skills, especially if coupled with relevant work experience."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Who is eligible for data science?",
        intro: () => (
            <>
                <p><b> Check the <Link to="/blog/data-science-course-syllabus/" className="link-light-color"> complete data science course syllabus.</Link></b></p>
            </>
        )
    },
    {
        title: "Required Skills ",
        intro: " <ul>" +
            [
                "Technical Skills: Proficiency in programming (Python is the industry standard), familiarity with statistics, data analysis tools, and machine learning algorithms.",
                "Analytical Skills: Problem-solving, critical thinking, and strong mathematical aptitude are important for understanding and manipulating data.",
                "Communication Skills: The ability to translate complex results into clear insights for non-technical audiences is essential for most of the jobs mentioned above. "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What is the salary scope of data scientists in India?",
        intro: " <ul>" +
            [
                "Share the average salary in India, Vijayawada, Hyderabad, Bangalore, and other key cities using a table",
                "Salary scope of different job profiles in data science",
                "Always cite sources like AmbitionBox, Glassdoor, etc."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> The average salary of a data scientist in India is around <Link to="https://www.ambitionbox.com/profile/data-scientist-salary/" className="link-light-color"> ₹14.5 LPA.</Link>  But it can range anywhere between ₹3.9-28 LPA based on different factors.</p>
                <img src="/syllabuspages/salarys report.png" alt="" width="100%"/>
                <p> Like the rest of the world, data science is an equally fast-growing field in India. The demand for data science professionals is high, which is reflected in the pay they are offered. </p>
                <p> Let me share the average salary of data science roles for some of the metro cities in India. </p>

                <table className="salary-table">
                    <thead>
                        <tr>
                            <th>  </th>
                            <th> Bangalore</th>
                            <th> Hyderabad</th>
                            <th> Vijayawada</th>
                            <th> Pune </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Data Analyst </th>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/data-analyst-salary/bengaluru-location"> ₹ 7.0 LPA	 </Link></td>
                            <td><Link className="link-color" to="https://www.glassdoor.co.in/Salaries/hyderabad-data-analyst-salary-SRCH_IL.0,9_IM1076_KO10,22.htm"> ₹7 LPA	 </Link></td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/data-analyst-salary/vijayawada-location"> ₹ 5.6 LPA	 </Link></td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/data-analyst-salary/pune-location"> ₹ 6.5 LPA </Link></td>
                        </tr>
                        <tr>
                            <th>Data Engineer </th>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/data-engineer-salary/hyderabad-location"> ₹ 10.8 LPA </Link></td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/data-engineer-salary/bengaluru-location"> ₹ 11.0 LPA </Link></td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/data-engineer-salary/vijayawada-location"> ₹ 6.7 LPA </Link></td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/data-engineer-salary/pune-location"> ₹ 9.6 LPA </Link></td>
                        </tr>
                        <tr>
                            <th>Machine Learning Engineer </th>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/machine-learning-engineer-salary/bengaluru-location"> ₹ 9.4 LPA </Link></td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/machine-learning-engineer-salary/hyderabad-location"> ₹ 9.6 LPA </Link></td>
                            <td><Link className="link-color" to="https://www.glassdoor.co.in/Salaries/andhra-pradesh-machine-learning-engineer-salary-SRCH_IL.0,14_IS4933_KO15,40.htm#:~:text=The%20average%20salary%20for%20Machine%20Learning%20Engineer%20is%20%E2%82%B99%2C00%2C000%20per%20year%20in%20the%20Andhra%20Pradesh."> ₹ 9 LPA </Link></td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/machine-learning-engineer-salary/pune-location"> ₹ 7.8 LPA </Link></td>
                        </tr>
                        <tr>
                            <th>Data Architect </th>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/data-architect-salary/bengaluru-location"> ₹ 24.9 LPA</Link></td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/data-architect-salary/hyderabad-location"> ₹ 23.3 LPA</Link></td>
                            <td> ₹ 22 LPA </td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/data-architect-salary/pune-location"> ₹ 23.5 LPA </Link></td>
                        </tr>
                        <tr>
                            <th>Database Administrator</th>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/data-architect-salary/pune-location"> ₹ 6.7 LPA </Link></td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/sql-database-administrator-salary/hyderabad-locationn"> ₹ 6.7 LPA </Link></td>
                            <td><Link className="link-color" to="https://in.indeed.com/career/database-administrator/salaries/Vijayawada--Andhra-Pradesh"> ₹ 4.3 LPA </Link></td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/sql-database-administrator-salary/pune-location"> ₹ 6.6 LPA </Link></td>
                        </tr>
                        <tr>
                            <th>Data Scientist </th>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/data-scientist-salary/bengaluru-location"> ₹ 15.0 LPA	 </Link></td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/data-scientist-salary/hyderabad-location"> ₹ 14.6 LPA	 </Link></td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/data-scientist-salary/vijayawada-location"> ₹ 6.0 LPA	 </Link></td>
                            <td><Link className="link-color" to="https://www.ambitionbox.com/profile/data-scientist-salary/pune-location"> ₹ 12.8 LPA </Link></td>
                        </tr>
                     
                    </tbody>
                </table>

                <p>Remember, the salaries mentioned here can vary based on a lot of factors like the company you choose, the skills or the years of experience you have. </p>

            </>
        )
    },
    {
        title: "Scope of data science engineering certification",
        intro: () => (
            <>
                <p> Whether it is a certification course, bachelor’s degree, or diploma course, you need to have one of these to pursue data science careers. </p>
                <p> Now, let’s see how long each of them takes, how much they cost, and what is covered in their course curriculum. </p>
            </>
        )
    },
    {
        title: "Certification In Data Science",
        intro: "<b> Duration:</b> 10 days to 6 months \n <b> Fees:</b> ₹ 5,000-1.00,000 \n\n <h4>Course Curriculum:</h4><br/>  <ul>" +
            [
                "Python Programming",
                "Data Analysis",
                "Statistics",
                "Machine Learning",
                "Natural Language Processing (NLP)",
                "Deep Learning",
                "Computer Vision"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p><b>Ideal for:</b> Working professionals who want to improve their skills. Or school graduates who wish to have hands-on experience in a shorter timespan and enter the job market. </p>
                <p><b>Not Suitable For:</b> Anyone who wants to opt for higher studies, like- Masters or Ph.D. </p>
            </>
        )
    },
    {
        title: "Diploma In Data Science ",
        intro: "<b> Duration:</b>  1-2 years \n <b> Fees:</b> ₹50,000-1,50,000 \n\n <h4>Course Curriculum:</h4><br/>  <ul>" +
            [
                " Programming",
                " Statistics and Probability",
                " Data Visualization",
                " Data wrangling",
                " EDA",
                " ML Fundamentals"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p><b>Ideal for:</b> Part-time workers who are looking for an in-depth course but can’t commit to a full-time degree course.  </p>
                <p><b>Not Suitable For:</b> Full-time working professionals, as it might require attending regular classes. Students who want to pursue a Master’s degree later.  </p>
            </>
        )
    },
    {
        title: "Bachelor’s Degree (B.Sc.) In Data Science ",
        intro: "<b> Duration:</b> 3 years  \n <b> Fees:</b> ₹60,000- 5,00,000 \n\n <h4>Course Curriculum:</h4><br/>  <ul>" +
            [
                "Mathematics",
                "Programming",
                "Database ",
                "Data wrangling",
                "Exploratory data analysis (EDA)",
                "Machine Learning ",
                "Cloud Computing",
                "Big Data Analytics",
                "Domain-specific Skills",
                "Data Visualization"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p><b>Ideal for:</b> High school graduates who want to pursue an undergraduate degree course.  </p>
                <p><b>Not Suitable For:</b> Working professionals or individuals looking for a degree with a shorter duration. </p>
                <p>Most people have the misconception that certification courses don’t provide enough value. But it can surely be the case if you pick the wrong certification course. So, let me share some tips on how to pick the right certification for you. </p>
            </>
        )
    },
    {
        title: "Which certification course is best for data science?",
        intro: "The best certification course should <br/>  <ul>" +
            [
                "Have a comprehensive curriculum, ",
                "Provide hands-on experience through live projects,",
                "Should provide placement assistance yet be affordable enough. "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p>But if you want a name, codegnan’s data science certification would be a good choice. </p>
            </>
        )
    },
    {
        title: "Why join codegnan’s data science course? ",
        intro: "codegnan’s data science certification course ticks all these boxes and more. Here are some of the perks of joining this certification course. <br/>  <ul>" +
            [
                "<b>Learn from industry experts:</b> At codegnan, you get trained by experts who once worked with tech giants like Google, Microsoft, Amazon, and Apple. ",
                "<b>Have a choice between online and offline mode:</b> Based on your convenience, you can choose between online or in-classroom mode of learning. In both cases, the curriculum, duration, and facilities remain the same. ",
                "<b>Get placement assistance:</b> After successfully completing the course, you not only get a certification but receive placement assistance. This is especially helpful for freshers. ",
                "<b>Get up to 25% discount:</b> You can get up to 25% discount on the course fee."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p>Here are some <Link to="/https://www.justdial.com/Vijayawada/Codegnan-IT-Solutions-Pvt-Ltd-Moghalraja-Puram/0866PX866-X866-180308155543-J9Q7_BZDET/reviews" className="link-light-color"> online reviews of Codegnan’s ex-students: </Link>  </p>
                <img src="/syllabuspages/1-1.png" alt="" width="35%"/>
                <img src="/syllabuspages/2-1.png" alt="" width="35%"/>
                <img src="/syllabuspages/codegnan-review-by-students.png" alt="" width="30%"/>
                <img src="/syllabuspages/2-4.png" alt="" width="100%"/>
            </>
        )
    },
    {
        title: "Scope of data science and artificial intelligence",
        intro: "Data science and artificial intelligence are kind of intertwined. Here are some ways in which data science supports AI.  <br/>  <ul>" +
            [
                "Data science helps prepare and analyze vast data sets. These data sets are then used in AI algorithms that help it evolve. ",
                "Through analysis and model building, data scientists guide AI towards solving specific problems. "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p>On the other hand, these are some examples of how AI makes the job easier for data scientists. </p>
            </>
        )
    },
    {
        title: "",
        intro: "  <ul>" +
            [
                "AI handles mundane tasks like data cleaning, preprocessing, and feature engineering, freeing data scientists for strategic tasks. ",
                "Powerful AI algorithms like deep learning can extract hidden patterns and complex relationships in data. This helps get more accurate and insightful models. "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p>Presently, there are a lot of areas where you can find the combined application of these two subjects. </p>

                <p>Some popular examples include self-driving cars, advanced fraud detection systems, creating highly personalized healthcare, etc. </p>
            </>
        )
    },
    {
        title: "Is data science a future career?",
        intro: () => (
            <>
                <p>Data science and related jobs have a great future, at least for the next ten years. According to the US Bureau of Labour Statistics, data scientist jobs will experience a 36% growth between 2021 and 2031. Operations research analyst jobs are also expected to have a 23% during that time span. </p>

                <p>Data science is also evolving with the rapid advancements in artificial intelligence (AI), which is creating new roles and skills for data professionals. </p>

                <p>Therefore, in conclusion, data science has a promising career scope. </p>
            </>
        )
    },
    {
        title: "Start your data science career with codegnan’s expert Data Science trainers",
        intro: " At codegnan, we have data science experts from top tech companies and universities such as IIT Bombay, IIT Delhi, Amazon, and more. Learn more about our team of experts and mentors.\n Here are some essential details of codegnan’s data science certification: <br/> <ul>" +
            [
                "<b>Course duration:</b> 6 Months ",
                "<b>Course fee:</b> ₹60,000 to ₹75,000",
                "<b>Training modes:</b> Online and in-classroom",
                "<b>Course curriculum:</b> Python, data analysis, statistics, ML, NLP, deep learning, computer vision. ",
                "<b>In-classroom locations:</b> Data science classroom training in Hyderabad, Data science training in Vijayawada. "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "FAQs related to data science career scope in India",
        intro: () => (
            <>
                <h3>Is data science a high-paying job?</h3>
                <p>Yes, pursuing data science can help you get some of the highest-paying jobs in India and worldwide. For example- the average salary of a data scientist in India is around ₹14.5 LPA. In the US, it is around $125,000 per annum. In both, the pay is higher than the average annual income. </p>
            </>
        )
    },
    {
        title: "Are data science jobs difficult?",
        intro: () => (
            <>
                <p>Data science jobs do tend to be a little difficult as you have to have a lot of technical skills like programming. You must also know subjects like Mathematics and statistics. Besides, data science is a comparatively new field. Therefore, you also need to be flexible with learning new concepts now and then. </p>
            </>
        )
    },
    {
        title: "Does data science require coding?",
        intro: () => (
            <>
                <p>Yes, data science requires you to know coding. If you are a beginner with no prior coding experience, we suggest you start with Python. It is the most common programming language used in data science and is also comparatively easier to learn due to its syntax. </p>
            </>
        )
    },
    {
        title: "Will AI replace data analysts?",
        intro: () => (
            <>
                <p>No, generative AI will not replace data analysts. Data analysis requires human insights and unique perspectives, which AI is still not able to provide. However, AI can be used as a tool to make the job of data analysts less mundane. </p>
            </>
        )
    },
    {
        title: "How much does a fresher data scientist earn in India?",
        intro: () => (
            <>
                <p>The lowest salary of a fresher data scientist in India is around ₹3.9 LPA. But again, this is very subjective and depends on factors like- your skill sets, company, and location. For example, at Google, even for fresher data scientists, the starting salary is ₹22.1 LPA. </p>
            </>
        )
    }

];

const nav_interview = [
    {
        name: "Data Science Course Syllabus and Subjects 2024 (PDF included)",
        link: "/blog/data-science-course-syllabus/"
    },
    {
        name:"Python Career Opportunities: Scope, Jobs, and Future in India ",
        link:"/blog/python-career-opportunities/"
    }
];

export default function JavaCoursePage() {
    return (
        <div>
            <Helmet>
                <title>📈 Future Scope Of Data Science Career in India (2024)</title>
                <meta name="description" content="Data science will become one of the highest-valued careers in 2024 and beyond, and we expect it to only grow further.&nbsp; According to Indeed’s research, jobs like data scientist, data analyst, and machine learning engineer were among the highest-paying job roles that are based on data science.&nbsp; In fact, The global advanced technologies market's projected  " /> 
            </Helmet>
            <Course_template head={headdata} course={coursedata} section={courseSections} coursep={course_brief} inter_links={nav_interview} />
        </div>
    );
}
