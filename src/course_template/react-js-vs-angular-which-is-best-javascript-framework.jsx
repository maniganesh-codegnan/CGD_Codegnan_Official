import React from "react";
import Course_template from "./Course_template";
import Reactvsangular_photo from '/course_images/reactjs-vs-angular-framework-comparison-for-javascript.webp';
import { Link } from "react-router-dom";

const headdata = {
    title: "React Js vs Angular – Which is the Best JavaScript Framework?",
    date: "February 6, 2024",
    img: Reactvsangular_photo,
    intro: "Whilst talking about Javascript and its popularity, millions of users around the world will not miss out on the discussion on React and Angular. \nThe difference between React and Angular can be scrolled on the web and you will be able to find discussions and debates deeply contrasting ideas about them. Here are a few more points related to  React vs. Angular. \nLet us discuss."
};

const coursedata = {
    title: "",
    p: "👉  Releated resources: ",
    linkText: " Complete Java Course Syllabus for beginners",
    syllabusLink: "/java-course-syllabus"
};

const courseSections = [
   
    {
        title: "What is ReactJS ?",
        intro: "React.js is maintained by Facebook which is an open-source JavaScript library for creating desktop, web, and mobile application UIs. \nIn contrast to most of the websites, those who worked with React don’t have server-side rendering, they are rendered in the browser. \nThis implies users don’t need to wait for the server response to render another page. It’s a quicker experience, which is particularly significant for mobile applications. React’s tool library permits developers to fabricate components that are dropped onto a website page. \nThese components, which resemble custom HTML components, are what the clients see on the site. Components can be reused across applications and are a lot simpler to refresh and update than looking through lines of code. Organizations that use React incorporate Facebook (and Instagram), Uber, and Netflix, among others.<h3>Organizations that use ReactJS:</h3>",
        content: [
                "Facebook",
                "Instagram",
                "Netflix",
                "WhatsApp",
                "Twitter",
                "Uber",
                "Codecademy",
                "Dropbox",
                "Yahoo!",
                "MailAsana"
        ]
    },
    // {
    //     title: " Write a Java program to draw a right triangle star pattern.‍",
    //     intro: `
    //         <pre> 
                
    //             *
    //             * *
    //             * * *
    //             * * * *
    //             * * * * *
    //             public class Codegnan
    //             {
    //             public static void RTriangle(int n)
    //             {
    //             int i, j;
    //             for(i=0; i<n; i++) //outer loop for number of rows(n)
    //             { for(j=2*(n-i); j>=0; j–) // inner loop for spaces
    //             {
    //             System.out.print(” “); // printing space
    //             }
    //             for(j=0; j<=i; j++) //  inner loop for columns
    //             {
    //             System.out.print(“* “); // print star
    //             }
    //             System.out.println(); // ending line after each row
    //             }
    //             }
    //             public static void main(String args[])
    //             {
    //             int n = 5;
    //             RTriangle(n);
    //             }
    //             }
    //         </pre>`,
    //     content: []
    // },

];

