import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "Introduction to Machine Learning",
    p: `
        <p> ●  Introduction to Machine Learning and its types (supervised, unsupervised, reinforcement learning)</p>
        <p> ●  Setting up the development environment (Python, Jupyter Notebook, libraries: NumPy, Pandas, Scikit-learn)</p>
        <p> ●  Overview of the Machine Learning workflow and common data preprocessing techniques</p>
    `
  },
  {
    head: "Python Basic Syntax and Data Types",
    p: `
        <p> ●  Definition of data science and its role in various industries.</p>
        <p> ●  Explanation of the data science lifecycle and its key stages.</p>
        <p> ●  Overview of the different types of data: structured, unstructured, and semi-structured.</p>
        <p> ●  Discussion of the importance of data collection, data quality, and data preprocessing.</p>
    `
  },
  {
    head: "Exploratory data analysis (EDA) using Pandas and NumPy",
    p: `
        <p> ●  Introduction to Pandas, a Python library for data manipulation and analysis.</p>
        <p> ●  Overview of NumPy, a fundamental package for scientific computing with Python.</p>
        <p> ●  Explanation of key data structures in Pandas: Series and Data Frame.</p>
        <p> ●  Hands-on exploration of data using Pandas to summarize, filter, and transform data.</p>
        <p> ●  Data cleaning techniques, handling missing values, and dealing with outliers.</p>
        <p> ●  Statistical analysis of data using NumPy functions.</p>
    `
  },
  {
    head: "Data visualization using Matplotlib, Seaborn, and Plotly",
    p: `
          <p> ●  Introduction to data visualization and its importance in data analysis.</p>
          <p> ●  Overview of Matplotlib, a popular plotting library in Python.</p>
          <p> ●  Exploring different types of plots: line plots, scatter plots, bar plots, histogram, etc.</p>
          <p> ●  Customizing plots with labels, titles, colors, and styles.</p>
          <p> ●  Introduction to Seaborn, a Python data visualization library based on Matplotlib.</p>
          <p> ●  Advanced plotting techniques with Seaborn: heatmaps, pair plots, and categorical plots.</p>
          <p> ●  Introduction to Plotly, an interactive plotting library for creating web-based visualizations.</p>
          <p> ●  Creating interactive and dynamic visualizations with Plotly</p>
        <br/>
        <p><b>Hands-on: Instagram Reach Analysis</b></p>
    `
  },
  {
    head: "Data Engineering and Preprocessing",
    p: `
        <p> ●  Introduction to Data Engineering: Data cleaning, transformation, and integration</p>
        <p> ●  Data cleaning and Handling missing values: Imputation, deletion, and outlier treatment</p>
        <p> ●  Feature Engineering techniques: Creating new features, handling date and time variables, and encoding categorical variables</p>
        <p> ●  Data Scaling and Normalization: Standardization, min-max scaling, etc.</p>
        <p> ●  Dealing with categorical variables: One-hot encoding, label encoding, etc.</p>
    `
  },
  {
    head: "Web Scraping",
    p: `
        <p> ● Introduction to web scraping: Tools, libraries, and ethical considerations</p>
        <p> ● Scraping data from websites using libraries like BeautifulSoup and requests: HTML</p>
        <p> ● parsing, locating elements, and extracting data</p>
        <p> ● Handling different types of data on websites: Tables, forms, etc.</p>
        <p> ● Storing scraped data in appropriate formats: CSV, JSON, or databases</p>
      <br/>
      <p><b>Hands-on: Working on Scraping Data from Static / Dynamic Website</b></p>
    `
  },
  {
    head: "Supervised Learning – Regression",
    p: `
        <p> ● Introduction to Regression: Definition, types, and use cases</p>
        <p> ● Linear Regression: Theory, cost function, gradient descent, and assumptions</p>
        <p> ● Polynomial Regression: Adding polynomial terms, degree selection, and overfitting</p>
        <p> ● Lasso and Ridge Regression: Regularization techniques for controlling model complexity</p>
        <p> ● Evaluation metrics for regression models: Mean Squared Error (MSE), R-squared, and Mean Absolute Error (MAE)</p>
        <br/>
      <p><b>Hands-On – Video Game Sales Prediction</b></p>
    `
  },
  {
    head: "Supervised Learning – Classification",
    p: `
        <p> ● Introduction to Classification: Definition, types, and use cases</p>
        <p> ● Logistic Regression: Theory, logistic function, binary and multiclass classification</p>
        <p> ● Decision Trees: Construction, splitting criteria, pruning, and visualization</p>
        <p> ● Random Forests: Ensemble learning, bagging, and feature importance</p>
        <p> ● Evaluation metrics for classification models: Accuracy, Precision, Recall, F1-score, and ROC curves</p>
        <p> ● Implementation of classification models using scikit-learn library</p>
      <br/>
      <p><b>Hands-On – Heart Disease Detection & Food Order Prediction</b></p>
    `
  },
  {
    head: "SVM, KNN & Naive Bayes",
    p: `
        <p> ● Support Vector Machines (SVM): Study SVM theory, different kernel functions (linear, polynomial, radial basis function), and the margin concept. Implement SVM classification and regression, and evaluate the models.</p>
        <p> ● K-Nearest Neighbors (KNN): Understand the KNN algorithm, distance metrics, and the concept of K in KNN. Implement KNN classification and regression, and evaluate the models.</p>
        <p> ● Naive Bayes: Learn about the Naive Bayes algorithm, conditional probability, and Bayes’ theorem. Implement Naive Bayes classification, and evaluate the model’s performance.</p>
      <br/>
      <p><b>Hands-On – Contact Tracing & Sarcasm Detection</b></p>
    `
  },  
  {
    head: "Ensemble Methods and Boosting",
    p: `
        <p> ● AdaBoost: Boosting technique, weak learners, and iterative weight adjustment</p>
        <p> ● Gradient Boosting (XGBoost): Gradient boosting algorithm, Regularization, and hyperparameter tuning</p>
        <p> ● Evaluation and fine-tuning of ensemble models: Cross-validation, grid search, and model selection</p>
        <p> ● Handling imbalanced datasets: Techniques for dealing with class imbalance, such as oversampling and undersampling</p>
      <br/>
      <p><b>Hands-On – Medical Insurance Price Prediction</b></p>
    `
  },
  {
    head: "Unsupervised Learning – Clustering",
    p: `
        <p> ● Introduction to Clustering: Definition, types, and use cases</p>
        <p> ● K-means clustering: Algorithm steps, initialization methods, and elbow method for determining the number of clusters</p>
        <p> ● DBSCAN (Density-Based Spatial Clustering of Applications with Noise): Core</p>
        <p> ● points, density reachability, and epsilon-neighborhoods</p>
        <p> ● Evaluation of clustering algorithms: Silhouette score, cohesion, and separation metrics</p>
      <br/>
      <p>Hands-On – Credit Card Clustering</p>
    `
  },
  {
    head: "Unsupervised Learning – Dimensionality Reduction",
    p: `
        <p> ● Introduction to Dimensionality Reduction: Curse of dimensionality, feature  extraction, and feature selection</p>
        <p> ● Principal Component Analysis (PCA): Eigenvectors, eigenvalues, variance explained, and dimensionality reduction</p>
        <p> ● Implementation of PCA using scikit-learn library</p>
      <br/>
      <p><b>Hands-On – MNIST Data</b></p>
    `
  },
  {
    head: "Model Evaluation and Hyperparameter Tuning",
    p: `
        <p> ● Cross-validation and model evaluation techniques</p>
        <p> ● Hyperparameter tuning using GridSearchCV and RandomizedSearchCV</p>
        <p> ● Model selection and comparison</p>
    `
  },
  {
    head: "Natural Language Processing (NLP)",
    p: `
        <p> ● Introduction to NLP: Understand the basics of NLP, its applications, and challenges.</p>
        <p> ● Text Preprocessing: Learn about tokenization, stemming, lemmatization, stop word removal, and other techniques for text preprocessing.</p>
        <p> ● Text Representation: Explore techniques such as Bag-of-Words (BOW), TF-IDF, and word embeddings (e.g., Word2Vec, Glove) for representing text data.</p>
        <p> ● Sentiment Analysis: Study sentiment analysis techniques, build a sentiment analysis model using supervised learning, and evaluate its performance.</p>
      <br/>
      <p><b>Hands-On – Real Time Sentiment Analysis</b></p>
    `
  },
  {
    head: "Recommendation Systems",
    p: `
        <p> ● Introduction to Recommendation Systems: Understand the concept of</p>
        <p> ● recommendation systems, different types (collaborative filtering, content-based, hybrid), and evaluation metrics.</p>
        <p> ● Collaborative Filtering: Explore collaborative filtering techniques, including</p>
        <p> ● user-based and item-based approaches, and implement a collaborative filtering model.</p>
        <p> ● Content-Based Filtering: Study content-based filtering methods, such as TF-IDF and cosine similarity, and build a content-based recommendation system.</p>
        <p> ● Deployment and Future Directions: Discuss the deployment of recommendation systems and explore advanced topics in NLP and recommendation systems.</p>
      <br/>
      <p><b>Hands-On – News Recommendation System</b></p>
    `
  },
  {
    head: "Reinforcement Learning",
    p: `
          <p> ● Introduction to Reinforcement Learning: Agent, environment, state, action, and reward</p>
          <p> ● Markov Decision Processes (MDP): Markov property, transition probabilities, and value functions</p>
          <p> ● Q-Learning algorithm: Exploration vs. exploitation, Q-table, and learning rate</p>
          <p> ● Hands-on reinforcement learning projects and exercises</p>
      <br/>
      <p><b>Hands-On – Working with OpenAl Gym</b></p>
    `
  },
  {
    head: "Devloping API using Flask / Webapp with Streamlit",
    p: `
          <p> ● Introduction to Flask / Stream lit web framework</p>
          <p> ● Creating a Flask/Streamlit application for ML model deployment</p>
          <p> ● Integrating data preprocessing and ML model</p>
          <p> ● Designing a user-friendly web interface</p>
    
    `
  },
  {
    head: "Deployment and Web Development",
    p: `
        <p> ● Building a web application for Machine Learning models: Creating forms, handling user input, and displaying results</p>
        <p> ● Deployment using AWS (Amazon Web Services): Setting up an AWS instance, configuring security groups, and deploying the application</p>
        <p> ● Deployment using PythonAnywhere: Uploading Flask application files, configuring WSGI, and launching the application</p>
    `
  },
  {
    head: "Project Work and Consolidation",
    p: `
        <p> ● Work on a real-world Machine Learning project: Identify a problem, gather data, and define project scope</p>
        <p> ● Apply the learned concepts and algorithms: Data collection, preprocessing, model building, and evaluation</p>
        <p> ● Deployment of the project on AWS or PythonAnywhere: Showcase the developed application and share the project with others</p>
        <p> ● Presentation and discussion of the project: Demonstrate the project, explain design decisions, and receive feedback</p>
    `
  },
  {
    head: "Projects & Case Study",
    p: `
    <h2>Real-Time Rain Prediction</h2>
      <br/>
          <p> ● Install necessary libraries</p>
          <p> ● Obtain an API key</p>
          <p> ● Fetch live weather data</p>
          <p> ● Preprocess the data</p>
          <p> ● Train a machine learning model</p>
          <p> ● Evaluate the model</p>
          <p> ● Integrate the model with Flask</p>
          <p> ● Display the results</p>
          <p> ● Test and debug</p>
          <p> ● Deploy the application</p>
          <p> ● Continuously update the weather data</p>
    `
  },
  {
    head: "Netflix Recommendation System",
    p: `
        <p> ● Gather the dataset</p>
        <p> ● Explore and preprocess the dataset</p>
        <p> ● Define the problem</p>
        <p> ● Feature engineering</p>
        <p> ● Build the recommendation model</p>
        <p> ● Train the model</p>
        <p> ● Evaluate the model</p>
        <p> ● Generate recommendations</p>
        <p> ● Deploy the recommendation system</p>
        <p> ● Continuously update the datase t and retrain the model</p>
    `
  },
  {
    head: "House Price Prediction",
    p: `
        <p> ● Identify a reliable source for h ouse price data</p>
        <p> ● Understand the website structu re</p>
        <p> ● Perform web scraping</p> 
        <p> ● Preprocess the scraped da ta</p>
        <p> ● Explore and preprocess a dditional data sources (if applicable)</p>
        <p> ● Define the problem</p> 
        <p> ● Split the data</p> 
        <p> ● Train the model</p> 
        <p> ● Evaluate the model</p> 
        <p> ● Fine-tune the model (op tional)</p>
        <p> ● Deploy the model</p> 
        <p> ● Continuously update the  dataset and retrain the model</p>
    `
  },
  {
    head: "Stock Price Prediction",
    p: `
        <p> ● Import necessary libraries</p>
        <p> ● Collect stock price data</p>
        <p> ● Preprocess the data</p>
        <p> ● Explore and visualise the data</p>
        <p> ● Feature engineering</p>
        <p> ● Split the data</lp>
        <p> ● Choose an ML algorithm</p>
        <p> ● Train the model</p>
        <p> ● Evaluate the model</p>
        <p> ● Predict stock prices</p>
        <p> ● Analyze the results</p>
        <p> ● Iterate and improve</p>
    `
  },
  {
    head: "GDP Prediction",
    p: `
        <p> ● Import nec essary libraries</p>
        <p> ● Collect G DP data</p>
        <p> ● Preproces s the data</p>
        <p> ● Explore a nd visualize the data</p>
        <p> ● Feature e ngineering</p>
        <p> ● Split th e data</p>
        <p> ● Choose  an ML algorithm</p>
        <p> ● Train  the model</p>
        <p> ● Evalua te the model</p>
        <p> ● Predic t GDP</p>
        <p> ● Anal yze the results</p>
        <p> ● Itera te and improve</p>
    `
  },
  {
    head: "Course Outcome:",
    p: `
      <p>By the end of this course, you will have a strong understanding of machine learning concepts, algorithms, and techniques. You will be able to build, evaluate, and deploy machine learning models for various tasks. Additionally, you will have the skills to perform data engineering, data preprocessing, and web scraping. You will also be proficient in deploying your ML models using AWS and PythonAnywhere, and building user-friendly web interfaces with Flask.</p>
    `
  }
];

const App = () => {
  return (
    <div>
      <br /><br /><br /><br />
      {/* <h1>FAQs</h1> */}
      <FAQ data={data} />
    </div>
  );
};

export default App;
