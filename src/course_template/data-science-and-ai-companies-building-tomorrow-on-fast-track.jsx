import React from "react";
import Course_template from "./Course_template";
import datascienceAI_projects from '/course_images/Core-Java-syllabus-details.webp';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const headdata = {
    title: "Data Science and AI Companies building tomorrow on Fast Track",
    date:  "May 23, 2023",
    img:   datascienceAI_projects ,
    intro: "Data Science and Artificial Intelligence technologies are spreading like a virus. Personal assistants like Siri and Alexa are proof that AI has been a part of our lives. Companies in the market are also in the race of competition to make full use of these two giant technologies. The level of competition is also increasing day today. As old companies are adopting new cultures of AI and DS, similarly, startups are also investing in utilizing these two technologies. By adopting a new culture, companies are setting up the finest example of professionalism, expertise, and dedication. Their quality services help business profit to skyrocket and provide clients (users) utmost satisfaction.\nIn this write-up, I will help you with the ingredient of awareness of the top companies that are utilizing data science and artificial intelligence to get insights into more users and are exponentially growing their businesses. \n Let us begin!"
};

const coursedata = {
    title: " ",
    p: " ",
    linkText: " ",
    syllabusLink: "",
};

const courseSections = [
   
    {
        title: "What methods of DS and Artificial Intelligence companies are using?",
        intro: " ",
        content: [
            " Data Science Algorithms",
            " Natural Language Processing",
            " Chatbots",
            " Data Scraping",
            " Data Mining",
            " Video and Image Processing",
            " Object Detection"
        ]
    },
];
const course_brief = [
    {
        title: "Step 1: Take a beginner-friendly Python Full Stack Developer course ",
        intro: () => (
            <>
                <p> If you have a graduate degree or are a working professional in IT and non-IT domains, you can enroll in a Python full-stack developer course. These courses prepare you for front-end and back-end development, give you knowledge of managing databases, and use of other essential tools. </p>
                <p> You can do this by reading different blog posts or watching YouTube videos, but I wouldn’t recommend you do the same. It is because:</p>
            </>
        )
    },
    {
        title: "A curated list of 20 companies using DS and Artificial Intelligence",
        intro: () => (
            <>
                <h3>1. Grammarly </h3>
                <p><b> Industry:</b> Productivity, Writing</p>
                <p><b> Locale:</b> San Francisco</p>
                <p><b> Relatability to DS/AI:</b> Grammarly is an AI-empowered composing colleague that helps writers, editors, and communicators everywhere throughout the world with spelling, language structure, and succinctness. The program module examines content being written continuously and cautions for everything from spelling slip-ups to tone mistakes and even sweeps content for copyright infringement. Grammarly works over numerous stages, including Gmail, Slack, Jira, Medium, and almost everywhere and it is device friendly.</p>
            </>
        )
    },
    {
        title: "2. Google",
        intro: () => (
            <>
                <p><b>Industry:</b> Software, AI, DS, ML, Big Data, etc.</p>
                <p><b>Locale:</b> California, United States</p>
                <p><b>Relatability to DS/AI:</b> Google is primarily utilizing DS and AI in Google News and Google AI blog.</p>
                <p><b>Google News</b> Data Science in Google news covers the most recent news and updates on the field of data science. Going from instructional exercises and websites to industry news and new companies, you can read hordes of articles from Forbes, TechRepublic, Infoworld, and so forth. The best characteristics are- Google News has incredible UI and it has an android and IOS application as well. So you can read it anyplace.</p>
                <p><b>Google AI blog</b> The functionality is best relatable to research papers. Google AI is directing examinations that propel the cutting edge in the field, applying AI to items and new spaces, and creating tools to guarantee that everybody can get to AI. Their blog brings the most recent news from Google AI. The usefulness of the Google AI blog is for AI specialists to stay aware of everything new about Google AI. The best characteristics include Research papers on the most recent progressions in AI.</p>
            </>
        )
    },
    {
        title: "3. Tempus",
        intro: () => (
            <>
                <p><b> Industry:</b> Healthtech, Biotech, and Big Data</p>
                <p><b> Locale:</b> Chicago, Illinois</p>
                <p><b> Relatability to DS/AI:</b> Tempus utilizes AI to assemble and examine huge pools of medical and clinical data at scale. The organization, with the help of AI, gives accurate medication that customizes and improves medicines to every individual’s particular wellbeing needs; depending on everything from genetic cosmetics to past medical history to analyze and treat. Tempus is as of now concentrating on utilizing AI to make achievements in malignant cancer research.</p>

            </>
        )
    }, 
    {
        title: "4. Narrative Science",
        intro: () => (
            <>
                <p><b>Industry:</b> Big Data and Software</p>
                <p><b>Locale:</b> Chicago, Illinois</p>
                <p><b>Relatability to DS/AI:</b> Narrative Science creates natural language generation (NLG) innovation that can make an interpretation of information into stories. By featuring just the most significant and fascinating data, organizations can settle on snappier decisions paying little mind to the staff’s experience in data or analytics.</p>
            </>
        )
    },
    {
        title: "5. AlphaSense",
        intro: () => (
            <>
                <p><b>Industry:</b> Fintech</p>
                <p><b>Locale:</b> New York</p>
                <p><b>Relatability to DS/AI:</b> AlphaSense is an AI-fueled search index intended to help investment firms, banks, and Fortune 500 organizations find significant data inside records, filings, news, and exploration. The technology utilizes artificial intelligence to grow keyword searches for relevant content.</p>
            </>
        )
    },
    {
        title: "6. Nutonomy",
        intro: () => (
            <>
                <p><b>Industry:</b> Automotive and Transportation</p>
                <p><b>Locale:</b> Boston</p>
                <p><b>Relatability to DS/AI:</b> With a strategic mission to safe productive driverless vehicles, Nutonomy is creating software that powers independent vehicles in urban communities around the globe. The organization utilizes AI to join mapping, recognition, motion planning, control, and decision making into software intended to dispose of accidents due to the mistake of drivers.</p>
            </>
        )
    },
    {
        title: "7. X.AI",
        intro: () => (
            <>
                <p><b>Industry:</b> Machine Learning</p>
                <p><b>Locale:</b> New York</p>
                <p><b>Relatability to DS/AI:</b> x.ai makes independent individual aides controlled by intelligent innovation. The collaborators, basically named Amy and Andrew Ingram, coordinate with programs like Outlook, Google, Office 365, and Slack, schedule or update meetings, and persistently gain from each interaction.</p>
            </>
        )
    },
    {
        title: "8. CognitiveScale",
        intro: () => (
            <>
                <p><b> Industry:</b> Cloud and Software</p>
                <p><b> Locale:</b> Austin, Texas</p>
                <p><b> Relatability to DS/AI:</b> CognitiveScale manufactures augmented reality for medicinal services, insurance, finance-related administrations, and computerized trade businesses. Its innovation assists organizations with expanding client obtaining and commitment, while improving procedures like billing and claims. CognitiveScale’s products are utilized by such substantial hitters as P&G, Exxon, JP Morgan and Chase, Macy’s, and NBC.</p>
            </>
        )
    },
    {
        title: "9. H2O.ai",
        intro: () => (
            <>
                <p><b> Industry:</b> Big Data and Software</p>
                <p><b> Locale:</b> Mountain View, California</p>
                <p><b> Relatability to DS/AI:</b> H2O.ai is the maker of H2O, an open-source platform for data science and AI that is used by a huge number of associations around the world. H2O.ai supplies organizations in an assortment of industries predictive analysis and machine learning tools that help in explaining basic business challenges.</p>
            </>
        )
    },
    {
        title: "10. Zebra Medical Vision",
        intro: () => (
            <>
                <p><b> Industry:</b> Software and Healthtech</p>
                <p><b> Locale:</b> Berkeley, United States</p>
                <p><b> Relatability to DS/AI:</b> Zebra Medical Vision creates innovation for radiology and clinical imaging, upgrading the demonstrative capacities of radiologists while boosting center around patient care. Zebra works with a huge number of clinical records and images to make condition-detecting algorithms. These algorithms will at last assistance clinical experts identify high-risk patients prior and oversee the developing remaining tasks at hand with more accurate results.</p>
            </>
        )
    },
    {
        title: "11. Amazon",
        intro: () => (
            <>
                <p><b> Industry:</b> AWS, Cloud, and Software</p>
                <p><b> Locale:</b> Seattle, United States</p>
                <p><b> Relatability to DS/AI:</b> Exchange leader Amazon has put resources into both the consumer side of AI and in applications for organizations and their procedures. Alexa, the organization’s AI language collaborator, incorporated into its reverberation speaker arrangement, is notable around the world. Be that as it may, Amazon Web Services (AWS), a lot of AI software and pre-trained AI services for organizations, hasn’t yet accomplished such a great deal. AWS as of now has in excess of 10,000 clients, including Siemens, Netflix, Tinder, NFL, and NASA.</p>
            </>
        )
    },
    {
        title: "12.Apple",
        intro: () => (
            <>
                <p><b>Industry:</b> Software</p>
                <p><b>Locale : </b> California, United States</p>
                <p><b>Relatability to DS/AI:</b> Apple has been occupied with procuring AI start-ups in current years and considers Artificial Intelligence to be a critical part of its future. In December 2018, the organization authoritatively appointed John Giannandrea as head of the AI and Machine Learning division after Google poached the Scottish computer scientist. He will regulate the advancement of items, for example, Siri and the organization’s new Create ML instrument, which macOS and iOS engineers can use to make effective and direct instructional classes for their applications.</p>
            </>
        )
    },
   
    {
        title: "13. Facebook",
        intro: () => (
            <>
                    <p><b> Industry:</b> Social Networking and Software</p>
                    <p><b> Locale:</b> California, United States</p>
                    <p><b> Relatability to DS/AI:</b> Artificial Intelligence will be hugely incredible later on. So it’s nothing unexpected that Facebook is putting resources into AI. Facebook’s AI research group, known as FAIR, says it is focused on propelling the field of machine intelligence and growing new advances to furnish individuals with better approaches to convey. Mark Zuckerberg and Co. took a shot at a negotiation platform with two AIs called Alice and Bob, in addition to other things, however, finished the task after the couple started conveying in their secret language.</p>
            </>
        )
    },
    {
        title: "14. Intel",
        intro: () => (
            <>
                <p><b> Industry:</b> Chip designing, Software, VLSI, AI</p>
                <p><b> Locale:</b> California, United States</p>
                <p><b> Relatability to DS/AI:</b> Intel has additionally been on a shopping binge with regards to artificial intelligence organizations and has obtained both Nervana and Movidius just as a determination of smaller AI start-ups. Nervana empowers organizations to create explicit deep learning programming, while Movidius was established to carry AI applications to devices with insufficient performance. Intel is additionally working with Microsoft to give AI increasing speed to the Bing internet searcher.</p>
            </>
        )
    },
    {
        title: "15.Microsoft ",
        intro: () => (
            <>
               <p><b> Industry:</b> Software</p>
               <p><b> Locale:</b> Washington, United States</p>
               <p><b> Relatability to DS/AI:</b> Like Amazon, Microsoft is engaged with Artificial Intelligence on both the consumer and business sides. Cortana, Microsoft’s AI digital right hand, is in direct competition with Alexa, Siri, and Google Assistant. AI highlights are an enormous piece of the organization’s Azure Cloud administration, which gives chatbots and AI administrations to probably the greatest names in the business. Microsoft likewise bought five AI organizations in 2018 alone.</p>
            </>
        )
    },
    {
        title: "16. Nvidia",
        intro: () => (
            <>
                <p><b> Industry:</b> Software</p>
                <p><b> Locale:</b> California, United States</p>
                <p><b> Relatability to DS/AI:</b> Nvidia is one of the longest settled AI organizations and still assumes a significant job today. Nvidia’s graphics processors are the most important thing in the world for machine learning and artificial intelligence. The Delaware-based organization is dynamic in healthcare, higher education, retail, and robotics. With deep learning and GPU advancement, Nvidia is worried about coordinating AI into each degree of the vehicle, manufacturing, and autonomous driving.</p>
            </>
        )
    },
    {
        title: "17. Qualcomm",
        intro: () => (
            <>
                <p><b> Industry:</b> VLS, Chip design, and Software</p>
                <p><b> Locale:</b> California, United States</p>
                <p><b> Relatability to DS/AI:</b> Like HiSilicon with its Kirin 980, Qualcomm is another chip producer that is focused on AI. Artificial intelligence assumes a pivotal job in the Snapdragon 855 versatile platform. The chip utilizes a sign processor for AI speech, sound and picture functionalities. Qualcomm Snapdragons power the absolute most well-known cell phones available. In case you’re keen on AI in the cell phone, you should watch out for Qualcomm.</p>
            </>
        )
    },
    {
        title: "18. Twitter",
        intro: () => (
            <>
                <p><b>Industry:</b> Social Networking and Software</p>
                <p><b>Locale:</b> San Francisco, United States</p>
                <p><b>Relatability to DS/AI:</b> Like the other large parts in Silicon Valley, Twitter is tied in with getting into artificial intelligence, particularly with money. Four AI organizations have just been procured, with Magic Pony being the most remarkable for $150 million. The Australian organization is creating AI approaches for visual preparing on the web and cell phones, and Twitter is probably going to improve its frameworks for suggesting explicit tweets in clients’ courses of events with AI later on.</p>
            </>
        )
    },
    {
        title: "19. OpenAI",
        intro: () => (
            <>
               <p><b>Industry:</b> Social Networking and Software</p>
               <p><b>Locale:</b> California, United States</p>
               <p><b>Relatability to DS/AI:</b> The non-profit research group rotates around the development of AI to assist all mankind and has figured out how to keep up its open-source attitude, though large totals of money have been raised through speculations and some through acquisitions. Probably the greatest names in AI as of now work at OpenAI, including deep learning master Ilya Sutskever. Sponsors incorporate Microsoft, Amazon, and Elon Musk.</p>
            </>
        )
    },
    {
        title: "20.SenseTime ",
        intro: () => (
            <>
                <p><b>Industry:</b> Social Networking and Software</p>
                <p><b>Locale:</b> California, United States</p>
                <p><b>Relatability to DS/AI:</b> You found out about the Chinese government utilizing face recognition to fellow residents, isn’t that so? All things considered, SenseTime is the current provider of this technology. His research team is concentrating on deep learning at the University of Hong Kong, and his image recognition technology is known to be a path in front of what Google and Facebook can do. Autonomous driving is as of now SenseTime’s main focus.</p>
            </>
        )
    },
    {
        title: "Final Words",
        intro: () => (
            <>
                <p> The market for AI will become essentially over in the near future. Artificial intelligence technologies can be applied to a few enterprises and the world will be paying special attention to experts in data science, artificial intelligence, machine learning, and others. Artificial intelligence can be best utilized to work close by people to build process efficiencies and make more open doors for people to take a shot at significant undertakings without getting overpowered. AI will have a gigantic effect on businesses, and it will be quintessential for large ventures, industry influencers, and leaders to grow better AI capacities to remain on top of things.</p>
                <p> Data science is the skill and technology that every industry is craving. Having a data science skillset in the current era means having a great demanding career option in your pocket. If you are also dreaming of becoming a data scientist then check Data Science training at Codegnan. We have trained hundreds of data scientists until now.</p>
                <p> The salary of a data scientist in India ranges from INR 365k per annum to 500k per annum.</p>
                <p> Our data science training will help you master data science analytics skills through real-world projects in multiple domains like Big Data, Data Science, and Machine Learning.  The trending word of data science is waiting for you to be skilled.   </p>
            </>
        )
    }

];

const nav_interview = [
    {
        name: "Why Django is the go to framework for Python Web development? Ultimate Django Guide",
        link: "/blogs/why-django-is-the-go-to-framework-for-python-web-development-ultimate-django-guide/"
    },
    {
        name:"Data Science Course Syllabus and Subjects 2024 (PDF included) ",
        link:"/blogs/data-science-course-syllabus"
    }
];

export default function JavaCoursePage() {
    return (
        <div>
            <Helmet>
                <title>Data Science and AI Companies building tomorrow on Fast Track - Codegnan</title>
                <meta name="description" content="Data Science and Artificial Intelligence technologies are spreading like a virus." />
            </Helmet>
            <Course_template head={headdata} course={coursedata} section={courseSections} coursep={course_brief} inter_links={nav_interview} />
        </div>
    );
}
