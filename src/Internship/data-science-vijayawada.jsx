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
        head: "Introduction To Manual Testing",
        p: (
          <>
          <ul>
            <li> Developers VS Test engineers</li>
            <li> Defect</li>
            <li> Types of Software Testing</li>
          </ul>
        </>
        )
      },
      {
        head: "Python Introduction and setting up the environment",
        p: (
          <>
          <ul>
            <li> Introduction to programming</li>
            <li> R or Python?</li>
            <li> Why Python for Data Science?</li>
            <li> Different job roles with Python</li>
            <li> Different Python IDEs</li>
            <li> Downloading and setting up python environment</li>
          </ul>
        <br/>
          <p><b>Hands-On – Installing Python – IDLE</b></p>
        </>
        )
      },
      {
        head: "Python Basic Syntax and Data Types",
        p: (
        <>
        <ul>
            <li> Python input and output operations.</li>
            <li> Comments</li>
            <li> Variables, rules for naming variables</li>
            <li> Basic Data Types in Python</li>
            <li> Typecasting in python</li>
        </ul>
        <br/>
        <p><b>Hands-On – Using comments, variables, data types, and typecasting in python program</b></p>
        </>
        )
      },
      {
        head: "Operators in Python",
        p: (
          <>
          <ul>
            <li> Arithmetic operators</li>
            <li> Assignment operators</li>
            <li> Comparison operators</li>
            <li> Logical operators</li>
            <li> Identity operators</li>
            <li> Membership Operators</li>
            <li> Bitwise Operators</li>
          </ul>
        <br/>
        <p><b>Hands-On – Working with different data types in a program</b></p>
        </>
        )
      },
      {
        head: "Strings in Python ",
        p: (
        <>
        <ul>
            <li> Creating strings</li>
            <li> String formatting</li>
            <li> Indexing</li>
            <li> Slicing</li>
            <li> String methods</li>
        </ul>
        <br/>
          <p><b>Hands-On – Performing string operations</b></p>
        </>
        )
      },
      {
        head: "Lists",
        p: (
          <>
          <ul>
            <li> Creating lists</li>
            <li> Properties of lists</li>
            <li> List indexing</li>
            <li> List slicing</li>
            <li> List of lists</li>
            <li> List Methods</li>
            <li> Adding, Updating & removing elements from lists</li>
          </ul>
        <br/>
        <p><b>Hands-On – Slicing, Indexing, and using methods on lists</b></p>
        </>
        )
      },
      {
        head: "Tuples",
        p: (
        <>
        <ul>
            <li> Syntax to create tuples</li>
            <li> Tuple properties</li>
            <li> Indexing on tuples</li>
            <li> Slicing on tuples</li>
            <li> Tuple methods</li>
        </ul>
        <br/>
        <p><b>Hands-On – Working with tuples</b></p>
        </>
        )
      },
      {
        head: "Sets",
        p: (
          <>
          <ul>
            <li> Syntax for creating sets</li>
            <li> Updating sets</li>
            <li> Set operations and methods</li>
            <li> Difference between sets, lists and tuples</li>
          </ul>
        <br/>
          <p><b>Hands-On – Performing set operations in a program</b></p>
        </>
        )
      },
      {
        head: "Dictionaries",
        p: (
        <>
        <ul>
            <li> Syntax for creating Dictionaries</li>
            <li> Storing data in dictionaries</li>
            <li> Dictionaries keys and values</li>
            <li> Accessing the elements of dictionaries</li>
            <li> Dictionary methods</li>
        </ul>
        <br/>
          <p><b>Hands-On – Creating dictionaries and using dictionaries methods</b></p>
        </>
        )
      },
      {
        head: "Python conditional Statements",
        p: (
          <>
          <ul>
            <li> Setting logic with conditional statements</li>
            <li> If statements</li>
            <li> If -else statements</li>
            <li> If-elif-else statements</li>
          </ul>
        <br/>
        <p><b>Hands-On – Setting logic in programs using conditional statements</b></p>
        </>
        )
      },  
      {
        head: "Loops in Python",
        p: (
        <>
        <ul>
            <li> Iterating with python loops</li>
            <li> while loop</li>
            <li> for loop</li>
            <li> range</li>
            <li> break</li>
            <li> continue</li>
            <li> pass</li>
            <li> enumerate</li>
            <li> zip</li>
            <li> assert</li>
        </ul>
        <br/>
          <p><b>Hands-On – Iterating with loops in python</b></p>
        </>
        )
      },
      {
        head: "Getting Started with Hackerrank use cases and working on them",
        p: (
          <>
          <ul>
            <li>  Solving Level by Level Challenges</li>
            <li>  Assignments to acquire Bronze and Silver Level badges</li>
          </ul>
        </>
        )
      },
      {
        head: "Lists and Dictionaries comprehension",
        p: (
        <>
        <ul>
            <li> Why List comprehension</li>
            <li> Syntax for list comprehension</li>
            <li> Syntax for dict comprehension</li>
        </ul>
        <br/>
        <p><b>Hands-On – Using List and Dictionary comprehension</b></p>
        </>
        )
      },
      {
        head: "Functions",
        p: (
          <>
          <ul>
            <li> What are Functions</li>
            <li> Modularity and code reusability</li>
            <li> Creating functions</li>
            <li> Calling functions</li>
            <li> Passing Arguments</li>
            <li> Positional Arguments</li>
            <li> Keyword Arguments</li>
            <li> Variable length arguments (*args)</li>
            <li> Variable Keyword length arguments (**kargs)</li>
            <li> Return keyword in python</li>
            <li> Passing function as argument</li>
            <li> Passing function in return</li>
            <li> Global and local variables</li>
            <li> Recursion</li>
          </ul>
        <br/>
          <p><b>Hands-On – Creating our own functions,passing arguments and performing operations</b></p>
        </>
        )
      },
      {
        head: "Anonymous Function",
        p: (
        <>
        <ul>
            <li> Lambda</li>
            <li> Lambda with filter</li>
            <li> Lambda with map</li>
            <li> Lambda with reduce</li>
        </ul>
        <br/>
        <p><b>Hands-On – Working with lambda, filter,map and reduce in python</b></p>
        </>
        )
      },
      {
        head: "Generators",
        p: (
          <>
          <ul>
            <li>Creating and using generators</li>
          </ul>
          <br/>
          <p><b>Hands-On – Creating and using generators</b></p>
        </>
        )
      },
      {
        head: "Modules",
        p: (
        <>
        <ul>
            <li> Creating modules</li>
            <li> Importing functions from different module</li>
            <li> Importing Variables from different modules</li>
            <li> Python builtin modules</li>
        </ul>
        <br/>
        <p><b>Hands-On – Creating and importing Modules</b></p>
        </>
        )
      },
      {
        head: "Packages",
        p: (
          <>
          <ul>
            <li> Creating packages</li>
            <li> Importing modules from package</li>
            <li> Different ways of importing modules and packages</li>
            <li> Working on Numpy,Pandas and Matplotlib</li>
          </ul>
          <br/>
          <p><b>Hands-On – Creating and importing packages</b></p>
        </>
        )
      },
      {
        head: "Exception and Error Handling",
        p: (
        <>
        <ul>
            <li> Syntax errors</li>
            <li> Logical errors</li>
            <li> Handling errors using try,except and finally</li>
        </ul>
        <br/>
        <p><b>Hands-On – Handling Errors with try and except</b></p>
        </>
        )
      },
      {
        head: "Classes and Objects (OOPS)",
        p: (
          <>
          <ul>
            <li> Creating classes & Objects</li>
            <li> Attributes and methods</li>
            <li> Understanding __init__ constructor method</li>
            <li> Class and instance attributes</li>
            <li> Different types of of methods</li>
            <li> Instance methods</li>
            <li> Class methods</li>
            <li> Static methods</li>
            <li> Inheritance</li>
            <li> Creating child and parent class</li>
            <li> Overriding parent methods</li>
            <li> The super() function</li>
            <li> Understanding Types of inheritance</li>
            <li> Single inheritance</li>
            <li> Multiple inheritance</li>
            <li> Multilevel inheritance</li>
            <li> Polymorphism</li>
            <li> Operator overloading</li>
          </ul>
        <br/>
        <p><b>Hands-On – Creating classes, objects. Creating methods and attributes. Working with different methods. Using inheritance and polymorphism.</b></p>
        </>
        )
      },
      {
        head: "Date and Time",
        p: (
        <>
        <ul>
            <li> date module</li>
            <li> time module</li>
            <li> datetime module</li>
            <li> time delta</li>
            <li> formatting date and time</li>
            <li> strftime()</li>
            <li> striptime()</li>
        </ul>
        <br/>
          <p><b>Hands-On – Iterating with loops in python</b></p>
        </>
        )
      },
      {
        head: "Regex",
        p: (
          <>
          <ul>
            <li> Understanding the use of regex</li>
            <li> re.search()</li>
            <li> re.compile()</li>
            <li> re.find()</li>
            <li> re.split()</li>
            <li> re.sub()</li>
            <li> Meta characters and their use</li>
          </ul>
          <br/>
          <p><b>Hands-On – using a regular expression to search patterns</b></p>
        </>
        )
      },
      {
        head: "Files",
        p: (
        <>
        <ul>
            <li> Opening file</li>
            <li> Opening different file types</li>
            <li> Read,write,close files</li>
            <li> Opening files in different modes</li>
        </ul>
        <br/>
          <p><b>Hands-On – Reading, Writing, Appending, opening and closing files.</b></p>
        </>
        )
      },
      {
        head: "APIs the Unsung Hero of the Connected World",
        p: (
          <>
          <ul>
            <li> Introduction to APIs</li>
            <li> Accessing Public APIs</li>
          </ul>
          <br/>
          <p><b>Hands-on – Accessing Public Weather APIs and People in Space API</b></p>
        </>
        )
      },
      {
        head: "SQL Sublanguages",
        p: (
        <>
        <ul>
            <li> Introduction to SQL Sublanguages</li>
            <li> Creating tables and describing its structure</li>
            <li> DML:INSERT part-1</li>
            <li> DML:INSERT part-2</li>
            <li> Null and Not Null constraints,altering default behaviour</li>
            <li> DQL:Select</li>
            <li> DCL:Commit, Rollback,Savepoint</li>
            <li> DML:Working with Update and delete commands</li>
        </ul>
        </>
        )
      },
      {
        head: "Web Scraping",
        p: (
          <>
          <ul>
            <li> Installing BeautifulSoup</li>
            <li> Understanding web structures</li>
            <li> Chrome devtools</li>
            <li> request</li>
            <li> Scraping data from web using beautifulsoup</li>
            <li> scraping static websites</li>
            <li> Scraping dynamic websites using beautiful soup.</li>
          </ul>
        <br/>
          <p><b>Hands-On – Scraping static and dynamic websites using beautifulsoup and selenium</b></p>
        </>
        )
      },
      {
        head: "Data analysis EDA using Pandas and NumPy",
        p: (
        <>
        <ul>
              <li> Introduction to Pandas, a Python library for data manipulation and analysis.</li>
              <li> Overview of NumPy, a fundamental package for scientific computing with Python.</li>
              <li> Explanation of key data structures in Pandas: Series and DataFrame.</li>
              <li> Hands-on exploration of data using Pandas to summarize, filter, and transform data.</li>
              <li> Data cleaning techniques, handling missing values, and dealing with outliers.</li>
              <li> Statistical analysis of data using NumPy functions.</li>
        </ul>
        </>
        )
      },
      {
        head: "Data visualization using Matplotlib, Seaborn, and Plotly",
        p: (
          <>
          <ul>
              <li> Introduction to data visualization and its importance in data analysis.</li>
              <li> Overview of Matplotlib, a popular plotting library in Python.</li>
              <li> Exploring different types of plots: line plots, scatter plots, bar plots, histogram, etc.</li>
              <li> Customizing plots with labels, titles, colors, and styles.</li>
              <li> Introduction to Seaborn, a Python data visualization library based on Matplotlib.</li>
              <li> Advanced plotting techniques with Seaborn: heatmaps, pair plots, and categorical plots.</li>
              <li> Introduction to Plotly, an interactive plotting library for creating web-based visualizations.</li>
              <li> Creating interactive and dynamic visualizations with Plotly.</li>
          </ul>
          <br/>
          <p><b>Hands-on: lnstagram Reach Analysis</b></p>
        </>
        )
      },
      {
        head: "Database Access",
        p: (
        <>
        <ul>
            <li> Introduction to data bases.</li>
            <li> WhySQL?</li>
            <li> Execution of an SQL statement.</li>
            <li> Installing MySQL</li>
            <li> Load data.</li>
            <li> Use, Describe, Show table.</li>
            <li> Select.</li>
            <li> Limit, Offset.</li>
            <li> Order By.</li>
            <li> Distinct.</li>
            <li> Where, Comparison Operators, NULL.</li>
            <li> Logic Operators.</li>
            <li> Aggregate Functions: COUNT, MIN, MAX,AVG, SUM.</li>
            <li> Group By.</li>
            <li> Having.</li>
            <li> Order of Keywords.</li>
            <li> Join and Natural Join.</li>
            <li> Inner, Left, Right, and Outer Joins.</li>
            <li> Sub Queries/Nested Queries/Inner Queries.</li>
            <li> DML: INSERT</li>
            <li> DML: UPDATE, DELETE</li>
            <li> DML: CREATE,TABLE</li>
            <li> DDL: ALTER, ADD, MODIFY, DROP</li>
            <li> DDL: DROP TABLE, TRUNCATE, DELETE</li>
            <li> Data Control Language: GRANT, REVOKE</li>
        </ul>
        <br/>
        <p>Hands-on – Storing and Analysing Scraped Dataset Using SQL</p>
        </>
        )
      },
      {
        head: "MS Excel",
        p: (
          <>
          <ul>
            <li> Excel Introduction</li>
            <li> Workbook Window</li>
            <li> Create & Open Workbooks</li>
            <li> MS Excel Online</li>
            <li> Excel vs Google Sheets</li>
            <li> Office Button</li>
            <li> Ribbon and Tabs</li>
            <li> Features of Tabs</li>
            <li> Quick Access Toolbar</li>
            <li> Mini Toolbar</li>
            <li> Title, Help, Zoom, View</li>
          </ul>
          </>
        )
      },
      {
        head: "Excel Worksheet",
        p: (
        <>
        <ul>
            <li> Worksheet, Row, Column</li>
            <li> Moving on Worksheet</li>
            <li> Enter Data</li>
            <li> Select Data</li>
            <li> Delete Data</li>
            <li> Move Data</li>
            <li> Copy Paste Data</li>
            <li> Spell Check Insert Symbols</li>
        </ul>
        </>
        )
      },
      {
        head: "Excel Calculation",
        p: (
          <>
          <ul>
            <li> Addition</li>
            <li> Sigma Addition</li>
            <li> Subtraction</li>
            <li> Calculate Average</li>
            <li> Sigma Average</li>
          </ul>
        </>
        )
      },
      {
        head: "Excel Fill Handle",
        p: (
        <>
        <ul>
              <li> Fill Handle</li>
              <li> Fill Handle with Text</li>
              <li> Text with Numbers</li>
              <li> Fill Handle with Dates</li>
        </ul>
        </>
        )
      },
      {
        head: "Excel Formula",
        p: (
          <>
          <ul>
              <li> Create Formula open link</li>
              <li> Fill Handle in Formula</li>
              <li> Relative Referencing</li>
              <li> Absolute Referencing</li>
              <li> Instruction for Typing</li>
        </ul>
        </>
        )
      },
      {
        head: "Quick Excel Functions",
        p: (
        <>
        <ul>
            <li> Excel IF</li>
            <li> If Function</li>
            <li> If with Calculations Excel COUNTIF Advanced If</li>
            <li> WHAT IF Analysis</li>
        </ul>
        </>
        )
      },
      {
        head: "Excel Charts and visualizations",
        p: (
          <>
          <ul>
            <li> Introduction to Excel Charts</li>
            <li> Dynamic Advanced Charts</li>
            <li> Pivot Table with Dashboard</li>
            <li> Advanced Pivot Table Tips & Tricks</li>
          </ul>
        </>
        )
      },
      {
        head: "Excel Advanced",
        p: (
        <>
        <ul>
            <li> Excel Macros</li>
            <li> Excel sumif</li>
            <li> Excel vlookup</li>
            <li> Excel ISNA</li>
            <li> Find & Remove Duplicates</li>
            <li> Create drop-down List</li>
            <li> Merge cells in Excel</li>
        </ul>
        </>
        )
      },
      {
        head: "Tableau",
        p: (
          <>
          <ul>
            <li> Building bar charts and line charts</li>
            <li> Creating pie charts and scatter plots</li>
            <li> Designing basic maps and geographic visualizations</li>
            <li> Using filters to subset data</li>
            <li> Sorting data by different criteria</li>
            <li> Applying quick filters for interactive exploration</li>
            <li> Adding labels, tooltips, and colors to visualizations</li>
            <li> Formatting axes and gridlines</li>
            <li> Customizing visual elements for better presentation</li>
            <li> Combining multiple visualizations into a dashboard</li>
            <li> Adding interactivity with filters and actions</li>
            <li> Arranging and organizing dashboard elements</li>
            <li> Publishing dashboards to Tableau Public or Tableau Server</li>
            <li> Embedding dashboards in websites or presentations</li>
            <li> Presenting and sharing dashboards effectively</li>
        </ul>
        </>
        )
      },
      {
        head: " Power Bl",
        p: (
          <>
          <ul>
            <li> Overview of Power Bl and its features</li>
            <li> Understanding the Power Bl interface</li>
            <li> Connecting to data sources</li>
            <li> Importing and transforming data</li>
            <li> Creating bar charts and line charts</li>
            <li> Designing pie charts and scatter plots</li>
            <li> Building basic tables and matrices</li>
            <li> Using filters and slicers to subset data</li>
            <li> Adding interactivity to visualizations</li>
            <li> Sorting and formatting data</li>
            <li> Building interactive dashboards with multiple visualizations</li>
            <li> Adding filters and slicers for user interactivity</li>
            <li> Formatting and organizing dashboard elements</li>
            <li> Publishing reports to the Power Bl Service</li>
            <li> Sharing reports and dashboards with others</li>
            <li> Configuring security and access controls</li>
          <br/>
          <p><b>Hands-on: lnstagram Reach Analysis</b></p>
        </ul>
        </>
        )
      },
      {
        head: "Descriptive Statistics",
        p: (
        <>
        <ul>
              <li> Data- types of data</li>
              <li> A measure of central tendency – Mean-Median-Mode</li>
              <li> A measure of shape – Variance- Standard deviation, Range, IQR</li>
              <li> The measure of shape – Skewness, and kurtosis</li>
              <li> Covariance</li>
              <li> Correlation – Pearson correlation & Spearman’s rank correlation</li>
              <li> Probability – Events, Sample Space, Mutually exclusive events, Mutually exclusive events</li>
              <li> Classical and Conditional Probability</li>
              <li> Probability distribution – Discrete and Continuous</li>
              <li> Uniform Distribution</li>
              <li> Expected values, Variance, and means</li>
              <li> Gaussian/Normal Distribution</li>
              <li> Properties, mean, variance, empirical rule of normal distribution</li>
              <li> Standard normal distribution and Z-score</li>
        </ul>
        </>
        )
      },
      {
        head: "Inferential Statistics",
        p: (
          <>
          <ul>
            <li> Central Limit Theorem</li>
            <li> Hypothesis testing – Null and Alternate hypothesis Type – I and Type – II error</li>
            <li> Critical value, significance level, p-value</li>
            <li> One-tailed and two-tailed test</li>
            <li> T-test – one sample, two-sample, and paired t-test f-test</li>
            <li> One way and two way ANOVA</li>
            <li> Chi-Square test</li>
        </ul>
        </>
        )
      },
      {
        head: "Introduction to Machine Learning",
        p: (
        <>
        <ul>
            <li> Introduction to Machine Learning and its types (supervised, unsupervised, reinforcement learning)</li>
            <li> Setting up the development environment (Python, Jupyter Notebook, libraries: NumPy, Pandas, Scikit-learn)</li>
            <li> Overview of the Machine Learning workflow and common data preprocessing techniques</li>
        </ul>
        </>
        )
      },
      {
        head: "Introduction to data science and its applications",
        p: (
          <>
            <ul>
            <li> Definition of data science and its role in various industries.</li>
            <li> Explanation of the data science lifecycle and its key stages.</li>
            <li> Overview of the different types of data: structured, unstructured, and semi-structured.</li>
            <li> Discussion of the importance of data collection, data quality, and data preprocessing..</li>
        </ul>
        </>
        )
      },
      {
        head: "Data Engineering and Preprocessing",
        p: (
        <>
          <ul>
            <li> Introduction to Data Engineering: Data cleaning, transformation, and integration</li>
            <li> Data cleaning and Handling missing values: Imputation, deletion, and outlier treatment</li>
            <li> Feature Engineering techniques: Creating new features, handling date and time variables, and encoding categorical variables</li>
            <li> Data Scaling and Normalization: Standardization, min-max scaling, etc.</li>
            <li> Dealing with categorical variables: One-hot encoding, label encoding, etc.</li>
        </ul>
        </>
        )
      },
      {
        head: "Model Evaluation and Hyperparameter Tuning",
        p: (
          <>
            <ul>
            <li> Cross-validation and model evaluation techniques</li>
            <li> Hyperparameter tuning using</li>
            <li> GridSearchCV and RandomizedSearchCV Model selection and comparison</li>
        </ul>
        </>
        )
      },
      {
        head: "Supervised Learning – Regression",
        p: (
        <>
          <ul>
            <li> Introduction to Regression: Definition, types, and use cases</li>
            <li> Linear Regression: Theory, cost function, gradient descent, residual analysis, Q-Q Plot, Interaction Terms, and assumptions</li>
            <li> Polynomial Regression: Adding polynomial terms, degree selection, and overfitting</li>
            <li> Lasso and Ridge Regression: Regularization techniques for controlling model complexity</li>
            <li> Evaluation metrics for regression models: Mean Squared Error (MSE), R-squared, and Mean Absolute Error (MAE)</li>
          <br/>
          <p>Hands-On – House Price Prediction</p>
        </ul>
        </>
        )
      },
      {
        head: "CSS Core",
        p: (
          <>
            <ul>
            <li> Supervised Learning – Classification</li>
            <li> Introduction to Classification: Definition, types, and use cases</li>
            <li> Logistic Regression: Theory, logistic function, binary and multiclass classification</li>
            <li> Decision Trees: Construction, splitting criteria, pruning, and visualization</li>
            <li> Random Forests: Ensemble learning, bagging, and feature importance</li>
            <li> Evaluation metrics for classification models: Accuracy, Precision, Recall, Fl-score, and ROC curves</li>
            <li> Implementation of classification models using scikit-learn library</li>
          <br/>
          <p><b>Hands-On – Heart Disease Detection & Food Order Prediction</b></p>
        </ul>
        </>
        )
      },
      {
        head: "SVM, KNN & Naive Bayes",
        p: (
        <>
          <ul>
            <li> Support Vector Machines (SVM): Study SVM theory, different kernel functions (linear, polynomial, radial basis function), and the margin concept. Implement SVM classification and regression, and evaIuate the models.</li>
            <li> K-Nearest Neighbors (KNN): Understand the KNN algorithm, distance metrics, and the concept of Kin KNN. Implement KNN classification and regression, and evalu­ ate the models.</li>
            <li> Naive Bayes: Learn about the Naive Bayes algorithm, conditional probability, and Bayes1 theorem. Implement Naive Bayes classification, and evaluate the model1s performance</li>
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
              <li> Ada Boost: Boosting technique, weak learners, and iterative weight adjustment Gradient Boosting (XGBoost): Gradient boosting algorithm, Regularization, and hyper para meter tuning</li>
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
            <li> K-means Clustering: Algorithm steps, initialization methods, and elbow method for determining the number of clusters</li>
            <li> DBSCAN (Density-Based Spatial Clustering of Applications with Noise): Core points, density reachability, and epsilon-neighborhoods</li>
            <li> Evaluation of clustering algorithms: Silhouette score, cohesion, and separation met-rics</li>
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
            <li> Introduction to Dimensionality Reduction: Curse of dimensionality, feature ex­ traction, and feature selection</li>
            <li> Principal Component Analysis (PCA): Eigenvectors, eigenvalues, variance explained, and dimensionality reduction</li>
            <li> Implementation of PCA using scikit-learn library</li>
        </ul>
        </>
        )
      },
      {
        head: "Recommendation Systems",
        p: (
        <>
          <ul>
            <li> Introduction to Recommendation Systems: Understand the concept of recommen- dation systems, different types (collaborative filtering, content-based, hybrid), and evaluation metrics.</li>
            <li> Collaborative Filtering: Explore collaborative filtering techniques, including</li>
            <li> user-based and item-based approaches, and implement a collaborative filtering model.</li>
            <li> Content-Based Filtering: Study content-based filtering methods, such as TF-1DF and cosine similarity, and build a content-based recommendation system.</li>
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
              <li> Markov Decision Processes (MOP): Markov property, transition probabilities, and vaIue functions</li>
              <li> Q-Learning algorithm: Exploration vs. exploitation, Q-table, and learning rate Hands-on reinforcement learning projects and exercises</li>
        </ul>
        <p><b>Hands-On – Working with OpenAI Gym</b></p>
        </>
        )
      },
      {
        head: "Developing API using Flask / Webapp with Streamlit",
        p: (
        <>
        <ul>
            <li> Introduction to Flask/ Stream lit web framework</li>
            <li> Creating a Flask/ Streamlit application for ML model deployment Integrating data preprocessing and ML model</li>
            <li> Designing a user-friendly web interface</li>
        </ul>
        <br/>
        <p><b>Hands-On – Iterating with loops in python</b></p>
        </>
        )
      },
      {
        head: "Deployment of ML Models",
        p: (
          <>
            <ul>
            <li> Building a web application for Machine Learning models: Creating forms, handling user input, and displaying results</li>
            <li> Deployment using AWS (Amazon Web Services): Setting up an AWS instance, con­ figuring security groups, and deploying the application</li>
            <li> Deployment using PythonAnywhere: Upleading Flask application files, configuring WSGI, and launching the application</li>
          
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
        head: "Natural Language Processing NLP",
        p: (
          <>
            <ul>
        <p>Custom DevBlog Application</p>
          <br/>
              <li> Introduction to NLP: Understand the basics of NLP, its applications, and chaIlenges.</li>
              <li> Named Entity Recognition (NER): Understand the various approaches and tools used for NER, such as rule-based systems, statistical models, and deep learning.</li>
              <li> Text Preprocessing: Learn about tokenization, stemming, lemmatization, stop word removal, and other techniques for text preprocessing.</li>
              <li> Text Representation: Explore techniques such as Bag-of-Words (BoW), TF-IDF, and word embeddings (e.g., Word2Vec, GloVe) for representing text data.</li>
              <li> Sequential Models: Introduction to RNN, LSTM, Hands on Keras LSTM</li>
              <li> Sentiment Analysis: Study sentiment analysis techniques, build a sentiment analysis model using supervised learning, and evaluate its performance.</li>
          <br/>
          <p><b>Hands-On – Real Time Sentiment Analysis</b></p>
        </ul>
        </>
        )
      },
      {
        head: "RISE OF THE DEEP LEARNING",
        p: (
        <>
          <ul>
            <li> Introduction</li>
            <li> History of Deep Learning Perceptrons</li>
            <li> Multi-Level Perceptrons Representations</li>
            <li> Training Neural Networks Activation Functions</li>
          </ul>
        </>
        )
      },
      {
        head: "Artificial Neural Networks",
        p: (
          <>
            <ul>
              <li> Introduction</li>
              <li> Deep Learning</li>
              <li> Understanding Human Brain</li>
              <li> In-Depth Perceptrons</li>
              <li> Example for perceptron</li>
              <li> Multi Classifier</li>
              <li> Neural Networks</li>
              <li> Input Layer</li>
              <li> Output Layer</li>
              <li> Sigmoid Function</li>
              <li> Introduction to Tensorflow and Keras</li>
              <li> CPU vs GPU</li>
              <li> Introduction to Google collaboratory</li>
              <li> Training Neural Network</li>
              <li> Understanding Notations</li>
              <li> Activation Functions</li>
              <li> Hyperparameter tuning in keras</li>
              <li> Feed-Forward Networks</li>
              <li> Online offline mode</li>
              <li> Bidirectional RNN</li>
              <li> Understanding Dimensions</li>
              <li> Back Propagation</li>
              <li> Loss function</li>
              <li> SGD</li>
              <li> Regularization</li>
              <li> Training for batches</li>
            </ul>
        <br/>
          <p>Hands-On – Facial Emotion Recognition</p>
        </>
        )
      },
      {
        head: " Convolution Neural Networks",
        p: (
          <>
          <ul>
            <li> Introduction to CNN</li>
            <li> Applications of CNN</li>
            <li> Idea behind CNN</li>
            <li> Understanding Images</li>
            <li> Understanding Videos</li>
            <li> Convolutions</li>
            <li> Striding and Padding</li>
            <li> Max Pooling</li>
            <li> Edges, Gradients, and Textures</li>
            <li> Understanding Channels</li>
            <li> Formulas</li>
            <li> Weight and Bias</li>
            <li> Feature Map</li>
            <li> Pooling</li>
            <li> Combining</li>
          </ul>
        </>
        )
      },
      {
        head: " RNN – Recurrent Neural Networks",
        p: (
          <>
            <ul>
            <li> Introduction to RNNs</li>
            <li> Training RNNs</li>
            <li> RNN Formula</li>
            <li> Architecture</li>
            <li> Batch Data</li>
            <li> Simplified Notations</li>
            <li> Types of RNNs </li>
            <li> LSTM</li>
            <li> GRUs</li>
            <li> Training RNN</li>
            <li> One to many</li>
            <li> Vanishing Gradient problem</li>
          <br/>
          <p><b>Hands-On – COVID-19 Cases Prediction</b></p>
        </ul>
        </>
        )
      },
      {
        head: "Generative Models and GANs",
        p: (
        <>
          <ul>
            <li> Introduction to Generative Models:</li>
            <li> Understanding GANs (Generative Adversarial Networks)</li>
            <li> GAN Architecture</li>
            <li> GAN Training</li>
            <li> Evaluating GAN Performance</li>
            <li> GAN Variants and Applications</li>
        
        </ul>
        </>
        )
      },
      {
        head: "  Computer Vision",
        p: (
          <>
            <ul>
            <li> Intro to OpenCV</li>
            <li> Reading and Writing Images</li>
            <li> Saving images</li>
            <li> Draw shapes using OpenCV</li>
            <li> Face detection and eye detection using OpenCV</li>
            <li> CNN with Keras</li>
            <li> VGG</li>
          <br/>
          <p><b>Hands-On – Real Time Pose Estimator</b></p>
        </ul>
        </>
        )
      },
      {
        head: "Real Time Drowsiness Detection Alert System",
        p: (
        <>
          <ul>
               <li> Dataset collection</li>
               <li> Data preprocessing</li>
               <li> Feature extraction</li>
               <li> Labeling</li>
               <li> Model selection</li>
               <li> Model training</li>
               <li> Model evaluation</li>
               <li> Real-time implementation</li>
               <li> Alert mechanism</li>
               <li> Continuous improvement</li>
        </ul>
        </>
        )
      },
      {
        head: "House Price Prediction using LSTM",
        p: (
          <>
            <ul>
              <li> Identify a reliable source for house price data</li>
              <li> Understand the website structure</li>
              <li> Perform web scraping</li>
              <li> Preprocess the scraped data</li>
              <li> Explore and preprocess additional data sources (if applicable)</li>
              <li> Define the problem</li>
              <li> Split the data</li>
              <li> Train the model</li>
              <li> Evaluate the model</li>
              <li> Fine-tune the model (optional)</li>
              <li> Deploy the model</li>
              <li> Continuously update the dataset and retrain the model</li>
            </ul>
        </>
        )
      },
      {
        head: "Customizable Chabot using OpenAI API",
        p: (
        <>
          <ul>
            <li> Define chatbot goals and scope</li>
            <li> Gather training data</li>
            <li> Data preprocessing</li>
            <li> API integration</li>
            <li> Model customization</li>
            <li> User input handling</li>
            <li> Response generation</li>
            <li> Post-processing and filtering</li>
            <li> Error handling and fallback mechanisms</li>
            <li> Continuous improvement</li>
        </ul>
        </>
        )
      },
      {
        head: "Fire and Smoke Detection using CNN",
        p: (
          <>
            <ul>
              <li> Data collection</li>
              <li> Data preprocessing</li>
              <li> Dataset augmentation</li>
              <li> Model architecture</li>
              <li> Training</li>
              <li> Model evaluation</li>
              <li> Fine-tuning</li>
              <li> Real-time inference</li>
              <li> Thresholding and alerts</li>
              <li> Model optimization</li>
        </ul>
        </>
        )
      }
];

