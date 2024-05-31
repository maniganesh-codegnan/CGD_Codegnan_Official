import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./jap_slider.css";
const data=[
    {
        p:(
            <>
            <center>
            <img src="/what_u_earn_jap/ser-1.png" alt="" />
            <p>One in huge Market for Full Stack Deelopers</p>
            </center>
            </>
        )
    },
    {
        p:(
            <>
            <center>
            <img src="/what_u_earn_jap/ser-2.png" alt="" />
            <p>Skilled and Efficient Developer</p>
            </center>
            </>
        )
    },
    {
        p:(
            <>
            <center>
            <img src="/what_u_earn_jap/ser-3.png" alt="" />
            <p>Highly paid developer</p>
            </center>
            
            </>
        )
    }
]
export default function What_you_earn(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll: 1,
        dotsClass: 'slick-dots custom-dots'
      };
    return(
        <div className="slider_benifts">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div className="each_slider_benifit" key={index}> 
                  <div className="section">
                    <span>{d.p}</span>
                  </div>
                </div>
              ))}
            </Slider>
        </div>
    );
}