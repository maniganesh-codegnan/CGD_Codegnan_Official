import Training_template from "../Training_template";
import { Helmet } from 'react-helmet';

const headData = {
    title: "Java Full Stack Training Course In Vijayawada ",
    color_title:" With Placement for 2023/24 passouts",
    p: "Codegnan IT Solutions, a top Java training institute in Vijayawada, offers a comprehensive program covering Java theory and practice. Taught by experienced experts with 8+ years of real-world experience, students gain deep Java knowledge. Flexible training options, placement assistance, and affordable fees make quality education accessible to all. ",
    language:"English",
    duration:"100 Days",
    price: "50,000 ",
    rating:" 2,203",
    formh:"Become a Java Full Stack developer",
    formtext:"Talk to our expert Java Full Stack and learn how our training programs in Vijayawada can help you become a Java Full Stack developer and get a high-paying job.",
    no_of_hours:"50 DAYS INSTRUCTOR LED TRAINING"
  };
  
  const middleData = {
    title: "Java training course ",
    color_title:"overview and key features ",
    p: "Full-stack Java developer training is designed to make you familiar with front-end, back-end, and middleware web development technologies using Java. The course will help you to create an end-to-end application with the capability to test and deploy code using a database.\nCourse highlights:",
    list: [
     "Certification included",
     "Learn from experts",
     "Online + Offline classes",
     "Free doubt-clearing sessions",
     "Live projects",
     "Job assurance program"
    ]
  };
  
  const middle2Data={
    color_title:"Career growth with Java training course ",
    title:" in Vijayawada",
    p:"Codegnan offers a Java Full Stack Development program for 3-4 months. It is a job-oriented professional course that provides strong knowledge and a proper understanding of Java technology. We provide extensive training in all the relevant disciplines to enable engineers to develop Java-based applications that meet industry standards. We also offer Java programming language training along with OCJP certifications. \n\nTraining highlights",
    list2:[
      {
        heading:"Demanding careers",
        info:"Full-stack Java development training opens up your doors for various profiles like Java developer, Java architect, Java full-stack developer, Java integration developer, etc. "
      },
      {
        heading:" 1-on-1 mentorship",
        info:"When in doubt, you have access to your mentor until you achieve your career aspirations."
      },
      {
        heading:"Technical skills",
        info:" The purpose of this course is to increase students’ programming skills as per industry standards. After learning this course, students can crack HackerRank programming skills, badges, and skill certifications. Finally, students can also crack OCJP certification.  "
      },
      {
        heading:"Smart career",
        info:"Java gives rewarding career options as it continues to be considered the most popular programming language in mobile development, web development, full stack development, back-end development, cloud-based solutions, and many more."
      },
      {
        heading:"Salary",
        info:"A Java developer earns around 3 LPA to 6 LPA. Whereas, the average annual salary of a Java developer is 4.4 Lakhs."
      },
      {
        heading:"Job support",
        info:"Expert-led learning with our industry-proven curriculum helps you create your portfolio to accelerate your career in the tech industry."
      }
    ]
  };
  
  const middle3Data={
    color_title:" Tools you will learn with our",
    title:" Full Stack Java training in Vijayawada ",
    p:"Full-stack Java developer training takes you through collaborative concepts of front-end development, back-end development, and Java enterprise platform (J2EE), along with various database tools such as Oracle, SQL, Angular JS, etc. The course is divided into various sections, starting with Java, multi-threading, CRUD, Lambdas, Collections debugging, introduction to GIT, and the list goes on."
   
  };
  
  const middle4Data={
    color_title:"Java Projects ",
    title:" you will work on",
    p:"This training is conducted by industrial experts with more than 8 years of experience in handling live projects. Here are some of the Full stack java projects you will work:",
    list:[
        {
            heading:" Hospital Management System",
            info:"Create a React-based Hospital Management System for doctor specialization and patient appointments. \n<b>Learning Outcome:</b> Gain practical experience in building a web application with React, handling doctor and patient data, and developing efficient appointment booking systems for hospitals."
        },
        {
          heading:"Online Banking Application Description",
          info:" Develop an online banking platform for user registration, secure login, deposits, withdrawals, and fund transfers. \n<b>Learning Outcome:</b> Acquire essential skills in building secure web applications, implementing user authentication, and managing financial transactions, ensuring data integrity and security. "
        },
        {
          heading:" Deploying a React Application Description",
          info:" Explore deployment strategies (e.g., Netlify, Vercel, AWS) for hosting a React application. \n<b>Learning Outcome:</b> Learn how to take a React project from a local development environment and deploy it to a live server, understanding different deployment platforms and strategies, preparing for real-world application hosting. \nThere are many more hands on projects and case studies that you will be workin on under this course training in Vijayawada. "
        }
    ]
  };
  
  const middle5Data={
    color_title:"Java Course Certification in ",
    title:"  Vijayawada",
    p:"Upon completion of the Java course from Codegnan, you will receive an industry-accredited certificate that will be an add-on to your portfolio and help you secure high-paying jobs in Vijayawada. Additionally, you get a chance to win HackerRank badges on the Codegnan platform. "
  };
  
  const mentorsData={
    color_title:"Meet your",
    title:"java course trainers",
    mentors:[
      {
        name:"Kishor Kumar",
        description:" A Tech-expert with 20+years of industrial experience with 360 degrees expertise in Java Full Stack. Trained employees on latest frameworks as per the project requirements in JP Morgan Chase, TCS, HSBC, Covalense Digital, DBS Bank, Capgemini, DXC Technologies, Guardian Life, UST Global, Wipro, CSC India and many more.",
        image:"/members/Kishor-Kumar-java.webp"
      },
      {
        name:"Babu Bulla",
        description:" Meet our distinguished mentor, Babu Bulla, a seasoned professional with an illustrious background in the tech domain. Armed with an M.Tech and actively pursuing a Ph.D. in Intrusion Detection Systems using Machine Learning, he brings over 13 years of extensive teaching experience as a technical trainer. \nBabu Bulla’s expertise extends across a spectrum of programming languages, notably C, Java, object-oriented programming, and data structures in ‘C.’ His commitment to empowering the next generation of programmers is evident through the guidance of 700 students who have benefitted from his rich insights and mentorship. ",
        image:"/members/babu.webp"
      }
    ]
  }
  
  const course_pricing={
    color_title:"Full Stack Java Course Fees ",
    title:"  in Vijayawada  ",
    p:"The cost of overall Java training in Vijayawada with a job accelerated program is <b>JAVA Full Stack online and offline training with numerous placement drive opportunities at just ₹ 50,000 against the original price of <del>₹ 70,000</del>.</b> We understand the effort of students, thus, as a token of motivation, we provide a discount on a first come first serve basis. So, contact our experts and check whether you’re eligible for the discounted course fees."
  }
  
  const otherLocationsData = {
    locationTitle: "Our other full-stack Java training location(s) ",
    locations: [
      { name: "Banglore", link: "/banglore-training" },
      { name: "Hyderabad", link: "/hyderabad-training" }
    ],
    courseTitle: "codegnan's other training courses in Vijayawada",
    courses: [
      {name:"Python course training",link:"/python_training_in_hyderabad"},
      { name: "Data science ", link: "/data-sscience-training-in-hyderabad" },
      { name: "python full-stack training", link: "/python-full-stack-training-hyderabad" },
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
    title:" Stack course For? ",
    color_title:" Who is This Java Full ",
    list:[
      {
        
        title:" ",
        p: "Java continues to dominate the programming industry worldwide. Organizations are looking for Java programmers for their digital presence. By enrolling in Java full stack training, we take you from novice to expert Java programmer. \nJava training training in Vijayawada is for:  <br/><br/><ul>" +
        [
            "Final year students",
            "Fresh graduates",
            "Beginners who want to become Java professional",
            "IT Professionals",
            "Automation enthusiasts",
            "Software architects"
        ].map((item, index) => (
            "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
        )).join('') +
        "</ul>"
       
      },
      
    ]
  }
export default function Java_full_stack_training_in_vijayawada() {
    return (
        <div>
          <Helmet>
              <title>Java Full Stack Training Course In Vijayawada With Placement</title>
              <meta name="description" content="codegnan offers the best Java Full stack course training in Vijayawada placement assistance. Learn about the syllabus and fees today." />
          </Helmet>
            <Training_template head={headData} middle={middleData} middle2={middle2Data} middle3={middle3Data} middle4={middle4Data} middle5={middle5Data} mentor={mentorsData} coursep={course_pricing} other={otherLocationsData} map_details={map_address} train_opt={training_options}/>
      </div>
    );
  }