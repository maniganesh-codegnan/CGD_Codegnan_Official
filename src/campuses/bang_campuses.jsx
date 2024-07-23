import Campus_temp from "./campuses_template";
import { Link } from "react-router-dom";


import { Helmet } from 'react-helmet';

const headData = {
    title: "Python, Java, Software Testing training institute in Bangalore,",
    color_title:" Codegnan Destination Technologies",
    p: "Codegnan’s IT training centre in Bangalore offers IT training courses such as software testing, full-stack Python, and Java. Our tech training program includes placement assistance with the <a href='/' className='custom-link'>job acceleration program</a> (JAP) in Bangalore.",
    language:"English",
    rating:" 2,198",
    formh:"Enquiry Form",
  };
  
  const map_address={
    color_title:"Visit codegnan’s Bangalore ",
    title:" training centre",
    mapSrc:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d486.11345582790966!2d77.610212!3d12.913657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fd049571b5%3A0xd3fa32bf2babcb54!2sDestination%20Technologies!5e0!3m2!1sen!2sin!4v1712925089649!5m2!1sen!2sin",
    email:"info@codegnan.com",
    phoneNumber:"+91 98887 38888",
    address:"#951, 16th Main, BTM 2nd Stage, Bengaluru, Karnataka, 560076"
  }

  const middle2Data={
    color_title:"Our IT training programs",
    title:" in Bangalore",
    p:"Our expert trainers offer tech courses and skill development programs that will help you get your first high-paying jobs. Check out our training programs in Bangalore.",
    list2:[
      {
        heading:"Java full stack course training in Bangalore",
        info:"<strong>Course duration</strong>: 100 Days\n <strong>Course fees</strong>: ₹50,000\nMaster Java full stack development with Codegnan's comprehensive training in Bangalore. Led by experienced mentors, our course covers the entire spectrum of Java development, from basics to advanced concepts. Enjoy 300 hours of instructor-led training, real-world projects, and flexible schedules. Receive placement assistance and an industry-recognized certification. Elevate your career with in-demand skills. Join our high-rated program to become a proficient Java developer. ",
        name:" Enroll in full stack Java course in Bangalore",
        link:"/java-full-stack-training-in-banglore"
      },
      {
        heading:"Core Java training in Bangalore",
        info:"<strong>Course duration</strong>: 1 Month\n <strong>Course fees</strong>: ₹10,000\nExplore the world of Java programming with Codegnan's Core Java training course in Bangalore. Priced at an affordable ₹10,000, this one-month program is designed to provide a comprehensive understanding of Java fundamentals, Eclipse IDE navigation, and advanced Object-Oriented Programming concepts. Through hands-on projects, participants can choose between flexible online and offline learning modes, guided by industry professionals ",
        name:"  Enroll in core Java training classes in Bangalore",
        link:"/java-training-in-banglore"
      },
      {
        heading:" Python course in Bangalore",
        info:"<strong>Course duration</strong>: 1 month\n <strong>Course fees</strong>: ₹8,000\nLearn Python easily with Codegnan's one-month course in Bangalore at just ₹8,000. Gain hands-on skills, expert guidance, and a Codegnan certificate.",
        name:" Enroll in Python training in Bangalore",
        link:"/python_training_in_banglore"
      },
      {
        heading:" Full-stack Python course in Bangalore",
        info:"<strong>Course duration</strong>: 1 month\n <strong>Course fees</strong>: ₹10,000\nCodegnan's Python Full Stack course offers 50 days of comprehensive training covering Python, MySQL, Flask, CSS, and AWS Deployment. Learn from industry experts, work on 4 live projects, and receive a recognized certification. ",
        name:" Enroll in full-stack Python developer course in Bangalore",
        link:"/python-full-stack-developer-in-banglore"
      },
      {
        heading:"Software testing training course in Bangalore",
        info:"<strong>Course duration</strong>: 100 days\n <strong>Course fees</strong>: ₹50,000\nGain essential software testing skills through our 100-day course in Bangalore. Learn manual testing, Selenium, Java, HTML, CSS from experts with hands-on live projects. \nGet authorized certification, flexible scheduling, lifetime access, 24/7 support and 100% job assistance..",
        name:"Enroll in software testing training in Bangalore",
        link:"/Software-testing-in-banglore"
      }
      
    ]
};

const course_pricing={
    color_title:"Start your tech career",
    title:"in Hyderabad ",
    p:"To ensure providing the best IT classes and training programs codegnan have mentors and trainers from the alumni of world’s tech companies and universities such as IIT Delhi, Stanford University IIT Bombay, Google, Amazon, Microsoft and many more."
  }
export default function Vij_campus(){
    return(
        <div>
            <Helmet>
                <title>Python, Java, Software Testing training institute in Bangalore, Codegnan Destination Technologies </title>
                <meta name="description" content="Start your tech and IT career with Codegnan’s destination technologies courses in Bangalore with job acceleration programs and internship opportunities." />
            </Helmet>
            <Campus_temp head={headData} map_details={map_address} middle2={middle2Data} coursep={course_pricing}/>
        </div>
    );
}