import Campus_temp from "./campuses_template";
import { Link } from "react-router-dom";
const headData = {
    title: "Codegnan Vijayawada",
    color_title:"IT training centre",
    p: "Codegnan’s IT training centre in Vijayawada offers top rated IT and technical skills training courses and training programs. Our tech training program includes placement assistance with <a href='/' className='custom-link'>job acceleration program</a> (JAP) in Vijayawada.",
    language:"English",
    rating:" 2,198",
    formh:"Enquiry Form",
  };
  
  const map_address={
    color_title:"Visit codegnan’s Vijayawada",
    title:" training centre",
    mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1352.4853698586353!2d80.64656358459165!3d16.50557299096045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb51a430ffad%3A0xe6ed5ede725b304b!2sCodegnan%20IT%20Solutions%3A%20Your%20Best%20Training%20Institute%20for%20Software%20Courses!5e0!3m2!1sen!2sin!4v1712558461347!5m2!1sen!2sin",
    email:"info@codegnan.com",
    phoneNumber:"+91 98887 58888",
    address:"40-5-19/16, Prasad Naidu Complex, P.B.Siddhartha Busstop, Moghalrajpuram, Vijayawada, Andhra Pradesh 520010"
  }

  const middle2Data={
    color_title:"Our IT training programs",
    title:" in Vijayawada",
    p:"Our expert trainers offer tech courses and skill development programs that will help you get your first high-paying jobs. Check out our training programs in Vijayawada.",
    list2:[
      {
        heading:"Python course training in Vijayawada",
        info:"<strong>Course duration</strong>: 1 month\n <strong>Course fees</strong>: ₹10,000\nOur 300-hour program, available both online and offline, ensures a strong foundation with Python basics, data handling, web development, and more. Gain real-world experience through projects like Dynamic Website Scraping and Automated Email Sending.\nGet career benefits with a broad scope, 1-on-1 mentorship, and a Microsoft certification. Suitable for freshers, final-year students, and enthusiasts.",
        name:" Enroll in python classroom Vijayawada",
        link:"/python_training_in_Vijayawada"
      },
      {
        heading:"Java full stack course training in Vijayawada",
        info:"<strong>Course duration</strong>: 100 days\n <strong>Course fees</strong>: ₹50,000\nStart your journey as a full stack java developer with codegnan's Training in Vijayawada. Led by experts with 8+ years of experience, the 3-4 month course covers front-end, back-end, and middleware using Java. Gain 1-on-1 mentorship, technical skills, and job assurance. Java developers earn 3-6 LPA, making it a smart career choice. \nTools include Oracle, SQL, Angular JS, and more. Projects include Hospital Management and Online Banking. Ideal for final year students, fresh graduates, and IT professionals. Get certified and join a global network of successful Java developers",
        name:"  Enroll in Java classroom training in Vijayawada",
        link:"/java-full-stack-training-in-vijayawada"
      },
      {
        heading:"Machine learning course training in Vijayawada",
        info:"<strong>Course duration</strong>: 1 month\n <strong>Course fees</strong>: ₹10,000\nAs a leading IT training institute, we have a proven track record with 1.2k+ students successfully placed and trusted by 4k+ students across India. Our 60-hour certification covers machine learning algorithms, Python, and real-time projects, equipping you to build, evaluate, and deploy ML models in corporate settings.",
        name:" Enroll in machine learning course in Vijayawada",
        link:"/machine-learning-in-vijayawada"
      },
      {
        heading:" Data science training in Vijayawada",
        info:"<strong>Course duration</strong>: 6 month\n <strong>Course fees</strong>: ₹75,000\nDesigned for beginners, this six-month program covers the essentials of data science, including Python, data analytics, machine learning, and NLP projects. Led by experienced ex-IITian instructors, the course offers offline training in Vijayawada, Hyderabad, and Bangalore, as well as online training across India. The curriculum spans from Python basics to advanced topics, ensuring you are well-equipped for a high-paying job in the thriving field of data science. ",
        name:" Enroll in data science classroom training in Vijayawada.",
        link:"/data-science-in-vijayawada"
      },
      {
        heading:"React JS course training in Vijayawada",
        info:"<strong>Course duration</strong>: 1 month\n <strong>Course fees</strong>: ₹10,000\nStart your journey to becoming a skilled React JS developer with Codegnan's comprehensive React JS Training in Vijayawada. Designed for learners aspiring to design complex components, this course covers everything from basic concepts to advanced topics. \nBenefit from flexible schedules, lifetime access, and placement assistance. The course includes a Microsoft certification, live projects, and a job assurance program. Explore demanding careers like web development, UI/UX design, and full-stack development. Start your React JS career in Vijayawada with Codegnan's expert mentorship and hands-on learning.",
        name:" Enroll in React JS training classes in Vijayawada",
        link:"/react-js-in-vijayawada"
      },

      {
        heading:"C programming course training in Vijayawada",
        info:"<strong>Course duration</strong>: 1 month\n <strong>Course fees</strong>: ₹5,000\nKickstart your coding journey in Vijayawada with Codegnan's C Programming Language Course. Perfect for beginners, this course offers flexibility with both offline and online classes. Learn from industry experts, work on live projects, and receive placement assistance. \nEnhance your problem-solving skills, work on a live banking management project, and earn an authorized certification. ",
        name:" Enroll in C programming course in Vijayawada",
        link:"/C-programming-in-vijayawada"
      },
      {
        heading:" Data structures and algorithms training in Vijayawada",
        info:"<strong>Course duration</strong>: 3 month\n <strong>Course fees</strong>: ₹30,000\nWhether you're a computer science student, developer, or college fresher, our 3-month program covers everything from basic concepts to advanced topics like dynamic programming and graph theory.\n Learn from experienced mentors, work on live projects, and enhance your career opportunities. Gain practical skills for real-world problem-solving and receive certification for your achievements.",
        name:"  Enroll in data structures and algorithms classes in Vijayawada",
        link:"/data-structures-and-algorithms-in-vijayawada"
      },
      {
        heading:"Software testing training in Vijayawada",
        info:"<strong>Course duration</strong>: 100 days\n <strong>Course fees</strong>: ₹50,000\nTake your career to the next level with our software testing training course in Vijayawada. Get in-depth knowledge on manual testing, Selenium, Java, HTML, and CSS through 100 days of instruction by experts. \nWork on live projects with mentorship. The beginner-friendly syllabus leads to an authorized certification. Enjoy flexible scheduling, lifetime access, 24/7 support and 100% job assistance.",
        name:" Software training classes in Vijayawada",
        link:"/Software-testing-in-vijayawada"
      },
      
    ]
};

const course_pricing={
    color_title:"Start your tech career",
    title:"in Vijayawada ",
    p:"Embark on a dynamic tech journey in Vijayawada, where opportunities flourish for college students and IT professionals alike.\nCodegnan offers specialized training programs to prepare you for success in the tech field. Learn from industry experts, gain hands-on experience, and position yourself for opportunities with the leading names in tech. Join our Vijayawada training centre, where top-tier companies hire, and start your tech career with confidence."
  }
export default function Vij_campus(){
    return(
        <div>
            <Campus_temp head={headData} map_details={map_address} middle2={middle2Data} coursep={course_pricing}/>
        </div>
    );
}