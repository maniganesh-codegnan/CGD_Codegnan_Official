import Training_template from "./Training_template";
import { Helmet } from 'react-helmet';
import Python from '../Internship/python';
import Python_Faq_Banglore from '../faqs/python_curriculum';


const headData = {
  title: "Best Python Course Training In Bangalore",
  color_title:"#1 Institute",
  p: "Become a skilled Python developer with Codegnan’s exclusive Python training course in Bangalore. We are one of the top Python training centres in Bangalore offering carefully crafted courses to those who want to become master coders. With the guidance of our expert faculty panel, we make sure that each of our students is prepared for a lucrative Python career ahead.",
  language:"English",
  duration:"1 Month",
  price: "8,000 ",
  rating:" 2,277",
  formh:"Become a Python developer",
  formtext:"Talk to our expert Python mentors and learn how our training programs in Bangalore can help you become a Python developer and get a high-paying job.",
  no_of_hours:"50 DAYS INSTRUCTOR LED TRAINING"
};


const middleData = {
  title: "Python Course Overview ",
  color_title:"and Key Features",
  p: "Our Python course in Bangalore focuses on the fundamentals and practical applications of Python. With the help of a wide range of modules, assignments and hands-on projects, you will learn Python from basic to advanced levels. Codegnan’s interactive training program will give you a chance to delve into an enriching and productive learning experience.",
  list: [
    "Course duration: 1 month of instructor-led training",
    "Course fees: ₹10,000 (limited time offer at ₹8,000)",
    "Training options: Online + Classroom lectures available",
    "Language: English",
    "Opportunity to bag 5-star badge in HackerRank",
    "Get trained by industry experts and professional Python developers",
    "3 exciting live projects to expand your skill sets",
    "Top notch lab facilities for optimal learning",
    "Industry accredited certification",
    "Python training at an affordable cost"
  ]
};

const middle2Data={
  color_title:"Why Learn Python",
  title:" in Bangalore? Benefits and Career Scope",
  p:"Python is one of the most popular programming languages in the world. Thanks to its ease of use, simplicity and versatility, Python has become the topmost choice amongst developers in a wide range of areas including data analysis, artificial intelligence and software development.",
  list2:[
    {
      heading:"Career Scope",
      info:"Python is in great demand in the information technology industry all across the globe. Similarly, the career prospects for engineers specializing in Python in the Silicon Valley of India, aka Bangalore, are also particularly high as most of the big MNCs and several startups operate there."
    },
    {
      heading:" Job Availability",
      info:"According to Indeed, about 12,000 jobs opened for Python developers in the year 2022 in India. As the number of job positions is increasingly growing, people have multiple opportunities to upscale their careers. Clearly, a professional in Python has a lot of options to choose from."
    },
    {
      heading:"Demand of Learning Python",
      info:"Python professionals is expected to be in great demand owing to their versatile skill set. Its ecosystem of frameworks and libraries make up the IT infrastructure of some of the biggest companies including Google, Spotify, Netflix and Facebook. So the jobs are definitely here to stay."
    },
    {
      heading:"Salary Scope",
      info:"Python developer salary in Bangalore ranges between ₹ 2.0 Lakhs to ₹ 9.0 Lakhs with an average annual salary of ₹ 6.0 Lakhs. This implies that a skilled Python developer can easily get a job with a per month takeaway salary of ₹ 32,857 to ₹ 34,129."
    },
    {
      heading:"Types of Jobs",
      info:"Python is used in a wide range of industries including scripting, artificial intelligence, machine learning and data science. By undergoing Python training from a revered institute, you can bag high-paying jobs like Python Developer, Web Developer, Software Programmer, Software Developer, Full Stack Developer and many more."
    }
  ]
};

const middle3Data={
  color_title:" Three Python Projects",
  title:" you will work on ",
  p:"By the end of our Python training, you will get the opportunity to work on three practical projects that are especially designed to hone your critical thinking abilities. Not just that, you will get a chance to work on some of the most trending technologies which will be a great addition to your portfolio.",
  list:[
    {
      heading:"Web Scraping Dynamic Website with Multiple Pages Along With Data Analysis",
      info:"By undertaking this project, you will learn web scraping and data analysis from a new dimension. You will also gain an in-depth knowledge of the EDA process, dynamic website scraping with BeautifulSoup and multidimensional arrays within an actual time context."
    },
    {
      heading:"Sending Automated Emails",
      info:"Through this project, you will learn how to automatically deliver text messages, photos, important files and other essential things by using Python. File handling, database access, functions and file manipulation are some of the core concepts you will be able to master.  "
    },
    {
      heading:"Building a Virtual Assistance with Frontend Interface",
      info:"Just like Siri and Alexa, you will get a chance to create your own virtual assistant by making use of the Python Flask framework and templates. This hands-on project will offer a comprehensive understanding of GET, POST, PUT and many other methods in Flask. "
    }
  ]
};

