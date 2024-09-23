import './Companies.css';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from 'uuid';

function Companies() {

  const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 6,
     slidesToScroll: 2
  };

   return (
    <div className="company_container">
       <div className="companies">
         <Slider {...settings}>
           {data.map((d, index) => (
             <div key={uuidv4()} className="company-slide">
               <div className='company-logo'>
                 <img src={d.img} alt={`Company ${index}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
               </div>
             </div>
           ))}
         </Slider>
       </div>
     </div>
   );
 }



const data = [
  {
    img : './images/ezetap.webp',
  },
  {
    img : '/images/adabella1.webp',
  },
  {
    img : './images/amazon.webp',
  },
  {
    img : '/images/bankof-america.webp',
  },
  {
    img : '/images/bosch.webp',
  },
  {
    img : '/images/capgeminin.webp',
  },
  {
    img : '/images/deloitte.webp',
  },
  {
    img : '/images/gensuite.webp',
  },
  {
    img : '/images/google.webp',
  },
  {
    img : '/images/hcl.webp',
  },
  {
    img : '/images/hired.webp',
  },
  {
    img : '/images/slb.webp',
  },
  {
    img : '/images/iit-bombay.webp',
  },
  {
    img : '/images/microsoft.webp',
  },
  {
    img : '/images/mphasis.webp',
  },
  {
    img : '/images/Nielseni-iq.webp',
  },
  {
    img : '/images/pwc.webp',
  },
  {
    img : '/images/tcs.webp',
  },
  {
    img : '/images/stanford-university.webp',
  },
  {
    img : '/images/tech-mahindra.webp',
  },
  {
   
    img : '/images/teksan-logo.webp',
  },
  {
   
    img : '/images/temenos-logo-1.webp',
  },
  {
    img : '/images/truminds-logo-1.webp',
  },
  {
   
    img : '/images/voya-india-logo-1.webp',
  },
]
export default Companies;