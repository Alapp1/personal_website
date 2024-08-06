import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './FormStyles.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, (err) => {
      console.log('FAILED...', err);
      alert('Failed to send email. Please try again later.');
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="subject">Subject</label>
        <input 
          type="text" 
          id="subject" 
          name="subject" 
          value={formData.subject} 
          onChange={handleChange} 
          required 
        />

        <label htmlFor="message">Message</label>
        <textarea 
          rows="6" 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Type your message here" 
          required 
        />

        <button type="submit" className="btn-light">Submit</button>
      </form>
    </div>
  );
}

export default Form;
