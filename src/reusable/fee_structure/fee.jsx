import './fee.css';
import React from 'react';
const servicedata = [
    {
        img: '/jap_services/coursefees-1.png',
        p: "Course Fees  ₹35K"
    },
    {
        img: '/jap_services/3995725-1.png',
        p: "Duration 100 Days"
    },
    {
        img: '/jap_services/job-oriented-1.png',
        p: "Direction Job Oriented"
    },
    {
        img: '/jap_services/86073-1.png',
        p: "Advantage Full Hands on Project"
    },
    {
        img: '/jap_services/470266-1.png',
        p: "Instant Joining"
    }
]
export default function Fee() {
    return (

        <div className='service_provided_in_training'>
            <center>

                <div className='sevices_provided'>
                    {servicedata.map((service, index) => (
                        <div key={index} className='each_service'>
                            <img src={service.img} alt="service icon" />
                            <br />
                            <h3>{service.p}</h3>
                        </div>
                    ))}
                </div>
            </center>
        </div>
    );
}







