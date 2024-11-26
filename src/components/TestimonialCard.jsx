// import React from "react";
// import "./TestimonialCard.css"; // Custom styles if needed
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
import Rectangle_main from "../photos/testimonials/Rectangle_main.png";

const TestimonialCard = () => {
  return (
    <div className="container text-center my-5 ">
      <h1 className="pt-5">What Our Students Have To Say</h1>
      <div
        className="row justify-content-center position-relative"
        style={{ height: "600px", width: "auto" , margin:"5rem 0"}}
      >
        {/* Avatar Images */}
        <div>
          <div
            className="col-md-2 position-absolute "
            style={{ top: "20%", left: "-10%" }}
          >
            <img
              src={left1}
              alt="Avatar 1"
              className="rounded-circle img-fluid shadow-sm"
            />
          </div>
          <div
            className="col-md-2 position-absolute"
            style={{ top: "50%", left: "-20%" }}
          >
            <img
              src={left2}
              alt="Avatar 2"
              className="rounded-circle img-fluid shadow-sm"
            />
          </div>
          <div
            className="col-md-2 position-absolute"
            style={{ top: "80%", left: "-10%" }}
          >
            <img
              src={left3}
              alt="Avatar 2"
              className="rounded-circle img-fluid shadow-sm"
            />
          </div>
        </div>
        <div>
          <div
            className="col-md-2 position-absolute"
            style={{ top: "20%", right: "-10%" }}
          >
            <img
              src={right1}
              alt="Avatar 3"
              className="rounded-circle img-fluid shadow-sm"
            />
          </div>
          <div
            className="col-md-2 position-absolute"
            style={{ top: "50%", right: "-20%" }}
          >
            <img
              src={right2}
              alt="Avatar 4"
              className="rounded-circle img-fluid shadow-sm"
            />
          </div>
          <div
            className="col-md-2 position-absolute"
            style={{ top: "80%", right: "-10%" }}
          >
            <img
              src={right3}
              alt="Avatar 4"
              className="rounded-circle img-fluid shadow-sm"
            />
          </div>
        </div>

        <img
          src={RectangleRed}
          alt=""
          style={{
            position: "relative",
            width: "178px",
            height: "149px",
            right: "-28rem",
            top:"1rem"
          }}
          
        />
        <img
          src={RectangleBlue}
          alt=""
          style={{ position: "relative", width: "178px", height: "149px", top:'31.5rem', left:"-28rem" }}
        />
        <div
          className="col-lg-9  shadow rounded p-3 m-5 bg-light "
          style={{ position: "absolute" ,  backgroundImage: {Rectangle_main}}}
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
                      style={{ position: "relative", right: "-40%" }}
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
