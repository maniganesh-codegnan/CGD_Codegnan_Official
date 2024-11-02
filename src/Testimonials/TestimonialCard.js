// import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ text, name, role, organization }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <p className="testimonial-text">{text}</p>
        <div className="testimonial-author">
          <h4 className="author-name">{name}</h4>
          <p className="author-role">
            {role}, <span className="author-org">{organization}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
