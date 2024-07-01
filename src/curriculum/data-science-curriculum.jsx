import React from "react";
import FAQ from "./FAQ";

const data = [
  {
    head: "Python Introduction and setting up the environment",
    p: `
        <p> ● Introduction to programming</p>
        <p> ● R or Python?</p>
        <p> ● Why Python for Data Science?</p>
        <p> ● Different job roles with Python</p>
        <p> ● Different Python IDEs</p>
        <p> ● Downloading and setting up python environment</p>
      <br/>
      <p><b>Hands-On – Installing Python – IDLE</b></p>
    `
  },
  {
    head: "Python Basic Syntax and Data Types",
    p: `
        <p> ● Python input and output operations.</p>
        <p> ● Comments</p>
        <p> ● Variables, rules for naming variables</p>
        <p> ● Basic Data Types in Python</p>
        <p> ● Typecasting in python</p>
     <br/>
     <p><b>Hands-On – Using comments, variables, data types, and typecasting in python program</b></p>
    `
  },
  {
    head: "Operators in Python",
    p: `
        <p> ● Arithmetic operators</p>
        <p> ● Assignment operators</p>
        <p> ● Comparison operators</p>
        <p> ● Logical operators</p>
        <p> ● Identity operators</p>
        <p> ● Membership Operators</p>
        <p> ● Bitwise Operators</p>
        <br/>
        <p><b>Hands-On – Working with different data types in a program</b></p>
    `
  },
  {
    head: "Strings in Python ",
    p: `
        <p> ● Creating strings</p>
        <p> ● String formatting</p>
        <p> ● Indexing</p>
        <p> ● Slicing</p>
        <p> ● String methods</p>
        <br/>
        <p><b>Hands-On – Performing string operations</b></p>
    `
  },
  {
    head: "Lists",
    p: `
        <p> ● Creating lists</p>
        <p> ● Properties of lists</p>
        <p> ● List indexing</p>
        <p> ● List slicing</p>
        <p> ● List of lists</p>
        <p> ● List Methods</p>
        <p> ● Adding, Updating & removing elements from lists</p>
      <br/>
      <p><b>Hands-On – Slicing, Indexing, and using methods on lists</b></p>
    `
  },
  {
    head: "Tuples",
    p: `
        <p> ● Syntax to create tuples</p>
        <p> ● Tuple properties</p>
        <p> ● Indexing on tuples</p>
        <p> ● Slicing on tuples</p>
        <p> ● Tuple methods</p>
      <br/>
      <p><b>Hands-On – Working with tuples</b></p>
    `
  },
  {
    head: "Sets",
    p: `
        <p> ● Syntax for creating sets</p>
        <p> ● Updating sets</p>
        <p> ● Set operations and methods</p>
        <p> ● Difference between sets, lists and tuples</p>
      <br/>
      <p><b>Hands-On – Performing set operations in a program</b></p>
    `
  },
  {
    head: "Dictionaries",
    p: `
        <p> ● Syntax for creating Dictionaries</p>
        <p> ● Storing data in dictionaries</p>
        <p> ● Dictionaries keys and values</p>
        <p> ● Accessing the elements of dictionaries</p>
        <p> ● Dictionary methods</p>
      <br/>
      <p><b>Hands-On – Creating dictionaries and using dictionaries methods</b></p>
    `
  },
  {
    head: "Python conditional Statements",
    p: `
        <p> ● Setting logic with conditional statements</p>
        <p> ● If statements</p>
        <p> ● If -else statements</p>
        <p> ● If-elif-else statements</p>
      <br/>
      <p><b>Hands-On – Setting logic in programs using conditional statements</b></p>
    `
  },  
  {
    head: "Loops in Python",
    p: `
        <p> ● Iterating with python loops</p>
        <p> ● while loop</p>
        <p> ● for loop</p>
        <p> ● range</p>
        <p> ● break</p>
        <p> ● continue</p>
        <p> ● pass</p>
        <p> ● enumerate</p>
        <p> ● zip</p>
        <p> ● assert</p>
      <br/>
      <p><b>Hands-On – Iterating with loops in python</b></p>
    `
  },
  {
    head: "Getting Started with Hackerrank use cases and working on them",
    p: `
        <p> ●  Solving Level by Level Challenges</p>
        <p> ●  Assignments to acquire Bronze and Silver Level badges</p>
    `
  },
  {
    head: "Lists and Dictionaries comprehension",
    p: `
        <p> ● Why List comprehension</p>
        <p> ● Syntax for list comprehension</p>
        <p> ● Syntax for dict comprehension</p>
      <br/>
      <p><b>Hands-On – Using List and Dictionary comprehension</b></p>
    `
  },
  {
    head: "Functions",
    p: `
        <p> ● What are Functions</p>
        <p> ● Modularity and code reusability</p>
        <p> ● Creating functions</p>
        <p> ● Calling functions</p>
        <p> ● Passing Arguments</p>
        <p> ● Positional Arguments</p>
        <p> ● Keyword Arguments</p>
        <p> ● Variable length arguments (*args)</p>
        <p> ● Variable Keyword length arguments (**kargs)</p>
        <p> ● Return keyword in python</p>
        <p> ● Passing function as argument</p>
        <p> ● Passing function in return</p>
        <p> ● Global and local variables</p>
        <p> ● Recursion</p>
      <br/>
      <p><b>Hands-On – Creating our own functions,passing arguments and performing operations</b></p>
    `
  },
  {
    head: "Anonymous Function",
    p: `
        <p> ● Lambda</p>
        <p> ● Lambda with filter</p>
        <p> ● Lambda with map</p>
        <p> ● Lambda with reduce</p>
      <br/>
      <p><b>Hands-On – Working with lambda, filter,map and reduce in python</b></p>
    `
  },
  {
    head: "Generators",
    p: `
        <p> ●Creating and using generators</p>
      <br/>
      <p><b>Hands-On – Creating and using generators</b></p>
    `
  },
  {
    head: "Modules",
    p: `
        <p> ● Creating modules</p>
        <p> ● Importing functions from different module</p>
        <p> ● Importing Variables from different modules</p>
        <p> ● Python builtin modules</p>
      <br/>
      <p><b>Hands-On – Creating and importing Modules</b></p>
    `
  },
  {
    head: "Packages",
    p: `
        <p> ● Creating packages</p>
        <p> ● Importing modules from package</p>
        <p> ● Different ways of importing modules and packages</p>
        <p> ● Working on Numpy,Pandas and Matplotlib</p>
      <br/>
      <p><b>Hands-On – Creating and importing packages</b></p>
    `
  },
  {
    head: "Exception and Error Handling",
    p: `
        <p> ● Syntax errors</p>
        <p> ● Logical errors</p>
        <p> ● Handling errors using try,except and finally</p>
        <br/>
      <p><b>Hands-On – Handling Errors with try and except</b></p>
    `
  },
  {
    head: "Classes and Objects (OOPS)",
    p: `
        <p> ● Creating classes & Objects</p>
        <p> ● Attributes and methods</p>
        <p> ● Understanding __init__ constructor method</p>
        <p> ● Class and instance attributes</p>
        <p> ● Different types of of methods</p>
        <p> ● Instance methods</p>
        <p> ● Class methods</p>
        <p> ● Static methods</p>
        <p> ● Inheritance</p>
        <p> ● Creating child and parent class</p>
        <p> ● Overriding parent methods</p>
        <p> ● The super() function</p>
        <p> ● Understanding Types of inheritance</p>
        <p> ● Single inheritance</p>
        <p> ● Multiple inheritance</p>
        <p> ● Multilevel inheritance</p>
        <p> ● Polymorphism</p>
        <p> ● Operator overloading</p>
      <br/>
      <p><b>Hands-On – Creating classes, objects. Creating methods and attributes. Working with different methods. Using inheritance and polymorphism.</b></p>
    `
  },
  {
    head: "Date and Time",
    p: `
        <p> ● date module</p>
        <p> ● time module</p>
        <p> ● datetime module</p>
        <p> ● time delta</p>
        <p> ● formatting date and time</p>
        <p> ● strftime()</p>
        <p> ● striptime()</p>
      <br/>
      <p><b>Hands-On – Iterating with loops in python</b></p>
    `
  },
  {
    head: "Regex",
    p: `
        <p> ● Understanding the use of regex</p>
        <p> ● re.search()</p>
        <p> ● re.compile()</p>
        <p> ● re.find()</p>
        <p> ● re.split()</p>
        <p> ● re.sub()</p>
        <p> ● Meta characters and their use</p>
      <br/>
      <p><b>Hands-On – using a regular expression to search patterns</b></p>
    `
  },
  {
    head: "Files",
    p: `
        <p> ● Opening file</p>
        <p> ● Opening different file types</p>
        <p> ● Read,write,close files</p>
        <p> ● Opening files in different modes</p>
      <br/>
      <p><b>Hands-On – Reading, Writing, Appending, opening and closing files.</b></p>
    `
  },
  {
    head: "APIs the Unsung Hero of the Connected World",
    p: `
        <p> ● Introduction to APIs</p>
        <p> ● Accessing Public APIs</p>
      <br/>
      <p><b>Hands-on – Accessing Public Weather APIs and People in Space API</b></p>
    `
  },
  {
    head: "SQL Sublanguages",
    p: `
        <p> ● Introduction to SQL Sublanguages</p>
        <p> ● Creating tables and describing its structure</p>
        <p> ● DML:INSERT part-1</p>
        <p> ● DML:INSERT part-2</p>
        <p> ● Null and Not Null constraints,altering default behaviour</p>
        <p> ● DQL:Select</p>
        <p> ● DCL:Commit, Rollback,Savepoint</p>
        <p> ● DML:Working with Update and delete commands</p>
    `
  },
  {
    head: "Web Scraping",
    p: `
        <p> ● Installing BeautifulSoup</p>
        <p> ● Understanding web structures</p>
        <p> ● Chrome devtools</p>
        <p> ● request</p>
        <p> ● Scraping data from web using beautifulsoup</p>
        <p> ● scraping static websites</p>
        <p> ● Scraping dynamic websites using beautiful soup.</p>
      <br/>
      <p><b>Hands-On – Scraping static and dynamic websites using beautifulsoup and selenium</b></p>
    `
  },
  {
    head: "Data analysis EDA using Pandas and NumPy",
    p: `
          <p> ● Introduction to Pandas, a Python library for data manipulation and analysis.</p>
          <p> ● Overview of NumPy, a fundamental package for scientific computing with Python.</p>
          <p> ● Explanation of key data structures in Pandas: Series and DataFrame.</p>
          <p> ● Hands-on exploration of data using Pandas to summarize, filter, and transform data.</p>
          <p> ● Data cleaning techniques, handling missing values, and dealing with outliers.</p>
          <p> ● Statistical analysis of data using NumPy functions.</p>
    `
  },
  {
    head: "Data visualization using Matplotlib, Seaborn, and Plotly",
    p: `
          <p> ● Introduction to data visualization and its importance in data analysis.</p>
          <p> ● Overview of Matplotlib, a popular plotting library in Python.</p>
          <p> ● Exploring different types of plots: line plots, scatter plots, bar plots, histogram, etc.</p>
          <p> ● Customizing plots with labels, titles, colors, and styles.</p>
          <p> ● Introduction to Seaborn, a Python data visualization library based on Matplotlib.</p>
          <p> ● Advanced plotting techniques with Seaborn: heatmaps, pair plots, and categorical plots.</p>
          <p> ● Introduction to Plotly, an interactive plotting library for creating web-based visualizations.</p>
          <p> ● Creating interactive and dynamic visualizations with Plotly.</p>
      <br/>
      <p><b>Hands-on: lnstagram Reach Analysis</b></p>
    `
  },
  {
    head: "Database Access",
    p: `
        <p> ● Introduction to data bases.</p>
        <p> ● WhySQL?</p>
        <p> ● Execution of an SQL statement.</p>
        <p> ● Installing MySQL</p>
        <p> ● Load data.</p>
        <p> ● Use, Describe, Show table.</p>
        <p> ● Select.</p>
        <p> ● Limit, Offset.</p>
        <p> ● Order By.</p>
        <p> ● Distinct.</p>
        <p> ● Where, Comparison Operators, NULL.</p>
        <p> ● Logic Operators.</p>
        <p> ● Aggregate Functions: COUNT, MIN, MAX,AVG, SUM.</p>
        <p> ● Group By.</p>
        <p> ● Having.</p>
        <p> ● Order of Keywords.</p>
        <p> ● Join and Natural Join.</p>
        <p> ● Inner, Left, Right, and Outer Joins.</p>
        <p> ● Sub Queries/Nested Queries/Inner Queries.</p>
        <p> ● DML: INSERT</p>
        <p> ● DML: UPDATE, DELETE</p>
        <p> ● DML: CREATE,TABLE</p>
        <p> ● DDL: ALTER, ADD, MODIFY, DROP</p>
        <p> ● DDL: DROP TABLE, TRUNCATE, DELETE</p>
        <p> ● Data Control Language: GRANT, REVOKE</p>
      <br/>
      <p>Hands-on – Storing and Analysing Scraped Dataset Using SQL</p>
    `
  },
  {
    head: "MS Excel",
    p: `
        <p> ● Excel Introduction</p>
        <p> ● Workbook Window</p>
        <p> ● Create & Open Workbooks</p>
        <p> ● MS Excel Online</p>
        <p> ● Excel vs Google Sheets</p>
        <p> ● Office Button</p>
        <p> ● Ribbon and Tabs</p>
        <p> ● Features of Tabs</p>
        <p> ● Quick Access Toolbar</p>
        <p> ● Mini Toolbar</p>
        <p> ● Title, Help, Zoom, View</p>
    `
  },
  {
    head: "Excel Worksheet",
    p: `
        <p> ● Worksheet, Row, Column</p>
        <p> ● Moving on Worksheet</p>
        <p> ● Enter Data</p>
        <p> ● Select Data</p>
        <p> ● Delete Data</p>
        <p> ● Move Data</p>
        <p> ● Copy Paste Data</p>
        <p> ● Spell Check Insert Symbols</p>
    `
  },
  {
    head: "Excel Calculation",
    p: `
        <p> ● Addition</p>
        <p> ● Sigma Addition</p>
        <p> ● Subtraction</p>
        <p> ● Calculate Average</p>
        <p> ● Sigma Average</p>
    `
  },
  {
    head: "Excel Fill Handle",
    p: `
          <p> ● Fill Handle</p>
          <p> ● Fill Handle with Text</p>
          <p> ● Text with Numbers</p>
          <p> ● Fill Handle with Dates</p>
    `
  },
  {
    head: "Excel Formula",
    p: `
          <p> ● Create Formula open link</p>
          <p> ● Fill Handle in Formula</p>
          <p> ● Relative Referencing</p>
          <p> ● Absolute Referencing</p>
          <p> ● Instruction for Typing</p>
    `
  },
  {
    head: "Quick Excel Functions",
    p: `
        <p> ● Excel IF</p>
        <p> ● If Function</p>
        <p> ● If with Calculations Excel COUNTIF Advanced If</p>
        <p> ● WHAT IF Analysis</p>
    `
  },
  {
    head: "Excel Charts and visualizations",
    p: `
        <p> ● Introduction to Excel Charts</p>
        <p> ● Dynamic Advanced Charts</p>
        <p> ● Pivot Table with Dashboard</p>
        <p> ● Advanced Pivot Table Tips & Tricks</p>
    `
  },
  {
    head: "Excel Advanced",
    p: `
        <p> ● Excel Macros</p>
        <p> ● Excel sumif</p>
        <p> ● Excel vlookup</p>
        <p> ● Excel ISNA</p>
        <p> ● Find & Remove Duplicates</p>
        <p> ● Create drop-down List</p>
        <p> ● Merge cells in Excel</p>
    `
  },
  {
    head: "Tableau",
    p: `
        <p> ● Building bar charts and line charts</p>
        <p> ● Creating pie charts and scatter plots</p>
        <p> ● Designing basic maps and geographic visualizations</p>
        <p> ● Using filters to subset data</p>
        <p> ● Sorting data by different criteria</p>
        <p> ● Applying quick filters for interactive exploration</p>
        <p> ● Adding labels, tooltips, and colors to visualizations</p>
        <p> ● Formatting axes and gridlines</p>
        <p> ● Customizing visual elements for better presentation</p>
        <p> ● Combining multiple visualizations into a dashboard</p>
        <p> ● Adding interactivity with filters and actions</p>
        <p> ● Arranging and organizing dashboard elements</p>
        <p> ● Publishing dashboards to Tableau Public or Tableau Server</p>
        <p> ● Embedding dashboards in websites or presentations</p>
        <p> ● Presenting and sharing dashboards effectively</p>
    `
  },
  {
    head: " Power Bl",
    p: `
        <p> ● Overview of Power Bl and its features</p>
        <p> ● Understanding the Power Bl interface</p>
        <p> ● Connecting to data sources</p>
        <p> ● Importing and transforming data</p>
        <p> ● Creating bar charts and line charts</p>
        <p> ● Designing pie charts and scatter plots</p>
        <p> ● Building basic tables and matrices</p>
        <p> ● Using filters and slicers to subset data</p>
        <p> ● Adding interactivity to visualizations</p>
        <p> ● Sorting and formatting data</p>
        <p> ● Building interactive dashboards with multiple visualizations</p>
        <p> ● Adding filters and slicers for user interactivity</p>
        <p> ● Formatting and organizing dashboard elements</p>
        <p> ● Publishing reports to the Power Bl Service</p>
        <p> ● Sharing reports and dashboards with others</p>
        <p> ● Configuring security and access controls</p>
      <br/>
      <p><b>Hands-on: lnstagram Reach Analysis</b></p>
    `
  },
  {
    head: "Descriptive Statistics",
    p: `
          <p> ● Data- types of data</p>
          <p> ● A measure of central tendency – Mean-Median-Mode</p>
          <p> ● A measure of shape – Variance- Standard deviation, Range, IQR</p>
          <p> ● The measure of shape – Skewness, and kurtosis</p>
          <p> ● Covariance</p>
          <p> ● Correlation – Pearson correlation & Spearman’s rank correlation</p>
          <p> ● Probability – Events, Sample Space, Mutually exclusive events, Mutually exclusive events</p>
          <p> ● Classical and Conditional Probability</p>
          <p> ● Probability distribution – Discrete and Continuous</p>
          <p> ● Uniform Distribution</p>
          <p> ● Expected values, Variance, and means</p>
          <p> ● Gaussian/Normal Distribution</p>
          <p> ● Properties, mean, variance, empirical rule of normal distribution</p>
          <p> ● Standard normal distribution and Z-score</p>
    `
  },
  {
    head: "Inferential Statistics",
    p: `
        <p> ● Central Limit Theorem</p>
        <p> ● Hypothesis testing – Null and Alternate hypothesis Type – I and Type – II error</p>
        <p> ● Critical value, significance level, p-value</p>
        <p> ● One-tailed and two-tailed test</p>
        <p> ● T-test – one sample, two-sample, and paired t-test f-test</p>
        <p> ● One way and two way ANOVA</p>
        <p> ● Chi-Square test</p>
    `
  },
  {
    head: "Introduction to Machine Learning",
    p: `
        <p> ● Introduction to Machine Learning and its types (supervised, unsupervised, reinforcement learning)</p>
        <p> ● Setting up the development environment {Python, Jupyter Notebook, libraries: NumPy, Pandas, Scikit-learn)</p>
        <p> ● Overview of the Machine Learning workflow and common data preprocessing techniques</p>
      
    `
  },
  {
    head: "Introduction to data science and its applications",
    p: `
        <p> ● Definition of data science and its role in various industries.</p>
        <p> ● Explanation of the data science lifecycle and its key stages.</p>
        <p> ● Overview of the different types of data: structured, unstructured, and semi-structured.</p>
        <p> ● Discussion of the importance of data collection, data quality, and data preprocessing..</p>
    `
  },
  {
    head: "Data Engineering and Preprocessing",
    p: `
        <p> ● Introduction to Data Engineering: Data cleaning, transformation, and integration</p>
        <p> ● Data cleaning and Handling missing values: Imputation, deletion, and outlier treatment</p>
        <p> ● Feature Engineering techniques: Creating new features, handling date and time variables, and encoding categorical variables</p>
        <p> ● Data Scaling and Normalization: Standardization, min-max scaling, etc.</p>
        <p> ● Dealing with categorical variables: One-hot encoding, label encoding, etc.</p>
    `
  },
  {
    head: "Model Evaluation and Hyperparameter Tuning",
    p: `
        <p> ● Cross-validation and model evaluation techniques</p>
        <p> ● Hyperparameter tuning using</p>
        <p> ● GridSearchCV and RandomizedSearchCV Model selection and comparison</p>
    `
  },
  {
    head: "Supervised Learning – Regression",
    p: `
        <p> ● Introduction to Regression: Definition, types, and use cases</p>
        <p> ● Linear Regression: Theory, cost function, gradient descent, residual analysis, Q-Q Plot, Interaction Terms, and assumptions</p>
        <p> ● Polynomial Regression: Adding polynomial terms, degree selection, and overfitting</p>
        <p> ● Lasso and Ridge Regression: Regularization techniques for controlling model complexity</p>
        <p> ● Evaluation metrics for regression models: Mean Squared Error (MSE), R-squared, and Mean Absolute Error (MAE)</p>
      <br/>
      <p>Hands-On – House Price Prediction</p>
    `
  },
  {
    head: "CSS Core",
    p: `
        <p> ● Supervised Learning – Classification</p>
        <p> ● Introduction to Classification: Definition, types, and use cases</p>
        <p> ● Logistic Regression: Theory, logistic function, binary and multiclass classification</p>
        <p> ● Decision Trees: Construction, splitting criteria, pruning, and visualization</p>
        <p> ● Random Forests: Ensemble learning, bagging, and feature importance</p>
        <p> ● Evaluation metrics for classification models: Accuracy, Precision, Recall, Fl-score, and ROC curves</p>
        <p> ● Implementation of classification models using scikit-learn library</p>
      <br/>
      <p><b>Hands-On – Heart Disease Detection & Food Order Prediction</b></p>
    `
  },
  {
    head: "SVM, KNN & Naive Bayes",
    p: `
        <p> ● Support Vector Machines (SVM): Study SVM theory, different kernel functions (linear, polynomial, radial basis function), and the margin concept. Implement SVM classification and regression, and evaIuate the models.</p>
        <p> ● K-Nearest Neighbors (KNN): Understand the KNN algorithm, distance metrics, and the concept of Kin KNN. Implement KNN classification and regression, and evalu­ ate the models.</p>
        <p> ● Naive Bayes: Learn about the Naive Bayes algorithm, conditional probability, and Bayes1 theorem. Implement Naive Bayes classification, and evaluate the model1s performance</p>
      <br/>
      <p><b>Hands-On – Contact Tracing & Sarcasm Detection</b></p>
    `
  },

  {
    head: "Ensemble Methods and Boosting",
    p: `
        <p> ● Ada Boost: Boosting technique, weak learners, and iterative weight adjustment Gradient Boosting {XGBoost): Gradient boosting algorithm, Regularization, and hyper para meter tuning</p>
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
      <p> ● K-means Clustering: Algorithm steps, initialization methods, and elbow method for determining the number of clusters</p>
      <p> ● DBSCAN (Density-Based Spatial Clustering of Applications with Noise): Core points, density reachability, and epsilon-neighborhoods</p>
      <p> ● Evaluation of clustering algorithms: Silhouette score, cohesion, and separation met-rics</p>
      <br/>
      <p>Hands-On – Credit Card Clustering</p>
    `
  },
  {
    head: "Unsupervised Learning – Dimensionality Reduction",
    p: `
        <p> ● Introduction to Dimensionality Reduction: Curse of dimensionality, feature ex­ traction, and feature selection</p>
        <p> ● Principal Component Analysis {PCA): Eigenvectors, eigenvalues, variance explained, and dimensionality reduction</p>
        <p> ● Implementation of PCA using scikit-learn library</p>
        <br/>
      <p><b>Hands-On – MNIST Data</b></p>
    `
  },
  {
    head: "Recommendation Systems",
    p: `
        <p> ● Introduction to Recommendation Systems: Understand the concept of recommen- dation systems, different types (collaborative filtering, content-based, hybrid), and evaluation metrics.</p>
        <p> ● Collaborative Filtering: Explore collaborative filtering techniques, including</p>
        <p> ● user-based and item-based approaches, and implement a collaborative filtering model.</p>
        <p> ● Content-Based Filtering: Study content-based filtering methods, such as TF-1DF and cosine similarity, and build a content-based recommendation system.</p>
        <p> ● Deployment and Future Directions: Discuss the deployment of recommendation systems and explore advanced topics in NLP and recommendation systems.</p>
      <br/>
      <p><b>Hands-On – News Recommendation System</b></p>
    `
  },
  {
    head: "Reinforcement Learning",
    p: `
        <p> ● Introduction to Reinforcement Learning: Agent, environment, state, action, and reward</p>
        <p> ● Markov Decision Processes {MOP): Markov property, transition probabilities, and vaIue functions</p>
        <p> ● Q-Learning algorithm: Exploration vs. exploitation, Q-table, and learning rate Hands-on reinforcement learning projects and exercises</p>
      </br>
      <p><b>Hands-On – Working with OpenAI Gym</b></p>
    `
  },
  {
    head: "Developing API using Flask / Webapp with Streamlit",
    p: `
        <p> ● Introduction to Flask/ Stream lit web framework</p>
        <p> ● Creating a Flask/ Streamlit application for ML model deployment Integrating data preprocessing and ML model</p>
        <p> ● Designing a user-friendly web interface</p>
      <br/>
      <p><b>Hands-On – Iterating with loops in python</b></p>
    `
  },
  {
    head: "Deployment of ML Models",
    p: `
        <p> ● Building a web application for Machine Learning models: Creating forms, handling user input, and displaying results</p>
        <p> ● Deployment using AWS (Amazon Web Services): Setting up an AWS instance, con­ figuring security groups, and deploying the application</p>
        <p> ● Deployment using PythonAnywhere: Upleading Flask application files, configuring WSGI, and launching the application</p>
      
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
    head: "Natural Language Processing NLP",
    p: `
    <p>Custom DevBlog Application</p>
      <br/>
          <p> ● Introduction to NLP: Understand the basics of NLP, its applications, and chaIlenges.</p>
          <p> ● Named Entity Recognition (NER): Understand the various approaches and tools used for NER, such as rule-based systems, statistical models, and deep learning.</p>
          <p> ● Text Preprocessing: Learn about tokenization, stemming, lemmatization, stop word removal, and other techniques for text preprocessing.</p>
          <p> ● Text Representation: Explore techniques such as Bag-of-Words (BoW), TF-IDF, and word embeddings (e.g., Word2Vec, GloVe) for representing text data.</p>
          <p> ● Sequential Models: Introduction to RNN, LSTM, Hands on Keras LSTM</p>
          <p> ● Sentiment Analysis: Study sentiment analysis techniques, build a sentiment analysis model using supervised learning, and evaluate its performance.</p>
      <br/>
      <p><b>Hands-On – Real Time Sentiment Analysis</b></p>
    `
  },
  {
    head: "RISE OF THE DEEP LEARNING",
    p: `
        <p> ● Introduction</p>
        <p> ● History of Deep Learning Perceptrons</p>
        <p> ● Multi-Level Perceptrons Representations</p>
        <p> ● Training Neural Networks Activation Functions</p>
    `
  },
  {
    head: "Artificial Neural Networks",
    p: `
        <p> ● Introduction</p>
        <p> ● Deep Learning</p>
        <p> ● Understanding Human Brain</p>
        <p> ● In-Depth Perceptrons</p>
        <p> ● Example for perceptron</p>
        <p> ● Multi Classifier</p>
        <p> ● Neural Networks</p>
        <p> ● Input Layer</p>
        <p> ● Output Layer</p>
        <p> ● Sigmoid Function</p>
        <p> ● Introduction to Tensorflow and Keras</p>
        <p> ● CPU vs GPU</p>
        <p> ● Introduction to Google collaboratory</p>
        <p> ● Training Neural Network</p>
        <p> ● Understanding Notations</p>
        <p> ● Activation Functions</p>
        <p> ● Hyperparameter tuning in keras</p>
        <p> ● Feed-Forward Networks</p>
        <p> ● Online offline mode</p>
        <p> ● Bidirectional RNN</p>
        <p> ● Understanding Dimensions</p>
        <p> ● Back Propagation</p>
        <p> ● Loss function</p>
        <p> ● SGD</p>
        <p> ● Regularization</p>
        <p> ● Training for batches</p>
      <br/>
      <p>Hands-On – Facial Emotion Recognition</p>
    `
  },
  {
    head: " Convolution Neural Networks",
    p: `
        <p> ● Introduction to CNN</p>
        <p> ● Applications of CNN</p>
        <p> ● Idea behind CNN</p>
        <p> ● Understanding Images</p>
        <p> ● Understanding Videos</p>
        <p> ● Convolutions</p>
        <p> ● Striding and Padding</p>
        <p> ● Max Pooling</p>
        <p> ● Edges, Gradients, and Textures</p>
        <p> ● Understanding Channels</p>
        <p> ● Formulas</p>
        <p> ● Weight and Bias</p>
        <p> ● Feature Map</p>
        <p> ● Pooling</p>
        <p> ● Combining</p>
    `
  },
  {
    head: " RNN – Recurrent Neural Networks",
    p: `   
        <p> ● Introduction to RNNs</p>
        <p> ● Training RNNs</p>
        <p> ● RNN Formula</p>
        <p> ● Architecture</p>
        <p> ● Batch Data</p>
        <p> ● Simplified Notations</p>
        <p> ● Types of RNNs </p>
        <p> ● LSTM</p>
        <p> ● GRUs</p>
        <p> ● Training RNN</p>
        <p> ● One to many</p>
        <p> ● Vanishing Gradient problem</p>
      <br/>
      <p><b>Hands-On – COVID-19 Cases Prediction</b></p>
    `
  },
  {
    head: "Generative Models and GANs",
    p: `
        <p> ● Introduction to Generative Models:</p>
        <p> ● Understanding GANs {Generative Adversarial Networks)</p>
        <p> ● GAN Architecture</p>
        <p> ● GAN Training</p>
        <p> ● Evaluating GAN Performance</p>
        <p> ● GAN Variants and Applications</p>
    
    `
  },
  {
    head: "  Computer Vision",
    p: `
        <p> ● Intro to OpenCV</p>
        <p> ● Reading and Writing Images</p>
        <p> ● Saving images</p>
        <p> ● Draw shapes using OpenCV</p>
        <p> ● Face detection and eye detection using OpenCV</p>
        <p> ● CNN with Keras</p>
        <p> ● VGG</p>
      <br/>
      <p><b>Hands-On – Real Time Pose Estimator</b></p>
    `
  },
  {
    head: "Real Time Drowsiness Detection Alert System",
    p: `
           <p> ● Dataset collection</p>
           <p> ● Data preprocessing</p>
           <p> ● Feature extraction</p>
           <p> ● Labeling</p>
           <p> ● Model selection</p>
           <p> ● Model training</p>
           <p> ● Model evaluation</p>
           <p> ● Real-time implementation</p>
           <p> ● Alert mechanism</p>
           <p> ● Continuous improvement</p>
    `
  },
  {
    head: "House Price Prediction using LSTM",
    p: `
        <p> ● Identify a reliable source for house price data</p>
        <p> ● Understand the website structure</p>
        <p> ● Perform web scraping</p>
        <p> ● Preprocess the scraped data</p>
        <p> ● Explore and preprocess additional data sources (if applicable)</p>
        <p> ● Define the problem</p>
        <p> ● Split the data</p>
        <p> ● Train the model</p>
        <p> ● Evaluate the model</p>
        <p> ● Fine-tune the model (optional)</p>
        <p> ● Deploy the model</p>
        <p> ● Continuously update the dataset and retrain the model</p>
    `
  },
  {
    head: "Customizable Chabot using OpenAI API",
    p: `
        <p> ● Define chatbot goals and scope</p>
        <p> ● Gather training data</p>
        <p> ● Data preprocessing</p>
        <p> ● API integration</p>
        <p> ● Model customization</p>
        <p> ● User input handling</p>
        <p> ● Response generation</p>
        <p> ● Post-processing and filtering</p>
        <p> ● Error handling and fallback mechanisms</p>
        <p> ● Continuous improvement</p>
    `
  },
  {
    head: "Fire and Smoke Detection using CNN",
    p: `
        <p> ● Data collection</p>
        <p> ● Data preprocessing</p>
        <p> ● Dataset augmentation</p>
        <p> ● Model architecture</p>
        <p> ● Training</p>
        <p> ● Model evaluation</p>
        <p> ● Fine-tuning</p>
        <p> ● Real-time inference</p>
        <p> ● Thresholding and alerts</p>
        <p> ● Model optimization</p>
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