const middle4Data={
  color_title:"Who are These Python ",
  title:"Training Classes For ",
  p:"Wondering whether you are eligible for the training or not? Our Python classes in Bangalore are just what you are looking for if you are a: ",
  list:[
    {
      heading:"College Student or Fresher Graduate ",
      info:"If you have recently graduated, learning Python can help you secure well-paying positions even at the beginning of your career. The beauty of our Python training is in its simplicity and ease to understand. Every module is designed in such a way that it can be readily understood by any graduate, no matter the specialization.  ",
    },
    {
      heading:" Beginners Who Want to Become Python Experts",
      info:"Any programming enthusiast who possesses little knowledge of coding or only a basic understanding of Python can greatly benefit from our training. The curriculum at Codegnan covers a variety of assignments and hands-on projects to help you turn into a full-fledged Python master. ",
    },
    {
      heading:" IT Professionals ",
      info:"Looking to upscale your career? Python is just the skill that can take your career from 0 to 100. With the help of our expert trainers, you will not only learn Python in the most interesting ways, but you will also gather insights about how to make it to the top of the IT industry faster than others. ",
    },
    {
      heading:"Anyone Interested In Automation ",
      info:"Our Python training provides an all around knowledge of file handling, web scraping, data extraction, and testing reporting, along with scripts that automate workflow and processes. We ensure that people interested in automation learn exactly what they are looking for.",
    }
  ]
};

const middle5Data={
  color_title:"Python Course Certification ",
  title:"  in Bangalore",
  p:"Codegnan’s Python course in Bangalore is designed to offer you a wide understanding of Python from both theoretical and practical aspects. \nBy successfully completing all the assignments and hands-on projects, you will become eligible to earn an industry-recognised certification that can be the ultimate push to your career. Apart from this, you will also get the chance to earn exciting positions in HackerRank."
};

const mentorsData={
  color_title:"Meet your",
  title:" Python course Trainers ",
  mentors:[
    {
      name:"Sairam Uppugundla",
      description:" Sairam Uppugundla is the CEO and founder of Codegnan IT Solutions. With a strong background in Computer Science and over 10 years of experience, he is committed to bridging the gap between academia and industry.\n Sairam Uppugundla is a dedicated IT professional with a Bachelor’s in Technology and Computer science with 10+ years of experience in this field.\nTo achieve his mission, Sairam Uppugundla decided to leave his position as a Data Engineer in Malaysia, returned to Andhra Pradesh, and established Codegnan. \nIn 2018, his deep-rooted interest in teaching led him to change his career, shifting his focus to bring up the next generation of engineers. ",
      image:"/members/sairam-sir.webp"
    }
  ]
}

const course_pricing={
  color_title:"Python Course Fees",
  title:"in Bangalore ",
  p:"<span>Our <strong>360-degree Python training in Bangalore</strong> is priced at just ₹ 10,000. At this reasonable cost, you will get 1 month of extensive training, impeccable classroom infrastructure, 24×7 doubt assistance, real-time projects to enhance your portfolio and first-hand advice from industry experts. \nStill, thinking the cost is slightly high? Just for you, we are <strong>offering the course at an all-time low price of ₹8,000</strong> (for a limited time).</span>"
}

const otherLocationsData = {
  locationTitle: "Our other Python training location(s)",
  locations: [
    { name: "Vijayawada", link: "/vijayawada-training" }
  ],
  courseTitle: "codegnan's other training courses in Hyderabad",
  courses: [
    { name: "Python full-stack course", link: "/python-full-stack-course-hyderabad" },
    { name: "Core Java training", link: "/core-java-training-hyderabad" },
    { name: "Java Full-stack training course", link: "/full-stack-java-training-hyderabad" },
    
  ]
};

