import './contact.css';
import Contact_Form from '../Form/Contact_Form';
import { Helmet } from 'react-helmet';

export default function Contact_us() {
    return (
        
    <div className="container1">
        <Helmet>
            <title>Contact Us - Codegnan </title>
            <meta name="description" content="To reach Codegnan IT Solutions, please use the provided contact details on our website or social media channels." />
        </Helmet>
        <div className="row">
        <div className="column ">
            <center className='contsec'>
                <h1>Get In Touch <span className='change_color'>  with our experts</span></h1><br/>
                <p>Get in touch with us using the enquiry form or contact details below.</p><br/><br/>
             
                <Contact_Form/>
            </center>
      
        </div>
        <div className="column">
            <div className='getin'>
                <h2><span className='change_color'> Have Any Questions? Our Team Will Get In Touch With You!</span></h2><br/>

                <div className="map_main-section">
                    <div>
                        <i className="fa-regular fa-envelope en-icon"></i><span> Quick Contact</span><br/><br/>
                        <p><a href="mailto:info@codegnan.com">info@codegnan.com</a></p>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div>
                        <i className="fa-solid fa-phone phone-icon"> </i> <span> Phone Number</span><br/><br/>
                        <p><a href="tel:+91 6301 341478">+91 6301 341478</a></p>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div className="row">
            <div className="column map_grid1" >
                    <h2><span className='change_color'>Bengaluru</span></h2><br/>

                    <div className="map_main-section">
                        <div>
                            <i className="fa-regular fa-envelope en-icon"></i><span> Quick Contact</span>
                                <p><a href="mailto:info@codegnan.com">info@codegnan.com</a></p>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div>
                                <i className="fa-solid fa-phone phone-icon"> </i> <span> Phone Number</span>
                                <p><a href="tel:+91 98887 38888">+91 98887 38888</a></p>
                            </div>
                            <div>
                                <i className="fa-solid fa-map-location add-icon"></i><span>Address</span>
                                <p>#951, 16th Main, BTM 2nd Stage, Bengaluru, Karnataka - 560076.</p>
                            </div><br/><br/><br/><br/>
                            <div className=''>
                                    <iframe src= "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d486.11345582790966!2d77.610212!3d12.913657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fd049571b5%3A0xd3fa32bf2babcb54!2sDestination%20Technologies!5e0!3m2!1sen!2sin!4v1712925089649!5m2!1sen!2sin"
                                        width="330"
                                        height="380"
                                        style={{ border: "0" }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className='contmap'
                                    ></iframe>
                            </div>
                    </div>
            </div>

            <div className="column map_grid1">
            <h2><span className='change_color'>Hyderabad</span></h2><br/>

                    <div className="map_main-section">
                        <div>
                            <i className="fa-regular fa-envelope en-icon"></i><span> Quick Contact</span>
                            <p><a href="mailto:info@codegnan.com">info@codegnan.com</a></p>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div>
                            <i className="fa-solid fa-phone phone-icon"> </i> <span> Phone Number</span>
                            <p><a href="tel:+91 98887 48888">+91 98887 48888</a></p>
                        </div>
                        <div>
                            <i className="fa-solid fa-map-location add-icon"></i><span>Address</span>
                            <p>Kothwal Madhava Reddy Plaza, Beside Indian Oil Petrol Bunk, JNTUH Metro Station, Nizampet X Roads, Hyderabad - 500072</p>
                        </div><br/><br/>
                        <div className=''>
                                <iframe src= "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7610.382525031249!2d78.388451!3d17.498381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91959592aba9%3A0x6bba1d480cb50bad!2sCodegnan%20Hyderabad%20-%20Python%2C%20Java%2C%20Data%20science%2C%20Machine%20learning%2C%20React%20JS%20training%20institute!5e0!3m2!1sen!2sin!4v1712923258063!5m2!1sen!2sin"
                                    width="330"
                                    height="380"
                                    style={{ border: "15px" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className='contmap'
                                ></iframe>
                        </div>
                    </div>
            </div>

            
            <div className="column map_grid1">
                <h2><span className='change_color'>Vijayawada</span></h2><br/>
                    <div className="map_main-section">                   
                        <div>
                            <i className="fa-regular fa-envelope en-icon"></i><span> Quick Contact</span>
                            <p><a href="mailto:info@codegnan.com">info@codegnan.com</a></p>
                        </div>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div>
                            <i className="fa-solid fa-phone phone-icon"> </i> <span> Phone Number</span>
                            <p><a href="tel:+91 98887 48888">+91 98887 48888</a></p>
                        </div>
                        <div>
                            <i className="fa-solid fa-map-location add-icon"></i><span>Address</span>
                            <p>40-5-19/16, Prasad Naidu Complex, P.B.Siddhartha Busstop, Moghalrajpuram, Vijayawada, Andhra Pradesh 520010</p>
                        </div><br/><br/>
                        <div className=''>
                                <iframe src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1352.4853698586353!2d80.64656358459165!3d16.50557299096045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb51a430ffad%3A0xe6ed5ede725b304b!2sCodegnan%20IT%20Solutions%3A%20Your%20Best%20Training%20Institute%20for%20Software%20Courses!5e0!3m2!1sen!2sin!4v1712558461347!5m2!1sen!2sin"
                                    width="330"
                                    height="380"
                                    style={{ border: "0" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className='contmap'
                                ></iframe>
                        </div>
                    </div>
            </div>
        </div>
    </div>


    );
}