import React from "react";
import Course_template from "./Course_template";
import machine_photo from '/course_images/machine-learning-syllabus-pdf-by-codegnan.png';
import { Link } from "react-router-dom";



const headdata = {
    title: "Machine learning course syllabus (with downloadable PDF)",
    date: "April 8, 2024",
    img: machine_photo,
    intro: "Are you overwhelmed by the vast number of machine learning topics and not knowing where to start or what order to follow? \nThen our machine learning course syllabus will give you a structured outline of subjects and topics to learn. \nAlso, I’ve listed practical machine-learning projects that will improve your learning.\n <b>Note:</b> Our machine learning and AI trainers have created this outline after teaching more than 30,000 students all over India through online or offline classes in Vijayawada, Hyderabad, and Bangalore. \nHere’s the course syllabus at a glance:"
    
};

const coursedata = {
    title: " ",
    p: "",
    // linkText: "full syllabus details here.",
    // syllabusLink: "/full-syllabus-details"
    
};
{/* <img src="/course_images/reactjs1_photo" alt="react js" /> */}

const courseSections = [
   
 

];

const course_brief = [
    {
        title: "",
        intro: () => (
            <>
             
                <br />
               
                <table className="salary-table">
                    <thead>
                        <tr>
                            <th>Module	</th>
                            <th>Topic</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>  
                            <td>1	</td>
                            <td>Introduction to Machine Learning</td>
                        </tr>
                        <tr>  
                            <td>2	</td>
                            <td>Introduction to Data Science and its Applications</td>
                        </tr>
                        <tr>  
                            <td>3	</td>
                            <td>Exploratory Data Analysis (EDA) using Pandas and NumPy</td>
                        </tr>
                        <tr>  
                            <td>4	</td>
                            <td>Data Visualization using Matplotlib, Seaborn, and Plotly</td>
                        </tr>
                        <tr>  
                            <td>5	</td>
                            <td>Data Engineering and Preprocessing</td>
                        </tr>
                        <tr>  
                            <td>6	</td>
                            <td>Web Scraping</td>
                        </tr>
                        <tr>  
                            <td>7	</td>
                            <td> Supervised Learning – Regression</td>
                        </tr>
                        <tr>  
                            <td>8	</td>
                            <td>Supervised Learning – Classification</td>
                        </tr>
                        <tr>  
                            <td>9	</td>
                            <td>SVM, KNN & Naive Bayes</td>
                        </tr>
                        <tr>  
                            <td>10</td>
                            <td>Ensemble Methods and Boosting</td>
                        </tr>
                        <tr>  
                            <td>11</td>
                            <td> Unsupervised Learning – Clustering</td>
                        </tr>
                        <tr>  
                            <td>12</td>
                            <td> Unsupervised Learning – Dimensionality Reduction</td>
                        </tr>
                        <tr>  
                            <td>13</td>
                            <td>Model Evaluation and Hyperparameter Tuning</td>
                        </tr>
                        <tr>  
                            <td>14</td>
                            <td> Natural Language Processing (NLP)</td>
                        </tr>
                        <tr>  
                            <td>15</td>
                            <td>Recommendation Systems</td>
                        </tr>
                        <tr>  
                            <td>16</td>
                            <td>Reinforcement Learning</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>Developing API using Flask / Webapp with Streamlit</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>Deployment and Web Development</td>
                        </tr>
                    </tbody>
                </table><br/><br/>
            </>
        )
    },
    {
        title: "Download the Machine learning syllabus (PDF)",
        intro: () => (
            <>
            <strong className="download_course_syllabus"><span className='show-right'> &#9758; </span>  Check out our complete syllabus for the machine learning course which is a 1-month duration classroom training course (available in <Link className="link-color" to='/'>  Hyderabad and Vijayawada</Link> ). Download the complete  <Link className="link-color" to='/'> Machine learning course syllabus PDF.</Link>  (PDF) for free.</strong><br/>

            <img src="/syllabuspages/Machine-learning-syllabus-by-codegnan.png" alt="image" />
            </>
        )
    },
    {
        title: "Complete Machine Learning Syllabus and Curriculum for Beginners",
        intro: "<h3>Module 1. Introduction to Machine Learning</h3>Before you get into the complex concepts of machine learning, this part of the course introduces you to machine learning and its types, its workflow, and common data processing techniques. We will also learn to set up the development environment with Python Jupyter and Notebook libraries.<br/> <br/><ul>" +
            [
                "Introduction to Machine Learning and its types (supervised, unsupervised, reinforcement learning)",
                "Setting up the development environment (Python, Jupyter Notebook, libraries: NumPy, Pandas, Scikit-learn)",
                "Overview of the Machine Learning workflow and common data preprocessing techniques",

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
  
    {
        title: "",
        intro: () => (
            <>
                <strong className="download_course_syllabus"><span className='show-right'> &#9758; </span> Find the<Link className="link-color" to='/python_course_page'> complete Python course syllabus</Link></strong><br/>
            </>
        )
    },
    {
        title: "Module 2. Introduction to Data Science and its Applications",
        intro: "The next thing you will know is a basic knowledge of data science as it is connected with machine learning. Data science extracts quality data and prepares them to feed machines. This section of the course curriculum will introduce you to data science and its role in different industries, data science life cycle and its key stages, overview of different data types, and the importance of data collection and preprocessing. <br/><ul>" +
            [
                "Definition of data science and its role in various industries.",
                "Explanation of the data science lifecycle and its key stages.",
                "Overview of the different types of data: structured, unstructured, and semi-structured.",
                "Discussion of the importance of data collection, data quality, and data preprocessing."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 3. Exploratory data analysis (EDA) using Pandas and NumPy",
        intro: "EDA is the first step of any data analysis project, where you collect data, learn it thoroughly, and identify its characteristics and trends. We will use two popular Python libraries, Pandas and NumPy, to perform various EDA functions. This course covers the use of Python libraries in summarizing, filtering and transforming data, learning data cleaning techniques, handling missing values, dealing with outliers, and statistical analysis of data.<br/> <br/><ul>" +
            [
                "Introduction to Pandas",
                "Overview of NumPy",
                "Explanation of key data structures in Pandas: Series and DataFrame.",
                "Hands-on exploration of data using Pandas to summarize, filter, and transform data.",
                "Data cleaning techniques, handling missing values, and dealing with outliers.",
                "Statistical analysis of data using NumPy functions."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 4. Data Visualization using Matplotlib, Seaborn, and Plotly",
        intro: "Data visualization is the process of representing data using visual components like graphs, charts, and infographics. This section of the course will introduce you to data visualization techniques that will help you translate complex data into easy-to-understand formats. You will learn about Matplotlib, Seaborn, and Plotly, the three popular Python libraries used in data visualization. It gives you a good understanding of different types of plots, customizing plots with titles, labels, colors, and styles, understanding advanced plotting techniques, and creating interactive and dynamic visualizations.<br/> <br/><ul>" +
            [
                "Introduction to Data Visualization and its importance in data analysis.",
                "Overview of Matplotlib",
                "Exploring different types of plots: line plots, scatter plots, bar plots, histograms, etc.",
                "Customizing plots with labels, titles, colors, and styles.",
                "Introduction to Seaborn",
                "Advanced plotting techniques with Seaborn: heatmaps, pair plots, and categorical plots.",
                "Introduction to Plotly",
                "Creating interactive and dynamic visualizations with Plotly."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 5. Data Engineering and Preprocessing",
        intro: " Data engineering and pre-processing are interconnected steps that prepare raw data for machine learning. Data engineering focuses on collecting, storing, and preparing data for analysis, and data preprocessing is the last stage of data preparation before feeding it to machine learning models. You will learn them in this section, along with gaining knowledge in data cleaning, transformation, and integration, handling missing values, feature engineering techniques, data scaling and normalization, and dealing with categorical variables.<br/> <br/><ul>" +
            [
                "Introduction to Data Engineering: Data cleaning, transformation, and integration",
                "Data cleaning and Handling missing values: Imputation, deletion, and outlier treatment",
                "Feature Engineering techniques: Creating new features, handling date and time variables, and encoding categorical variables",
                "Data Scaling and Normalization: Standardization, min-max scaling, etc.",
                "Dealing with categorical variables: One-hot encoding, label encoding, etc."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 6. Web Scraping",
        intro: "Web scraping is the process of extracting quality data from websites using different tools and libraries. When you submit a URL to a web scraper like BeautifulSoup, they extract all or only the required amount of data on the page and then store it in appropriate formats like CSV and JSON. You will learn about different web scraping tools, libraries and ethical considerations in this part of the course. It also covers scraping data from websites, handling different types of data on websites, and storing the scraped data in appropriate formats.<br/> <br/><ul>" +
            [
                "Introduction to web scraping: Tools, libraries, and ethical considerations",
                "Scraping data from websites using libraries like BeautifulSoup and requests HTML parsing, locating elements, and extracting data",
                "Handling different types of data on websites: Tables, forms, etc.",
                "Storing scraped data in appropriate formats: CSV, JSON, or databases"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 7. Supervised Learning – Regression",
        intro: "Regression in supervised learning is the technique of understanding the relationship between a dependent and an independent variable. It is used to predict continuous outcomes in predictive modelling. In this section of the course, you will learn about regression in details and its types.<br/> <br/><ul>" +
            [
                "Introduction to Regression: Definition, types, and use cases",
                "Linear Regression: Theory, cost function, gradient descent, and assumptions",
                "Polynomial Regression: Adding polynomial terms, degree selection, and overfitting",
                "Lasso and Ridge Regression: Regularization techniques for controlling model complexity",
                "Evaluation metrics for regression models: Mean Squared Error (MSE), R-squared, and Mean Absolute Error (MAE)"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 8. Supervised Learning – Classification",
        intro: " Another application of supervised learning is classification, where the machine learning model tries to predict the right label for a given input data. This section introduces you to Classification, its types and use cases, along with knowledge of logistic regression, decision trees, and random forests. You will also learn about the evaluation metrics for classification models and the implementation of classification models with the Scikit library.<br/> <br/><ul>" +
            [
                "Introduction to Classification: Definition, types, and use cases",
                "Logistic Regression: Theory, logistic function, binary and multiclass classification",
                "Decision Trees: Construction, splitting criteria, pruning, and visualization",
                "Random Forests: Ensemble learning, bagging, and feature importance",
                "Evaluation metrics for classification models: Accuracy, Precision, Recall, F1-score, and ROC curves",
                "Implementation of classification models using scikit-learn library"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 9. SVM, KNN & Naive Bayes",
        intro: "SVM, KNN and Naive Bayes are the three popular supervised learning algorithms. You will learn them all from this segment in detail.<br/> <br/><ul>" +
            [
                "Support Vector Machines (SVM): Study SVM theory, different kernel functions (linear, polynomial, radial basis function), and the margin concept. Implement SVM classification and regression and evaluate the models.",
                "K-Nearest Neighbors (KNN): Understand the KNN algorithm, distance metrics, and the concept of K in KNN. Implement KNN classification and regression and evaluate the models.",
                "Naive Bayes: Learn about the Naive Bayes algorithm, conditional probability, and Bayes’ theorem. Implement Naive Bayes classification and evaluate the model’s performance."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 10. Ensemble Methods and Boosting",
        intro: " Ensemble methods in machine learning is a powerful approach to combining multiple individual models to create a stronger and accurate predictive model. This course gives you a basic understanding of ensemble methods, evaluation and fine tuning of ensemble models and handling imbalance data sets. You will also learn what boosting technique is and its two popular techniques, XGBoost and AdaBoost.<br/> <br/><ul>" +
            [
                "AdaBoost: Boosting technique, weak learners, and iterative weight adjustment",
                "Gradient Boosting (XGBoost): Gradient boosting algorithm, Regularization, and hyperparameter tuning",
                "Evaluation and fine-tuning of ensemble models: Cross-validation, grid search, and model selection",
                "Handling imbalanced datasets: Techniques for dealing with class imbalance, such as oversampling and undersampling"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 11. Unsupervised Learning – Clustering",
        intro: "Clustering refers to the process of grouping multiple data points that are similar in features into one. There are no predefined categorical labels like supervised machine learning, and the algorithms automatically look out for hidden patterns within the data. You will learn more about clustering and its types from this section. Different clustering algorithms that we will know include K-means clustering, density-based spatial clustering of applications with noise (DBSCAN), and evaluation of clustering algorithms.<br/> <br/><ul>" +
            [
                "Introduction to Clustering: Definition, types, and use cases",
                "K-means Clustering: Algorithm steps, initialization methods, and elbow method for determining the number of clusters",
                "DBSCAN (Density-Based Spatial Clustering of Applications with Noise): Core points, density reachability, and epsilon-neighborhoods",
                "Evaluation of clustering algorithms: Silhouette score, cohesion, and separation metrics"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 12. Unsupervised Learning – Dimensionality Reduction",
        intro: "Another essential concept of unsupervised learning is dimensionality reduction. This technique is used to create simple and manageable ML models by preserving only the essential features in your data. You will learn how dimensionality reduction works, curse of dimensionality, feature extraction and selection. Additionally, this section gives a basic understanding of PCA (Principal Component Analysis) and its implementation with scikit-learn library.<br/> <br/><ul>" +
            [
                "Introduction to Dimensionality Reduction: Curse of dimensionality, feature extraction, and feature selection",
                "Principal Component Analysis (PCA): Eigenvectors, eigenvalues, variance explained, and dimensionality reduction",
                "Implementation of PCA using scikit-learn library"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },    {
        title: "Module 13. Model Evaluation and Hyperparameter Tuning",
        intro: " Model Evaluation and Hyperparameter Tuning ensure machine learning models perform well. Here, you will learn certain Model Evaluation and Hyperparameter Tuning techniques, including cross-validation and model evaluation techniques, GridSearchCV and RandomizedSearchCV, and model selection and comparison.<br/> <br/><ul>" +
            [
                "Cross-validation and model evaluation techniques",
                "Hyperparameter tuning using GridSearchCV and RandomizedSearchCV",
                "Model selection and comparison"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 14. Natural Language Processing (NLP)",
        intro: "This section of the curriculum gives you a comprehensive knowledge of NLP which is a technology that trains computers to understand, process and generate human language. You will learn about its applications and challenges, along with certain text preprocessing, text representation, and sentiment analysis techniques. <br/> <br/><ul>" +
            [
                "Introduction to NLP: Understand the basics of NLP, its applications, and challenges.",
                "Text Preprocessing: Learn about tokenization, stemming, lemmatization, stop word removal, and other techniques for text preprocessing.",
                "Text Representation: Explore techniques such as Bag-of-Words (BoW), TF-IDF, and word embeddings (e.g., Word2Vec, GloVe) for representing text data.",
                "Sentiment Analysis: Study sentiment analysis techniques, build a sentiment analysis model using supervised learning, and evaluate its performance."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 15. Recommendation Systems",
        intro: "Recommendation systems use data to predict what people are looking for and suggest relevant products. You will learn two main types of recommendation systems in this section of the course: collaborative filtering and content-based filtering. Besides that, you will also learn about the deployment of recommendation systems and advanced concepts of NLP and recommendation systems.<br/> <br/><ul>" +
            [
                "Introduction to Recommendation Systems: Understand the concept of recommendation systems, different types (collaborative filtering, content-based, hybrid), and evaluation metrics.",
                "Collaborative Filtering: Explore collaborative filtering techniques, including user-based and item-based approaches, and implement a collaborative filtering model.",
                "Content-Based Filtering: Study content-based filtering methods, such as TF-IDF and cosine similarity, and build a content-based recommendation system.",
                "Deployment and Future Directions: Discuss the deployment of recommendation systems and explore advanced topics in NLP and recommendation systems."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 16. Reinforcement Learning",
        intro: "This part of the course introduces reinforcement learning and how it works. Reinforcement learning is where an agent (the decision maker) is trained on labeled data with correct answers. You will also know about Markov Decision Processes, and Q-learning algorithms. <br/> <br/><ul>" +
            [
                "Introduction to Reinforcement Learning: Agent, environment, state, action, and reward",
                "Markov Decision Processes (MDP): Markov property, transition probabilities, and value functions",
                "Q-Learning algorithm: Exploration vs. exploitation, Q-table, and learning rate",
                "Hands-on reinforcement learning projects and exercises"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 17. Developing API using Flask / Webapp with Streamlit",
        intro: "This section of the course will introduce you to popular Python frameworks, Flask and Streamlit. You will learn to develop API using Python Flask and Streamlit for the deployment of the Machine Learning model and integration of data preprocessing and the ML model. Additionally, you will get hands-on training in designing a user-friendly web interface.<br/> <br/><ul>" +
            [
                "Introduction to Flask / Streamlit web framework",
                "Creating a Flask / Streamlit application for ML model deployment",
                "Integrating data preprocessing and ML model",
                "Designing a user-friendly web interface"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Module 18. Deployment and Web Development",
        intro: "Deployment and Web Development helps in creating machine learning models and put them in action for real-time purposes. This part of the course will teach learners to build a web application for machine learning models, deployment of such models using AWS and PythonAnywhere.<br/> <br/><ul>" +
            [
                "Building a web application for Machine Learning models: Creating forms, handling user input, and displaying results",
                "Deployment using AWS (Amazon Web Services): Setting up an AWS instance, configuring security groups, and deploying the application",
                "Deployment using PythonAnywhere: Uploading Flask application files, configuring WSGI, and launching the application"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },

    {
        title: "Machine Learning course curriculum at a glance ",
        intro: () => (
            <>
                <h2>Machine Learning concepts to learn</h2>
                <h3>1. Exploratory data analysis using Pandas and NumPy</h3>
                <p>Machine learning provides techniques to extract data and then uses different methods to learn from that data and predict future trends. Exploratory Data Analysis (EDA) is the first phase of data analysis. To understand it clearly, we will first learn about Pandas and NumPy. These are the two popular Python libraries that are used in data manipulation and analysis. We will then learn how to summarise, filter, and transform data using Pandas, as well as perform statistical analysis of data using NumPy. </p>
            </>
        )
    },
  
    {
        title: "2. Data Visualization using Matplotlib, Seaborn, and Plotly ",
        intro: () => (
            <>
                <p>After data analysis, the next thing to know for machine learning is data visualization. It is the process of representing data in a visual format to understand trends, patterns, and relationships within the data. We will be using three popular Python libraries for data visualization: Matplotlib, Seaborn, and Plotly. Additionally, we will learn different types of plots like line plots, bar plots, and histograms, as well as how to customize these plots with levels, colors, titles, and styles. You will also learn some advanced plotting techniques with Seaborn and create interactive and dynamic visualization with Plotly. </p>
            </>
        )
    },

    {
        title: "3. Data engineering and pre-processing",
        intro: () => (
            <>
                <p>Having a clear knowledge of data engineering and pre-processing is essential for machine learning. Data engineering helps in building data pipelines to collect, store and prepare data for machine learning models. Here, you will learn data cleaning, transformation, and integration, as well as checking for missing values, feature engineering techniques, and data versioning. Data preprocessing cleans and prepares the data before feeding them into the model. It includes learning data scaling and normalization techniques and dealing with categorical variables.</p>
            </>
        )
    },
    {
        title: "4. Web scraping",
        intro: () => (
            <>
                <p>Web scraping in Machine Learning ensures you gather quality data. It is the process of extracting quality data from multiple websites using special tools and library functions. You need to learn web scraping to ensure you are feeding quality data to your machine-learning models. Here, you will get a step-by-step knowledge of web scraping using BeautifulSoup, collecting quality data, and storing them in appropriate formats like CSV and JSON </p>
            </>
        )
    },
    {
        title: "5. Supervised and Unsupervised learning",
        intro: () => (
            <>
                <p>Supervised and unsupervised learning are the two main approaches for training machines. </p>
                <h4>Supervised learning </h4>
                <p>Supervised learning uses labelled data sets to train machines so that they can classify data and predict outcomes accurately. While data mining, this supervised learning can be classified into two categories: Classification and Regression. Classification uses an algorithm to accurately assign test data into specific categories, regression understands the relationship between dependent and independent variables. You will learn them both in this course, along with Naive Bayes, Support Vector Machine (SVM), and a few more essential concepts.</p>

                <h4>Unsupervised learning</h4>
                <p>Unsupervised learning uses algorithms to analyze and cluster unlabeled data sets to discover hidden patterns or data groupings without human intervention. Here, you need to learn about clustering and dimensionality reduction. It includes learning K-means Clustering, Principal Component Analysis (PCA), and implementing PCA using scikit-library.</p>
            </>
        )
    },
    {
        title: "6. Natural Language Processing ",
        intro: () => (
            <>
             <p>You must know NLP, which is a machine-learning technology that enables computers to interpret, manipulate, and comprehend human language. It helps companies to analyze the intent or sentiment in a large volume of messages and respond in real-time. You will learn about different text preprocessing techniques like tokenization, stemming, and stop word removal, as well as text representation techniques like Bag-of-Words and word embeddings and sentiment analysis techniques.</p>
            </>
        )
    },
    {
        title: "7. Recommendation systems",
        intro: () => (
            <>
                <p> You need to learn about recommendation systems in machine learning. Your machines are trained to identify your consumer preferences and offer them recommendations for relevant products. The two main types of recommendation systems you will learn are collaborative filtering and content-based filtering. </p>
            </>
        )
    },
    {
        title: "8. Reinforcement learning",
        intro: () => (
            <>
                <p>Reinforcement learning is used by machines to understand the best possible path they should take in a particular situation. You need to learn it to train machines like humans through trial-and-error methods. There are multiple other things you need to learn, including how reinforcement learning works, Markov Decision Processes (MDP), and Q-learning algorithm. </p>
            </>
        )
    },
    {
        title: "Become Machine Learning expert in 1 month with codegnan",
        intro: "Codegnan offers a comprehensive machine learning course with Python that is designed for everyone, from beginners to IT professionals.\n\n<h4>What makes us different?</h4> <br/><ul>" +
            [
                "Course fees: 7,999 (available for a limited time)",
                "Course duration: 1 month",
                "Theoretical knowledge + hands-on training classes",
                "Work on multiple live projects to face real-world challenges ",
                "Delivered by students from top universities and professionals presently working in the domain",
                "Receive industry-accredited certificates on successful course completion",
                "Both online and offline (Hyderabad, Vijayawada, and Bangalore) classes available for students",
                "Trusted by 30,000+ students globally ",
                "Codegnan learners are placed in 1250+ top companies ",
                "Get placement assistance with our Job acceleration program"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        intro: () => (
            <>
                <h4>👉 Enroll in Codegnan’s classroom training:</h4>
                <ul>
                    {[
                        { name: "Machine learning training in Hyderabad", link: "/machine-learning-in-hyderabad"},
                        { name: "Machine learning course training in Vijayawada", link: "/machine-learning-in-vijayawada" }
                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link> ({program.duration})
                        </li>
                    ))}
                </ul>
                <br />
            </>
        )

    },
    {
        title: "FAQs ",
        intro: () => (
            <>
                <h2>What is the Machine Learning course fee?</h2>
                <p> The Machine Learning course fee is ₹7,999 at Codegnan. However, this fee structure can vary with other institutions due to multiple reasons.</p> 

                <p>The course fee of any Machine Learning training program depends on the course curriculum, trainers’ experience, availability of practical and theory classes, working on live projects, and availability of additional facilities like placement assistance, interview preparation, resume building, etc.</p>
            </>
        )
    },
   
    {
        title: "Is the Machine Learning course very difficult?",
        intro: () => (
            <>
                <p>The Machine learning course can be a little difficult as you need to understand multiple concepts, from data visualization and types of machine learning algorithms to Natural Language Processing and web development. But, implementing machine learning isn’t hard as the coding is easy, and Python libraries and packages do the most job. </p>
            </>
        )
    },
    {
        title: "What is the best way to learn the Machine Learning?",
        intro: () => (
            <>
                <p>The best way to learn machine learning is to gain a practical understanding of Python libraries and knowledge of basic mathematics. Once you understand ML concepts, you can apply your skills to multiple projects. This clears all your doubts and prepares you for real-life challenges.</p>
            </>
        )
        
    }

];

const nav_interview = [
    {
        name: "17 C Language Projects For Beginners with Source Code",
        link: "/"
    },
    {
        name:"Software Testing Course Syllabus (with Downloadable PDF)",
        link:"/Software_testing_course_page"
    }
];

export default function JavaCoursePage() {
    return (
        <div>
            <Course_template head={headdata} course={coursedata} section={courseSections} coursep={course_brief} inter_links={nav_interview} />
        </div>
    );
}
