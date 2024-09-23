import Training_template from "./Training_template";
import { Helmet } from 'react-helmet';
import C_program from '../Internship/c-programming';
import C_programming_Faqs from '../faqs/c-programming-faqs';

const headData = {
  title: "Best C Programming Language Course ",
  color_title:" Training in Vijayawada",
  p: "Codegnan offers C programming language training in Vijayawada, a 1-month beginner-friendly course. It covers fundamentals such as data types, control structures, arrays, functions, pointers, and file handling. \nIt includes hands-on coding, live project experience, certification, job assistance, and flexible online or offline learning options.",
  language:"English",
  duration:"1 Month",
  price: "5,000 ",
  rating:" 2,198",
  formh:"Become a C Programming developer",
  formtext:"Talk to our expert C Programming mentors and learn how our training programs in Vijayawada can help you become a C Programming developer and get a high-paying job.",
  no_of_hours:"50 DAYS INSTRUCTOR LED TRAINING"
};

const middleData = {
  title: "Overview and Key Features of ",
  color_title:"C Language Training in Vijayawada",
  p: "This C language training in Vijayawada is a beginner-friendly course that anyone can enrol on. You don’t have to have any prior knowledge of coding \nBesides that here are some factors that make this course worth your money.",
  list: [
    "Choose Between Offline or Online Classes",
    "Learn from IITans and Industry Experts",
    "Placement Assistance",
    "Language: English",
    "Opportunity to bag 5-star badge in HackerRank",
    "Work on Live Projects",
    "Receive Authorized Certification"
  ]
};

const middle2Data={
  color_title:"Career Scope and Job Opportunities",
  title:"  in Vijayawada for C Language Programmers",
  p:"The average salary of a C language programmer in Vijayawada is around ₹5.4 LPA. However, depending on various factors, it can range anywhere between 1.8 to ₹8.0 LPA. But besides the lucrative pay, C programming can also open doors for a range of job opportunities, like-",
  list2:[
    {
      heading:"Software Developer Intern",
      info:"Many companies offer internships for those with basic programming skills. If you are a fresh graduate with C programming knowledge, this can help you gain practical experience while working on real projects, and you can work your way up from there. "
    },
    {
      heading:" Quality Assurance Tester ",
      info:"Entry-level QA roles involve testing software and ensuring it functions correctly. C language knowledge can be valuable for creating test scripts and understanding system-level issues."
    },
    {
      heading:"Technical Support Specialist",
      info:"Basic programming skills can help in troubleshooting software and providing technical support to end-users."
    },
    {
      heading:"Embedded Systems Intern",
      info:"Basic programming knowledge can be an advantage in data analysis, where data manipulation and cleaning are essential skills."
    },
    {
      heading:"Data Analyst Intern",
      info:" Some industries, like electronics or automotive, may hire interns with C language skills to work on embedded systems development."
    },
    {
      heading:"System Administrator Assistant",
      info:" Understanding C basics can help in managing and maintaining computer systems, especially in roles related to Linux and Unix environments."
    },
    {
      heading:"Freelance Programme",
      info:" As a fresh graduate, you can explore freelance opportunities to build simple software or offer programming services to clients."
    }
  ]

};

const middle3Data={
  color_title:" C Language Project",
  title:"you will work on  ",
  p:"Yes, even in such a short span, codegnan won’t let you go away without testing your learnings on a live project.  For the C language course in Vijayawada, the project that you’ll be working on is building a banking management system. \nUnder this project, you’ll learn how you can add functionalities like menu(), new acc(), view list(), edit(), and transact() to build a fully functioning banking management system.",

};

const middle4Data={
  color_title:"Who Should Take this ",
  title:"C Language Training? ",
  p:"You might feel hesitant if this course is the right fit for you or not. Then, don’t worry, let us break that down for you. Here are our audience profiles for better understanding. ",
  list:[
    {
      heading:"Any Graduate",
      info:"Learning C can provide a fundamental understanding of computer programming, enabling you to explore various tech-related careers and potentially kickstart a new journey in technology. Plus, since there are no requirements of knowing coding any graduate can pursue this course as long as they are willing to learn."
    },
    {
      heading:"Computer science engineers who are looking to shift roles",
      info:"Acquiring C programming skills can open doors to diverse roles such as system administrators, cybersecurity specialists, or software quality assurance, enhancing career flexibility. So if you have proficiency in other programming languages and want to switch, this course will be of use to you."
    },
    {
      heading:"Beginner developers/programmers",
      info:" C is an excellent starting point, as it lays a strong foundation for coding principles, making it easier to learn other programming languages and broadening job prospects. "
    },
    {
      heading:"IT professionals",
      info:" Even if you work a no-code IT job understanding C can help you troubleshoot and maintain software and systems more effectively, boosting your problem-solving abilities and career advancement. "
    },
    {
      heading:"Anybody who takes an interest in the C Language",
      info:"For enthusiasts, C offers a deep understanding of how computers work, making it an enjoyable and educational hobby with the potential to lead to personal coding projects or even career changes. "
    }
  ]
};

