import React from "react";
import './internship.css';
import { Link } from "react-router-dom";
import Inter_dropdown from "./Intern_dropdown/Inter_dropdown.jsx";
import FormComponent from '../Form/Form.jsx';
import InternsyllabusComp from './Java_syllabus/Intern_syllabus.jsx';
import { useState } from "react";
import style from '/training/heading-separator.png';

const  data2 = [
  {
    head: "Introduction to Machine Learning",
    p: (
      <>
      <ul>
        <li>  Introduction to Machine Learning and its types (supervised, unsupervised, reinforcement learning)</li>
        <li>  Setting up the development environment (Python, Jupyter Notebook, libraries: NumPy, Pandas, Scikit-learn)</li>
        <li>  Overview of the Machine Learning workflow and common data preprocessing techniques</li>
    </ul>
    </>
    )
  },
  {
    head: "Python Basic Syntax and Data Types",
    p: (
    <>
    <ul>
        <li>  Definition of data science and its role in various industries.</li>
        <li>  Explanation of the data science lifecycle and its key stages.</li>
        <li>  Overview of the different types of data: structured, unstructured, and semi-structured.</li>
        <li>  Discussion of the importance of data collection, data quality, and data preprocessing.</li>
    </ul>
    </>
    )
  },
  {
    head: "Exploratory data analysis (EDA) using Pandas and NumPy",
    p: (
      <>
      <ul>
        <li>  Introduction to Pandas, a Python library for data manipulation and analysis.</li>
        <li>  Overview of NumPy, a fundamental package for scientific computing with Python.</li>
        <li>  Explanation of key data structures in Pandas: Series and Data Frame.</li>
        <li>  Hands-on exploration of data using Pandas to summarize, filter, and transform data.</li>
        <li>  Data cleaning techniques, handling missing values, and dealing with outliers.</li>
        <li>  Statistical analysis of data using NumPy functions.</li>
      </ul>
      </>
    )
  },
  {
    head: "Data visualization using Matplotlib, Seaborn, and Plotly",
    p: (
    <>
      <ul>
          <li>  Introduction to data visualization and its importance in data analysis.</li>
          <li>  Overview of Matplotlib, a popular plotting library in Python.</li>
          <li>  Exploring different types of plots: line plots, scatter plots, bar plots, histogram, etc.</li>
          <li>  Customizing plots with labels, titles, colors, and styles.</li>
          <li>  Introduction to Seaborn, a Python data visualization library based on Matplotlib.</li>
          <li>  Advanced plotting techniques with Seaborn: heatmaps, pair plots, and categorical plots.</li>
          <li>  Introduction to Plotly, an interactive plotting library for creating web-based visualizations.</li>
          <li>  Creating interactive and dynamic visualizations with Plotly</li>
      </ul>
      <br/>
      <p><b>Hands-on: Instagram Reach Analysis</b></p>
      </>
    )
  },
  {
    head: "Data Engineering and Preprocessing",
    p: (
      <>
      <ul>
        <li>  Introduction to Data Engineering: Data cleaning, transformation, and integration</li>
        <li>  Data cleaning and Handling missing values: Imputation, deletion, and outlier treatment</li>
        <li>  Feature Engineering techniques: Creating new features, handling date and time variables, and encoding categorical variables</li>
        <li>  Data Scaling and Normalization: Standardization, min-max scaling, etc.</li>
        <li>  Dealing with categorical variables: One-hot encoding, label encoding, etc.</li>
      </ul>
      </>
    )
  },
  {
    head: "Web Scraping",
    p: (
    <>
    <ul>
        <li> Introduction to web scraping: Tools, libraries, and ethical considerations</li>
        <li> Scraping data from websites using libraries like BeautifulSoup and requests: HTML</li>
        <li> parsing, locating elements, and extracting data</li>
        <li> Handling different types of data on websites: Tables, forms, etc.</li>
        <li> Storing scraped data in appropriate formats: CSV, JSON, or databases</li>
      </ul>
      <br/>
      <p><b>Hands-on: Working on Scraping Data from Static / Dynamic Website</b></p>
      </>
    )
  },
  {
    head: "Supervised Learning – Regression",
    p: (
      <>
      <ul>
        <li> Introduction to Regression: Definition, types, and use cases</li>
        <li> Linear Regression: Theory, cost function, gradient descent, and assumptions</li>
        <li> Polynomial Regression: Adding polynomial terms, degree selection, and overfitting</li>
        <li> Lasso and Ridge Regression: Regularization techniques for controlling model complexity</li>
        <li> Evaluation metrics for regression models: Mean Squared Error (MSE), R-squared, and Mean Absolute Error (MAE)</li>
        
    </ul>
    <br/>
      <p><b>Hands-On – Video Game Sales Prediction</b></p>
    </>
    )
  },
  {
    head: "Supervised Learning – Classification",
    p: (
    <>
      <ul>
        <li> Introduction to Classification: Definition, types, and use cases</li>
        <li> Logistic Regression: Theory, logistic function, binary and multiclass classification</li>
        <li> Decision Trees: Construction, splitting criteria, pruning, and visualization</li>
        <li> Random Forests: Ensemble learning, bagging, and feature importance</li>
        <li> Evaluation metrics for classification models: Accuracy, Precision, Recall, F1-score, and ROC curves</li>
        <li> Implementation of classification models using scikit-learn library</li>
      </ul>
      <br/>
      <p><b>Hands-On – Heart Disease Detection & Food Order Prediction</b></p>
      </>
    )
  },
  {
    head: "SVM, KNN & Naive Bayes",
    p: (
      <>
      <ul>
        <li> Support Vector Machines (SVM): Study SVM theory, different kernel functions (linear, polynomial, radial basis function), and the margin concept. Implement SVM classification and regression, and evaluate the models.</li>
        <li> K-Nearest Neighbors (KNN): Understand the KNN algorithm, distance metrics, and the concept of K in KNN. Implement KNN classification and regression, and evaluate the models.</li>
        <li> Naive Bayes: Learn about the Naive Bayes algorithm, conditional probability, and Bayes’ theorem. Implement Naive Bayes classification, and evaluate the model’s performance.</li>
      <br/>
      <p><b>Hands-On – Contact Tracing & Sarcasm Detection</b></p>
</ul>
</>
    )
  },  
  {
    head: "Ensemble Methods and Boosting",
    p: (
    <>
    <ul>
        <li> AdaBoost: Boosting technique, weak learners, and iterative weight adjustment</li>
        <li> Gradient Boosting (XGBoost): Gradient boosting algorithm, Regularization, and hyperparameter tuning</li>
        <li> Evaluation and fine-tuning of ensemble models: Cross-validation, grid search, and model selection</li>
        <li> Handling imbalanced datasets: Techniques for dealing with class imbalance, such as oversampling and undersampling</li>
    </ul>
    <br/>
      <p><b>Hands-On – Medical Insurance Price Prediction</b></p>
    </>
    )
  },
  {
    head: "Unsupervised Learning – Clustering",
    p: (
      <>
      <ul>
        <li> Introduction to Clustering: Definition, types, and use cases</li>
        <li> K-means clustering: Algorithm steps, initialization methods, and elbow method for determining the number of clusters</li>
        <li> DBSCAN (Density-Based Spatial Clustering of Applications with Noise): Core</li>
        <li> points, density reachability, and epsilon-neighborhoods</li>
        <li> Evaluation of clustering algorithms: Silhouette score, cohesion, and separation metrics</li>
      </ul>
      <br/>
      <p>Hands-On – Credit Card Clustering</p>
      </>
    )
  },
  {
    head: "Unsupervised Learning – Dimensionality Reduction",
    p: (
    <>
    <ul>
        <li> Introduction to Dimensionality Reduction: Curse of dimensionality, feature  extraction, and feature selection</li>
        <li> Principal Component Analysis (PCA): Eigenvectors, eigenvalues, variance explained, and dimensionality reduction</li>
        <li> Implementation of PCA using scikit-learn library</li>
    </ul>
    <br/>
    <p><b>Hands-On – MNIST Data</b></p>
    </>
    )
  },
  {
    head: "Model Evaluation and Hyperparameter Tuning",
    p: (
      <>
      <ul>
        <li> Cross-validation and model evaluation techniques</li>
        <li> Hyperparameter tuning using GridSearchCV and RandomizedSearchCV</li>
        <li> Model selection and comparison</li>
      </ul>
      </>
    )
  },
  {
    head: "Natural Language Processing (NLP)",
    p: (
    <>
    <ul>
        <li> Introduction to NLP: Understand the basics of NLP, its applications, and challenges.</li>
        <li> Text Preprocessing: Learn about tokenization, stemming, lemmatization, stop word removal, and other techniques for text preprocessing.</li>
        <li> Text Representation: Explore techniques such as Bag-of-Words (BOW), TF-IDF, and word embeddings (e.g., Word2Vec, Glove) for representing text data.</li>
        <li> Sentiment Analysis: Study sentiment analysis techniques, build a sentiment analysis model using supervised learning, and evaluate its performance.</li>
    </ul>
    <br/>
    <p><b>Hands-On – Real Time Sentiment Analysis</b></p>
    </>
    )
  },
  {
    head: "Recommendation Systems",
    p: (
      <>
      <ul>
        <li> Introduction to Recommendation Systems: Understand the concept of</li>
        <li> recommendation systems, different types (collaborative filtering, content-based, hybrid), and evaluation metrics.</li>
        <li> Collaborative Filtering: Explore collaborative filtering techniques, including</li>
        <li> user-based and item-based approaches, and implement a collaborative filtering model.</li>
        <li> Content-Based Filtering: Study content-based filtering methods, such as TF-IDF and cosine similarity, and build a content-based recommendation system.</li>
        <li> Deployment and Future Directions: Discuss the deployment of recommendation systems and explore advanced topics in NLP and recommendation systems.</li>
      </ul>
      <br/>
      <p><b>Hands-On – News Recommendation System</b></p>
      </>
    )
  },
  {
    head: "Reinforcement Learning",
    p: (
    <>
    <ul>
          <li> Introduction to Reinforcement Learning: Agent, environment, state, action, and reward</li>
          <li> Markov Decision Processes (MDP): Markov property, transition probabilities, and value functions</li>
          <li> Q-Learning algorithm: Exploration vs. exploitation, Q-table, and learning rate</li>
          <li> Hands-on reinforcement learning projects and exercises</li>
    </ul>
    <br/>
    <p><b>Hands-On – Working with OpenAl Gym</b></p>
    </>
    )
  },
  {
    head: "Devloping API using Flask / Webapp with Streamlit",
    p: (
      <>
      <ul>
          <li> Introduction to Flask / Stream lit web framework</li>
          <li> Creating a Flask/Streamlit application for ML model deployment</li>
          <li> Integrating data preprocessing and ML model</li>
          <li> Designing a user-friendly web interface</li>
      </ul>
      </>
    )
  },
  {
    head: "Deployment and Web Development",
    p: (
    <>
    <ul>
        <li> Building a web application for Machine Learning models: Creating forms, handling user input, and displaying results</li>
        <li> Deployment using AWS (Amazon Web Services): Setting up an AWS instance, configuring security groups, and deploying the application</li>
        <li> Deployment using PythonAnywhere: Uploading Flask application files, configuring WSGI, and launching the application</li>
    </ul>
    </>
    )
  },
  {
    head: "Project Work and Consolidation",
    p: (
      <>
      <ul>
        <li> Work on a real-world Machine Learning project: Identify a problem, gather data, and define project scope</li>
        <li> Apply the learned concepts and algorithms: Data collection, preprocessing, model building, and evaluation</li>
        <li> Deployment of the project on AWS or PythonAnywhere: Showcase the developed application and share the project with others</li>
        <li> Presentation and discussion of the project: Demonstrate the project, explain design decisions, and receive feedback</li>
      </ul>
      </>
    )
  },
  {
    head: "Projects & Case Study",
    p: (
    <>
        <h2>Real-Time Rain Prediction</h2>
        <br/>
        <ul>
          <li> Install necessary libraries</li>
          <li> Obtain an API key</li>
          <li> Fetch live weather data</li>
          <li> Preprocess the data</li>
          <li> Train a machine learning model</li>
          <li> Evaluate the model</li>
          <li> Integrate the model with Flask</li>
          <li> Display the results</li>
          <li> Test and debug</li>
          <li> Deploy the application</li>
          <li> Continuously update the weather data</li>
        </ul>
        </>
    )
  },
  {
    head: "Netflix Recommendation System",
    p: (
      <>
      <ul>
        <li> Gather the dataset</li>
        <li> Explore and preprocess the dataset</li>
        <li> Define the problem</li>
        <li> Feature engineering</li>
        <li> Build the recommendation model</li>
        <li> Train the model</li>
        <li> Evaluate the model</li>
        <li> Generate recommendations</li>
        <li> Deploy the recommendation system</li>
        <li> Continuously update the datase t and retrain the model</li>
      </ul>
      </>
    )
  },
  {
    head: "House Price Prediction",
    p: (
    <>
    <ul>
        <li> Identify a reliable source for h ouse price data</li>
        <li> Understand the website structu re</li>
        <li> Perform web scraping</li> 
        <li> Preprocess the scraped da ta</li>
        <li> Explore and preprocess a dditional data sources (if applicable)</li>
        <li> Define the problem</li> 
        <li> Split the data</li> 
        <li> Train the model</li> 
        <li> Evaluate the model</li> 
        <li> Fine-tune the model (optional)</li>
        <li> Deploy the model</li> 
        <li> Continuously update the  dataset and retrain the model</li>
    </ul>
    </>
    )
  },
  {
    head: "Stock Price Prediction",
    p: (
      <>
      <ul>
        <li> Import necessary libraries</li>
        <li> Collect stock price data</li>
        <li> Preprocess the data</li>
        <li> Explore and visualise the data</li>
        <li> Feature engineering</li>
        <li> Split the data</li>
        <li> Choose an ML algorithm</li>
        <li> Train the model</li>
        <li> Evaluate the model</li>
        <li> Predict stock prices</li>
        <li> Analyze the results</li>
        <li> Iterate and improve</li>
      </ul>
      </>
    )
  },
  {
    head: "GDP Prediction",
    p: (
    <>
      <ul>
        <li> Import nec essary libraries</li>
        <li> Collect GDP data</li>
        <li> Preprocess the data</li>
        <li> Explore and visualize the data</li>
        <li> Feature engineering</li>
        <li> Split the data</li>
        <li> Choose an ML algorithm</li>
        <li> Train  the model</li>
        <li> Evaluate the model</li>
        <li> Predict GDP</li>
        <li> Analyze the results</li>
        <li> Iterate and improve</li>
   
      </ul>
    </>
    )
  },
  {
    head: "Course Outcome:",
    p: (
      <>

      <p>By the end of this course, you will have a strong understanding of machine learning concepts, algorithms, and techniques. You will be able to build, evaluate, and deploy machine learning models for various tasks. Additionally, you will have the skills to perform data engineering, data preprocessing, and web scraping. You will also be proficient in deploying your ML models using AWS and PythonAnywhere, and building user-friendly web interfaces with Flask.</p>
    </>
    )
  }


];

