import React, { useState } from "react";
import "./Inter_dropdown.css";



export default function Intern_dropdown( {data}) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpansion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <center>
    <div className="drop-down-container" >
      {data.map((item, index) => (
        <div key={index} className="inner-div-drop-down">
          <h3 onClick={() => toggleExpansion(index)}>
           {index+1}.{item.head} <span className="toggle-element">{expandedIndex === index ? "—" : "+"}</span>
          </h3>
          <p
            className={
              expandedIndex === index ? "expanded" : "collapsed"
            } >
            {item.p}
          </p>
          <br />
          <hr />
        </div>
      ))}
    </div>
    </center>
  );
}
