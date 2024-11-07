import React, { useState } from 'react';
import './form.css';
import axios from 'axios';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    userType: 'student',
    availability: 'morning',
    course: '' // Adding course field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Form Data added");
    console.log('Student Form Data : ',formData)
    if (validateForm()) {
      // Form is valid, clear the form data
      setFormData({
        fullname: '',
        email: '',
        phone: '',
        userType: 'student',
        availability: 'morning',
        course: '' // Resetting course field
      });
      const response = await  axios.post('http://localhost:5000/storedata',formData)
      alert("Data stored sucessfully")
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
      formData.course !== '' // Adding validation for course field
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
        <select
          placeholder="User Type"
          name="userType"
          value={formData.userType}
          onChange={handleChange}
        >
          <option value="student">Student</option>
          <option value="job seeker">Job Seeker</option>
          <option value="working professional">Working Professional</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <select
          placeholder="Availability"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
        >
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
          <option value="other">I'd like to have more details, before I decide.</option>
        </select>
      </div>
      <div className="form-group">
        <select
          placeholder="Course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          required 
        >
          <option value="">Select Course</option>
          <option value="c">C</option>
          <option value="c++">C++</option>
          <option value="java">Java</option>
          <option value="java-full-stack">Java Full Stack</option>
          <option value="python">Python</option>
          <option value="python-full-stack">Python Full Stack</option>
          <option value="machine-learning">Machine Learning</option>
          <option value="data-science">Data Science</option>
          <option value="react-js">React JS</option>
          <option value="software-testing">Software Testing</option>
          <option value="data-structures">Data Structures</option>
        </select>
      </div>
      <center>
        <button className="explore-button" type="submit">Submit</button>
      </center>
    </form>
  );
};

export default FormComponent;
