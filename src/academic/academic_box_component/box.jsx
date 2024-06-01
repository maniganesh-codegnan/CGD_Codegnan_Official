import React from 'react';
import { Link } from 'react-router-dom';
import './box.css';

export default function Box({ box_content }) {
    return (
        <div className='box_container'>
            <img src={box_content.image} alt="" />
            <Link to={box_content.headlinklink} className='Linkcolor'><h2>{box_content.headlink}</h2></Link>
           <span><b>Trainer :</b> {box_content.trainer} ;  &nbsp;&nbsp;<b>Price :</b> {box_content.price}</span><br /><br />
            <p dangerouslySetInnerHTML={{ __html: box_content.p }}></p>
            <Link className='explore-button' to={box_content.buttonlink}>Start Course</Link>&nbsp;&nbsp;
            <span>{box_content.no_of_lessons}</span>
        </div>
    );
}
