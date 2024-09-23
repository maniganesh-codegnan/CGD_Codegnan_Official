import Training_template from "./Training_template";
import { Helmet } from 'react-helmet';
import Data_Structure from '../Internship/data-structures';
import Data_structure_Faqs from '../faqs/data-structures-curriculum';

const headData = {
  title: "Data Structures and AlgorithmsTraining ",
  color_title:"Course in Vijayawada",
  p: "Data structures and algorithms are the foundation of computer science. Whether you are trying to accomplish basic tasks like searching, sorting, and graph traversals or more advanced concepts, you have to have knowledge of these. \nIf you are looking for a comprehensive C and Data Structures course in Vijayawada, you have come to the right place.",
  language:"English",
  duration:"3 Month",
  price: "30,000 ",
  rating:" 2,203",
  formh:"Become a Data Structures and Algorithms developer",
  formtext:"Talk to our expert Data Structures and Algorithms  mentors and learn how our training programs in Vijayawada can help you become a Data structures and algorithms  developer and get a high-paying job.",
  no_of_hours:"50 DAYS INSTRUCTOR LED TRAINING"
};

const middleData = {
  title: "Data Structure course ",
  color_title:" overview in Vijayawada",
  p: "As mentioned earlier, data sources and algorithms are the fundamentals of data science. Whether you plan to become a programmer, innovate scalable solutions, or open better scopes in your coding job, you need to have an understanding of these topics. \nThis three-month-long data structure course in Vijayawada is designed to give you hands-on learning of basic programming through which you’ll be able to solve real-world problems. \n\nHere’s the course at a glance for you.",
  list: [

      " Duration: three months",
      " Mode of teaching: In-person (offline learning)",
      " Covers basics (stacks, queues, trees, etc.) to advanced topics (dynamic programming and graph theory).",
      " Practice assignments after every chapter to test your clarity.",
      " Free doubt-clearing classes.",
      " Live projects to improve your experience and resume."
  ]
};

const middle2Data={
  color_title:"Career Scope for Data Structures Jobs",
  title:" in Vijayawada",
  p:"In case you are skeptical about how a data structure course will benefit your career, here’s your answer. Knowing data structures and algorithms can help you land jobs in the role of data scientist, and here are some benefits of it. ",
  list2:[
    {
      heading:"In-demand job",
      info:"Data science-related jobs are considered to be highly sought-after. Most companies these days believe in making data-driven decisions, for which data scientists are crucial."
    },
    {
      heading:" Higher than average salary",
      info:"Since the demand for data scientists is higher than the available candidates, the pay for the data scientist role is higher than average.  After completing <b>data structures and algorithms salary</b> for beginners can be anywhere between ₹ 3.6 to ₹25 LPA."
    },
    {
      heading:"Great scope of improvement",
      info:"Data scientists can move into leadership roles and easily climb to the top of the corporate ladder."
    },
    {
      heading:"Variety in roles",
      info:"There are multiple niched-down job roles under the term data scientist. For example, lead data scientist, decision scientist, data analyst, data architect, business intelligence analyst and many more."
    }
  ]
};

const middle3Data={
  color_title:" Data Structures and Algorithms projects",
  title:" you will work on ",
  p:"Codegnan is all about practical learning and implementation. This is why, apart from the live project, you get assignments to work on for each of the modules. \nAs for the live project, you will be working on a banking management system that uses functionalities like menu(), new acc(), view list(), and so on, which will help you get real-life working experience.",

};

const middle4Data={
  color_title:"Who should take this",
  title:" Data Structures Training in Vijayawada?",
  p:"If you are still in a dilemma about whether you are the right fit for this course or not, then this should answer your query. The course is suitable for:  <br/><br/><ul>" +
        [
           " Computer science students",
           " Software developers",
           " Web developers",
           " Game developers",
           " Data scientists and analysts",
           " System administrators",
           " Algorithm enthusiasts",
           " Anyone interested in programming"
        ].map((item, index) => (
            "<li key=" + index + " style='margin-left: 150px;'>" + item + "</li>"
        )).join('') +
        "</ul>"

 
};

const middle5Data={
  color_title:"Get Data Structures course",
  title:" Certification in Vijayawada",
  p:"If you are looking to take a data structure course that provides certification and post-course placement support, then codegnan has brought everything you want and more.  \nThe course teaches you the basics of data structures and algorithms, so it is best suited for beginners who are trying to enter the field of data science. \nThe certification is an added bonus that’ll help you prove your merit while applying for data science jobs."
};

const mentorsData={
  color_title:"Meet your",
  title:" Data Structures and Algorithms course trainer",
  mentors:[
    {
      name:"Babu Bulla",
      description:" Meet our distinguished mentor, Babu Bulla, a seasoned professional with an illustrious background in the tech domain. Armed with an M.Tech and actively pursuing a Ph.D. in Intrusion Detection Systems using Machine Learning, he brings over 13 years of extensive teaching experience as a technical trainer. \nBabu Bulla’s expertise extends across a spectrum of programming languages, notably C, Java, object-oriented programming, and data structures in ‘C.’ His commitment to empowering the next generation of programmers is evident through the guidance of 700 students who have benefitted from his rich insights and mentorship. ",
      image:"/members/babu.webp"
    }
  ]
}

const course_pricing={
  color_title:"Data Structures and Algorithm training",
  title:" fees in Vijayawada",
  p:"The cost of data structures and algorithm training fees in Vijaywada is ₹ 30,000 for both online and offline courses. Which is very lucrative if you look at the value you are getting out of it. \nA good Data structures and algorithm course in India with lifelong resource support and job assistance can cost you lakhs. Whereas you get the same for just a fraction of the price. \nHowever, if it still seems out of budget, you can contact the helpline and check your eligibility for up to a 50% discount."
}

const otherLocationsData = {
  locationTitle: "Our other Data Structures and Algorithm training location(s)",
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
  mapSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1352.4853698586353!2d80.64656358459165!3d16.50557299096045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb51a430ffad%3A0xe6ed5ede725b304b!2sCodegnan%20IT%20Solutions%3A%20Your%20Best%20Training%20Institute%20for%20Software%20Courses!5e0!3m2!1sen!2sin!4v1712558461347!5m2!1sen!2sin",
  email:"info@codegnan.com",
  phoneNumber:"+91 98887 48888",
  address:"40-5-19/16, Prasad Naidu Complex, P.B.Siddhartha Busstop, Moghalrajpuram, Vijayawada, Andhra Pradesh 520010"
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

const curriculumData = <Data_Structure />
export default function Data_structures_and_algorithms_training_in_vijayawada() {
  return (
    <div>
      <Helmet>
          <title>#1 Data Structures and Algorithms Course Training in Vijayawada</title>
          <meta name="description" content="codegnan offers the best data structure algorithms training in Vijayawada with lifetime student support. Learn about the syllabus and fees." />
      </Helmet>
      <Training_template head={headData} middle={middleData} middle2={middle2Data} middle3={middle3Data} curriculumData={curriculumData} middle4={middle4Data} middle5={middle5Data} mentor={mentorsData} coursep={course_pricing} other={otherLocationsData} map_details={map_address} train_opt={training_options}/>
      <Data_Structure/>
      <Data_structure_Faqs/>
    </div>
  );
}

