
import Training_template from "../Training_template";
import { Helmet } from 'react-helmet';
import JavaCurriculumBanglore from '../../Internship/java-bangalore';
import Java_Faq_bangalore from "../../faqs/java_curriculum";

const headData = {
  title: "Best Core Java Training",
  color_title:"Course in Bangalore",
  p: "Are you looking for a Java training institute in Bangalore that can help you learn the basics of Java in the shortest time? Then search no more, as codegnan has curated the perfect course for you. In this one-month course, get hands-on training on fundamental topics of Java and learn how to build apps. \nSo what are you waiting for, enrol today!",
  language:"English",
  duration:"1 Month",
  price: "10,000 ",
  rating:" 2,281",
  formh:"Become a JAVA developer",
  formtext:"Talk to our expert JAVA mentors and learn how our training programs in Bangalore can help you become a  JAVA developer and get a high-paying job.",
  no_of_hours:"50 DAYS INSTRUCTOR LED TRAINING"
};

const middleData = {
  title: "Core Java ",
  color_title:"Course Overview",
  p: "This all-inclusive one-month Java-basics course by codegnan is suitable for anyone who wants to start their coding journey. In this course, you learn from the basics of Java to concepts like navigating Eclipse IDE and more advanced topics like Object-Oriented Programming through hands-on projects.\n Here are some exciting features of our course:",
  list: [
   "Flexible Learning: Opt for either offline or online learning modes.",
   "Expert Guidance: Learn directly from industry professionals.",
   "Real-world Projects: Apply your skills to live projects, building a robust portfolio.",
   "Certification: Upon successful completion, receive a codegnan-affiliated certification.",
   "Lifetime Access: Enjoy lifelong access to learning materials and updates.",
   "All this and more at an incredibly affordable price of just ₹7,999!"
  ]
};

const middle2Data={
  color_title:"Java Developer Career",
  title:" Opportunities in Bangalore",
  p:"Getting Java training can open doors for some lucrative career opportunities, such as Java developer. Java developers earn some of the highest salaries, even as a fresher. \nFor example, the average annual salary of a Java developer in Bangalore is around ₹6.5 LPA, with an estimated take-home salary of ₹ 31,138 – ₹ 32,435/month. \nBut if you want to know about the other benefits of taking a Java training, here they are.",
  list2:[
    {
      heading:"Super Simple to Learn",
      info:"Java is known for its simplicity and readability, making it an excellent choice for beginners. Its syntax closely resembles English, ensuring an accessible and straightforward learning journey for a seamless experience."
    },
    {
      heading:" Use Java Free of Cost",
      info:"Java is an open-source programming language, so you need not worry about financial constraints. Once you understand how to use it, there are no additional costs involved, making it an economical choice for beginners. "
    },
    {
      heading:" Adaptability ",
      info:"From crafting mobile apps to handling enterprise-level projects, Java's versatility opens doors to a broad spectrum of applications. Learning Java skills enhances your adaptability in the ever-evolving software development industry."
    },
    {
      heading:"Java is Universal",
      info:"Java’s USP is that it is a \"write once, run anywhere\" programming language. This allows you to create applications compatible with any device, regardless of the operating system. This cross-platform capability becomes a valuable asset in your skill set."
    },
    {
      heading:"Join one of the Largest Communities:",
      info:"As one of the world's most popular programming languages, Java connects you to a huge community of developers. You can utilise their knowledge and support within this dynamic network."
    }
  ]
};

const middle3Data={
  color_title:" Java Developer Projects",
  title:" you will work on ",
  p:"In this Java training by codegnan, our aim is to teach you through practical learning. Therefore, you are to work on multiple projects throughout the course. \nHere are some project topics covered in the course.\n <ul>" +
  [
      "<strong>Hello Java world</strong>",
      "<strong>Operators playground</strong>",
      "<strong>OOPs Fundamentals</strong>",
      "<strong>Inheritance showcase</strong>",
      "<strong>Interface exploration</strong>",
      "<strong>Java libraries showcase,  etc.</strong>"
     
  ].map((item, index) => (
    `<li key=${index} style='margin-left: 100px;'>${item}<i className="fa-solid fa-check-double check_double"></i></li>`
  )).join('') +
  "</ul>",
  
};