const syllabusdata = [
    {
        head: " ",
        p: (
            <>
                <h2 style={{ color :"black" }}>Machine Learning course <span style={{ color :"red" }} > Curriculum in Hyderabad </span></h2><br />
                <Inter_dropdown data={data2} />
               
            </>
        )
    }

]

const syllabus2data = [
    {
        head: "",
        p: ( 
            <>
            <h2 style={{ color :"black" }}>Tools You Will Learn with<span style={{ color :"red" }} >  Our Machine Learning Course in Hyderabad </span></h2><br />

                <p>Through our well devised course, you will be able to kickstart your machine learning and AI career with contemporary tools and technologies including Python, Numpy, Pandas, Matplotlib, Jupyter, Seaborn, Anaconda, Flask and scikit-learn. You will also get a chance to solve exciting challenges and showcase your certification on our HackerRank platforms. </p>
            
            </>
        )
    }

]

export default function Intern_Page() {
    const [year, setYear] = useState('2nd');
    // alert('asadfgds')
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
                        <h2 className="Linkcolor">Become a Machine Learning developer </h2><br />
                        <p>Talk to our expert Machine Learning mentors and learn how our training programs in Hyderabad can help you become a Machine Learning developer and get a high-paying job.</p><br /><br />
                        <FormComponent />
                    </div>
                </div>
            </div><br /><br />
            
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
