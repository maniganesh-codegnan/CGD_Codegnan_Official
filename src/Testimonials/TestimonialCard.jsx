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


// // TestimonialCard.js
// import React from 'react';
// import './TestimonialCard.css';

// export default  function ({ text, name, designation }){
//   return (
//     <div className="testimonial-card">
//       <div className="testimonial-icon">⭐</div>
//       <p className="testimonial-text">{text}</p>
//       <h3 className="testimonial-name">{name}</h3>
//       <p className="testimonial-designation">{designation}</p>
//     </div>
//   );
// };