const middle4Data={
  color_title:"Who is this Java Training ",
  title:" Classes for?",
  p:"Knowledge of programming language is becoming more of a mainstream skill as we speak, making this training ideal for most. But here are some people who are highly likely to benefit from this training. ",
  list:[
    {
      heading:"College Graduates ",
      info:"If you are a fresh college graduate in any discipline, this training can be a stepping stone for you to enter the world of coding. \nIt provides hands-on experience with Java development and covers essential concepts, from basic syntax to advanced topics like multithreading and exception handling. \nThis will help you prepare for entry-level positions like Java developer, web developer, mobile app developer, QA engineer, etc  ",
    },
    {
      heading:" Beginners in Java",
      info:"If you’re already into programming but want to switch to Java because of the scope it has, this comprehensive training will be the best for you. \nIt covers the fundamentals of Java programming in a well-structured manner. Starting with the basics and progressing to advanced OOPs concepts and multithreading.  ",
    },
    {
      heading:" IT Professionals Planning a Career Switch",
      info:"For IT professionals, learning Java can help get the upper hand and open the door to new opportunities. \nWith topics like object-oriented programming, multithreading, and exception handling, you will be able to manage a lot more diverse projects. This will help you progress your ranking and career. ",
    },
    {
      heading:"Anyone Interested in Automation",
      info:"Java certification is one of the most valued credentials you can have if you are planning to become an automation tester or any other role in the field. \nIn this certified training, you learn all the necessary components required for scripting, testing, or process automation.",
    }
  ]
};

const middle5Data={
  color_title:"Java Course Certification ",
  title:"  In Bangalore",
  p:"There are ample free courses that you can find online on Java, but if you are looking for something that is comprehensive, live and comes with certification, codegnan will be the right fit for you. \n Upon completing this one-month Java training with us, you’ll receive a certification to prove your credibility. Along with that, we often arrange hackathons and give our students our Hackerrank platform to participate in different challenges and earn badges. "
};

const mentorsData={
  color_title:"Meet your",
  title:"  Full Stack Java Course Trainers ",
  mentors:[
    {
      name:"Gamana",
      description:" A Tech-enthusiast and orator with 6+years of experience in Java Full Stack and also scenarist, designed various Technical courses related to Web Technologies & Networks. Trained over 10000+ students on JFS , and provided corporate Training as per the project requirements in DXC and NCS for Singapore candidates. Impart skill oriented short duration training for rural youths to help them in developing their technical and professional skills. ",
      image:"/members/gamana-java.webp"
    }
  ]
}

const course_pricing={
  color_title:"Java Course Fees",
  title:" in Bangalore ",
  p:"Programming is such a popular niche that you can expect to pay a hefty amount for a certified course from a reputed institution. However, codegnan’s ideology is to provide the best education at an affordable price. \nTherefore the regular price of our one-month Java training (both online and offline) is only <strong>₹10,000</strong>. However, if you enrol on time, you can get it at a discounted price of only <strong> ₹7,999 </strong> (for limited slots only)."
}

const otherLocationsData = {
  locationTitle: "Our other Java training location(s)",
  locations: [
    { name: "Vijayawada", link: "/vijayawada-training" },
    { name: "Hyderabad", link: "/hyderabad-training" }
  ],
  courseTitle: "codegnan's other training courses in  Banglore",
  courses: [
    { name: "Python full-stack course", link: "/python-full-stack-course-hyderabad" },
    { name: "Core Java training", link: "/core-java-training-hyderabad" },
    { name: "Java Full-stack training course", link: "/full-stack-java-training-hyderabad" },
    {name:"Phyton training", link:"/python-training-in-banglore"}
    
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
  title:"Options",
  color_title:"Core Java Training",
  p:"Codegnan’s Java training is conducted in both in-classroom and online modes, giving you the flexibility to choose. Our classroom locations are in Bangalore, Vijayawada and Hyderabad.",
  list:[
    {
      title:"Java Classroom Training in Bangalore (offline)",
      p:"Our classrooms are well equipped with all the gadgets and Java development equipment you would need. \nOur Bangalore branch location: #951, 16th Main, BTM 2nd Stage, Bengaluru, Karnataka- 560076."
    },
    {
      title:"Online Java Development Course Training",
      p:"If you live far from our three classroom locations, worry not; you can avail of our online training mode. Unlike others, our online classes are live and instructor-led. \nThere are plenty of time slots for you to choose from. You are also provided with every resource required for you to complete the training remotely."
    }
  ]
}
const curriculumData = <JavaCurriculumBanglore/> 
export default function Core_java_training_course_in_Bangalore() {
  return (
    <div>
        <Helmet>
        <title>⭐ Best Java Training in Bangalore (#1 Institute)</title>
        <meta name="description" content="codegnan offers a full-stack Python developer course in Vijayawada with practical projects and live classes. Learn about syllabus and fees." />
      </Helmet>
      <Training_template head={headData} middle={middleData} middle2={middle2Data} middle3={middle3Data} curriculumData={curriculumData} middle4={middle4Data} middle5={middle5Data} mentor={mentorsData} coursep={course_pricing} other={otherLocationsData} map_details={map_address} train_opt={training_options}/>
    
      {/* <JavaCurriculumBanglore /> */}
      <Java_Faq_bangalore />
    </div>
  );
}

