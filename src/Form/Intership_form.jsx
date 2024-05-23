import React, { useState } from 'react';
import './internshipform.css';



export default function InternForm() {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [number, setNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [completedYear, setCompletedYear] = useState('');

  const countries = [
    { name: 'Afghanistan', dialCode: '+93' },
    { name: 'Albania', dialCode: '+355' },
    { name: 'Algeria', dialCode: '+213' },

    { name: 'India', dialCode: '+91' },

  ];

  const subjects = ['Math', 'Science', 'History', 'English'];

  const years = Array.from({ length: 10 }, (_, i) => 2015 + i); // Assuming starting from 2015 up to 2024


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { name, country, number, subject, completedYear });
  
    // Reset form fields
    setName('');
    setCountry('');
    setNumber('');
    setSubject('');
    setCompletedYear('');
  };
  

  return (
    <div className="intern-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
         
          <input type="text" value={name} placeholder='Full Name' onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
   
          <select value={country} onChange={(e) => setCountry(e.target.value)} required>
            <option value="">Select Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
        
          <input type="text" value={number} placeholder='Mobile number' onChange={(e) => setNumber(e.target.value)} required />
        </div>
        <div className="form-group">

          <select value={subject} onChange={(e) => setSubject(e.target.value)} required>
            <option value="">Select Your Subject</option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
   
          <select value={completedYear} onChange={(e) => setCompletedYear(e.target.value)} required>
            <option value="">Which Year Youu have completed</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <center>
        <button type="submit">Request a call Back</button>
        </center>
       
      </form>
    </div>
  );
}