const course_brief = [
    {
        title: "",
        intro:() =>(
            <>
            <p><b>👉 Releated resources:</b><Link to="/java-course-syllabus" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> Complete Java Course Syllabus for beginners</Link></p>
            </>
        )

    },
    {
        title: "Benefits of ReactJS Version",
        intro: "<h5>Let us have a quick glance at why you should use React:</h5><ul>" +
            [
                "Straightforwardness React is easy to learn and apply on account of its-",
                "dependence on JavaScript,",
                "the simplicity of blending in with HTML,",
                "component-based architecture."
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: "Any developer with an essential comprehension of JavaScript would have the option to get acquainted with React and begin making exceptionally responsive applications very quickly. <br /><ul>" +
            [
                "Efficiency In JavaScript, reusable code is extricated to a function or class. In React, it can be well-written as a component. By incorporating reusable components, and thus helping limit the violations of the DRY principle, React speeds up development and makes it more efficient.",
                "Quick rendering React’s Virtual DOM accomplishes high application performance and satisfying user experience while making your developer’s work quicker.",
                "Community support There’s an abundance of assets and tutorials for React accessible on the web, just as an active community ready to get you out of the issues."
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 100px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
   
   
    {
        title: "What is AngularJS?",
        intro: () => (
            <>
                <p>Angular is an all-in-one open-source JavaScript framework that is maintained by Google, to manufacture profoundly responsive single-page applications. Similar to ReactJS, an Angular-based website will see all site changes made in the program. Instead of interacting with a server to stack data, a browser-side experience allows the page to render rapidly with a more mobile-like experience. Angular recently observed the release of its most current version of Angular 9, which is built-on TypeScript, a superset of JavaScript.</p>

                <p>Since React is a JavaScript library instead of the full JavaScript framework of Angular, many developers will include more libraries when utilizing React to give it the usefulness of a total framework.</p>
            </>
        )
    },

    {
        title: "Organizations that use AngularJS:",
        intro: "<ul>" +
            [
                "PayPal",
                "Gmail",
                "The Guardian",
                "DoubleClick",
                "Upwork",
                "HBO",
                "Sony",
                "General",
                "MotorsNike",
                "Nike"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Benefits of AngularJS",
        intro: "Now, let us have a quick glance at why you should use Angular: <br/><ul>" +
            [
                "Clear and brief code Angular’s basic component architecture dispenses with the requirement for unnecessary code and makes development smooth. Being built with TypeScript implies that the framework assists developers with finding and eliminates error at an early stage in the development procedure.=",
                "Consistency Independent logical and functional components are the building blocks of Angular. They are reusable, firm LEGO-like blocks of code that can be utilized to rapidly scale new and existing applications. In addition, the autonomy of every part makes it simple for developers to test an application for errors.",
                "Documentation and community support On the authority Angular site, there is a lot of documentation that developers can depend on as they get acquainted with the system or experience issues while coding. The website is likewise a decent place to get up to date on any news or updates. Angular, much the same as React, additionally appreciates active community support, including conversation sheets on stages, for example, Gitter, Stack Overflow, Facebook, and Reddit.",
                "Simple testing Angular utilizes Jasmine with the Karma test runner and offers a testing library (TestBed) that permits developers to effectively unit test their components. Furthermore, it accompanies Protractor arranged for simple e2e testing."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "React vs. Angular – History",
        intro: () => (
            <>
                <h4> React</h4>
                <p>React, launched by Facebook, in 2013. React is mostly used by the Facebook company in its products like Facebook, Instagram, and Whatsapp. In November 2018, Facebook released the latest version, 16.X.</p>

                <h4> Angular</h4>
                <p>Angular, introduced by Google, released in 2010. Angular is a Typescript-based javascript framework. The next version Angular 2 (dropped the JS from the name- AngularJS), Angular 2+. The latest version is Angular 10, released in June 2020.</p>

                <h4> React vs Angular – Popularity</h4>
                <p>The explanation behind the developers why they like React or Angular is that since React includes more Javascript and has an alternate syntax JSX (Javascript XML), it has a stricter setup, architecture, and environment of React. Thus, developers utilize Angular more for this situation. Angular is a well-structured technology with an immense amount of projects and assets.</p>
            </>
        )
    },
    {
        title: "React vs. Angular – Comparison of Component Model",
        intro: () => (
            <>
                <p>React exhibits entirely different characteristics. It combines the UI parts and behavior of components.</p>

                <h4> Here is the component model of React:</h4>
                <img src="/syllabuspages/prog11.png" alt="error" />
                <p>In Angular, components are known by the name of directives. Angular separates the UI components, as components are in HTML tags and their behavior in Javascript code.  So, it helps in faster angular development services. </p>

                <p>Here is the component model of Angular:</p>
                <img src="/syllabuspages/prog1.png" alt="error" />

                <h3>React vs. Angular – Learning Scale</h3>
                <h4>Angular:</h4>
                <p>Difficult- Angular has a steep learning curve since learning includes mastering in MVC and Typescript, so it takes time to learn the complete Angular.</p>

                <h4>React:</h4>
                <p>Moderate- React comes with the starting guide, making it easier to start with the react development. But, it does not mean you would not face difficulties learning about the libraries and integrations in React.</p>
                
            </>
        )
    },
    {
        title: "ReactJs vs. AngularJs – Which Javascript framework should I choose?",
        intro: " <br/><ul>" +
            [
                "<b>React</b> is focused on building the view layer only. Angular is a full-fledged framework for building the entire front-end.",
                "<b>React</b> uses JSX syntax which mixes HTML and JavaScript. Angular uses HTML templates. It updates only the changed parts of the DOM for better performance. Angular updates the entire DOM on any change.",
                "<b>React</b> follows a uni-directional data flow between components. Angular has two-way binding between the model and view.",
                "<b>React</b> is a library with basic capabilities. Angular has a lot of built-in features like routing, HTTP services, forms validation etc.",
                "<b>React</b> needs other libraries to handle routing, HTTP requests etc. Angular provides these out-of-the-box.",
                "<b>React</b> has a steep learning curve. Angular is more beginner friendly.",
                "<b>React</b> promotes reusable components. Angular promotes separation of concerns via MVC."

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Put simply,",
        intro: "<ul>" +
            [
                "Choose React.JS— If you want simple views with high performance",
                "Choose Angular— If you want an out-of-the-box full framework ",
                "If you are a beginner— Angular is easier to start",
                "If you want to focus on reusable UI components— React is better"
            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "Factors to consider before choosing a react angular framework",
        intro: "<ul>" +
            [
                "Learning Curve of the Technology",
                "Benefits on the Server-Side and User-Side Aspects",
                "Functionalities, Special Features, and Components",
                "Updates, Trends, and Popularity on the Web Development Industry"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: "",
        intro: () => (
            <>
                <table className="salary-table">
                    <thead>
                        <tr>
                            <th> Feature</th>
                            <th> Angular</th>
                            <th> ReactJS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th> Company</th>
                            <td> Google	</td>
                            <td> Facebook</td>
                        </tr>
                        <tr>
                            <th> Initial Release	</th>
                            <td> 2010 (AngularJS), 2016 (Angular2+)	</td>
                            <td> 2013 </td>
                        </tr>
                        <tr>
                            <th>Language</th>
                            <td>JavaScript, TypeScript	</td>
                            <td>JavaScript, JSX</td>
                        </tr>
                        <tr>
                            <th> Architecture	</th>
                            <td> Full-fledged MVC framework	</td>
                            <td> Component-based library</td>
                        </tr>
                        <tr>
                            <th> Rendering	</th>
                            <td> Real DOM	</td>
                            <td> Virtual DOM</td>
                        </tr>
                        <tr>
                            <th> Data Binding	</th>
                            <td> Two-way	</td>
                            <td> One-way</td>
                        </tr>
                        <tr>
                            <th> App Size	</th>
                            <td> Depends upon bundle size	</td>
                            <td> Relatively small (with tree-shaking)</td>
                        </tr>
                        <tr>
                            <th> Performance	</th>
                            <td> High	</td>
                            <td> High</td>
                        </tr>
                        <tr>
                            <th> Learning Curve	</th>
                            <td> Steep	</td>
                            <td> Moderate</td>
                        </tr>
                        <tr>
                            <th> Community Support	</th>
                            <td> Large	</td>
                            <td> Large</td>
                        </tr>
                        <tr>
                            <th> State Management	</th>
                            <td> Built-in (RxJS, services)	</td>
                            <td> External libraries (e.g., Redux)</td>
                        </tr>
                        <tr>
                            <th> Mobile Development	</th>
                            <td> NativeScript	</td>
                            <td> React Native</td>
                        </tr>
                        <tr>
                            <th> Server-Side Rendering	</th>
                            <td> Angular Universal	</td>
                            <td> Next.js, Gatsby.js</td>
                        </tr>
                        <tr>
                            <th> Dependency Injection	</th>
                            <td> Built-in	</td>
                            <td> External libraries (e.g., React Context)</td>
                        </tr>
                        <tr>
                            <th> Routing	</th>
                            <td> Built-in (Angular Router)	</td>
                            <td> External libraries (e.g., React Router)</td>
                        </tr>
                        <tr>
                            <th> Development </th>
                            <td> Environment	</td>
                            <td> Angular CLI	Create React App (CRA), Next.js CLI</td>
                        </tr>
                        <tr>
                            <th> Licensing	</th>
                            <td> Open-source	</td>
                            <td> Open-source</td>
                        </tr>
                    </tbody>
                </table>
                <p>It is undeniable that Angular is used for building applications for its readability, reusability, and scalability at a large scale. Angular is most popular among Javascript developers but React is easy to learn because of the multiple integrations of some mandatory tools and libraries to manage dependency.</p>
            </>
        )
    },
    {
        title: "Final Words On reacting js vs angular js ",
        intro: "Angular and React are both developing and being embraced by the large players on the tech scene. One is a steady, very much characterized, and normalized system that is incredible for long-term projects, while the other is a library that can be utilized to gather a model with reusable components surprisingly fast. \n Passing a subjective judgment on which one is “better” without becoming more acquainted with React and Angular’s unique qualities and shortcomings would be unhelpful and misleading. Your choice of which one to go with ought to eventually rely upon:<br/> <br/><ul>" +
            [
                "the points of interest of your venture",
                "the current range of abilities of your engineers",
                "your financial plan"

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p>I hope that this guide has explained a portion of the dilemma surrounding the two technologies. Understand Javascript better by enrolling yourself in Javascript training online or Javascript training offline.</p>
                <p>For learning and improving your skills, check out our <Link to="/java-interview-questions" onClick={() => window.scrollTo({ top: 0 })} className="link-color">Java interview questions and answers.</Link> </p>
            </>
        )
    },
    {
        title: "Why enroll in Codegnan’s React JS training course?",
        intro: "If you’re looking forward to working as a front-end web developer (which means building UIs), then you should learn ReactJS.\nWith ReactJS training at Codegnan, you’ll develop a strong understanding of React’s most essential concepts: JSX, components of React JS, classes and functions in ReactJS, props, state, ReactJS lifecycle methods, hooks, etc.<br/> <br/><ul>" +
            [
                "<strong> Experienced Trainers:</strong> The course is taught by industry experts with over 8 years of experience in handling real-world projects. ",
                "<strong> Job Support:</strong> codegnan provides job assistance through resume preparation, mock interviews, and dedicated placement support to help students find jobs after the course.",
                "<strong> Practical Focus:</strong> The curriculum includes working on real-world projects, exercises and hands-on coding assignments. ",
                "<strong> Flexible Batches:</strong> codegnan offers flexible batch timings including weekday, weekend and fast-track batches. Students can choose a schedule on the weekend that suits them.",
                "<strong> Affordable Fees (₹8,000):</strong> The course fees are quite affordable compared to other institutes. codegnan offers discounts to make quality training accessible.",
                "<strong> Online and Offline Classes:</strong> Students can join online classes from anywhere or attend offline classes in Vijayawada center for in-person interactions.",
                "<strong> Lifetime Access:</strong> Students get lifetime access to course content for revision even after course completion. 24×7 support is also provided.",
                "<strong> Industry recognized certificates:</strong> codegnan is a trusted training provider with top companies hiring their certified students. "

            ].map((item, index) => (
                "<li key=" + index + " style='margin-left: 50px;'>" + item + "</li>"
            )).join('') +
            "</ul>"
    },
    {
        title: " ",
        intro: () => (
            <>
                <p>👉 Enroll in Codegnan’s <Link to="/react-js-training-course-in-vijayawada" onClick={() => window.scrollTo({ top: 0 })} className="link-color"> React JS course training for Vijayawada location (1-month course duration).</Link></p>
                <p>Also, if you’re looking for an online course with lifetime course access, you can <Link to="/https://academy.codegnan.com/learn/ReactJSreact-js-training-course-in-vijayawada" onClick={() => window.scrollTo({ top: 0 })} className="link-color">  enroll in our online react JS course here. </Link></p>
                <p>You will also be able to combine these ideas in React’s modular programming style. The graceful solutions provided by ReactJS are making it grow rapidly in the world of programming languages. Thus, there’s never been a better time to learn ReactJS. </p>
            </>
        )
    }
];

const nav_interview = [
    {
        name: "120 Important Java Interview Questions and Answers (2024)",
        link: "/java-interview-questions"
    },
    {
        name:"Python Course Syllabus For Beginners to Advanced (2024)",
        link:"/python-course-syllabus"
    }
];

export default function JavaCoursePage() {
    return (
        <div>
            <Course_template head={headdata} course={coursedata} section={courseSections} coursep={course_brief} inter_links={nav_interview} />
        </div>
    );
}
