import React from "react";
import './Intern_syllabus.css';

  


export default function InternsyllabusComp({data}) {
    return (
        <div className="vertical-linee">
           
             <div>
      {data.map((item, index) => (
        <figure key={index} className="hello">
          {/* <img src="/Icon-2.png" alt={"Image " + (index + 1)} className="vertical-image" /> */}
          <figcaption className="syllabus_style">
            <h3>{item.head}</h3>
            <span> {item.p}</span>
          </figcaption>
        </figure>
      ))}
    </div>

        </div>
    );
}
