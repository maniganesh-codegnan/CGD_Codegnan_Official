import React, { useState } from "react";
import "./FAQ.css";

const FAQ = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpansion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container">
      {data.map((item, index) => (
        <div key={index} className="faq-item">
          <h3 onClick={() => toggleExpansion(index)}>
             {/* {index + 1}. {item.head} */}
            {item.head}
            <span className="toggle-icon">{expandedIndex === index ? "−" : "+"}</span>
          </h3>
          {expandedIndex === index && (
            <div
              className="faq-content"
              dangerouslySetInnerHTML={{ __html: item.p }}
            />
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FAQ;