const syllabusdata = [
    {
        head: " ",
        p: (
            <>
                <h2 style={{ color :"black" }}>Data Science Training <span style={{ color :"red" }} > Curriculum in Vijayawada </span></h2><br />
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
            <h2 style={{ color :"black" }}>Learning Outcomes of <span style={{ color :"red" }} > Data Science Training in Vijayawada </span></h2><br />

                <p>The data science course in Vijayawada is a comprehensive beginner-friendly course where the prime objective is to make you capable of extracting actionable insights from large and complex datasets. </p>
                <p>However, along with that, at the end of the course you can expect to-</p>
                <ul>
                    {[
                      "Do statistical analysis.",
                      "Know the basics of machine learning algorithms and data visualization techniques,",
                      "Uncover patterns, trends, and relationships in datasets. ",
                      "Take information from data and solve real-life problems.",
                      "Familiarity with the principles of microservices and DevOps.",
                      "Use the information to optimize processes, improve efficiency, and gain competitive advantage for your clients."
                    ].map((item, index) => (
                        <li key={index} style={{ marginLeft: "10px" }}>{item}</li>
                    ))}
                </ul>
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
                        <h2 className="Linkcolor">Become a Data Science developer </h2><br />
                        <p>Talk to our expert Best Data Science mentors and learn how our training programs in Vijayawada can help you become a Best Data Science developer and get a high-paying job. </p><br /><br />
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
