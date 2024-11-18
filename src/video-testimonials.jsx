// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

function Video_Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const data = [
    {
      iframeSrc: "https://www.youtube.com/embed/8u9-0_9lv_w",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/FoaZMOdUv9c",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/sla1tdJyJYE",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/KTeSdis-_gw",
    },

    {
      iframeSrc: "https://www.youtube.com/embed/yAPWBNpiSxk",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/qZ2ahDRYdyo",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/j2bS_MIxVug",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/vemRDQ1Oxr0",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/k0Vl05F3rMI",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/aWuPi08aF5A",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/WpMQfbXVvm8",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/aZ7Ys42aOAU",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/m6TxV8QGjo8",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/nGwueclL5vQ",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/WwBrp5si1KY",
    },
    {
      iframeSrc: "https://www.youtube.com/embed/HfdjN0zX5ZY",
    },
  ];
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index}>
              <div
                className="video-wrapper"
                style={{ backgroundColor: "white", padding: "10px" }}
              >
                <iframe
                  width="450"
                  height="300"
                  src={d.iframeSrc}
                  title={`YouTube video player ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Video_Testimonials;

{
  /* <iframe
  width="853"
  height="480"
  src="https://www.youtube.com/embed/8u9-0_9lv_w"
  title="Why Are Students Not Getting Placed? | Full Podcast | Sairam Uppugundla | Saketh Reddy Kallepu"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>; */
}
{
  /* <iframe
  width="853"
  height="480"
  src="https://www.youtube.com/embed/FoaZMOdUv9c"
  title="Java Full Stack Ultimate Road Map by Kishor Sir | Best Software Training Institute in Hyderabad"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>; */
}

// const data = [
//     {
//       iframeSrc:
//         "https://drive.google.com/file/d/1farcJ-oDZ1H-0S20SqhfhA0JYCFADk7X/preview",
//     },
//     {
//       iframeSrc: "c",
//     },
//     {
//       iframeSrc:
//         "https://drive.google.com/file/d/14b-yijfW5nVqURcjrh0MN5DSwl2Ok5SZ/preview",
//     },
//     {
//       iframeSrc:
//         "https://drive.google.com/file/d/1SG09MPwSmVpwAdvMwZ8rbIuWIQrkbi2q/preview",
//     },
//     {
//       iframeSrc:
//         "https://drive.google.com/file/d/1lkYGo4oJjzsx0yIh8j711eJljFv8mArU/preview",
//     },
//     {
//       iframeSrc:
//         "https://drive.google.com/file/d/1FbJ2ehgoCTEP4OALZhIk6TbIGP5rBsO-/preview",
//     },
//     {
//       iframeSrc:
//         "https://drive.google.com/file/d/1Eyn4za8Zl9h0S6kxRaiOLxWg6_zoHQPG/preview",
//     },

//     {
//       iframeSrc:
//         "https://drive.google.com/file/d/1o2zspaPZ6Y4fcQJMiRJ_i_wS9dFhKQpo/preview",
//     },
//     {
//       iframeSrc:
//         "https://drive.google.com/file/d/17DJSdllLM_w0rUzZQPmBNNawbk9CgbnG/preview",
//     },
//     {
//       iframeSrc:
//         "https://drive.google.com/file/d/1hJWx4DnFBLJ5u-5g0Xb39oPIZqpAMKE-/preview",
//     },
//     {
//       iframeSrc:
//         "https://drive.google.com/file/d/16pNqkXf6PY7r7haUo8srO7P2G4JWqpqa/preview",
//     },
//     {
//       iframeSrc:
//         "https://drive.google.com/file/d/1ZX_8REMj7z318Ovoc-ndergLj-Rf-72p/preview",
//     },
//     {
//       iframeSrc:
//         "https://drive.google.com/file/d/1phIAIyhYZ5lPI5meOMUE0HBPQtEFVAXj/preview",
//     },
//   ];
