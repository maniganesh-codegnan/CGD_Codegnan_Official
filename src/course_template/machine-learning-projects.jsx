import React from "react";
import Course_template from "./Course_template";
import MachineLearning_projects from '/course_images/machine-learning-project-ideas-illustration.png';
import { Link } from "react-router-dom";

const headdata = {
    title: " 15 Best Machine Learning Projects With Source Code (2024",
    date: " April 20, 2024",
    img: MachineLearning_projects,
    intro: "Whether you’re a final-year student or a college fresher, you need to develop and demonstrate practical skills if you want to clear your interviews and get a high-paying machine learning job.\nAnd, doing machine learning projects is one of the best ways to achieve that.\nAt codegnan, we have trained 5,000+ students and helped them accomplish machine learning hands-on projects with one-on-one mentor guidance.\nThis is why we have created this list of top project ideas with source code that will help you complete unique machine learning projects "
};

const coursedata = {
    title: " ",
    p: " ",
    linkText: " ",
    syllabusLink: "",
};

const courseSections = [
   
    {
        title: " ",
        intro: " ",
        content: [
            // "Knowledge of how to store and manage different tasks using arrays and lists",
            // "Implement algorithms to search and sort tasks based on specific criteria like priority or due dates",
            // "Implementation of linked list data structure for dynamically managing tasks",
            // "Understanding the efficiency of different operations like adding, removing, and searching for time-complexity analysis "
        ]
    },
    
];


