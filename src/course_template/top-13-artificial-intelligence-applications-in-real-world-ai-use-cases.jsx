import React from "react";
import Course_template from "./Course_template";
import top13_projects from '/course_images/top-13.jpgw3.webp';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const headdata = {
    title: "Top 13 Artificial Intelligence Applications in real world | AI Use Cases",
    date:  "May 23, 2023",
    img:    top13_projects ,
    intro: "From predicting human actions to the advancement of natural language processing, Artificial Intelligence is the field that is giving a new direction to the living of a normal person. Advanced analytics such as AI and machine learning are becoming effectively critical to the development of innovative, differentiated, competitive, and successful businesses and products. AI has the definite potential to unlock the ideation and value of data. It has the power to transform businesses and entire industries by not even mentioning improvement and enhancing human experiences. In short, Artificial Intelligence is beyond our expectations. \n Let us begin straight with the curated list of the top 13 real-world artificial intelligence applications. "
};

const coursedata = {
    title: "Artificial Intelligence applications:",
    p: " ",
    linkText: " ",
    syllabusLink: "",
};

const courseSections = [
   
    {
        title: " Intelligent Gaming",
        intro: " ",
        content: [
            // " Data Science Algorithms",
            // " Natural Language Processing",
            // " Chatbots",
            // " Data Scraping",
            // " Data Mining",
            // " Video and Image Processing",
            // " Object Detection"
        ]
    },
];
const course_brief = [
    {
        title: " ",
        intro: () => (
            <>
                <p>AI and Machine Learning are used in intelligent gaming techniques, particularly in games that essentially require the utilization of mental skills like chess. Google DeepMind’s AlphaGo figured out how to play chess, and defeat champions like Lee Sedol (in 2016) by contemplating the moves of experts as well as by figuring out how to play the game by rehearsing against itself countless times.</p>
            </>
        )
    },
    {
        title: "2. Automated Transportation in AI",
        intro: () => (
            <>
                <p>When we fly in a plane, we experience automated transportation as a human pilot is just flying the plane for two or three minutes during take-off and landing. The remainder of the flight is moved by a Flight Management System, a synchronization of GPS, motion sensors, and computer systems that track flight position. Google Maps has just changed local transport by examining coordinates from smartphones to decide how quick or moderate a vehicle is moving and along these how much traffic there is on a given street anytime.</p>
            </>
        )
    },
    {
        title: "3. Jobs Risky in Artificial Intelligence",
        intro: () => (
            <>
                <p>Artificial intelligence technology-fueled robots are taking over perilous employments like bomb disposal and welding. In bomb disposal, today, robots should be constrained by people. Yet, scientists accept that soon there will be a time when these tasks would be handled by robots themselves. This technology has just spared many lives. In the field of welding, a dangerous activity that involves working in elevated levels of noise and heat in a poisonous environment, robots are helping weld with more prominent precision.</p>
            </>
        )
    },
    {
        title: "4. Ecological Protection",
        intro: () => (
            <>
                <p> Machine Learning and Artificial Intelligence run on bid data, huge stores of information, and astounding insights produced by computer systems. When put to use in the field of environmental protection, these technologies could be used to extract significant solutions for indefensible problems like ecological corruption. For example, “IBM’s Green Horizon Project contemplates and analyzes ecological data from a large number of sensors and sources to create precise, advancing climate and pollution figures.”</p>
            </>
        )
    }, 
    {
        title: "5. Robots as Friends ",
        intro: () => (
            <>
                <p>An organization in Japan has designed a robot partner named Pepper who can comprehend and feel feelings and compassion. Presented in 2014, Pepper went at a bargain in 2015 and all the 1000 units were auctioned off right away. “The robot was modified to peruse human feelings, build up its own, and help its human companions remain upbeat,” a report says. Robots could likewise help the matured in getting independent and deal with themselves, says a computer scientist at Washington State University.</p>
                <p> Another robot friend named “Replica” also functions the same. The only difference between Pepper and Replica is that Replica is a virtual friend that can be used in the form of a mobile app. It also uses AI-integrated emotions that help you share your emotions, thoughts, daily journals, and anything.</p>
            </>
        )
    },
    {
        title: "6. Health care",
        intro: () => (
            <>
                <p>Clinics over the world are thinking about the appropriation of AI and ML to treat patients so there are decreased cases of medical clinic-related accidents and the spread of diseases like sepsis. Computer-based intelligence’s prescient models are helping in the battle against hereditary maladies and heart diseases. Likewise, Deep Learning models which “rapidly give ongoing bits of knowledge and… are helping medicinal services experts analyze patients quicker and all the more precisely, create inventive new medications and treatments, diagnose patients faster and more accurately, develop innovative new drugs and treatments, reduce medical and diagnostic errors, predict adverse reactions, and lower the costs of healthcare for providers and patients.”</p>
            </>
        )
    },
    {
        title: "7. Digital Media ",
        intro: () => (
            <>
                <p>AI has changed media outlets and technology has just discovered buyers in web-based services, for example, Netflix, Amazon Prime, Spotify, and Google Play. “ML algorithms are utilizing the practically unending stream of data about buyers’ viewing habits, helping streaming services offer more useful recommendations.’ These advancements will help with the creation of media as well. NLP (Natural Language Processing) algorithms help compose and create inclining reports by cutting on creation time. Also, another MIT-created AI model named Shelley “assists clients with composing horror stories through deep learning algorithms and a bank of user-produced fiction.”</p>
            </>
        )
    },
    {
        title: "8. Home Security and Smart Stores",
        intro: () => (
            <>
                <p>Artificial intelligence coordinated cameras and alarm systems are overwhelming the home security world. The front-line frameworks “utilize facial recognition software and machine learning to manufacturing an index of your home’s guests, permitting these frameworks to recognize excluded visitors in a moment.” Brick and Mortar stores are probably going to embrace facial acknowledgment for installments by customers. Biometric abilities are generally being received to upgrade the shopping experience.</p>
            </>
        )
    },
    {
        title: "9. Bot Vacuums",
        intro: () => (
            <>
                <p> The Roomba 980 model vacuum (the one that cleans your floor all alone) utilizes AI to filter a living region’s size, search for objects that may stand out, and recollect the best course for cleaning the rug. The vacuum bot can likewise distinguish how much cleaning it needs to do dependent on the size of the room, rehashing a cleaning cycle multiple times in littler rooms or cleaning twice in a medium-sized room.</p>
            </>
        )
    },
    {
        title: "10. Let’s talk with bots – chatbots",
        intro: () => (
            <>
                <p> Nowadays Virtual assistants have been a common use. Almost every family has a remote helper that controls the machines at home. A couple of models incorporate Siri, Cortana, etc. which are picking up popularity because of the client experience they provide. Amazon’s Echo is a familiar example of how Artificial Intelligence can be utilized to make an interpretation of human language into alluring activities. This gadget utilizes speech recognition and NLP to play out a wide scope of tasks on your command. It can accomplish something beyond playing your favorite tunes. It tends to be utilized to control the gadgets at your home, book taxis, make calls, request your preferred food, check the weather, etc.</p>

                <p> Another model is the recently delivered Google’s virtual assistant called Google Duplex that has dumbfounded a large number of people. Not exclusively would it be able to respond to calls and book appointments for you, yet it likewise includes a human touch. The gadget utilizes Natural language preparation and AI algorithms to process human language and perform tasks, for example, deal with your timetable, control your savvy home, reserve a spot, etc.</p>
            </>
        )
    },
    {
        title: "11. Be musical with Artificial Intelligence",
        intro: () => (
            <>
                <p>Have you ever thought about what might occur if an artificially intelligent machine attempted to make music and art? An AI-based framework called MuseNet would now be able to form old-style music that echoes the traditional legends, Bach and Mozart. MuseNet is a deep neural network that is fit for creating 4-minute melodic pieces with 10 unique instruments and can consolidate styles from nation to Mozart to the Beatles. MuseNet was not expressly customized with a comprehension of music, however rather found examples of agreement, beat, and style by learning on its own. Another inventive result of Artificial Intelligence is a content automation tool called Wordsmith. Wordsmith is a natural language generation platform that can transform your data into insightful narratives.</p>
            </>
        )
    },
    {
        title: "12. AI as a marketing guru",
        intro: () => (
            <>
                <p>Artificial intelligence is turning into the “right hand” of marketers and retailers around the globe. In case you’re asking yourself what kind of things it can do..! this article will go over! In short, it has potential applications in the selective fields of marketing and sales that can do wonders. On the whole, how about we see some amazing summed-up models! Through AI and machine learning, the most productive audience can be found for any promotion. This implies intelligence algorithms can learn, recognize, and foresee which kind of clients are bound to become customers at a lower cost for each securing. Adext is a SaaS that applies AI to locate the most beneficial audience for any promotion. Utilizing AI algorithms it oversees, optimizes, and automatically refreshes your computerized battle spending plan in more than 20 distinctive demographic groups for each promotion (ad) and on several platforms. With 480 daily adjustments to each and every ad, its advanced AI has the option to build advertisements transformation execution by a normal of 1265%.</p>
                <p>Organizations like BBC, CBS, the New York Times, Forbes, Associated Press, and Reuters are already using AI on a daily basis to develop and present their news publications to the public. So, if you’re still skeptical about this, just check out tools like the Hemingway App, Articoolo, Wordsmith, Quill, or Wibbitz. The main thing you need to do is give the content, pictures, and invitations to take action. The application is accountable for everything else and will make your site look proficient and 100% useful.</p>
            </>
        )
    },
    {
        title: "13. Know when to fly with AI",
        intro: () => (
            <>
                <p> The travel and tourism industry is famously competitive. Flight costs can change starting from one minute onto the next. Things being what they are, how would you realize the best ideal opportunity to purchase your ticket? Some of the time it’s smarter to book the trip early, while on different occasions it’s smarter to hold up until not long before the takeoff date to discover less expensive tickets. This is the place the Hopper application saw an incredible open door before any other person did. Through predictive analysis driven by artificial intelligence, the application can foresee price examples and alert travelers of the least cheap times to purchase flight tickets to their destinations. The AI-based app monitors billions of prices every day and based on the history of each route, it can predict how the price trend will evolve.</p>
            </>
        )
    },
   
    {
        title: "The future is going to be intelligent with AI!",
        intro: () => (
            <>
                <p> Can we debate how far we go with AI? Yes, but for that, we really need to be aware of what we are talking about. Remember, AI is not a thing. AI and cognitive computing are utilized together in the various forms of artificial intelligence like semantic understanding, statistical clustering, and classification algorithms such as SVM, Bayes, and Neural-Networks, as Roland Simonis, etc. For now, let us say it is clear that there is no harm in an algorithm enabling people to look for something better means that there is no harm in getting a system that helps you process and comprehend the information better to improvise anything related personally or business-wise. Today’s wave of artificial intelligence is one of the quick adoptions of AI technologies in new applications, driven by cloud, faster processing capabilities like big data, IoT, or robotics. The hype of AI is loud! Stay with the trend!</p>
                <p> An AI is a computer system capable of carrying out activities that usually involve human intelligence. From SIRI to self-driving cars, artificial intelligence (AI) is progressing rapidly. Many companies trying to automate many job positions through the use of smart machines, there is a concern that people may be squeezed out of the workforce.</p>
                <p> Join the industry by acquiring advanced expertise in Computer Vision, Natural Language Processing, Deep Reinforcement Learning, and core AI Algorithms in the most transformative AI fields with this AI training program at Codegnan.</p>
                <p> AI training with Codegnan will enable passionate learners to program something beneficial through AI practices. To jumpstart your career into emerging technologies like artificial intelligence, join the Codegnan AI training program and increase your chances for the fastest-growing and most transformational future-proof career.</p>
            </>
        )
    }
];

const nav_interview = [
    {
        name: " Python vs Java vs PHP – The Ultimate Guide",
        link: "/blog/python-vs-java-vs-php-the-ultimate-guide/"
    },
    {
        name:"How to send multiple emails simple way using python ",
        link:"/blog/how-to-send-multiple-emails-simple-way-using-python/"
    }
];

export default function JavaCoursePage() {
    return (
        <div>
            <Helmet>
                <title>Why Django is the go to framework for Python Web development? Ultimate Django Guide - Codegnan</title>
                <meta name="description" content="If you are a web developer, then probably choosing the right framework for your web development tasks is crucial." />
            </Helmet>
            <Course_template head={headdata} course={coursedata} section={courseSections} coursep={course_brief} inter_links={nav_interview} />
        </div>
    );
}
