import Training_template from "../Training_template";
const headData = {
    title: "",
    color_title:"Best Core Java Training Course in Vijayawada",
    p: "Java training courses open your door to high-paying jobs and better career opportunities in building applications, Android development, back-end server development and more. Being one of the top Java training institutes in Vijayawada, Codegnan offers an interesting fundamental Java development course for students to learn Java theoretically and have hands-on practice in building apps. This one-month course will clear your basic knowledge and prepare you for advanced courses or job opportunities. ",
    language:"English",
    duration:"1 Month",
    price: "10,000 ",
    rating:" 2,282",
    formh:"Become a JAVA developer",
    formtext:"Talk to our expert JAVA mentors and learn how our training programs in Vijayawada  can help you become a  JAVA developer and get a high-paying job.",
    no_of_hours:"50 DAYS INSTRUCTOR LED TRAINING"
  };
  
  const middleData = {
    title: "Course Overview ",
    color_title:"Core Java",
    p: "According to Statista, Java ranks among the top 10 most-used programming languages globally. It is an object-oriented programming language that is easy to learn and is platform-independent. Java developers have high demand in the labour market due to vast development opportunities in large companies across multiple industries and high salaries. What can you get from the course?",
    list: [
     "Both online and offline training modes are available",
     "Get trained by industry experts and Java developers",
     "Work on live projects and build a strong portfolio",
     "Receive industry-accredited certification upon completion of the course",
     "Get lifetime access to learning materials"
    ]
  };
  
  const middle2Data={
    color_title:"Java Developer Career ",
    title:" Opportunities in Vijayawada",
    p:"Java ranks among the <strong>big 4 </strong>programming languages that are used in web and mobile application development and in modern technologies like big data, IoT, artificial intelligence, and blockchain. Thus, a Java developer career in Vijayawada can get you some of the high-paying jobs in the city and better career prospects.",
    list2:[
      {
        heading:"Job Opportunity",
        info:"Java developers can get a steady stream of job opportunities and are said to be the highest-paid professionals in the IT domain. You can find 1000+ Java job vacancies in the Greater Vijayawada Area on LinkedIn and nearly 2000+ jobs on Indeed. "
      },
      {
        heading:" Salary Scope",
        info:"As per Ambition box data, Java developers in the Vijayawada region receive an average annual salary of ₹5.4LPA, where the beginners can get ₹2.0-₹2.8 LPA and the experienced people can get ₹5.4-₹6.0 LPA."
      },
      {
        heading:"Tech companies hiring Java developer",
        info:" Vijayawada is one of the top IT hubs in India, where multiple top companies, including Tata Consultancy Services, Capgemini, Accenture, Oracle, Cognizant Technology Solutions, and Deloitte, are hiring multiple Java developers year after year.  "
      },
      {
        heading:"Career Options",
        info:"With the Java course, you can open doors to multiple career options, including web development, mobile app development, front-end development, IT management, database administration, Development Operations (DevOps) engineering, and software architecture."
      }
    ]
  };
  
  const middle3Data={
    color_title:" Java Developer Projects",
    title:" you will work on ",
    p:"At Codegnan, you just don’t get theoretical knowledge from expert faculties but practical experience with Java coding under top mentors in the industry. You can work on multiple projects throughout the course, including\n <ul>" +
    [
        "<strong>Creating Hello Java World</strong>",
        "<strong>Playing with operators (Arithmetic, Boolean, Logical and Binary operators)</strong>",
        "<strong>Using control statements (For, While, and Do..While loops, use of Goto, Break, and Continue statements)</strong>",
        "<strong>Basic OOPs</strong>",
        "<strong>Use of inheritance in Java codes</strong>",
        "<strong>Interface practical knowledge</strong>",
        "<strong>Showcasing the use of Java libraries</strong>"
       
    ].map((item, index) => (
      `<li key=${index} style='margin-left: 100px;'>${item}<i className="fa-solid fa-check-double check_double"></i></li>`
    )).join('') +
    "</ul>"
   
  };
  
  const middle4Data={
    color_title:"Who are these Java ",
    title:" Training Classes for?",
    p:"Java is an ideal language for beginner coders with basic computer knowledge, and if you fall under any of these categories, you can enrol for Codegnan’s Java training classes in Vijayawada",
    list:[
        {
            heading:"College students or Fresher Graduates",
            info:"If you have recently entered or completed your college degree, Java training classes can be a perfect add-on course for your portfolio. You can have core Java knowledge with hands-on practice with Java coding, which will help you for junior or entry-level Java jobs and internships."
        },
        {
          heading:"Beginners who want to become Java developers",
          info:"If you have programming knowledge of C and C++, you can enrol for Codegnan's Java training classes. This will help you brush up your coding skills and assist in achieving high-paying jobs in the market. The course starts from basic to advanced core Java knowledge and offers practical experience on live projects. "
        },
        {
          heading:" IT Professionals",
          info:"If you are already working in the IT sector and looking for options to improve your earnings, taking a Java course can be helpful. It will add an extra skill to your portfolio and improve your chances of applying for higher-paid jobs. "
        },
        {
          heading:"Anyone interested in automation",
          info:"Codegnan's Java training classes can help anyone who is planning to enter the automation industry, especially those aiming to become an automation tester or an expert in that field. "
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
    title:" java course trainers",
    mentors:[
      {
        name:"Kishor Kumar",
        description:" A Tech-expert with 20+years of industrial experience with 360 degrees expertise in Java Full Stack. Trained employees on latest frameworks as per the project requirements in JP Morgan Chase, TCS, HSBC, Covalense Digital, DBS Bank, Capgemini, DXC Technologies, Guardian Life, UST Global, Wipro, CSC India and many more.",
        image:"/members/Kishor-Kumar-java.webp"
      }
    ]
  }
  
  const course_pricing={
    color_title:"Java Course Fees",
    title:"  in Vijayawada    ",
    p:"The entire Java course fee at Codegnan is ₹10,000, covers the basic knowledge of Java, and makes you job-ready. If you are enrolling for the course now, you can avail of the discounted price of ₹7,999 for the course, which is available for a limited time."
  }
  
  const otherLocationsData = {
    locationTitle: "Our other Java training location(s)",
    locations: [
      { name: "Banglore", link: "/banglore-training" },
      { name: "Hyderabad", link: "/hyderabad-training" }
    ],
    courseTitle: "codegnan's other training courses in Hyderabad",
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
    title:" Options",
    color_title:" Core Java Training",
    list:[
      {
        title:"Java classroom training in Vijayawada (offline)",
        p:"You can get trained offline with industry experts and gain hands-on experience with top-quality gadgets and Java development tools. This gives you an opportunity to clear all your doubts from expert faculties and learn to implement your theoretical knowledge in real-world projects. \n<strong>Codegnan’s Vijayawada campus location:</strong> H.No 40, Prasad Naidu Complex, 5-19/16, Siddhartha Busstop, near PB siddhartha College of Arts and Science, Moghalrajpuram, Labbipet, Vijayawada, Andhra Pradesh 520010"
      },
      {
        title:"Online Java development course training",
        p:"You can also take one-on-one live Java development classes with top mentors online at your convenient slots. Additionally, Codegnan provides all the required resources for your remote practice and learning."
      }
    ]
  }
export default function Java_training_in_vijayawada() {
    return (
        <div>
            <Training_template head={headData} middle={middleData} middle2={middle2Data} middle3={middle3Data} middle4={middle4Data} middle5={middle5Data} mentor={mentorsData} coursep={course_pricing} other={otherLocationsData} map_details={map_address} train_opt={training_options}/>
      </div>
    );
  }