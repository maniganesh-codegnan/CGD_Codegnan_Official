// import React from "react";
import "./TestimonialCard.css";
import left1 from "../photos/testimonials/left1.png";
import left2 from "../photos/testimonials/left2.png";
import left3 from "../photos/testimonials/left3.png";
import right1 from "../photos/testimonials/right1.png";
import right2 from "../photos/testimonials/right2.png";
import right3 from "../photos/testimonials/right3.png";
import centerMain from "../photos/testimonials/centerMain.png";
import smile from "../photos/testimonials/smile.png";
import RectangleBlue from "../photos/testimonials/RectangleBlue.png";
import RectangleRed from "../photos/testimonials/RectangleRed.png";

const TestimonialCard = () => {
  return (
    <div className="testimonial-container">
      <h1 className="testimonial-title">What Our Students Have To Say</h1>
      <div className="testimonial-content">
        {/* Left Avatars */}
        <div className="avatar-group left">
          <img src={left1} alt="Avatar 1" className="avatar" />
          <img src={left2} alt="Avatar 2" className="avatar1" />
          <img src={left3} alt="Avatar 3" className="avatar" />
        </div>

        {/* Right Avatars */}
        <div className="avatar-group right">
          <img src={right1} alt="Avatar 4" className="avatar" />
          <img src={right2} alt="Avatar 5" className="avatar2" />
          <img src={right3} alt="Avatar 6" className="avatar" />
        </div>

        {/* Decorative Elements */}
        {/* <img src={RectangleRed} alt="Red Rectangle" className="decorative red" />
        <img src={RectangleBlue} alt="Blue Rectangle" className="decorative blue" />

       
        <div className="testimonial-card">
          <div className="card-content">
            <div className="image-container">
              <img src={centerMain} alt="Main Avatar" className="main-avatar" />
            </div>
            <div className="text-container">
              <h2 className="name">PRIYA</h2>
              <div className="rating">★★★★★</div>
              <p className="testimonial-text">
                I completed a Python course at Codegnan under the guidance of Saketh sir, and his teaching style is so effective.
                He explains concepts so clearly. I highly recommend Codegnan for their excellent training. Thanks to Saketh sir
                and the entire Codegnan team!
              </p>
              <img src={smile} alt="Smile Logo" className="smile-logo" />
            </div>
          </div>
        </div> */}

<img
          src={RectangleRed}
          alt=""
          style={{
            position: "relative",
            width: "178px",
            height: "149px",
            right: "-26rem",
            top:"2rem", borderColor: 'white'
          }}
          
        />
        <img
          src={RectangleBlue}
          alt=""
          style={{ position: "relative", width: "178px", height: "149px", top:'33rem', left:"-27rem", borderColor: 'white' }}
        />
        <div
          className="col-lg-5  shadow rounded p-3 m-5 bg-light "
          style={{ position: "relative" , left:'30rem', top:'-8rem'}}
        >
          <div className="row m-5 ">
            <div
              className="container my-5"
              style={{
                maxWidth: "800px",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
              }}
            >
              <div className="row align-items-center" >
                {/* Left Side: Image */}
                <div className="col-md-4 text-center p-3">
                  <img
                    src={centerMain} // Replace this with the actual image path or URL
                    alt="Main Avatar"
                    className="img-fluid rounded"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "250px",
                      objectFit: "cover",
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                    }}
                  />
                </div>

                {/* Right Side: Content */}
                <div className="col-md-8">
                  <h2 className="font-weight-bold">PRIYA</h2>
                  <div
                    className="text-warning mb-2"
                    style={{ fontSize: "1.5rem" }}
                  >
                    {"★".repeat(5)}
                  </div>
                  <p className="text-muted" style={{ textAlign: "left" }}>
                    I completed a Python course at Codegnan under the guidance
                    of Saketh sir, and his teaching style is so effective. He
                    explains concepts so clearly. I highly recommend Codegnan
                    for their excellent training. Thanks to Saketh sir and the
                    entire Codegnan team!
                  </p>
                  <div className="text-primary">
                    <img
                      src={smile}
                      alt="smile logo"
                      style={{ position: "relative", right: "-40%", width:'80px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
