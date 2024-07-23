import Training_template from "../Training_template";
import { Helmet } from 'react-helmet';

const headData = {
    title: "Best Software Testing",
    color_title:"Training Course in Vijayawada",
    p: "Take your career to the next level with our software testing training course in Vijayawada. Get in-depth theoretical knowledge on manual testing, working with popular testing tool ‘Selenium’, Java programming, HTML, and CSS with hands-on training on live projects under the mentorship of industrial experts. The course syllabus is designed for beginners, to professionals in any sector. With our 100% job assistance you will have confidence in landing a high-paying job.",
    language:"English",
    duration:"100 Days",
    price: "50,000 ",
    rating:" 2,282",
    formh:"Become a Best Software Testing",
    formtext:"Talk to our expert Best Software Testing mentors and learn how our training programs in Vijayawada can help you become a  Best Software Testing and get a high-paying job.",
    no_of_hours:"100 DAYS INSTRUCTOR LED TRAINING"
  };
  
  const middleData = {
    title: "Software testing",
    color_title:"training overview",
    p: "Software testing is an essential phase of SDLC (Software Development Lifecycle), where testers check for any underlying defects in the product before launching it into the market. Software testers check for issues and defects in software and report their findings to the development team, which then makes necessary changes. This requires experts to acquire multiple skills, which you will learn from our software testing training course in Vijayawada. \nYou will learn about different models in SDLC, white-box and black-box testing, work on different test cases, gain knowledge of STLC (Software testing life cycle), work with Selenium, and learn about TestNG. Additionally, the course covers the basic knowledge of Java programming, MYSQL, HTML, and CSS. \nKey features of the course \nAll this and more at an incredibly affordable price of just ₹7,999!",
    list: [
      " 100 days of theoretical and practical training",
      " The course fee is ₹50,000",
      " Delivered by industry experts, X-IITians and students from top universities",
      " Hands-on experience with live projects",
      " Dedicated mentors for instant doubt clearance",
      " Get industry-accredited certificates that hold global value",
      " 100% placement assistance with a minimum of 150 drives per year"
    ]
  };
  
  const middle2Data={
    color_title:"Who are these software training",
    title:" classes for?",
    p:"",
    list2:[
      {
        heading:"College pass-outs and freshers",
        info:"This course is suitable for fresh graduates from IT or non-IT backgrounds. If you want to work as a software tester, this course is suitable for you. It is designed for everyone from beginners to professionals, and is delivered by some of the top professionals in the industry."
      },
      {
        heading:" Software Developers",
        info:"Software developers can enrol for the course if they are looking to upskill themselves. Learning software testing can help them deploy high-quality software into the market. This add-on skill assists them in getting better jobs."
      },
      {
        heading:"Quality Assurance Engineer",
        info:" Java’s USP is that it is a 'write once, run anywhere' programming language. This allows you to create applications compatible with any device, regardless of the operating system. This cross-platform capability becomes a valuable asset in your skill set."
      },
      {
        heading:"IT Professionals",
        info:"Any IT professionals looking for a job to switch or enhance their skill set can join the course. It will help them learn a new skill and add them to their resume to create a better impact on employers."
      }
    ]
  };
  
  const middle3Data={
    color_title:" Python Projects",
    title:" you will work on ",
    p:"By the end of this course, you will be working on three Python projects that will not only test your knowledge but will also be a great addition to your portfolio. \nSo, let’s take a brief look at the project topics and what you will be learning from them. ",
    list:[
      {
        heading:"Fully Functional Ecommerce Application",
        info:"Students will learn how to build a fully functional e-commerce application that has all the functionalities of top e-commerce platforms. Such as an admin dashboard, user dashboard, payment gateway, generating an invoice for an order, and an orders section."
      },
      {
        heading:"Custom DevBlog Application",
        info:"Learn how to build your own DevBlog application where users can sign up, sign in and out, reset passwords if they have forgotten, create, share, update, and delete blogs, search for blogs, and have social media integration. "
      },
      {
        heading:"Discussion Board Application",
        info:"Create your very own discussion board application, also known as a web- forum, where virtual communities can have peer-to-peer discussions at any time. Apart from the basic user sign-up/ in and sign-out, learn how to add the feature of adding comments, replies, and share discussions."
      }
    ]
  };
  
  const middle4Data={
    color_title:"Who is this Python Full Stack ",
    title:" course training for?",
    p:"Wondering if this Python full-stack course by codegnan is worth your investment? So, here’s our audience profile and how they get benefited by it.",
    list:[
        {
            heading:"College students or fresher graduates (primary)",
            info:"Python is a skill that is in high demand in the job market, as it is used for various applications and domains. Learning Python can help college students or fresher graduates to enhance their resume and portfolio, and increase their chances of getting hired by top companies."
        },
        {
          heading:"Beginners who want to become Python experts",
          info:"Despite being so versatile and advance, Python is still very beginner friendly. As a beginner in Python, this course can help you learn about the fundamentals of programming, as well as various aspects of web development, such as front-end, back-end, databases, APIs, and more."
        },
        {
          heading:" IT Professionals",
          info:"Learning Python can help IT professionals to expand their knowledge and skills, and work on diverse and challenging projects. Python can also help them to improve their productivity and efficiency, as it allows them to write less code and achieve more results."
        },
        {
          heading:"Anyone Interested in Automation",
          info:"Learning Python can help anyone interested in automation to create scripts and programs that can automate various processes and workflows, such as web scraping, data extraction, testing, reporting, and more."
        }
    ]
  };
  
  const middle5Data={
    color_title:"Python Full Stack development ",
    title:" course certification in Vijayawada",
    p:"codegnan’s comprehensive Python Full Stack course in Bangalore not only offers certification but also focuses on practical skills. Participants engage with hands-on coding challenges using the platform provided by Codegnan and HackerRank, ensuring a well-rounded learning experience."
  };
  
  const mentorsData={
    color_title:"Meet your",
    title:"Full Stack Python course trainers",
    mentors:[
      {
        name:"Sairam Uppugundla",
        description:" Sairam Uppugundla is the CEO and founder of Codegnan IT Solutions. With a strong background in Computer Science and over 10 years of experience, he is committed to bridging the gap between academia and industry.\n Sairam Uppugundla is a dedicated IT professional with a Bachelor’s in Technology and Computer science with 10+ years of experience in this field.\nTo achieve his mission, Sairam Uppugundla decided to leave his position as a Data Engineer in Malaysia, returned to Andhra Pradesh, and established Codegnan. \nIn 2018, his deep-rooted interest in teaching led him to change his career, shifting his focus to bring up the next generation of engineers. ",
        image:"/members/sairam-sir.webp"
      },
      {
        name:"Saketh Kallepu",
        description:" Saketh Kallepu is a Data science professional in the IT field with a background in Computational Intelligence. Having 7+ years of experience in this field, he is an outstanding Data Science Mentor and trainer.\nSaketh Kallepu believes, <strong>“Don’t work hard, just work with heart.”</strong> With this belief, he joined as Co-Founder, mentor, and trainer at Codegnan to change the education platform and build a new technical arena for passionate learners. ",
        image:"/members/trainer-2.pngw3_.webp"
      }
    ]
  }
  
  const course_pricing={
    color_title:"What is the software testing ",
    title:"  course fee in Vijayawada?",
    p:" Codegnan’s software testing training <b>course fee in Vijaywada is ₹50,000.</b> \nGenerally, the course fee depends on various factors such as course duration, syllabus, trainer expertise, training mode, placement assistance, number of projects, practical training hours, and additional course features. \n But learning software testing can help you land a high paying job in Vijayawada. The demand for software testers is increasing everyday. You can find more than <b>28,000</b> software testing job vacancies in India on LinkedIn. These jobs offer potentially high salaries, which is <b>₹4.7 LPA</b> at an average in India where at the beginning, you may start with <b>₹1.5 LPA</b>, but with experience, you can earn nearly <b>₹8.0 LPA.</b> "
  }
  
  const otherLocationsData = {
    locationTitle: "Our other full-stack Python training location(s)",
    locations: [
      { name: "Banglore", link: "/banglore-training" },
      { name: "Hyderabad", link: "/hyderabad-training" }
    ],
    courseTitle: "codegnan's other training courses in Hyderabad",
    courses: [
      {name:"Python course training",link:"/python_training_in_hyderabad"},
      { name: "Data science ", link: "/data-sscience-training-in-hyderabad" },
      { name: "Core Java training", link: "/core-java-training-hyderabad" },
      { name: "Java Full-stack course", link: "/full-stack-java-training-hyderabad" },
      { name: "Machine learning training course", link: "/machine-learning-training-hyderabad" },
      {name:"React JS",link:"/reactjs-in-hyderabad"},
      {name:"Data structures and algorithms",link:"/data-structures-and-algorithms-in-hyderabad"},
      {name:"C programming",link:"/c-programming-hyderabad"}
      
    ]
  };
  
  const map_address={
    title:"Visit codegnan’s Bangalore training centre",
    mapSrc:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7610.382525031249!2d78.388451!3d17.498381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91959592aba9%3A0x6bba1d480cb50bad!2sCodegnan%20Hyderabad%20-%20Python%2C%20Java%2C%20Data%20science%2C%20Machine%20learning%2C%20React%20JS%20training%20institute!5e0!3m2!1sen!2sin!4v1712923258063!5m2!1sen!2sin",
    email:"info@codegnan.com",
    phoneNumber:"+91 98887 48888",
    address:"40-5-19/16, Prasad Naidu Complex, P.B.Siddhartha Busstop, Moghalrajpuram, Vijayawada, Andhra Pradesh 520010"
  }
  
  const training_options={
    title:"web development training options",
    color_title:"Python Full Stack ",
    list:[
      {
        title:"Python Full Stack Development Classroom Training (Offline)",
        p:"If you are looking for a Python full stack development course with an in-classroom facility, then codegnan has it for you. If you are from Vijayawada, you can join our in-person session at #40-5-19/6, Prasad Naidu Complex, P. B. Siddhartha Bustop, Moghalrajpuram Vijayawada- 520010."
      },
      {
        title:"Online Python Full Stack Development Course Training (Offline)",
        p:"But those who don’t prefer the hassle of traveling or live outside of Bangalore, can still enrol for our course as codegnan also provides live online classes for the Python full stack development course. You’ll be learning from the same instructors, the same curriculum, but with the added benefit of remote learning."
      }
    ]
  }
export default function Software_testing_training_course_in_vijayawada() {
    return (
        <div>
              <Helmet>
                <title>Software Testing Course in Vijayawada With 100% Placement</title>
                <meta name="description" content="Codegnan offers 100 days long software testing training in Vijayawada with 100% placement. Course fee: ₹50,000. Apply now to get discounts." />
            </Helmet>
            <Training_template head={headData} middle={middleData} middle2={middle2Data} middle3={middle3Data} middle4={middle4Data} middle5={middle5Data} mentor={mentorsData} coursep={course_pricing} other={otherLocationsData} map_details={map_address} train_opt={training_options}/>
      </div>
    );
  }