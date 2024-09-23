import Training_template from "../Training_template";
import { Helmet } from 'react-helmet';
import Javafs_Hydrabad from '../../Internship/javafs-hyd';
import JavaFS_Hyd_Faq from '../../faqs/java_full_stack_Faq_Hyderabad';

const headData = {
  title: "Full Stack Java Training Course ",
  color_title: " In Hyderabad With Placement for 2023/24 passouts",
  p: "Full stack development is one of the highest-paying jobs even amongst the programming languages. Java Full stack, in particular over the past 50 years, is the most popular one as it has so far powered over 3 billion devices. \nSo, if you are planning to get a Java full-stack developer course in Hyderabad, codegnan has you covered. Why trust us? We trained more than 30,000 students worldwide and are rated 4.8 out of 5 by 2180+ students on Google. Plus, our job acceleration program ensures 100% job placement.",
  language: "English",
  duration: "100 Days",
  price: "50,000 ",
  rating: " 2,203",
  formh: "Become a full stack java developer",
  formtext: "Talk to our expert Java mentors and learn how our training programs in Hyderabad can help you become a Java developer and get a high-paying job.",
  no_of_hours: "300 HOURS INSTRUCTOR LED TRAINING"
};

const middleData = {
  title: "Java training course",
  color_title: " overview and key features",
  p: "By getting trained as a full-stack developer, you’ll be able to provide solutions for an entire design structure, including both front and back end. \nApart from being a comprehensive course with placement assurance, here are some highlights of the course:",
  list: [
    "Learn with Live Projects",
    "Choose Between Offline or Online Training",
    "24/7 Student Support",
    "Job and Interview Assistance Post Course Completion",
    "Flexible Schedule",
    "Expert Tutors"
  ]
};

const middle2Data = {
  color_title: "Career Growth With Java Training",
  title: "  Course in Hyderabad",
  p: "A Java full-stack training can help you establish your career as a full-stack developer. The average salary of a full stack developer in Hyderabad is around ₹ 8.5 LPA. However, it can range anywhere between ₹2.0 to ₹ 15.0 LPA depending on various factors. Therefore, needless to say, pay-wise, it is one of the well sought-after jobs. \nBut apart from that, here are some more reasons why a Java training course is a good career growth move. ",
  list2: [
    {
      heading: " Versatility in Software Development",
      info: "Java full-stack equips you with the skills to work on both front-end and back-end development, making you a well-rounded developer capable of creating entire web applications."
    },
    {
      heading: " High Demand",
      info: "The job market highly values full-stack developers proficient in Java, as they are capable of handling various aspects of web development."
    },
    {
      heading: " Diverse Career Opportunities",
      info: "Completing a Java full-stack course broadens your job prospects, including roles like web developer, software engineer, or even technical lead, offering diverse and rewarding career paths."
    }
   
  ]
};


const middle3Data = {
  color_title: " Technologies and Frameworks you will learn with  ",
  title: " Our Full Stack Java training in Hyderabad",
  p: "The quality of your learning highly depends on what tools you have been able to master. Here are some of the languages, tools, and platforms you will be trained on throughout the course.",
  list: [
    {
      heading: " My SQL ",
      info: "It's a language that helps you communicate with databases, allowing you to store, retrieve, and manage data efficiently."
    },
    {
      heading: " Core Java",
      info: "The backbone of Java development, teaching you the essential coding skills needed for building applications. "
    },
    {
      heading: " J2EE",
      info: "Think of it as a toolbox for creating enterprise-level Java applications to build robust and scalable systems."
    },
    {
      heading: " HTML and CSS",
      info: " These are like the paint and canvas for web development. HTML structures your content and CSS styles it to create beautiful web pages."
    }

  ]
};

const middle4Data = {
  color_title: "Full Stack Java Projects ",
  title: " You will work on ",
  p: "To apply the learnings codegnan gives you four live project options to work on. These projects not only help you understand where you stand but also add weight to your portfolio. \nHere’s a sneak peek of some of the hands on project you will work: ",
  list: [
    {
      heading: "A Healthline Assistance Web Application",
      info: "In this project, you will learn to set up an app that can do authentication and authorization, and handle relevant services related to patient portfolio, doctors, hospitals, medical stores, and ambulances. "
    },
    {
      heading: "Online Medicine Shopping System",
      info: "You will learn how to integrate features like computerized data storage, automatic updates of warehouse stock reports, payment gateway, and so on. "
    },
    {
      heading: "Online Auction Application",
      info: "Develop a web-based auction application that allows users to sell something in auctions. Learn to add the feature of live bidding on products. "
    },
    {
      heading: " Online Banking Application",
      info: "Build an online banking app that performs day to day banking activities. Like, registering new users, and helping them make deposits, withdrawals and fund transfers. "
    }
  ]
};



