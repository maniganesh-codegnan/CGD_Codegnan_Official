// import React from 'react';
// import './Rated.css';

// export default function Course_details(props) {
//     const { duration, courseTitle, locations, paragraph,course } = props;

//     return (
//         <div className='course_container' style={customStyle}>
//             <span><i className="fa-solid fa-calendar-days calender_icon"></i></span>
//             <span id="duration">Duration: {duration}</span>
//             <h3> {courseTitle} <span className='change_color'>{course}</span></h3>
//             {paragraph}
//             <p>
//                 <strong>Classroom training : </strong>
//                 {locations.map(location => (
//                     <a key={location} href="#">{location}</a>
//                 ))}
//             </p>
//         </div>
//     );
// }


import React from 'react';
import './Rated.css';

export default function Course_details({ duration, courseTitle, locations, paragraph, course, customStyle = {} }) {
    return (
        <div className='course_container' style={customStyle}>
            <span><i className="fa-solid fa-calendar-days calender_icon"></i></span>
            <span id="duration">Duration: {duration}</span>
            <h3> {courseTitle} <span className='change_color'>{course}</span></h3>
            {paragraph}
            <p>
                <strong>Classroom training : </strong>
                {locations.map(location => (
                    <a key={location} href="#">{location}</a>
                ))}
            </p>
        </div>
    );
}

