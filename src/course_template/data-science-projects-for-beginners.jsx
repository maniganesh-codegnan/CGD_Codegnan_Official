import React from "react";
import Course_template from "./Course_template";
import datascienceproject_projects from '/course_images/Data-Science-Project-illustration.png';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";


const headdata = {
    title: "15 Data Science Projects For Beginners With Source Code",
    date: "May 20, 2024",
    img: datascienceproject_projects,
    intro: "In this guide, Our data science trainers at Codegnan have compiled this list of 15 data science projects for beginners and final-year projects.\nBest part?\nWe have included the source code and video tutorial for each project idea so you can start implementing the data science projects immediately."
};

const coursedata = {
    title: " ",
    p: " ",
    linkText: " ",
    syllabusLink: "",
};

const courseSections = [
   
    {
        title: " Become a successful data scientist with Codegnan’s expert-led classroom training program",
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
                <h4>Looking for more details about codegnan’s Core Java courses?</h4>
                <ul>
                    {[
                        { name: "Data science training course in Hyderabad ", link: "/data-science-course-training-in-hyderabad", duration: "Course fee: ₹74,999; Duration: 6 Months" },
                        { name: "Data science training course Vijayawada", link: "/data-science-course-training-in-vijayawada", duration: "Course fee: ₹74,999; Duration: 6 Months" }
                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link> ({program.duration})
                        </li>
                    ))}
                </ul>
                <p><Link to=" " className="link-light-color">Contact us now </Link> for placement assistance and an additional offer on our course fees.</p>
            </>
        )
    },
    {
        intro: () => (
            <>
                <h2>Data Science Projects for Beginners </h2>
                <h3>Table of contents</h3>
                <Link to="data-science-projects-for-beginners/#h-data-science-projects-for-beginners " className="link-light-color" id="h-data-science-projects-for-beginners">Data Science Projects for Beginners</Link><br />
                <ul> 
                    {[
                        { name: "1. VoiceMood Detect: Emotion Recognition in Speech", link: "/machine-learning-in-hyderabad", duration: "1 month" },
                        { name: "2. LeafGuard: Plant Disease Detection from Leaf Images", link: "/machine-learning-in-hyderabad", duration: "1 month" },
                        { name: "3. SnapClassy: Intelligent Image Classifier and Labeler", link: "/machine-learning-in-hyderabad", duration: "1 month" },
                        { name: "4. SmartVision: Intelligent Face Mask Monitoring System ", link: "/machine-learning-in-hyderabad", duration: "1 month" },
                        { name: "5. Fire and Smoke Detection using CNN", link: "/machine-learning-in-hyderabad", duration: "1 month" },
                        { name: "6. Building a customisable chatbot using OpenAI API", link: "/machine-learning-in-hyderabad", duration: "1 month" },
                        { name: "7. House Price Prediction using LSTM", link: "/machine-learning-in-hyderabad", duration: "1 month" },
                        { name: "8. Real time Drowsiness Detection Alert System", link: "/machine-learning-in-hyderabad", duration: "1 month" },
                        { name: "9. Real time Rain Prediction using ML", link: "/machine-learning-in-hyderabad", duration: "1 month" }
                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link to=" " className="link-light-color">Data Science Projects for Final Year Students</Link><br />
                <ul>
                    {[
                        { name: "10. Roadsy: Automated Traffic Sign Detection and Classification  ", link: "/machine-learning-in-hyderabad" },
                        { name: "11. FacialGuard: Advanced DeepFake Detection Using Facial and Audio Signals  ", link: "/machine-learning-in-hyderabad" },
                        { name: "12. NeuroSculpt: Revealing Brain Tumor Boundaries with Advanced Image Segmentation  ", link: "/machine-learning-in-hyderabad" },
                        { name: "13. Kinetic Gesture Deciphering Assistant (KGDA): Translating Sign Language Gestures ", link: "/machine-learning-in-hyderabad" },
                        { name: "14. TextCompress: Intelligent Text Summarization and Compression Engine ", link: "/machine-learning-in-hyderabad" },
                        { name: "15. Observer: Intelligent Visual Perception Engine  ", link: "/machine-learning-in-hyderabad" },
                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link to=" " className="link-light-color">Benefits of doing Data Science projects for students </Link><br/>
                <ul>
                    {[
                        { name: "1. Better understanding of multiple topics related to data science  ", link: "/machine-learning-in-hyderabad" },
                        { name: "2. Learn about real-life challenges and solve them under expert guidance  ", link: "/machine-learning-in-hyderabad" },
                        { name: "3. Add projects on the resume to enhance their impact ", link: "/machine-learning-in-hyderabad" },
                        { name: "4. Expand professional network by sharing experiences on online forums ", link: "/machine-learning-in-hyderabad" }
                    ].map((program, index) => (
                        <li className="list-items" key={index}>
                            <Link to={program.link} className="link-light-color">
                                {program.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link to=" " className="link-light-color">Becoming a Data Science expert in the next 6 months with Codegnan </Link><br/>
            </>
        )
    },
 
    {
        title: "1. VoiceMood Detect: Emotion Recognition in Speech",
        intro: () => (
            <>
                <p><b>Difficulty level: </b>Medium</p>
                <p>It is hard to recognize someone’s emotion through their speech. To make that easy, you can work on our VoiceMood Detect. This app can be used in multiple spaces, from human-computer interaction to providing mental health support. It uses advanced signal processing and deep neural networks to analyze the acoustic features of an audio file, including its intonations and speech patterns. Thus, it recognizes the words and the emotions behind them from an audio recording, including sadness, anger, joy, etc. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: " <ul> "+
                [    
                    "Extracting relevant speech signal features with signal processing techniques like feature extraction and preprocessing",
                    "Using deep neural networks for classifying varied emotions depending on extracted audio features ",
                    "Integrating additional modalities to the project, like facial expressions, to improve the accuracy of emotion recognition ",
                    "Optimizing the data model for real-time recognition to support applications that require instant emotional analysis",
                    "Ensuring the model can handle variations in speech patterns across multiple demographics ",
                    "Handling imbalanced datasets and class imbalance"
                ].map((item, index) => (
                    "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
                )).join('') +
                "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul> "+
                [    
                    "Obtain the Surrey Audio-Visual Expressed Emotion dataset, which includes audio recordings of scripted emotions ",
                    "Preprocess the audio data like noise removal, resampling, and feature extraction",
                    "Extract relevant features from the audio signals, including their pitch, energy, and mel-frequency cepstral coefficients",
                    "Split the dataset into training, validation, and test sets",
                    "Explore and implement various machine learning algorithms for emotion classification like support vector machines, random forests, and deep learning techniques",
                    "Train the models on the training data and evaluate their performance on the validation set",
                    "Optimize the model’s hyperparameters and feature selection",
                    "Evaluate the final model on the unseen test set and analyze the results"
                ].map((item, index) => (
                    "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
                )).join('') +
                "</ul>"
                
    },
    {
        title: "Real-world applications:",
        intro: " <ul> "+
                [    
                    "Human-computer interactions in virtual assistance can deploy this application to understand human emotions and respond accordingly ",
                    "Mental health and counseling centers can be used to understand the changing emotional state of an individual ",
                    "Call centers and customer service companies can use emotion recognition tools to understand customer emotions"
                    
                ].map((item, index) => (
                    "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
                )).join('') +
                "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
               <p> <Link className="link-color" to='https://github.com/Renovamen/Speech-Emotion-Recognition'> 👉 Find the source code</Link></p>

               <iframe 
               width="560" 
               height="315" src="https://www.youtube.com/embed/-VQL8ynOdVg?si=dEVZUokVIlP-wJW4" 
               title="YouTube video player" 
               frameborder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               referrerpolicy="strict-origin-when-cross-origin" 
               allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "2. LeafGuard: Plant Disease Detection from Leaf Images",
        intro: () => (
            <>
                <p><b>Difficulty level: </b>Medium</p>
                <p>This is one of the unique data science project ideas for beginners, where you use an application with deep-learning models to identify plant diseases depending on their leaf images. Farmers often face difficulty in crop management and preventing yield loss. </p>
                <p>This LeafGuard application uses convolutional neural networks to analyze leaf images, identification patterns, and visual cues related to different plant diseases. This can aid farmers in monitoring their crops’ health and implementing timely precautions. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: " <ul>" +
            [
                "The use of multiple techniques for image enhancement and preprocessing to enhance the ability of the model to identify subtle disease symptoms ",
                "Design a CNN or convolutional neural network architecture with high sensitivity and specificity to recognize and detect plant diseases ",
                "Improve model features to classify images into different disease classes, providing a better understanding of plant health",
                "Gain experience with model training evaluation and optimization ",
                "Understand how to handle imbalanced data sets and class imbalance"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: "<ul>" +
            [
                "Use PlantVillage data set that contains images of different plant diseases and healthy conditions labeled with plant disease categories",
                "Preprocess the images, including resizing, normalization, and data augmentation",
                "Split the dataset into training, validation, and test sets",
                "Design and implement deep learning models for image classification, including CNNs and transfer learning",
                "Train the models on the training data and evaluate their performance on the validation set",
                "Optimize the model’s architecture, hyperparameters, and training strategies",
                "Evaluate the final model on the unseen test set and analyze the results",
                "Visualize and interpret the model’s predictions and decision-making process"
                 
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Farmers can use this for early detection and monitoring of plant diseases",
                "Agricultural companies can deploy such an application for yield prediction and making data-driven crop management strategies",
                "The government can use this application to advise farmers on what measures they should take beforehand to prevent yield loss",
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
           
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/manthan89-py/Plant-Disease-Detection'> 👉 Find the source code</Link></p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/zcq5aw9t-Ds?si=NHLeF_LeeBqzkN3k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "3. SnapClassy: Intelligent Image Classifier and Labeler",
        intro: () => (
            <>
                <p><b>Difficulty level: </b>Medium</p>
                <p>Humans can easily classify images and label them, but with SnapClassy, even your computer can do the same. We train machines using deep learning technology and neural networking to automatically classify, recognize, and label different images. The software uses convolutional neural network architecture to recognize various objects, animals, food items, scenes, activities, etc., and organizes large volumes of images by category. It can detect individual concepts and objects within each image and apply an accurate text label without manual support.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Classifying images into over a thousand categories with high accuracy ",
                "Detecting multiple objects and concepts within images and localizing their positions with  multilabel classification and object detection techniques",
                "Reading text found in images with its optical character recognition feature ",
                "Adding descriptive tags and labels automatically to each image ",
                "Filtering and searching image libraries by assigned labels ",
                "Recognizing landmarks, products, and species by appearance",

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "Obtain multiple datasets of labeled images like ImageNet, COCO, or other publicly available datasets",
                "Preprocess the images with resizing, normalization, and data augmentation techniques",
                "Split the dataset into training, validation, and test sets",
                "Design and implement deep learning models for image classification like CNNs (Convolutional Neural Networks), transfer learning",
                "Explore techniques for multi-label classification and object detection",
                "Train the models on the training data and evaluate their performance on the validation set",
                "Optimize the model’s architecture, hyperparameters, and training strategies",
                "Evaluate the final model on the unseen test set and analyze the results",
                "Develop a user interface or application for image classification and labeling"
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Social media platforms can use an intelligent image classifier and labeler for content moderation and filtering",
                "Digital image libraries can use it to organize large volumes of images and retrieve them efficiently ",
                "It can also be used for personal purposes for automated image categorizing, captioning, and description generation"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/cvat-ai/cvat'> 👉 Find the source code</Link></p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/YULWsy-PBUU?si=FOt0Ym1FFGtbROgs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "4. SmartVision: Intelligent Face Mask Monitoring System ",
        intro: () => (
            <>
                <p><b>Difficulty level:  </b>Medium</p>
                <p>We are exposed to different communicable diseases, especially after the COVID-19 pandemic, which mandated the use of face masks in public places. If you are implementing a system where people without masks won’t get an entry pass, this SmartVision application can help you. It is an AI computer vision system that uses lightweight convolutional neural networks trained on datasets to automatically identify masked and unmasked faces from videos and offers real-time alerts for them.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Provide real-time identification of mask and unmasked faces  with object detection and tracking techniques",
                "Knowledge of face and landmark detection ",
                "Understanding of real-time video processing and analysis ",
                "Model deployment and integration with hardware or cameras"
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "Obtain a dataset of images or videos of people wearing and not wearing face masks",
                "You need to define the data boundaries or labels for faces and masks",
                "Then, preprocess the data with resizing, normalization, and data augmentation techniques",
                "Design and implement object detection models for face and mask detection",
                "Use techniques for real-time video processing and tracking",
                "Now, you integrate the models into a monitoring system or application",
                "Test and evaluate the system’s performance in various scenarios",
                "Finally, optimize the models and system for accuracy and efficiency"
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Public spaces like airports, shopping malls, and offices can use it to check entry of people with face masks",
                "Educational institutions can implement this to check if students are wearing face masks to school and college ",
                "Event managers can deploy this application if they are restricting the entry of people without masks in an event "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/chandrikadeb7/Face-Mask-Detection'> 👉Find the source code</Link></p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ax6P93r32KU?si=7Qv7I1u_ilIcTLlh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "5. Fire and Smoke Detection using CNN",
        intro: () => (
            <>
                <p><b>Difficulty level: </b>Medium</p>
                <p>Fire and smoke can often spread out due to gas leakage, short circuits, the use of inflammable objects, etc., and detecting them in real-time is difficult for humans. We can create an application with deep learning models and convolution neural networks to capture images, videos, and live webcam feeds in real-time and detect fire and smoke.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Knowledge of image preprocessing and data augmentation techniques ",
                "Application of CNNs or Convolutional neural network architectures",
                "Understanding of binary classification tasks",
                "Hands-on practice with model training, evaluation, and optimization",
                "Handling imbalanced datasets and class imbalance",
                "Knowledge of real-time video processing and integration"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "Obtain a dataset of images or videos containing fire and smoke scenarios and negative examples like non-fire/smoke scenes",
                "Preprocess the data with resizing, normalization, and data augmentation techniques ",
                "Split the dataset into training, validation, and test sets",
                "Design and implement a convolutional neural network architecture for binary classification",
                "Train the model on the training data and evaluate its performance on the validation set",
                "Optimize the model’s architecture, hyperparameters, and training strategies",
                "Evaluate the final model on the unseen test set and analyze the results",
                "Explore techniques for real-time video processing and integration"
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Building contractors can put this tool on every building for early fire detection and warning ",
                "Manufacturing plants use it for industrial safety and hazard detection",
                "Transportation systems can deploy this application to detect smoke and fire in airports, buses, trains, tunnels, etc."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/gengyanlei/fire-smoke-detect-yolov4' > 👉 Find the source code</Link> </p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/yo0qy7xyd3A?si=ECg7JhF9edG0iJb1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "6. Building a customisable chatbot using OpenAI API",
        intro: () => (
            <>
                <p><b>Difficulty level: </b>Medium</p>
                <p>Chatbots can reply to customer queries automatically and faster than human representatives. They ease the task of humans by forwarding only the queries that machines aren’t trained with. We will use OpenAI API to build a customizable chatbot that is trained with vast amounts of textual data. It can understand the context of a conversation and provide accurate responses.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Knowledge about Natural Language Processing (NLP) and language model integration",
                "API usage and integration with external services",
                "Understanding of Conversational AI and dialogue management",
                "Knowledge base creation and management",
                "Handling context and maintaining conversation flow",
                "Developing User interface and design to improve user experience ",
                "Constantly train the machine with changing trends and people asking patterns"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "Sign up for an OpenAI API account and obtain the necessary API keys.",
                "Choose a programming language like Python or JavaScript and set up the development environment.",
                "Use of OpenAI API documentation and understand how to make API calls and interact with the language models",
                "Develop a user interface like a web-based, desktop application, or command-line interface for users to interact with the chatbot.",
                "Implement conversation management logic to handle user inputs, maintain context, and generate appropriate responses from the language model.",
                "Create a knowledge base or customize the language model’s training data to tailor the chatbot’s capabilities and knowledge domain.",
                "Integrate additional features, such as intent recognition, entity extraction, or external data sources, to enhance the chatbot’s functionality.",
                "Test and refine the chatbot’s performance based on user feedback and interaction data."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "The customer service and support team uses these chatbots to answer client queries",
                "An E-commerce platform can use it to recommend products to site visitors to increase sales",
                "Educational platforms can implement a chatbot for automated tutoring and offer personalized learning "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/nicolodiamante/SiriGPT' > 👉 Find the source code </Link></p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UQAKwWUYnuI?si=14uz2WiS2QCn3fnh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "7. House Price Prediction using LSTM",
        intro: () => (
            <>
                <p><b>Difficulty level: </b>Medium </p>
                <p>While buying or selling a house, you often need to calculate its price, but predicting how much its value will be in the future is difficult. However, this data science project’s advanced features will help you make house price predictions with Long Short Term Memory neural networks. It uses advanced deep learning techniques to read previous data, identify trends and patterns that will influence house price changes, and use an RNN (Recurrent Neural Networks) model to improve data prediction. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Learn data preprocessing and feature engineering ",
                "Knowledge of time series analysis and data forecasting ",
                "Implementation of Recurrent neural networks (RNNs) and LSTM architectures",
                "Perform web scraping and preprocess the scraped data for training machines ",
                "Evaluate the model’s accuracy and performance on different data sets",
                "Knowledge of handling sequential and temporal data "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "Obtain a dataset containing historical house price data along with relevant features like location, size, number of rooms, age of the property, etc.",
                "Preprocess the data by handling missing values and outliers and encoding categorical variables.",
                "Split the dataset into training, validation, and testing sets.",
                "Explore and implement LSTM architectures for sequence prediction tasks.",
                "Train the LSTM model on the training data and evaluate its performance on the validation set.",
                "Optimize the model’s hyperparameters and architecture for better performance.",
                "Evaluate the final model on the unseen test set and analyze the results.",
                "Visualize and interpret the model’s predictions to gain insights into the factors influencing house prices."
                
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Real estate companies can use this application for property valuation and make data-driven investment decisions ",
                "Urban planning and development companies can use this tool to evaluate housing market trends",
                "Banks use the application to check house valuations before approving housing loans and risk assessment "
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/Mohshaikh23/House-Rent-Prediction'> 👉 Find the source code</Link></p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UQAKwWUYnuI?si=2bRRibBoC_p6GLJl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "8. Real time Drowsiness Detection Alert System",
        intro: () => (
            <>
                <p><b>Difficulty level: </b>Medium</p>
                <p>Drowsiness often results in accidents, and we always want someone to pull us out of it. One of our best data science projects in Python addresses this problem. Here, you will create a real-time drowsiness detection alert system that can read your visual features with a camera installed on your dashboard, use different deep learning algorithms like convolutional neural networks to understand if you are drowsy, and send you timely alerts. </p>
            </>

        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Capture and analyze drivers’ facial cues indicating drowsiness using computer vision techniques like face detection and facial landmark detection ",
                "Capture data from multiple sources to improve the accuracy of the system ",
                "Knowledge of real-time video processing and integration ",
                "Send out timely drowsiness alerts with real-time data processing techniques ",
                "Designing and developing user-friendly interfaces and alert systems",
                "Detect changes in drivers’ characteristics and behaviors, resulting in variations in psychological responses and driving styles "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: " <ul>" +
            [
                "Utilise high-resolution video stream dataset to capture multiple drivers’ facial expressions, eye movements, and head movements ",
                "Preprocess the data and extract relevant features like eye landmarks, head pose, and facial expressions.",
                "Explore and implement machine learning models for drowsiness classification like support vector machines, random forests, and other deep learning techniques",
                "Develop techniques for real-time video processing and facial landmark tracking.",
                "Integrate the drowsiness detection model with a user interface or application.",
                "Implement alert mechanisms to notify the user when drowsiness is detected.",
                "Test and evaluate the system’s performance in various scenarios and lighting conditions."
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Automatic industry can implement this application in vehicles to monitor drivers’ drowsiness on the road ",
                "Industries can use the tool to monitor their workers and ensure safety from machine-related accidents ",
                "Hospitals can use it for patient monitoring in ICUs (intensive care units)"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/SuperThinking/driver-drowsiness-detection'>👉 Find the source code </Link></p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/u7_34o_rs8o?si=a3BkTuyqKncYGO_L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "9. Real time Rain Prediction using ML",
        intro: () => (
            <>
                 <p><b>Difficulty level: </b>Medium</p>
                <p>Unpredictable heavy rainfall or droughts significantly impact the agricultural industry. To solve this problem, we can create an application that predicts rainfall using a machine-learning model. It will mainly inform us of three things: no rain, light rain, and heavy rain. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Predict rainfall and its levels with visualization and interpretation of weather data and model predictions ",
                "Fetch live weather reports at different geographical locations with real-time data processing and integration ",
                "Knowledge of data collection and preprocessing of data from multiple sources ",
                "Understanding of machine learning algorithms for regression and classification tasks",
                "Integrate real-time data sources that continuously update the weather predictions"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: "<ul>" +
            [
                "Obtain meteorological data from weather stations, satellites, and other sources, including temperature, humidity, wind speed, pressure, and cloud cover.",
                "Preprocess the data by handling missing values and outliers and encoding relevant features.",
                "Explore and implement machine learning algorithms suitable for time-series forecasting using regression models, decision trees, and neural networks.",
                "Split the dataset into training, validation, and testing sets.",
                "Train the machine learning model on the training data and evaluate its performance on the validation set.",
                "Optimize the model’s hyperparameters and architecture for better performance.",
                "Integrate the trained model with real-time data sources for continuous predictions.",
                "Develop a user interface or application to display rain predictions and relevant weather information."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "It helps farmers predict rainfall in a particular area and make data-driven irrigation planning for crop management.",
                "It will also help travelers predict whether going out today suits them or if they can expect heavy rainfall on the way.",
                "The transportation and logistics industry can use this application for route planning and cargo protection "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/aniketwdubey/Rainfall-Prediction-end-to-end-ML-project'> 👉 Find the source code </Link> </p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/baqxBO4PhI8?si=nt2Ra3P5yXFY7hcn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <p> 👉 If you’re looking to become a data scientist, then check out our guide on <Link className="link-color" to='/future-scope-of-data-science-career-in-india'> career scope and opportunities in data science. </Link> </p>

            </>
        )
    },
    {
        title: "Data Science Projects for Final Year Students",
        intro: () => (
            <>
                <h3>10. Roadsy: Automated Traffic Sign Detection and Classification</h3>
                <p><b>Difficulty level: </b>Hard</p>
                <p>Roadsy is an automated traffic sign detection and classification application that can identify traffic signs from images and videos. A camera mounted on vehicles captures visual inputs and analyses them using deep convolutional neural networks.</p> 

                <p>Though the previous applications addressed the problem of traffic sign recognition and detection tasks, most of them used either TSR (Traffic Sign Recognition) or TSD (Traffic Sign Detection). This application focuses on both these categories and helps vehicles run safely on the road. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Learn computer vision techniques like image processing and feature extraction for recognizing and detecting traffic signs",
                "Knowledge of deep learning architectures, including CNN (Convolutional neural network), to recognize traffic signs in various conditions, including lighting, occlusion, bad weather, etc.",
                "Understanding of Data preprocessing and augmentation ",
                "Learn about model training and evaluation ",
                "Hands-on experience with troubleshooting and optimization techniques "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: "<ul>" +
            [
                "Gather a dataset of traffic sign images (labeled traffic sign images, including common road signs such as speed limit, stop, pedestrian crossings, school zones, yields, etc.)",
                "Preprocess the data using resizing, normalization, and augmentation techniques",
                "Split the dataset into different categories for training, validation, and testing ",
                "Design and implement a deep learning model using different libraries like TensorFlow and PyTorch",
                "Train the model on the training data and evaluate its performance on the validation set",
                "Optimize the model’s architecture and hyperparameters for better performance",
                "Test the final model on the unseen test set and analyze the results"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Advanced driver assistance systems (ADAS) in cars and vehicles require it to improve road safety ",
                "Self-driving vehicles use it for navigation and data-driven decision-making "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/dineshresearch/Novel-Deep-Learning-Model-for-Traffic-Sign-Detection-Using-Capsule-Networks'> 👉 Find the source code </Link> </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/fXN-otL1P-0?si=-bU1OyBuaAnekjpy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                
            </>
        )
    },
    {
        title: "11. FacialGuard: Advanced DeepFake Detection Using Facial and Audio Signals ",
        intro: () => (
            <>     
                <p><b>Difficulty level: </b>Hard</p>  
                <p>Technology has good and bad sides, and Generative AI with DeepFake technology has created a fear among people of creating hyper-realistic or fake images and videos. It superimposes or replaces the existing facial and voice content using deep learning algorithms. People find it difficult to distinguish these videos from authentic footage, but our FacialGuard application will help you identify the difference by analyzing their facial and audio cues. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Use facial recognition techniques to detect differences in facial expressions, eye movements, and lip-syncing ",
                "Analyse voice characteristics, pitch variations, and differences in speech patterns for identifying potential audio manipulations",
                "Hands-on training on combining facial and audio analysis to improve the accuracy of DeepFake detection ",
                "Optimize the Deep learning data model for real-time applications, enabling faster identification of manipulated content ",
                "Use of Multimodal data fusion, which means combining multiple data sources for training machines ",
                "Use of Deep learning architectures for classification tasks",
                "Knowledge of model evaluation and performance metrics"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://codegnan.com/blogs/python-projects/'> 👉 Find project project ideas for final year students </Link> </p>
                
            </>
        )
    },
    {
        title: "What it takes to execute this project:",
        intro: "<ul>" +
            [
                "Gather DeepFake Detection Challenge data set with manipulated videos for training and testing (audio, video, and images)",
                "Preprocess the data, including face detection, audio extraction, and data augmentation",
                "Extract relevant features from facial and audio signals",
                "Design and implement deep learning models for facial and audio analysis",
                "Combine the facial and audio models using multimodal fusion techniques",
                "Train the combined model on the preprocessed data",
                "Evaluate the model’s performance using appropriate metrics like accuracy, precision, and recall metrics ",
                "Optimize the model’s architecture and hyperparameters for better performance"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "News publishing houses can use it to detect whether a news is true before publishing ",
                "Law enforcement and forensic departments require this application for investigation of true and fake images, audio or video clips",
                "Cybersecurity and fraud investigation processes can use it to prevent the spread of fake images or videos "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/Daisy-Zhang/Awesome-Deepfakes-Detection'> 👉 Find the source code </Link> </p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/LgUZLXvXvio?si=YQB-lI8C48IrGQZ3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "12. NeuroSculpt: Revealing Brain Tumor Boundaries with Advanced Image Segmentation ",
        intro: () => (
            <>
                <p><b>Difficulty level: </b>Hard</p>
                <p>Identifying and delineating tumors in medical images is essential for improving medical diagnostics. Though there are systems that could do the same, our NeuroSculpt app uses advanced deep learning architectures, Convolutional neural networks, and U-Net architectures. to enhance analyzing tumors or anomalies from various imaging modalities like magnetic resonance imaging (MRI) scans. This is one of the best data science projects for the final year. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Designing and implementing deep neural networks for segmenting tumors from medical images with higher precision ",
                "Using multiple imaging modalities like MRI, CT Scans, T1-weighted, FLAIR, etc., for detailed segmentation ",
                "Optimizing the model for real-world clinical applicability, ensuring better performance across multiple patient data sets",
                "Advanced deep learning architectures for image segmentation and extending the image segmentation abilities to 3D medical images for detailed analysis",
                "Use of features to interpret proper image segmentation results for doctors and nurses "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: "<ul>" +
            [
                "Obtain BraTS (Brain Tumor Segmentation) dataset, which includes multimodal MRI scans with ground truth annotations for tumor areas",
                "Preprocess the data like skull stripping, normalization, and data augmentation",
                "Split the dataset into training, validation, and test sets",
                "Design and implement deep learning models for image segmentation like CNN, U-Net, and SegNet",
                "Train the models on the training data and evaluate their performance on the validation set",
                "Optimize the model’s architecture, hyperparameters, and training strategies",
                "Evaluate the final model on the unseen test set and analyze the results",
                "Visualize and interpret the segmentation outputs"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Doctors can use it to enhance medical image segmentation, accurately delineate and identify the exact areas of tumors in medical images, and decide on treatment plans.",
                "Clinical research and drug development studies can use this application for research purposes "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/sdsubhajitdas/Brain-Tumor-Segmentation'> 👉 Find the source code </Link> </p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/fimm72Nwl7U?si=Hc4Bd9dljb7OZXCS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "13. Kinetic Gesture Deciphering Assistant (KGDA): Translating Sign Language Gestures",
        intro: () => (
            <>
                <p><b>Difficulty level: </b>Hard</p>
                <p>Sign languages are used by people who have difficulty hearing or are deaf. They use different gestures to convey their ideas and thoughts to people. Our KGDA application helps convert and interpret dynamic manual motions and facial cues for people to understand and build an accessible communication bridge for the hard-to-hear community. It uses a recurrent convolutional architecture with encoder-decoder networks to differentiate and identify word-level concepts from a continuous stream of gestures.</p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Capture different gesture motions with its multi-camera HD video feature ",
                "Track body and finger key points with gesture recognition and classification techniques",
                "Contextual modeling of gestural motion dynamics",
                "Mapping all the identified signs to text or speech ",
                "Using extensible lexicons to support various regional dialects",
                "Knowledge of sequence modeling and temporal data analysis ",
                "Hands-on experience with natural language processing, computer vision techniques (object detection and tracking), and text generation techniques ",
                "Understanding of user interface and real-time system development"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: "<ul>" +
            [
                "Use datasets of human pose flows, finger contractions, and hand trajectories to decode sign language vocabularies with high accuracy along with their corresponding text or spoken language translations",
                "Preprocess the data, including hand detection, segmentation, and data augmentation",
                "Explore and implement computer vision techniques for hand and gesture tracking",
                "Design and implement machine learning models for gesture recognition and classification",
                "Integrate sequence modeling techniques for handling continuous sign language sequences",
                "Develop a text or speech generation component for translating recognized gestures",
                "Build a user interface or application for real-time sign language translation",
                "Evaluate the system’s performance and accuracy on unseen test data"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Educational institutes can implement this technology to bridge the communication gap between teachers and students with difficulty hearing ",
                "Online platforms can use it to enhance the accessibility of hard-to-hear communities to digital content, online services, and multimedia",
                "Workplaces can use it to facilitate proper communication with employees suffering from difficulty hearing "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/VIPL-SLP/awesome-sign-language-processing'> 👉 Find the source code </Link> </p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/DTQA8KIWWhY?si=yb22H55RmDMpCeHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "14. TextCompress: Intelligent Text Summarization and Compression Engine",
        intro: () => (
            <>
                <p><b>Difficulty level: </b>Hard</p>
                <p>Have you ever written summaries for long-form articles in school? If yes, you will understand how hectic and time-consuming it is to create a summary that defines almost all essential points throughout an article. Our TextCompress application uses a sequence-to-sequence neural network architecture, which allows it to read and encode input text documents, create semantic representations, and decode compressed versions, preserving only the key details.  </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Knowledge of text preprocessing and cleaning techniques ",
                "Understanding of feature engineering and representation of text data ",
                "Knowledge of sequence-to-sequence models and attention mechanism ",
                "Hands-on experience with language modeling and text generation ",
                "Working with the metrics that can evaluate the quality of a summary and text summarization tasks",
                "Knowledge of handling large-scale textual datasets"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: "<ul>" +
            [
                "Obtain a dataset of long-form text documents and their corresponding summaries, including news articles, research papers, books, and legal documents",
                "Preprocess the text data using tokenization, stopword removal, and stemming/lemmatization techniques",
                "Explore and implement techniques for text feature extraction, including TF-IDF and word embeddings",
                "Design and implement deep learning models for text summarization, including sequence-to-sequence models and transformer architectures",
                "Train the models on the training data and evaluate their performance on the validation set",
                "Optimize the model’s architecture, hyperparameters, and training strategies",
                "Evaluate the final model on the unseen test set and analyze the results",
                "Develop a user interface or application for intelligent text summarization and compression"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "The news and media industry can use this tool to summarise their long-form articles and for headline generation",
                "Academy and scientific researchers can use this application for literature reviews and creating paper abstracts",
                "The legal and financial sectors can use it for creating contract summaries and report condensations"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/ebenso/TextSummarizer'> 👉 Find the source code </Link> </p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/0l70K5c5NkM?si=X32iGqZUAcPfPqoP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        title: "15. Observer: Intelligent Visual Perception Engine ",
        intro: () => (
            <>
                <p><b>Difficulty level: </b>Hard</p>
                <p>This is an intelligent visual perception model that can detect, locate, and recognize objects hidden in images and videos and finally classify them into multiple categories. The primary purpose of this project is to create an accurate and fast generic object detection application that can serve various industries. Observer uses dual network artificial intelligence architecture, including region proposal network and object classification network.  It can identify multiple objects within images and videos, classify them into pre-trained categories, and detect their spatial coordinates. </p>
            </>
        )
    },
    {
        title: "Learning outcomes:",
        intro: "<ul>" +
            [
                "Detection and localization of multiple objects in real-time ",
                "Classification of objects into 1000+ categories  with instance segmentation and semantic segmentation techniques",
                "Understanding variations in scale, lighting, and orientation ",
                "Multi-task learning and knowledge of multi-modal data fusion",
                "Knowledge of deep learning architectures for visual perception tasks",
                "Handling large-scale data sets and efficient data processing"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "What it takes to execute this project:",
        intro: "<ul>" +
            [
                "Obtain a diverse dataset of annotated images or videos from Microsoft COCO, Pascal VOC, or other publicly available datasets",
                "Preprocess the data with resizing, normalization, and data augmentation techniques",
                "Explore and implement deep learning models for object detection, recognition, and segmentation tasks",
                "Integrate multi-task learning approaches and multi-modal data fusion",
                "Train the models on the training data and evaluate their performance on the validation set",
                "Optimize the model’s architecture, hyperparameters, and training strategies",
                "Evaluate the final model on the unseen test set and analyze the results",
                "Develop a user interface or application to showcase the visual perception capabilities"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Real-world applications:",
        intro: " <ul>" +
            [
                "Self-driving vehicles and advanced driver assistance systems use this tool to detect objects and prevent accidents",
                "Surveillance and secured resistance can deploy such applications to recognize and detect objects clearly and produce their findings during an investigation ",
                "Hospitals can use it for medical imaging analysis and computer-aided diagnosis"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p> <Link className="link-color" to='https://github.com/prashnani/PerceptualImageError'> 👉 Find the source code </Link> </p>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/ouaowA_W-Ek?si=Fje__bTZH3t3gtTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        intro: () => (
            <>
                <h4>Find other related course syllabus:</h4>
                <ul>
                    {[
                        { name: "Java training program in Bangalore", link: "/java-training-bangalore" },
                        { name: "Python full stack developer course syllabus", link: "/java-training-bangalore" },
                        { name: "C language syllabus", link: "/java-training-bangalore" },
                        { name: "Python syllabus", link: "/java-training-bangalore" },
                        { name: "Software testing course syllabus", link: "/java-training-bangalore" },
                        { name: "Machine learning course syllabus", link: "/java-training-bangalore" },
                        { name: "Data science course syllabus", link: "/java-training-bangalore" },
                        { name: "Data structures course curriculum", link: "/java-training-bangalore" },
                        { name: "Full stack Java course syllabus", link: "/java-training-bangalore" },
                        { name: "React JS course syllabus", link: "/java-training-bangalore" },
                        { name: "Core Java course syllabus", link: "/java-training-bangalore" },
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
        title: "Benefits of doing Data Science projects for students",
        intro: () => (
            <>
                <p>There are multiple benefits of doing Data Science projects for students. Some of them are listed below.</p>
                <h4>1. Better understanding of multiple topics related to data science </h4>
                    <p>Data Science requires knowledge in multiple areas like Python, Machine Learning, Natural Language Processing, Deep Learning, Data Analysis, SQL, and more. When you do a data science project in Python, you implement multiple other concepts for its proper functioning, such as CNN, ML models, etc. These help you get a clear concept of all essential topics required to execute a data science project.</p>

                <h4>2. Learn about real-life challenges and solve them under expert guidance </h4>
                    <p>These projects give you real-time insights into different challenges before deploying an application or software and allow you to find solutions logically. Instead of copying Data Science projects GitHub codes, you can create your own applications with such experiences under the guidance of industry professionals.  </p>

                <h4>3. Add projects on the resume to enhance their impact</h4>
                    <p>As a fresher, they can’t show the recruiter any work experience, but these data science projects for resumes will showcase an individual’s skills and expertise in the domain. You can do as many projects as you want, upload them to your GitHub account, and share the link on your resume to attract potential recruiters. </p>

                <h4>4. Expand professional network by sharing experiences on online forums</h4>
                    <p>As these projects clarify your concepts of data science, you can take part in discussions on online forums. This will create authority and attract professionals in the market to your knowledge and expertise, increasing your chance of finding better job options. You can also share your projects on social media, such as LinkedIn, which helps you connect with a huge network of professionals. </p>
                    <p>👉 Find the complete <Link className="link-color" to='/data-science-course-syllabus'> data science syllabus with a downloadable PDF. </Link></p>
            </>
        )
    },
    {
        title: "Becoming a Data Science expert in the next 6 months with Codegnan",
        intro: "At Codegnan, we offer a 6-month course for data science aspirants, where we prepare them thoroughly with theoretical concepts, practical sessions, project work, case studies, and assignments. You can learn from experts who are pass-outs of top universities or are working professionals in the domain. <br/><ul>" +
            [
                "Course duration: 6 months ",
                "Course fees: ₹75,000",
                "Get online assistance with doubt clearance, career guidance, interview preparation, and mock interviews ",
                "Work on multiple projects, including Python, Data Analysis, Machine Learning, NLP, and Deep Learning ",
                "Improve your learning with regular assignments and quizzes across multiple modules throughout the course",
                "Work on nearly 25 real use cases throughout 6 months",
                "Get training materials, including lab exercises, data science projects for beginners with source codes, quizzes, case studies on real data",
                "Real-time training with live scenarios and applications under experts with years of experience in the domain"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        intro: () => (
            <>
                <h4>For course and classroom training details, visit our branches:</h4>
                <ul>
                    {[
                        { name: "Codegnan Hyderabad", link: "/hyderabad_campus" },
                        { name: "Codegnan Bangalore (Formerly known as Destination Technologies)", link: "/bangalore_campus" },
                        { name: "Codegnan Vijayawada", link: "/vijayawada_campus" }
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
    }
    
];

const nav_interview = [
    {
        name: "Python Full Stack Developer Course Syllabus (With PDF)",
        link: "/python-full-stack-developer-course-syllabus/"
    },
    {
        name:"15 Data Structure and Algorithm (DSA) Project Ideas",
        link:"/data-structure-and-algorithm-project-ideas/"
    }
];

export default function JavaCoursePage() {
    return (
        <div>
            <Helmet>
                <title>15 Data Science Projects For Beginners With Source Code - Codegnan</title>
                <meta name="description" content="In this guide, Our data science trainers at Codegnan have compiled this list of 15 data science projects for beginners and final-year projects. Best part? We have included the source code and video tutorial for each project idea so you can start implementing the data science projects immediately. 👉 Become a successful data scientist with ......" />
            </Helmet>
            <Course_template head={headdata} course={coursedata} section={courseSections} coursep={course_brief} inter_links={nav_interview} />
        </div>
    );
}
