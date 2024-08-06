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
    }, (err) => {
      console.log('FAILED...', err);
      alert('Failed to send email. Please try again later.');
    });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Subject</label>
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />

        <label>Message</label>
        <textarea rows="6" name="message" value={formData.message} onChange={handleChange} placeholder="Type your message here" required />

        <button type="submit" className="btn-light">Submit</button>
      </form>
    </div>
  );
}

export default Form;
