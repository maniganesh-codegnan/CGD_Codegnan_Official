import React from "react";
import './Intern_syllabus.css';
const data = [
    {
      head: "MERN Stack",
      p: (
        <>
          ReactJS, #SQL, #MongoDB, #Express
          <ul>
            {[
              "Every Project will be deployed in Amazon Web Services Cloud.",
              "Every Project will be deployed in Amazon Web Services Cloud."
            ].map((item, index) => (
              <li key={index} style={{ marginLeft: "10px" }}>{item}</li>
            ))}
          </ul>
        </>
      )
    },
    {
      head: "MERN Stack",
      p: (
        <>
          ReactJS, #SQL, #MongoDB, #Express
          <ul>
            {[
              "Every Project will be deployed in Amazon Web Services Cloud.",
              "Every Project will be deployed in Amazon Web Services Cloud."
            ].map((item, index) => (
              <li key={index} style={{ marginLeft: "10px" }}>{item}</li>
            ))}
          </ul>
        </>
      )
    }
  ];
  


export default function InternsyllabusComp() {
    return (
        <div className="vertical-line">
            {/* <figure className="hello">
                <img src="/Icon-2.png" alt="Image 1" className="vertical-image" />
                <figcaption>
                    <h3>MERN Stack</h3>
                </figcaption>
            </figure> */}
             <div>
      {data.map((item, index) => (
        <figure key={index} className="hello">
          <img src="/Icon-2.png" alt={"Image " + (index + 1)} className="vertical-image" />
          <figcaption>
            <h3>{item.head}</h3>
            {item.p}
          </figcaption>
        </figure>
      ))}
    </div>

        </div>
    );
}