const map_address={
  title:"Visit codegnan’s Bangalore training centre",
  mapSrc:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d486.11345582790966!2d77.610212!3d12.913657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fd049571b5%3A0xd3fa32bf2babcb54!2sDestination%20Technologies!5e0!3m2!1sen!2sin!4v1712925089649!5m2!1sen!2sin",
  email:"info@codegnan.com",
  phoneNumber:"+91 98887 38888",
  address:"#951, 16th Main, BTM 2nd Stage, Bengaluru, Karnataka - 560076."
}

const training_options={
  title:"options in codegnan",
  color_title:"Python training ",
  list:[
    {
      title:"Python classroom training in Bangalore",
      p:"Our Python classroom training in Bangalore provides hands-on learning, interactive sessions, and interesting hands-on project experiences. Join our next batch in Bangalore."
    },
    {
      title:"Online Python course training",
      p:"Experience the flexibility of learning Python from anywhere with our live online training. Enjoy interactive sessions, real-time doubt assistance, and a dynamic virtual classroom. Learn from our Python expert trainers with one-on-one support."
    }
  ]
}


const data2 = [
  {
      head: "Who can be the audience of Online Java Training in Vijayawada?",
      p: "The following aspirants can opt for a Java course in Vijayawada: Programming Enthusiasts, Project Managers, Web Developers, Full Stack Developers, Software Developers, Software Engineers, Technical Lead Architects, Technology Enthusiasts, Web Enthusiasts, etc."
  },
  {
      head: "What are the prerequisites of Java training in Vijayawada Online?",
      p: "To learn Java you do not really need any prerequisites. This means no programming language knowledge is needed to learn Java. However, for a better understanding, you can opt for C++ programming as a foundational language."
  },
  {
      head: "What is the future of Java Programming?",
      p: "Java programming has a promising future, with its wide adoption, robust ecosystem, and continuous updates. It remains a popular choice for enterprise applications, Android development, and emerging technologies like cloud computing and big data."
  },
  {
      head: "What are the advantages of the Java Course in Vijayawada?",
      p: "Our expert-level trainers with 8 plus years of experience have designed this Java course curriculum to teach students to face challenges in real-time industry-based problems. Upon successful completion of the Java course, you will receive a completion certificate from us. Moreover, with the training of Codegnan, students can easily crack OCJP certifications."
  },
  {
      head: "Why should you learn Java Programming?",
      p: "Learning Java programming is valuable because it is widely used in enterprise applications, Android app development, and big data technologies. It offers strong community support, excellent portability, and a vast array of libraries, making it a versatile and in-demand skill."
  },
  {
      head: "What is meant by 24*7 lifetime support?",
      p: "You will get 24*7 support and lifetime access to the LMS, where course materials like presentations, installation guides, & class recordings are available. There will be an email support throughout to clear all your doubts."
  }
]

const curriculumData = <Python />


