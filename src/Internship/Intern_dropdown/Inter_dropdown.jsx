import { useState } from "react";
import PropTypes from "prop-types";
import "./Inter_dropdown.css";



export default function Intern_dropdown( {data}) {
  // alert('intern_dropdown');
  console.log("intern_dropdown",data)
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
          <div
            className={
              expandedIndex === index ? "expanded" : "collapsed"
            } >
            {item.p}
          </div>
          <br />
          <hr />
        </div>
      ))}
    </div>
    </center>
  );
}
Intern_dropdown.propTypes = {
  data: PropTypes.any,
};