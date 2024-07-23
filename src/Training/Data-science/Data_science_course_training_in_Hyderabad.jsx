import Training_template from "../Training_template";
import { Helmet } from 'react-helmet';

const headData = {
    title: "Best Data Science Course Training",
    color_title:"in Hyderabad ",
    p: "Take control of your career and stand apart from the crowd with Codegnan’s data science training in Hyderabad. Master the key concepts of data analysis and machine learning with the guidance of the topmost industry professionals in India. We have helped 2,700+ of our students secure jobs in leading multinationals. Enroll now to become one of them too!",
    language:"English",
    duration:"6 Months",
    price: "60,000 ",
    rating:" 2,203",
    formh:"Become a Data Science developer",
    formtext:"Talk to our expert Best Data Science mentors and learn how our training programs in Hyderabad can help you become a Best Data Science developer and get a high-paying job.",
    no_of_hours:"50 DAYS INSTRUCTOR LED TRAINING"
  };
  
  const middleData = {
    title: "Data Science Course Overview  ",
    color_title:" and Key Features in Hyderabad",
    p: "Codegnan stands at the helm of premium data science training institutes in Hyderabad. Our sophisticated online and offline data science training will offer you hands-on learning experience with the help of carefully designed curriculum and real-world projects. Not just that, you will receive complete interview assistance from our expert mentors. We make sure that you are already a data science professional before even stepping into the job market. Some top highlights of our intensive course are: ",
    list: [

      " Comprehensive 6 months training with industry approved certification" ,
      " 20 interesting use cases + real world projects" ,
      " Learning made fun with routine quizzes and HackerRank competitions" ,
      " 30+ highly qualified and experienced trainers at your service" ,
      " 24/7 online student support" ,
      " 100% placement guarantee with our job acceleration program" 
    ]
  };
  
  const middle2Data={
    color_title:"Career Scope and Job Opportunities",
    title:"  in Hyderabad for Data Scientist",
    p:"Data is the fuel of today’s industry-centric world. Businesses want to grow higher than ever and analytics helps generate insights that optimize this growth. Hence, the need for data science professionals is at its zenith. With so many MCs and startups established in Hyderabad, it is no doubt that career opportunities in data science and machine learning there are soaring high.",
    list2:[
      {
        heading:" Career Scope",
        info:"According to a report by Markets & Markets, the market size of data science platforms is forecasted to grow at a 27.7% CAGR in the upcoming years. As the adoption of data analytics platforms is on a rapid rise, the field is expected to generate plenty of rewarding opportunities for people."
      },
      {
        heading:" Trending Data Science Jobs",
        info:"In a country like India with a thriving technology sector, the scope for professionals like data scientists, data analysts, data engineers, big data engineers, data architects and data managers is extremely high. By making yourself proficient in analytics and statistical methods for mining data, you can utilize these opportunities to the fullest."
      },
      {
        heading:"Demand for Data Scientists",
        info:"It is projected by the Bureau of Labor Statistics that the employment of data scientists will increase by more than 34% from 2022 to 2023, making it a job that is here to stay in the future. So if you are having second thoughts about pursuing data science, you should definitely think twice. Get firsthand training from one the best data science coaching institutes in Hyderabad."
      },
      {
        heading:" Job Availability",
        info:"Hyderabad is a renowned IT center in the country. All types of tech companies, be it a large scale organization or a small business operate there. That’s why a lot of people rush there to find their dream jobs, making it a suitable location to secure well paying positions."
      },
      {
        heading:" Salary Scope of Data Scientists",
        info:"The average salary of a Data Scientist in Hyderabad ranges between ₹ 3.5 Lakhs to ₹ 20.9 Lakhs with an average salary of ₹ 12.4 LPA. The salary is higher than many professions in the software industry including UI/UX developers, web developers and full stack engineers. "
      }
    ]
  };
  
  const middle3Data={
    color_title:" Data Science Projects",
    title:" you will work on ",
    p:"At Codegnan, we ensure students gather substantial practical experience with the help of result-driven data science projects. The projects are so relatable and intriguing that you will never feel like you are working, even when you actually do.",
    list:[
      {
        heading:"Real Time Drowsiness Detection Alert System",
        info:"The project is not only good for beginners but also professionals who want to gain an overall knowledge of data science. You will get a chance to gain a strong practical understanding of concepts like dataset collection, data preprocessing, model training and real time deployment. "
      },
      {
        heading:"Real Time Rain Prediction Using ML",
        info:"By utilizing machine learning algorithms, you will build a rain prediction model that shows and continuously updates weather data. As you work with data processing, you will slowly get a grasp of necessary libraries, Flask integration, data visualization, and testing & debugging."
      },
      {
        heading:"Customizable Chatbot Using OpenAI API",
        info:"Understanding the popular industrial trends, we decided to dedicate one of our projects to an OpenAI based chatbot. You will learn how to handle user inputs effectively, customize AI models, and generate an automated response."
      },
      {
        heading:"House Price Prediction Using LSTM",
        info:"With this project, you will garner an in-depth knowledge of website structure, web scraping, data splitting, datasets and model fine tuning as you deal with house price data. This project will allow you to learn the complexities of predictive analysis."
      },
      {
        heading:"Fire and Smoke Detection Using CNN",
        info:"This fire and smoke detection project will offer you a wide practical experience of working with convolutional neural networks. You will amass an all around perspective of dataset augmentation, model architecture, thresholding and real time interference."
      }
    ]
  };
  
  const middle4Data = {
    color_title: "Who Should Take this ",
    title: " Data Science Training? ",
    p: "If you are genuinely interested in taking your career to new heights or beginning your professional journey in the best ways possible, this course is for you. Join our army if you are: ",
    list: [
      {
        heading: "Any Graduate",
        info: "Graduates of any field including arts, commerce and core science can take our data science coaching classes in Hyderabad. The curriculum is designed in an easy-to-understand way so that nobody is left behind. "
      },
      {
        heading: "Computer Science Engineers Looking for Role Shift",
        info: "As data science involves a lot of programming as well, computer science engineers can easily transition into data science. If you want to bag lucrative job opportunities in the tech sector but not in core computer science, this training may be just what you are looking for."
      },
      {
        heading: "Beginner Developers/ Engineers",
        info: "Developers or engineers who have just started their careers and realize that software development is just not their thing can also take our data science course in Hyderabad. Your interest in mathematics and statistics is enough to assist you in easing into the program.  "
      },
      {
        heading: " IT Professionals",
        info: "If you want to make your profile stand out in the IT industry, gaining vital data science and ML skills is just what you need. Your existing competencies when combined with analytics will help you do wonders in the job scenario. "
      },
      {
        heading: " Anybody Who Takes Interest in Data Science",
        info: "The point is no matter who you are, where you are from and what you do, as long as you want to build a bankable career in data science, this course is for you. "
      }
    ]
  };
  const middle5Data={
    color_title:" Get Data Science Course",
    title:" Certification in Hyderabad",
    p:"Codegnan is the best institute for data science training in Hyderabad which ensures that after doing all this handwork, you get the most optimal results. We provide an authorized course completion certificate that you can show off to both your friends and recruiters. Besides that, we will provide our personalized attention to each one of you till you emerge as the master data scientists in shining armours. "
  };
  
  const mentorsData={
    color_title:"Meet your",
    title:" Full Stack Python course trainers",
    mentors:[
      {
        name:"Saketh Kallepu",
        description:" Saketh Kallepu is a Data science professional in the IT field with a background in Computational Intelligence. Having 7+ years of experience in this field, he is an outstanding Data Science Mentor and trainer.\nSaketh Kallepu believes, <strong>“Don’t work hard, just work with heart.”</strong> With this belief, he joined as Co-Founder, mentor, and trainer at Codegnan to change the education platform and build a new technical arena for passionate learners. ",
        image:"/members/trainer-2.pngw3_.webp"
      },
      {
        name:"Manohar Chary Vadla",
        description:"Manohar Chary Vadla is a Data Scientist and Mentor with a Bachelor of Commerce in Computer Science background, having 2+ years of hands-on experience in Data Extraction from documents using Python and deep learning techniques.\nHis areas of expertise include research and implementation in machine learning and deep learning, such as regression, classification, neural networks, and natural language processing (NLP).\nAs part of the AI-for India Event, in collaboration with GUVI Geek Networks and IITM Research Park, he developed a facial recognition application using the Python programming language.",
        image:"/members/manohar.webp"
      }
    ]
  }
  
  const course_pricing={
    color_title:"Data Science Training ",
    title:" Fees in Hyderabad — Get 20% offd",
    p:"We have priced our <b>data science training fees, which is inclusive of the job accelerated program, at ₹ 75,000.</b> But we have news for you. You can get our complete <b>6 months data science</b> coaching classes at a discounted rate for a limited time period. Hop along soon if you want to build a career that offers you a high return on investment. "
  }
  
  const otherLocationsData = {
    locationTitle: "Our other  data science training location(s)",
    locations: [
      { name: "Vijayawada", link: "/vijayawada-training" }
    ],
    courseTitle: "codegnan's other training courses in Hyderabad",
    courses: [
      { name: "Data science ", link: "/data-sscience-training-in-hyderabad" },
      { name: "Core Java training", link: "/core-java-training-hyderabad" },
      { name: "Java Full-stack training course", link: "/full-stack-java-training-hyderabad" },
      { name: "Machine learning training course", link: "/machine-learning-training-hyderabad" }
      
    ]
  };
  
  const map_address={
    title:"Visit codegnan’s Bangalore training centre",
    mapSrc:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7610.382525031249!2d78.388451!3d17.498381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91959592aba9%3A0x6bba1d480cb50bad!2sCodegnan%20Hyderabad%20-%20Python%2C%20Java%2C%20Data%20science%2C%20Machine%20learning%2C%20React%20JS%20training%20institute!5e0!3m2!1sen!2sin!4v1712923258063!5m2!1sen!2sin",
    email:"info@codegnan.com",
    phoneNumber:"+91 98887 48888",
    address:"Kothwal Madhava Reddy Plaza, Beside Indian Oil Petrol Bunk, JNTUH Metro Station, Nizampet X Roads, Hyderabad - 500072"
  }
  
  const training_options={
    title:" Training in Hyderabad",
    color_title:"Learning Outcomes of Data Science  ",
    list:[
      {
        title:"  ",
        p:" Codegnan provides complete assistance to Python learners and IT enthusiasts to enjoy programming like you play games on your phone. Sounds interesting, right? That’s how we teach our students to follow the path of professionalism and make them job-ready.<br/><br/>" + "<ul>" +
          [
            " Become familiarized with AI based subjects including deep learning, natural language processing, artificial neural networks, CNNs and computer vision",
            " Become adept in Python programming with the help of dedicated assignments for every module",
            " Acquire top skills in predictive analysis, big data and data visualization",
            " Build a high level of expertise by working on 5 exciting hands-on projects",
            " Gain a thorough understanding of the hottest data science tools right now",
            " Get the chance to create and showcase an industry-relevant portfolio to recruiters"
          ].map((item, index) => (
              "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
          )).join('') +
          "</ul>",
      }
    ]
  }
export default function Data_science_course_training_in_Hyderabad() {
    return (
        <div>
           <Helmet>
              <title>Best Data Science Course Training In Hyderabad (#1 Institute)</title>
              <meta name="description" content="codegnan offers the best data science course in Hyderabad with 24/7 lifetime support. Learn about the course syllabus and fees." />
          </Helmet>
            <Training_template head={headData} middle={middleData} middle2={middle2Data} middle3={middle3Data} middle4={middle4Data} middle5={middle5Data} mentor={mentorsData} coursep={course_pricing} other={otherLocationsData} map_details={map_address} train_opt={training_options}/>
      </div>
    );
  }