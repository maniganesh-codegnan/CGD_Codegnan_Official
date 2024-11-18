// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Companies from "../Companies/Companies";
// import Collaboration from "../Collabarations";
import "./testimonials.css";

const data = [
  {
    img: "./images/star-icon.jpg",
    review:
      "I am truly thankful to Codegnan IT Solutions for granting me the chance to intern with their wonderful organization. This experience has been a fantastic journey of growth and learning for me as a student, and it would not have been possible without their valuable guidance and mentorship. I am a ML student here, the course curriculum is well made with theoretical and practical knowledge. Great staff who guide you with all possibilities by clarifying your doubts.",
    name: "Poojitha Reddy",
  },
  {
    img: "./images/star-icon.jpg",
    review:
      "Flexible Timings, friendly environment and good staff!! good initiative for programme beginners in various computer languages, overall I love this experience.",
    name: "Srikanth Marni",
    title: "Student, Savitha Engineering College",
  },
  {
    img: "/images/star-icon.jpg",
    review:
      "Got to know about Codegnan through google and joined in it after going through their reviews. It has been a very encouraging and positive experience right from getting details, joining and completing my Microsoft certification exam. The staff here is very helpful in every possible way especially sairam sir has been good in helping throughout the course. I highly recommend Codegnan.",
    name: "Sasanc Reddy",
    title: "Employee, McAfee",
  },
  {
    img: "/images/star-icon.jpg",
    review:
      "Those people who want to learn data science and artificial intelligence, it is the right place. For me, it helps a lot. Faculty is very good and cooperative.",
    name: "Soumya Verma",
    title: "Student, PB Siddhartha Arts and Science College",
  },
  {
    img: "/images/star-icon.jpg",
    review:
      "I got to know codegnan through online. I attended python course. The team helped me to overcome the problems I face while programming in python language. I learned much here so that I am pretty good with my core python.",
    name: "Udanya Korupolu",
    title: "Student, KL University",
  },
];

function Testimonials() {
  alert("Our Testimonials Card");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="test-container">
      <div className="mt-20">
        <div className="stu_cards">
          <div className="slider-wrapper">
            <Slider {...settings} style={{ width: "" }}>
              {data.map((d, index) => (
                <div className="three" key={index}>
                  <center>
                    <i className="fas fa-star star"></i>
                    <i className="fas fa-star star"></i>
                    <i className="fas fa-star star"></i>
                    <i className="fas fa-star star"></i>
                    <i className="fas fa-star star"></i>
                  </center>
                  <div className="section">
                    <center>
                      <p className="review">
                        {d.review} <br />
                      </p>
                    </center>
                    <br />
                    <br />
                    <i
                      className="fa-solid fa-quote-right two"
                      style={{ float: "right", marginRight: "5px" }}
                    >
                      {" "}
                    </i>
                    <br />
                    <span className="one">
                      <h4>{d.name}</h4>
                    </span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
