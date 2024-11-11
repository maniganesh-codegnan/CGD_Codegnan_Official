// TestimonialsSlider.js
import { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import './TestimonialsSlider.css';

const testimonialsData = [
  {
    text: "Those people who want to learn about data science and artificial intelligence, it is the right place. For me, it helps a lot. Faculty is very good and cooperative.",
    name: "Soumya Verma",
    role: "Student",
    organization: "PB Siddhartha Arts and Science College"
  },
  {
    text: "Got to know about Codegnan through Google and joined after reading the reviews. It has been a very encouraging and positive experience.",
    name: "Sasanc Reddy",
    role: "Employee",
    organization: "McAfee"
  },
  {
    text: "I learned about Codegnan online. I attended a Python course, and the team helped me overcome the programming problems I faced.",
    name: "Dandanya Korupolu",
    role: "Student",
    organization: "KL University"
  }
];

const TestimonialsSlider = () => {
  // alert('TestimonialsSlider')
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonials-slider">
      {/* <h2 className="section-title">What Our Students Have To Say</h2>
      <p className="section-title">
        Witnessing our students light up with a radiant smile after acquiring newfound knowledge brings us immense joy. Each of these responses fills our hearts with gratitude and fuels our passion and purpose.
      </p> */}

      <div className="testimonial-cards">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            {index === currentIndex && <TestimonialCard {...testimonial} />}
          </div>
        ))}
      </div>

      <div className="slider-dots">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;


// // Testimonials.js
// import React from 'react';
// import TestimonialCard from './TestimonialCard';
// import './TestimonialsSlider.css';

// export default  function TestimonialsSlider(){
//   const testimonialsData = [
//     {
//       text: "I got to know Codegnan through online. I attended the Python course. The team helped me to overcome the problems I face while programming in Python. I learned much here, so that I'm pretty good with my core Python.",
//       name: "Udanya Korupolu",
//       designation: "Student, KL University",
//     },
//     {
//       text: "Flexible timings, friendly environment, and good staff! Good initiative for beginners in programming, overall I love this experience.",
//       name: "Soumya Verma",
//       designation: "Student, PB Siddhartha Arts and Science College",
//     },
//     {
//       text: "The team is very supportive and encouraging. Great place to learn new technologies and develop skills.",
//       name: "Srikanth Marni",
//       designation: "Student, Savitha Engineering College",
//     },
//   ];

//   return (
//     <div className="testimonials">
//       <h2 className="testimonials-title">What Our Students Have To Say</h2>
//       <p className="testimonials-description">
//         Witnessing our students light up with a radiant smile after acquiring newfound knowledge brings us immense joy. Each of these responses fills our hearts with gratitude and fuels our passion and purpose.
//       </p>
//      <div className="testimonials-list">
//         {testimonialsData.map((testimonial, index) => (
//           <TestimonialCard
//             key={index}
//             text={testimonial.text}
//             name={testimonial.name}
//             designation={testimonial.designation}
//           />
//         ))}
//       </div> 
//       <div className="testimonial-dots">
//         <span className="dot"></span>
//         <span className="dot"></span>
//         <span className="dot"></span>
//       </div> 
//     </div>
//   );
// };


