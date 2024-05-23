import React, { useState } from 'react';
import './contact.css';

const ContactFormComponent = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, clear the form data
      setFormData({
        fullname: '',
        email: '',
        phone: '',
        address: '',
        message: ''
      });
    } else {
      // Form is not valid, do something like showing an error message
      console.log('Form submission failed. Please fill in all required fields.');
    }
  };

  const validateForm = () => {
    // Check if required fields are filled out
    return (
      formData.fullname !== '' &&
      formData.email !== '' &&
      formData.phone !== '' &&
      formData.address !== '' &&
      formData.message !== ''
    );
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <input
          type="text"
          placeholder="Full Name *"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email *"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          placeholder="Phone No *"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder="Message *"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className='mess'
        />
      </div>

      <center>
        <button className="explore-button" type="submit">Submit</button>
      </center>
    </form>
  );
};

export default ContactFormComponent;