const middle5Data = {
  color_title: "Java Course Certification ",
  title: " in Hyderabad",
  p: "Wondering how will you prove your expertise when interviewing? Then don’t worry, as our Java Full Stack course in Hyderabad comes with a certification. \nAfter successfully completing the course; you will receive an authorized certification of compilation from codegnan to prove your authenticity.",

};


const mentorsData = {
  color_title: "Meet your",
  title: " Full Stack Java course Trainers ",
  mentors: [
    {
      name: "Kishor Kumar",
      description: " A Tech-expert with 20+years of industrial experience with 360 degrees expertise in Java Full Stack. Trained employees on latest frameworks as per the project requirements in JP Morgan Chase, TCS, HSBC, Covalense Digital, DBS Bank, Capgemini, DXC Technologies, Guardian Life, UST Global, Wipro, CSC India and many more.  ",
      image: "/members/Kishor-Kumar-java.webp"
    }
  ]
}

const course_pricing = {
  color_title: "Full Stack Java Course Fees ",
  title: " in Hyderabad— Get 30% off ",
  p: "The price of codegnan’s <b> JAVA Full Stack online and offline training with numerous placement drive opportunities at just ₹ 50,000 against the original price of <del> ₹ 70,000</del>.</b>  Despite already being a steal deal, we must mention that apart from the training, this course also offers assured job placement assistance and lifetime access to learning materials and updates. Which increases the value of the training manyfold. \nHowever, we do understand that budget can be a constraint for a few. So for them, we can arrange up to a 30% discount, dropping the effective price to ₹50,000 only (only for limited students and time)."
}

const otherLocationsData = {
  locationTitle: "Our other full-stack Java training location(s)",
  locations: [
    { name: "Banglore", link: "/banglore-training" },
    { name: "Vijayawada", link: "/vijayawada-training" }
  ],
  courseTitle: "codegnan's other training courses in Hyderabad",
  courses: [
    { name: "Core Java", link: "/java-training-in-hyderabad" },
    { name: "Data science ", link: "/data-sscience-training-in-hyderabad" },
    { name: "Java Full-stack training course", link: "/full-stack-java-training-hyderabad" },
    { name: "Python Full-stack training course", link: "/full-stack-python-training-hyderabad" },
    { name: "Machine learning training course", link: "/machine-learning-training-hyderabad" }

  ]
};

const map_address = {
  mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7610.382525031249!2d78.388451!3d17.498381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91959592aba9%3A0x6bba1d480cb50bad!2sCodegnan%20Hyderabad%20-%20Python%2C%20Java%2C%20Data%20science%2C%20Machine%20learning%2C%20React%20JS%20training%20institute!5e0!3m2!1sen!2sin!4v1712923258063!5m2!1sen!2sin",
  email: "info@codegnan.com",
  phoneNumber: "+91 98887 48888",
  address: "Kothwal Madhava Reddy Plaza, Beside Indian Oil Petrol Bunk, JNTUH Metro Station, Nizampet X Roads, Hyderabad - 500072"
}

const training_options = {
  title: "  Course For? ",
  color_title: "Who is This Java Full Stack   ",
  p: "If you are skeptical about whether this course is the right fit for you or not, let’s clarify your doubts. According to codegnan experts, here are the ideal audience profiles for this training.",
  list: [
    {
      title: "College Students/Fresh Graduates ",
      p: " For those starting their career journey, a Java full stack course provides a solid foundation and boosts career. It can help land entry-level positions as web developers, giving them a head start in the tech industry."
    },
    {
      title: "Beginner Developers",
      p: "If you're new to programming, this course is a great stepping stone. It equips you with comprehensive skills, making it easier to secure your first job as a developer."
    },
    {
      title: "IT Professionals ",
      p: "For those in IT looking to enhance their skill set, a Java full-stack course offers the opportunity to pivot into web development roles, expanding career prospects within the tech industry."
    },
    {
      title: "Anyone Interested in Java Full Stack: ",
      p: " This course also welcomes enthusiasts with a passion for web development. "
    }
  ]
}
const curriculumData = <Javafs_Hydrabad /> 

export default function Java_full_stack_training_in_hyderabad() {
  return (
    <div>
        <Helmet>
          <title>#1 Full Stack Java Training Course In Hyderabad With Placement</title>
          <meta name="description" content="codegnan offers full-stack Java developer training in Hyderabad with job placement support. Learn about the syllabus and fees today." />
        </Helmet>
      <Training_template head={headData} middle={middleData} middle2={middle2Data} middle3={middle3Data} curriculumData={curriculumData} middle4={middle4Data} middle5={middle5Data} mentor={mentorsData} coursep={course_pricing} other={otherLocationsData} map_details={map_address} train_opt={training_options} />
      {/* <Javafs_Hydrabad/> */}
      <JavaFS_Hyd_Faq/>
    </div>
  );
}