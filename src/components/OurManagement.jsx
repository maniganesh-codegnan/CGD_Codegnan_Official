// import React from "react";
import "./OurManagement.css";
import sairam from "../photos/management/sairam.png";
import saketh from "../photos/management/saketh.png";
import mark from "../photos/management/trickmark.png"

const OurManagement = () => {
  return (
    <div className="management-section">
      <div className="meet">
      <h2 className="management-title">Meet Our Team Behind Codegnan <button>All Team members</button></h2>
      
      </div>
      
      <div className="management-team">
        
        <div className="team-card red-border">
          <img
            src={sairam}
            alt="Uppugundla Sairam"
            className="team-image"
          />
          
          <h3 className="team-name">Uppugundla Sairam</h3>
          
          <p className="team-role">Founder & Chief  <br /><br /> Executive Officer</p>
          <div className="team-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="team-card blue-border">
          <img
            src={saketh}
            alt="Kallepu Saketh Reddy"
            className="team-image"
          />
         
          
          <h3 className="team-name">Kallepu Saketh Reddy</h3>
          
          
          <p className="team-role">Co-Founder and Chief <br /><br /> Management Officer</p>
          <div className="team-social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="team-description">
        <h3 className="description-title">
          Our Top Codegnan Teams <br />
          <span className="highlight-text"> You Learn Programming, </span>
          Not Just Coding.
        </h3>
        <ul className="description-list">
          <li><img src={mark} alt="" /> Embark on a Journey with Elite Mentors - IIT Alumni and Top MNC Experts.</li>
          <li><img src={mark} alt="" /> Experience Doubt-Free Learning from Product Developers.</li>
          <li><img src={mark} alt="" /> Elevate Your Skills with Expert Master Classes.</li>
        </ul>
      </div>
      </div>

      
      </div>
  
  );
};

export default OurManagement;
