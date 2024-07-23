import Training_template from "../Training_template";
import { Helmet } from 'react-helmet';

const headData = {
    title: "Best Machine Learning Training",
    color_title:" Course in Vijayawada",
    p: "Are you looking to get into machine learning but don’t know how? Look no more, as codegnan has come with its Machine learning institute in Vijayawada, where you get top-of-the-line learning from the best in the industry. \nLearn from ex-IITians and ex-employees of tech giants like Amazon, Google and IBM. Not only that, but you also get an authorized certification from codegnan to prove your caliber. So far we have trained over 2000 learners, so hurry up and enroll now.",
    language:"English",
    duration:"1 Months",
    price: "7,999 ",
    rating:" 2,203",
    formh:"Become a Machine Learning developer",
    formtext:"Talk to our expert Machine Learning and learn how our training programs in Vijayawada can help you become a Machine Learning developer and get a high-paying job.",
    no_of_hours:"100 DAYS INSTRUCTOR LED TRAINING"
  };
  
  const middleData = {
    title: "Overview and Key Features",
    color_title:" of Machine Learning course in Vijayawada",
    p: "This Machine Learning course in Vijayawada by codegnan comes with the objective of helping IT and non-IT individuals enter the world of machine learning. It starts from the very basics so no need to have prior knowledge about this subject. \nPlus, here are some key features of the course that make it worth your time and money.",
    list: [

      " Course duration: 1 month (30 days) ",
      " Instructor-led classes for that extra support. ",
      " Flexible time slots available for your convenience. ",
      " 24x7 lifetime support and access to learning resources. ",
      " Option of getting one-on-one training. ",
      " Work on live projects. ",
      " Get authorized certification by codegnan. "
    ]
  };
  
  const middle2Data={
    color_title:"What You Will Learn with  ",
    title:" Our Machine Learning Training Classes in Vijayawada",
    p:"No matter if you are from a non-tech background or don’t have any knowledge of machine learning, by the end of this machine learning course by codegnan, here are some things you’ll be proficient at.",
    list2:[
      {
        heading:"Fundamentals of Machine Learning",
        info:"Build a strong understanding of machine learning concepts, covering supervised, unsupervised, and reinforcement learning, preparing you for diverse real-world challenges."
      },
      {
        heading:"Gain Project Execution Skills",
        info:"Learn to execute end-to-end ML projects, from data engineering to model deployment, through practical, hands-on projects."
      },
      {
        heading:"Proficiency in Python",
        info:"Master Python and key data libraries (Pandas, NumPy), which are essential skills for data manipulation and model implementation."
      },
      {
        heading:"Data Visualization",
        info:" Develop practical data visualization skills using Matplotlib, Seaborn, and Plotly, that help you to communicate insights and make informed decisions based on data analysis. "
      }
    ]
  };
  
  const middle3Data={
    color_title:"Machine Learning Projects ",
    title:" (3 Projects) you will work on",
    p:" Each section of the curriculum is taught with hands-on implementations, but apart from that, you get to work on multiple projects that help you assess your overall learnings. Here are some project topics under the course and their learning objectives.",
    list:[
      {
        heading:" Real - Time Rain Prediction",
        info:"Predict real-time rain using live weather data, covering the end-to-end ML workflow and deployment.  Skills used: Data Collection, Model Training, Model Evaluation, Application Deployment"
      },
      {
        heading:" Netflix Recommendation System",
        info:"Create a recommendation system for Netflix, focusing on feature engineering and personalized recommendations. \nSkills used: Dataset Exploration, Feature Engineering, Building Recommendation Models."
      },
      {
        heading:" GDP/ House/ Stock Price Prediction",
        info:"Predict GDP/ house/ stock prices by integrating web scraping, data preprocessing, and model deployment. \n Skills used: Web Scraping, Data Preprocessing, Model Training, Model Deployment, Data Visualization, Feature Engineering."
      }
    ]
  };
  
  const middle4Data={
    color_title:"Who is This Machine Learning",
    title:" Course For?",
    p:"Wondering if this course is a right fit for you or not? Then, let us share our ideal candidate base and how this course can help them. ",
    list:[
        {
            heading:"College Students/Fresh Graduates",
            info:"The course provides a comprehensive understanding, enabling you to tackle real-world problems making you an attractive candidate for data analyst, machine learning engineer, or data scientist positions. So it is great for you to get a competitive edge over your peers as you enter the job market. "
        },
        {
          heading:"Beginner Developers/Engineers",
          info:"The course equips you with the essential skills to contribute to ML projects, making you a valuable asset in software development teams and opening doors to specialized ML roles."
        },
        {
          heading:" IT Professionals",
          info:"This course will help professionals acquire proficiency in Python, data engineering, and model deployment, enabling them to leverage ML for data analysis and decision-making in IT projects. The course teaches them ML techniques to improve system efficiency and problem-solving."
        },
        {
          heading:" Anyone Interested in Machine Learning",
          info:" This course is structured and covers the entire ML workflow. From data preprocessing to model deployment, you'll gain practical skills and a deep understanding of algorithms. Making it equally ideal for self-learners and enthusiasts looking to explore or transition into the exciting field of machine learning."
        }
    ]
  };
  
  const middle5Data={
    color_title:"Machine Learning Course  ",
    title:" Certification in Vijayawada ",
    p:"This one-month (30 days) long machine learning certification course in Vijayawada by codegnan aims to teach you the fundamentals of ML in a systematic manner. This course covers great application-based projects that you can showcase in your resume, but that isn’t enough to show your merit, right? \nThis is why codegnan also gives an authorized certification upon successful compilation of the course. So you can hone your skills with proof in hand. "
  };
  
  const mentorsData={
    color_title:"Meet your",
    title:" Machine Learning Course Trainers",
    mentors:[
      
      {
        name:"Saketh Kallepu",
        description:" Saketh Kallepu is a Data science professional in the IT field with a background in Computational Intelligence. Having 7+ years of experience in this field, he is an outstanding Data Science Mentor and trainer.\nSaketh Kallepu believes, <strong>“Don’t work hard, just work with heart.”</strong> With this belief, he joined as Co-Founder, mentor, and trainer at Codegnan to change the education platform and build a new technical arena for passionate learners. ",
        image:"/members/trainer-2.pngw3_.webp"
      }
    ]
  }
  
  const course_pricing={
    color_title:"Machine Learning Course ",
    title:"  Training Fees in Vijayawada— Get 20% off",
    
    p: "The fee of the machine learning course in Vijayawada by codegnan is only ₹10,000, for both online and in-classroom modes, which is nothing compared to how much you are expected to pay for a high-value course like machine learning. \nBesides, you also get lifetime free access and updates on the learning materials and job placement assistance. Which increases the value of the course manyfold. \nHowever, if the price still seems out of your budget, you can avail of a limited-period offer of a 20% discount and get the course for the effective price of only ₹8,000."
        
    
  }
  
  const otherLocationsData = {
    locationTitle: "Our other machine learning training location(s)",
    locations: [
      { name: "Hyderabad", link: "/hyderabad-training" }
    ],
    courseTitle: "codegnan's other training courses in Vijayawada",
    courses: [
      {name:"Python course training",link:"/python_training_in_hyderabad"},
      { name: "Data science ", link: "/data-sscience-training-in-hyderabad" },
      { name: "Core Java training", link: "/core-java-training-hyderabad" },
      { name: "Java Full-stack course", link: "/full-stack-java-training-hyderabad" },
      { name: "Machine learning training course", link: "/machine-learning-training-hyderabad" },
      {name:"React JS",link:"/reactjs-in-hyderabad"},
      {name:"Data structures and algorithms",link:"/data-structures-and-algorithms-in-hyderabad"},
      {name:"C programming",link:"/c-programming-hyderabad"}
      
    ]
  };
  
  const map_address={
    title:"Visit codegnan’s Bangalore training centre",
    mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1352.4853698586353!2d80.64656358459165!3d16.50557299096045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb51a430ffad%3A0xe6ed5ede725b304b!2sCodegnan%20IT%20Solutions%3A%20Your%20Best%20Training%20Institute%20for%20Software%20Courses!5e0!3m2!1sen!2sin!4v1712558461347!5m2!1sen!2sin",
    email:"info@codegnan.com",
    phoneNumber:"+91 98887 48888",
    address:"40-5-19/16, Prasad Naidu Complex, P.B.Siddhartha Busstop, Moghalrajpuram, Vijayawada, Andhra Pradesh 520010"
  }
  
  const training_options={
    title:"Career Scope for",
    color_title:"  Machine Learning in Vijayawada ",
    list:[
      {
        title:"Career Scope for Machine Learning in Vijayawada",
        p:"Having Machine Learning as your skill can help you bag some of the highest salaries in India, even as a fresher. For example, the average salary of a machine learning engineer in India is around ₹8.8 LPA, that also for someone with 0-5 years of experience. \nHowever, depending on a lot of factors, it can range anywhere between ₹3.0 to ₹20.7 LPA. \nAnd if you are worried if you will be able to secure a job in this field or not, then you can search for machine learning engineering jobs in India and have a look at the long list of active jobs you can apply for."
      },
      {
        title:"Machine Learning Course Certification in Vijayawada",
        p:"This one-month (30 days) long machine learning certification course in Vijayawada by codegnan aims to teach you the fundamentals of ML in a systematic manner. This course covers great application-based projects that you can showcase in your resume, but that isn’t enough to show your merit, right \nThis is why codegnan also gives an authorized certification upon successful compilation of the course. So you can hone your skills with proof in hand."
      }
    ]
  }
export default function Machine_learning_course_training_in_Vijayawada() {
    return (
        <div>             
              <Helmet>
                <title>Machine Learning Training Course in Vijayawada (#1 Institute)</title>
                <meta name="description" content="codegnan offers best machine learning training in Vijayawada with lifetime student support. Learn about syllabus and fees today." />
            </Helmet>
            <Training_template head={headData} middle={middleData} middle2={middle2Data} middle3={middle3Data} middle4={middle4Data} middle5={middle5Data} mentor={mentorsData} coursep={course_pricing} other={otherLocationsData} map_details={map_address} train_opt={training_options}/>
      </div>
    );
  }