const course_brief = [
    {
        intro: () => (
            <>
                <h4>⭐ Enroll in our classroom training or online courses: </h4>
                <ul>
                    {[
                        { name: "Machine learning training in Hyderabad", link: "/machine-learning-in-hyderabad", duration: "1 month" },
                        { name: "Machine learning training institute in Vijayawada ", link: "/machine-learning-in-vijayawada", duration: "1 month" },
                        { name: "Online machine learning course using Python ", link: "https://codegnan.com/academy/online-machine-learning-course-using-python/", duration: "120+ video lessons" }
                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link> ({program.duration})
                        </li>
                    ))}
                </ul>
                <br />
                <h3>Machine learning projects at a glance</h3>
                <Link to=" " className="link-light-color">Machine Learning projects for CSE final-year students</Link><br />
                <ul>
                    {[
                        { name: "1. Instagram Reach Analysis ", link: "/machine-learning-in-hyderabad" },
                        { name :"2. Scraping laptop data from Amazon  ", link: "/machine-learning-in-hyderabad" },
                        { name :"3. Video Game Sales Prediction  ", link: "/machine-learning-in-hyderabad" },
                        { name :"4. Heart disease detection ", link: "/machine-learning-in-hyderabad" },
                        { name :"5. Food order prediction  ", link: "/machine-learning-in-hyderabad" },
                        { name :"6. Contact tracing system  ", link: "/machine-learning-in-hyderabad" },
                        { name :"7. Sarcasm detection  ", link: "/machine-learning-in-hyderabad" },
                        { name :"8. Medical insurance price prediction  ", link: "/machine-learning-in-hyderabad" },
                        { name :"9. Credit card clustering  ", link: "/machine-learning-in-hyderabad" },
                        { name :"10. MNIST Data  ", link: "/machine-learning-in-hyderabad" },
                        { name :"11. Real time sentiment analysis  ", link: "/machine-learning-in-hyderabad" },
                        { name :"12. News recommendation system  ", link: "/machine-learning-in-hyderabad" },
                        { name :"13. Calories Burnt Prediction  ", link: "/machine-learning-in-hyderabad" },
                        { name :"14. Online Payment Fraud Detection  ", link: "/machine-learning-in-hyderabad" },
                        { name :"15. Rainfall Prediction system  ", link: "/machine-learning-in-hyderabad" },
                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link to=" " className="link-light-color">Benefits of doing Machine Learning projects for final year students</Link><br/>
                <Link to=" " className="link-light-color">Become a Machine Learning expert in the next 30 days with codegnan</Link>
            </>
        )
    },
    {
        title: "Machine Learning projects for CSE final-year students",
        intro: () => (
            <>
                <p>Below, we have shared the list of top machine learning project ideas and instructions to complete them. </p>

                <p>👉 If you want to learn about machine learning, check out our <Link to="/machine-learning-course-syllabus/" className="link-light-color"> complete machine learning course syllabus. </Link> </p>
            </>
        )
    },
    {
        title: "1. Instagram Reach Analysis ",
        intro: () => (
            <>
                <p>Instagram reach analysis is a vital topic for social media marketing. This project aims at teaching learners how to use data to analyze their Instagram reach. It involves collecting data on the reach of your past posts and using Python to understand how different factors affect the number of people who see your posts. </p>

                <p>👉 If you want to learn about machine learning, check out our <Link to="/machine-learning-course-syllabus/" className="link-light-color"> complete machine learning course syllabus. </Link> </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: " <ul> "+
                [    
                    "<strong>Understanding of Machine Learning concepts:</strong> Have a solid grasp of the fundamentals of machine learning, its workflow, and common data preprocessing techniques ",
                    "<strong>Data Exploration:</strong>  Use of Python libraries like Pandas and NumPy for data manipulation and analysis",
                    "<strong>Data Visualization:</strong> Knowledge of Python in-built tools like Matplotlib, Seaborn, and Plotly for creating charts and tables and improved data analysis "
                ].map((item, index) => (
                    "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
                )).join('') +
                "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul> "+
                [    
                    "Manually gather ‘reach’ data from Instagram insights about past posts",
                    "Import them from CSV file into Python using libraries like Pandas, and clean and organize the data for analysis ",
                    "Use Python libraries like Matplotlib, Seaborn, and Plotly to calculate different metrics, create data visualization, and identify patterns ",
                    "Depending on your data analysis, draw conclusions on which factors influence your Instagram reach "
                ].map((item, index) => (
                    "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
                )).join('') +
                "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul> "+
                [    
                    "Marketers can use this tool to identify what attracts consumers",
                    "Businesses can use them to see how people welcome their products",
                    "Content creators use it to understand which kind of post goes viral and attract followers "
                    
                ].map((item, index) => (
                    "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
                )).join('') +
                "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/8hd4UNECt6A?si=J34KHtRbfMSL9kkA" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>

            </>
        )
    },
    {
        title: "2. Scraping laptop data from Amazon",
        intro: () => (
            <>
                <p>This project aims to use Python libraries to scrape and extract data on laptop models, features, and pricing from Amazon. You will learn how to automate the process of collecting product data from Amazon which will help you in price comparison, market research, and data-driven decision making. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: " <ul>" +
            [
                "<stronge>Basic knowledge of Machine Learning:</stronge> Get hands-on training on the working of machine learning techniques ",
                "<stronge>Web scraping:</stronge> Learn using Python libraries like BeautifulSoup or requests to parse and extract data from HTML web pages and handle different types of data on websites, including tables and forms",
                "<stronge>URL handling:</stronge> Understand how to construct and manipulate URLs to navigate through different product pages on Amazon",
                "<stronge>Data cleaning and transformation:</stronge> Practice cleaning and organizing scraped data into a structured format such as CSV and JSON files or databases",
                "<stronge>Data preprocessing and storage:</stronge> Knowledge of saving the cleaned data to a local file or a cloud storage "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: "<ul>" +
            [
                "Set up the development environment by installing Python and its necessary libraries",
                "Identify the target Amazon laptop product URL that you want to scrape ",
                "Develop the scraping code using Python, extract the required data, and store it in a structured format like a CSV file",
                "Run your code and resolve any bugs within it, like issues with handling dynamic content or working with website changes"
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Website scraping helps businesses monitor product prices and other features of their competitors ",
                "Helps market researchers to collect data on multiple topics for developing a case study or research work",
                "Assists marketers in understanding customer preferences and upcoming trends for making strategic decisions "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/topics/amazon-scraper'> 👉 Find the source code</Link></p>
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/HiOtQMcI5wg?si=nZZYv5lZ4bjxDMfF" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin"
                 allowfullscreen></iframe>

            </>
        )
    },
    {
        title: "3. Video Game Sales Prediction ",
        intro: () => (
            <>
                <p>This Video Game Sales Prediction project aims at using a supervised data learning technique, regression. Learners will work with previous data of video game sales and build a model that can predict future trends and sales depending on various game attributes like genre, platform, etc. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Basic Machine Learning knowledge:</strong> Learn the basic concepts of machine learning and know how it works in the real world ",
                "<strong>Data manipulation:</strong> Knowledge of data manipulation and analysis techniques using Python libraries Pandas and NumPy to summarize, filter, and transform video game sales data",
                "<strong>EDA (Exploratory Data Analysis):</strong> Practice analyzing and visualizing data using Python libraries like Matplotlib, Seaborn, and Plotly ",
                "<strong>Data engineering and pre-processing:</strong> Learn how to select and transform relevant data features to improve the prediction performance of your regression model",
                "<strong>Web scraping:</strong> Implement knowledge of web scraping to collect video game sales data from multiple web pages",
                "<strong>Supervisor learning-Regression:</strong> Learn the use of regression algorithms like linear regression, polynomial regression, and Lasso and Ridge regression",
                "<strong>Regression model evaluation:</strong> Understanding of how to use different evaluation metrics for the regression model, including Mean Squared Error (MSE), R-squared, and Mean Absolute Error (MAE) to measure the model performance ",
                "<strong>Model deployment:</strong> Learn how to deploy trained models to make sales predictions on new and unseen video game data"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "Set up the development environment by installing Python and its libraries like Pandas, NumPy, Matplotlib, Seaborn, and Plotly ",
                "Use web scraping to obtain video game sales data ",
                "Implementation of data engineering methods to clean the data, handle missing values, use feature engineering techniques for creating new features, handle data and time variables, and encode categorical variables ",
                "Split the data into two parts, one for training and the other for testing ",
                "Train the regression model with a suitable algorithm like linear regression, polynomial regression, or Lasso and Ridge regression ",
                "Assess the performance of the regression model using different evaluation metrics ",
                "Optimize the model using different feature engineering techniques and model to improve the prediction performance of the model ",
                "Use the trained model to make predictions of future video game sales"
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Video game companies can use the model to predict their sales for new game releases and think about their production, marketing, and pricing ",
                "Marketers can use it to forecast future sales and make informed decisions about their marketing campaigns ",
                "Video game publishers can use it to identify which game they should invest in and which one to stop for increased revenue and profitability "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/saurabhnative/video-game-sales-prediction-jupyter-notebook/blob/master/Video_Game_Sales_prediction.ipynb'> 👉 Find the source code</Link></p>

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/qIxpZU5d9_4?si=bNOANjX0SEacwEki" 
                title="YouTube video player" 
                frameborder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "4. Heart disease detection",
        intro: () => (
            <>
                <p>The heart disease detection project aims to build a tool that will help users detect the presence of heart disease. It uses Python and the supervised learning technique of classification to accurately predict the presence of a heart disease based on different medical factors.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Knowledge of machine learning basics:</strong> Understanding how the entire machine learning process works",
                "<strong>Data manipulation and analysis:</strong> Learn the use of Python libraries Pandas and NumPy for data manipulation and analysis, data cleaning, handling missing values, and dealing with outliers ",
                "<strong>Data visualization:</strong> Use of Python libraries like Matplotlib, Seaborn, and Plotly for data visualization ",
                "<strong>Data preprocessing:</strong> Understanding of data clearing and handling missing values, feature engineering techniques, data scaling and normalization, and dealing with categorical variables ",
                "<strong>Supervised learning model selection and evaluation:</strong> Use of appropriate supervised learning algorithms like logistic regression, decision trees, and random forests ",
                "<strong>Evaluating model performance:</strong> Knowledge of different model performance evaluation metrics"
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "Download and install Python and its necessary libraries on your system ",
                "Obtain the required data from websites using web scraping ",
                "Preprocessing of data by cleaning data, handling missing values, and encoding categorical variables ",
                "Perform EDA (Exploratory Data Analysis) to understand the relationship between different features and target variables to identify the presence of a heart disease ",
                "Split the data into two parts, one for training the model and the other for testing the model’s performance ",
                "Select an appropriate supervised learning algorithm, train it with the data, and optimize its performance ",
                "Evaluate the performance of the model using the testing data; if it’s not up to the mark, use different feature engineering techniques to improve results "
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Doctors can use the tool to detect any hidden heart diseases in a patient during emergencies ",
                "Patients can use it for personal use to detect any heart disease early and take immediate actions",
                "Hospitals can integrate the tool with their clinical decision support system to help doctors and nurses quickly assess patient’s risk of heart disease based on their medical data"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/g-shreekant/Heart-Disease-Prediction-using-Machine-Learning'> 👉Find the source code</Link></p>

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/qmqCYC-MBQo?si=YdP3UdX_AASQBmC_" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "5. Food order prediction",
        intro: () => (
            <>
                <p>This food order prediction project aims to predict customers’ food orders based on their preferences, location, past orders, time of the day, etc. Learners will build a classification model using supervised learning techniques and Python libraries to make predictions. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Understanding of Machine Learning work process:</strong> Get to know how machine learning works in the real world ",
                "<strong>Data processing:</strong> Learn to clean, transform, and prepare data for training, along with handling missing values and encoding categorical variables ",
                "<strong>Exploratory Data Analysis (EDA):</strong> Understand data visualization, learn the relationships between features, and gain insights on how to select the appropriate machine learning algorithm ",
                "<strong>Model selection:</strong> Experiment with multiple supervised learning algorithms, evaluating their performance and optimizing their accuracy ",
                "<strong>Model evaluation:</strong> Knowledge of assessing the performance of the classification model using multiple evaluation metrics "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "Collect the required dataset containing customer food order information like types of food ordered, time of order, location, etc ",
                "Use Python libraries like Pandas and NumPy to prepare your data, identify patterns, and clean inconsistencies",
                "Split the data into parts, one for training and the other for testing ",
                "Train your model on the training data, allowing it to learn different patterns that influence customers’ food choices",
                "Test the model to check for its performance and accuracy "
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Restaurants can use it to forecast customer orders and keep their stock filled, have proper staff, and be ready for the food preparation process",
                "Food delivery apps can use this to provide personalized food recommendations to customers based on their search or past orders",
                "Food producers and distributors can use the model to predict food habit changes or demands and plan for better production and distribution strategy ",
                "Marketers can use it to develop targeted marketing campaigns, offering personalized promotions based on customer preferences "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/chiragsamal/Predict-Food-Delivery-Time' > 👉 Find the source code</Link> </p>

                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/Uptsr-NlC-M?si=dc8_etgAvduGOZ2G" title="YouTube video player" 
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "6. Contact tracing system ",
        intro: () => (
            <>
                <p>This project aims at tracing whether an individual was in contact with an infected person. The contact tracing system can predict whether an individual has been in close contact with an infected person based on various factors. It will assist public health institutions in managing the spread of infectious disease. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Understanding of Machine Learning concepts:</strong> Knowledge of how machine learning techniques work in the real world ",
                "<strong>Data preprocessing:</strong> Learning how to clean, format, and handle missing values in a dataset ",
                "<strong>Exploratory Data Analysis EDA:</strong> Analyzing data to understand relationships between features and target variable",
                "<strong>Supervised Machine Learning algorithms:</strong> Implementing and comparing the performance of Supervised Machine Learning algorithms like SVM (Support Vector Machine), K-Nearest Neighbors (KNN), and Naive Bayes",
                "<strong>Use of evaluation metrics:</strong> Checking the accuracy of the trained machine using different evaluation metrics like MSE (Mean Squared Error), R-squared, and MAE (Mean Absolute Error)"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "Set up the development environment by installing Python and its libraries ",
                "Generate the required data like location, time, duration of encounters, and personal details of individuals ",
                "Preprocess the data by cleaning and handling missing values, encoding categorical variables, and feature scaling ",
                "Split data into two parts: training and testing datasets and use of algorithms like SVM, KNN, and Naive Bayes to train the model",
                "Evaluate the model’s performance with different evaluation metrics ",
                "Use the system to make predictions on new contact tracing data"
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Public health authorities can use the system to quickly identify and monitor individuals who might be exposed to a contiguous disease and prevent the spread of the outbreak",
                "During a pandemic, this system can be integrated with a larger healthcare system to track the movement of an infected individual and their contacts"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://www.kaggle.com/code/gauravduttakiit/contact-tracing-with-ml' > 👉 Find the source code </Link></p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/dpeAy8X45Eg?si=HJegJhjCHy5dAb_D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "7. Sarcasm detection ",
        intro: () => (
            <>
                <p>This circles and detection project aims to help learners understand the use of natural language processing and supervised learning algorithms. This model will accurately identify sarcastic statements in the text. For that, you need to train a machine learning model to classify between sarcastic and non sarcastic statements.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Knowledge of Python programming:</strong> Learn the use of different Python libraries and codes to implement Machine Learning projects ",
                "<strong>Text data preprocessing:</strong> Understanding of how to preprocess and clean text data ",
                "<strong>Feature engineering techniques:</strong> Use of different feature engineering techniques to create new features from text data, sentiment analysis, and encoding categorical variables",
                "<strong>Supervised learning algorithms:</strong> Implement different supervised learning algorithms ",
                "<strong>Use of evaluation metrics:</strong> Verify the performance of a machine learning model using different evaluation metrics "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "Collect data of sarcastic and non sarcastic statements using web scraping techniques and Python libraries like BeautifulSoup or requests ",
                "Clean and preprocess the data and handle missing values for training the model",
                "Perform feature engineering techniques to extract features from the preprocessed data and use appropriate Machine Learning algorithms to train the model to distinguish between sarcastic and non sarcastic statements ",
                "Split the dataset into training and testing sets and train the model using supervised learning algorithms like SVM, KNN, and Naive Bayes ",
                "Evaluate the performance of the model with appropriate metrics and optimize the system for better outcomes ",
                "Integrate the system into larger applications or systems to detect sarcasm in real-time text inputs"
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Companies can implement this system to analyze customer sentiment on their product line and understand customer complaints expressed in a sarcastic way",
                "Customer care service providers can use this tool to recognize the tone and intent of customer communication and offer them personalized and empathetic responses",
                "Online platforms and communities can use this sarcasm detection system to identify and filter out harmful or inappropriate content and promote a positive environment "
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/waqasisme/Sarcasm-Detector'> 👉 Find the source code</Link></p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/-8XmD2zsFBI?si=Xy9YC-vJ4_N2NMH8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "8. Medical insurance price prediction ",
        intro: () => (
            <>
                <p>This project aims to build a model that can predict medical insurance prices based on certain factors like age, body mass index, sex, number of children, etc. It will help families to identify their insurance premiums and get themselves covered for emergency health scenarios.</p>
            </>

        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Basic knowledge of Machine Learning and Python coding:</strong Learn how Machine Learning works and how to implement Python libraries in ML projects",
                "<strong>Data preprocessing:</strong Understanding how to import and clean datasets, handle missing values, and encode categorical variables ",
                "<strong>Exploratory Data Analysis EDA:</strong Knowledge of analyzing datasets using Python libraries to find out relationships between the features and target variable ",
                "<strong>Model selection:</strong Understanding different supervised learning algorithms like linear regression, decision trees, random forests, etc., and choosing the appropriate one",
                "<strong>Model performance evaluation:</strong Use different evaluation metrics to check the model performance and optimize it for better results ",
                "<strong>Ensemble Methods and Boosting:</strong Implementing different ensemble techniques like bagging and boosting to improve the predictive ability of the model"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "Collect the medical insurance dataset by web scraping with Python libraries like BeautifulSoup or requests ",
                "Clean the data, handle missing values, encode categorical variables, and preprocess the data for training your model",
                "Determine the relationship between features and target variables using visualization techniques like scatter plots, histograms, etc.",
                "Split the data into training and testing datasets and try using different supervised learning algorithms like linear regression, decision trees, etc.",
                "Evaluate the performance of the model considering multiple metrics like R-squared, mean squared error, and root mean squared error",
                "Implement ensemble methods like bagging and boosting, including AdaBoost and Gradient Boosting, to improve the predictive ability of the model ",
                "Evaluate the overall performance of the model based on the test dataset and ensure it is ready for use "
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Individuals can use the tool for family or single insurance planning and estimate the cost based on multiple factors like age, chronic health conditions, etc ",
                "Healthcare providers can implement the tool to understand what factors influence insurance costs and optimize their pricing strategies and patient care plans",
                "Government can leverage this model to predict insurance costs to develop effective healthcare policies and ensure fair and affordable healthcare and medical insurance access to all "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/nitin-pandita/Medical-Insurance-Cost-Prediction'>👉 Find the source code </Link></p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/ntBa7YKc9XM?si=ZVhNPM4kIt-W0Npj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "9. Credit card clustering ",
        intro: () => (
            <>
                <p>This project aims to create a cluster of customers with similar credit card spending patterns, providing valuable insights for credit card companies. It will use Python libraries and unsupervised machine-learning techniques to analyze credit card transaction data and identify customer segments.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Basic understanding of machine learning and Python:</strong> Get handsome experience with Python libraries in machine learning projects and knowledge of basic ML concepts",
                "<strong>Exploratory data analysis using Python library:</strong> Learn the use of two popular Python libraries, Pandas and NumPy, and their use in data manipulation and analysis and scientific computing",
                "<strong>Data engineering and preprocessing:</strong> Understand how to prepare your data for analysis, handle missing values, scale features, data cleaning, and dealing with categorical variables ",
                "<strong>Unsupervised learning technique:</strong> Learn the use of clustering models in unsupervised learning techniques to group customers based on their spending behavior",
                "<strong>Model evaluation:</strong> Knowledge of evaluating a model’s performance using different evaluation metrics and techniques like the Elbow method and Silhouette Analysis ",
                "<strong>Data visualization:</strong> Use of multiple Python libraries like Matplotlib, Seaborn, and Plotly for data visualization and interpretation"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: "<ul>" +
            [
                "Gather a dataset of credit card transactions with a web scraping tool ",
                "Clean the data, handle missing values, and scale features to prepare the data for analysis ",
                "Analyze the data, identify features, and visualize data for a better understanding of hidden patterns ",
                "Apply clustering algorithms like K-means Clustering and DBSCAN to group customers based on their spending behavior",
                "Evaluate the performance of the clustering model and optimize it for better results"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Credit card companies can use the tool to identify distinct customer segments having similar spending patterns that help them provide personalized offers, targeted marketing campaigns, and customer retention strategies",
                "Fraud detection agencies can use it to detect anomalous spending behavior, which can be an indicator of fraudulent transactions",
                "Banks and financial institutions can use it to understand the spending habits of their customer segment and offer tailored rewards programs, financial planning advice, and  credit card adjustments"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/andreduong-zz/credit-card-clustering/blob/master/credit-card-clustering.ipynb?short_path=86d0282'> 👉 Find the source code </Link> </p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/ORzkFkW8ORg?si=O5CetmZNaai9L6fC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "10. MNIST Data ",
        intro: () => (
            <>
                <p>The aim of this project is to work with the MNIST dataset that contains handwritten digit images to understand its underlying data structure.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Basic understanding of machine learning techniques and Python:</strong> Learn how machine Learning works and use different Python libraries in deploying machine learning projects",
                "<strong>Data preprocessing:</strong> Knowledge of how to load and preprocess the MNIST dataset along with normalizing the pixel values and reshaping the data ",
                "<strong>Dimensionality reduction unsupervised learning algorithm:</strong> Understanding of applying dimensionality reduction algorithms like PCA and t-SNE on the MNIST data ",
                "<strong>Data visualization:</strong> Learning how to create visualizations like scatter plots and t-SNE embeddings to understand the structure of the MNIST data",
                "<strong>Model evaluation:</strong> How to evaluate the performance of your model using multiple evaluation metrics "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: "<ul>" +
            [
                "Install required Python libraries like NumPy, Scikit-learn, Pandas, Matplotlib, Seaborn, and Plotly for the project ",
                "Collect MNIST data by web scraping and then preprocess the data by normalizing the pixel values and reshaping the images",
                "Implement dimensionality reduction techniques like PCA using the Scikit-learn library ",
                "Build a simple classifier using a logistic regression model or a neural network  and evaluate its performance "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "MNIST data can be used in developing handwritten character recognition systems required in document processing and bank check processing ",
                "It can be implemented in the signature verification process to ensure security and authentication ",
                "MNIST dataset serves as the starting point for developing image analysis and classification techniques "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/chandan450/MNIST-Handwritten-Digit-Classification'> 👉 Find the source code </Link> </p>
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/L2cAjgc1-bo?si=B6zmqcxSXKEY_VGa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "11. Real time sentiment analysis ",
        intro: () => (
            <>         
                <p>A sentiment analysis system will determine the emotional tone behind a text, whether it is positive, negative, or neutral, in real time.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Basic understanding of machine learning and Python libraries:</strong> Knowledge of implementing multiple Python libraries in completing the project and having a good understanding of machine learning concepts",
                "<strong>Data manipulation:</strong>Use of Python library Pandas to load, clean, and preprocess the text data for training machines ",
                "<strong>Natural language processing:</strong> Applying different National language processing techniques like tokenization, stemming, and lemmatization",
                "<strong>Sentiment analysis:</strong> Use of different sentiment analysis techniques, building a model with supervised learning, and evaluating its performance "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: "<ul>" +
            [
                "Install required Python libraries for the project like Scikit-learn, Pandas, Matplotlib, NumPy ",
                "Data collection with known sentiment labels by web scraping techniques",
                "Clean and preprocess the text data using Python libraries like Pandas, remove stopwords and stemming or lemmatizing words, and convert text to numerical format for machine learning ",
                "Split the pre-process data into training and testing datasets and train your machine model with appropriate algorithms like SVM, KNN, and Naive Bayes to classify the sentiment of the text ",
                "Evaluate the performance of the trained model with appropriate model evaluation metrics like accuracy, precision, recall, and F1-score",
                "Integrate the trained model into the real-time application to accept user input and output the predicted sentiment using Python web frameworks like Flask and Django "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Customer service centers can use it to analyze customer feedback and support conversations, quickly identify and address any negative sentiments, and improve customer satisfaction ",
                "Social media marketers can use it to track the sentiment of online conversations about a product, a brand, or an event for improved marketing and public relations strategies",
                "Financial analysts can use it to monitor news and social media platforms for determining market sentiment and making informed investment decisions"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/AndreaZoccatelli/Sentiment_analysis'> 👉 Find the source code </Link> </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/lQhK9l5XHsE?si=QeE3i31I7sPXBuyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "12. News recommendation system  ",
        intro: () => (
            <>
                <p>This project aims at defining user preferences and analyzing multiple news articles to provide personalized news recommendations to individual users. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<stron></stron>Web scraping: </strong>Learn how to extract news articles from different websites using Python library like BeautifulSoup ",
                "<stron></stron>Data preprocessing:</strong> Knowledge of cleaning and transforming text data for training machine learning models ",
                "<stron></stron>Recommendation algorithms:</strong> Understanding the concept of recommendation systems and their types mainly collaborative filtering and content-based filtering",
                "<stron></stron>Machine learning model training and evaluation:</strong> Knowledge of how to train recommendation models and assess their performance using multiple evaluation metrics ",
                "<stron></stron>User interface development:</strong> Hands-on training on building a web-based interface to showcase your news recommendation system"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: "<ul>" +
            [
                "Set up the development environment by installing Python along with its necessary libraries and any web framework like Flask or Django ",
                "Use web scraping techniques to collect news data from various websites and online sources ",
                "Preprocess the data, clean the news text, extract relevant features, and encode the data for training recommendation models",
                "Implement a recommendation system including content-based filtering, collaborative filtering, or a hybrid model to generate personalized news  recommendations",
                "Split the data into training and testing sets, train the recommendation model, and evaluate its performance using different metrics like precision, recall, and F1-score ",
                "Create a web-based application that allows users to interact with the news recommendation system, view recommended news articles, and provide feedback"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "News organizations can use this system to offer personalized news recommendations to their readers and improve user engagement ",
                "Social media platforms can use it to leverage news recommendations to users, keeping them informed and engaged with any brand or content creators ",
                "Companies can use this news recommendation system to keep their employees updated with industry news and trends and improve their knowledge and decision-making process"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/bluemapleman/NewsRecommendSystem'> 👉 Find the source code </Link> </p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/WHaKe8XLE4Q?si=YGOAEKoKNgk5T7OL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "13. Calories Burnt Prediction",
        intro: () => (
            <>
                <p>The Calories Burnt Prediction project aims to develop a model that can predict the number of calories a person can burn depending on various factors. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Python programming:</strong> Learn Python programming basic concepts, including working with data structures, file handling, and data  manipulation, and the use of Python libraries ",
                "<strong>Data preprocessing:</strong> Understand different techniques for cleaning, handling missing values, and transforming data into formats appropriate to train machines",
                "<strong>Feature engineering:</strong> Knowledge of how to create new features from existing data and improve your training model performance ",
                "<strong>Machine learning algorithms:</strong> Knowledge of applying different algorithms like linear regression, decision trees, and random forests to solve a real-world problem ",
                "<strong>Model evaluation:</strong> Evaluate the performance of the train model using multiple metrics like Mean Squared Error, R-squared, etc."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: "<ul>" +
            [
                "Installing Python and the required library for the project ",
                "Gather data from online sources with web scraping techniques ",
                "Clean the dataset by handling missing values, converting data types, and normalizing the features",
                "Analyze the data and create new features from it that can improve the model’s performance, such as body mass index or activity intensity ",
                "Split the data into training and testing datasets and use it to train your chosen model",
                "Evaluate the performance of your model using appropriate metrics ",
                "Optimize the model’s hyperparameters to improve its performance ",
                "Integrate the model with a simple web application to allow users to provide input and receive predictions on the number of calories burned"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Fitness companies can use this model with their fitness tracking apps or wearable devices to provide users with accurate calorie burn estimates during workout or daily activities",
                "Individuals can use the system to better understand their calorie loss and have effective weight management plans ",
                "Athletes and coaches can use the system to optimize their training process and monitor the calories burnt during different types of exercises"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/Chandrakant817/Calories-Burned-Prediction'> 👉 Find the source code </Link> </p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/xDHBoOqEneY?si=IdhXNn05JMybN_y-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "14. Online Payment Fraud Detection ",
        intro: () => (
            <>
                <p>This online payment fraud detection project aims to help students learn how to build a system that can identify fraudulent online transactions.  The model will work with a dataset of previous online transactions and train machine learning models to recognize patterns that distinguish fraud activities from normal transactions.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Basic knowledge of Python libraries:</strong> Use of different Python libraries like Pandas, NumPy, matplotlib, etc., for performing multiple tasks within machine learning projects ",
                "<strong>Web scraping:</strong> Learn how to extract data from different web pages using scraping techniques ",
                "<strong>Data handling techniques:</strong> Knowledge of how to preprocess the data before feeding them to a machine learning model using Python libraries like Pandas and NumPy ",
                "<strong>Feature engineering:</strong> Understanding of data cleaning and handling missing values, creating new features from existing data, and encoding categorical variables",
                "<strong>Model selection and evaluation:</strong> Learn how to split the data into training and testing sets, use appropriate ML algorithms, and evaluate the model’s performance using different metrics"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: "<ul>" +
            [
                "Install Python and its required libraries for developing the machine learning project ",
                "Gather data from different online transactions, learn its features, and preprocess the data for feeding machine learning models ",
                "Analyze the data and create new features that can improve your model’s ability to detect fraud transactions ",
                "Choose an appropriate machine learning algorithm like logistic regression or decision trees and train the model on the prepared data ",
                "Split the data into training and testing sets, evaluate the model’s performance using relevant evaluation metrics, and fine-tune the model ",
                "Integrate the trained model into a real-world application like a mobile payment app or e-commerce platform to detect and prevent online payment fraud"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Online retailers can integrate this model into their payment processing systems to identify potentially fraudulent transactions",
                "Integrate this tool with different Mobile payment apps to detect fraud in online transactions ",
                "Banks and credit card companies can use this system to monitor their customer transactions and identify suspicious activities in real-time"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/seuwenfei/Online-payment-fraud-detection/blob/main/online-payment-fraud-detection.ipynb'> 👉 Find the source code </Link> </p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/C3fr3UMgLDo?si=yjZfvlcTFx_AaSSb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "15. Rainfall Prediction system ",
        intro: () => (
            <>
                <p>This project aims to develop a model capable of predicting rainfall patterns in the future based on past meteorological data. Learners will get hands-on practice collecting and preprocessing meteorological data, using different machine learning algorithms, and training a model to make accurate rainfall predictions.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "<strong>Data collection:</strong> Learn how to collect existing rainfall data along with other essential features like temperature, humidity, and atmospheric pressure from reliable web sources",
                "<strong>Data preprocessing:</strong> Knowledge of how to clean and preprocess the data, handle missing values, outliers, or inconsistencies, and ensure the data is suitable for training models",
                "<strong>Exploratory Data Analysis:</strong> Familiarity with data visualization techniques using Python libraries like Matplotlib and Seaborn to gain valuable insights from the data",
                "<strong>Feature engineering:</strong> Understanding of feature selection and creation to improve the predictive ability of the model",
                "<strong>Use of Machine Learning algorithms:</strong> Knowledge of different machine learning algorithms and evaluate their performance ",

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: "<ul>" +
            [
                "Setup the development environment with Python and its necessary libraries",
                "Collect rainfall data and other relevant meteorological features from reliable sources with web scraping techniques ",
                "Preprocess the data before feeding it to the machine-learning model",
                "Train the machine learning model with appropriate algorithms for predicting rainfall ",
                "Assess the model’s performance using appropriate evaluation metrics and finetune the hyperparameters to improve prediction accuracy",
                "Integrate the model into a larger system or create a web application"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Farmers can use this tool to predict rainfall and plan their crop management activities ",
                "Local authorities in water management agencies can use it to forecast water availability and implement different water conservation strategies ",
                "Disaster management authorities can use it to understand rainfall rates and provide early warnings to prepare people for a disaster "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/pySTEPS/pysteps'> 👉 Find the source code </Link> </p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/C3fr3UMgLDo?si=MICG4d6EGNLGLJ8Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "Benefits of doing Machine Learning projects for final year students",
        intro: " There are multiple benefits of doing machine learning projects, like <br/><ul>" +
            [
                "Having a clear understanding of machine learning concepts",
                "Developing real-world projects ",
                "Improving professional resume by adding these projects ",
                "Expand your horizon of thinking and improve your creativity skills",
                "Building trust and credibility among employers ",
                "Landing good jobs "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
   
    {
        title: "Become a Machine Learning expert in the next 30 days with codegnan",
        intro: () => (
            <>
                <p>At Codegnan, we provide a 30-day machine learning course that covers all the basic concepts and hands-on training on multiple projects. You can learn from top mentors in the industry who are students from the best universities or are working professionals in the domain.</p>
            </>
        )
    },
    {
        title: " ",
        intro: " <ul>" +
            [
                "Course duration: 30 days ",
                "Course fees: ₹7,999",
                "Class availability: online and offline classes ",
                "End-to-end training with real-time projects ",
                "Classroom training available in Hyderabad and Vijayawada",
                "Trained by mentors above 5 years of industry expertise",
                "Training delivery in English ",
                "Join the 100-day Job Accelerator Program and land top jobs",
                "Enrol for the internship program and join for a short-term internship ",

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
  
    
];

const nav_interview = [
    {
        name: "Python Projects for Beginners 2024 (Shared by Experts)",
        link: "/python-projects"
    },
    {
        name:"C Language syllabus and subjects for 2024 (with free PDF)",
        link:"/c-language-course-syllabus"
    }
];

export default function JavaCoursePage() {
    return (
        <div>
            <Course_template head={headdata} course={coursedata} section={courseSections} coursep={course_brief} inter_links={nav_interview} />
        </div>
    );
}
