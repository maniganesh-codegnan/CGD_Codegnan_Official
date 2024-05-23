import Campus_temp from "./campuses_template";
import { Link } from "react-router-dom";
const headData = {
    title: "Codegnan Hyderabad",
    color_title:"IT training centre",
    p: "Codegnan’s IT training solutions in Hyderabad offers top rated IT and technical skills training courses and training programs. Our tech training program includes placement assistance with <a href='/' className='custom-link'>job acceleration program</a> (JAP) in Hyderabad.",
    language:"English",
    rating:" 2,198",
    formh:"Enquiry Form",
  };
  
  const map_address={
    color_title:"Visit codegnan’s Hyderabad ",
    title:" training centre",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7610.382525031249!2d78.388451!3d17.498381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91959592aba9%3A0x6bba1d480cb50bad!2sCodegnan%20Hyderabad%20-%20Python%2C%20Java%2C%20Data%20science%2C%20Machine%20learning%2C%20React%20JS%20training%20institute!5e0!3m2!1sen!2sin!4v1712923258063!5m2!1sen!2sin",
    email:"info@codegnan.com",
    phoneNumber:"+91 98887 48888",
    address:"Kothwal Madhava Reddy Plaza, Beside Indian Oil Petrol Bunk, JNTUH Metro Station, Nizampet X Roads, Hyderabad - 500072"
  }

  const middle2Data={
    color_title:"Our IT training programs",
    title:" in Hyderabad",
    p:"Our expert trainers offer tech courses and skill development programs that will help you get your first high-paying jobs. Check out our training programs in Hyderabad.",
    list2:[
      {
        heading:"Python course training",
        info:"<strong>Course duration</strong>: 1 month\n <strong>Course fees</strong>: ₹10,000\nWith 300 hours of instructor-led training, self-paced videos, exercises, and real-world projects, you'll master Python's fundamentals. \n Our industry-proven curriculum covers essential topics such as data types, conditional statements, web scraping, and more. \nGain hands-on experience through projects like Dynamic Website Scraping, Automated Email Sending, and Virtual Assistant development",
        name:" Enroll in Python classroom training in Hyderabad.",
        link:"/python_training_in_hyderabad"
      },
      {
        heading:"Java full stack course training",
        info:"<strong>Course duration</strong>: 100 days\n <strong>Course fees</strong>: ₹50,000\nAs the most popular programming language for over 50 years, Java has powered over 3 billion devices. \nOur comprehensive curriculum covers Java basics, J2EE, HTML, CSS, Angular JS, and more— which prepares you for one of the highest-paying roles in full-stack development. Gain practical experience with live projects, flexible schedules, 24/7 support, and expert tutors. ",
        name:"  Enroll in full stack Java course in Hyderabad",
        link:"/java-full-stack-training-in-hyderabad"
      },
      {
        heading:"Machine learning course training",
        info:"<strong>Course duration</strong>: 1 month\n <strong>Course fees</strong>: ₹10,000\nAs a leading IT training institute, we have a proven track record with 1.2k+ students successfully placed and trusted by 4k+ students across India. Our 60-hour certification covers machine learning algorithms, Python, and real-time projects, equipping you to build, evaluate, and deploy ML models in corporate settings. \nBenefit from the core curriculum by industry experts, online Python sessions, complete placement assistance, and firsthand training on live projects.",
        name:" Enroll in machine learning classroom training in Hyderabad",
        link:"/machine-learning-in-hyderabad"
      },
      {
        heading:" Data science course training",
        info:"<strong>Course duration</strong>: 6 month\n <strong>Course fees</strong>: ₹75,000\nGrow your career with codegnan's data science course, a 6-month training program, guided by experts, that includes hands-on projects and guaranteed job support. Rated 4.8/5 by 2,700+ students, we're a trusted choice in Hyderabad. Our course covers Python, data analysis, and machine learning, making you a skilled data scientist. ",
        name:" Enroll in data science classroom training in Hyderabad",
        link:"/data-science-in-hyderabad"
      },
      {
        heading:"Core java training course",
        info:"<strong>Course duration</strong>: 1 month\n <strong>Course fees</strong>: ₹10,000\nBecome a core Java expert with codegnan's 1-month onsite training program with live projects.",
        name:" Enroll in Core Java training course in Hyderabad.",
        link:"/java-training-in-hyderabad"
      }
      
    ]
};

const course_pricing={
    color_title:"Start your tech career",
    title:"in Hyderabad ",
    p:"Start and grow your tech career journey in Hyderabad, a hub of top tech companies like Google, Microsoft, Facebook, and more. Codegnan offers specialized training programs to prepare you for success in the tech field. Learn from industry experts, gain hands-on experience, and position yourself for opportunities with the leading names in tech. Join our Hyderabad training centre, where top-tier companies hire, and start your tech career with confidence."
  }
export default function Vij_campus(){
    return(
        <div>
            <Campus_temp head={headData} map_details={map_address} middle2={middle2Data} coursep={course_pricing}/>
        </div>
    );
}