const middle5Data={
  color_title:"Get C Programming Course ",
  title:" Completion Certification in Vijayawada",
  p:"While there are hundreds if not thousands of C programming courses available online, they might not turn out to be the most credible ones. They can be good for learning a thing or two on your own, but neither are organized nor authorized. \nAt codegnan you not only get organized learning from experts but you also get an authorised certification to prove your expertise in C programming language."
};

const mentorsData={
  color_title:"Meet your",
  title:" C Programming Course Trainer",
  mentors:[
    {
      name:"Babu Bulla",
      description:"Meet our distinguished mentor, Babu Bulla, a seasoned professional with an illustrious background in the tech domain. Armed with an M.Tech and actively pursuing a Ph.D. in Intrusion Detection Systems using Machine Learning, he brings over 13 years of extensive teaching experience as a technical trainer.\nBabu Bulla’s expertise extends across a spectrum of programming languages, notably C, Java, object-oriented programming, and data structures in ‘C.’ His commitment to empowering the next generation of programmers is evident through the guidance of 700 students who have benefitted from his rich insights and mentorship.",
      image:"/members/babu.webp"
    }
  ]
}

const course_pricing={
  color_title:"C Language Training Course Fees in Vijayawada ",
  title:"— Get 30% off ",
  p:"<span>In India, <b>the price of a C language training course can vary anywhere between ₹4000 to ₹60,000.</b> And it is usually on the higher end if it is offline, comes with authorised certification, gives you lifetime access to the learning material and most importantly, has post-course job placement assistance.  \nBut at codegnan <b>you get all that and more at just ₹5000 for both online and offline classes.</b> Shocked? Then wait for the offer price. \nEligible people can even <b> avail of a 30% discount</b> and get the course at only ₹3500. </span>"
}

const otherLocationsData = {
  locationTitle: "Our other C Language training location(s)",
  locations: [
    { name: "Vijayawada", link: "/vijayawada-training" }
  ],
  courseTitle: "codegnan's other training courses in Hyderabad",
  courses: [
    { name: "Python full-stack course", link: "/python-full-stack-course-hyderabad" },
    { name: "Core Java training", link: "/core-java-training-hyderabad" },
    { name: "Java Full-stack training course", link: "/full-stack-java-training-hyderabad" },
    { name: "Java Full-stack training course", link: "/full-stack-java-training-hyderabad" },
    { name: "Java Full-stack training course", link: "/full-stack-java-training-hyderabad" },
    { name: "Java Full-stack training course", link: "/full-stack-java-training-hyderabad" },
    
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
  // title:"options in codegnan",
  // color_title:"Python training ",
  // list:[
  //   {
  //     title:"Python classroom training in Bangalore",
  //     p:"Our Python classroom training in Bangalore provides hands-on learning, interactive sessions, and interesting hands-on project experiences. Join our next batch in Bangalore."
  //   },
  //   {
  //     title:"Online Python course training",
  //     p:"Experience the flexibility of learning Python from anywhere with our live online training. Enjoy interactive sessions, real-time doubt assistance, and a dynamic virtual classroom. Learn from our Python expert trainers with one-on-one support."
  //   }
  // ]
}

const curriculumData = <C_program />
export default function C_programming_course_training_in_vijayawada() {
  return (
    <div>
       <Helmet>
          <title>Best C Programming Language Course Training in Vijayawada</title>
          <meta name="description" content="codegnan offers C programming course training in Vijayawada with 24/7 lifetime student support. Find the course syllabus and fees today." />
      </Helmet>
      <Training_template head={headData} middle={middleData} middle2={middle2Data} middle3={middle3Data} curriculumData={curriculumData} middle4={middle4Data} middle5={middle5Data} mentor={mentorsData} coursep={course_pricing} other={otherLocationsData} map_details={map_address} train_opt={training_options}/>
      {/* <C_program/> */}
      <C_programming_Faqs/>
    </div>
  );
}

