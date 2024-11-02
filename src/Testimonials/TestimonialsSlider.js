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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="testimonials-slider">
      <h2 className="section-title">What Our Students Have To Say</h2>
      <p className="section-subtitle">
        Witnessing our students light up with a radiant smile after acquiring newfound knowledge brings us immense joy. Each of these responses fills our hearts with gratitude and fuels our passion and purpose.
      </p>

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