export default function Python_training_in_banglore() {
  return (
    <div>
      <Helmet>
          <title>⭐ Best Python Course In Bangalore (#1 Institute) </title>
          <meta name="description" content="Codegnan offers the best Python course in Bangalore. Course duration: 1 month, fees: ₹12,000, Rating: 4.8/5. Get discounts if you APPLY NOW." />
      </Helmet>
      <Training_template head={headData} middle={middleData} middle2={middle2Data} middle3={middle3Data} curriculumData={curriculumData} middle4={middle4Data} middle5={middle5Data} mentor={mentorsData} coursep={course_pricing} other={otherLocationsData} map_details={map_address} train_opt={training_options} faq={data2}/>
      {/* <Python/> */}
      <Python_Faq_Banglore/>
    </div>
  );
}




// import Training_template from "./Training_template";

// const headData = {
//   title: "Best Python Course Training In Bangalore",
//   color_title: "#1 Institute",
//   p: "Become a skilled Python developer with Codegnan’s exclusive Python training course in Bangalore. We are one of the top Python training centres in Bangalore offering carefully crafted courses to those who want to become master coders. With the guidance of our expert faculty panel, we make sure that each of our students is prepared for a lucrative Python career ahead.",
//   language: "English",
//   duration: "1 Month",
//   price: "8,000 ",
//   rating: " 2,277",
//   formh: "Become a Python developer",
//   formtext: "Talk to our expert Python mentors and learn how our training programs in Bangalore can help you become a Python developer and get a high-paying job.",
//   no_of_hours: "50 DAYS INSTRUCTOR LED TRAINING"
// };

// const middleData = {
//   title: "Python Course Overview ",
//   color_title: "and Key Features",
//   p: "Our Python course in Bangalore focuses on the fundamentals and practical applications of Python. With the help of a wide range of modules, assignments and hands-on projects, you will learn Python from basic to advanced levels. Codegnan’s interactive training program will give you a chance to delve into an enriching and productive learning experience.",
//   list: [
//     "Course duration: 1 month of instructor-led training",
//     "Course fees: ₹10,000 (limited time offer at ₹8,000)",
//     "Training options: Online + Classroom lectures available",
//     "Language: English",
//     "Opportunity to bag 5-star badge in HackerRank",
//     "Get trained by industry experts and professional Python developers",
//     "3 exciting live projects to expand your skill sets",
//     "Top notch lab facilities for optimal learning",
//     "Industry accredited certification",
//     "Python training at an affordable cost"
//   ]
// };

// const middle2Data = {
//   color_title: "Why Learn Python",
//   title: " in Bangalore? Benefits and Career Scope",
//   p: "Python is one of the most popular programming languages in the world. Thanks to its ease of use, simplicity and versatility, Python has become the topmost choice amongst developers in a wide range of areas including data analysis, artificial intelligence and software development.",
//   list2: [
//     {
//       heading: "Career Scope",
//       info: "Python is in great demand in the information technology industry all across the globe. Similarly, the career prospects for engineers specializing in Python in the Silicon Valley of India, aka Bangalore, are also particularly high as most of the big MNCs and several startups operate there."
//     },
//     {
//       heading: " Job Availability",
//       info: "According to Indeed, about 12,000 jobs opened for Python developers in the year 2022 in India. As the number of job positions is increasingly growing, people have multiple opportunities to upscale their careers. Clearly, a professional in Python has a lot of options to choose from."
//     },
//     {
//       heading: "Demand of Learning Python",
//       info: "Python professionals is expected to be in great demand owing to their versatile skill set. Its ecosystem of frameworks and libraries make up the IT infrastructure of some of the biggest companies including Google, Spotify, Netflix and Facebook. So the jobs are definitely here to stay."
//     },
//     {
//       heading: "Salary Scope",
//       info: "Python developer salary in Bangalore ranges between ₹ 2.0 Lakhs to ₹ 9.0 Lakhs with an average annual salary of ₹ 6.0 Lakhs. This implies that a skilled Python developer can easily get a job with a per month takeaway salary of ₹ 32,857 to ₹ 34,129."
//     },
//     {
//       heading: "Types of Jobs",
//       info: "Python is used in a wide range of industries including scripting, artificial intelligence, machine learning and data science. By undergoing Python training from a revered institute, you can bag high-paying jobs like Python Developer, Web Developer, Software Programmer, Software Developer, Full Stack Developer and many more."
//     }
//   ]
// };

// const middle3Data = {
//   color_title: " Three Python Projects",
//   title: " you will work on ",
//   p: "By the end of our Python training, you will get the opportunity to work on three practical projects that are especially designed to hone your critical thinking abilities. Not just that, you will get a chance to work on some of the most trending technologies which will be a great addition to your portfolio.",
//   list: [
//     {
//       heading: "Web Scraping Dynamic Website with Multiple Pages Along With Data Analysis",
//       info: "By undertaking this project, you will learn web scraping and data analysis from a new dimension. You will also gain an in-depth knowledge of the EDA process, dynamic website scraping with BeautifulSoup and multidimensional arrays within an actual time context."
//     },
//     {
//       heading: "Sending Automated Emails",
//       info: "Through this project, you will learn how to automatically deliver text messages, photos, important files and other essential things by using Python. File handling, database access, functions and file manipulation are some of the core concepts you will be able to master.  "
//     },
//     {
//       heading: "Building a Virtual Assistance with Frontend Interface",
//       info: "Just like Siri and Alexa, you will get a chance to create your own virtual assistant by making use of the Python Flask framework and templates. This hands-on project will offer a comprehensive understanding of GET, POST, PUT and many other methods in Flask. "
//     }
//   ]
// };

// const middle4Data = {
//   color_title: "Who are These Python ",
//   title: "Training Classes For ",
//   p: "Wondering whether you are eligible for the training or not? Our Python classes in Bangalore are just what you are looking for if you are a: ",
//   list: [
//     {
//       heading: "College Student or Fresher Graduate ",
//       info: "If you have recently graduated, learning Python can help you secure well-paying positions even at the beginning of your career. The beauty of our Python training is in its simplicity and ease to understand. Every module is designed in such a way that it can be readily understood by any graduate, no matter the specialization.  ",
//     },
//     {
//       heading: " Beginners Who Want to Become Python Experts",
//       info: "Any programming enthusiast who possesses little knowledge of coding or only a basic understanding of Python can greatly benefit from our training. The curriculum at Codegnan covers a variety of assignments and hands-on projects to help you turn into a full-fledged Python master. ",
//     },
//     {
//       heading: " IT Professionals ",
//       info: "Looking to upscale your career? Python is just the skill that can take your career from 0 to 100. With the help of our expert trainers, you will not only learn Python in the most interesting ways, but you will also gather insights about how to make it to the top of the IT industry faster than others. ",
//     },
//     {
//       heading: "Anyone Interested In Automation ",
//       info: "Our Python training provides an all around knowledge of file handling, web scraping, data extraction, and testing reporting, along with scripts that automate workflow and processes. We ensure that people interested in automation learn exactly what they are looking for.",
//     }
//   ]
// };

// const middle5Data = {
//   color_title: "Python Course Certification ",
//   title: "  in Bangalore",
//   p: "Codegnan’s Python course in Bangalore is designed to offer you a wide understanding of Python from both theoretical and practical aspects. \nBy successfully completing all the assignments and hands-on projects, you will become eligible to earn an industry-recognised certification that can be the ultimate push to your career. Apart from this, you will also get the chance to earn exciting positions in HackerRank."
// };

// const mentorsData = {
//   color_title: "Meet your",
//   title: " Python course Trainers ",
//   mentors: [
//     {
//       name: "Sairam Upp...",
//       description: "Sairam Upp...",
//       image: "/path/to/image"
//     },
//     // Add more mentors as needed
//   ]
// };

// const coursepData = {
//   title: "Pricing",
//   color_title: "",
//   p: "Our Python course pricing is competitive and includes various discounts and offers to make it affordable for all aspiring developers. Contact us for more details on our current offers."
// };

// const otherData = {
//   locationTitle: "Available Locations",
//   locations: [
//     { name: "Bangalore", link: "/bangalore" },
//     { name: "Hyderabad", link: "/hyderabad" },
//     // Add more locations as needed
//   ],
//   courseTitle: "Related Courses",
//   courses: [
//     { name: "Java Training", link: "/java" },
//     { name: "Web Development", link: "/web-development" },
//     // Add more courses as needed
//   ]
// };

// const mapDetailsData = {
//   title: "Our Location",
//   mapSrc: "https://www.google.com/maps/embed?...",
//   email: "info@codegnan.com",
//   phoneNumber: "+91 98887 38888",
//   address: "123, Main Street, Bangalore, India"
// };

// const trainOptData = {
//   title: "Training Options",
//   color_title: "",
//   p: "We offer flexible training options to cater to the diverse needs of our students. Choose the option that best suits your learning style and schedule.",
//   list: [
//     { title: "Online Training", p: "Learn at your own pace from the comfort of your home." },
//     { title: "Classroom Training", p: "Engage in interactive sessions with our expert trainers." },
//     // Add more training options as needed
//   ]
// };

// const faqData = [
//   {
//     question: "What is the duration of the Python course?",
//     answer: "The Python course lasts for 1 month with instructor-led training sessions."
//   },
//   {
//     question: "What are the prerequisites for this course?",
//     answer: "There are no specific prerequisites. Basic programming knowledge can be helpful but not mandatory."
//   },
//   // Add more FAQs as needed
// ];

// const LearnPythonPage = () => (
//   <div>
//     <Training_template 
//       headData={headData}
//       middleData={middleData}
//       middle2Data={middle2Data}
//       middle3Data={middle3Data}
//       middle4Data={middle4Data}
//       middle5Data={middle5Data}
//       mentorsData={mentorsData}
//       coursepData={coursepData}
//       otherData={otherData}
//       mapDetailsData={mapDetailsData}
//       trainOptData={trainOptData}
//       faqData={faqData}
//     />
//   </div>
// );

// export default LearnPythonPage;
